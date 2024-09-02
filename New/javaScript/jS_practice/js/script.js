'use strict';

/* console.log("Helloy"); */

/* alert("helloy"); */


/* let answer = prompt("are you alive?"); */

/* console.log(answer); */

/* console.log(5%2); */

/* let isChecked = true,
    isClose = true;

console.log(isChecked && isClose); */
/* let val = 2 * 0; */

/* if (val == 0) {
    console.log("Пусто")
} else if (val < 6) {
    console.log("Меньше")
} else if (val > 6) {
    console.log("Больше")
} else {
    console.log("Верно")
}; */

/* let val = 0;

switch (val) {
    case 0:
        console.log("Пусто");
        break;
    default:
        console.log("Что то не так");
        break;
}; */

/* console.log(typeof (null)); */

/* let person = {
    name: 'John',
    age: '18',
    sayName: function () {
        alert('John');
    }
};

console.log(person.name); */

/* function showFirstMassage(text) { 
    alert(text);
}

showFirstMassage("Hellow World!"); */


/* function calc(a,b) {
    return (a + b)
};

console.log(calc(6,7)); */

/* function retVar() {
    let num = 30;   
    return num;
};

let anotherNum = retVar();
console.log(anotherNum);


let str = "yrst";

console.log(str.length); */

/* let options = {
    width: 1024,
    height: 1024,
    name: "test",
    desct: "lorem"
};

function addProperty() {
    let name = options.name;

    if (options.width > 1000){
        options["display"] = "flex";
    } else {
       alert("Wrong");
    }
};

addProperty(); */

/* let ans = prompt("" , ""),
    arr = [];           
arr = ans.split(",");  
console.log(arr); */


/* let arr = ["qqw", "www", "1212" , 11];
i = arr.join(","); 

console.log(arr); */

/* let arr = [1, 43, 2 , 4];  
i = arr.sort(compaireNum);        
                                        // что бы сортировать цифры по порядку используется такая callback функция
function compaireNum(a, b) {
    return (a - b);
}
console.log(arr); */







/* let box = document.querySelectorAll('.boxC'); */

/* box[2].style.backgroundColor = 'green'; */

/* box.forEach(function(item, i, boxes) {
    item.style.backgroundColor = 'green' ;
}); */




/* let div = document.createElement('div'); 
let wrapper = document.querySelectorAll('.box');
let text = document.createTextNode('Here I am');
let test = document.querySelectorAll('p');

console.log(text); */

/* div.style.width = '50px';
div.style.height = '50px';
div.style.backgroundColor = 'white';
   

div.classList.add('black');
console.log(div); */
/* 
wrapper[0].appendChild(div); */
/* document.body.appendChild(div); */
/* document.body.insertBefore(div, wrapper[0]); */

/* div.textContent = 'frfr'; */

/* let button = document.querySelectorAll('button'); */



/* button[1].onclick = (function(){
    alert('test click');
}); */

/* button[1].addEventListener('click', function(){
    alert('test click');
    alert('second test click');
}); */

/* button[3].addEventListener('mousemove', function(){
    button[3].style.backgroundColor = 'red';
});

button[3].addEventListener('mouseleave', function(){
    button[3].style.backgroundColor = '#fff';
}); */

/* button.forEach(function(item, i) {
    item.addEventListener('mousemove', function(){
        this.style.backgroundColor = 'red',
        box.forEach(function(item, i) {
            
            item.style.backgroundColor = 'blue';
        })
    });
}); */

/* let bix = document.querySelectorAll('.bix')[0];

let buttonColor = button[0].style.backgroundColor;
console.log(buttonColor);

button[1].addEventListener('click', function(e){ 
    let target = e.target;
    target.style.display = 'none';
});

let blackBlock = document.querySelectorAll('.black')[0];
let tag = document.querySelectorAll('p')[0];

blackBlock.addEventListener('click', function () {
    let textTag = tag.textContent;
    blackBlock.textContent = textTag;
    blackBlock.style.backgroundColor = buttonColor;
}); */

/* let timerId = setTimeout(sayHello, 3000);   
clearTimeout(timerId);   */

/* let timerId = setInterval(sayHello, 3000);

function sayHello() {
    alert('Hello');
} */

/* let timer = setTimeout(function recurseFunc() {
    console.log('Hello');
    setTimeout(recurseFunc, 2000);
}); */

/* let btn = document.querySelector('.btn'),
    elem = document.querySelector('.bix');

    function myAnimation() {
        let pos = 0;                   
        
        let id = setInterval(frame, 100); 
                                        
        function frame () {
            if (pos == 300) { 
                clearInterval(id);  
            } else {
                pos++
                pos = pos + 10;   
                elem.style.top = pos + 'px'; 
                elem.style.left = pos + 'px';
            }
        }
    }
    btn.addEventListener('click', myAnimation); */

    /* let block = document.querySelectorAll('.box')[0],
        box = document.querySelectorAll('.boxC');


        block.addEventListener('click', function(e) {
            if (e.target && e.target.matches('button.test')) {
                console.log("Hellow");
            }
        }); */

        /* console.log(btn);
        console.log(box); */

window.addEventListener('DOMContentLoaded', function(){
    let btn = Array.from(document.querySelectorAll('.btn')),
        box = Array.from(document.querySelectorAll('.boxC')),
        par = document.querySelector('.par');

        function paintBackground(a) {
            box[a].style.backgroundColor = 'yellow';
        }

        btn.forEach(function(item){
            item.addEventListener('click' , function(e){
                for(let i = 0; i < btn.length; i++) {
                    btn[i].classList.remove('btn_active');
                    this.classList.add('btn_active');

                    if (e.target == btn[i]) {
                        paintBackground(i); 
                    }       
                }    
            });
        })
});

