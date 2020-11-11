class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  // Error
  error() {
    return `${this.a} or ${this.b} is not a number. Please enter only numbers`;
  }

  // Sum
  sum() {
    if (typeof this.a !== 'number' || typeof this.b !== 'number') {
      return this.error();
    }
    return this.a + this.b;
  }

  // Substraction
  substract() {
    if (typeof this.a !== 'number' || typeof this.b !== 'number') {
      return this.error();
    }
    return this.a - this.b;
  }

  // Multiplication
  multiplication() {
    if (typeof this.a !== 'number' || typeof this.b !== 'number') {
      return this.error();
    }
    return this.a * this.b;
  }

  // Division
  division() {
    if (typeof this.a !== 'number' || typeof this.b !== 'number') {
      return this.error();
    }
    return this.a / this.b;
  }
}

module.exports = Calculator;