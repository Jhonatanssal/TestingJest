const Calculator = require('./calculator');

it('checks the sum of two numbers', () => {
  const sum = new Calculator(2, 4);
  expect(sum.sum()).toBe(6);
});

it('checks the sum of two strings', () => {
  const sum = new Calculator('a', 'b');
  expect(sum.sum()).toMatch('not a number');
});

it('checks the substraction of two numbers', () => {
  const subs = new Calculator(4, 2);
  expect(subs.substract()).toBe(2);
});

it('checks the substraction of two strings', () => {
  const subs = new Calculator('a', 'b');
  expect(subs.substract()).toMatch('not a number');
});

it('checks the multiplication of two numbers', () => {
  const mult = new Calculator(4, 2);
  expect(mult.multiplication()).toBe(8);
});

it('checks the multiplication of two strings', () => {
  const mult = new Calculator('a', 'b');
  expect(mult.multiplication()).toMatch('not a number');
});

it('checks the division of two numbers', () => {
  const div = new Calculator(9, 3);
  expect(div.division()).toBe(3);
});

it('checks the division of two strings', () => {
  const div = new Calculator('a', 'b');
  expect(div.division()).toMatch('not a number');
});
