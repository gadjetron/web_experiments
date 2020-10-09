alert(
  "Press 'S' or 's' and click on desired element to select it as start node of range. " + 
  "Then press 'E' or 'e' and click on desired element to select it as end node of range." + 
  "\nOrder in which you select nodes is not matter."
)

var start_node_selection_mode = end_node_selection_mode = false

var start_node_is_set = end_node_is_set = false

var is_right_range

var range = new Range()

function print_range_info(range_object) {
  console.groupCollapsed('Selected range: ')

  console.log('Range object: ', range)
  console.log('Range content: ', range.cloneContents())
  console.log('Range bounding rect: ', range.getBoundingClientRect())

  console.groupEnd('Selected range: ')
}

window.onkeydown = function (event) {
    let key = event.key;

    if (key == "s" || key == "S") {
        start_node_selection_mode = true
        end_node_selection_mode = false
    }

    if (key == "e" || key == "E") {
        end_node_selection_mode = true
        start_node_selection_mode = false
    }  
}

window.onclick = function (event) {

  if (start_node_selection_mode) {
      range.setStart(event.target, 0)
      start_node_is_set = true

      if (start_node_is_set && end_node_is_set) {
        is_right_range = true

        print_range_info(range)

        document.body.append(range.cloneContents())
      }
  }

  if (end_node_selection_mode) {
      range.setEndAfter(event.target)
      end_node_is_set = true

      if (start_node_is_set && end_node_is_set) {
        is_right_range = true

        print_range_info(range)

        document.body.append(range.cloneContents())
      }
  }
}
