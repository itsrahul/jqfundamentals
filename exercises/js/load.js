$(document).ready(function() {  
  $('div.module#blog li h3').each(function(){

    let $div_element = $('<div>').addClass("excerpt");
    let blogHeader = $(this)
    blogHeader.after($div_element);
    blogHeader.data("location", $div_element)

  })
  .on("click", function(event){
    
    let blogHeader = $(this);
    let link = blogHeader.find("a").attr("href").replace('#', ' #');
    let local_div = blogHeader.data("location");
    local_div.load('data/' + link);
    event.preventDefault();
  })

});
