const weeksInYear = Math.floor(365/7)
console.log(weeksInYear)

const daysLeftOver = 365 % 7
console.log(daysLeftOver)

const result = `A year has ${weeksInYear} weeks and ${daysLeftOver} days`

console.log(result)