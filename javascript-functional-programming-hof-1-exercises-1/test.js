const someAcademitesWithAges = [ // array of objects
    { name: "Luca", age: 8 }, // ages in months!
    { name: "Oscar", age: 9 },
    { name: "Wiggins", age: 44 },
    { name: "Gatsby", age: 56 }
]

// Lets filter out all the young naughty dogs/academites!
// ..remove the ones younger than 12 months
let above12Months = someAcademitesWithAges.filter(above12Months);
function over12Months(age) {
    return age >12
}
console.log('Academites above 12 months')