// import mod from "./module.js"
"use strict"

// import {sayHi} from "./module.js";

let input = document.querySelectorAll(".feed-form__input"),
	clickBox = document.querySelectorAll(".box__inner"),
	newElement = document.createElement("input"),
	btn = document.querySelector(".feed-form__button"),
	form = document.querySelector("form"),
	messageInput = document.querySelector(".box__input"),
	inputs = form.querySelectorAll("input");

let anyItems = document.querySelectorAll(".any-section__item");

// console.log(clickBox.length);

/* let arr = [];
for(let i = 0; i < clickBox.length; i++) {
	arr.push(clickBox[i].clientWidth + 200);
	clickBox[i].style.width = arr[i] + "px";
}
let widthObj = arr.map(item => {
	return {
		width : item,
		any : "smth",
	  	}
});
console.log(widthObj); */



/* let i = clickBox.length;
while(i) {
	console.log("!"); 
	i--;
}  */

/* for (let i = 0; i < clickBox.length; i++) {
	clickBox[i].style.backgroundColor = "red";
} */

/* 	function toRecurse(n) {
		if (n == 1) return n;
		let result = toRecurse( n - 1 );
		console.log(n);
	}
console.log(toRecurse(20)); */


/* function countDown(number) {
    console.log(number);
    
    const newNumber = number - 1;
    if (newNumber > 0) {
        countDown(newNumber);
    }
}
countDown(4); */


// рекурсия с замыканием
let setRecourse = () => {
	let any = 0;
	function recourse(n) {
		any += 11;
		if (n == 1) return n;
		recourse(n - 1);
		return any;
	}
	return recourse
};
let func = setRecourse()
console.log(func(15));


console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
