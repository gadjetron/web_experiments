// -------------- Speech Synthesis API ----------------

let available_voices = speechSynthesis.getVoices()
console.log("Available voices: ", available_voices);

window.onmouseover = function (event) {
  let raw_text = event.target.textContent 

  if (!raw_text) {
    console.log('Place mouse over element with text content!')
  }
  else {
    let synthesized_text = new SpeechSynthesisUtterance(raw_text)
  
    synthesized_text.lang = available_voices[0].lang
    synthesized_text.pitch = 0.5;
    synthesized_text.rate = 0.9;
    synthesized_text.voice = available_voices[0]
    synthesized_text.volume = 0.5;
  
    speechSynthesis.cancel()
    speechSynthesis.speak(synthesized_text)
  }   
}

// speechSynthesis.pause();
// speechSynthesis.resume();

// -------------- Speech Recognition API ----------------

// var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
// var recognizer = new SpeechRecognition();

// var speech_recognition_list = new SpeechGrammarList();
// speech_recognition_list.addFromString(grammar, 1);

// recognizer.grammars = speech_recognition_list;
// recognition.continuous = false;
// recognizer.lang = 'en-US';
// recognizer.interimResults = false;
// recognizer.maxAlternatives = 1;

// document.body.onclick = function (event){
//     recognizer.start();
// }

// recognizer.onresult = function (event){
//     var color = event.results[0][0].transcript;

//     let recognized_text_block = document.createElement("div");
//     recognized_text_block.innerText = color;

//     body.appendChild(recognized_text_block);
// }
// 
// recognizer.onspeechend = function() {
//   recognition.stop();
// }
// 
// recognizer.onnomatch = function (event) {
//   
// }
// 
// recognizer.onerror = function (event) {
//   console.log(event.error)  
// }

