const reverseString = require('./reverseString');

it('check a reversed string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

it('check a reversed string', () => {
  expect(reverseString('string string')).toBe('gnirts gnirts');
});

it('check a reversed integer number', () => {
  expect(reverseString(123456)).toBe(654321);
});

it('check a reversed float number', () => {
  expect(reverseString(123.456)).toBe(654.321);
});
