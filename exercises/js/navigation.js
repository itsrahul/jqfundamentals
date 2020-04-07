class HoverChildren
{
  constructor(parentElement)
  {
    this.childrenElements = $(parentElement).children();
  }

  addHover()
  {
    this.childrenElements.each((_i, element) => {
      $(element).hover( () => this.hoverIn(), () => this.hoverOut() );
    })
  }

  hoverIn()
  {
    $(event.target).addClass("selected").find('ul').show();
  }

  hoverOut()
  {
    $(event.target).removeClass("selected").find('ul').hide();
  }
};

$(document).ready(function() {
  let navBar = new HoverChildren("#nav");
  navBar.addHover();
});
