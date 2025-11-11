class Person {
  static species = "Human"; // static property
  #ssn; // private field

  constructor(name, age, ssn) {
    this.name = name; // public
    this.age = age;
    this.#ssn = ssn; // private
  }

  get info() {
    return `${this.name} (${this.age})`;
  }

  set age(value) {
    if (value < 0) throw new Error("Invalid age");
    this._age = value;
  }

  static greet() {
    console.log("Hello from Person class!");
  }
}

class Employee extends Person {
  constructor(name, age, ssn, role) {
    super(name, age, ssn); // call parent constructor
    this.role = role;
  }

  display() {
    console.log(`${this.name} works as ${this.role}`);
  }
}

const emp = new Employee("Obito", 30, "123-45", "Developer");
emp.display(); // Obito works as Developer
console.log(emp.info); // Obito (30)
Employee.greet(); // Hello from Person class!
