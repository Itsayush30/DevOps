const _name = Symbol('name');
const _age = Symbol('age');

class Person {
  constructor(name, age) {
    this[_name] = name;
    this[_age] = age;
  }

  getName() {
    return this[_name];
  }

  getAge() {
    return this[_age];
  }

  setName(name) {
    this[_name] = name;
  }

  setAge(age) {
    if (age > 0) {
      this[_age] = age;
    } else {
      console.log('Age must be a positive number');
    }
  }
}

const person = new Person('Ayush', 25);
console.log(person.getName()); 
console.log(person.getAge());  

person.setAge(26);
console.log(person.getAge());  

console.log(person[_age]); 