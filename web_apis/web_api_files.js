let file_input = document.createElement('input')
file_input.type = 'file'
file_input.setAttribute('multiple', true)
file_input.id = 'file_input'

document.body.append(file_input)

let user_playlist_block = document.createElement('div')
user_playlist_block.id = 'user_playlist_block'
user_playlist_block.style.padding = '0.5rem'

document.body.append(user_playlist_block)

function create_audio_block_for_file(file) {
  let file_name = file.name
  let file_size = file.size
  let file_type = file.type
  let file_url = URL.createObjectURL(file);
  
  let file_info_block = document.createElement('div')

  file_info_block.title = `size: ${file_size} byte(-s),` + `\n` + `type: ${file_type}`
  file_info_block.style.display = 'flex'
  file_info_block.style.flexDirection = 'column'
  file_info_block.style.paddingRight = '0.5rem'
  file_info_block.style.maxWidth = '40%'
  file_info_block.style.overflowWrap = 'break-word'
  
  let file_name_block = document.createElement('span')

  file_name_block.textContent = file_name
  file_name_block.style.color = 'blue'
  file_name_block.style.paddingBottom = '0.25rem'

  let file_size_block = document.createElement('span')

  file_size_block.textContent = file_size + ' byte(-s),'
  file_size_block.style.fontSize = '0.5rem'

  let file_type_block = document.createElement('span')

  file_type_block.textContent = file_type
  file_type_block.style.fontSize = '0.5rem'

  file_info_block.appendChild(file_name_block)
  file_info_block.appendChild(file_size_block)
  file_info_block.appendChild(file_type_block)

  let audio_element = document.createElement("audio");
  
  audio_element.src = file_url;
  audio_element.controls = true;
  audio_element.style.border = '1px solid black'

  let audio_block = document.createElement('div')

  audio_block.style.display = 'flex'
  audio_block.style.alignItems = 'center'
  audio_block.style.padding = '0.5rem'

  audio_block.appendChild(file_info_block)
  audio_block.appendChild(audio_element)
  
  return audio_block
}

file_input.addEventListener("change", function (event){
  let files = file_input.files;

  for (file of files){    
    let audio_block = create_audio_block_for_file(file)

    user_playlist_block.appendChild(audio_block);
  }

  user_playlist_block.scrollIntoView()
})

user_playlist_block.scrollIntoView()