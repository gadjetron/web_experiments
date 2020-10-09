
function show_lock_properties(lock) {
  console.log(`The lock name is: ${lock.name}`);
  console.log(`The lock mode is: ${lock.mode}`);
  console.log('----------------------------------')
}

console.log('Lock manager: ', navigator.locks)

navigator.locks.request("net_db_sync", show_lock_properties);

// mode can be 'exclusive' (default) or 'shared'
//
// There can only be one 'exclusive' holder of a lock,
// but multiple shared requests can be granted at the same time.
// This can be used to implement 'Readers-Writer' pattern.
// 
// Except 'mode' option, another options can be passed:
// 
// 'signal': An AbortSignal can be passed in, allowing a lock request to be aborted.
//           This can be used to implement a timeout on requests.
// 
// 'ifAvailable': If specified, the lock request will fail 
//                if the lock cannot be granted immediately without warning.
//                The callback is invoked with 'null'.

navigator.locks.request("another_lock", {mode: "shared"}, show_lock_properties);

// using of locks with async tasks
// 
// While a lock is held, requests for the same lock will be queued.
// The first queued request will be granted only when the lock is released.
//
// Locks are scoped to origins
// 

let do_something = do_something_else = function () {
  console.log('Making some job')
  console.log('...')
  console.log('Some job is done')
}

navigator.locks.request('my_resource', async (lock) => {
  // The lock has been acquired
  await do_something()
  await do_something_else()
  // Now the lock will be released
})
// The lock has been released

//  Monitoring of locks
// 
// 'navigator.locks.query()' takes a snapshot of LockManager state
// 

// (async function take_lock_manager_snapshot() {
//   console.log('Lock manager state: ')
//   await navigator.locks.query()
// })();

  console.log('Lock manager state: ', await navigator.locks.query())

// Advanced use
// 
// For more complicated cases, such as holding lock for an arbitrary amount of time,
// the callback can return Promise explicitly resolved by the script
// 

// Capture promise control functions
let resolve, reject;

const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});

// Request the lock
navigator.locks.request('my_resource2', (lock) => {
  // Lock is acquired
  return promise
  // Now lock will be held until either 'resolve()' or 'reject()' is called
})

Promise.resolve(promise)
