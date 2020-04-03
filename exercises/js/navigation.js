$("#nav").children().each(function(){
  
  $(this).hover(
    function(){
        $(this).addClass("li selected").find('ul').show();
      
    }, function(){
      $(this).removeClass("selected").find('ul').hide();
    }
  );

})
