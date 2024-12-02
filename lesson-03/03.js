// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

let max
function findLargest(a, b, c) {
  max = b > a ? b : a;
  max = max > c ? max : c;
  console.log(max);
}
