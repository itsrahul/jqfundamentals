$(document).ready(function() {
class HoverChildren
{
  constructor(parentElement)
  {
    this.childrenElements = $(parentElement).children();
  }

  addHover()
  {
    for(let item of this.childrenElements)
    {
      $(item).hover( () => this.hoverIn(item), () => this.hoverOut(item) );
    }
  }

  hoverIn(item)
  {
    $(item).addClass("selected").find('ul').show();
  }

  hoverOut(item)
  {
    $(item).removeClass("selected").find('ul').hide();
  }

};

let navBar = new HoverChildren("#nav");
navBar.addHover();

});
