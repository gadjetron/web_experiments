// // MediaConfiguration to be tested
// const mediaConfig = {
//     type : 'file', 
//     audio : {
//         contentType : "audio/ogg",
//         channels : 2,   
//         bitrate : 132700, 
//         samplerate : 5200 
//      }, 
// }; 

// // check support and performance 
// navigator.mediaCapabilities.decodingInfo(mediaConfig).then((result) => {
//     console.log('This configuration is ' +  (result.supported ? '' : 'not ') + 'supported.')
// });

// -------------------------------------------------------------

// 
// TextDecoder class 
// 

let win1251_decoder = new TextDecoder('windows-1251');
console.log('encoding: ', win1251_decoder.encoding)
console.log('is fatal: ', win1251_decoder.fatal)
console.log('BOM is ignored:', win1251_decoder.ignoreBOM)

let array = [207, 240, 232, 226, 229, 242, 44, 32, 236, 232, 240, 33];
let bytes = new Uint8Array(array);

console.group('bytes array:')
console.log(array)
console.groupEnd('bytes array:')

console.group('encoded bytes array:')
console.log(win1251_decoder.decode(bytes)); // Привет, мир!
console.groupEnd('encoded bytes array:')

console.log('----------------------------------')
// 
// streamed decoding
// 
let win1251decoder_streamed = new TextDecoder('windows-1251');

let chunks = ['this', 'are', 'chunks', 'of', 'decoded', 'text'].map((chunk) => {
  let chunk_chars_codes = []

  for (letter of chunk) {
    chunk_chars_codes.push(letter.charCodeAt(0))
  }

  return (new Uint16Array(chunk_chars_codes))
});

console.group('encoded text:')
console.log(chunks)
console.groupEnd('encoded text:')

console.group('decoded text:')

for (chunk in chunks){
  let decoded_value;

  if (!(chunk == chunks.length - 1)) {
    decoded_value = win1251decoder_streamed.decode(chunks[chunk], {stream: true})
    console.log(decoded_value)
  }
  else {
    decoded_value = win1251decoder_streamed.decode(chunks[chunk], {stream: false})
    console.log(decoded_value)
  }
}

console.groupEnd('decoded text:')

console.log('-----------------------------------')

// -------------------------------------------------------------

// 
// TextEncoder class 
// 

let utf8_encoder = new TextEncoder('utf-8');
console.log('encoding: ', utf8_encoder.encoding)

let text_for_encoding = 'This is a text for encoding';

console.group('text for encoding')
console.log(text_for_encoding)
console.groupEnd('text for encoding')

console.group('encoded bytes array:')
console.log(utf8_encoder.encode(text_for_encoding)); // Привет, мир!
console.groupEnd('encoded bytes array:')
