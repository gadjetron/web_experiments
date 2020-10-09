console.log('History object: ', window.history)

// equivalent to history.go(-1).
history.back()

// equivalent to history.go(1).
history.forward()

// reloads current page
history.go(0)

// Load a specific page from session history, 
// identified by its relative position to the current page 
// (with the current page being, of course, relative index 0).
history.go(-2)
history.go(2)

// size of the history for current session
console.log('History size: ', history.length)


// popstate event is dispatched to the window 
// every time the active history entry changes. 
window.onpopstate = function (event) {
  console.log(event)
//   console.log(location.href)
  console.log(history.state)
}

// current state of history
// 
// The state at the top of the history stack.
console.log('History state: ', history.state)

// scroll restoration ('manual' or 'auto' (default))
// 
// 'auto': The location on the page to which the user has scrolled will be restored.
//
// 'manual': The location on the page is not restored. 
//           The user will have to scroll to the location manually.
// 
console.log('Scroll restoration: ', history.scrollRestoration)

// pushState(data, title, url)
history.pushState({name: 'styles'}, "styles", '/css/styles.css');
console.log(history.state)

// replaceState(data, title, url)
history.replaceState({name: 'index page'}, "index page", 'index.html');
console.log(history.state)