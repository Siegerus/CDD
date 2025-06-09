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

// тоже объект обработчик handleEvent
/* eventParent.addEventListener("click", {
	handleEvent(e) {
		if (e.target.dataset && e.target.nodeName == "DIV") {
			console.log("to handle...");
			switch(e.target.dataset.action) {
				case "save": console.log("handled save!");
				break;
				case "load": console.log("handled load!");
				break;
				case "search": console.log("handled search!");
				break;
				case "reload": console.log("handled reload!");
				break;
			}
		}
	}
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
	} else {
		// document.removeEventListener("contextmenu", removeItem);
		// document.removeEventListener("click", removeItem);
	}
});
let removeItem = (e) => {
	if(e.target.dataset.context) return;
	if(e.target == contextMenu) return;
	document.removeEventListener("contextmenu", removeItem);
	document.removeEventListener("click", removeItem);
	contextMenu.remove();
	contextMenu = null;
};

let list = document.querySelector(".event-list"),
	li = document.querySelectorAll(".event-list > li");
	let context; */
// Контекстное меню2
let createElem = (coords, target) => {
	if(document.querySelector(".context-menu")) return
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
}

let removeElement = (e) => {
	if (e.target.closest("li")) return;
	if (e.target.closest(".context-menu")) return;
	li.forEach(item => item.classList.remove("active"));
	context.remove();
	context = null;
	document.removeEventListener("contextmenu", removeElement);
	document.removeEventListener("click", removeElement);
}
list.addEventListener("click", (e)=> {
	if(e.target.closest("li")) e.preventDefault();
	
});
list.addEventListener("contextmenu", (e) => {
	let target = e.target.closest("li");
	e.preventDefault();
	if (target && list.contains(target)) {
		let coords = target.getBoundingClientRect();
		target.classList.add("active");
		createElem(coords, target);
	}
	li.forEach(item => {
		if(document.querySelector(".context-menu") && item.classList.contains("active")) {
			document.addEventListener("contextmenu", removeElement);
			document.addEventListener("click", removeElement);
		}
	});
});



//Поймать переходы по ссылкам
let parent = document.querySelector("#contents");
parent.addEventListener("click", (e) => {
	function toConfirm(link) {
		let answer = confirm("Leave for " + link);
		if (!answer) e.preventDefault();
	}
	if(e.target.closest("a") && parent.contains(e.target)) {
		toConfirm(e.target.closest("a").getAttribute("href"));
	} 
});  
// выриант из решения	
parent.onclick = function(event) {
	function handleLink(href) {
	  let isLeaving = confirm(`Leave for ${href}`);
	  if (!isLeaving) return false;
	}
	let target = event.target.closest('a');
	if (target && parent.contains(target)) {
	  return handleLink(target.getAttribute('href'));
	}
  };


  
//Галерея 
let image = document.getElementById("largeImg"),
imagesParent = document.getElementById("thumbs");
imagesParent.addEventListener("click", (e) => {
if(e.target.closest("a")) {
	e.preventDefault();
	image.src = e.target.closest("a").href;
	console.log(e.target);
}
});
// вариант ешения
thumbs.onclick = function(event) {
let thumbnail = event.target.closest('a');
if (!thumbnail) return;
showThumbnail(thumbnail.href, thumbnail.title);
event.preventDefault();
}
function showThumbnail(href, title) {
largeImg.src = href;
largeImg.alt = title;
}


// Контекстное меню табы
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
/* // Контекстное меню, которое динамически создаётся для каждого элемента меню
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
}); */

// Задача на события мыши
let ul = document.querySelector("ul"),
	lii = ul.querySelectorAll("li");
let spans;

