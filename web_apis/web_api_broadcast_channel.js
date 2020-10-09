/*
  The Broadcast Channel API allows simple communication 
  between browsing contexts  (that is windows, tabs, frames, or iframes) 
  with the same origin (usually pages from the same site).

  Broadcast channels are named and bound to a specific origin.

*/

var broadcast_channel = new BroadcastChannel('test_broadcast_channel')

broadcast_channel.onmessage = function (event) {
  console.log('Inside a "message" handler...')
  console.log('Timestamp: ', event.timeStamp)
  console.log(event)
}

broadcast_channel.onmessageerror = function (event) {
  console.log('Inside a "messageerror" handler...')
  console.log('Timestamp: ', event.timeStamp)
  console.log(event)
}

console.log(broadcast_channel)

broadcast_channel.postMessage("Message from 'test_broadcast_channel'")

// broadcast_channel.close()
