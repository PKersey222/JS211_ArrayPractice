const cars = ['Ford', 'BMW','Mercedes', 'Chevy']
console.log('Cars array: ',cars)
let arrLen = cars.length
// console.log(cars.length)

const moreCars = ['Saab', 'Volvo','Buick', 'Honda']
let totalCars = cars.concat(moreCars)
// console.log('The concatenated array is',totalCars)

let hondaIndex = totalCars.indexOf('Honda')
// console.log('The index of Honda is' ,hondaIndex)

// console.log(totalCars.indexOf('Honda'))

let fordLastIndexOf = totalCars.lastIndexOf('Ford')
// console.log('The last index of ford is',fordLastIndexOf)

let stringOfCars = totalCars.join()
// console.log('totalCars array converted to a string',stringOfCars)

let carsFromString = stringOfCars.split()
// console.log('stringOfCars converted to an array: ',carsFromString)

let carsFromString2 = stringOfCars.split(",")
// console.log('stringOfCars converted to an array: ',carsFromString2)
// console.log(carsFromString.join())

let carsInReverse = totalCars.sort().reverse()

// console.log(carsInReverse)

let yourPrediction ="Saab"
// console.log(carsInReverse.indexOf(yourPrediction))

const pets = ['dog', 'cat','fish', 'rabbit','snake','lizard','bird']
console.log(pets)

let reptiles = pets.slice(4,6)
console.log(reptiles)
console.log(pets)

let removedReptiles = pets.splice(4,2)
console.log(removedReptiles)
console.log(pets)

let hamster = pets.splice(4,0,"hamster")
console.log(hamster)
console.log(pets)

let removedPet = pest.pop()
console.log(removedPet)
console.log(pets)

pets.push()
console.log(pets)

pets.shift()
console.log(pets)

pets.unshift('turtle')
console.log(pets)


const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
const addTwo =(num) => num + 2
numbers.forEach(num => console.log(num+2))

