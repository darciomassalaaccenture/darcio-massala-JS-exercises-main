// Cursor Park (anyone not typing put your cursor here)

const someAcademitesWithAges = [ // array of objects
    { name: "Luca", age: 8 }, // ages in months!
    { name: "Oscar", age: 9 },
    { name: "Wiggins", age: 44 },
    { name: "Gatsby", age: 56 }
]

// Reduce the array to only the total age in months of all the doggie Academites
// TODO

const sumages = someAcademitesWithAges.map(item => item.age). reduce((prev,curr) => prev + curr, 0)
console.log(sumages)


// Sort the array by the names (alphabetically)
// Make a separate sorting function then use it
const sortByName = "TODO"
// TODO

sortedAcademites = someAcademitesWithAges.sort(function(a,b){
    let nameA = a.name.toUpperCase()
    let nameB = b.name.toUpperCase()
    if (nameA < nameB) {
        return -1
    }
    if (nameA > nameB) {
        return 1
    }
    return 0
})

console.log(sortedAcademites)

// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it
const sortByAges = someAcademitesWithAges.reverse()

console.log(sortByAges)
// TODO


// EOF
