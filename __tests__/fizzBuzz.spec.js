const fizzBuzz = require('../src/fizzBuzz')

describe('FizzBuzz', () => {
  test('it returns 1 for number 1', () => {
    expect(fizzBuzz(1)).toEqual(1)
  })
  test('it returns "Fizz" for number 3', () => {
    expect(fizzBuzz(3)).toEqual('Fizz')
  })
  test('it returns "Fizz" for number 6', () => {
    expect(fizzBuzz(6)).toEqual('Fizz')
  })
})
