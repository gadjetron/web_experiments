/*
  Constructor:

    Event() - creates an Event object, returning it to the caller.

  Properties:

    Event.bubbles (Read only) - a Boolean indicating whether the event 
                              bubbles up through the DOM or not.
    
    Event.cancelBubble - a historical alias to Event.stopPropagation(). 
                         Setting its value to true before returning from an event handler 
                         prevents propagation of the event.

    Event.cancelable (Read only) - a Boolean indicating whether the event is cancelable.

    Event.composed (Read only) - a Boolean value indicating whether or not the event 
                                 can bubble across the boundary between the shadow DOM 
                                 and the regular DOM.

    Event.currentTarget (Read only) - a reference to the currently registered target for the event. This is the object to which the event is currently slated to be sent; it's possible this has been changed along the way through retargeting.

    Event.deepPath - an Array of DOM Nodes through which the event has bubbled.
    
    Event.defaultPrevented (Read only) - indicates whether or not event.preventDefault() 
                                         has been called on the event.
    
    Event.eventPhase (Read only) - indicates which phase of the event flow is being processed.
    
    Event.explicitOriginalTarget (Read only) - the explicit original target of the event 
                                               (Mozilla-specific).
    
    Event.originalTarget (Read only) - the original target of the event, 
                                       before any retargetings (Mozilla-specific).
    
    Event.returnValue - a historical property introduced by Internet Explorer 
                        and eventually adopted into the DOM specification 
                        in order to ensure existing sites continue to work. 
                        Ideally, you should try to use Event.preventDefault() 
                        and Event.defaultPrevented instead, but you can use returnValue 
                        if you choose to do so.

    Event.srcElement - a non-standard alias (from old versions of Microsoft Internet Explorer) 
                       for Event.target, which is starting to be supported in some other browsers 
                       for web compatibility purposes.

    Event.target (Read only) - a reference to the target to which the event 
                               was originally dispatched.

    Event.timeStamp (Read only) - the time at which the event was created (in milliseconds). 
                                  By specification, this value is time since epoch, 
                                  but in reality browsers' definitions vary; 
                                  in addition, work is underway to change this 
                                  to be a DOMHighResTimeStamp instead.

    Event.type (Read only) - the name of the event (case-insensitive).

    Event.isTrusted (Read only) - indicates whether or not the event was initiated by the browser 
                                  (after a user click for instance) or by a script 
                                  (using an event creation method, like event.initEvent).

  Methods:

    Event.createEvent() - creates a new event, which must then be initialized 
                          by calling its initEvent() method.

    Event.composedPath() - returns the event’s path (objects on which listeners will be invoked). 
                           This does not include nodes in shadow trees 
                           if the shadow root was created with its ShadowRoot.mode closed.
    
    Event.initEvent() - initializes the value of an Event created. 
                        If the event has already being dispatched, this method does nothing.
    
    Event.preventDefault() - cancels the event (if it is cancelable).
    
    Event.stopImmediatePropagation() - for this particular event, no other listener will be called. 
                                       Neither those attached on the same element, 
                                       nor those attached on elements which will be traversed later 
                                       (in capture phase, for instance)
    
    Event.stopPropagation() - stops the propagation of events further along in the DOM.
*/

const EVENT_PHASE = {
  0: 'NONE',
  1: 'CAPTURING_PHASE',
  2: 'AT_TARGET',
  3: 'BUBBLING_PHASE',
}

console.log('Event phases: ', EVENT_PHASE)

let custom_event = new CustomEvent('custom_event', {
  detail: {
    data: 'This is a custom event!'
  },
  cancelable: true
})

window.addEventListener('custom_event', function (event) {
  // event.preventDefault()
  console.log('Custom event listener 2: ', event)
  console.log('Custom event data: ', event.detail.data)
})

window.addEventListener('custom_event', function (event) {
  // event.preventDefault()
  console.log('Custom event listener 1: ', event)
  console.log('Custom event data: ', event.detail.data)
})


window.onclick = function (event) {
  window.dispatchEvent(custom_event)
}