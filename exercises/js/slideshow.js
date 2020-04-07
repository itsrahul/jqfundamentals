class SlideShow
{
  constructor(listItem, position)
  {
    this.item = $(listItem);
    this.main = $(position);
  }
  startSlideshow()
  {
    this.main.prepend(this.item);
    this.item.children().each(function()
    {
      $(this).hide();
    });

    this.item
      .find("li:first")
      .show()
      .addClass("onDisplay");
    this.runSlideshow();
  }

  runSlideshow()
  {
    setInterval( () => {
      let displayed = $(this.item.find("li.onDisplay"));
      if(displayed.prop("nextElementSibling") == null)
      {
        this.displayNext(displayed, displayed.parent().prop("firstElementChild") );
      }
      else
      {
        this.displayNext(displayed, displayed.prop("nextElementSibling") );
      }
    }, 4000);
  }

  displayNext(hideItem, showItem)
  {
    hideItem
      .removeClass("onDisplay")
      .fadeOut()
      .promise()
      .done(function(){
        $(showItem).fadeIn().addClass("onDisplay");
      });
  }
}

$(document).ready(function() {
  let slideshowList = new SlideShow("ul#slideshow", "div#main");
  slideshowList.startSlideshow();
})
