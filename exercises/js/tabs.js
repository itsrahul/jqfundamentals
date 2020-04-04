$(document).ready(function() {

  let $mod = $("div.module").hide();
  let $list = $('<ul>').text('New List');
  $list.insertBefore($mod.first());

  $mod.each(function(){

    let text = $(this).find('h2').prop("innerHTML");
    let $item = $('<li>').text(`${text}`);
    $item.appendTo($list);

    let $_this = $(this);

    $item.on("click", function() {
      $_this.show().siblings(".module").hide();
      $(this).addClass("current").siblings().removeClass("current")
    })
  });

  $mod.first().show();
});