lii.forEach((item, i) => {
	item.prepend(document.createElement("span"));
	spans = document.querySelectorAll("span");
	spans[i].append(spans[i].nextSibling);
});
ul.addEventListener("click", (e) => {
	let target = e.target.closest("span");
	e.currentTarget.classList.add("active");
	if(target && ul.contains(target)) {
		target.addEventListener("mousedown", (e) => e.preventDefault());
		spans.forEach((item) => {
			if(e.ctrlKey || e.metaKey) target.classList.toggle("selected");
			if(!e.ctrlKey || e.metaKey) {
				if(item == target) {
					item.classList.add("selected");
				} else item.classList.remove("selected");
			} 	
		});
	}
	let removeEvent = (e) => {
		if(e.target.closest("span")) return;
		spans.forEach(item => item.classList.remove("selected"));
		ul.classList.remove("active");
		document.removeEventListener("click", removeEvent);
	}
	if(ul.classList.contains("active")) setTimeout(() => {
		document.addEventListener("click", removeEvent)
	});
});  
// мой 2ой вариант
ul.addEventListener("mousedown", (e) => e.preventDefault());
ul.addEventListener("click", (e) => {
	let target = e.target.closest("li");
	if(!target) return;
	if(e.ctrlKey || e.metaKey) {
		target.classList.toggle("selected")
	} else {
		li.forEach(item => {
			if (item == target) item.classList.remove("selected")
		});
		target.classList.add("selected");
	}
});
/* // Вариант из решения
ul.onclick = function (event) {
	if (event.target.tagName != "LI") return;
	if (event.ctrlKey || event.metaKey) {
		toggleSelect(event.target);
	} else {
		singleSelect(event.target);
	}
}
// предотвращает ненужное выделение элементов списка при клике
ul.onmousedown = function () {
	return false;
};
function toggleSelect(li) {
	li.classList.toggle('selected');
}
function singleSelect(li) {
	let selected = ul.querySelectorAll('.selected');
	for (let elem of selected) {
		elem.classList.remove('selected');
	}
	li.classList.add('selected');
} */


//Задача с подсказкой при вложенных элементах
let house = document.getElementById("house"),
	roof = document.getElementById("roof"),
	eelem;
document.addEventListener("mouseover", (e) => {
	if (e.target.closest(".tooltip")) return;
	let target = e.target.closest("[data-tooltip]");
	if (!target) return;
	if(target.dataset.tooltip) {
		let coords = target.getBoundingClientRect();

		eelem = document.createElement("div");
		eelem.className = "tooltip";
		document.body.append(elem);
		eelem.innerHTML = target.dataset.tooltip;
		let top = coords.top - eelem.offsetHeight - 5;
		if (top < 0) top = coords.top + target.offsetHeight + 5;
		eelem.style.top = top + "px"
		eelem.style.left = coords.left + (target.offsetWidth - eelem.offsetWidth) / 2 + "px";
	}
});
document.addEventListener("mouseout", (e) => {
	if (e.target.closest(".tooltip")) return;
	if (!document.querySelector(".tooltip")) return;
	eelem.remove();
});
// Вариант из решения
let tooltip;
    document.onmouseover = function(event) {
      // важно: быстро движущийся курсор может прыгнуть сразу к дочернему элементу, пропустив родительский
      // так что событие mouseover произойдёт сразу на дочернем элементе.
      let anchorElem = event.target.closest('[data-tooltip]');
      if (!anchorElem) return;
      // показываем подсказку и запоминаем её
      tooltip = showTooltip(anchorElem, anchorElem.dataset.tooltip);
    }
    document.onmouseout = function() {
      // возможно такое, что произошло событие mouseout, но мы всё ещё внутри элемента
      // (оно было где-то внутри и всплыло)
      // но в этом случае сразу же последует событие mouseover,
      // то есть подсказка исчезнет и потом снова покажется
      //
      // к счастью, этого не будет видно,
      // так как оба события происходят почти одновременно
      if (tooltip) {
        tooltip.remove();
        tooltip = false;
      }
    }
    function showTooltip(anchorElem, html) {
      let tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = html;
      document.body.append(tooltipElem);
      let coords = anchorElem.getBoundingClientRect();
      // позиционируем подсказку над центром элемента
      let left = coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0;
      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) {
        top = coords.top + anchorElem.offsetHeight + 5;
      }
      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
      return tooltipElem;
    }


	
// Делегирование при mouseover/mouseout
let currentElem = null;
function toTestMouseEvent() {
	let menu = document.querySelector(".menu");
	menu.addEventListener("mouseover", (e) => {
		if (currentElem) return;
		let target = e.target.closest(".menu__button");
		if (!target) return;

		currentElem = target;
		e.target.style.backgroundColor = "darkgreen";
	});
	menu.addEventListener("mouseout", (e) => {
		if (!currentElem) return;
		let relatedTarget = e.relatedTarget;
		
		// if(currentElem.contains(relatedTarget)) return; проверить

		while(relatedTarget) {
			if (relatedTarget == currentElem) return;
			relatedTarget = relatedTarget.parentNode;
		}
		e.target.style.backgroundColor = "";
		currentElem = null;
	});
}
toTestMouseEvent();


