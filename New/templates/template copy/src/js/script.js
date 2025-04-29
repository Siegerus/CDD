// // import mod from "./module.js"
// "use strict"

// // import {sayHi} from "./module.js";

// let input = document.querySelectorAll(".feed-form__input"),
// 	parentBox = document.querySelector(".box"),
// 	clickBox = document.querySelectorAll(".box__inner")[0],
// 	newElement = document.createElement("input"),
// 	btn = document.querySelector(".feed-form__button"),
// 	form = document.querySelector("form"),
// 	messageInput = document.querySelector(".box__input"),
// 	inputs = form.querySelectorAll("input"),
// 	scrollBox = document.querySelector(".scroll-box"),
// 	anyBtn = document.querySelector(".any-section__button"),
// 	scrollBtn = document.querySelector(".right-scroll-block__btn"),
// 	table = document.querySelector(".new-section__table");

// let anyItems = document.querySelectorAll(".any-section__item");
// document.querySelector(".any-section__button").style.marginTop = 67 + "px";

// // Часы
// let getTime = () => {
// 	let date = new Date();
// 	let s = date.getSeconds();
// 	if (s < 10) s = "0" + date.getSeconds();
// 	let m = date.getMinutes();
// 	if (m < 10) m = "0" + date.getMinutes();
// 	let h = date.getHours();
// 	if (h < 10) h = "0" + date.getHours();
// 	let obj  = {
// 			"seconds" : s,
// 			"minutes" : m,
// 			"hours" : h,
// 		};
// 		return obj;
// };
// function setClock() {
// 	let	seconds = document.querySelector(".clock__seconds"),
// 		minutes = document.querySelector(".clock__minutes"),
// 		hours = document.querySelector(".clock__hours"),
// 		start = document.querySelector(".clock-start"),
// 		stop = document.querySelector(".clock-stop");

// 	let setValue = () => {
// 		let values = getTime();
// 		hours.innerHTML = values.hours;
// 		minutes.innerHTML = values.minutes;
// 		seconds.innerHTML = values.seconds;
// 	}
// 	let int = null;

// 	let updateClock = () => {
// 		setValue();
// 		int = setInterval(() => setValue(), 1000);
// 	};
// 	updateClock();
// 	start.addEventListener("click", (e) => {
// 		if(e.target.closest(".clock-start")) {
// 			if(int !== null) clearInterval(int);
// 			updateClock();
// 		}
// 	});
// 	stop.addEventListener("click", (e) => {
// 		if(e.target.closest(".clock-stop")) {
// 			clearInterval(int);
// 		}
// 	});
// 	//
// 	/* setTimeout(function updateClock() {
// 		setValue();
// 		int = setTimeout(updateClock,1000)
// 	});
// 	start.addEventListener("click", (e) => {
// 		if(e.target.closest(".clock-start")) {
// 			setTimeout(function updateClock() {
// 				setValue();
// 				if(int !== null) clearTimeout(int);
// 				int =  setTimeout(updateClock,1000)
// 			});
// 		}
// 	});
// 	stop.addEventListener("click", (e) => {
// 		if(e.target.closest(".clock-stop")) {
// 			clearTimeout(int);
// 		}
// 	}); */
// }
// setClock();




// messageInput.addEventListener("input", (e) => {
// 	if(e.target.closest(".box__input")) {
// 		clickBox.forEach((item) => {
// 			item.textContent = messageInput.value;
// 		});
// 	}
// });

// parentBox.setAttribute("data-color-bg", "crimson-backgrond");
// parentBox.dataset.colorBg = "khaki-backgrond";						 

// if(parentBox.hasAttribute("data-color-bg")) {
// 	parentBox.dataset.colorBg = "crimson-backgrond";
// }
// if(parentBox.dataset.colorBg == "crimson-backgrond") {
// 	parentBox.removeAttribute("data-color-bg");
// }

// // console.log(inputs[inputs.length-1]);

// /* let arr = [];
// for(let i = 0; i < clickBox.length; i++) {
// 	arr.push(clickBox[i].clientWidth + 200);
// 	clickBox[i].style.width = arr[i] + "px";
// }
// let widthObj = arr.map(item => {
// 	return {
// 		width : item,
// 		any : "smth",
// 	  	}
// });
// console.log(widthObj); */




