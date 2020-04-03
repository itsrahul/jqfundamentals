console.log('object :', $('div#blog ul')); 


$('div#blog ul').children().each(function(){

  $(this).on("click", function() {

    $(this).find(".excerpt").slideDown();
    $(this).siblings().find(".excerpt").slideUp();
  })
})