// Умная подсказка с задержкой, которая пропадает, когда движется курсор
class HoverIntent {
  constructor({
    elem,
    over,
    out
  }) {
    this.elem = elem;
    this.over = over;
    this.out = out;
	this.timer;
	this.currentElem = null;
    // убедитесь, что "this" сохраняет своё значение для обработчиков.
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    // назначаем обработчики
    elem.addEventListener("mouseover", this.onMouseOver);
    elem.addEventListener("mouseout", this.onMouseOut);
	elem.addEventListener("mousemove", this.onMouseMove);
  }
  onMouseOver(event) {
	if(this.currentElem) return;
	let target = event.target.closest(".clock");
	if(!target) return;
	this.timer = setTimeout(() => this.over(), 1000);
	this.currentElem = target;
  }
  onMouseOut(event) {
	if(!this.currentElem) return;
	if (!event.relatedTarget) return;
	let relatedTarget = event.relatedTarget;
	if (relatedTarget == this.currentElem || relatedTarget.tagName == "SPAN") return;
	this.out();
	this.currentElem = null;
	clearTimeout(this.timer);
  }
  onMouseMove(event) {
	if (this.timer) clearTimeout(this.timer);
	this.timer = null
	this.out();
	this.timer = setTimeout(() => this.over(), 1000);
  }
  destroy() {
    elem.removeEventListener("mouseover", this.onMouseOver);
    elem.removeEventListener("mouseout", this.onMouseOut);
	elem.removeEventListener("mousemove", this.onMouseMove);
  }

}
let tooltipp = document.createElement('div');
tooltip.className = "tooltip";
tooltip.innerHTML = "Tooltip";
let hover = new HoverIntent({
  elem,
  over() {
    tooltip.style.left = elem.getBoundingClientRect().left + 'px';
    tooltip.style.top = elem.getBoundingClientRect().bottom + 5 + 'px';
    document.body.append(tooltip);
  },
  out() {
    tooltipp.remove();
  }
});
// из Решения
class HoverIntent {
  constructor({
    sensitivity = 0.1, // скорость ниже 0.1px/ms значит "курсор на элементе"
    interval = 100,    // измеряем скорость каждые 100ms
    elem,
    over,
    out
  }) {
    this.sensitivity = sensitivity;
    this.interval = interval;
    this.elem = elem;
    this.over = over;
    this.out = out;
    // убедитесь, что "this" сохраняет своё значение для обработчиков.
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    // и в функции, измеряющей время (вызываемой из setInterval)
    this.trackSpeed = this.trackSpeed.bind(this);
    elem.addEventListener("mouseover", this.onMouseOver);
    elem.addEventListener("mouseout", this.onMouseOut);
  }
  onMouseOver(event) {
    if (this.isOverElement) {
      // Игнорируем событие над элементом,
      // так как мы уже измеряем скорость
      return;
    }
    this.isOverElement = true;
    // после каждого движения измеряем дистанцию
    // между предыдущими и текущими координатами курсора
    // если скорость меньше sensivity, то она считается медленной
    this.prevX = event.pageX;
    this.prevY = event.pageY;
    this.prevTime = Date.now();
    elem.addEventListener('mousemove', this.onMouseMove);
    this.checkSpeedInterval = setInterval(this.trackSpeed, this.interval);
  }
  onMouseOut(event) {
    // если ушли с элемента
    if (!event.relatedTarget || !elem.contains(event.relatedTarget)) {
      this.isOverElement = false;
      this.elem.removeEventListener('mousemove', this.onMouseMove);
      clearInterval(this.checkSpeedInterval);
      if (this.isHover) {
        // если была остановка движения на элементе
        this.out.call(this.elem, event);
        this.isHover = false;
      }
    }
  }
  onMouseMove(event) {
    this.lastX = event.pageX;
    this.lastY = event.pageY;
    this.lastTime = Date.now();
  }

