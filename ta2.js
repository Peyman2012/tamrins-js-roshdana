const numbers = [1,2,3,4,5,9,6,8,-1,-48,-5,15];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);