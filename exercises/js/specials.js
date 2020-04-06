$(document).ready(function() {

  let specialsForm = $("form[action='specials.html']")
  specialsForm.find('li.buttons').remove();
  
  let localDiv = $("<div>").addClass("new");
  localDiv.insertAfter(specialsForm);
  
  function displayResult(data, day)
  {
    let offer = data[day];
  
    let title = $("<h3>").text(`${offer.title}`);
    let details = $("<p>").text(`${offer.text}`);
    let img = $("<img>").prop("src", `${offer.image}`);
  
    localDiv.prop("innerHTML", "");
    title.appendTo(localDiv);
    details.appendTo(localDiv);
    img.appendTo(localDiv);
  
  
  }
  
  specialsForm.on("change", function()
  {
    let day = $(event.target).val();
  
    $.ajax({
      url: "data/specials.json",
      type: "get",
      dataType: "json",
      success: function(data){
        displayResult(data, day);
      }    
    });
  
  });
  
  
});    
