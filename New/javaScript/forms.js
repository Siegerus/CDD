//задача и с заменой div/textarea при focus/blur
function replaceDiv() {
	let div = document.querySelector(".view");
	let textarea = document.createElement("textarea");
	textarea.className = "edit";
	function onFocus(e) {
		div.replaceWith(textarea);
		textarea.value = div.innerHTML;
		textarea.focus();
	}
	function onBlur(e) {
		textarea.replaceWith(div);
		div.innerHTML = textarea.value;
	}
	div.addEventListener("click", onFocus);
	textarea.addEventListener("blur", onBlur);
	textarea.addEventListener("keydown", (e) => {
			if(e.code == "Enter") textarea.blur();
	});
}
replaceDiv();
//Из решения
 let area = null;
    let view = document.getElementById('view');
    view.onclick = function() {
      editStart();
    };
    function editStart() {
      area = document.createElement('textarea');
      area.className = 'edit';
      area.value = view.innerHTML;
      area.onkeydown = function(event) {
        if (event.key == 'Enter') {
          this.blur();
        }
      };
      area.onblur = function() {
        editEnd();
      };
      view.replaceWith(area);
      area.focus();
    }
    function editEnd() {
      view.innerHTML = area.value;
      area.replaceWith(view);
    }



// Задача на редактирование ячеек таблицы по фокусу
let table = document.getElementById('bagua-table'),
	textarea = document.createElement("textarea"),
	buttons,
	isEdit = false;

	function createElem() {
		for(let i= 0; i < 2; i++) {
			buttons = document.createElement("button");
			textarea.after(buttons);
			buttons.classList.add("buttons");
		}
		buttons = document.querySelectorAll(".buttons")
		buttons[0].innerHTML = "Ok";
		buttons[1].innerHTML = "Cancle";
		return buttons;
	}
	function onClick(e) {
		let target = e.target.closest("td");
		if(!target) return 
		if(isEdit) return;
		isEdit = true;
	
		target.replaceWith(textarea);
		textarea.className = "textarea";
		textarea.value = target.innerHTML;

		createElem();
		buttons = document.querySelectorAll(".buttons");
		console.log(buttons)
		textarea.focus();

		function toBlur(e) {
			isEdit = false;
			textarea.replaceWith(target);
			target.innerHTML = textarea.value;
			buttons.forEach(item => item.remove());
			buttons.forEach(item => item.removeEventListener("click", toBlur))
		}
		buttons.forEach(item => item.addEventListener("click", toBlur));
	}
