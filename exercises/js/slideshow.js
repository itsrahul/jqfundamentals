$(document).ready(function() {

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
      this.item.find("li").each(function(){
        $(this).hide();
      });

      this.item.find("li:first").show().addClass("onDisplay");

      this.runSlideshow();
    }

    runSlideshow()
    {
      setInterval( () => {
        let displayed = $(this.item.find("li.onDisplay"));
    
        if(displayed.prop("nextElementSibling") == null)
        {
          this.displayNext(displayed, displayed.prevUntil("ul").last() );
        }
        else
        {
          this.displayNext(displayed, $(displayed.prop("nextElementSibling")) );
        }
    
      }, 4000);
    }

    displayNext(hideItem, showItem)
    {
      hideItem.removeClass("onDisplay").fadeOut( function(){
          showItem.fadeIn().addClass("onDisplay");
        });
    }
    
  }

  let slideshowList = new SlideShow("ul#slideshow", "div#main");
  slideshowList.startSlideshow();
 
})