  trackSpeed() {
    let speed;
    if (!this.lastTime || this.lastTime == this.prevTime) {
      // курсор не двигался
      speed = 0;
    } else {
      speed = Math.sqrt(
        Math.pow(this.prevX - this.lastX, 2) +
        Math.pow(this.prevY - this.lastY, 2)
      ) / (this.lastTime - this.prevTime);
    }
    if (speed < this.sensitivity) {
      clearInterval(this.checkSpeedInterval);
      this.isHover = true;
      this.over.call(this.elem);
    } else {
      // скорость высокая, запоминаем новые координаты
      this.prevX = this.lastX;
      this.prevY = this.lastY;
      this.prevTime = this.lastTime;
    }
  }
  destroy() {
    elem.removeEventListener('mousemove', this.onMouseMove);
    elem.removeEventListener('mouseover', this.onMouseOver);
    elem.removeEventListener('mouseout', this.onMouseOut);
  }
}



//всплывающая подсказка
let message = document.createElement("div");
	let timerId;
	let currentElemm;
	let onElement;

	let toShowMessage = (e) => {
		let target = e.target.closest(".mouse-event__parent");
		if(!target) return;
		if(currentElemm) return;
		currentElemm = target;
		onElement = true;
		timerId = setTimeout(() => appendElem(), 500);

		function appendElem() {
			if(onElement) {
				let coords = target.getBoundingClientRect()
				message.innerHTML = "my DIV";
				message.style.position = "absolute";
				message.style.paddind = 10 + "px";
				message.style.backgroundColor = "darkred";
				message.style.transition = "all 0.3s";
				message.style.display = "block";
				document.body.append(message);
				message.style.top = coords.top + scrollY - div.offsetHeight + "px";
				message.style.left = coords.left + "px";
			}
		}
	}; 

	let toHideMessage = (e) => {
		let target = e.target.closest(".mouse-event__parent");
		if(!target) return;
		
		let relatedTarget = e.relatedTarget;
		while(relatedTarget) {
			if (relatedTarget == currentElemm) return;
			relatedTarget = relatedTarget.parentNode;
		}
		onElement = false;
		clearTimeout(timerId);
		timerId = null;
		message.style.display = "none";
		currentElemm = null;
	}
	wrapper.addEventListener("mouseover", toShowMessage);
	wrapper.addEventListener("mouseout", toHideMessage);
	wrapper.addEventListener("mousemove", (e) => {
		let target = e.target.closest(".mouse-event__parent");
		if (!target) return;
		toHideMessage(e);
		clearTimeout(timerId);
		timerId = null;
		toShowMessage(e);
	});
// Вариант подсказки из коментариев
/* let cursor_hover;
let timeout_id;
let current_elem = document.querySelectorAll(".mouse-event__parent")[0];
let tooltip = document.getElementById("tooltip");
function cursor_on_element() {
  cursor_hover = true;
  timeout_id = setTimeout(hover_check, 1000);
  function hover_check() {
    if (cursor_hover) {
      tooltip.style.left = current_elem.getBoundingClientRect().left + 5 + "px";
      tooltip.style.top = current_elem.getBoundingClientRect().bottom + scrollY + 5 + "px";
      tooltip.hidden = false;
    }
  }
}
function cursor_out() {
  tooltip.hidden = true;
  cursor_hover = false;
  clearTimeout(timeout_id);
}
current_elem.addEventListener("mouseover", cursor_on_element);
current_elem.addEventListener("mouseout", cursor_out); */



// dragndrop Круга по документу
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

//Ниже релизация с изменением фона элемента, на который дропаем круг
function testDrop() {
	let ball = document.querySelector(".test-dropp__item"),
		dropable = document.querySelector(".test-dropp__target");
	let current = null;

	ball.addEventListener("mousedown", (e) => {
		let shiftY = e.clientY - ball.getBoundingClientRect().top;
		let shiftX = e.clientX - ball.getBoundingClientRect().left;

		let toMove = (e) => {
			ball.style.top = e.pageY - shiftY + "px";
			ball.style.left = e.pageX - shiftX + "px";

			ball.hidden = true;
			let deeper = document.elementFromPoint(e.clientX, e.clientY);
			ball.hidden = false;
			if(!deeper) return;

			let dropTarget = deeper.closest(".test-dropp__target");
			if(current != dropTarget) { //условие выполняется и при заходе на элемент и при выходе с него
				if(current) dropable.style.backgroundColor = "purple";
				current = dropTarget;
// когда курсор находится внутри элемента dropable(target), то current = .test-dropp__target (т.е. target)
// при выходе сначала выполняется условие "if(current != target)" т.к. target становиться null ,
// потом выполняется "if(current)" и цвет dropable меняется.
// И дальше current снова становится null, т.к "current = target", а target = null
				if(current) dropable.style.backgroundColor = "rebeccapurple";
			}
		}
		document.addEventListener("mousemove", toMove);
		ball.addEventListener("mouseup", (e) => {
			document.removeEventListener("mousemove", toMove);
		});
	});
ball.addEventListener("dragstart", (e) => {
		e.preventDefault();
	});
}
testDrop();


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
			if(current) dropTarget.innerHTML = "Dropping done!";
			else dropTarget.innerHTML = "Target";
			document.removeEventListener("mousemove", toMove);
		}
	});
}


