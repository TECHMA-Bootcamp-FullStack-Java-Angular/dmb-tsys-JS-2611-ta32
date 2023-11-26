/**
 * Function determines if that string consists only of uppercase letters,
 * only by lower case or by a mixture of both
 * @param {string} text
 * @returns a vector with the text and its result in text string
 */
function analyzeText (text) {
  if (text === text.toUpperCase()) return [text, ' Compuesto únicamente por letras mayúsculas']
  if (text === text.toLowerCase()) return [text, ' Compuesto únicamente por letras minúsculas.']
  return [text, ' Formado por una mezcla de letras mayúsculas y minúsculas.']
}

['Hola', 'adios', 'Hola Mundo', prompt('Enter a word')].forEach(e => {
  console.log(analyzeText(e).toString())
  document.write(`<p>${analyzeText(e)}<p/>`)
})
