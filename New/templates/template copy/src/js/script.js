// import mod from "./module.js"
"use strict"

// import {sayHi} from "./module.js";

let input = document.querySelectorAll(".feed-form__input"),
	parentBox = document.querySelector(".box"),
	clickBox = document.querySelectorAll(".box__inner")[0],
		eventParent = document.querySelector(".events"),
		eventItem = document.querySelectorAll(".Event-item"),
		eventSpan = document.querySelector(".Event-item:nth-child(1) > span"),
	newElement = document.createElement("input"),
	btn = document.querySelector(".feed-form__button"),
	form = document.querySelector("form"),
	messageInput = document.querySelector(".box__input"),
	inputs = form.querySelectorAll("input"),
	scrollBox = document.querySelector(".scroll-box"),
	anyBtn = document.querySelector(".any-section__button"),
	scrollBtn = document.querySelector(".right-scroll-block__btn"),
	table = document.querySelector(".new-section__table");

let dropList = document.querySelector(".drop-menu > ul"),
		dropLi = document.querySelectorAll(".drop-menu > li"),
		dropHead = document.querySelector(".drop-menu__header"),
		arrowRight = document.querySelector(".drop-menu__header > span:nth-child(1)"),
		arrowDown = document.querySelector(".drop-menu__header > span:nth-child(2)");

let links = document.querySelectorAll(".event-section > div:nth-child(2) > a")[0];
		
		

let anyItems = document.querySelectorAll(".any-section__item");
document.querySelector(".any-section__button").style.marginTop = 67 + "px";


function scrollDown() {
	let item = document.querySelector(".item");
	window.onload = () => item.scrollIntoView();
}
// scrollDown();


//window
function setWindow() {
	let launchItem = document.querySelector("body > div.link-wrap > div:nth-child(1)");
	let win;
	let isOpen = false;
	launchItem.addEventListener("click", ()	=> { 
		if(isOpen) {
			if(win) win.focus();
			console.log("Window is already opened!");
			return;
		} 
		isOpen = true;
		let params = "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=300,left=100,top=100";
		win = open("popup.html", "window", params);
		win.focus();
		win.postMessage("test", "*");
		function setPopup() { 
			let link = win.document.createElement("link");
			link.href = "css/style.min.css";
			link.rel = "stylesheet";
			win.document.head.append(link);

			let div = win.document.createElement("div");
			div.innerHTML = "popups DIV";
			div.className = "popup";
			win.document.body.append(div);
			win.addEventListener("beforeunload", () => isOpen = false);
		}
		function onLoad() {
			setPopup();
			win.removeEventListener("load", onLoad);
		}
		win.addEventListener("load", onLoad);
		win.addEventListener("message", (e) => win.console.log(e.data));
	});
}
setWindow();


//модалка
function setModal() {
	let dialog = document.querySelector("body > section.dialog-section > dialog");
	let openItem = document.querySelector("body > section.accordeon-section > div > div:nth-child(4)");
	openItem.addEventListener("click", (e) => {		
		if(dialog.open) return;
		dialog.showModal();	

		function toClose(e) {
			if(e.target.closest(".dialog__inner-content")) return;
			dialog.close();
			dialog.removeEventListener("click", toClose);
		}
		dialog.addEventListener("click", toClose);
	});
}
setModal();


//Изменение размера контейнера при зажатой нопке мыши
function resizeContainer() {
	let item = document.querySelector(".item");
	let coords = item.getBoundingClientRect();

	item.addEventListener("mousemove", (e) => {
		if(e.clientX < item.clientWidth + coords.left - 3) item.style.cursor = "pointer";
		else item.style.cursor = "col-resize";
	});
	item.addEventListener("mousedown", (e) => {
		e.preventDefault();
		if(e.clientX > item.clientWidth + coords.left - 3) document.addEventListener("mousemove", toMove);;

		function toMove(e) {
			let newWidth = Math.min(document.documentElement.clientWidth - coords.left, e.clientX - coords.left);
			if(newWidth < parseInt(getComputedStyle(item).minWidth)) newWidth = parseInt(getComputedStyle(item).minWidth);
			item.style.width = newWidth + "px";
			item.style.cursor = "col-resize";
		}
		function endMove(e) {
			document.removeEventListener("mousemove", toMove);
			document.removeEventListener("mouseup", endMove);
		}
		
		document.addEventListener("mouseup", endMove);
	});
}
resizeContainer();

