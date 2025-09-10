/*global console*/
/*global alert*/
/*global confirm*/
/*global prompt*/
/*global document*/


'use strict'; // строка задаёт соответствие новому стандарту, старые ошибки работать не будут

let number = 5;

console.log(number);

let person = {         // тип данных - объект
    name: "John",  
    age: 25,           // св-ва объекта. Сначала ключ, потом двоеточие, потом значение
    isMarried: true
};

                                // дальше добираемся до значений какого либо св-ва
                                // есть разные способы (ниже)
console.log(person.name);       // через точку

console.log(person["name"]);       // через квадратные скобки
           //    0            1              2     // порядковые номера выступают ключом в массивах
let arr1 = ['plum.png', 'orange.jpg', 'apple.bmp']; // так создаётся массив. элементам массива автоматически присваевается порядковый номер, умерация начинается с нуля.

console.log(arr[2]);   // так можно достучаться до элемента массива.

3, 4, 7 // тип даных- числа
"string", 'string', `string` // тип данных =строки (записывается в кавычках)
true / false // логический тип данных

//можно превратить люой тип данных в строчный, существют разный способы
// 1)
/* String(null); */

console.log(typeof(String(null)));

//2)
 
console.log("" + 12);  //конкретинация - "припаиваем" другой тип данных, который нужно типизировать к кавычкам

//превращаем любой тип данных в число
// 1)
/* Number(null); */

console.log(typeof(Number(null)));

//2)

console.log(typeof(+ null)); // унарный плюс. Просто ставим + впереди

console.log(5 + +"5");

//let ans = +prompt("Hello?", "");//Все данные, которые мы получаем от пользователя будут иметь тип данных - строка.
                                // если поставить перед промпт унарный плюс, то полученный тип данных превратиться в число
//3)
console.log(typeof(parseInt('fsfsf', 10, null))); // с помощью команды "parseInt"

// 0, '', NaN, null, undefined - они всегда будут false

// Преобразование в логический тип данных

//1)

let switcher = null;

if (switcher) {
    console.log("Working...")
}
switcher = 1;

if (switcher) {
    console.log("Working...")
};

//2) 

console.log(typeof (Boolean(5)));

//3)
console.log(typeof !!(5)); // с помощью !!


//Общение

alert('Helloy');          // просто модальное окно
// confirm('Are you here?');      модальное окно с подтверждением
// prompt('Are you here?', 'Yes');     модальное окно со значением, после запятой- ответ по умолчанию


let answer = confirm('Are you here?');

console.log(answer);   // выводим в консоль значение переменной. Если нажимали "да" - выведет true, если нет то false

let secondAnswer = prompt('Are you here?', 'Yes'); // выводит вопрос с полем для ответа

console.log(secondAnswer);

let incr = 10,
    decr = 10;

incr++;            // операторы инкримент и дикремент. увеличивают или уменьшают соответсвенно на 1
decr--;

console.log(incr, decr);

console.log(++incr); //тоже маиое
console.log(--decr); // Если ++ или -- писать апереди, то сначала возвращает полученное значение и уже выведет возвращённок
                    // Если после, то выведет значение которое было и только потом возвратит (выполнит)

// = - присваивание, == - проверка равенства, === - сравение по типам данных

console.log(5%2); // % -это оператор, определяющий остаток отделения

let isChecked = true,
    isClose = true;

    // && - оператор "И"
    // || - оператор "или"
    // !- оператор отрицания
console.log(isChecked && !isClose);  //изза отрицания isClose будет false

let num = 50;

if (num < 49) {
    console.log("Неверно")
} else if (num > 100) {
    console.log("Много")
} else {
    console.log("Верно")
};
//дальше такая же запись только в виде тернарного оператора
(num == 50) ? console.log("Верно") : console.log("Неверно");


switch (num) {         //таже вместо элс/иф можно проверять переменную на соответствие с помощью "switch" 
    case num < 49:
        console.log("Неверно");
        break;        
    case num > 100:
        console.log("Много");  
        break;
    case num > 80:
        console.log("Тоже много");
        break;
    case 50:   // должна быть именно такая запись при проверке на соответствие, что "num == 50"
        console.log("Верно");
        break;
    default:   //"default" задать что будет, если соответствие не прошло ни одному условию (не обязательно, может и не быьт)
        console.log("Что -то пошло не так"); 
        break;
}

