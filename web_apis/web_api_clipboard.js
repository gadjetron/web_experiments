navigator.clipboard.writeText('text to clipboard').then(() => {
  console.log('Writing is comlete!')
})

navigator.clipboard.readText().then((text) => {
  console.log(text)
})

document.oncopy = function (event) {
  console.log(event.clipboardData)
}