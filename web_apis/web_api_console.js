var expand_groups = confirm('Show all groups expanded?');

var group_start, group_end = console.groupEnd.bind(window);

group_start = expand_groups ? console.group.bind(window) : console.groupCollapsed.bind(window)

// 
// 'console' interface
// 
group_start(`'console' interface: `)

console.log('Console object: \t\n', console)

group_end(`'console' interface: `)

// 
// assert
// 
group_start('console.assert')

console.assert(4 > 5, {
  type: 'orderCheck'
}, {
  errorMsg: 'Invalid order!'
})

group_end('console.assert')

// 
// clear console
// 
// console.clear()

// 
// 'console.count' and 'console.countReset'
// 
group_start(`'console.count' and 'console.countReset'`)

var user = "";

user = 'bob';
console.count(user)
console.count('alice')

user = 'alice';
console.count(user)
console.count('bob')

console.count();

console.countReset('alice')
console.countReset('bob')

console.count('alice')

group_end(`'console.count' and 'console.countReset'`)

// 
// Messages to console
// 
group_start('console messages')

console.debug('Debug message!')
console.error('Error message!')
console.info('Info message!')
console.warn('Warning message!')

group_end('console messages')

// 
// Interactive representation
// 
group_start(`interactive representation with 'console.dir' and 'console.dirxml'`)

// interactive representation of object
group_start(`'console.dir'`)

console.log('object: ', console)
console.dir(console)

group_end(`'console.dir'`)

// interactive representation of XML/HTML element
group_start(`'console.dirxml'`)

console.log('element: ', document.body)
console.dirxml(document.body)

group_end(`'console.dirxml'`)

group_end(`interactive representation with 'console.dir' and 'console.dirxml'`)

// 
// log to console
// 
group_start(`'console.log'`)

var substitutions = new Object({
  1: 'substitution 1',
  2: 'substitution 2',
})

// console.log(substitutions.prototype)

// substitutions.prototype.toString = function toStringtring() {
//   return 'substitutions'
// }

console.dir(substitutions)
console.log(`text with '%s' and '%s'`, substitutions[1], substitutions[2])

group_end(`'console.log'`)

// 
// displaying data as table
// 
group_start(`'console.table'`)

console.log('type: Array')
console.table(['ananas', 'banana', 'oranges'])

console.log('type: Array of arrays')
console.table([
  ["John", "Smith"], 
  ["Jane", "Doe"], 
  ["Emily", "Jones"]
])


console.log('type: Object')
console.table({
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4',
})

console.log('type: Object with values as objects')
console.table({
  key1: {
    subkey1: 'subvalue1',
    subkey2: 'subvalue2',
    subkey3: 'subvalue3'
  },
  key2: {
    subkey1: 'subvalue1',
    subkey2: 'subvalue2',
    subkey3: 'subvalue3'
  },
  key3: {
    subkey1: 'subvalue1',
    subkey2: 'subvalue2',
    subkey3: 'subvalue3'
  },
})

// restrict displayed data
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");

console.table([john, jane, emily], ["firstName"]);

group_end(`'console.table'`)

// 
// timers
// 
group_start(`'console.time' and 'console.timeEnd'`)

console.time('array filtering')

new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).filter((elem) => {elem % 2 == 0})

console.timeEnd('array filtering')

console.time('timer 1')

console.timeLog('timer 1')
console.log(2**30)
console.timeLog('timer 1')

console.timeLog('timer 1')
console.log(3**20)
console.timeLog('timer 1')

console.timeEnd('timer 1')

// console.timeStamp('l1')
// console.timeStamp('l1')

group_end(`'console.time' and 'console.timeEnd'`)

// 
// stack trace
// 
group_start(`'console.trace'`)

function foo() {
  function bar() {
    console.trace()
  }

  function baz() {
    bar()
  }

  baz()
}

foo()

group_end(`'console.trace'`)

// 
// profiling
// 
group_start(`'console.profile' and 'console.profileEnd'`)

console.profile('profile')

window.scroll(0, 500)

console.profileEnd('profile')

console.log('Show results of profiling in tab "JavaScript profiler"')

group_end(`'console.profile' and 'console.profileEnd'`)
