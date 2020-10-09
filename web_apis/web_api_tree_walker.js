var root_node = document.body;
var what_to_show = NodeFilter.SHOW_ELEMENT;

var nodes_filter = {
  acceptNode: function (node) {
    switch (node.nodeName) {
      case 'TEMPLATE':
      case 'SCRIPT':
      case 'NOSCRIPT':
        return NodeFilter.FILTER_REJECT
        break;

      default:
        return NodeFilter.FILTER_ACCEPT
    }
  }
}

var tree_walker = document.createTreeWalker(root_node, what_to_show, nodes_filter)
console.log(tree_walker)

const NODE_FILTER_NUM_VALUES = {}

// Make copy of NodeFilter with structure {value: key, ...}
for (filter_num_value in NodeFilter) {
  NODE_FILTER_NUM_VALUES[NodeFilter[filter_num_value]] = filter_num_value
}

console.log("'whatToShow' num values: ", NODE_FILTER_NUM_VALUES)

var nodes_list = []

while (tree_walker.nextNode()) {
  nodes_list.push(tree_walker.currentNode)
}

console.log(nodes_list)