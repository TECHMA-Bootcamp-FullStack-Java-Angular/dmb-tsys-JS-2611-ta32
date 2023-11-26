// Function to check if number is prime number
const isEven = (num) => {
  return (num % 2 === 0)
    ? num + ' is even number'
    : num + ' is prime number '
}

// Asks the user and prints result
console.log(isEven(prompt('Enter a number')))
