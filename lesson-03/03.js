// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.


function findLargest(a, b, c) {
  max = b > a ? b : a;
  max = max > c ? max : c;
  return max;
}

let result = findLargest(15, 3, 100);
console.log(result)