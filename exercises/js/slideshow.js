$(document).ready(function() {
  
  let $list = $("ul#slideshow");
  let $main = $("div#main");

  $main.prepend($list);
  
  $list.find("li").each(function(){
    $(this).hide();
  });

  $("ul#slideshow li:first").show().addClass("slide");
  
  setInterval(function(){
    let displayed = $("ul#slideshow li.slide");

    if(displayed.prop("nextElementSibling") == null)
    {
      $(displayed).removeClass("slide").fadeOut(400, "linear", function(){
        $(displayed).prevUntil("ul").last().fadeIn(400, "linear").addClass("slide");
      })
    }
    else
    {
      $(displayed).removeClass("slide").fadeOut(400, "linear", function(){
        $(displayed.prop("nextElementSibling")).fadeIn(400, "linear").addClass("slide");
      });
    }

  }, 4000);

})
