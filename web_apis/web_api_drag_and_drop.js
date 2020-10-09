// --------------- Draggable element definition ------------

let draggable_element = document.createElement('div')
draggable_element.setAttribute('draggable', true)

draggable_element.textContent = 'draggable element'

draggable_element.style.border = '1px solid black'
draggable_element.style.padding = '0.5em'
draggable_element.style.margin = '0.5em 0'


let dropzone_animation_keyframes = [
  {opacity: 1},
  {opacity: 0.5},
  {opacity: 1}
]

let dropzone_animation_options = {
  duration: 1000,
  iterations: Infinity
}

let dropzone_animation

                  // Event handlers

// fired when the user starts dragging an element or text selection.
draggable_element.ondragstart = function (event) {
  console.log('Drag operation was started!')

  event.dataTransfer.setData('text/html', draggable_element.outerHTML)

  dropzone_animation = dropzone_block.animate(
    dropzone_animation_keyframes, 
    dropzone_animation_options
  )

  dropzone_animation.play()
}

// fired every few hundred milliseconds as an element or text selection 
// is being dragged by the user.
draggable_element.ondrag = function (event) {
  console.log('Drag operation in progress!')
}

// fired when a dragged element or text selection leaves a valid drop target.
draggable_element.ondragleave = function (event) {
  console.log(`Draggable element leaves a dropzone (from '${event.type}' handler)`)
}

// fired when an element is no longer the drag operation's immediate selection target.
// draggable_element.ondragexit = function (event) {
//   console.log('Drag operation was exited!')
// }

// fired when a drag operation is being ended 
// (by releasing a mouse button or hitting the escape key).
draggable_element.ondragend = function (event) {
  dropzone_animation.cancel()

  console.log('Drag operation was ended!')
}

document.body.appendChild(draggable_element)

// --------------- Drop zone definition ---------------- 

let dropzone_block = document.createElement('div')

dropzone_block.id = 'dropzone_block'
dropzone_block.textContent = 'Drop here...'

dropzone_block.style.color = 'red'
dropzone_block.style.backgroundColor = 'lightgrey'
dropzone_block.style.border = '1px solid black'
dropzone_block.style.padding = '0.5em'
dropzone_block.style.minHeight = '50vh'
dropzone_block.style.boxShadow = '0 0 5px inset'

dropzone_block.style.display = 'flex'
dropzone_block.style.flexDirection = 'column'
dropzone_block.style.alignItems = 'center'
dropzone_block.style.justifyContent = 'center'

                  // Event handlers

// fired when a dragged element or text selection enters a valid drop target.
dropzone_block.ondragenter = function (event) {
  event.preventDefault()
  event.dropEffect = 'copy'

  dropzone_animation.pause()
  
//   dropzone_block.textContent = 'Give me this...'

  console.log(`Dropzone says: "I'm ready to accept element!". Do one more step - drop it here!`)
}

// fired when an element or text selection 
// is being dragged over a valid drop target 
// (every few hundred milliseconds).
// 
// The event is fired on the drop target(s)
dropzone_block.ondragover = function (event) {
  event.preventDefault()  
  event.dropEffect = 'copy'

  console.log('Element is flying over dropzone!')
}

// fired when a dragged element or text selection leaves a valid drop target.
dropzone_block.ondragleave = function (event) {
  dropzone_animation.play()

//   dropzone_block.textContent = 'Oh no! Give it back to me...'

  console.log('Element leaves dropzone!')
}

// fired when an element or text selection is dropped on a valid drop target.
dropzone_block.ondrop = function (event) {

  let html_data = event.dataTransfer.getData('text/html')
  dropzone_block.innerHTML += html_data
  
//   this.innerHTML = 'Thank you! Give me more...' + html_data

  console.log('Element was moved to dropzone!')
}

document.body.appendChild(dropzone_block)
dropzone_block.scrollIntoView()

// styles for 'dropzone_block'
// 
// #dropzone_block:-moz-drag-over {
//   border: 1px solid black;
// }