// Часы
let getTime = () => {
	let date = new Date();
	let s = date.getSeconds();
	if (s < 10) s = "0" + date.getSeconds();
	let m = date.getMinutes();
	if (m < 10) m = "0" + date.getMinutes();
	let h = date.getHours();
	if (h < 10) h = "0" + date.getHours();
	let obj  = {
			"seconds" : s,
			"minutes" : m,
			"hours" : h,
		};
		return obj;
};
function setClock() {
	let	seconds = document.querySelector(".clock__seconds"),
		minutes = document.querySelector(".clock__minutes"),
		hours = document.querySelector(".clock__hours"),
		start = document.querySelector(".clock-start"),
		stop = document.querySelector(".clock-stop");

	let setValue = () => {
		let values = getTime();
		hours.innerHTML = values.hours;
		minutes.innerHTML = values.minutes;
		seconds.innerHTML = values.seconds;
	}
	let int = null;

	let updateClock = () => {
		setValue();
		int = setInterval(() => setValue(), 1000);
	};
	updateClock();
	start.addEventListener("click", (e) => {
		if(e.target.closest(".clock-start")) {
			if(int !== null) clearInterval(int);
			updateClock();
		}
	});
	stop.addEventListener("click", (e) => {
		if(e.target.closest(".clock-stop")) {
			clearInterval(int);
		}
	});
}
setClock();
function setSecondClock() {
	let clock = document.querySelector(".test-clock"),
		secondsElem = clock.children[0],
		minutesElem = clock.children[1],
		hoursElem = clock.children[2],
		isOn = true,
		interval;
	function getValue() {
		let date = new Date(),
		seconds = date.getSeconds(),
		minutes = date.getMinutes(),
		hours = date.getHours();
		return {seconds,minutes,hours};
	}
	function setValue() {
		function plusZero(val) {
				if(val < 10) {
				return val = "0" + val;
				} else return val;
			}
		plusZero(getValue().seconds);
		plusZero(getValue().minutes);
		plusZero(getValue().hours);
		secondsElem.innerHTML = plusZero(getValue().seconds);
		minutesElem.innerHTML = plusZero(getValue().minutes);
		hoursElem.innerHTML = plusZero(getValue().hours);
	}
	setValue();
	interval = setInterval(setValue, 1000);

	document.addEventListener("click", (e) => {
		if(isOn) {
			isOn = false;
			clearInterval(interval);
			interval = null;
		} else {
			if(!e.ctrlKey || e.metaKey) return;
			clearInterval(interval);
			interval = setInterval(setValue, 1000);
			isOn = true;
		}
	});
}
setSecondClock();


scrollBox.addEventListener("scroll", function() {
	let scroll =  Math.abs((this.clientHeight - this.scrollHeight) + this.scrollTop);
	document.querySelector(".count-box").textContent = scroll;
});

form.addEventListener("click", (e) => {
	if (!e.target.closest(".feed-form__input")) return;
	if (e.target.dataset.counter) {
		e.target.value++;
	}
});


messageInput.addEventListener("input", (e) => {
	if(e.target.closest(".box__input")) {
		clickBox.forEach((item) => {
			item.textContent = messageInput.value;
		});
	}
});

parentBox.setAttribute("data-color-bg", "crimson-backgrond");
parentBox.dataset.colorBg = "khaki-backgrond";						 

if(parentBox.hasAttribute("data-color-bg")) {
	parentBox.dataset.colorBg = "crimson-backgrond";
}
if(parentBox.dataset.colorBg == "crimson-backgrond") {
	parentBox.removeAttribute("data-color-bg");
}

function setRightScroll() {
	scrollBtn.addEventListener("click", (e) => {
		if(document.querySelector(".right-scroll-block").scrollLeft >= document.querySelector(".inner").clientWidth - window.innerWidth) {
			document.querySelector(".right-scroll-block").scrollLeft = 0
			return
		}
		if (e.target.closest(".right-scroll-block__btn")) {
			document.querySelector(".right-scroll-block").scrollLeft += 100;
		} 
	});
}
setRightScroll();


clickBox.addEventListener("click", () => {
	window.scrollBy(0, 1200);
	setTimeout(() => window.scrollTo(0, 0), 1500);
	setTimeout(() => scrollBox.scrollIntoView({behavior : "smooth"}), 1000);
	console.log(window.scrollY);
});



let slides = document.querySelectorAll(".slider > .slider__wrapper > ul > li"),
		wrapper = document.querySelector(".slider__wrapper"),
		track = document.querySelector(".slider > .slider__wrapper > ul"),
		arrows = document.querySelectorAll(".slider > .slider__wrapper > button"),
		position = 0,
		count = 3;
		
let mooveTrack = () => {
		track.style.transform = `translateX(${position}px)`;
};

arrows[0].addEventListener("click", () => {
		position += slides[0].clientWidth * count;
		position = Math.min(position, 0)
		mooveTrack();
});



arrows[1].addEventListener("click", () => {
		position -= slides[0].clientWidth * count;
		position =  Math.max(position, -slides[0].clientWidth * (slides.length - count));
		mooveTrack();
});



let anyItem = document.querySelectorAll(".any-section__item")[0];
let getPosition = (elem) => {
	let topY =  elem.getBoundingClientRect().top + window.scrollY,
		leftX = elem.getBoundingClientRect().left + window.scrollX,
		rightX = elem.getBoundingClientRect().right + window.scrollX,
		bottomY =  elem.getBoundingClientRect().bottom + window.scrollY;
		return {
			top: topY,
			left: leftX,
			right: rightX,
			bottom: bottomY,
		}
}

let coord = getPosition(anyItem);
let div = document.createElement("div");
div.innerHTML = "This is DIV";

div.style.cssText = "position: absolute; color: red; font-size = 28px";
div.style.top = (coord.top + 60) + "px";
div.style.left = (coord.left + 60)+ "px";
// div.style.right = (coord.right + 60) + "px";
// div.style.bottom = (coord.bottom + 60)+ "px";
document.body.append(div);



