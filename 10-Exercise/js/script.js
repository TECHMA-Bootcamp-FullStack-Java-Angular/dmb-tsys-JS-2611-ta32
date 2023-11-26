/** Function that determines whether the text string passed to it as a parameter is a palindrome
 * @param {string} text
 * @returns an bolean
 */
const isPalindrome = (text) => {
  text = text.toLowerCase().replace(/ /g, '')
  return text.split('').reverse().join('').includes(text)
}

const testsList = [
  'Hola Mundo',
  'Somos o no somos',
  'Arriba la birra',
  prompt('Introducza la frase a chequear')
].forEach((text) => {
  console.log(text + ' --> ' + isPalindrome(text))
})