table.addEventListener("click", onClick);
// Вариант из решения
/* let table = document.getElementById('bagua-table');
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
//HTML
// <!DOCTYPE HTML>
// <html>
// <head>
// <style>
// th {
//   text-align: center;
//   font-weight: bold;
// }
// td {
//   width: 150px;
//   white-space: nowrap;
//   text-align: center;
//   vertical-align: middle;
//   padding: 10px;
// }
// .nw {
//   background-color: #999;
// }
// .n {
//   background-color: #03f;
//   color: #fff;
// }
// .ne {
//   background-color: #ff6;
// }
// .w {
//   background-color: #ff0;
// }
// .c {
//   background-color: #60c;
//   color: #fff;
// }
// .e {
//   background-color: #09f;
//   color: #fff;
// }
// .sw {
//   background-color: #963;
//   color: #fff;
// }
// .s {
//   background-color: #f60;
//   color: #fff;
// }
// .se {
//   background-color: #0c3;
//   color: #fff;
// }
// .textarea {
// 	position: relative;
// 	width: 100%;
// 	height: 100%;
// 	min-height: 111px;
// 	resize: none;
// }
// .textarea:focus {
// 	outline: none;
// }
// .buttons {
// 	cursor: pointer;
// }
// </style>
//   <meta charset="utf-8">
// </head>
// <body>
//   <p>Кликните на ячейку таблицы, чтобы отредактировать её. Нажмите ОК или ОТМЕНА, когда закончите.</p>
//   <table id="bagua-table">
//     <tr>
//       <th colspan="3">Квадрат <em>Bagua</em>: Направление, Элемент, Цвет, Значение</th>
//     </tr>
//     <tr>
//       <td class="nw"><strong>Северо-Запад</strong>
//         <br>Металл
//         <br>Серебро
//         <br>Старейшины
//       </td>
//       <td class="n"><strong>Север</strong>
//         <br>Вода
//         <br>Синий
//         <br>Перемены
//       </td>
//       <td class="ne"><strong>Северо-Восток</strong>
//         <br>Земля
//         <br>Жёлтый
//         <br>Направление
//       </td>
//     </tr>
//     <tr>
//       <td class="w"><strong>Запад</strong>
//         <br>Металл
//         <br>Золото
//         <br>Молодость
//       </td>
//       <td class="c"><strong>Центр</strong>
//         <br>Всё
//         <br>Пурпурный
//         <br>Гармония
//       </td>
//       <td class="e"><strong>Восток</strong>
//         <br>Дерево
//         <br>Синий
//         <br>Будущее
//       </td>
//     </tr>
//     <tr>
//       <td class="sw"><strong>Юго-Запад</strong>
//         <br>Земля
//         <br>Коричневый
//         <br>Спокойствие
//       </td>
//       <td class="s"><strong>Юг</strong>
//         <br>Огонь
//         <br>Оранжевый
//         <br>Слава
//       </td>
//       <td class="se"><strong>Юго-Восток</strong>
//         <br>Дерево
//         <br>Зеленый
//         <br>Роман
//       </td>
//     </tr>
// </table>
// <div class="test-div">Click</div>
//   <script type="module" src="js/script.js"></script>
// </body>
// </html>


//Задача с мышью, передвигающейся стрелками 
let mouse =  document.getElementById("mouse");
mouse.tabIndex = 0;
function moveElement(elem) {
    elem.addEventListener("click", (e) => {
        let coords = elem.getBoundingClientRect();
        let newX = coords.left;
        let newY = coords.top;
    function toMove(e) {
        elem.style.position = "fixed";
        if(e.code == "ArrowRight") {
            newX += elem.offsetWidth;
            if(newX > document.documentElement.clientWidth - elem.offsetWidth)  newX = document.documentElement.clientWidth - elem.offsetWidth;
            elem.style.left = newX + "px";
        } 
        if(e.code == "ArrowLeft") {
            newX -= elem.offsetWidth;
            if(newX < 0) newX = 0;
            console.log(newX)
            elem.style.left = newX + "px";
        } 
        if(e.code == "ArrowDown") {
            newY += elem.offsetHeight;
            elem.style.top = newY + "px";
        }
        if(e.code == "ArrowUp") {
            newY -= elem.offsetHeight;
            elem.style.top = newY + "px"
        }
    }
    function toBlur() {
        elem.removeEventListener("keydown", toMove);
        elem.removeEventListener("blur", toBlur);
    }
        elem.addEventListener("keydown", toMove);
        elem.addEventListener("blur", toBlur);
    });
}
moveElement(mouse);
// Вариант из решения
  mouse.tabIndex = 0;
    mouse.onclick = function() {
      this.style.left = this.getBoundingClientRect().left + 'px';
      this.style.top = this.getBoundingClientRect().top + 'px';
      this.style.position = 'fixed';
    };
    mouse.onkeydown = function(e) {
      switch (e.key) {
        case 'ArrowLeft':
          this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
          return false;
        case 'ArrowUp':
          this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
          return false;
        case 'ArrowRight':
          this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
          return false;
        case 'ArrowDown':
          this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
          return false;
      }
    };



 // Калькулятор
    let form = document.forms.calculator;
    let elements = form.elements;
    let initialText = document.querySelector("#diagram > tbody > tr:nth-child(1) > th:nth-child(1)");
    let resultText = document.querySelector("#diagram > tbody > tr:nth-child(1) > th:nth-child(2)");
    let hightAfter = document.getElementById("height-after");
    function toCalculate(e) {
        let initial = +elements[0].value;
        let years = elements[1].value / 12;
        let interest = elements[2].value * 0.01;
        let result = Math.round(initial * (1 + interest) ** years);
        initialText.innerHTML = "Было: " + initial;
        resultText.innerHTML = "Станет: " + result;
        hightAfter.style.height = result/initial*100 + "px";
    }
    toCalculate();
    Array.from(elements).forEach(item => {
        item.addEventListener("input", toCalculate);
    });

	// Из решения
    /* let form = document.forms.calculator;
	form.money.oninput = calculate;
    form.months.onchange = calculate;
    form.interest.oninput = calculate;

     function calculate() {
      let initial = +form.money.value;
      if (!initial) return;
      let interest = form.interest.value * 0.01;
      if (!interest) return;
      let years = form.months.value / 12;
      if (!years) return;
      let result = Math.round(initial * (1 + interest) ** years);
      let height = result / form.money.value * 100 + 'px';
      document.getElementById('height-after').style.height = height;
      document.getElementById('money-before').innerHTML = form.money.value;
      document.getElementById('money-after').innerHTML = result;
    }
    calculate(); */


