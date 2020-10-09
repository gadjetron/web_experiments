/*
  The Network Information API provides information about the system's connection 
  in terms of general connection type (e.g., 'wifi', 'cellular', etc.). 
  This can be used to select high definition content or low definition content 
  based on the user's connection. 
*/
console.log('Connection info', navigator.connection)

var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
var last_connection_type = connection.effectiveType;

connection.onchange = function updateConnectionStatus(event) {
  console.log(`Connection type changed from ${last_connection_type} to ${connection.effectiveType}`);

  last_connection_type = event.target.effectiveType
}

connection.dispatchEvent(new Event('change'))