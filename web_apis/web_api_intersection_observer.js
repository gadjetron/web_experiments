const COLORS = {
  RED: 'red',
  ORANGE: 'orange',
  YELLOW: 'yellow',
  GREEN: 'green',
  SKYBLUE: 'lightblue',
  BLUE: 'darkblue',
  VIOLET: 'violet'
}

let intersection_observer_options = {
  root: null, // browser viewport
  rootMargin: '0px',
  threshold: [2, 4, 6, 8, 10].map((number) => {
    return number / 10
  })
}

// let intersection_observer_target = document.getElementById(...)

function callback(intersection_entries_list, observer) {
//   console.log(intersection_entries_list)
  
  intersection_entries_list.forEach((entry) => {
    let ratio = parseFloat(entry.intersectionRatio.toFixed(1))

    switch (ratio) {
      case 0.2:
        intersection_observer_target.style.backgroundColor = COLORS.RED;
        break;

      case 0.4:
        intersection_observer_target.style.backgroundColor = COLORS.ORANGE;
        break;

      case 0.6:
        intersection_observer_target.style.backgroundColor = COLORS.YELLOW;
        break;

      case 0.8:
        intersection_observer_target.style.backgroundColor = COLORS.GREEN;
        break;

      case 1:
        intersection_observer_target.style.backgroundColor = COLORS.SKYBLUE;
        break;
    }
  })
}

let intersection_observer = new IntersectionObserver(
  callback,
  intersection_observer_options
)

// 'observe() can be called on multiple elements asynchronously'
intersection_observer.observe(intersection_observer_target)
