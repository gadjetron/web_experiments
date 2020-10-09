alert('Please, start select text on page to see it in console')

document.onselectionchange = function (event) {
//   console.log(event)
  console.clear()

  console.log('Selection started: \n')
}

document.onselectionchange = function (event) {
//   console.log(event)
  console.clear()

  let selected_text = document.getSelection()

  console.log(selected_text)

  // 'document.getSelection()' can be used instead of 'window.getSelection()'
  console.log('Selected text: \n' + selected_text)
}

// select all text inside of selected element
document.onclick = function (event) {
    console.log(document.getSelection().selectAllChildren(event.target))
//     document.getSelection().deleteFromDocument()
}

/* 
   Check to see if anything inside the body element is selected 
*/
//  console.log(window.getSelection().containsNode(document.body, true));

/* 
   Place the caret at the beginning of an HTML document's body. 
*/
// var body = document.getElementsByTagName("body")[0];
// window.getSelection().collapse(body,0);

/*
   Partial collapsing
*/
//  window.getSelection().collapseToStart();
//  window.getSelection().collapseToEnd();

/*
   sets the selection to be a range 
   including all or parts of two specified DOM nodes, 
   and any content located between them.
*/
// window.getSelection().setBaseAndExtent(anchorNode,anchorOffset,focusNode,focusOffset)


/* 
   Select all STRONG elements in an HTML document 
*/
// var strongs = document.getElementsByTagName("strong");
// var selection = window.getSelection();
// 
// if(selection.rangeCount > 0) {
//    selection.removeAllRanges();
// }
// 
// for(var i = 0; i < strongs.length; i++) {
//   var range = document.createRange();
//   range.selectNode(strongs[i]);
//   selection.addRange(range);
// }
