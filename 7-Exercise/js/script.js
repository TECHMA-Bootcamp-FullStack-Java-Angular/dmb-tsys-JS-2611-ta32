// Calculates factorial of var number
// let number = 5;
// let factorial = number;
// for (let i = number-1; i > 0; i--) {
//     factorial = factorial * i;
// }

const number = 5
const factorial = (n) => (n === 0) ? 1 : (n * factorial(n - 1))
console.log(`El factoria de ${number} es ${factorial(number)}`)
