$(document).ready(function() {

  class GetData
  {
    constructor(form)
    {
      this.specialsForm = $(form);      
      this.localDiv = $("<div>");
      this.specialsForm.find('li.buttons').remove();
      this.localDiv.insertAfter(this.specialsForm);
    }

    displayResult(data, day)
    {
      if(day)
      {
        let offer = data[day];
        let title = $("<h3>").text(`${offer.title}`);
        let details = $("<p>").text(`${offer.text}`);
        let img = $("<img>").prop("src", `${offer.image}`);
        this.localDiv
          .prop("innerHTML", "")
          .append(title)
          .append(details)
          .append(img)
          .css('color', offer.color);;
      }
    }

    loadDataFrom(jsonUrl)
    {
      this.specialsForm.on("change", () =>
      {
        let day = $(event.target).val();
        $.ajax({
          url: jsonUrl,
          type: "get",
          dataType: "json",
          success: (data) => {
            this.displayResult(data, day);
          }
        });
      });
    }
  }
  let specials = new GetData("form[action='specials.html']");
  specials.loadDataFrom("data/specials.json");
});
