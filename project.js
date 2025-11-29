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
    n = BigInt(Number(n)); // convert to BigInt
    console.log(n);

    let result = 1n;

    for (let i = 1n; i <= n; i++) {
      result *= i;
    }

    return result;
  }

  find_power(base, exponent) {
    if (exponent === 0) return 1;

    let res = 1;
    // If exponent is positive
    if (exponent > 0) {
      for (let i = 0; i < exponent; i++) {
        res *= base;
      }
      return res;
    }

    // If exponent is negative
    for (let i = 0; i > exponent; i--) {
      res *= base;
    }

    return 1 / res;
  }

  calculate_simple_interest(principal, rate, time) {
    principal = Number(principal);
    rate = Number(rate);
    time = Number(time);

    return (principal * rate * time) / 100;
  }

  calculate_compound_interest(principal, rate, time, periods) {
    principal = Number(principal);
    rate = Number(rate);
    time = Number(time);
    periods = Number(periods);

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
8: Calculate simple interest
9: Calculate compound interest
10: Exit
`);
    this.rl.question("Enter choice (1-10):", (choice) => {
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
          this.performSquareOperation();
          break;
        case "6":
          this.performFactOperation();
          break;
        case "7":
          this.performPowerOperation();
          break;
        case "8":
          this.perform_Calculate_simple_interest_operation();
          break;
        case "9":
          this.perform_calculate_compound_interest_operation();
          break;
        case "10":
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

  performFactOperation() {
    this.rl.question("Enter the Number: ", (n) => {
      const fact = this.find_factorial(n);
      console.log(`Factorial of ${n} is:`);
      console.log(fact.toString()); // print safely
      this.run();
    });
  }

  performPowerOperation() {
    this.rl.question("Enter the base number: ", (n1) => {
      this.rl.question("Enter the exponent number: ", (n2) => {
        const base = Number(n1);
        const exponent = Number(n2);

        const res = this.find_power(base, exponent);
        console.log("power is:");
        console.log(res);
        this.run();
      });
    });
  }

  performSquareOperation() {
    this.rl.question("Enter the number: ", (n1) => {
      const res = this.find_square_root(n1);
      console.log(`Square root of given number is: ${res}`);
      this.run();
    });
  }

  perform_Calculate_simple_interest_operation() {
    this.rl.question("Enter the principal Amount: ", (principal) => {
      this.rl.question("Enter the rate: ", (rate) => {
        this.rl.question("Enter the time: ", (time) => {
          const simpleInterest = this.calculate_simple_interest(principal, rate, time);
          console.log(`Simple interest is: ${simpleInterest}`);
          this.run();
        });
      });
    });
  }

  perform_calculate_compound_interest_operation() {
    this.rl.question("Enter the principal Amount: ", (principal) => {
      this.rl.question("Enter the rate: ", (rate) => {
        this.rl.question("Enter the time: ", (time) => {
          this.rl.question("Enter the period: ", (period) => {
            const compoundInterest = this.calculate_compound_interest(
              principal,
              rate,
              time,
              period
            );
            console.log(`Compound interest is: ${compoundInterest}`);
            this.run();
          });
        });
      });
    });
  }
}

const calculator = new AdvancedCalculator();

calculator.run();
