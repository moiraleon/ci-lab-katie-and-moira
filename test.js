const {getGreeting,returnTwo,greeting,add,multiply,divide,subtract} = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('entry should return two',function(){
  expect(returnTwo(3)).toBe(2)
})

test('greeting should return Hello name',function(){
  expect(greeting('Dave')).toEqual('Hello Dave')
})

test('should return sum of num1 and num2', function(){
  expect(add(5,4)).toEqual(9)
})
describe('multiply divide and subtract functions',function(){
  test('multiply two numbers', function(){
      expect(multiply(4,2)).toEqual(8);
      expect(multiply(2,3)).toEqual(6);
  })
  test('dividing two numbers', function(){
      expect(divide(6,2)).toEqual(3);
      expect(divide(4,2)).toEqual(2);
  })
  test('subtracting two numbers', function(){
      expect(subtract(8,4)).toEqual(4);
      expect(subtract(9,3)).toEqual(6);
  })
})