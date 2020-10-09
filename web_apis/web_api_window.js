console.log(window)

console.log(window.clientInformation)

console.groupCollapsed('Document body computed styles: ')
console.log(window.getComputedStyle(document.body))
console.groupEnd('Document body computed styles: ')

window.onresize = function (event) {
//   console.log(event)

//   console.log(window.matchMedia("(min-width: 400px)"))
  
  if (window.matchMedia("(min-width : 400px)").matches) {
    document.body.style.color = 'lightblue' 
  }
  else {
    document.body.style.color = '' 
  }  
}

console.log(window.performance)

// window.print()

window.scroll({
  top: '100%',
  behavior: 'smooth'
});

console.log(window.scrollY)

// window.scrollBy({
//   top: 100,
//   behavior: 'smooth'
// });

console.log('Available voices: ', window.speechSynthesis.getVoices())

// window.stop()

// Returns a reference to the topmost window in the window hierarchy.
console.log('Top window: ', window.top)

// visual viewport for a given window.
console.log('visual viewport: ', window.visualViewport)

var encodedData = window.btoa('Hello, world'); // encode a string
console.log(encodedData)

var decodedData = window.atob(encodedData); // decode the string
console.log(decodedData)

// window.createImageBitmap(image[, options]).then(function(response) { ... });
// window.createImageBitmap(image, sx, sy, sw, sh[, options]).then(function(response) { ... });

// window.setInterval(() => {
//   console.log(new Date().getTime())

//   window.setTimeout(() => {
//     console.clear()
//   }, 1200)  
// }, 1000)

// window.clearTimeout
// window.clearInterval

console.log('style media: ', window.styleMedia)

console.log('Is secure context: ', window.isSecureContext)

console.log('window origin: ', window.origin)