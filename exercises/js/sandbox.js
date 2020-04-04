// Selection ----------------------------------- //

let mod = $('div.module');
// console.log('mod :', mod);

let li2 = $('#myList #myListItem')// best way, as we are selectring myListItem inside the myList directly.
let li1 = $('#myListItem');
let li3 = $('#myList li:eq(2)');

console.log('li1 :', li1);
console.log('li2 :', li2);
console.log('li3 :', li3);

let hid =  $(":hidden");
console.log('hid :', hid.length);

let imageWithAlt = $("img[alt]");
console.log('alt :', imageWithAlt.length);

let tb = $('#fruits tbody tr:odd')
console.log('tb :', tb);

let ip = $("input.input_text").prop("name");
let lb = $( `label[for=${ip}`)
console.log('ip :', lb);

// Traversal ----------------------------------- //

$('img').each(function() {
  console.log( $(this).attr("alt") );
});

$("input.input_text").parent("form").addClass("myClass");
//specify parent

$("#myList .current").removeClass("current").next().addClass("current");

$("select[name=day]").parent("form").next().find("input.input_submit");

$('#slideshow li:first').addClass("current").siblings().addClass("disabled");

// Manipulation ----------------------------------- //

let $fragment = $(document.createDocumentFragment());

for ( let i=0; i<5; i++) {
  let $item = $('<li>').text(`New item ${i}`);
  $fragment.append($item); 
}
let myList = $('#myList');
myList.append($fragment);
//document fragment, add all item into fragemnt add that to mylist 



$("#myList li:odd").remove();

$("<h2> Another heading </h2> <p> Another paragraph</p>").appendTo($("div.module").last());

$("<option value=\"wednesday\">Wednesday</option>").appendTo($("select[name=day]"));

$('<div class="module">').append($('img:last').clone()).appendTo('div.module:last');
