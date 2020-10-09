window.onstorage = (event) => {
    console.log(event);
}

// CacheStorage API

let CACHES = {
    CSS: 'css_cache',
    JS: 'js',
}

window.caches.open(CACHES.CSS).then((cache) => {
    cache.add(
      '/css/styles.css',  
    )
})

window.caches.open(CACHES.JS).then((cache) => {
    cache.add(
      '/js/app_config.js',  
    )
})

// Create new cache
window.caches.open('test_cache').then((cache) => {
  cache.addAll([
    '/css/styles.css',
    '/js/app_config.js'
  ])
})

console.groupCollapsed('CacheStorage API: ')

console.log(
  'All caches', 
  await window.caches.keys()
)

console.log(
  '"styles.css" is cached? ',
  await window.caches.match('/css/styles.css').then((response) => {
    return response.status == 200
  }),
)

console.log(
  'Is there "js_cache" cache? ', 
  await window.caches.has(CACHES.JS)
)

console.log('"unused_cache" creating...')
window.caches.open('unused_cache')
console.log('"unused_cache" created')

console.log('"unused_cache" deleting...')
window.caches.delete('unused_cache')
console.log('"unused_cache" deleted')

console.groupEnd('CacheStorage API: ')

// Local storage

console.groupCollapsed('Local storage: ')

localStorage.setItem("greeting_eng", "Hello!");
localStorage.setItem("greeting_rus", "Привет!");
console.log(localStorage.key(0));
console.log(localStorage);

console.log("'greeting_rus' key: ", localStorage.getItem("greeting_rus"));

localStorage.removeItem("greeting_eng");
console.log("'greeting_eng' key was deleted...");
console.log(localStorage);

localStorage.setItem("greeting_eng", "Hello!");

if (confirm('Delete all entries in local storage?')){
  localStorage.clear();
  console.log("local storage was cleared...");  
}

console.log(localStorage);

console.groupEnd('Local storage: ')

console.groupCollapsed('Session storage: ')

console.log(`
Session storage has the same API as local.

It only differs in data saving time:
  session storage - as long as browser is open (including page reloads and restores),
  local storage - persists data even browser is closed and reopened
`)

console.groupEnd('Session storage: ')

console.groupCollapsed('storage manager: ')
console.log(await navigator.storage)
console.groupEnd('storage manager: ')

console.groupCollapsed('storage estimate: ')
console.log(await navigator.storage.estimate())
console.log('user agent is able to persist site?', await navigator.storage.persist())
console.log('persistence has already been granted for site storage?', await navigator.storage.persisted())
console.groupEnd('storage estimate: ')
