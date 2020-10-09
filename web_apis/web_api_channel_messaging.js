/*
  The Channel Messaging API allows two separate scripts 
  running in different browsing contexts attached to the same document 
  (e.g., two IFrames, or the main document and an IFrame, 
  two documents via a SharedWorker, or two workers) to communicate directly, 
  passing messages between one another through two-way channels 
  (or pipes) with a port at each end.

*/

function create_iframe_content_window() {
  let iframe_wrapper = document.createElement('div')
  iframe_wrapper.id = 'iframe_wrapper'

  iframe_wrapper.style.display = 'flex'
  iframe_wrapper.style.flexDirection = 'column'

  iframe_wrapper.style.border = '1px solid black'
  iframe_wrapper.style.padding = '0.5em'

  let header_l2 = document.createElement('h2')
  header_l2.textContent = 'Channel Messaging API demo'
  header_l2.style.textAlign = 'center'
  header_l2.style.marginBottom = '1em'

  iframe_wrapper.append(header_l2)

  let text_input = document.createElement('input')
  let text_input_id = 'text_input'

  text_input.type = 'text'  
  text_input.id = text_input_id
  text_input.placeholder = 'Message to send to iframe below'
  text_input.style.marginBottom = '0.5em'

  iframe_wrapper.append(text_input)

  let send_button = document.createElement('button')
  send_button.id = 'send_button'
  send_button.type = 'submit'
  send_button.textContent = 'Send message to iframe'
  send_button.style.alignSelf = 'center'
  send_button.style.marginBottom = '1em'

  iframe_wrapper.append(send_button)

  let iframe_received_message_displayer = document.createElement('div')
  iframe_received_message_displayer.id = 'iframe_received_message_displayer'
  iframe_received_message_displayer.style.marginBottom = '1em'

  iframe_wrapper.append(iframe_received_message_displayer)

  return iframe_wrapper
}

function create_iframe_content_document(title='') {
  let iframe_document = document.implementation.createHTMLDocument(title)

  let header_l3 = iframe_document.createElement('h3')
  header_l3.textContent = 'IFrame incoming messages: '
  header_l3.style.marginBottom = '0.5em'

  iframe_document.body.append(header_l3)
  
  let messages_list = iframe_document.createElement('ul')
  messages_list.id = 'messages_list'
  messages_list.style.marginBottom = '0.5em'

  iframe_document.body.append(messages_list)

  return iframe_document
}

let iframe_wrapper = create_iframe_content_window()

let iframe = document.createElement('iframe')
iframe.id ='iframe'
iframe.style.border = '1px solid black'

iframe_wrapper.append(iframe)
document.body.append(iframe_wrapper)

let iframe_content_window = create_iframe_content_document('Iframe document')
let iframe_content_document = iframe.contentDocument
iframe_content_document.body.innerHTML = iframe_content_window.body.innerHTML

iframe_wrapper.scrollIntoView()

// -------------------------------------------

var text_input = document.getElementById('text_input');

var iframe_received_message_displayer = document.getElementById('iframe_received_message_displayer');

var send_button = document.getElementById('send_button');

var message_channel = new MessageChannel()
var msg_ch_port1 = message_channel.port1
var msg_ch_port2 = message_channel.port2

msg_ch_port1.onmessageerror = function (event) {
  console.log('Error ocurred on Port 1 "onmessageerror" handler...', event)
}

function on_iframe_load() {
  msg_ch_port1.onmessage = function (event) {
    console.log(event)
    
    iframe_received_message_displayer.innerHTML = event.data;
    text_input.value = '';
  }
  
  send_button.addEventListener('click', function (event) {
    msg_ch_port1.postMessage(text_input.value);
  });
  
  // Transfer port2 to the iframe
  iframe.contentWindow.postMessage(
    message='init', 
    targetOrigin='*', 
    transfer=[msg_ch_port2]
  );
}

iframe.addEventListener("load", on_iframe_load);

var messages_list = iframe.contentDocument.getElementById('messages_list');
// console.log(messages_list)

// Listen for the intial port transfer message
iframe.contentWindow.addEventListener('message', function (event) {
  msg_ch_port2 = event.ports[0];

  msg_ch_port2.onmessage = function (event) {
    var list_item = document.createElement('li');
    
    list_item.textContent = event.data;
    messages_list.appendChild(list_item);
    
    msg_ch_port2.postMessage('Message received by IFrame: "' + event.data + '"');
}
});