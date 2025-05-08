// Назначение класса в качестве обработчик событий.Обект обработчик может вызывать нужные методы класса
class Handler {
    handleEvent(e) {
        if(e.type == "click") {
            this.onClickMethod();
            if(e.target.closest(".box__inner")) {
                console.log("This is boxItem!");
            }
        }
        if(e.type == "mouseover") {
            this.onMouseoverMethod()
        } 
    }
    onClickMethod() {
        console.log("object handler click");
    }
    onMouseoverMethod() {
        console.log("object handler mouseover")
    }
} 
let handler = new Handler();
eventItem.addEventListener("click", handler);
eventItem.addEventListener("mouseover", handler);
clickBox.addEventListener("click", handler);



// Делегирование. Внутри одного из целевых юлоков есть спан(eventSpan). Вариант, что бы событие срабатывало и на нём 
eventParent.addEventListener("click" ,(e) => {
    if(e.target || e.target.matches(".Event-item")) {
        for(let i = 0; i < eventItem.length; i++) {
            if (e.target == eventItem[i] ) {
                console.log("!");
            }
            if (e.target == eventSpan) {
                console.log("!");
                break
            }
        }
    }
});



// Задача с мячем
//html код
/* <!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <style>
    #field {
      width: 200px;
      height: 150px;
      border: 10px solid black;
      background-color: #00FF00;
      overflow: hidden;
      cursor: pointer;
    }
  </style>
</head>
<body style="height:2000px">

  <div id="field">
    <img src="https://ru.js.cx/clipart/ball.svg" id="ball"> . . . . . . . . .
     . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
     . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
     . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
      . . . . . . . . . . . . .
  </div>

  <script type="module" src="js/script.js"></script>
</body>
</html> */

 // JS код 
 let field  = document.getElementById("field"),
 ball = document.getElementById("ball");

field.style.cssText = "position: relative;";
ball.style.cssText = "position: absolute; top: 0; left: 0; transition: all 0.6s;"

field.addEventListener("click", function(e)  {
 if(this && e.target == this) {
     let fieldCoords = field.getBoundingClientRect();
         
     let leftPosition = e.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth/2;
     let TopPosition = e.clientY - fieldCoords.top - field.clientTop - ball.clientHeight/2;

     ball.style.left = e.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth/2 + "px";
     ball.style.top = e.clientY - fieldCoords.top  - field.clientTop - ball.clientHeight/2 + "px";

     if (leftPosition < 0) ball.style.left = 0;
     if (TopPosition < 0) ball.style.top = 0;
     if (leftPosition + ball.clientWidth > field.clientWidth ) {
         ball.style.left = field.clientWidth - ball.clientWidth + "px";
     }
     if (TopPosition + ball.clientHeight > field.clientHeight) {
         ball.style.top = field.clientHeight - ball.offsetHeight + "px";
     } 
 } 
});



// Задача с добавлением кнопки закрытия и 2 варианта решения
document.querySelector("body > button").remove();
let messages = document.querySelectorAll(".pane");
let createCollection = (tag, className, num) => {
    let nodes = [];
    for(let i = 0; i < num; i++) {
        let elms = document.createElement(tag);
        elms.classList.add(className);
        elms.innerHTML = "[x]";
        elms.style.position = "absolute";
        elms.style.top = 0;
        elms.style.right = 0;
        nodes.push(elms);
    }
    return nodes
}
let buttons = createCollection("button", "remove-button", 3);

messages.forEach((item, i) => {
    item.style.position = "relative";
    item.append(buttons[i]);
});
buttons.forEach((item, i) => {
    item.addEventListener("click", function(e) {
        if(e.target.closest(".remove-button")) {
            messages[i].style.display = "none";
        }
    });
});

// Второй
// let panes = document.querySelectorAll('.pane');
//     for(let pane of panes) {
//       pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
//       // кнопка становится первым потомком плитки (pane)
//       pane.firstChild.onclick = () => pane.remove();
//     }



//Задача со слайдером 
//
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

// Старый слайдер
/* let slides = document.querySelectorAll(".my-slider__slide"),
    arrows = document.querySelectorAll(".my-slider__arrows"),
    currentIndex = 1;
let showSlides = (n) => {
    if(n < 1) currentIndex = slides.length;
    if(n > slides.length) currentIndex = 1;
    slides.forEach(item => {
        if (item.classList.contains("my-slider__slide-active")) item.classList.remove("my-slider__slide-active");
    });
    slides[currentIndex - 1].classList.add("my-slider__slide-active");
};

let changeIndex = (n) => {
    showSlides(currentIndex = currentIndex + n);
}

arrows[0].addEventListener("click", () => {
    changeIndex(1);
});

arrows[1].addEventListener("click", () => {
    changeIndex(-1);
});
showSlides(currentIndex); */



// Делегирование событий через класс
let menu = document.querySelector(".menu"),
	buttonss = document.querySelectorAll(".menu__button");
