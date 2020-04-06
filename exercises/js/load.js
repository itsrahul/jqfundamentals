$(document).ready(function() {
  
  $('div.module#blog li h3').each(function(){

    $div_element = $('<div>').addClass("excerpt");
    $(this).after($div_element);
    $(this).data("location", $div_element)
  })
  .on("click", function(event){
  
    let link = $(this).find("a").attr("href").replace('#', ' #');
    let local_div = $(this).data("location");
    local_div.load('data/' + link);
    event.preventDefault();
  })

});
