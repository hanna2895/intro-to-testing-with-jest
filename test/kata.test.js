const add = require('../src/kata');

// checks that empty string returns 0
/test('should return 0 if empty string provided', () => {
  expect(add('')).toBe(0);
});

// // checks that a single element string returns the provided element
test('should return single provided element', () => {
  expect(add('1')).toBe(1);
});

// second loop
// makes sure that calculation of a multiple element string was done correctly
test('should return expected sum', () => {
  expect(add('1, 2, 3')).toBe(6);
});

// third loop - declaration of new separators and avoid entry of negative numbers
// focuses on a single separator
test ('should accept \n as separator', () => {
  expect(add('1\n2, 3')).toBe(6);
});

// make sure that we can configure a new separator directly within the input
test('should accept a custom separator', () => {
  expect(add('//;\n1, 2;3')).toBe(6);
});

// check that an error is thrown when a negative value is passed
test('should throw negative provided int', () => {
  expect(() => add('-5,2,-10,9')).toThrow();
});
