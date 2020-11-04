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
  test('it returns "Buzz" for number 5', () => {
    expect(fizzBuzz(5)).toEqual('Buzz')
  })
  test('it returns "Buzz" for number 10', () => {
    expect(fizzBuzz(10)).toEqual('Buzz')
  })
  test('it returns "FizzBuzz" for number 15', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz')
  })
  //   test('it has numbers within a range 1-100', () => {
  //     expect(fizzBuzz(15)).toEqual('FizzBuzz')
  //   })
})
