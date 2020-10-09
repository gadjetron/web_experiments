let blocks = ['block1', 'block2', 'block3', 'block4', 'block5'].map((block_text) => {
  let div = document.createElement('div')
  
  div.textContent = block_text
  div.style.textAlign = 'center'
  div.style.padding = '0.5em'

  return div
})

console.log(blocks)

var max_index = blocks.length
var current_index = 0

var append_nodes_asyncly = setInterval(() => {
   if (current_index < max_index) {
     let block = blocks[current_index]
     
     document.body.append(block)
     block.scrollIntoView()

     current_index += 1
   }
}, 1000)
 
// Select the node that will be observed for mutations
let target_node = document.body

// Options for the observer (which mutations to observe)
let observer_config = { 
  // attributes: true, 
  childList: true, 
  // subtree: true 
}

// Callback function to execute when mutations are observed
let observer_callback = function (mutations_list, observer) {
  console.log('Mutations list: ', mutations_list) 
  
  for (let mutation of mutations_list) {
    switch (mutation.type) {
      case 'childList':
        console.log('"childList" mutation: ', mutation);
        break;
//       case 'attributes':
//         console.log('The ' + mutation.attributeName + ' attribute was modified.');
//         break;
//       case 'subtree':
//         console.log('The subtree was modified.');
//         break;
    }
  }
}

// Create an observer instance linked to the callback function
let document_observer = new MutationObserver(observer_callback);

// Start observing the target node for configured mutations
document_observer.observe(target_node, observer_config);

// Later, you can stop observing
// document_observer.disconnect();