//Модальное окно с коллбэком
let container = document.getElementById("prompt-form-container"),
	myForm = document.forms[0],
	message = document.getElementById("prompt-message"),
	text = myForm.elements.text,
	buttonCancel = myForm.elements.cancel,
	isFocus = false;
function showPrompt(html, callback) {
	container.style.display = "block";
	message.innerHTML = html;
	text.focus();

	function onSubmit(e) {
		e.preventDefault();
		if(text.value == "") callback(null);
		else callback(text.value);
		container.style.display = "none";
		myForm.removeEventListener("submit", onSubmit);
		buttonCancel.removeEventListener("click", onCancle);
		document.removeEventListener("keydown", onEscape);
	}
	myForm.addEventListener("submit", onSubmit);

	function onCancle() {
		container.style.display = "none";
		callback(null);
		buttonCancel.removeEventListener("click", onCancle);
		document.removeEventListener("keydown", onEscape);
		myForm.removeEventListener("submit", onSubmit);
	}
	buttonCancel.addEventListener("click", onCancle);

	function onEscape(e) {
		if(e.code == "Escape") {
			container.style.display = "none";
			callback(null);
			document.removeEventListener("keydown", onEscape);
			buttonCancel.removeEventListener("click", onCancle);
			myForm.removeEventListener("submit", onSubmit);
		};
	}
	document.addEventListener("keydown", onEscape);
}
let firstElem = myForm.elements[0];
let lastElem = myForm.elements[myForm.elements.length - 1];
firstElem.addEventListener("keydown", (e) => {
	if(e.code == "Tab" && e.shiftKey) {
		e.preventDefault();
		lastElem.focus();
	}
});
lastElem.addEventListener("keydown", (e) => {
	if(e.code == "Tab" && !e.shiftKey) {
		e.preventDefault();
		firstElem.focus();
	}
});
document.querySelector("#show-button").addEventListener("click", (e) => {
	showPrompt("html", (value) => alert(`Вы ввели: ${value}`));
});

//Вариант из решения
// Показать полупрозрачный DIV, чтобы затенить страницу
// (форма располагается не внутри него, а рядом, потому что она не должна быть полупрозрачной)
function showCover() {
	let coverDiv = document.createElement('div');
	coverDiv.id = 'cover-div';
	// убираем возможность прокрутки страницы во время показа модального окна с формой
	document.body.style.overflowY = 'hidden';
	document.body.append(coverDiv);
}
function hideCover() {
	document.getElementById('cover-div').remove();
	document.body.style.overflowY = '';
}
function showPrompt(text, callback) {
	showCover();
	let form = document.getElementById('prompt-form');
	let container = document.getElementById('prompt-form-container');
	document.getElementById('prompt-message').innerHTML = text;
	form.text.value = '';

	function complete(value) {
		hideCover();
		container.style.display = 'none';
		document.onkeydown = null;
		callback(value);
	}

	form.onsubmit = function() {
		let value = form.text.value;
		if (value == '') return false; // игнорируем отправку пустой формы

		complete(value);
		return false;
	};

	form.cancel.onclick = function() {
		complete(null);
	};

	document.onkeydown = function(e) {
		if (e.key == 'Escape') {
			complete(null);
		}
	};
	let lastElem = form.elements[form.elements.length - 1];
	let firstElem = form.elements[0];
	lastElem.onkeydown = function(e) {
	if (e.key == 'Tab' && !e.shiftKey) {
		firstElem.focus();
		return false;
	}
	};
	firstElem.onkeydown = function(e) {
	if (e.key == 'Tab' && e.shiftKey) {
		lastElem.focus();
		return false;
	}
	};
	container.style.display = 'block';
	form.elements.text.focus();
}
document.getElementById('show-button').onclick = function() {
	showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
	alert("Вы ввели: " + value);
	});
};