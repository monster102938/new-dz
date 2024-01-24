//1
let chasi2 = prompt('введите время')
if (chasi2 > 0, chasi2 < 6) {
    alert('Доброй ночи');
}else if(chasi2 > 6, chasi2 < 12){
    alert('Доброе Утро');
}else if(chasi2 > 12, chasi2 < 18){
    alert('Добрый День');
}else if(chasi2 < 18, chasi2 < 24){
    alert('Добрый вечер');
}else{
  alert('иди погуляй')
}

//2
let ask = +prompt('введите число')

if(ask %2 == 0){
    alert('четное');
} else if (ask %2 > 0){
    alert('нечетное');
}else{
    alert('не число');
}

//3
let bal = prompt('введите бал')
if (bal > 0, bal <= 60) {
    
    alert('Неудовлетворительно');
}

else if(bal > 60, bal <= 74){
    alert('Удовлетворительно');
}

else if(bal > 75, bal <= 89){
    alert('Хорошо');
}

else if(bal < 90, bal <= 100){
    alert('Отлично!');
}

else{
  alert('учи уроки')
}

// 4


let num1 = +prompt('введите число 1')
let operator = prompt(" + - / *")
let num2 = +prompt('введите число 2')

switch (operator) {
    case '+':
        alert(num1 + num2)
        break;
    case '-':
        alert(num1 - num2)
        break;    
    case "/":
        alert(num1 / num2)
        break;
    case "*":
        alert(num1 * num2)
        break;
    default:
        alert('lll')
        break;
}




