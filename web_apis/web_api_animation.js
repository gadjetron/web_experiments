let box_shadow_animation_keyframes = [
  {
    boxShadow: '0 0 4px inset teal',
    offset: 0.0
  },
  {
    boxShadow: '0 0 2px 2px teal',
    offset: 0.25
  },
  {
    boxShadow: '0 0 4px 4px teal',
    offset: 0.5
  },
  {
    boxShadow: '0 0 6px 6px teal',
    offset: 0.75
  },
  {
    boxShadow: '0 0 8px 8px teal',
    offset: 1.0
  },
]

let box_shadow_animation_options = {
  duration: 500,
  iterations: 1
}

window.onmouseover = function (event) {
  let animation_target = event.target

  animation_target.animate(
    box_shadow_animation_keyframes,
    box_shadow_animation_options
  )
}