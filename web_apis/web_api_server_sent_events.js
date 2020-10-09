// The server-side script that sends events needs to respond 
// using the MIME type 'text/event-stream'.
const EVENTS_GENERATOR_SCRIPT_NAME = 'events_generator.py'

// Event stream format
// 
// The event stream is a simple stream of text data which must be encoded using UTF-8. 
// Messages in the event stream are separated by a pair of newline characters. 
// A colon as the first character of a line is in essence a comment, and is ignored.
// 
// Note: The comment line can be used to prevent connections from timing out; 
//       a server can send a comment periodically to keep the connection alive.
// 
// Each message consists of one or more lines of text listing the fields for that message. 
// Each field is represented by the field name, followed by a colon, 
// followed by the text data for that field's value.
// 
// Fields:
// 
//   Each message received has some combination of the following fields, one per line:
// 
//     event - A string identifying the type of event described. 
//             If this is specified, an event will be dispatched on the browser to the listener 
//             for the specified event name; the website source code should use addEventListener() 
//             to listen for named events. The 'onmessage' handler is called 
//             if no event name is specified for a message.
//     
//     data - The data field for the message. When the EventSource receives multiple consecutive lines 
//            that begin with 'data:', it will concatenate them, inserting a newline character 
//            between each one. Trailing newlines are removed.
// 
//     id - The event ID to set the EventSource object's last event ID value.
// 
//     retry - The reconnection time to use when attempting to send the event. 
//             This must be an integer, specifying the reconnection time in milliseconds. 
//             If a non-integer value is specified, the field is ignored.
// 
//   All other field names are ignored.
// 
// Note: If a line doesn't contain a colon, the entire line is treated 
//       as the field name with an empty value string.
// 
// ----------------------------------------------------------------------------------------
// 
// Named events:
// 
//   event: userconnect
//   data: {"username": "bobby", "time": "02:33:48"}
//   
//   event: usermessage
//   data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}
//   
//   event: userdisconnect
//   data: {"username": "bobby", "time": "02:34:23"}
//   
//   event: usermessage
//   data: {"username": "sean", "time": "02:34:36", "text": "Bye, bobby."}
// 
// ---------------------------------------------------------------------------
// 
// Mixing and matching
// 
//   You don't have to use just unnamed messages or typed events; 
//   you can mix them together in a single event stream.
// 
//     event: userconnect
//     data: {"username": "bobby", "time": "02:33:48"}
//     
//     data: Here's a system message of some kind that will get used
//     data: to accomplish some task.
//     
//     event: usermessage
//     data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}
// 
const events_source = new EventSource(EVENTS_GENERATOR_SCRIPT_NAME)

// will be called automatically whenever the server sends a message 
// with the event field set to "ping"
events_source.addEventListener('ping', function (event) {
  console.log(event)
})

// Standard handler
events_source.addEventListener('open', function (event) {
  console.log(event)
})

// Standard handler
events_source.addEventListener('message', function (event) {
  console.log(event)
})

// Standard handler
events_source.addEventListener('error', function (event) {
  console.log(event)

  events_source.close()
})