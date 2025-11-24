const readline = require("readline");

class AdvancedCalculator {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  add(num1, num2) {
    console.log(num1 + num2);

    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    if (num1 === 0) {
      return 0;
    }

    if (num2 === 0) {
      console.log("Cannot divide by zero. Please try again.");
      return;
    }

    return num1 / num2;
  }

  find_square_root(n) {
    /*We are using n itself as initial approximation
   This can definitely be improved */
    let x = n;
    let y = 1;
    let e = 0.000001; /* e decides the accuracy level*/
    while (x - y > e) {
      x = (x + y) / 2;
      y = n / x;
    }
    return Math.floor(x);
  }

  find_factorial(n) {
    if (n === 1) {
      return 1;
    }

    return n * this.find_factorial(n - 1);
  }

  find_power(base, exponent) {
    if (exponent === 0) return 1;

    let res = 1;
    let power = Math.abs(exponent);

    for (let i = 0; i < power; i++) {
      res *= base;
    }

    return exponent > 0 ? res : 1 / res;
  }

  calculate_simple_interest(principal, rate, time) {
    return (principal * rate * time) / 100;
  }

  calculate_compound_interest(principal, rate, time, periods) {
    const base = 1 + rate / (100 * periods);
    const exponent = periods * time;

    const amount = principal * this.find_power(base, exponent);
    return amount;
  }

  run() {
    console.log(`
Please select an operation:

1: Add
2: Subtract
3: Multiply
4: Divide 
5: Find Square root 
6: Find Factorial
7: Find power

8: Exit
`);
    this.rl.question("Enter choice (1-5):", (choice) => {
      switch (choice) {
        case "1":
          this.performOperation("add");
          break;
        case "2":
          this.performOperation("sub");
          break;
        case "3":
          this.performOperation("mul");
          break;
        case "4":
          this.performOperation("div");
          break;
        case "5":
          console.log("Exiting....");
          this.rl.close();
          break;
        default:
          console.log("invalid operation");
          this.run();
      }
    });
  }

  performOperation(type) {
    this.rl.question("Enter first number ", (n1) => {
      this.rl.question("Enter second number ", (n2) => {
        const num1 = Number(n1);
        const num2 = Number(n2);

        let result;
        if (type === "add") {
          result = this.add(num1, num2);
          console.log(`Result: ${num1} + ${num2} = ${result}`);
        }
        if (type === "sub") {
          result = this.subtract(num1, num2);
          console.log(`Result: ${num1} - ${num2} = ${result}`);
        }
        if (type === "mul") {
          result = this.multiply(num1, num2);
          console.log(`Result: ${num1} * ${num2} = ${result}`);
        }
        if (type === "div") {
          result = this.divide(num1, num2);
          if (result !== undefined) {
            console.log(`Result: ${num1} / ${num2} = ${result}`);
          }
        }

        this.run();
      });
    });
  }
}

const calculator = new AdvancedCalculator();

calculator.run();
