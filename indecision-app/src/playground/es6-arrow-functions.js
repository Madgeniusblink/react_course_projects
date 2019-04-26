const getFirstName = (firstName) => {
    return firstName
}

const getFirstNameTwo = (firstName) => firstName


console.log(getFirstName('firstName'))
console.log(getFirstNameTwo('firstNameTwo'))

const user = {
    name: 'Cristian',
    cities: ['Miami', 'LA', 'Phoenix'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}

console.log(user.printPlacesLived())

const multiplier = {
    numbers: [1,2,3,4,5,6,7],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number)
    }
}

console.log(multiplier.multiply())