/* let box = document.querySelectorAll(".box")[0],
    btn = document.querySelectorAll("button")[2]; */

/* let width = box.clientWidth,
    heigh = box.scrollHeight;

    console.log(width);
    console.log(heigh); */

    /* btn.addEventListener("click", function(){
        box.style.height = box.scrollHeight + "px";
        box.scrollTop = 0;
    }); */

    /* console.log(document.documentElement.clientWidth);
    console.log(document.documentElement.clientHeight); */
    
    /* console.log(document.documentElement.scrollTop);
    scrollBy(0, 200); */

    /* let user = {
        name : "John"
    };

    function sayName(surname) {
        console.log(this);   
        console.log(this.name + surname);
    }
    er
    sayName.call(user, "John"); 
    sayName.apply(user, ["SnoW"]); */


     /* function count(number) {
        return this * number;    //также можно привязываит методом bind        
    }
    let double = count.bind(2); // то что в скобках у bind - это и попадёт в this

    console.log(double(54)); */

    


/* let age = document.getElementById('age');

function showUser(surname, name) {
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.apply(age, ["Константин", "Иванов"]); */

/* let name = "Константин",
    yearsOld = 34,
    mail = "ivanoff1@i.ua";

    document.write(`Пользователь ${name} Возраст ${yearsOld}  Почта ${mail}`); */

/* function makeArray() {
    var items = [];

    for (var i = 0; i < 10; i++) {
        var item = function () {  
            console.log(i);
        };
        items.push(item);
    }
    return items;
}

var arr = makeArray();  */
let fun = () => {    
    console.log(this);
}

fun();  


let obj = {
    number : 5,
    sayName: function () {
        let say = () => {
            console.log(this);      
        };
        say();
    }
};

obj.sayName();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {      //
        console.log(this);
    };
    show();    
});


function calcOrDouble(number, basis = 2) {
    console.log(number*basis);
};

calcOrDouble(12);


class Rectangle {
    constructor(height, width) { 
        this.height = height;
        this.width = width;
    }
    calcArea() {                          // метод класса. !! запятые между методами, св-вами и тд Не ставятся
        return this.height*this.width;
    }
}

const square = new Rectangle(10, 20);

console.log(square.calcArea());



let video = ['yotube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

    console.log(internet);


    function log(a, b, c) {   
        console.log(a);
        console.log(b);
        console.log(c);
    }
    
    let numbers = [5, 7 ,4];   
    
    log(...numbers); 


let parent = document.querySelector('.parent'),
    tabs = Array.from(document.querySelectorAll('.tabs')),
    content = Array.from(document.querySelectorAll('.content'));

function contentHide(b) {
        for (let a = b; a < content.length; a++ ) {
            content[a].classList.remove('content_show');
            content[a].classList.add('content_hide');
        }
};

contentHide(1);

function contentShow(c) {
    if (content[c].classList.contains('content_hide')) {
        content[c].classList.remove('content_hide');
        content[c].classList.add('content_show');
    }
};

tabs.forEach(function(item) {
    item.addEventListener('click', function (e) {
        for (let i = 0; i < tabs.length; i++) {
            
            tabs[i].classList.remove('tabs_active');
            this.classList.add('tabs_active');

            if (e.target == tabs[i]) {
                contentHide(0);
                contentShow(i);
            }
        }
    });
});



function getTimeRamining() {
    let currentDate = new Date(),
        seconds = currentDate.getSeconds(),
        minutes = currentDate.getMinutes(),
        hours = currentDate.getHours(),
        days = currentDate.getDate();

    return {
        'seconds': seconds,
        'minutes': minutes,
        'hours': hours,
        'days': days
    }
};

function setTime() {
    let seconds = document.querySelector('.seconds'),
        minutes = document.querySelector('.minutes'),
        hours = document.querySelector('.hours'),
        dots = Array.from(document.querySelectorAll('.dots'));

    function updateTime() {
        let TimeRamining = getTimeRamining();
        seconds.textContent = TimeRamining.seconds;
        minutes.textContent = TimeRamining.minutes;
        hours.textContent = TimeRamining.hours;

        function zeroSet(value, time) {
            if ((value) < 10) {
                (time).textContent = "0" + (value);
            }
        }   

        zeroSet(TimeRamining.seconds, seconds);
        zeroSet(TimeRamining.minutes, minutes);
        zeroSet(TimeRamining.hours, hours);
    }

    function dotsToggle() {
        for (let i = 0; i < dots.length; i++)
            dots[i].classList.toggle('dots_show');
    }

    setInterval(updateTime, 1000);  
    setInterval(dotsToggle, 1000);
};

setTime();

let slideIndex = 1,
    slides = document.querySelectorAll('.slider__item'),
    prev = document.querySelector('.slider__prev'),
    next = document.querySelector('.slider__next');
    
    slideShow(slideIndex);

    function slideShow() {

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        if (slideIndex < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(function (item) {
            item.style.display = 'none';
        });


        slides[slideIndex - 1].style.display = 'block'; 
        
    }

    function plusSlide(n) {
        slideShow(slideIndex = slideIndex + n);
    }

    prev.addEventListener('click', function() {
        plusSlide(-1);
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains('slide-show')) {
                slides[i].classList.remove('slide-show') 
            }
            slides[i].classList.add('slide-hide');
        }
        
        
    });
    
    next.addEventListener('click', function(){
        plusSlide(1);
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains('slide-hide')) {
                slides[i].classList.remove('slide-hide') 
            }
            slides[i].classList.add('slide-show');
        }
        
    });






