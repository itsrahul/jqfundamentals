$(document).ready(function() {
  
  let input = $("input[name=q]");
  let label = $("label[for=q]").remove().prop("textContent");
  input.val(label).addClass("hint")
    .on("focus", function(){ 
      $(event.target).val("").removeClass("hint");
  })
    .on("blur", function(){
      if($(event.target).val().trim() == "")
      {
        $(event.target).val(label).addClass("hint");
      }
  });
  //insted of input use event 
});