// ЦИКЛЫ

let num1 = 31;

/* while (num1 < 55) {           1) способ
    console.log(num1);
    num1++;           - итерация. Пока num1 будет меньше 55, к ней будет прибавляться +1 и она будет выводиться в консоль
} */

do {
    console.log(num1);        // 2) способ
    num1++;
}
while (num1 < 55);

for (let i = 1; i < 8; i++) { // 3) способ, самый распространённый
                            //  переменная , пока она меньше 8, будет увеличиваться на +1 и выводиться в консоль
    if (i == 6) {       // можем добавить условие, что когда будет равна 6, цикл остановится
        //break;
        continue     //при continue пропустится тролко одна итерация цикла - когда  i == 6
    } 
    console.log(i);         
}

// Функции

function showFirstMassage(text) { // (text) - аргумент фунуции
    alert(text);
}

showFirstMassage("Hellow World!"); // вызов функции

/* function calc(a,b) {    // простая функция для сложения. Вернёт сумму аргументов
    return (a + b)       // функция declaration её видно во всём коде
}; */

/* let calc = function(a,b) {    // еxpretion - а такую только после объявления
    return (a + b)
}; */

let calc = (a,b) => a+b;    // такая же функция, только в другой записи

console.log(calc(6,7));

function retVar() {
    let num = 50;   // с помощью return можно сделать из локальной переменнной глобалную
    return num;
}

let anotherNum = retVar() // помещаяем в новую переменную переменную из функции

let str = "yrst";
console.log(str.length);    // св во length  - определяет количиство симыолов

console.log(str.toUpperCase()); // toUpperCase() - метод
console.log(str.toLowerCase());

let twelve = "12.4px";
/* console.log(Math.round(twelve)); */ // метод для числа - округляет значение

/* console.log(Math.round(twelve)); */

console.log(parseInt(twelve));  // возвратит целое число    // заоднло и переводят в числовой тип данных
console.log(parseFloat(twelve)); // возвратит десятичнок

// callback функция . Задаём, что бы функция выполялась в строгом порядке

function learnJs(lang, callback) {    // в аргументах вторым параметром указываем callback
    console.log("Я учу " + lang);
    callback()                       // вызываем её тут жк
}

learnJs("Java script", function() {   // Тперь при вызове основной функции, ворым аргументом пишем нужжную функцию
    console.log("Я прошёл 3й урок");  // 1ой выплниться "Я учу Java script" 2ой - Я прошёл 3й урок
});

function learnJs(lang, callback) {    //  тоде самое
    console.log("Я учу " + lang);
    callback();                        
}

function done() {                  // только теперь отдельно задаём функцию
    console.log("Я прошёл 3й урок");
}

learnJs("Java script", done);     // и вызываем её вторым аргументомБ именно таким синтаксисом, без скобок



// объект 

let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

options["bool"] = true;

options["colors"] = {         // задаём основному объекту св-во, которое в свою очередь тоже есть объект.
    border : "black",
    bg : "red"
};

delete options["bool"];   // через delete можно удалять св ва

console.log(options);

for (let key in options) {    // так можно перебирать ключи в объекте
    console.log("Св-во " + key + " имеет значение " + options[key]);
}

console.log(Object.keys(options).length); // так можно вывести кол во св в в объекте

// Массивы



/* arr.pop(); // pop удаляет элемент массива
arr.push("5"); //push добавляет элеиент
arr.shift();  // удаляет первый элемент масства
arr.unshift("1"); // добавляет */
let arr2 = ["first", 2, 3, "four", 5];                // так перебираем элементы массива

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); 
} */
/* console.log(arr);  */

//2ой вариант перебора. С помощью forEach. могут быть 3 варианта аргумента у такой функции
//item- элемент массива, i - номер элеиента mass (или другое название массива) - сам массив
let arr3 = ["first", 2, 3, "four", 5]; 
arr3.forEach(function(item, i, mass){
    console.log(i + ": " + item + " (массив: " + mass + ")")
}); 

console.log(arr);

// 3й cпоcоб перебора

/* let mass = [1, 3, 3, 4, 6, 7];

for (key of mass) {
    console.log(key);
} */

