console.log('User agent info: ', window.navigator)

// navigator.sendBeacon('http://127.0.0.1:5500/index.html', {data: 'data'})

console.log('Navigator storage manager:')
navigator.storage.estimate().then((data) => {console.log(data)})

// navigator.registerProtocolHandler("web+burger",
//                                   "https://burgers.example.com/?burger=%s",
//                                   "Burger handler");

// navigator.share({
//   title: document.title,
//   text: 'Hello World',
//   url: 'https://developer.mozilla.org',
// }); // share the URL of MDN

// window.navigator.vibrate(200); // vibrate for 200ms

// 
// Each value indicates a number of milliseconds to vibrate or pause, in alternation,
// i.e pattern is 'vibrate' -> 'pause' -> 'vibrate' -> 'pause' ...
// 
// Vibrate 'SOS' in Morse.
// window.navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]);
