function generateKey(key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let keyedAlphabet = [...new Set(key.split(''))].join('')
  for (let i = 0; i < alphabet.length; i++) {
    if (keyedAlphabet.indexOf(alphabet[i]) === -1) {
      keyedAlphabet += alphabet[i]
    }
  }
  return keyedAlphabet
}
function isAlphabet(character) {
  const regex = /^[a-zA-Z]$/
  return regex.test(character)
}

function encode(text, key) {
  let result = ''
  let keyedAlphabet = generateKey(key)

  console.log(keyedAlphabet)

  let temp = 1
  for (let i = 0; i < text.length; i++) {
    let c = text[i]
    if (!isAlphabet(c)) {
      temp = 1
      result += c
      continue
    }
    let upperCase = false
    if (c === c.toUpperCase()) {
      c = c.toLowerCase()
      upperCase = true
    }
    let cIndex = keyedAlphabet.indexOf(c) + temp
    temp++

    while (cIndex > keyedAlphabet.length - 1) {
      cIndex -= keyedAlphabet.length
    }
    let index = cIndex

    if (c === 'y' || c === 'h') {
      console.log('cindex', cIndex)
      console.log('temp', temp - 1)
      console.log('a', keyedAlphabet.indexOf(c))
      console.log('index', index)
      console.log('char', keyedAlphabet[index])
      console.log('leng', keyedAlphabet.length)
      console.log('-----------------------------')
    }
    result += upperCase
      ? keyedAlphabet[index].toUpperCase()
      : keyedAlphabet[index]
  }

  console.log(result)
  return result
}

function decode(text, key) {
  let result = ''
  let keyedAlphabet = generateKey(key)
  console.log(keyedAlphabet)

  let temp = 1
  for (let i = 0; i < text.length; i++) {
    let c = text[i]
    console.log('char', c)
    if (!isAlphabet(c)) {
      temp = 1
      result += c
      continue
    }
    let upperCase = false
    if (c === c.toUpperCase()) {
      c = c.toLowerCase()
      upperCase = true
    }

    console.log('temp', temp)
    let cIndex = keyedAlphabet.indexOf(c) - temp
    temp++

    console.log('cindex', cIndex)
    while (cIndex > keyedAlphabet.length - 1) {
      cIndex += keyedAlphabet.length
    }
    let index = cIndex
    result += upperCase
      ? keyedAlphabet[index].toUpperCase()
      : keyedAlphabet[index]
    console.log('result', result)
    console.log('index', index)
  }

  return result
}

// console.log(encode('yECTurUAsSoCAVofHJtNsRTQdFcxuyH', 'orxoxkzja'))
// console.log(encode('cipher', 'cipher'))
// console.log(encode('cipher', 'cccciiiiippphheeeeerrrrr'))
// console.log(decode('Urew pu bq rzfsbtj.', 'cipher'))
// console.log(decode('Urew.uRew.  urEw.ureW...', 'cipher'))
console.log(decode(encode('This is an example.', 'secretkey'), 'secretkey'))
// console.log(encode('This is an example.', 'secretkey'))
