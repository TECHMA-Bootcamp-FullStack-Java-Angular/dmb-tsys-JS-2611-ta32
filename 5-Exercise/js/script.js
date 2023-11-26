const hr = '\n' + '---'.repeat(20)
const n1 = 5
const n2 = 7

if (n1 < n2) {
  console.log(`${n1} is smaller than ${n2}`, hr)
}
if (n2 > 0) {
  console.log(`${n2} is a positive number`, hr)
}
if (n1 < 0 || n1 !== 0) {
  console.log(`${n1} is negative or different than zero`, hr)
}
if (n1 + 1 < n2) {
  console.log(`Incrementing the value of ${n1} by 1 does not make it bigger or equal than ${n2}`)
}
