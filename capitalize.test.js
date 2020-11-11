const capitalize = require('./capitalize');

it('checks for a capitalized word', () => {
  expect(capitalize('string')).toBe('String');
});

it('checks for a capitalized word', () => {
  expect(capitalize('sTring')).toBe('String');
});

it('checks for a capitalized word', () => {
  expect(capitalize(1235)).toBe(1235);
});