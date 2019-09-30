let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
let upperCaseString = quoteString.toUpperCase()
console.log(Upper case string is: ${upperCaseString}.)

let authorString = '- Henry Ford'
completeString = quoteString.concat(authorString)
console.log(completeString)

let secondQuote = 'Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King'
let lowerCaseString = secondQuote.toLowerCase()
console.log(`Lower case string is: ${lowerCaseString}.`)

let character = secondQuote.charAt(2)
console.log(`The character at location 2 is ${character}`)

let findString = 'Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King'
let part = findString.slice(35,120)   
console.log(`The 35,120 slice is ${part}`)


