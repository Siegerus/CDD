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

let arr = [1, 43, 2 , 4];  
i = arr.sort(compaireNum);        
                                        // что бы сортировать цифры по порядку используется такая callback функция
function compaireNum(a, b) {
    return (a - b);
}
console.log(arr);

