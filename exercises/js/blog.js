$('div#blog ul li').each(function(){

  $(this).on("click", function() {

    $(this).find(".excerpt").slideDown();
    $(this).siblings().find(".excerpt").slideUp();
  })
})
