$(document).ready(function() {
  $(this).on("click","div#blog ul li", function() {
    let blogListItem = $(this);
    blogListItem.find(".excerpt").slideDown();
    blogListItem.siblings().find(".excerpt").slideUp();
  })
});
