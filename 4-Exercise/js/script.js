const values = [true, 5, false, 'hello', ' bye', 2]

// Filters the string and returns the longest
const longestWord = (array) => array.filter(value => typeof value === 'string')
  .reduce((acc, value) => {
    return acc.length < values.length ? acc : value
  })
console.log(`The word: ${longestWord(values)} is biggest string`)

// Find and print booleans
values.forEach((value, i) => {
  if (typeof value === 'boolean') {
    console.log('Index', i, value, 'is boolean')
  }
})

// Print all the operations with the two values
values.filter(value => typeof value === 'number')
  .reduce((a, b) => {
    const operations = []
    operations.push(`Suma de ${a} y ${b} es ${a + b}`)
    operations.push(`Resta de ${a} y ${b} es ${a - b}`)
    operations.push(`Producto de ${a} y ${b} es ${a * b}`)
    operations.push(`División de ${a} y ${b} es ${a / b}`)
    operations.push(`Residuo de ${a} y ${b} es ${a % b}`)
    return operations
  }).forEach(e => console.log(e))
