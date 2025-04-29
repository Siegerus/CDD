// Вывели массив из первых доч. элементов коробок.Добавили им св-ва копированием св-ва объекта 
let arr = Array.from(clickBox).map(item => item.firstElementChild);
for(let i = 0; i < arr.length; i++) {
	Object.assign(arr[i].style, {
		width: 30 + "px",
		height: 30 + "px",
		margin: "auto",
		backgroundColor: "aqua",
	});
}
console.log(arr); 


// Пример установки и изменения своего дата-атрибута.Через "data-"обязательно. Тогда доступен "dataset"
/* <div id="elem" class="box" data-color-bg="blue-backgrond"></div>     - разметка*/     
/* .box[data-color-bg="crimson-backgrond"] {background-color: crimson;} - стили*/ 
parentBox.setAttribute("data-color-bg", "crimson-backgrond");		 /* - через метод */
parentBox.dataset.colorBg = "khaki-backgrond";						 /* - через св-во объекта */

// setInterval(() => messageInput.hidden = !messageInput.hidden , 1000);


// Функция возвращает массив из элементов, который потом добавяес на страницу
function createLayot() {
	let layot = [];
	for(let i = 0; i <= 5; i++) {
		let el = document.createElement("div");
		el.classList.add("alert-message");
		layot.push(el);
	}
	return layot;
}
document.body.append(...createLayot());


// Удаляем дочерние элементы внутри элемента
let elem = document.getElementById("elem");
function clear(el) { 
	let arr = Array.from(el.children);
	arr.forEach(item => item.remove());
}
clear(elem);


// динамический списо из prompt
let ul = document.createElement("ul");
document.body.append(ul);
ul.className = "dynamic-list";

function creatLi(elem, answer) {
	let li = document.createElement("li");
	li.textContent = answer;
	if(!answer) return;
	elem.append(li);
}
while(true) {
	let answer = prompt("Введите текст для элемента списка.", "");
	creatLi(document.querySelector(".dynamic-list"), answer);
	if (!answer) break;
}


// DOM дерево из объекта
let data = {
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
createTree(data);


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
	let int;

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
	//  Ниже вариант с setTimeout
	/* setTimeout(function updateClock() {
		setValue();
		int = setTimeout(updateClock,1000)
	});
	start.addEventListener("click", (e) => {
		if(e.target.closest(".clock-start")) {
			setTimeout(function updateClock() {
				setValue();
				if(int !== null) clearTimeout(int);
				int =  setTimeout(updateClock,1000)
			});
		}
	});
	stop.addEventListener("click", (e) => {
		if(e.target.closest(".clock-stop")) {
			clearTimeout(int);
		}
	}); */
}
setClock();




//Удалить в элементе вложенные элементы 
function clear(elem) { 
    for (let i of elem.querySelectorAll("*")) {
      i.remove();
    }
  }
  clear(elem);


//прибавить строку к стилям,замены не будет,если какие-то стили уже были заданы,то старые удалятся,добавятся
element.style.cssText += `background: red; height: 128px;`



// Счезающее уведомление
  function showNotification(option) {
	let elem = document.createElement("div");
	document.body.append(elem);
	elem.innerHTML = option.html;

	elem.classList.add(option.className);
	Object.assign(elem.style, {
		position: "absolute",
		top: option.top + "px",
		right: option.right + "px",
		width: 200 + "px",
		height: 65 + "px",
		padding: "18px 18px" ,
		backgroundColor: "red",
		color: "orange",
		textAlign: "center",
		boxSizing: "border-box",
	});

	let int = setInterval(() => { 
		if (elem.style.display == "none") elem.style.display = "block";
		else elem.style.display = "none";
	} , 1000);
	return elem;
}
showNotification({ 
	top: 10,
	right: 10,
	html: "Hello World!",
	className: "welcome",
});



// Добавления элемента с сообщением относительно координат нужного элемента
function creatElem(elem, text) {
	let left =  elem.getBoundingClientRect().left;
	let top =  elem.getBoundingClientRect().top;
	let message = document.createElement("div");
	document.body.append(message);

	message.style.position = "fixed";
	message.style.left = left + "px";
	message.style.top = top + "px";
	message.style.color = "red";
	message.innerHTML = text;
	return message;
}
let messageBox = document.createElement("div");
document.body.append(messageBox);
messageBox.append(creatElem(anyItem, "This is Item!"));
setTimeout(() => messageBox.remove(), 3000);

 

// Добавление элемента с абсолютом относительно другого элемента
let getPosition = (elem) => {
	let topY =  elem.getBoundingClientRect().top + window.scrollY,
		leftX = elem.getBoundingClientRect().left + window.scrollX;	
		return {
			top: topY,
			left: leftX,
		}
}

let coord = getPosition(anyItem);
let div = document.createElement("div");
div.innerHTML = "This is DIV";

div.style.cssText = "position: absolute; color: red; font-size = 28px";
div.style.top = (coord.top + 60) + "px";
div.style.left = (coord.left + 60)+ "px";
document.body.append(div);



//Если боковой скролл дошёл до конца ширины блока, который скролился, то скролл слева =0(начинается сначала)
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



// Расположение заметок относительно цитаты(вверху, снизу, справа)
function positionAt(anchor, position, elem) {
	let anchTop = anchor.getBoundingClientRect().top;
	let anchRight = anchor.getBoundingClientRect().right;
	let anchLeft = anchor.getBoundingClientRect().left;
	let anchBottom = anchor.getBoundingClientRect().bottom;

	if(position.toLowerCase() == "top") {
		elem.style.top = anchTop - elem.offsetHeight + "px";
		elem.style.left = anchLeft + "px";
		console.log(elem.style.top);
	}
	if(position.toLowerCase() == "bottom") {
		elem.style.bottom = anchBottom + "px";
		elem.style.left = anchLeft + "px";
		console.log(elem.style.bottom);
	}
	if(position.toLowerCase() == "right") {
		elem.style.left = anchLeft + anchor.offsetWidth + "px";
		elem.style.top = anchTop + (anchor.clientHeight/2) + "px";
		console.log(elem.style.left);
	}
}

function showNote(anchor, position, html) {
  let note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}
let blockquote = document.querySelector('blockquote');
showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");


