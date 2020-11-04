const fizzBuzz = require('../src/fizzBuzz')

describe('FizzBuzz', () => {
  test('it returns 1 for number 1', () => {
    expect(fizzBuzz(1)).toEqual(1)
  })
})
