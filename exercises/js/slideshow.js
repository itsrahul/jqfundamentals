class SlideShow
{
  constructor(details)
  {
    this.main = details.displayElement;
    this.item = details.slideshowElement;
    this.displayClass = details.className;
    this.displayed = null;
    this.toBeDisplayed = null;
  }

  startSlideshow()
  {
    this.main.prepend(this.item);
    this.item.children()
      .hide()
      .first().show().addClass(this.displayClass);
    this.runSlideshow();
  }

  runSlideshow()
  {
    this.displayed = $(this.item.find("li." + this.displayClass));

    if(this.displayed.prop("nextElementSibling") == null)
    {
      this.toBeDisplayed = this.displayed.parent().prop("firstElementChild");
    }
    else
    {
      this.toBeDisplayed = this.displayed.prop("nextElementSibling");
    }

    this.displayed
      .removeClass(this.displayClass)
      .fadeOut()
      .promise()
      .done(() => {
        $(this.toBeDisplayed)
          .addClass(this.displayClass)
          .fadeIn()
          .delay(4000)
          .promise()
          .done( this.runSlideshow());
      });
  }
}

$(document).ready(function() {
  let details = {
    displayElement: $("div#main"),
    slideshowElement: $("ul#slideshow"),
    className: "onDisplay",
  }
  let slideshowList = new SlideShow(details);
  slideshowList.startSlideshow();
});
