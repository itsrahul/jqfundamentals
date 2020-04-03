let $mod = $("div.module");

$mod.hide();

let $list = $("<ul> New List </ul>").insertBefore($mod.first());

$mod.each(function(){

  let item = $(`<li> ${$(this).find('h2').prop("innerHTML")} </li>`).appendTo($list);

  let $_this = $(this);
  
  item.on("click", function() {
    $_this.show().siblings(".module").hide();
    $(this).addClass("current").siblings().removeClass("current")
  })
})

$mod.first().show();