// /* 	function toRecurse(n) {
// 		if (n == 1) return n;
// 		let result = toRecurse( n - 1 );
// 		console.log(n);
// 	}
// console.log(toRecurse(20)); */


// /* // рекурсия с замыканием
// let setRecourse = () => {
// 	let any = 0;
// 	function recourse(n) {
// 		any += 11;
// 		if (n == 1) return n;
// 		recourse(n - 1);
// 		return any;
// 	}
// 	return recourse
// };
// let func = setRecourse()
// console.log(func(15)); */

// /* function summa(array, sum){
//     sum += array.shift();
//     if(array.length !=0){
//         sum = rec(array, sum);
//     }
//     return sum;
// }
// console.log(rec([1,2,3], 0)); */


// /* let battery = window.navigator.getBattery();
// battery.then((res) => console.log(res)); */


// /* (async () => {
// 	let battery = await window.navigator.getBattery();
// 	console.log(battery.level);
// })(); */

// /* document.addEventListener("click", () => {
// 	window.location.href = "https://ya.ru/search/?text=js+NavigatorUserMedia.getUserMedia()&lr=146";
// }); */

// // Пример установки и изменения своего дата-атрибута.Через "data-"обязательно. Тогда доступен "dataset"
// /* <div id="elem" class="box" data-color-bg="blue-backgrond"></div>     - разметка*/     
// /* .box[data-color-bg="crimson-backgrond"] {background-color: crimson;} - стили*/ 



// /* let myDiv = document.createElement("div");
// myDiv.className = "alert-message";
// myDiv.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение." */

// /* let clone = myDiv.cloneNode(true);
// document.body.append(myDiv);
// document.body.prepend(clone); */
// // document.body.append(document.body.insertAdjacentHTML("beforeend", "<div class=box>!!!</div>"), document.createElement("div"), myDiv);


// /* // Функция возвращает массив из элементов, который потом добавяес на страницу
// function createLayot() {
// 	let layot = [];
// 	for(let i = 0; i <= 5; i++) {
// 		let el = document.createElement("div");
// 		el.classList.add("alert-message");
// 		layot.push(el);
// 	}
// 	return layot;
// }
// document.body.append(...createLayot()); */



// /* // динамический списо из prompt
// let ul = document.createElement("ul");
// document.body.append(ul);
// ul.className = "dynamic-list";

// function creatLi(elem, answer) {
// 	let li = document.createElement("li");
// 	li.textContent = answer;
// 	if(!answer) return;
// 	elem.append(li);
// }
// while(true) {
// 	let answer = prompt("Введите текст для элемента списка.", "");
// 	creatLi(document.querySelector(".dynamic-list"), answer);
// 	if (!answer) break;
// } */



// // DOM дерево из объекта с рекурсией
// /* let data = {
// 	"Рыбы": {
// 		"форель": {},
// 		"лосось": {}
// 	},

// 	"Деревья": {
// 		"Огромные": {
// 			"секвойя": {},
// 			"дуб": {}
// 		},
// 		"Цветковые": {
// 			"яблоня": {},
// 			"магнолия": {}
// 		}
// 	}
// };

// function createTree(obj) {
// 	let ul = document.createElement("ul");
// 	document.body.append(ul);
	
// 	for(let items in obj) {
// 		let li = document.createElement("li");
// 		li.innerHTML = items
// 		ul.append(li);
// 		if(typeof obj[items] == "object") {
// 			let childrenUl = createTree(obj[items]);
// 			li.append(childrenUl)
// 		} 
// 	}
// 	return ul;
// }
// createTree(data); */


// /*  let li = document.querySelectorAll("li");
// 	li.forEach(item => {
// 		if(item.children.length) {
// 			item.firstChild.textContent += item.querySelectorAll("li").length;
// 		}
// 	}); */

	
// /* function setDate(year, month) {
// 	let date = new Date(year, month, 0);
// 	let tYear = date.getFullYear();
// 	let tMonth = date.getMonth();
// 	let tDays = date.getDate();
// 	let tDay = date.getDay();

// 	let datepicker = document.createElement("table");
// 	datepicker.classList.add("datepicker");
// 	document.body.append(datepicker);

// 	let tab = "<tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr>"