class Menu {
	constructor(elem) {
		// elem.onclick = this.onClick.bind(this); 
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
// а ниже через объект
/* let menu = {
    save() {
      alert("сохраняю");
    },
    load() {
      alert("загружаю");
    },
    search() {
      alert("ищу");
    },
  };
  document.addEventListener("click", (event) => {
    menu[event.target.dataset.action]();
  }); */



// делегирование
let container = document.getElementById("container"),
	messagess = document.querySelectorAll(".pane"),
	closeButton = document.querySelectorAll(".remove-button");
// мой вариант
container.addEventListener("click", (e) => {
	if (e.target || e.target.classList.contains(".remove-button")) {
		for(let i = 0; i < closeButton.length; i++) {
			if (e.target == closeButton[i]) {
				messagess[i].remove();
			}
		}
	}
});
// ноый вариант
container.onclick = function(event) {
	if (event.target.className != 'remove-button') return;
	let pane = event.target.closest('.pane');
	pane.remove();
  };



//сортировка ячеек таблицы по строкам и числам
//мой вариант
let table = document.getElementById("grid");
let cells = [];

for(let i = 0; i < table.tBodies[0].rows.length; i++) {
	cells.push(table.tBodies[0].rows[i].cells);
}

let toSortNums = () => {
	let numbers = Array.from(cells).map(item => item[0]);
	let sortedNumbers = Array.from(numbers).sort((a, b) => {
		if(+a.innerHTML > +b.innerHTML) return 1;
		else return -1;
	});
	for(let i = 0; i < table.tBodies[0].rows.length; i++) {
		table.tBodies[0].rows[i].prepend(sortedNumbers[i]);
	}
};

let toSortStrings = () => {
	let strings = Array.from(cells).map(item => item[1]);
	let sortedStrings = Array.from(strings).sort((a, b) => {
		if(a.innerHTML > b.innerHTML) return 1;
		else return -1;
	});
	for(let i = 0; i < table.tBodies[0].rows.length; i++) {
		table.tBodies[0].rows[i].append(sortedStrings[i]);
	}
};

table.addEventListener("click", (e) => {
	if (e.target.tagName == "TH") {
		if (e.target.dataset.type == "number") toSortNums();
		else if (e.target.dataset.type == "string") toSortStrings();
		else return;
		
	}
});

// вариант в решении
grid.onclick = function(e) {
	if (e.target.tagName != 'TH') return;
	let th = e.target;
	// если ячейка TH, тогда сортировать
	// cellIndex - это номер ячейки th:
	//   0 для первого столбца
	//   1 для второго и т.д.
	sortGrid(th.cellIndex, th.dataset.type);
  };

  function sortGrid(colNum, type) {
	let tbody = grid.querySelector('tbody');
	let rowsArray = Array.from(tbody.rows);
	// compare(a, b) сравнивает две строки, нужен для сортировки
	let compare;

	switch (type) {
	  case 'number':
		compare = function(rowA, rowB) {
		  return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
		};
		break;
	  case 'string':
		compare = function(rowA, rowB) {
		  return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
		};
		break;
	}
	// сортировка
	rowsArray.sort(compare);
	tbody.append(...rowsArray);
  }



//Задача с подсказкой из дата атрибутов
//мой вариант
let elem;
let createElement = () => {
	elem = document.createElement("div");
	elem.className = "tooltip";
	document.body.append(elem);
	return elem;
};
document.addEventListener("mouseover", (e) => {
	if (e.target.tagName == "BUTTON") {
		if (e.target.dataset.tooltip) {
			let message = createElement();
			let coords = {
				top: e.target.getBoundingClientRect().top ,
				left: e.target.getBoundingClientRect().left,
			};
			message.innerHTML = e.target.dataset.tooltip;
			message.style.top = coords.top - message.offsetHeight - 5  + "px";
			message.style.left = coords.left + "px";
		}
	}
});
document.addEventListener("mouseout", (e) => {
	if (e.target.tagName !== "BUTTON") return;
	if (!e.target.dataset.tooltip) return;
	elem.remove();
});
//второй вариант
let tooltipElem;
document.onmouseover = function(event) {
  let target = event.target;

  // если у нас есть подсказка...
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;
  // ...создадим элемент для подсказки
  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);
  // спозиционируем его сверху от аннотируемого элемента (top-center)
  let coords = target.getBoundingClientRect();
  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0; // не заезжать за левый край окна
  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
	top = coords.top + target.offsetHeight + 5;
  }
  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

document.onmouseout = function(e) {
  if (tooltipElem) {
	tooltipElem.remove();
	tooltipElem = null;
  }
};



// Контекстное меню
let contextMenu;
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
});
let removeItem = (item, e) => {
	if(document.querySelector(".contextmenu")) {
		if(e.target.dataset.context) return;
		if(e.target == contextMenu) return;
		item.remove();
		item = null;
	}
};
document.addEventListener("contextmenu", (e) => {
	removeItem(contextMenu, e);
});
document.addEventListener("click", (e) => {
	removeItem(contextMenu, e);
})