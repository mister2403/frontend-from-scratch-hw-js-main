// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {
    const check = number % 2;
    if (check === 0) {
        return true; 
    } else {
        return false;
    }
  }
  
//   let result = isEven(8);
//   console.log(result)