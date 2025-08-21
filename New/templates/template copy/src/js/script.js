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

// Whether
function setWhether() {
	const API_KEY = "3313eade200c1be66cd128f80caabf6e";
	let longitude, latitude;

	let locationField = document.querySelector(".whether__location");
	let descriptionField = document.querySelector(".whether__description");
	let cells = document.querySelector(".whether-data__cell");
	let farenheit = document.querySelector(".whether-data__farenheit");
	let sunriseField = document.querySelector(".whether-info__sunrise");
	let sunsetField = document.querySelector(".whether-info__sunset");
	let whetherImage = document.querySelector(".whether__image");

	function onLoad() {
		if(navigator.geolocation) { 
			navigator.geolocation.getCurrentPosition((position) => {
			latitude = position.coords.latitude;
			longitude = position.coords.longitude;
			let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=ru`;
			
				async function getData(url, setDataCb) {
					try {
						let response = await fetch(url);
						let json = await response.json();
						setDataCb(json);
					}
					catch {
						throw new Error("Error!")
					}
				}
				getData(url, setData).catch((err) => console.log(err.name));
				
				function setData(json) {
					function getTargetTime(time) {
						let date = new Date(time * 1000);
						let hours = date.getHours();
						if(hours < 10) hours = "0" + date.getHours();
						let minutes = date.getMinutes();
						if(minutes < 10) minutes = "0" + date.getMinutes();
						let seconds = date.getSeconds();
						if(seconds < 10) seconds = "0" + date.getSeconds();
						return {
							"hours": hours,
							"minutes": minutes,
							"seconds": seconds,
						}
					}
					locationField.innerHTML = json.name;
					descriptionField.innerHTML = json.weather[0].description;
					cells.innerHTML = Math.round(json.main.temp - 273.15) + " C";
					farenheit.innerHTML = Math.round((json.main.temp*9/5) - 459,67) + " F";
					sunriseField.innerHTML = `${getTargetTime(json.sys.sunrise).hours} : ${getTargetTime(json.sys.sunrise).minutes} : ${getTargetTime(json.sys.sunrise).seconds}`;
					sunsetField.innerHTML = `${getTargetTime(json.sys.sunset).hours} : ${getTargetTime(json.sys.sunset).minutes} : ${getTargetTime(json.sys.sunset).seconds}`;
					whetherImage.src = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
					// console.log(json);
				}
			});
		} else console.log("geolocation is not available!");
	}
	window.addEventListener("DOMContentLoaded", onLoad);
}
setWhether();


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
				item.parentElement.style.maxHeight = height + "px";	
			}
			if(item.classList.contains("active")) {
				item.classList.remove("active"); //что бы закрывались все вкладки
				setHeight(target.offsetHeight + item.nextElementSibling.offsetHeight);
			} 
			else setHeight(50);
			if(e.currentTarget.classList.contains("active")) document.addEventListener("click", hideContent);
		});
	}
	accordeon.addEventListener("click", clickHandler);
}
setAccordeon();

// табы
function tabSet() {
	let parent = document.querySelector("body > section.tabs-section > div > div:nth-child(1)"),
		tabs = document.querySelectorAll(".tabs-section__tabs"),
		contentBoxes = document.querySelectorAll(".tabs-section__content");

	function hideContent(a) {
		for(let i = a; i < contentBoxes.length; i++) {
			contentBoxes[i].style.display = "none";
		}
	}
	hideContent(1);
	
	function showContent(j) {
		contentBoxes[j].style.display = "block";
	}

	function onClickTabs(e) {
		let target = e.target.closest(".tabs-section__tabs");
		if(!target) return;
		tabs.forEach((item, i) => {
			item.classList.remove("active");
			target.classList.add("active");
			// if(item.classList.contains("active")) это условие тоже работает
			if(item == target && target.classList.contains("active")) {
				hideContent(0);
				showContent(i);
			} 
		});
	}
	parent.addEventListener("click", onClickTabs);
}
tabSet();


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

		

/* async function f() {
	let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
	let response = await fetch(url);

	let commits = await response.json(); // читаем ответ в формате JSON

	console.log(commits);
}
f(); */

/* async function getUsersFromGh() {
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
getUsersFromGh(); */



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
	let current = null;
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

			ball.style.display = "none";
			let deeper = document.elementFromPoint(e.clientX, e.clientY);
			ball.style.display = "flex";
			if(!deeper) return;
			
			let dropTarget = deeper.closest("body > section.tabs-section > section > table");
			if(current != dropTarget) {
				if(current) document.querySelector("body > section.tabs-section > section > table").style.backgroundColor = "";
				current = dropTarget;
				if(current) {
					dropTarget.style.backgroundColor = "red";
				} 
			}
				
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

/* let urls = ['https://api.github.com/users/remy', `https://api.github.com/users/iliakan`, `https://api.github.com/users/si`];
function loadData(url) {
	function createCards() {
		for(let i = 0; i < 3; i++) {
			let cards = document.createElement("div");
			cards.className = "any-cards";
			cards.style.display = "flex";
			cards.style.flexDirection = "column";
			cards.style.maxWidth = 300 + "px";
			cards.style.margin = "0 auto";
			cards.style.marginBottom = 32 + "px";
			document.body.append(cards);
		}
	}
	createCards(); 
	function createElements(nodeName, className) {
		for(let i = 0; i < 3; i++) {
			let elem = document.createElement(nodeName);
			elem.classList.add(className);
			document.body.append(elem)
			document.querySelectorAll(".any-cards")[i].append(document.querySelectorAll("." + className)[i]);
		} 
	}
	createElements("img", "any-img");
	createElements("div", "any-divs");
	
	function toRequest(url) {
			let requests = Promise.all(url.map(item => {
				return fetch(item);
			})).then((responses) => {
				let jsons = Promise.all(responses.map(item => item.json()))
				console.log(jsons)
				return jsons
			})
				.then((jsons) => {
					jsons.forEach((item, i) => {
						let imgs = document.querySelectorAll(".any-img");
						let divs = document.querySelectorAll(".any-divs");
						imgs[i].src = item.avatar_url;
						divs[i].textContent = item.location;
					});
				})
	}
	setTimeout(() => toRequest(urls), 2000);  
}

document.addEventListener("scroll", () => {
	if(document.documentElement.getBoundingClientRect().bottom < document.documentElement.clientHeight + 10) loadData(urls);
}); */



let myForm = document.forms[0];
let urls = ["https://webhook.site/5555a98f-c3d9-407d-9fab-523daf038bd6", "https://jsonplaceholder.typicode.com/posts", "../reviews-form_telegram.php"];
function submitForm(form) {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		let formData = new FormData(myForm);

		let requests = Promise.all(urls.map(item => {
			return fetch(item, {
				method: "POST",
				body: formData,
			})
		})).then((responses) => {
			let results =  Promise.all(responses.map(item => item.status))
			return results;
		}).then((results) => console.log(results));
	});
}
/* submitForm(myForm); */


/* let fileForm  = document.forms[1];
function submitHandler(form, e) {
	e.preventDefault();
	let formData = new FormData(form);

	let request = fetch("https://webhook.site/b4b25183-2460-4744-9ab9-402b3907d146",{
		method: "POST",
		body: formData,
	}).then((response) => {
		let result = response.status;
		return result;
	})
}
fileForm.addEventListener("submit", (e) => submitHandler(fileForm, e)); */





/* 
	// Вот полный рабочий пример, который получает ответ сервера и в процессе получения выводит в консоли длину полученных данных
	async function readState() {
	// Шаг 1: начинаем загрузку fetch, получаем поток для чтения
	let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');

	const reader = response.body.getReader();

	// Шаг 2: получаем длину содержимого ответа
	const contentLength = +response.headers.get('Content-Length');

	// Шаг 3: считываем данные:
	let receivedLength = 0; // количество байт, полученных на данный момент
	let chunks = []; // массив полученных двоичных фрагментов (составляющих тело ответа)
	while(true) {
	const {done, value} = await reader.read();

	if (done) {
		break;
	}

	chunks.push(value);
	receivedLength += value.length;

	console.log(`Получено ${receivedLength} из ${contentLength}`)
	}

	// Шаг 4: соединим фрагменты в общий типизированный массив Uint8Array
	let chunksAll = new Uint8Array(receivedLength); // (4.1)
	let positionn = 0;
	for(let chunk of chunks) {
	chunksAll.set(chunk, positionn); // (4.2)
	positionn += chunk.length;
	}

	// Шаг 5: декодируем Uint8Array обратно в строку
	let result = new TextDecoder("utf-8").decode(chunksAll);

	// Готово!
	let commits = JSON.parse(result);
	alert(commits[0].author.login);
}
readState(); */


async function getDataa() {
	let response = await fetch("https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100");
	let reader = response.body.getReader();
	let receivedDataLength = 0;
	let receivedDataArr = [];
	while(true) {
		let result = await reader.read();
		if(result.done) break;
		receivedDataLength += result.value.length;
		receivedDataArr.push(result.value);
	}
	let arrayBuffer = new Uint8Array(receivedDataLength);
	for (let data of receivedDataArr) {
		arrayBuffer.set(data);
	}
	let decoded = new TextDecoder("utf-8").decode(arrayBuffer);
	let result = JSON.parse(decoded);
	console.log(result[0].author.login);
}
/* getDataa().catch((e) => {throw new Error(e.message)}); */

/* // объект AbortController для отмены fetch и других асинхронных задач.
let controller = new AbortController();
let promise = new Promise((resolve, reject) => {
			resolve(console.log("done!"));
			controller.signal.addEventListener("abort", () => reject(console.log("denied!") ))
		});
let responseee = fetch("https://jsonplaceholder.typicode.com/posts", {
	signal: controller.signal,
}).then((response) => console.log(response))
	.catch((err) => {
		if(err.name == "AbortError") console.log("Aborted!")
			else throw err;
	});
controller.abort(); */


/* let testItem = document.querySelector(".feed-form__button");
let coords = testItem.getBoundingClientRect();
testItem.style.border = "13px solid black";
testItem.addEventListener("mousemove", (e) => {
	// console.log( "e.offsetY " + e.offsetY)
	// console.log( "e.offsetX " + e.offsetX)
	if(e.offsetY > testItem.clientHeight || e.offsetY < 0) console.log("!");
	if(e.offsetX > testItem.clientWidth || e.offsetX < 0) console.log("!");
}); */


/* async function getResponse() {
	let controller = new AbortController();
	try {
		let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
		signal : controller.signal,
	});
	controller.abort();
		let reader = response.body.getReader();
		let resArray = [];
		let receivedDataLength = 0;
		while(true) {
			let {done, value} = await reader.read();
			
			if(done) {
				break;
			}
			resArray.push(value);
			receivedDataLength += value.length;
			console.log(receivedDataLength);
		}

		let arrayBuffer = new Uint8Array(receivedDataLength);

		resArray.forEach(item => arrayBuffer.set(item));
		let result = new TextDecoder("utf-8").decode(arrayBuffer);
		let final = JSON.parse(result)
		console.log(final[0].title);
	} 
	catch(err) {
		if(err.name == "AbortError") console.log("Aborted")
		else {
			throw err;
		}
	}
}
getResponse(); */

/* let targetForm = document.forms[0];
async function formSumbmit(e) {
	e.preventDefault();
		let formData = new FormData(targetForm);
		let response = await fetch("https://webhook.site/5579d741-145a-4bf0-9c6a-3ec9f39f8b87", {
			method: "POST",
			body: formData,
		});
		if(response.ok) alert("Succes!");
		
		let promise = await new Promise(resolve => resolve(console.log("in promise")));
		console.log("sync code..");
}
targetForm.addEventListener("submit", (e) => formSumbmit(e).catch((err) => console.log(err.message))); */

/* let obj = {
	"key1": "value1",
	"key2": "value2",
	"key3": "value3",
}
let json = JSON.stringify(obj);

let response = fetch("https://webhook.site/8e99c615-a51d-4d00-b34f-fbd4c047d03d", {
	method: "POST",
	headers: {
		"Content-Type" : "application/json;charset=utf-8",
	},
	body: json,
})
	.then((response) => response.ok)
	.then((result) => {
		console.log(result);
	}); */


let targetForm = document.forms[1]; 
let targetInput = targetForm.elements.two;

targetForm.addEventListener("submit", (e) => {
	e.preventDefault();
	/* subscribe(); */
	/* getResponse(); */
});

/* targetInput.addEventListener("input", () => {
	let fileId = targetInput.files[0].name;
	console.log(fileId);
}); */

async function getResponse() {
	if(!targetInput.files[0]) {
		alert("There is no any file...");
		return;
	}
	let data = new FormData(targetForm);
	let fileId = targetInput.files[0].name + '-' + targetInput.files[0].size + '-' + targetInput.files[0].lastModifiedDate;
	console.log(fileId);
	  
	try {
		let response = await fetch("https://webhook.site/8c589265-cf7b-4b76-b862-0c40fd414820", {
			/* headers: {
				"X-File-Id": fileId,
			}, */
			method: "POST",
			body: data,
		});
		let responseText = await response.text();
		console.log(responseText);
	}
	catch(err) {
		console.log(err);
	}
}


// async function subscribe() {
// 	let response = await fetch("https://webhook.site/5579d741-145a-4bf0-9c6a-3ec9f39f8b87");
// 	console.log(response.status);
// 	if(response.status == 502) await subscribe();
// 	else if(response.status != 200) {
// 		await new Promise(resolve => setTimeout(resolve, 1000));
// 		alert(response.statusText + " - " + "Smth went wrong!");
// 		await subscribe();
// 	} 
// 	else {
// 		let responseText = await response.text();
// 		console.log(response.ok);
// 		console.log(responseText);
// 		await subscribe();
// 	}
// }
// /* subscribe(); */


/* async function subscribe() {
    let response = await fetch("https://webhook.site/8e99c615-a51d-4d00-b34f-fbd4c047d03d");
    if (response.status == 502) {
      // Таймаут подключения
      // случается, когда соединение ждало слишком долго.
      // давайте восстановим связь
      await subscribe();
    } else if (response.status != 200) {
      // Показать ошибку
      showMessage(response.statusText);
      // Подключиться снова через секунду.
      await new Promise(resolve => setTimeout(resolve, 1000));
      await subscribe();
    } else {
      // Получить сообщение
      let message = await response.text();
      console.log(message);
      await subscribe();
    }
  } */




/* let eSource = new EventSource("https://webhook.site/594c4fac-425b-4c39-a265-2c36adc63f61"); */
// console.log(eSource);

/* eSource.onopen = () => console.log(eSource.readyState); */

/* window.addEventListener("visibilitychange", () => {
	if(document.visibilityState == "hidden") alert("Вы всё ещё на станице?");
	
}); */

// let url = [
// 	'https://api.github.com/users/iliakan',
// 	'https://api.github.com/users/rem',
// 	'https://api.github.com/users/jeresig'
// ];
// let counter = 0;

// function createElem() {
// 	let arr = [];
// 	for(let i = 0; i < url.length; i++) {
// 		let img = document.createElement("img");
// 		arr.push(img);
// 	}
// 	return arr;
// }

// async function getAvatars() {
// 	let responses = await Promise.all(url.map(item => fetch(item)));
// 	responses.forEach(response => {
// 		if(response.ok) {
// 			console.log(`${response.status} Success responses!`);
// 		} 
// 		else {
// 			console.log(`Response failed! Reason: ${response.status}`);
// 			/* throw new Error("Response failed!"); */
// 		}
// 	});
// 	let jsons = await Promise.all(responses.map(item => item.json()));
// 	let avatarLinks = jsons.map(item => item.avatar_url);

// 	function setImages() {
// 		let images = createElem();
// 		Promise.all(
// 			images.map((item, i) => {
// 				return new Promise((resolve) => {
// 					if(!avatarLinks[i]) return;
// 					else item.src = avatarLinks[i];
// 					resolve(item);
// 				});
// 			})
// 		).then((images) => {
// 			images.forEach(img => img.onload = () => {
// 				counter += 1;
// 				if(counter == images.length) console.log("All avatars loaded!");
// 				else console.log(`${counter} avatars loaded!` );
// 			});
// 			document.body.append(...images);
// 		})
// 		.catch((err) => console.log(err));
// 	}
// }
// getAvatars().catch((err) => {throw new Error("!!!")});

/* let name = "my name";
let value = "John Smith"
document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value); */
let counter = 0;
let arr = [];
let url = [
	'https://api.github.com/users/iliakan',
	'https://api.github.com/users/rem',
	'https://api.github.com/users/jeresig'
];

async function getData(url) {
	let responses = await Promise.all(url.map(item => fetch(item)));
	
	let jsons = await Promise.all(
		responses.map(item => {
			if(item.ok) return item.json();
			else {
				throw new Error("Responses failed!");
			}
		}));
	
	await Promise.all(
		jsons.map((item, i) => {
			return new Promise((resolve, reject) => {
				let img = document.createElement("img");
				img.src = jsons[i].avatar_url;
				img.onload = function() {
				counter += 1;
				arr.push(img);
				
				if(counter == 3) resolve();
				else img.onerror = () => reject();
				}
			}).then(() => {
				document.body.append(...arr);
			})
			.catch((err) => console.log(err + " " + "Error! Not loaded..."))
		})
	).catch((err) => console.log(err));
}
/* getData(url) */

/* // Деструктуризация 
let options = {
    size: {     // переменные для size и items отсутствуют, так как мы взяли сразу их содержимое.
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};
let { size: {width, height}, items : [item1, item2], extra } = options

console.log(width); //100
console.log(height); //200
console.log(item1);	//Cake
console.log(item2); //Donut
console.log(extra); //true */


/* let urll = new URL('https://google.com/search');

urll.searchParams.set("q", "test");
urll.searchParams.set('tbs', 'qdr:y');

for (let [name, value] of urll.searchParams) {
	console.log(name + " : " + value);
} */

// // cookie
// let date = new Date(Date.now() + 100000);
// date = date.toUTCString();

// document.cookie = "name=John surname=Snow; path=/"; //Как правило, указывают путь path=/, чтобы куки было доступно на всех страницах
// document.cookie = "name=John surname=Snow; domain=site.com"; // куки доступным для всех поддоменов *.site.com
// document.cookie = "name=John surname=Snow; secure"; // куки будет доступно только через HTTPS
// document.cookie = "name=John surname=Snow; samesite=lax"; // защита от XSRF атак, мягкий вариант. samesite=strict - жесткий
// /* document.cookie = `name=John surname=Snow; expires=${date}`; // куки удалятся через 100000мл/сек от "сейчас"(Date.now()) */
// document.cookie = `name=John surname=Snow; max-age=2`; // куки удалятся через 0сек (т.е сразу. Или поставить другое значение)
// console.log(document.cookie); 
// setTimeout(() => console.log(document.cookie), 3000);
 
/* function f(name, surname) {
	let obj = {
		"key1" : true,
		"key2" : false,
		"key3" : 1,
		"key4" : "smth",
	}

	let result = name + " - " + surname;

	for (let key in obj) {
		let targetKey = key;
		let targetValue = obj[key];
		result += "; " + targetKey + " = " + targetValue
	}
	return result;
}
f("John", "Smith"); */


/* function returnValue() {
	let sum = 0 + 0;
	let bull = false;
	let str = "";
	return  sum || bull || str;
} */


/* document.cookie = encodeURIComponent("user1") + "=" + encodeURIComponent("name1") + "; max-age=30";
document.cookie = encodeURIComponent("user2") + "=" + encodeURIComponent("name2") + "; max-age=30";
document.cookie = encodeURIComponent("user3") + "=" + encodeURIComponent("name3") + "; max-age=30";
console.log(document.cookie); */

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

/* // Селект, который записывает выбранный option в cookie и при обновлении страницы он сохраняется
let mySelect = document.getElementById("select");
function setValue() {
	if(!document.cookie.includes("cityValue")) return;
	let cookieCollection = document.cookie.split("; ");
	let filtered = cookieCollection.filter(item => item.includes("cityValue"));
	let targetArray = filtered.map(item => item.split("="));
	if(targetArray) mySelect.value = targetArray[0][1];
	// Ниже превращение массива сначала в объект и только потом утановка value.
	let townObject = targetArray.reduce((obj, item) => {
	obj[item[0]] = item[1];
	return obj;
	}, {})
	if(townObject) mySelect.value = townObject.cityValue;
}
setValue();
mySelect.addEventListener("input", () => document.cookie = `cityValue=${mySelect.value}; max-age=10`); */




// // indexedDB
// let openRequest = indexedDB.open("store", 1);// запрос

// openRequest.addEventListener("upgradeneeded", () => { //Обновление бд. Событие также работает, если базы ещё не существует
// 	console.log("upgradeneeded event!");
// 	let db = openRequest.result; // объект базы данных, с которым будем работать
// 	console.log(db);
// 	//Хранилище объектов можно создавать/изменять только при обновлении версии базы данных в обработчике upgradeneeded.
// 	if (!db.objectStoreNames.contains("books")) { // если хранилище "objectStore" не существует
//     	let books = db.createObjectStore("books", {keyPath: "id"}); // создаём хранилище

// 	// index - структура данных для посика по индексированному полю.Индексы создаються в upgradeneeded,как и хранилище объектов
// 		let index = books.createIndex('price_idx', 'price'); // Индекс будет отслеживать поле price.
//   	}
// 	/* db.deleteObjectStore('books') */  // удалить хранилище объектов

// });
// openRequest.addEventListener("success", (e) => { // После upgradeneeded сработает событие success	
// 	// при попытке обновления на объекте базы возникает событие versionchange
// 	let db = openRequest.result;
// 	db.addEventListener("versionchange", () => console.log("versionchange event!"));
	
// 	//Все операции с данными в IndexedDB могут быть сделаны только внутри транзакций.
// 	let transaction = db.transaction("books", "readwrite");
// 	let books = transaction.objectStore("books"); // получить хранилище объектов для работы с ним
// 	console.log(books);

// 	let book = {
// 		id: 'js',
// 		price: 10,
// 		created: new Date()
// 	};

// 	let request = books.add(book, /* "myKey" */); // Выполнить запрос на добавление элемента в хранилище объектов 

// 	// add(value, [key]) То же, что put, но если уже существует значение с таким ключом, 
// 	// то запрос не выполнится, будет сгенерирована ошибка с названием "ConstraintError".

// 	// put(value, [key]) Добавляет значение value в хранилище. Ключ key необходимо указать, 
// 	// если при создании хранилища объектов не было указано свойство keyPath или autoIncrement. 
// 	// Если уже есть значение с таким же ключом, то оно будет заменено.

// 	request.onsuccess = function() { // Обработать результат запроса
//   		console.log("Книга добавлена в хранилище", request.result);
// 	};
// 	request.onerror = function(e) {
//   		console.log("Ошибка", request.error);
// 		if (request.error.name == "ConstraintError") {
// 			// ConstraintError возникает при попытке добавить объект с ключом, который уже существует
// 			console.log("Книга с таким id уже существует"); // обрабатываем ошибку
// 			e.preventDefault(); // предотвращаем отмену транзакции(иначе при ошибке она отменяется полностью)
// 			// ...можно попробовать использовать другой ключ...
// 		} else {
// 			// transaction.abort(); ? Возможно это не нужно и транзакция прерывается сама
// 			// неизвестная ошибка
// 			// транзакция будет отменена
//   		}
// 		transaction.onabort = function() {
// 			console.log("Ошибка", transaction.error);
// 		};
// 	};

	
// 	/* // удалить книгу с id='js'
// 	books.delete('js'); */
	

// 	//Поиск по ключам
// 	// получить одну книгу
// 	books.get('js')
// 	let getRequest = books.get('js');
// 	getRequest.onsuccess = () => {
// 		if(getRequest.result !== undefined) console.log(getRequest.result);
// 		else console.log("Нет таких книг");
// 	}

// 	// получить книги с 'css' <= id <= 'html'
// 	books.getAll(IDBKeyRange.bound('css', 'html'))
// 	// получить книги с id < 'html'
// 	books.getAll(IDBKeyRange.upperBound('html', true))
// 	// получить все книги
// 	books.getAll()
// 	// получить все ключи, гдe id > 'js'
// 	books.getAllKeys(IDBKeyRange.lowerBound('js', true))

	
// 	// Поиск по индексированному полю. Для этошо в событии "upgradeneeded" сначала создали структуру данных "Index"
// 	let priceIndex = books.index("price_idx");
// 	let indexRequest = priceIndex.getAll(10);

// 	/* // Если нам нужно удалить книги, основываясь на цене или на любом другом поле
// 		// найдём ключ, где цена = 5
// 		let request = priceIndex.getKey(5);
// 		request.onsuccess = function() {
// 			let id = request.result;
// 			let deleteRequest = books.delete(id);
// 		}; */

// 	// Чтобы удалить всё:
// 	/* books.clear(); // очищаем хранилище. */

// 	indexRequest.onsuccess = () => {
// 		if(indexRequest.result.length !== 0) console.log(indexRequest.result);
// 		else console.log("Нет таких книг");
// 	} 

// 	transaction.oncomplete = function() {
//   		console.log("Транзакция выполнена");
// 	}
// 	/* transaction.abort(); */ // вручную отменить транзакцию. отменит все изменения, сделанные запросами в транзакции,
// 	// и сгенерирует событие transaction.onabort
// });
// openRequest.addEventListener("error", () => console.error(openRequest.error));


// /* let openRequest2 = indexedDB.open("store", 2);  // попытка открыть новоую версию хранилища вызовет "blocked", т.к открыта версия 1
// // openRequest2.addEventListener("onupgradeneeded", () => console.log("let upgrade DB!"));
// openRequest2.addEventListener("blocked", (e) => console.log("blocked!")); */

// /* let deleteRequest = indexedDB.deleteDatabase("store"); // удаление бд
// deleteRequest.addEventListener("success", () => console.log("deleted!"));
// deleteRequest.addEventListener("error", () => console.error(deleteRequest.error)); */

// let book = {
//   id: 'js',
//   price: 10,
//   created: new Date(),
// };

// let obj = {
// 	id : "obj#1",
// 	key1 : "value1",
// 	key2 : "value2",
// 	key3 : "value3",
// 	date : new Date(),
// 	number : 12,
// }
// let obj2 = {
// 	id : "obj#2",
// 	key1 : "value1",
// 	key2 : "value2",
// 	key3 : "value3",
// 	date : new Date(),
// 	number : 12,
// }
// let obj3 = {
// 	id : "obj#3",
// 	key1 : "value1",
// 	key2 : "value2",
// 	key3 : "value3",
// 	date : new Date(),
// 	number : 12,
// }
// let openRequest = indexedDB.open("store", 1);
// openRequest.onupgradeneeded = (e) => {
// 	console.log(e.oldVersion);
// 	let db;
// 	if(e.oldVersion == 0)  {
// 		db = openRequest.result;
// 		console.log(db.version);
// 		let storage = db.createObjectStore("myStorage", {keyPath: "id"});
// 		let index = storage.createIndex("number-srch", "number");
// 	} 
// 	/* if(e.oldVersion == 1) {
// 		openRequest = indexedDB.open("store", 2);
// 		db = openRequest.result;
// 		console.log(db.version);
// 	}  */ 
// }
// openRequest.onsuccess = () => {
// 	let db = openRequest.result;
// 	console.log(db);
// 	let transaction = db.transaction("myStorage", "readwrite");
// 	let storage = transaction.objectStore("myStorage");
	
// 	transaction.onabort = () => console.log("Transaction aborted! " + transaction.error)

// 	let addRequest = {
// 		1 : storage.add(obj),
// 		2 : storage.add(obj2),
// 		3 : storage.add(obj3),
// 		4 : storage.add(book),
// 	}
// 	for(let num in addRequest) {
// 		addRequest[num].onsuccess = () => console.log("Объект добавлен");
// 		addRequest[num].onerror = (e) => {
// 			if(addRequest[num].error.name == "ConstraintError") {
// 				console.log("Объект уже был добавлен");
// 				// благодаря preventDefault при попытке повторного добавления уже существующих объектов в хранилище
// 				// (в данном случае при каждом последующем обновлении страницы)
// 				// транзакция не будет прервана и событие onabort не произойдёт. И можно будет не создавать новую
// 				//транзакцию ниже для "get"
// 				e.preventDefault();
// 			}
// 		} 
// 	}
// 	// let getTransaction = db.transaction("myStorage", "readwrite");
// 	// let getStorage = getTransaction.objectStore("myStorage")
// 	let getRequest = /* getStorage */ storage.get("obj#2");
// 	getRequest.onsuccess = () => {
// 		if(getRequest.result !== undefined) {
// 			console.log(getRequest.result);
// 			/* getStorage */ storage.delete("obj#2");
// 		} 
// 		else console.log("нет таких объектов");
// 	}

// 	let index = storage.index("number-srch");
// 	let indexRequest = index.getAll(12)
// 	indexRequest.onsuccess = () => console.log(indexRequest.result);
// 	indexRequest.onerror = () => console.log(indexRequest.error);


// 	let cursorRequest = storage.openCursor(); // cursor идёт по хранилищу объектов и возвращает пары ключ/значение по очереди
// 	cursorRequest.onsuccess = () => {
// 		if(cursorRequest.result) {
// 			console.log("key: " + cursorRequest.result.key + " value: " + cursorRequest.result.value)
// 			cursorRequest.result.continue(); /* продвинуть курсор к следующему значению */
// 			/* cursorRequest.result.advance(3); */ /* продвинуть курсор на count позиций, пропустив значения */
// 		} 
// 		else console.log("...объектов обольше нет");
// 	}
// }
// openRequest.onerror = function() {
// 	console.error("Error", openRequest.error);
// };

/* 
async function createDb() {
	let db;
	db = await idb.openDB("async-store", 1, (db) => {
		db.createObjectStore("myStore", {keyPath: 'id'});
	});
	console.log(db);
	// let transaction = db.transaction("myStore", "readwrite");
	let objectStore = db.transaction("myStore", "readwrite").objectStore("myStore");
	console.log(objectStore);
}
createDb(); */


/* init();
let db;
async function init() {
  db = await idb.openDB('booksDb', 1, db => {
    db.createObjectStore('books', {keyPath: 'name'});
  });

// let transaction = db.transaction("books", "readwrite");
  list();
}

async function list() {
  let tx = db.transaction('books');
  let bookStore = tx.objectStore('books');
}
 */


/* let targetEl = document.querySelector("body > div.any-section__frop-ball");
let int;
function drawAnimation() {
	let start = Date.now();
	function onAnimate(passedTime) {
		targetEl.style.left = passedTime / 5 + "px";
	}
	int = setInterval(() => {
		let passedTime = Date.now() - start; 
		if(passedTime >= 2000) {
			clearInterval(int);
			return;
		}
		onAnimate(passedTime);
	}, 10)
}
document.addEventListener("dblclick", function handler() {
	drawAnimation();
	document.removeEventListener("dblclick", handler);
}); */

/* // Анимация с помощь. requestAnimationFrame
let targetEl = document.querySelector("body > div.any-section__frop-ball");
targetEl.addEventListener("click", () => {
	function bounce(frameUnit) {
		for (let a = 0, b = 1; 1; a += b, b /= 2) {
			if (frameUnit >= (7 - 4 * a) / 11) {
				return -Math.pow((11 - 6 * a - 11 * frameUnit) / 4, 2) + Math.pow(b, 2)
			}
		}
	}
	function makeEaseOut(timing) {
		return function(frameUnit) {
			return 1 - timing(1 - frameUnit);
		}
	}
	animate({
		duration: 1000,
		timingLeft: makeEaseOut(bounce),
		timingWidth: function(timeFraction) {
			return timeFraction;
		},
		drawLeft: function(progressLeft) {
			targetEl.style.left = progressLeft * 500 + "px";
		},
		drawWidth: function(progressWidth) {
			targetEl.style.width = parseInt(getComputedStyle(targetEl).width) + progressWidth + 2 + "px";
		},
		finalDraw : function() {
			targetEl.style.height = getComputedStyle(targetEl).width;
		}
	});
});
function animate({duration, timingLeft, timingWidth, drawLeft, drawWidth, finalDraw}) {
	let start = performance.now();
	requestAnimationFrame(function animate(time) {
		let timeFraction = (time - start) / duration;
		if(timeFraction > 1) timeFraction = 1;
		let progressLeft = timingLeft(timeFraction);
		let progressWidth = timingWidth(timeFraction);
		// Promise.all([drawLeft(progressLeft), drawWidth(progressWidth)]).then(() => console.log("done"));
		drawLeft(progressLeft);
		drawWidth(progressWidth);
		
		if(timeFraction < 1)  requestAnimationFrame(animate);
		else if(timeFraction == 1) {
			console.log("done");
			finalDraw();
		} 
	});
} */

/* class MyElement extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
    	console.log("my-element added!");
		this.setAttribute("custom-attr", 100);
		this.style.height = this.getAttribute("custom-attr") + "px";
  	}
	disconnectedCallback() {
		console.log("my-element removed!");
  	}
	static get observedAttributes() {
		return ["class"];
	}
	attributeChangedCallback(name, oldValue, newValue) {
		console.log(`attribute ${name} changed! from ${oldValue} to ${newValue}`);
  	}
}
customElements.define("my-element", MyElement);
function createElem() {
	let el = document.createElement("my-element");
	document.body.prepend(el);
	el.className = "my_element";
	el.style.display = "block";
	el.style.width = 100 + "%";
	el.style.backgroundColor = "purple";
}
document.addEventListener("keydown", function handler(e) {
	if(e.key == "a") createElem(); 
});
document.addEventListener("keydown", (e) => {
	if(e.key == "d" && document.getElementsByTagName("my-element")[0]) document.getElementsByTagName("my-element")[0].remove(); 
}); */


// Чвсы с помощью пользовательских элементов (Custom Elements) 
/* class CustomElement extends HTMLElement {
	constructor() {	
		super();
		this.style.fontSize = 35 + "px";
	}
	render() {
		let date = new Date(this.getAttribute("time") || Date.now());
		let formatter = new Intl.DateTimeFormat("ru", {
			year: this.getAttribute("year"),
			month: this.getAttribute("month"),
			day: this.getAttribute("day"),
			hour: this.getAttribute("hour"),
			minute: this.getAttribute("minute"),
			second: this.getAttribute("second"),
		});
		this.innerHTML = formatter.format(date);
	}
	connectedCallback() {
		if (!this.rendered) {
			this.render();
			this.rendered = true;
    	}
	}
	static get observedAttributes() { 
		return ["time", "year", "month", "day", "hour", "minute", "second"]; 
	}
	attributeChangedCallback(name, oldValue, newValue) {
		 	this.render();
		}
}
customElements.define("time-formatter", CustomElement);

let el = document.querySelector(".time-formatter");
setInterval(() => {
	el.setAttribute("time", new Date());
}, 1000); */


/* let elem = document.getElementById("elem");
class LiveTimer extends HTMLElement {
	constructor() {
		super();
		this.date = `${new Date().getFullYear()} : ${(new Date().getMonth() + 1)} : ${new Date().getDate()}`;
	}
	connectedCallback() {
		elem.append(document.createElement("time-formatted"));
		this.firstElementChild.setAttribute("hour","numeric");
		this.firstElementChild.setAttribute("minute","numeric");
		this.firstElementChild.setAttribute("second","numeric");
		this.intervalId = setInterval(() => this.update(), 1000);
	}
	disconnectedCallback() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}
	update() {
		this.firstElementChild.setAttribute("datetime", new Date());
		let customEvent = new Event("tick", {bubbles: true});
		customEvent.detail = this.date;
		this.firstElementChild.dispatchEvent(customEvent);
	}
}
customElements.define("live-timer", LiveTimer);
elem.addEventListener("tick",(e) => console.log(e.detail));
class TimeFormatted extends HTMLElement {
	render() {
		let date = new Date(this.getAttribute('datetime') || Date.now());

		this.innerHTML = new Intl.DateTimeFormat("default", {
			year: this.getAttribute('year') || undefined,
			month: this.getAttribute('month') || undefined,
			day: this.getAttribute('day') || undefined,
			hour: this.getAttribute('hour') || undefined,
			minute: this.getAttribute('minute') || undefined,
			second: this.getAttribute('second') || undefined,
			timeZoneName: this.getAttribute('time-zone-name') || undefined,
		}).format(date);
	}
	connectedCallback() {
		if (!this.rendered) {
			this.render();
			this.rendered = true;
		}
	}
	static get observedAttributes() {
		return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name'];
	}
	attributeChangedCallback(name, oldValue, newValue) {
		this.render();
	}
}
customElements.define("time-formatted", TimeFormatted); */


let canvas = document.getElementById("draw-canvas");
let img = new Image();
img.src = "img/icon_card-heart.svg";
let ctx = canvas.getContext("2d");
ctx.lineWidth = 3.1;
img.onload = () => {
	let pattern = ctx.createPattern(img, "repeat");
	ctx.fillStyle = pattern;
	ctx.fillRect(400, 200, 100, 100);
	ctx.strokeRect(400, 200, 100, 100); 
}



/* function firstFoo(callback) {
	console.log("foo 1")
	callback();
}
function secondFoo(callback) {
	console.log("foo 2")
	callback();
}
function thirdFoo(callback) {
	console.log("foo 3")
	callback();
}
function callbackFunction() {
	console.log("This is callback");
}
let funcArr = [firstFoo, secondFoo, thirdFoo]; */

/* Promise.all(funcArr.map(item => {
	return new Promise(resolve => {
		resolve(item);
	});
})).then((item) => {
	item.forEach(f => f(callbackFunction));
}); */
/* async function f() {
	await Promise.all(funcArr.map(item => {
		return new Promise(resolve => {
			resolve(item(callbackFunction));
		});		
	}));	
	let promise = await new Promise(resolve => setTimeout(() => resolve(), 1000));
	console.log("end of script");
}
f(); */


let wrappScrollBar = document.querySelector(".scroll-wrapp");


wrappScrollBar.addEventListener("scroll", (e) => {
	e.currentTarget.firstElementChild.firstElementChild.scrollBy(0, 10);
	e.currentTarget.scrollBy(0, 0)
	console.log(e);
});



console.log();
console.log();
console.log();
console.log();
console.log();
console.log();