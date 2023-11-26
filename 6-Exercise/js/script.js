// DNI Letter vector
const LETTERS_DNI = [
  'T',
  'R',
  'W',
  'A',
  'G',
  'M',
  'Y',
  'F',
  'P',
  'D',
  'X',
  'B',
  'N',
  'J',
  'Z',
  'S',
  'Q',
  'V',
  'H',
  'L',
  'C',
  'K',
  'E',
  'T'
]

const dniNum = asksDni()
const imputDniLetter = prompt('Inserte la letra del DNI').toUpperCase()
const letterIsValid = LETTERS_DNI[dniNum % 23] === imputDniLetter

window.alert(
  !letterIsValid ? '⛔ La letra no es valida. ' : '✅ La letra se correcta.'
)

// Asks dni number till valid
function asksDni () {
  const dni = parseInt(prompt('Introduzca su DNI'))
  return !(dni > 0 && dni < 99999999 && isNaN(dni)) ? asksDni() : dni
}
