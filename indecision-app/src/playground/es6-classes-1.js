class Person {
    constructor(name = 'John', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`
    }

}
// Sub Class
class Student extends Person {
    constructor(name, age, major, grade = 'unknown') {
        super(name, age)
        this.major = major
        this.grade = grade
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += `, Their major is ${this.major}.`
        }
        return description
    }
}

// Sub class
class Traveler extends Person {
    constructor(name, age, homeLocation = 'Unknowen') {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getHomeLocation() {
        return super.getGreeting() + `${this.homeLocation}`
    }
    getGreeting() {
        let greeting = super.getGreeting()

        if (this.homeLocation) {
            return `${greeting} I'm visiting from ${this.homeLocation}`
        }

        return greeting
    }

}

const me = new Traveler('Cristian Romero', 99, 'NewYork')
console.log(me.getGreeting())


const other = new Traveler()
console.log(other.getGreeting())
