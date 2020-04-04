$(document).ready(function() {

  $(this).on("click","div#blog ul li", function() {
    $(this).find(".excerpt").slideDown();
    $(this).siblings().find(".excerpt").slideUp();
  });
});
