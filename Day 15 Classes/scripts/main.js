// Example

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  /**
   * @param {number} score
   */
  set setScore(score) {
    this.score += score
  }
  /**
   * @param {string} skill
   */
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    console.log(this)
    return info
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }
}

console.log(Person.favoriteSkill())

class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city)
    this.gender = gender
  }

  saySomething() {
    console.log('I am a child of the person class')
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''
    let pronoun = this.gender == 'Male' ? 'He' : 'She'

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
    console.log(this)
    return info
  }
}

const s1 = new Student(
  'Asabeneh',
  'Yetayeh',
  250,
  'Finland',
  'Helsinki',
  'Male'
)
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'
s2.setSkill = 'Organizing'

console.log(s1)
console.log(s2)

console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())

console.log(s2.saySomething())
console.log(s2.getFullName())
console.log(s2.getPersonInfo())

// ------------------Level 1-----------------------
console.log("------------------Level 1-----------------------");

class Animal {
  constructor(name, age, color, legs) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }
  getInfoOfAnimal() {
    return `This ${this.name} is ${this.age} years old. It has ${this.color} color and ${this.legs} legs.`
  }
  get getName() {
    return this.name
  }
  get getAge() {
    return this.age
  }
  set setName(name) {
    this.name = name
  }
  set setColor(color) {
    this.color = color
  }
}

const duck = new Animal('duck', 3, 'black', 4)
console.log(duck.getInfoOfAnimal())
duck.setName = 'cow'
console.log(duck.getInfoOfAnimal())

class Dog extends Animal {
  constructor (age, color, legs) {
    super('Unkown', age, color, legs)
  }
  getInfoOfAnimal() {
    return `My dog is ${this.age} years old. It has ${this.color} color and ${this.legs} legs.`
  }
}

class Cat extends Animal {
  constructor (age, color, legs) {
    super('Unkown', age, color, legs)
  }
  getInfoOfAnimal() {
    return `My cat is ${this.age} years old. It has ${this.color} color and ${this.legs} legs.`
  }
}

const dog = new Dog(3, 'black', 4)
const cat = new Cat(4, 'yellow', 4)
console.log(dog.getInfoOfAnimal())
console.log(cat.getInfoOfAnimal())