// 	for (let i = 0; i < getDay(date); i++) {
// 		table += '<td></td>';
// 		}
// 	for(let i = 0; i < tDays; i++) {
// 		tab += "<td>" + (i + 1) + "</td>";
// 		if(i % 7 == 6) {
// 			tab += "<tr></tr>";
// 		}
// 	}
// 	datepicker.innerHTML = tab;

// 	// // append rows
// 	// let i = 0;
// 	// while(i < 6) {
// 	// 	let row = document.createElement("tr");
// 	// 	datepicker.append(row);
// 	// 	i++;
// 	// }

// 	// // append cells
// 	// for(let rows of datepicker.rows) {
// 	// 	for(let i = 0; i < datepicker.rows.length; i++) {
// 	// 		let td = document.createElement("td");
// 	// 		rows.append(td);
// 	// 	}
// 	// }
// 	// // head
// 	// for(let head of datepicker.rows[0].cells) {
// 	// 	head.style.fontSize = 16 + "px";
// 	// 	head.textContent = "Дн";
// 	// }
// 	// // body
// 	// for(let rows of datepicker.rows) {
// 	// 	for(let i = 0; i < tDays; i++) {
// 	// 		Array.from(rows.cells)[i].innerHTML = i + 1;
// 	// 	}
// 	// }
// 	// return datepicker;
// } */

	
// /* // Вставить несколько li между li
// let ul = document.getElementById("ul"),
// 	li = ul.querySelectorAll("li");
// li[0].insertAdjacentHTML("afterend", "<li>2</li><li>3</li>"); */


// // console.log(getComputedStyle(parentBox).marginTop);



// /* for(let i = 0; i < Object.values(obj).length; i++) {
// 	console.log(i);
// } */



// /* function showNotification(option) {
// 	let elem = document.createElement("div");
// 	document.body.append(elem);
// 	elem.innerHTML = option.html;

// 	elem.classList.add(option.className);
// 	Object.assign(elem.style, {
// 		position: "absolute",
// 		top: option.top + "px",
// 		right: option.right + "px",
// 		width: 200 + "px",
// 		height: 65 + "px",
// 		padding: "18px 18px" ,
// 		backgroundColor: "red",
// 		color: "orange",
// 		textAlign: "center",
// 		boxSizing: "border-box",
// 	});

// 	let int = setInterval(() => { 
// 		if (elem.style.display == "none") elem.style.display = "block";
// 		else elem.style.display = "none";
// 	} , 1000);
// 	return elem;
// }
// showNotification({ 
// 	top: 10,
// 	right: 10,
// 	html: "Hello World!",
// 	className: "welcome",
// }); */


// /* let styleObj = getComputedStyle(parentBox);
// let obj = {
// 	key1: "val",
// 	key2: "val",
// 	key3: "val",
// 	key4: "val",
// } */

// let data = {
// 	"Рыбы": {
// 		"форель": {},
// 		"лосось": {}
// 	},

// 	"Деревья": {
// 		"Огромные": {
// 		"секвойя": {},
// 		"дуб": {}
// 		},
// 		"Цветковые": {
// 		"яблоня": {},
// 		"магнолия": {}
// 		}
// 	}
// };


// /* function wrapper() {
// 	let arr = [];	
// 	function replicate(times, number) {
// 		if(number < 0) return arr = [];
// 		if(times <= 0) return;
// 		arr.push(number);
// 		replicate(times - 1, number);
// 		return arr;
// 	}
// 	return replicate;
// }
// let replicate = wrapper(); */

// // console.log(getComputedStyle(document.body).position);
// // console.log(clickBox.clientWidth);
// // console.log(clickBox.offsetWidth);



// scrollBox.addEventListener("scroll", function() {
// 	let scroll =  Math.abs((this.clientHeight - this.scrollHeight) + this.scrollTop);
// 	document.querySelector(".count-box").textContent = scroll;
// });


// clickBox.addEventListener("click", () => {
// 	window.scrollBy(0, 1200);
// 	setTimeout(() => window.scrollTo(0, 0), 1500);
// 	setTimeout(() => scrollBox.scrollIntoView({behavior : "smooth"}), 1000);
// 	console.log(window.scrollY);
// });



