class GetData
{
  constructor(form)
  {
    this.specialsForm = $(form);
    this.localDiv = $("<div>");
    this.specialsForm.find('li.buttons').remove();
    this.localDiv.insertAfter(this.specialsForm);
  }

  displayResult(offerDetails)
  {
    let title = $("<h3>").text(`${offerDetails.title}`);
    let details = $("<p>").text(`${offerDetails.text}`);
    let img = $("<img>").prop("src", `${offerDetails.image}`);
    this.localDiv
      .prop("innerHTML", "")
      .append(title)
      .append(details)
      .append(img)
      .css('color', offerDetails.color);
  }

  loadDataFrom(jsonUrl)
  {
    this.specialsForm.on("change", () => {
      let day = $(event.target).val();
      $.ajax({
        url: jsonUrl,
        type: "get",
        dataType: "json",
        success: (data) => {
          if(day)
          {
            this.displayResult(data[day]);
          }
        }
      });
    });
  }
}

$(document).ready(function() {
  let specials = new GetData("form[action='specials.html']");
  specials.loadDataFrom("data/specials.json");
});