// Ползунок
let slider = document.querySelector("#slider"),
	thumb = document.querySelector(".thumb");
thumb.addEventListener("mousedown", (e) => {
	let shiftX = e.clientX - thumb.getBoundingClientRect().left;
	let toMove = (e) => {
		let left = e.clientX - shiftX - slider.getBoundingClientRect().left;
		if(left > slider.offsetWidth - thumb.offsetWidth) left = slider.offsetWidth - thumb.offsetWidth;
		if(left < 0) left = 0 ;
		thumb.style.left = left + "px";
	}
	let removeOnUp = (e) => {
		document.removeEventListener("mousemove", toMove);
		document.removeEventListener("mousemove", removeOnUp);
	}
	document.addEventListener("mousemove", toMove);
	document.addEventListener("mouseup", removeOnUp)
	
	thumb.addEventListener("dragstart", (e) => {
		e.preventDefault();
	});
});



//Задача с героями и полем. Изменение позиционирования при "mousemove" 
// и скролл при приблежении к краю экрана.Скролл вниз почему то не работает.Элемент заходит за край экрана
let isDragging = false;
document.addEventListener("mousedown", (e) => {
	let dragElement = e.target.closest(".draggable");
	if (!dragElement) return;
	dragElement.addEventListener("dragstart", (e) => e.preventDefault());
	let shiftY;
	let shiftX;
	startDrag();

	function onMouseUp() {
		finishDrag();
	}
	function onMouseMove(e) {
		moveAt(e);
	}
	function moveAt(e) {
		let newY = e.clientY - shiftY;
		let newX = e.clientX - shiftX;
		let newBottom = newY + dragElement.offsetHeight;
		if(newBottom > document.documentElement.clientHeight) {
			let docBottom = document.documentElement.getBoundingClientRect().bottom;
			let scrollY = Math.min(docBottom - newBottom, 10);
			if (scrollY < 0) scrollY = 0;
			window.scrollBy(0, scrollY);
			newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
		}
		if (newY < 0) {
			let scroll = Math.min(-newY, 10);
			window.scrollBy(0, -scroll);
			newY = Math.max(newY, 0);
		}
		if (newX < 0) newX = 0;
		if (newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
			newX = document.documentElement.clientWidth - dragElement.offsetWidth;
		}
		dragElement.style.top = newY + "px";
		dragElement.style.left = newX + "px";
	}
	function startDrag() {
		if(isDragging) return;
		isDragging = true;
		shiftY = e.clientY - dragElement.getBoundingClientRect().top;
		shiftX = e.clientX - dragElement.getBoundingClientRect().left;
		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", onMouseUp);
		dragElement.style.position = "fixed";
		moveAt(e);
	}
	function finishDrag() {
		if(!isDragging) return;
		isDragging = false;
		dragElement.style.position = "absolute";
		dragElement.style.top = parseInt(getComputedStyle(dragElement).top) + scrollY;
		document.removeEventListener("mousemove", onMouseMove);
		document.removeEventListener("mouseup", onMouseUp);
	}
});


