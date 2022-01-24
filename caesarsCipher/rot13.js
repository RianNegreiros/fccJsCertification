function rot13(str) {
  let cipher = str.split(' ')
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i)
    let fromCharCode = String.fromCharCode(charCode)
    if ((/[a-zA-Z]/).test(fromCharCode)) {
      cipher[i] = String.fromCharCode(((charCode - 65 + 13) % 26) + 65)
    } else {
      cipher[i] = fromCharCode
    }
  }
  return cipher.join('')
}

console.log(rot13('SERR PBQR PNZC'))