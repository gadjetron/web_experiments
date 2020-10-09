var NOTIFICATION_PERMISSION_STATUS = {
  DEFAULT: 'default',
  GRANTED: 'granted',
  DENIED: 'denied',
}

// First, we must get permission for show notification messages
Notification.requestPermission().then((permission_status) => {
  console.log(permission_status)
})

// Check if permission status is 'granted' and show notification if so 
if (Notification.permission == NOTIFICATION_PERMISSION_STATUS.GRANTED) {
  
  // First param is title of notification
  // Second param is additional options
  let notification = new Notification(
    'Hi, user!',
    {
      // list of the application-defined actions the user can choose 
      // to take immediately within the context of a notification.
      // 
      // Actions are only supported for persistent notifications shown 
      // using ServiceWorkerRegistration.showNotification().
//       actions: [      
//         {
//           action: 'action1',
//           title: 'action1',
//           icon: 'icon1.png'
//         },      
//         {
//           action: 'action2',
//           title: 'action2',
//           icon: 'icon2.png'
//         },      
//       ],
      
      // The URL of the image used to represent the notification 
      // when there is not enough space to display the notification itself.
      badge: "url_to_image.png",

      // body text of the notification, 
      // which will be displayed below the title.
      body: "I'm glad to see you on my site!",
      
      // URL of an icon to be displayed in the notification
      icon: "/notification_icons/user_greeting.png",
      
      // text direction
      dir: 'rtl',

      // The notification's language, as specified 
      // using a DOMString representing a BCP 47 language tag.
      // lang: bcp47_language_tag

      // an identifying tag for the notification
      tag: 'user_greeting',

      // URL of an image to be displayed in the notification.
      image: "url_to_image.png",

      // Arbitrary data that you want associated with the notification. 
      // This can be of any data type.
      data: "This is a notification data",

      // A vibration pattern for the device's vibration hardware to emit 
      // when the notification fires.
      // vibration_pattern (as in navigator.vibrate() function argument)
      // 
      vibrate: [200, 100, 50, 200, 100, 50],

      // Whether the user should be notified after a new notification replaces an old one. 
      // The default is false, which means they won't be notified.
      renotify: true,

      // Indicates that a notification should remain active 
      // until the user clicks or dismisses it, rather than closing automatically. 
      // The default value is false.
      requireInteraction: true,

      // time of the event for which the notification was created, 
      // or it can be an arbitrary timestamp 
      // that you want associated with the notification.
      timestamp: Math.floor(Date.now()),

      // The options below are listed in the most up-to-date spec, 
      // but are not supported in any browsers yet.

      // Whether the notification should be silent, 
      // i.e. no sounds or vibrations should be issued, regardless of the device settings. 
      // The default is false, which means it won't be silent.
      // silent: true,

      // Whether the notification firing should enable the device's screen or not. 
      // The default is false, which means it will enable the screen.
      noscreen: true,

      // whether the notification should be 'sticky', i.e. not easily clearable by the user. 
      // The default is false, which means it won't be sticky.
      sticky: false
    }
  )
  
  notification.onclick = function (event) {
    console.log('User clicked on notification!')
    console.log(event)
  }

  notification.onclose = function (event) {
    console.log('User closed notification!')
  }

  notification.onerror = function (event) {
    console.log('Something went wrong with notification!')
  }

  notification.onshow = function (event) {
    console.log('Notification is shown to user!')
  }

  setTimeout(notification.close.bind(notification), 4000);
}