document.querySelectorAll(".drop-menu__header > span").forEach(item => item.style.color = "green");
dropHead.style.cssText = "cursor: pointer";
dropList.style.cssText = "list-style-type: none;  margin: 0";
dropList.hidden = true;
arrowDown.hidden = true;
arrowRight.hidden = false;
dropHead.addEventListener("click", (e) => {
		if (e.target.closest(".drop-menu__header")) {
				if(arrowRight.hidden == true) arrowRight.hidden = false;
				else arrowRight.hidden = true;
				if(arrowDown.hidden == true) arrowDown.hidden = false;
				else arrowDown.hidden = true;
				if(dropList.hidden == true) dropList.hidden = false;
				else dropList.hidden = true;
		}
});


let menu = document.querySelector(".menu"),
	buttonss = document.querySelectorAll(".menu__button");
class Menu {
	constructor(elem) {
		elem.addEventListener('click', this.onClick.bind(this))
	}
	save() {
		console.log("save");
	}
	load() {
		console.log("load");
	}
	search() {
		console.log("search")
	}
	onClick(e) {
		let action = e.target.dataset.action;
		if(action) {
			this[action]();
		}
	}
}
new Menu(menu);

function contextTabMenu() {
	let list = document.querySelector(".event-list"),
	li = document.querySelectorAll(".event-list > li"),
	context = document.querySelectorAll(".event-list > li > ul");
let hideMenu = () => {
	for(let i = 0; i < context.length; i++) {
		if(getComputedStyle(context[i]).display == "block") context[i].style.display = "none";
	}
};
let showMenu = (i) => {
	if(getComputedStyle(context[i]).display == "none") context[i].style.display = "block";
};
let removeEvent = (e) => {
	list.classList.remove("active");
	document.removeEventListener("click", removeEvent);
	hideMenu();
};

list.addEventListener("contextmenu", (e) => {
	let target = e.target.closest("li");
	e.preventDefault();
	if(target) {
		e.currentTarget.classList.add("active");
		li.forEach((item, i) => {
			if(target == item) {
				hideMenu();
				showMenu(i);
			} 
			item.classList.toggle("testClass", item === target);
		});
	}
	if(e.currentTarget.classList.contains("active")) {
		document.addEventListener("click", removeEvent);
	}
});
}
// contextTabMenu();
function contextGenerableMenu() {
	let list = document.querySelector(".event-list"),
	li = document.querySelectorAll(".event-list > li");
let context;
let createElem = (target) => {
	if(document.querySelector(".context-menu")) return;
	list.classList.add("active");
	let coords = target.getBoundingClientRect();
	context = document.createElement("div");
	context.className = "context-menu";
	context.style.position = "absolute";
	context.style.width = 200 + "px";
	context.style.padding = 20 + "px";
	context.style.backgroundColor = "darkred";
	context.style.top = coords.top + target.offsetHeight + window.scrollY + "px";
	context.style.left = coords.left  + "px";
	context.innerHTML = "This is context menu";
	document.body.append(context);
};
let removeElem = (e) => {
	if(!document.querySelector(".context-menu")) return;
	if(e.target.closest(".context-menu")) return;
	list.classList.remove("active");
	context.remove();
	context = null;
}
list.addEventListener("contextmenu", (e) => {
	let target = e.target.closest("li");
	e.preventDefault();
	if(target) {
		li.forEach((item) => {
			if(item !== target){
				if(document.querySelector(".context-menu")) context.remove();
			} 
			createElem(target);
		});
	}
	if(e.currentTarget.classList.contains("active")) {
		document.addEventListener("click", removeElem);
	}
});
}
contextGenerableMenu();

let isDraggin = false;
function toDragging() {
	let ball = document.querySelector(".test-dropp__item");
	document.addEventListener("mousedown", (e) => {
		let target = e.target.closest(".test-dropp__item");
		if(!target) return;
		document.addEventListener("dragstart", (e) => e.preventDefault());
		let shiftY;
		let shiftX;
		startDrag();
		function onMouseMove(e) {
			toMove(e);
		}
		function onMouseUp() {
			stopDrag();
		}
		function toMove(e) {
			let newTop = e.clientY - shiftY;
			let newLeft = e.clientX - shiftX;
			if(newTop < 0) {
				newTop = 0;
				window.scrollBy(0, -10);
			} 
			if(newTop > document.documentElement.clientHeight - target.offsetHeight) {
				newTop = document.documentElement.clientHeight - target.offsetHeight;
				window.scrollBy(0, 10);
			} 
			if(newLeft < 0) newLeft = 0;
			if(newLeft > document.documentElement.clientWidth - target.offsetWidth) {
				newLeft = document.documentElement.clientWidth - target.offsetWidth;
			} 
			target.style.top = newTop + "px";
			target.style.left = newLeft + "px";
		}
		function startDrag() {
			if(isDraggin) return
			isDraggin = true;
			shiftY = e.clientY - target.getBoundingClientRect().top;
			shiftX = e.clientX - target.getBoundingClientRect().left;
			target.style.position = "fixed";
			document.addEventListener("mousemove", onMouseMove);
			document.addEventListener("mouseup", onMouseUp);
			toMove(e);
		}
		function stopDrag() {
			if(!isDraggin) return
			isDraggin = false;
			target.style.position = "absolute";
			target.style.top = parseInt(getComputedStyle(target).top) + scrollY  + "px";
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseup", onMouseUp);
		}
	});
}
// toDragging();


