const months = [...new Array(12).keys()].map(i => new Date(0, i).toLocaleString('ca-CA', { month: 'long' }))

for (const month of months) {
  document.write(`<div class="mx-5"> ${month.toLocaleUpperCase()} </div>`)
  console.log(month)
}
