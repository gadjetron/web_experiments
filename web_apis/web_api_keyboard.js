if ('keyboard' in navigator) {
  console.log('Keyboard: ', navigator.keyboard)

  navigator.keyboard.getLayoutMap().then((keyboard_map) => {
    console.log('Keys count: ', keyboard_map.size)

    console.log('Keys names: ', Array.from(keyboard_map.keys()))
    console.log('Keys values: ', Array.from(keyboard_map.values()))

    keyboard_map.forEach((key_entry) => {
      console.log(key_entry.toUpperCase())
    })

    // keyboard_map.get(key_code)
    // keyboard_map.has(key_code)

    /* 
      'keyboard_map.entries()' returns iterator object.
       Therefore we convert it to object with 'Object.fromEntries()'
       for avoiding explicit 'for' loop on it for retrieving each key.    
    */
    console.log('Keys map: ', Object.fromEntries(keyboard_map.entries()))
  }) 
}

/*
  The following example captures the "W", "A", "S", and "D" keys. 
  It captures these keys regardless of which modifiers are used with the key press 
  (Alt, Shift Ctrl and any combination of them).
*/
// navigator.keyboard.lock(['KeyW', 'KeyA', 'KeyS', 'KeyD'])

// capture all keyspresses
navigator.keyboard.lock()

// uncapture all keyspresses
navigator.keyboard.unlock()


// keyboard events
//
window.onkeydown = function (event) {
  console.group('keydown')

  console.log('Keydown event: ')
  console.log(event)

  console.groupEnd('keydown')
}

window.onkeypress = function (event) {
  console.group('keypress')

  console.log('Keypress event: ')
  console.log(event)

  console.groupEnd('keypress')
}

window.onkeyup = function (event) {
  console.group('keyup')

  console.log('Keyup event: ')
  console.log(event)

  console.groupEnd('keyup')
}