/* let contextMenu;
document.querySelector(".event-section").addEventListener("contextmenu", (e) => {
	if(document.querySelector(".contextmenu")) return;
	if(!e.target.dataset.context) return;
	e.preventDefault();
	contextMenu = document.createElement("div");
	contextMenu.className = "contextmenu";
	document.body.append(contextMenu);

	let coords = e.target.getBoundingClientRect();
	contextMenu.style.position = "absolute";
	contextMenu.style.width = 200 + "px";
	contextMenu.style.padding = 20 + "px";
	contextMenu.style.backgroundColor = "darkred";
	contextMenu.style.top = coords.top + window.scrollY + "px";
	contextMenu.style.left = coords.left + e.target.offsetWidth + "px";
	contextMenu.innerHTML = "This is context menu";

	if (document.querySelector(".contextmenu")) {
		document.addEventListener("contextmenu", removeItem);
		document.addEventListener("click", removeItem);
	} 
});
let removeItem = (e) => {
	if(e.target.dataset.context) return;
	if(e.target == contextMenu) return;
	document.removeEventListener("contextmenu", removeItem);
	document.removeEventListener("click", removeItem);
	contextMenu.remove();
	contextMenu = null;
}; */

function moveItem() {
		let f = (elem) => {
		elem.style.backgroundColor = "coral";
	}
	let toMove = () => {
		let count = 0
		return function(el) {
			count += 12;
			el.style.position = "relative";
			el.style.left = count + "px";
		}	
	}
	let move = toMove()
	eventItem.forEach((item) => {
		item.addEventListener("mousedown", (e) => e.preventDefault());
		item.addEventListener("mouseover", (e) => {
			let target = e.target.closest(".Event-item");
			if (!target) return;
				f(target);
		});
	});
	eventItem.forEach((item) => {
		item.addEventListener("click", (e) => {
			let target = e.target.closest(".Event-item");
			if (!target) return;
			move(target);
		});
	});
}
moveItem();

function testMouseEvent() {
	let wrapper = document.querySelector(".mouse-event__wrapper"),
		parent = wrapper.querySelectorAll(".mouse-event__parent"),
		p = wrapper.querySelectorAll(".mouse-event__inner-p"),
		a = wrapper.querySelectorAll(".mouse-event__inner-p > a"),
		tooltip = document.createElement("div");
		let currentItem = null;
		let timerId;
	let showElement = (e) => {
		let target = e.target.closest(".mouse-event__parent");
		if(!target) return;
		if(currentItem) return;
		currentItem = target;
		timerId = setTimeout(createElem, 500);
		function createElem() {
			if(currentItem) {
				let coords = target.getBoundingClientRect();
				tooltip.innerHTML = "This is tooltip";
				tooltip.style.position = "absolute";
				tooltip.style.padding = 15 + "px";
				tooltip.style.backgroundColor = "yellow";
				tooltip.style.transition = "all 0.3s";
				document.body.append(tooltip);
				tooltip.hidden = false;
				tooltip.style.top = coords.top + scrollY - tooltip.offsetHeight + "px";
				tooltip.style.left = coords.left + scrollX + "px";
			}
		}
	};
	let hideElement = (e) => {
		let target = e.target.closest(".mouse-event__parent");
		if(!target) return;
		let relatedTarget = e.relatedTarget;
		while(relatedTarget) {
			if (relatedTarget == currentItem) return;
			relatedTarget = relatedTarget.parentNode;
		}
		clearTimeout(timerId);
		timerId = null;
		tooltip.hidden = true;
		currentItem = null;
	};
	wrapper.addEventListener("mouseover", showElement);
	wrapper.addEventListener("mouseout", hideElement);
}
testMouseEvent();

function toDrag() {
	let anyDiv = document.querySelector(".any-div");
	anyDiv.style.padding = 30 + "px";
	anyDiv.style.position = "absolute";
	anyDiv.style.backgroundColor = "coral";
	anyDiv.style.width = 64 + "px";
	anyDiv.style.height = 64 + "px";
	anyDiv.style.borderRadius = 100 + "px";
	anyDiv.style.textAlign = "center";
	anyDiv.style.display = "flex";
	anyDiv.style.justifyContent = "center";
	anyDiv.style.alignItems = "center";
	// anyDiv.style.transition = "all 0.3s";
	anyDiv.style.left = 0;

	anyDiv.addEventListener("mousedown", (e) => {
		let shiftLeft =  e.clientX - anyDiv.getBoundingClientRect().left;
		let shiftTop =  e.clientY - anyDiv.getBoundingClientRect().top;
		
		let toMove = (e, shiftLeft, shiftTop) => {
			anyDiv.style.left = e.pageX - shiftLeft + "px";
			anyDiv.style.top = e.pageY - shiftTop + "px";
		};
		toMove(e, shiftLeft, shiftTop);

		let onMove = (e) => {
			toMove(e, shiftLeft, shiftTop)
		};
		document.addEventListener("mousemove", onMove);
		anyDiv.addEventListener("mouseup", () => {
			document.removeEventListener("mousemove", onMove);
		});
	});
	anyDiv.addEventListener("dragstart", (e) => e.stopPreventDefault());
}
toDrag();

