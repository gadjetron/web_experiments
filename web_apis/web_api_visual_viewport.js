window.onscroll = function (event) {
  console.log(window.visualViewport)
}

var visualViewport = window.visualViewport

visualViewport.onresize = function (event) {
  console.log('Resizing of viewport was happened!')
  console.log(visualViewport)
}

visualViewport.onscroll = function (event) {
  console.log('Scrolling of viewport was happened!')
  console.log(visualViewport)
}