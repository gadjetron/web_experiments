let url_to_parse = 'https://username:password@some.site.org:8080/index.html/?param1=v1&param1=v2&param2=v1#hash'

let url_obj = new URL(url_to_parse, /* base='' */);
console.log(url_obj)

console.log('URL as string: ', url_obj.toString())
console.log('URL as JSON: ', JSON.stringify(url_obj))

var url_obj_search_params = url_obj.searchParams;
console.log('URL search params: ', Object.fromEntries(url_obj_search_params.entries()))

url_obj_search_params.append('param3', 'v1')
console.log('New "param3": ', url_obj.toString())

url_obj_search_params.append('param4', 'v1')
console.log('New "param4": ', url_obj.toString())

url_obj_search_params.append('param3', 'v2')
console.log('New value for "param3": ', url_obj.toString())

url_obj_search_params.sort()
console.log('Sorted params: ', url_obj_search_params.toString())

url_obj_search_params.delete('param3')
console.log('"param3" was removed: ', url_obj_search_params.toString())

console.log('Has "param1"?', url_obj_search_params.has('param1'))

console.log('All "param1" values: ', url_obj_search_params.getAll('param1'))

console.log('"param2" value: ', url_obj_search_params.get('param2'))

url_obj_search_params.set('param1', 'new_value')
console.log('New "param1" value: ', url_obj.toString())

console.log('URL keys: ', Array.from(url_obj_search_params.keys()))

console.log('URL values: ', Array.from(url_obj_search_params.values()))