// Реализация drugnDrop с изменение позиционирования бросаемого элемента 
function dragNdrop() {
	let dropItem = document.querySelector(".test-dropp__item");
	let dropTarget = document.querySelector(".test-dropp__target");
	let current = null;

	dropItem.addEventListener("mousedown", (e) => {
		let shiftY = e.clientY - dropItem.getBoundingClientRect().top;
		let shiftX = e.clientX - dropItem.getBoundingClientRect().left
		toDraggin();

		function toMove(e) {
			dropItem.style.top = e.clientY - shiftY + "px";
			dropItem.style.left = e.clientX - shiftX + "px";

			function toDrop() { 
				dropItem.hidden = true;
				let deeper = document.elementFromPoint(e.clientX, e.clientY);
				dropItem.hidden = false;
				if(!deeper) return
				let dropable = deeper.closest(".test-dropp__target");

				if(current != dropable) { 
					if(current) dropTarget.style.backgroundColor = "aqua";
					current = dropable;
					if(current) dropTarget.style.backgroundColor = "blue";
				};
			}
			toDrop();
		}
		function toDraggin() {
			dropItem.style.position = "fixed";
			document.addEventListener("mousemove", toMove);
			document.addEventListener("mouseup", endDraggin);
			toMove(e)
		}
		function endDraggin(e) { 
			dropItem.style.position = "absolute";
			dropItem.style.top = e.pageY - shiftY + "px";
			if(current) dropTarget.firstElementChild.innerHTML = "Dropping done!";
			else dropTarget.firstElementChild.innerHTML = "Target";
			document.removeEventListener("mousemove", toMove);
			document.removeEventListener("mouseup", endDraggin);
		}
	});
}
dragNdrop();


// аккордеон
function setAccordeon() {
	let accordeon = document.querySelector(".accordeon"),
	 	clickItem = accordeon.querySelectorAll(".accordeon__click");

	function hideContent(e) {
		if(e.target.closest(".accordeon")) return;
		for(let item of clickItem) {
			item.classList.remove("active");
			item.parentElement.style.maxHeight = 50 + "px";	
		}
		accordeon.classList.remove("active");
		document.removeEventListener("click", hideContent);
	}
	
	function clickHandler(e) {
		let target = e.target.closest(".accordeon__click");
		if(!target) return;
		e.currentTarget.classList.add("active");
		target.classList.toggle("active");

		clickItem.forEach((item) => {
			function setHeight(height) {
				/* item.classList.remove("active");*/ //что бы закрывались все вкладки
				item.parentElement.style.maxHeight = height + "px";	
			}
			if(item.classList.contains("active")) setHeight(target.offsetHeight + item.nextElementSibling.offsetHeight);
			else setHeight(50);
			if(e.currentTarget.classList.contains("active")) document.addEventListener("click", hideContent);
		});
	}
	accordeon.addEventListener("click", clickHandler);
}
setAccordeon();


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


/* 	function toRecurse(n) {
		if (n == 1) return n;
		let result = toRecurse( n - 1 );
		console.log(n);
	}
console.log(toRecurse(20)); */


/* // рекурсия с замыканием
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
console.log(func(15)); */

/* function summa(array, sum){
		sum += array.shift();
		if(array.length !=0){
				sum = rec(array, sum);
		}
		return sum;
}
console.log(rec([1,2,3], 0)); */


/* let battery = window.navigator.getBattery();
battery.then((res) => console.log(res)); */


/* (async () => {
	let battery = await window.navigator.getBattery();
	console.log(battery.level);
})(); */

/* document.addEventListener("click", () => {
	window.location.href = "https://ya.ru/search/?text=js+NavigatorUserMedia.getUserMedia()&lr=146";
}); */

// Пример установки и изменения своего дата-атрибута.Через "data-"обязательно. Тогда доступен "dataset"
/* <div id="elem" class="box" data-color-bg="blue-backgrond"></div>     - разметка*/     
/* .box[data-color-bg="crimson-backgrond"] {background-color: crimson;} - стили*/ 



/* // Функция возвращает массив из элементов, который потом добавяес на страницу
function createLayot() {
	let layot = [];
	for(let i = 0; i <= 5; i++) {
		let el = document.createElement("div");
		el.classList.add("alert-message");
		layot.push(el);
	}
	return layot;
}
document.body.append(...createLayot()); */



// DOM дерево из объекта с рекурсией
/* let data = {
	"Рыбы": {
		"форель": {},
		"лосось": {}
	},

	"Деревья": {
		"Огромные": {
			"секвойя": {},
			"дуб": {}
		},
		"Цветковые": {
			"яблоня": {},
			"магнолия": {}
		}
	}
};

function createTree(obj) {
	let ul = document.createElement("ul");
	document.body.append(ul);
	
	for(let items in obj) {
		let li = document.createElement("li");
		li.innerHTML = items
		ul.append(li);
		if(typeof obj[items] == "object") {
			let childrenUl = createTree(obj[items]);
			li.append(childrenUl)
		} 
	}
	return ul;
}
createTree(data); */