let ans = prompt("" , ""),
    arr4 = [];           // с помощтю split момещаем занные из переменной ans в массив arr
arr4 = ans.split(",");  // в скобках указываем, кка будут разделены элементы массива
console.log(arr);


let arr5 = ["qqw", "www", "1212" , 11];
i = arr5.join(",") // join наоборот изз массива делает элемены одной строкой. в скобах тоже указываем как разделять
                // sort сделает тоже мамое что и join, только ещё и отсортирует по алфавиту

console.log(arr);
console.log(i); // i выведет просто строку

let arr6 = ["qqw", "www", "1212" , 11];
i = arr6.sort(","); // sort сделает тоже мамое что и join, только ещё и отсортирует по алфави
             


let arr = ["qqw", "www", "1212" , 11];  
i = arr.sort(compaireNum);        
                                        // что бы сортировать цифры по порядку используется такая callback функция
function compaireNum(a, b) {
    return (a - b);
}

console.log(arr);

//Работа с элементами со страницы

let box = document.getElementById("box"),              // по айди
    btn = document.getElementsByTagName("button"),             // по тегу
    circle = document.getElementsByClassName("circle"),       // по классу 
    heart = document.querySelectorAll(".heart"),
    oneHeart = document.querySelector(".heart");  // так получим только первый элемент с таким селектором

console.log(box);
console.log(btn);                     //если элементов по тегу много, то вывежеться псевдомассив с ними
console.log(btn[0]);                // так вывдем нужный элемент псевдомассива
console.log(circle[2]);
console.log(heart[1]);

box.style.backgroundColor = 'blue'; // ьак образаемся к стилям
btn[1].style.borderRadius = '100%';
circke[0].style.backgroundColor = 'red';
circke[1].style.backgroundColor = 'yellow';
circke[2].style.backgroundColor = 'green';

/* for (let i = 0; i < heart.length; i++) { // цикл будет выполняься, пока i будет < кол ва элем. heart в массиве
    heart[i].style.backgroundColor = 'blue';
}    */ 

heart.forEach(function(item, i, hearts) {
    item.style.backgroundColor = 'blue';
});
 
let div = document.createElement('div'); // так на странице создастся новый элемент  div
    
let text = document.createTextNode('Here I am');  //- так создаётся просто текстовый узел


div.classList.add('black'); // так добавляем класс

document.body.appendChild(div); //так добавляем наш созданный элемент в конец body

let wrapper = document.querySelectorAll('.box'); //берём родительский элемент

wrapper[0].appendChild(div); // так добавляем наш div в нужный родительский элемент

document.body.insertBefore(div, wrapper[0]); // так можно вставить элемент перед другим элементом. 1 аргумент - что вставляем 2- перед чем

document.body.removeChild(wrapper[0]); // так можно удалять элементы со страницы


wrapper[0].replaceChild(div , box[3]); //заместить элемент 1- каким элементом заменяем 2- какой именно элемент будем заменять

div.innerHTML = 'Hellow'; // так можно добавить код в жлемент
div.innerHTML = '<div>sefse</div>'; //добавить код в элемент
div.textContent = 'frfr';   //добавить текст

let button = document.getElementsByTagName('button');

/* button[1].onclick = (function(){ // обработчик события по клику
    alert('test click');
}); */

button[1].addEventListener('click', function(){ // более верный вариань использования
    alert('test click');                   // + так же можно добавлять несколько разных действий
    alert('second test click');
});

button[3].addEventListener('mousemove', function(){  //событие при наведении мыши
    button[3].style.backgroundColor = 'red';
});

button[1].addEventListener('click', function(e){       //указываем, что произошло событие, что бы узнать потом какое именно
    console.log("Произошло событие" + e.type + "на элеиенте" + e.target); // e.type - выводим какое именно событие произошло
});                                                                 // e.target- на каком именно элементе было событие

button[1].addEventListener('click', function(e){ 
    let target = e.target;           // тут задали переменную для таргета
    target.style.display = 'none';      
});

yearValue.value = new Date(Date.parse(time)).getFullYear();  //установка даты в инпут их переменной time
// срздаём объект new Date, преобразуем данные из переменной и getFullYear()- получаем год из переменной