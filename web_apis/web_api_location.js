console.log('Window location object: ', window.location)
console.log('Document location object: ', document.location)

// causes the window to load and display the document at the URL specified.
window.location.assign(window.location + '#hash')

// Browser may reload from cache. 
// Two calls below are identical.
window.location.reload()
window.location.reload(false)

// reload from server ignoring browser cache
window.location.reload(forcedReload=true)

/*
  Replaces the current resource with the one at the provided URL. 
  The difference from the assign() method is that after using replace() 
  the current page will not be saved in session History, 
  meaning the user won't be able to use the back button to navigate to it.
*/
window.location.replace(window.location.origin + window.location.pathname)