/* function setDate(year, month) {
	let date = new Date(year, month, 0);
	let tYear = date.getFullYear();
	let tMonth = date.getMonth();
	let tDays = date.getDate();
	let tDay = date.getDay();

	let datepicker = document.createElement("table");
	datepicker.classList.add("datepicker");
	document.body.append(datepicker);

	let tab = "<tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr>"

	for (let i = 0; i < getDay(date); i++) {
		table += '<td></td>';
		}
	for(let i = 0; i < tDays; i++) {
		tab += "<td>" + (i + 1) + "</td>";
		if(i % 7 == 6) {
			tab += "<tr></tr>";
		}
	}
	datepicker.innerHTML = tab;

	// // append rows
	// let i = 0;
	// while(i < 6) {
	// 	let row = document.createElement("tr");
	// 	datepicker.append(row);
	// 	i++;
	// }

	// // append cells
	// for(let rows of datepicker.rows) {
	// 	for(let i = 0; i < datepicker.rows.length; i++) {
	// 		let td = document.createElement("td");
	// 		rows.append(td);
	// 	}
	// }
	// // head
	// for(let head of datepicker.rows[0].cells) {
	// 	head.style.fontSize = 16 + "px";
	// 	head.textContent = "Дн";
	// }
	// // body
	// for(let rows of datepicker.rows) {
	// 	for(let i = 0; i < tDays; i++) {
	// 		Array.from(rows.cells)[i].innerHTML = i + 1;
	// 	}
	// }
	// return datepicker;
} */

	
/* // Вставить несколько li между li
let ul = document.getElementById("ul"),
	li = ul.querySelectorAll("li");
li[0].insertAdjacentHTML("afterend", "<li>2</li><li>3</li>"); */




/* function wrapper() {
	let arr = [];	
	function replicate(times, number) {
		if(number < 0) return arr = [];
		if(times <= 0) return;
		arr.push(number);
		replicate(times - 1, number);
		return arr;
	}
	return replicate;
}
let replicate = wrapper(); */




/* let arr = [[1, 3], [[1, 3], [1, 3]], ["smth"], [true], [{name: "Alex"}]];
let opened = arr.reduce((a, b) => {
	return a.concat(b);
});

let contextMenu;
class Handler {
	constructor(name) {
		this.name = name;
		
	}
	handleEvent(e) {
		let target = e.target.closest(".event-section__link");
		if (e.target.dataset.context && target) {
			e.preventDefault();
			target.classList.add("active");
			this.createElement(e);
		}
	}
	createElement(e) {
		contextMenu = document.createElement("div");
		contextMenu.className = "contextmenu";
		document.body.append(contextMenu);

		let coords = e.target.getBoundingClientRect();
		contextMenu.style.position = "absolute";
		contextMenu.style.width = 200 + "px";
		contextMenu.style.padding = 20 + "px";
		contextMenu.style.backgroundColor = "darkred";
		contextMenu.style.top = coords.top + window.scrollY + "px";
		contextMenu.style.left = coords.left + e.target.offsetWidth + "px";
		contextMenu.innerHTML = "This is context menu";
	}
}
let handler = new Handler("my Handler!");
links.addEventListener("contextmenu", handler);
let removeElement = () => {
	if(document.querySelector(".contextmenu") && document.querySelector(".event-section__link").classList.contains("active")) {
		document.querySelector(".event-section__link").classList.remove("active");
		document.querySelector(".contextmenu").remove();
		document.removeEventListener("contextmenu",removeElement);
		document.removeEventListener("click",removeElement);
	}
};
document.addEventListener("contextmenu",removeElement);
document.addEventListener("click",removeElement); */


// Обработка события при нажатии на 2 клавиши одновременно. Мой вариант + из гугла
/* let keys = {};
function onKeyUp(e) { 
	keys[e.code] = false;
}
function onKeyDown(e) {
	function runOnKeys(func, code1, code2, ... code_n) {
		keys[e.code] = true;
		if(keys[code1] && keys[code2]) {
			func();
		}  
		document.addEventListener("keyup", onKeyUp); 
	}
	runOnKeys(() => console.log("Привет!"), "KeyZ", "KeyQ");
}
document.addEventListener("keydown", onKeyDown); */

/* function runOnKeys(func, ...codes) {
		let pressed = new Set();
		document.addEventListener('keydown', function (event) {
			pressed.add(event.code);
			for (let code of codes) { // все ли клавиши из набора нажаты?
				if (!pressed.has(code)) {
					return;
				}
			}
			pressed.clear(); 
			func();
		});
		document.addEventListener('keyup', function (event) {
			pressed.delete(event.code);
		});
	}
	runOnKeys(
		() => alert("Привет!"),
		"KeyQ",
		"KeyW"
	); */


/* let select = document.getElementById("genres");
let options = select.options;
Array.from(options).forEach(item => {
	if(item.selected == true) console.log(`Текст:${item.text} Значение:${item.value}`);
});
let newSelect = document.createElement("option");
newSelect.textContent = "Классика";
select.append(newSelect);
newSelect.value = "classic";
newSelect.selected = true;
console.log(select.options[select.selectedIndex]); */

/* let myInput =  document.forms[1].one;

myInput.addEventListener("focus", (e) => {
	if(e.target.tagName == "INPUT") myInput.value = "Any value!";
	function onBlur(e) {
		myInput.value = "";
		myInput.removeEventListener("blur", onBlur);
	}
	myInput.addEventListener("blur", onBlur);
}); */

/* let arr = ["Key1","Key2","Key3","Key4","Key5","Key6","Key7"];
let res = arr.map((item, i, array) => { 
	return {
		["number " + item] : i + 1,
	}
}); */


/* let useers = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  let toGrouped = (arr) => {
    let grouped = arr.reduce((obj, curent) => {
        obj[curent.id] = curent;
        return obj;
    }, {} );
    return grouped;
  };
  console.log(toGrouped(useers)); */

