const num = [2, -3, 4, 5, 6, -10]

// max
// sum
// avg
// negative number

function decide(previousResult, currElementInArray) {
    console.log(`previous result ${previousResult} and current element ${currElementInArray}`);

    return previousResult > currElementInArray ? previousResult : currElementInArray
}

const theMax = num.reduce((acc, curr) => acc > curr ? acc : curr)
const theSum = num.reduce((acc, curr) => acc + curr)

// create five student object in an array
const people = [
    {
        name: 'sakib1',
        age: 25,
        gender: 'male'
    },
    {
        name: 'sakib2',
        age: 21,
        gender: 'male'
    },
    {
        name: 'sakib3',
        age: 20,
        gender: 'female'
    }
]

const theOldest = people.reduce((acc, curr) => acc.age > curr.age ? acc : curr)
const theSumAges = people.reduce((acc, curr) => acc + curr.age, 0)
console.log(theOldest);
console.log(theSumAges / people.length);

const names = people.mao(person => person.name)
console.log();