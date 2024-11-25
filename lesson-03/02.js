// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {
    const check = number % 2
    if (check === 0){
        console.log('Число: ' + number + ' чётное ')
    } else {
        console.log('Число: ' + number + ' не чётное')
    }
}