function toFocusBlur() {
	let form = document.forms[1];
		input = form.elements.one;
	
		/* input.addEventListener("blur", (e) => {
			if(!input.value.includes("@")) {
				input.style.cssText = "border-color: red";
				input.value = "Enter your Email";
				input.focus();
			} else {
				input.style.borderColor = "";
				input.value = "";
			} 
		}); */
	form.addEventListener("focusin", (e) => {
		e.currentTarget.style.cssText = "border: 1px solid red";
	} );

	/* form.addEventListener("blur", (e) => {
		e.currentTarget.style.cssText = "";
	}); */
}
toFocusBlur();




/* // Вариант из решения
let table = document.getElementById('bagua-table');
let editingTd;
table.onclick = function(event) {
  // 3 возможных цели
  let target = event.target.closest('.edit-cancel,.edit-ok,td');
  if (!table.contains(target)) return;
  
  if (target.className == 'edit-cancel') {
    finishTdEdit(editingTd.elem, false);
  } else if (target.className == 'edit-ok') {
    finishTdEdit(editingTd.elem, true);
  } else if (target.nodeName == 'TD') {
    if (editingTd) return; // уже редактируется

    makeTdEditable(target);
  }
};
function makeTdEditable(td) {
  editingTd = {
    elem: td,
    data: td.innerHTML
  };

  td.classList.add('edit-td'); // td в состоянии редактирования, CSS применятся к textarea внутри ячейки

  let textArea = document.createElement('textarea');
  textArea.style.width = td.clientWidth + 'px';
  textArea.style.height = td.clientHeight + 'px';
  textArea.className = 'edit-area';

  textArea.value = td.innerHTML;
  td.innerHTML = '';
  td.appendChild(textArea);
  textArea.focus();

  td.insertAdjacentHTML("beforeEnd",
    '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
  );
}
function finishTdEdit(td, isOk) {
  if (isOk) {
    td.innerHTML = td.firstChild.value;
  } else {
    td.innerHTML = editingTd.data;
  }
  td.classList.remove('edit-td');
  editingTd = null;
} */


let inps = document.forms[1].elements;
let tests = document.querySelectorAll(".test-div");

let divv = document.querySelector(".my-div"),
	b = divv.getElementsByTagName("b")[0];


let range = new Range();

range.setStart(divv, 0);
range.setEnd(b, 1);



/* document.addEventListener("dblclick", () => {
	document.getSelection().removeAllRanges();
	document.getSelection().addRange(range);
	
}); */


/* document.onkeydown = () => {
	x = selected.getRangeAt(0).cloneContents();
	inp.value += x.firstChild.data;
} */

	/* document.onkeydown = () => {
	selected.setBaseAndExtent(divv, 0, divv, 1);
} */

/* setTimeout( () => console.log('timeout'), 0);

Promise.resolve('promise').then(console.log);

console.time('loop');
for (let i = 1; i < 1000000000; i++) {}
console.timeEnd('loop'); */

/* let i = 0;
let start = Date.now();
function countt() {
  // делаем тяжёлую работу
  for (let j = 0; j < 1e9; j++) {
    i++;
  }
  console.log("Done in " + (Date.now() - start) + 'ms');
}
countt(); */

/* function setPopup() {
	let launchItem = document.querySelector("body > div.link-wrap > div:nth-child(1)");
    let param = "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=300,left=100,top=100";
    let myWinwod;
    function setPopup() {
            let link = myWinwod.document.createElement("link");
            link.href = "css/style.min.css";
            link.rel = "stylesheet";
            myWinwod.document.head.append(link);

            let div = myWinwod.document.createElement("div");
            div.innerHTML = "popups DIV";
            div.className = "popup";
            myWinwod.document.body.append(div);
			myWinwod.addEventListener("message", (e) => {
				console.log(myWinwod.document);
				console.log("+")
			});
    }
    launchItem.addEventListener("click", () => {
        myWinwod = open("popup.html", "wind", param);
		let message = myWinwod.postMessage("message", "*");
		
        myWinwod.focus();
		let doc = myWinwod.document
		console.log(myWinwod.document);
        myWinwod.addEventListener("DOMContentLoaded", setPopup);
    });
}
setPopup(); */
/* 
class myClass {
	constructor({elem, width, padding, func}) {
		this.elem = elem;
		this.width = width;
		this.padding = padding;
		this.func = func;

		this.elem.style.width = this.width + "px";
		this.elem.style.padding = this.padding + "px";

		elem.addEventListener("click", (e) => {
			this.toConsole();
		});
	}
	toConsole() {
		this.func(this.elem);
	}
}
	
let func = (arg) => console.log(arg)
let z = new myClass({
	elem: item, 
	width: 120, 
	padding: 20,
	func: func,
}); */


/* let link = document.querySelector("body > section.mouse-event > div.mouse-event__wrapper > div:nth-child(1) > p:nth-child(3) > a");
let blob = new Blob(["any text"],{type: "text, plain"});
let file = new File(["../img/facebook.svg"], "file-name");
let reader = new FileReader();
// reader.readAsText(blob);
reader.readAsText(file);
// reader.readAsDataURL(blob);
// reader.readAsArrayBuffer(blob);
reader.onload = () => {
	console.log(reader.result);
} 
reader.onerror = () => {
	console.log(reader.result);
}  */


// Получаем данные с сервера в blob
let response = fetch("https://jsonplaceholder.typicode.com/posts");
response.then((response) => {
	let headers = response.headers;
	console.log(headers);
});
		

