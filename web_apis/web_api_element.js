alert('Click on desired element to see it in console')

window.onclick = function (event) {
  console.clear()

  let element = event.target

  console.log('Selected element: ', element)
  
  console.log('Element attributes: ', element.attributes)

  console.log('Element inner HTML: ', element.innerHTML)

  console.log('Element outer HTML: ', element.outerHTML)

  console.log('Element closest "div" ancestor: ', element.closest('div'))
  
  console.log('Element computed style map: ', 
               Object.fromEntries(element.computedStyleMap().entries()))

  console.log('Element bounding client rect (relatively to viewport): ', 
              element.getBoundingClientRect())

  console.log('Element bounding client rects (relatively to viewport): ', 
              element.getClientRects())  

/* position
     <!-- beforebegin -->
     <p>
     <!-- afterbegin -->
     foo
     <!-- beforeend -->
     </p>
     <!-- afterend -->
   
   element
     The element to be inserted into the tree.
*/   
// element.insertAdjacentElement(position, element);

/*
   position: same as in 'insertAdjacentElement()'
   text: text to be parsed as HTML or XML and inserted into tree
*/
// element.insertAdjacentHTML(position, text);

/*
   position: same as in 'insertAdjacentElement()'
   text: text to be parsed as HTML or XML and inserted into tree

   Note: The beforebegin and afterend positions work only 
         if the node is in a tree and has an element parent.
*/
// element.insertAdjacentText(position, text);

  console.log('Element has "text-bold" class? ', element.matches('.text-bold'))
}