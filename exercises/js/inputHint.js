let input = $("input[name=q]");
let label = $("label[for=q]").remove().prop("textContent");

input.val(label).addClass("hint")
  .on("focus", function(){ 
    input.val("").removeClass("hint");
})
  .on("blur", function(){
    if(input.val().trim() == "")
    {
      input.val(label).addClass("hint");
    }
});
