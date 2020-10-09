document.documentElement.requestFullscreen({navigationUI: 'show'})

setTimeout(() => {return}, 1000)

console.log(document.fullscreenElement)
console.log(document.fullscreenEnabled)

document.webkitExitFullscreen()

document.onfullscreenchange = function (event) {
  console.log('Fullscreen mode is changed!')
}

document.onfullscreenerror = function (event) {
  console.log('Error is occured while entering or disabling fullscreen mode!')
}

document.body.onfullscreenchange = function (event) {
  console.log('Element fullscreen mode is changed!')
}

document.body.onfullscreenerror = function (event) {
  console.log('Error is occured while entering or disabling fullscreen mode on element!')
}


document.webkitExitFullscreen()