// // let x = anyItem.getBoundingClientRect().x;
// // let y = anyItem.getBoundingClientRect().y;
// // let elem = document.elementFromPoint(x, y)



// /* // Добавления элемента с сообщением относительно координат нужного элемента
// function creatElem(elem, text) {
// 	let left =  elem.getBoundingClientRect().left;
// 	let top =  elem.getBoundingClientRect().top;
// 	let message = document.createElement("div");
// 	document.body.append(message);

// 	message.style.position = "fixed";
// 	message.style.left = left + "px";
// 	message.style.top = top + "px";
// 	message.style.color = "red";
// 	message.innerHTML = text;
// 	return message;
// }
// let messageBox = document.createElement("div");
// document.body.append(messageBox);
// messageBox.append(creatElem(anyItem, "This is Item!"));
// setTimeout(() => messageBox.remove(), 3000); */


// // Добавление элемента с абсолютом относительно другого элемента
// let anyItem = document.querySelectorAll(".any-section__item")[0];
// let getPosition = (elem) => {
// 	let topY =  elem.getBoundingClientRect().top + window.scrollY,
// 		leftX = elem.getBoundingClientRect().left + window.scrollX,
// 		rightX = elem.getBoundingClientRect().right + window.scrollX,
// 		bottomY =  elem.getBoundingClientRect().bottom + window.scrollY;
// 		return {
// 			top: topY,
// 			left: leftX,
// 			right: rightX,
// 			bottom: bottomY,
// 		}
// }

// let coord = getPosition(anyItem);
// let div = document.createElement("div");
// div.innerHTML = "This is DIV";

// div.style.cssText = "position: absolute; color: red; font-size = 28px";
// div.style.top = (coord.top + 60) + "px";
// div.style.left = (coord.left + 60)+ "px";
// // div.style.right = (coord.right + 60) + "px";
// // div.style.bottom = (coord.bottom + 60)+ "px";
// document.body.append(div);


// /* let field = document.getElementById("field");
// 	//Внешний левый
// 	let topLeftOuter = field.getBoundingClientRect().top  + scrollY;
// 	let leftOuter = field.getBoundingClientRect().left + scrollX;
// 	//Внутренний левый
// 	let topInner = topLeftOuter + field.clientTop;
// 	let leftInner = leftOuter + field.clientLeft;
// 	//Внешний правый
// 	let topRightOuter = field.getBoundingClientRect().bottom + scrollY;
// 	let leftRightOuter = field.getBoundingClientRect().right + scrollX;
// 	// Внутренний правый
// 	let topRightInner = topRightOuter -   parseInt(getComputedStyle(field).borderBottomWidth) 
// 	let leftRightInner = leftRightOuter - parseInt(getComputedStyle(field).borderRightWidth)
// console.log(topLeftOuter + " : " + leftOuter);
// console.log(topInner + " : " + leftInner);
// console.log(topRightOuter + " : " + leftRightOuter);
// console.log(topRightInner + " : " + leftRightInner); */

// //Если боковой скролл дошёл до конца ширины блока, который скролился, то скролл слева =0(начинается сначала)
// /* function setRightScroll() {
// 	scrollBtn.addEventListener("click", (e) => {
// 		if(document.querySelector(".right-scroll-block").scrollLeft >= document.querySelector(".inner").clientWidth - window.innerWidth) {
// 			document.querySelector(".right-scroll-block").scrollLeft = 0
// 			return
// 		}
// 		if (e.target.closest(".right-scroll-block__btn")) {
// 			document.querySelector(".right-scroll-block").scrollLeft += 100;
// 		} 
// 	});
// }
// setRightScroll(); */

// let tabRow = table.querySelectorAll("tbody > tr");

// anyBtn.addEventListener("click", () => {

// 	tabRow.forEach((item) => {
// 		let td = document.createElement("td");
// 		item.append(td);
// 		td.textContent = "new td";
// 	});
// });

// let rows = table.rows;

// /* Array.from(rows).forEach((item) => {
// 	console.log(item.cells[0])
// 	let sorted = Array.from(item.cells[0]).sort();
// }); */

// let result = Array.from(rows).map(item => item.cells[0]); 

// result.sort((a,b) => b - a);
// table.tBodies[0].append(...result)
// console.log(result);







console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();