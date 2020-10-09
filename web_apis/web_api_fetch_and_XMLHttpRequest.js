// -------------------------- XMLHttpRequest API ----------------- 

const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  HEAD: 'HEAD',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

const READY_STATE = {
  UNSENT: 0,            // Client has been created. open() not called yet.
  OPENED: 1,            // open() has been called.
  HEADERS_RECEIVED: 2,  // send() has been called, and headers and status are available.
  LOADING: 3,           // Downloading; responseText holds partial data.
  DONE: 4               // The operation is complete.
}

const RESPONSE_TYPE = {
  EMPTY: '',
  ARRAY_BUFFER: 'arraybuffer',
  BLOB: 'blob',
  DOCUMENT: 'document',
  JSON: 'json',
  TEXT: 'text',
  MOZ_CHUNKED_ARRAY_BUFFER: 'moz-chunked-arraybuffer',
  MS_STREAM: 'ms-stream'
}

let RESOURCE_URL = 'test_data.json'  // substitute with your own
let asynchronously = true

let xhr = new XMLHttpRequest()

xhr.timeout = 3000 // 0 is default and means 'no timeout'
xhr.responseType = RESPONSE_TYPE.JSON

// Note: You need to add the event listeners before calling open() on the request. 
// Otherwise the progress events will not fire.

xhr.onabort = function (event) {
  console.log("In 'onabort' event handler")
}

xhr.onerror = function (event) {
  console.log("In 'onerror' event handler")
}

xhr.onloadstart = function (event) {
  console.log("In 'onloadstart' event handler. Downloading data...'")
}

xhr.onprogress = function (event) {
  console.log("In 'onprogress' event handler")
  
  console.log('Data length is computable?: ', event.lengthComputable)
  console.log('Currently transfered data amount: ', event.loaded)
  console.log('Total amount of data: ', event.total)
}

// One can also detect all three load-ending conditions (abort, load, or error) 
// using the loadend event
xhr.onloadend = function (event) {
  console.log("In 'onloadend' event handler. " + 
              "The transfer finished (although we don't know if it succeeded or not).");
}

xhr.onload = function (event) {
  console.log("In 'onload' event handler. Request completes successfully!")
  console.log("Received data is: ", xhr.response)

  console.log('Last modified date: ', xhr.getResponseHeader('Last-Modified'))
}

xhr.ontimeout = function (event) {
  console.log("In 'ontimeout' event handler")
  console.log('How much can I wait?... I go to abort request.')
  
  xhr.abort()

  console.log('request is aborted')
}

xhr.onreadystatechange = function (event) {
  console.log('"readyState" attribute has been changed!')

  if (event.readyState == READY_STATE.HEADERS_RECEIVED) {
    console.log('All response headers: ', xhr.getAllResponseHeaders())
  }
}

xhr.open(HTTP_METHOD.GET, RESOURCE_URL, asynchronously, /* user, password */)

xhr.setRequestHeader('Accept', 'application/json')

xhr.send()

// xhr.send(null) - same as above
// xhr.send('string');
// xhr.send(new Blob());
// xhr.send(new Int8Array());
// xhr.send(document);

// -------------------------- Fetch API --------------------------

console.log('-------------------------------------------')

let headers = new Headers({
  'Accept': 'application/json'
})

let request_config = {
  // Default options are marked with *

  method: "GET", // *GET, POST, PUT, DELETE, etc.

  // mode: "same-origin", // no-cors, cors, *same-origin

  // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached

  // credentials: "same-origin", // include, *same-origin, omit
  
  headers: headers,
  
  // redirect: "follow", // manual, *follow, error
  
  // referrer: "no-referrer", // no-referrer, *client

  // referrerPolicy: "no-referrer", // no-referrer, no-referrer-when-downgrade, origin, 
                                    // origin-when-cross-origin, unsafe-url.
  
  // integrity: sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=,

  // body: JSON.stringify("body data"), // body data type must match "Content-Type" header

  // signal: AbortController() instance,

  // keepalive: true

}

window.addEventListener('fetch', function (event) {
  console.log('Fetch event object: ', event)
})

let json_request_object = new Request(RESOURCE_URL, request_config)

let json_data = fetch(json_request_object).then(async (response) => {
  let content_type = response.headers.get("content-type");
  let valid_response = response.ok && content_type && content_type.includes('application/json')
   
  if (valid_response) {
    console.log("Request object: ", json_request_object)
    console.log('Request headers: ', Object.fromEntries(json_request_object.headers.entries()))

    console.log("Response object: ", response)
    console.log("Response headers: ", Object.fromEntries(response.headers.entries()))

    let data = await response.json()
    console.log('Received data is: ', data)
  }

}).catch((error) => {
  console.log('Error occured: ', error)
})
