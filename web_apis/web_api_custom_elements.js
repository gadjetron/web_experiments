class ProgressBar extends HTMLDivElement {
  static get observedAttributes() {
    return ['max-value', 'refresh-speed', 'height', 'width']
  }

  constructor(...args) {
    super(...args)

    this.__shadow_root = this.attachShadow({mode: 'closed'})
    
    console.log('Shadow root: ', this.shadowRoot)

//     let progress_animator = document.createElement('div')

//     this.__shadow_root.appendChild(progress_animator)
  }

  // runs each time the element is added to the DOM
  connectedCallback() {
    console.log('In "connectedCallback"')
  }

  // runs when the element is removed from the DOM
  disconnectedCallback() {
    console.log('In "disconnectedCallback"')
  }

  // runs when the element is moved to a different page
  adoptedCallback() {
    console.log('In "adoptedCallback"')
  }

  // run whenever one of the element's attributes is changed in some way.
  // 
  // Note that to get the attributeChangedCallback() callback to fire 
  // when an attribute changes, you have to observe the attributes. 
  // This is done by specifying a static get observedAttributes() method 
  // inside custom element class - this should return  an array 
  // containing the names of the attributes you want to observe.
  // 
  attributeChangedCallback(attr_name, attr_old_value, attr_new_value) {
    console.log('In "attributeChangedCallback"')
  }
}

// There are two types of custom elements you can create:
// 
//   Autonomous custom element: Standalone elements; they don't inherit from built-in HTML elements.
//                              Constructors for autonomous custom elements must extend HTMLElement.
// 
//   Customized built-in element: These elements inherit from — and extend — built-in HTML elements.
// 
window.customElements.define('progress-bar', ProgressBar, {extends: 'div'})

window.customElements.whenDefined('progress-bar').then((element) => {
  console.log(element)
})

let progress_bar_constructor = window.customElements.get('progress-bar')
console.log(progress_bar_constructor)

let progress_bar = document.createElement('div', {is: 'progress-bar'})
console.log(progress_bar)