// Мой вариант, но с не совсем правильным скролом. Но с работающим скроллом вниз
let isDraggin = false;
function toPractice() {
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
toPractice();

//Ниже решение из учебника с коментариями
/* ////////////////////////////////////////////////////
let isDragging = false;
document.addEventListener('mousedown', function(event) {
	let dragElement = event.target.closest('.draggable');
	if (!dragElement) return;
	event.preventDefault();
	dragElement.ondragstart = function() {
			return false;
	};
	let coords, shiftX, shiftY;
	startDrag(dragElement, event.clientX, event.clientY);
	function onMouseUp(event) {
		finishDrag();
	};
	function onMouseMove(event) {
		moveAt(event.clientX, event.clientY);
	}
	// в начале перемещения элемента:
	//   запоминаем место клика по элементу (shiftX, shiftY),
	//   переключаем позиционирование элемента (position:fixed) и двигаем элемент
	function startDrag(element, clientX, clientY) {
		if(isDragging) {
			return;
		}
		isDragging = true;
		document.addEventListener('mousemove', onMouseMove);
		element.addEventListener('mouseup', onMouseUp);
		shiftX = clientX - element.getBoundingClientRect().left;
		shiftY = clientY - element.getBoundingClientRect().top;
		element.style.position = 'fixed';
		moveAt(clientX, clientY);
	};
	// переключаемся обратно на абсолютные координаты
	// чтобы закрепить элемент относительно документа
	function finishDrag() {
		if(!isDragging) {
			return;
		}
		isDragging = false;
		dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
		dragElement.style.position = 'absolute';
		document.removeEventListener('mousemove', onMouseMove);
		dragElement.removeEventListener('mouseup', onMouseUp);
	}
	function moveAt(clientX, clientY) {
		// вычисляем новые координаты (относительно окна)
		let newX = clientX - shiftX;
		let newY = clientY - shiftY;
		// проверяем, не переходят ли новые координаты за нижний край окна:
		// сначала вычисляем гипотетический новый нижний край окна
		let newBottom = newY + dragElement.offsetHeight;
		// затем, если новый край окна выходит за пределы документа, прокручиваем страницу
		if (newBottom > document.documentElement.clientHeight) {
			// координата нижнего края документа относительно окна
			let docBottom = document.documentElement.getBoundingClientRect().bottom;
			// простой скролл документа на 10px вниз имеет проблему -
			// он может прокручивать документ за его пределы,
			// поэтому используем Math.min(расстояние до конца, 10)
			let scrollY = Math.min(docBottom - newBottom, 10);
			// вычисления могут быть не совсем точны - случаются ошибки при округлении,
			// которые приводят к отрицательному значению прокрутки. отфильтруем их:
			if (scrollY < 0) scrollY = 0;
			window.scrollBy(0, scrollY);
			// быстрое перемещение мыши может поместить курсор за пределы документа вниз
			// если это произошло -
			// ограничиваем новое значение Y максимально возможным исходя из размера документа:
			newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
		}
		// проверяем, не переходят ли новые координаты за верхний край окна (по схожему алгоритму)
		if (newY < 0) {
			// прокручиваем окно вверх
			let scrollY = Math.min(-newY, 10);
			if (scrollY < 0) scrollY = 0; // проверяем ошибки точности
			window.scrollBy(0, -scrollY);
			// быстрое перемещение мыши может поместить курсор за пределы документа вверх
			newY = Math.max(newY, 0); // newY не может быть меньше нуля
		}
		// ограничим newX размерами окна
		// согласно условию, горизонтальная прокрутка отсутствует, поэтому это не сложно:
		if (newX < 0) newX = 0;
		if (newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
			newX = document.documentElement.clientWidth - dragElement.offsetWidth;
		}
		dragElement.style.left = newX + 'px';
		dragElement.style.top = newY + 'px';
	}
}); */


// dragndrop с помощью событий указателя. Приимущество в том, что не надо вешать обработчик на весь документ
function movePointer() {
	let ball = document.querySelector(".ball");
	ball.addEventListener("dragstart", (e) => e.preventDefault());
	ball.addEventListener("pointerdown", (e) => {
		ball.setPointerCapture(e.pointerId);
		function onMove(e) {
			ball.style.top = e.pageY - ball.offsetHeight/2 + "px";
			ball.style.left = e.pageX - ball.offsetWidth/2 + "px";
		}
		ball.addEventListener("pointermove", onMove);
		function onUp() {
			ball.removeEventListener("pointermove", onMove);
			ball.removeEventListener("pointerup", onMove);
		}
		ball.addEventListener("pointerup", onUp);
	});
}
movePointer();



//Обработка события при нажатии на 2 клавиши одновременно. Мой вариант + из гугла
let keys = {};
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
document.addEventListener("keydown", onKeyDown);
// Вариант через массивы
function runOnKeys(func, ...args) {
	let pressed = [];
	function onKeyDown(e) {
		if(!e.repeat) pressed.push(e.code);
		if(pressed.includes(...args) && pressed.length == args.length) {
			func();
		} 
	}
	function onKeyUp() {
		pressed.splice(0);
	}
	document.addEventListener("keydown", onKeyDown);
	document.addEventListener("keyup", onKeyUp);
}
runOnKeys(()=> alert("Привет"), "KeyQ", "KeyW");
//Вариант из решения
function runOnKeys(func, ...args) {
	let set = new Set();
	function OnKeyDown(e) {
		set.add(e.code);
		for(let arg of args) {
			if(!set.has(arg)) return
		}
		set.clear();
		func();
	}	
	function OnKeyUp(e) {
		set.delete(e.code);
	}
	document.addEventListener("keydown", OnKeyDown);
	document.addEventListener("keyup", OnKeyUp);
}
runOnKeys(() => alert("Hi"), "KeyQ", "KeyW");



// Бесконечная прокрутка вниз с добавлением элемента
let date = new Date();
let createElemm = (html) => {
	let dateBox = document.createElement("div");
	dateBox.innerHTML = html;
	document.body.append(dateBox);
};
let addDate = () => {
	let coords = document.documentElement.getBoundingClientRect();
	let bottomFringe = document.documentElement.clientHeight + scrollY + 50;
	let docHeight = document.documentElement.offsetHeight;

	//можно реализовать через координаты окна относительно документа и высоты окна
	// let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom; 
	// let fringe = document.documentElement.clientHeight + 100;
	
	if (bottomFringe < docHeight) return;
	// if (windowRelativeBottom > fringe) return;
	
	console.log("fringe");
	window.scrollTo(0, Math.abs(coords.top));
	createElemm(date);
};
document.addEventListener("scroll", addDate);
//Вариант из решения
/*   function populate() {
    while(true) {
      let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
      if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;
      document.body.insertAdjacentHTML("beforeend", `<p>Date: ${new Date()}</p>`);
    }
  }
  window.addEventListener('scroll', populate);
  populate(); */



// Скролл по нажатию стрелки вверх
function scrollTop() {
	let arrow = document.getElementById("arrowTop");
	arrow.hidden = true;
	function toTop(e) {
		let target = e.target.id = "arrowTop";
		if(!target) return;
		window.scrollTo(0, 0);
	}
	window.addEventListener("scroll", (e) => {
		if(window.scrollY >= document.documentElement.clientHeight) {
			arrow.hidden = false;
			arrow.addEventListener("click", toTop);
		} 
		else {
			arrow.hidden = true;
			arrow.removeEventListener("click", toTop); 
		}
	});
}
scrollTop();
// Вариант из решения
arrowTop.onclick = function() {
	window.scrollTo(pageXOffset, 0);
	// после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};
window.addEventListener('scroll', function() {
	arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});



// //Элемент загружается, когда к до него доходит скролл окна
function isVisible(elem) {
      let coords = elem.getBoundingClientRect();
      let windowHeight = document.documentElement.clientHeight;
      // видны верхний ИЛИ нижний край элемента
      let topVisible = coords.top > 0 && coords.top < windowHeight;
      let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
      return topVisible || bottomVisible;
    }
    /**
    Вариант проверки, считающий элемент видимым,
    если он не более чем -1 страница назад или +1 страница вперед.
    function isVisible(elem) {
      let coords = elem.getBoundingClientRect();
      let windowHeight = document.documentElement.clientHeight;
      let extendedTop = -windowHeight;
      let extendedBottom = 2 * windowHeight;
      // top visible || bottom visible
      let topVisible = coords.top > extendedTop && coords.top < extendedBottom;
      let bottomVisible = coords.bottom < extendedBottom && coords.bottom > extendedTop;
      return topVisible || bottomVisible;
    }
    */
    function showVisible() {
      for (let img of document.querySelectorAll('img')) {
        let realSrc = img.dataset.src;
        if (!realSrc) continue;
        if (isVisible(img)) {
          // отключение кеширования
          // эта строка должна быть удалена в "боевом" коде
          realSrc += '?nocache=' + Math.random();
          img.src = realSrc;
          img.dataset.src = '';
        }
      }
    }
    window.addEventListener('scroll', showVisible);
    showVisible();