/* async function f() {
	let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
	let response = await fetch(url);

	let commits = await response.json(); // читаем ответ в формате JSON

	console.log(commits);
}
f(); */

async function getUsersFromGh() {
	let clickItem = document.querySelector("body > div.any-item1");
	async function getUsers(users) {
		let arr = [];
		let urls = await Promise.all(
			users.map(item => {
				return fetch(`https://api.github.com/users/${item}`)
				.then((responses) => {
					if(responses.status !== 200) arr.push(null);
					else arr.push(responses.json());
				})
				.catch((responses) => {return null});
			})
		) 
		let results = await Promise.all(arr);
		console.log(results);
		return results;
	}
clickItem.addEventListener("click", () => getUsers(["mojombo", "defunkt", "qwqqqwwq"]));
}
getUsersFromGh();






async function toSubmit(form, e) {
		if (!e.target.closest(".feed-form")) return;
		e.preventDefault();
		let formData = new FormData(form);
	try {
		let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			body : formData,
		});
		let json = await response.json();
		return json;
	}
	catch(e) {
		throw new Error(e.message);
	}
		
		/* let result = await console.log(json); */
	
}
function onSubmit(e) {
	toSubmit(form, e).then((result) => console.log(result));
}
form.addEventListener("submit", onSubmit);




























/* function loadData() {
	let cache = new Map();
	function wrapper(...url) {
		let arr = Promise.all(url.map(item => {
			return fetch(item);
		}))
		.then((responses) => {
			let jsons = Promise.all(responses.map(item => item.json())) 
			return jsons;
		})
		.then((jsons) => {
			for(let json of jsons) {
				if(cache.has(json.url)) {
					console.log("get!");
					return cache.get(json.url);
				} else {
					console.log("set!")
					return cache.set(json.url);
				}
			}
		})
		.catch((e) => {
			throw new Error(e.message)
		});
	}
	return wrapper
}
let f = loadData();
f(['https://api.github.com/users/remy'], [`https://api.github.com/users/iliakan`], [`https://api.github.com/users/si`]);
f(['https://api.github.com/users/remy'], [`https://api.github.com/users/iliakan`], [`https://api.github.com/users/si`]); */


function getData() {
	let cache = new Map();
	let arr = [];
	function wrapper(...url) {
		let promises = Promise.all(url.map(item => fetch(item)
			.then((responses) => {
				arr.push(responses.json())
			})
			.then((jsons) => {
				/* console.log(jsons) */
				/* for(let json of jsons) {
					if(cache.has(json.url)) {
						console.log("get!");
						return cache.get(json.url);
					} else {
						console.log("set!")
						return cache.set(json.url);
					}
				} */
			})
		)).then(() => {
			let res = Promise.all(arr.map(item => item)) ;
			return res
		})
		.then((res) => console.log(res))
	}
	return wrapper;
}

/* let foo = getData();
foo(['https://jsonplaceholder.typicode.com/posts'], [`https://jsonplaceholder.typicode.com/posts`], [`https://jsonplaceholder.typicode.com/posts`]); */






function toDropItem() {
	let ball = document.querySelector(".any-section__frop-ball");
	ball.style.display = "flex";
	ball.style.alignItems = "center";
	ball.style.justifyContent = "center";
	ball.style.position = "absolute";
	ball.style.width = 133+ "px";
	ball.style.height = 133 +"px";
	ball.style.textAlign = "center";
	ball.style.borderRadius = 100 + "%";
	ball.style.backgroundColor = "darkgray"
	ball.style.color = "darkgreen";

	
	ball.addEventListener("mousedown",(e) => {
		let target = e.target.closest(".any-section__frop-ball");
		if(!target) return;

		let coords = ball.getBoundingClientRect();

		let shiftX = e.clientX - coords.left;
		let shiftY = e.clientY - coords.top;

		function toMove(e) {
			ball.style.position = "fixed";
			let newY = e.clientY - shiftY;
			let newX = e.clientX - shiftX;
			if(newX > document.documentElement.clientWidth - ball.offsetWidth) newX = document.documentElement.clientWidth - ball.offsetWidth;
			if(newX < 0) newX = 0;
			if(newY > document.documentElement.clientHeight - ball.offsetHeight) newY = document.documentElement.clientHeight - ball.offsetHeight;
			if(newY < 0) newY = 0;
			ball.style.top = newY + "px";
			ball.style.left = newX + "px";
			
			ball.addEventListener("mouseup", toStop)
		}
		toMove(e);	

		function toStop(e) {
			ball.style.position = "absolute";
			ball.style.top = e.pageY - shiftY + "px";
			document.removeEventListener("mousemove", toMove);
		}
		document.addEventListener("mousemove", toMove);
	});

	
}

toDropItem();







/* let text = "any text"

function toTestPromisetext() {
	console.log("not in promise")
	return new Promise((resolve, reject) => {
		resolve(text);
	}).then((text) => console.log(text))
	.then(() => console.log("1 in promise"))
	.then(() => console.log("2 in promise"));
}
toTestPromisetext()
console.log("outer") */

/* async function toTestAsync() {
	let a = await console.log("await1");
	let b = await console.log("await2");
	console.log("not await");
	let c = await console.log("await3");
	console.log("not await");
}
toTestAsync(); */

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
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();