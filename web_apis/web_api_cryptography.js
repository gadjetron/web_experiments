console.log('"Crypto" object: ', window.crypto)

// only integer based typed array
let typed_array = new Uint8Array(8)
let random_values = window.crypto.getRandomValues(typed_array)
console.log('Random values: ', random_values)

console.log('"Crypto.subtle" object: ', window.crypto.subtle)

let message = "This is a secret message!"
let message_buffer = new TextEncoder('utf-8').encode(message)
let hash_function = 'SHA-256'

console.log('Message: ', message)
console.log('Message buffer: ', message_buffer)
console.log('Hash function: ', hash_function)

let message_digest = await window.crypto.subtle.digest(hash_function, message_buffer)
console.log('Message digest: ', message_digest)

// window.crypto.subtle.encrypt(algorithm, key, data)
// window.crypto.subtle.decrypt(algorithm, key, data)

// window.crypto.subtle.deriveKey(const result = crypto.subtle.deriveKey(
//     algorithm,
//     masterKey,
//     derivedKeyAlgorithm,
//     extractable,
//     keyUsages
// )
// window.crypto.subtle.generateKey(algo, extractable, keyUsages)
// window.crypto.subtle.exportKey(format, key)
// window.crypto.subtle.importKey(format, keyData, algo, extractable, usages)
// window.crypto.subtle.wrapKey(format, key, wrappingKey, wrapAlgo)
// window.crypto.subtle.unwrapKey(format, wrappedKey, unwrappingKey, unwrapAlgo, 
//                                unwrappedKeyAlgo, extractable, keyUsages)

// window.crypto.subtle.sign(algorithm, key, text2sign)
// window.crypto.subtle.verify(algo, key, signature, text2verify)
