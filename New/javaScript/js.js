// вызвать функцию при выполнении условия
// Простая реализация:
const processTuesday = () => {
  // …Полезный код
}
if (day === 'Вторник') {
  processTuesday()
}
// Более короткая и лаконичная запись:
day === 'Вторник' && processTuesday()


//
let valuee = 0;
if (externalValue) {
  valuee = externalValue
}
// Укороченный вариант записи
const valueee = externalValue || 0;
// Неявное приведение externalValue к логическому типу также игнорирует 
// определённые ложные значения, возможно, вполне валидные: '', NaN, 0 , -0, 0n, false. 
// Чтобы их не терять, вместо || используйте ?? — логический оператор nullish
const valueeee = externalValue ?? 42;


//
if (manufacturer == false) {
  manufacturer = "Неизвестный производитель";
}
console.log( manufacturer );  // "Неизвестный производитель"
// тоже самое с помощью логического присваивания
let manufacturer = ""; 
manufacturer ||= "Неизвестный производитель";
console.log( manufacturer );  // "Неизвестный производитель"



let arr = [],
    el1 = {},
    el2 = {},
    el3 = {};
    
    let addToArray = function() {
        arr.push(el1,el2,el3);
        arr.forEach((item, i) => {
            arr[i].smth = " text";        
            arr[i].smthElse = " moreText";
        });
        let arrData = JSON.stringify(arr);
        return arrData;
    };
    console.log(addToArray());

// 
let toTestFn = () => {
    let v = 8 ? console.log("Done") : console.log("Not");
    return true;
}
toTestFn()

toTestFn ? console.log("toTest - true") : console.log("toTest - false");
    

// Перебор объекта 
Object.defineProperty(ob, "width", { /* способ менять зачение в объекте */
    value : 400,
}); 

console.log(ob);

Object.keys(ob).forEach((key) => { /* ".keys(ob)"-метод, который вернёт из объкта его ключи */
    ob[key] =  key + "lorem";       /* меняем все хначения ключей в лбъекте */
}); 

console.log(ob);

Object.entries(ob).forEach(([key, value]) => { /*"entries"-метод, который вернёт из объкута пару ключ/значение в виде массивов */
    console.log(key, value);
}); 

console.log(ob);


// действие с массивом (для примера. Объкт выше от этого не поменяется)

let entries = Object.entries(ob); /* в переменной массив, который содежит массивы из пар ключ/значение */

entries.splice(1, 1, ['min-height', 300]);  /* с помощью "splice" можем поменять нужные ключ/значение массива */

entries[0].splice(1, 1, "test"); /* а так можно менять массив внутри массива */


entries = entries.map((item) => {
    return item = ['min-height', 300];/*а с помощью "map" сразу все элементы массива (ключ/значение). "return" обязателен */
}); 

console.log(entries);


// Ещё один пример

let array = ["smth", "smth2", "smth3", "smth4"];

array = array.map((item) => {
    item = "smthNew";

    return item;                    /* "return" обязателен  */
});
console.log(array);


//спред 

const persona = { name: 'Иван', lastName: 'Объектов'}
const userData = { ...persona, username: 'killer3000' }

console.log(userData)

// Безымянная функция, которая сразу же вызывается
(() => {
    console.log("smth");
}) (); 


// Непрямой вызов функции через "call"

let toTestCallFn = function(smth) {
    let a = {
        width: (300 + this) + "px",
        height: (250 + this) + "px"
    }
    console.log(smth);
    return a;
};
// console.log(toTestCallFn.call(12, "smth"));
let testBind = toTestCallFn.bind(213);  // или через связывание фунскций с "bind"
console.log(testBind());


// "try" "catch" в действии

let toDo = () => {
    console.log("do smth..")
    console.log("do smth...")
    console.log("do smth else..")
    try {
        // let variable;
        console.log(variable);
    } catch(err) {
        console.log("this is error! variable is lost", err);
    }
    console.log("do smth more again..")
    console.log("do smth...")
    console.log("do smth else..")
};
toDo();


// "" в действии

let anyVar = 5;
let toTestPromise = function() {
    return new Promise(function(resolve, reject) {
        if (anyVar == 5) {
            resolve();
        } else {
            reject();
        }
    });
};
toTestPromise()
    .then(() => console.log("Done1"))
    .then(() => console.log("Done2"))
    .catch(() => console.log("Error"))
    .finally(() => console.log("final Done"));


// "promise all" в действии

Promise.all([
    new Promise ((resolve) => {
        resolve("first")
    }),
    new Promise ((resolve) => {
        resolve("second")
    }),
    new Promise ((resolve) => {
        resolve("third")
    })
])
    .then((value)=> console.log(value))


// Пример обработки множественных запросов с "promise all"
let urlArr = [
    "https://api.github.com/users/iliakan",
    "https://api.github.com/users/remy",
    "https://api.github.com/users/jeresig"
];

let requests = urlArr.map((item) => {
    item = fetch(item);
    return item
});

Promise.all(requests)
    .then((responses) => {
        responses.forEach((item) => {
            console.log(`${item.url}"--"${item.status}`);
        });
        return responses;
    })
    .then((responses) => {
        responses.forEach((item) => {
            console.log(item.text());
        })
    });


// рекурсивная функция. Вызывает сама себя
let toTest = (n) => {
    if (n <= 0) {
        console.log("Thats all");
        return;
    }
    console. log(n);
    setTimeout(() => toTest(n-1), 1000);
}
toTest(20);


// Асинхронная функция
let toTestAcync = async () => {
    await console.log("first acync");
    await console.log("second acync");
    await console.log("third acync");
}

toTestAcync();


// Кастомное событие
let box = document.querySelector(".box");
let anyEvent = new CustomEvent("myEvent");

let displayedToConsole = () => {
    console.log("Event!");
}
box.addEventListener("myEvent", displayedToConsole);
box.addEventListener("click", () => {
    box.dispatchEvent(anyEvent);  // Запуск кастомного события
});



//  Отправка формы с "fetch"
let form = document.querySelector(".feed-form"),
    inputs = document.querySelectorAll(".feed-form__input"),
    messageBox = document.createElement("div"),
    message = {
        success : "Спасибо, данные отправлены!",
        error : "Ошибка отправки данных!"
    };

    messageBox.classList.add("message-box");

let handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(form);

    fetch("reviews-form_telegram.php", {
        method : "POST",
        body : formData
    })
        .then((response) => {
            document.body.appendChild(messageBox);
            if(response.ok) {
                messageBox.innerHTML = message.success;
            } else {
                throw new Error('Error occurred!'); //кидаем ошибку, тогда она появится в "catch"
            }
            return response.json();
        })
        .catch((err) => {
            messageBox.innerHTML = message.error;
            console.log(err);
        })
        .finally(() => {
            form.reset();
            setTimeout(() => {
                messageBox.remove()
            }, 2000)
        });  
    };

form.addEventListener("submit", handleSubmit);


// Вариант с async
let sendResponse = async (formData) => {
    const response = await fetch("reviews-form_telegram.php", {
        method: "POST",
        body: formData
    });

    if (!response.ok) {
        throw new Error('Error occurred!');
    }
    return await response.text();
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    document.body.appendChild(messageBox);

    sendResponse(formData)
        .then((response) => {
            messageBox.innerHTML = message.success;
        })
        .catch((err) => {
            messageBox.innerHTML = message.error;
            console.log(err);
        })
        .finally(() => {
            form.reset();
            setTimeout(() => {
                messageBox.remove()
            }, 2000)
        });
});


// функция - конструктор
function User(name, age, descr) {
    this.name = name;
    this.age = age;
    this.descr = descr;
}

let user1 = new User("Smith", 19, "ugly");
let user2 = new User("Ann", 22, "beauty");
console.log(user1);
console.log(user2);

/* function Accumulator(startingValue)   {
    this.value = startingValue;
    this.read = () => {
        let inputValue = +prompt("Введите число","");
        return this.value = this.value + inputValue;
    }
} 
let accumulator = new Accumulator(33);
accumulator.read(); */


// Функция, которая вернёт Слово с большой буквы
let ucFirst = (str) => {
    let text =  str;
    let upper = text.at(0).toUpperCase() + text.slice(1);
    return upper;
};
console.log(ucFirst("kjf"));


// Деструктуризация 
let options = {
    size: {     // переменные для size и items отсутствуют, так как мы взяли сразу их содержимое.
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};
let { size: {width, height}, items : [item1, item2] } = options

console.log(width); //100
console.log(height); //200
console.log(item1);	//Cake
console.log(item2); //Donut
console.log(extra); //true

// деструктуризация
function foo(args = {}) {
	let obj = {
		"key1" : true,
		"key2" : false,
		"key3" : 1,
		"key4" : "smth",
		...args,
	}
	for(let key in obj) {
		console.log(`${key} : ${obj[key]}`);
	}
}
foo({"key5" : 2});


// Функция спрашивает дату и выводит день недели этой даты
let getDate = () => {
    let date = new Date(prompt("Enter your Date"));
    let getWeekDay1 = (date) => {
        let arr = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
        return result = arr[date.getDay()];
    };
    if(!isFinite(date)) {
        console.log("Error!");
        return;
    } else {
        console.log(getWeekDay1(date));
    }
}
getDate();


// Функция возвращает последний день месяца
let date = new Date();
let getLastDayOfMonth = (year, month) => {
    let copyDate = new Date(date)
    result = new Date(copyDate.setFullYear(year, month + 1, 0));
    return result.getDate();
};
console.log(getLastDayOfMonth(2019, 2));


//Date
//Колличество секунд с начала дня
let dateq = new Date();
let getSecondsToday = (time) => {
    let today = new Date(dateq.getFullYear(), dateq.getMonth(), dateq.getDate());
    let diff = Math.floor((dateq - today)/1000);
    return diff; 
};
console.log(getSecondsToday(dateq));


// Форматируем дату
let datew = new Date();
let formatDate = (set) => {
    let currentDate = new Date(datew);
    let setDate = set;
    let diff = currentDate - setDate;

    if (diff < 1000) {
        return "прямо сейчас";
    }

    let sec = Math.floor(diff/1000);
    if (sec < 60) {
        return sec + " сек. назад";
    }  

    let min = Math.floor(diff/60000); 
    if (min < 60) {
        return min + " мин. назад";
    } 

    let arr = [
        "0" + set.getDate(),
        "0" + (set.getMonth() + 1),
        "" + set.getFullYear(),
        "0" + set.getHours(),
        "0" + set.getMinutes(),
    ].map((item) => item.slice(-2));
    return arr.slice(0, 3).join(".") + " " +  arr.slice(3).join(":");
};
console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86300 * 1000)));


// JSON с параметром функцией
console.log(JSON.stringify(obj, function replacer(key, value) {
    return (key == "married") ? undefined : value;
    /* if (key == "married") {
        return undefined;
    } else {
        return value;
    } */
} ));


// синтаксис оператора расширения "spread"
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log( Math.max(...arr1, ...arr2) );
//
let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];
let merged = [0, ...arr3, 2, ...arr4];
console.log(merged); // 0,3,5,1,2,8,9,15 (0, затем arr, затем 2, в конце arr2)
//
let any = "1233445";
console.log([...any]); //['1', '2', '3', '3', '4', '4', '5']
//
function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName ); // Юлий Цезарь
    console.log( titles[0] ); // Консул
    console.log( titles[1] ); // Император
  }
  showName("Юлий", "Цезарь", "Консул", "Император");


//просто практика
let anyF = function(par){
    console.log(par);
  };
  let toTestt = (a, b, func, ...other) => {
    let random = Math.random(4);
    for(let i = 8; i > 3; i--) {
      console.log(b + ":" + i);
    }
  
    for (let args of other) {
      if(args) {
        console.log(args);
      }
    }
    func(random);
  };
  toTestt("smth", "smth else", anyF,  1, 5, false);

  

// Прототипирование. Функция-конструктор с прототипом man.Установили для "user" этот прототип
let man = {
	walk : true,
	eat : true,
	breeth : true,
	sleep : true,
};
function User(name, age, func) {
	this.name = name;
	this.age = age;
	function sayHi() {
		console.log("Hi!");
	}
	this.sayAge = function() {
		let date = new Date(1989, 10 ,4);
		let birth = date.getFullYear() + "-" +  date.getDate() + "-" +  date.getMonth();
		func(this.age + " , My birthday : " + birth) ;
	}
}
User.prototype.man = man;

let user = new User("Alex", 35, console.log);
let user22 = new user.constructor("John", 94, console.log); // можно создать нового "user" через св-во "constructor"(встроенное св-во)
user.sayAge();
user22.sayAge();
console.log(user.man.walk);
console.log(user22.man.eat);


// Изменение встроенного прототипа - по методу "defer" все функции буду вызываться с задержкой
Function.prototype.defer = function () {
	setTimeout(()=> this(), 2000);
}
function func() {
	console.log("Hi");
}
func.defer();


// Одни и теже часы через ф.конструктор и класс 
function Clock({ template }) {
    let timer;
    function render() {
      let date = new Date();
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
      console.log(output);
    }
    this.stop = function() {
      clearInterval(timer);
    };
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  }
  let clockkkk = new Clock({template: 'h:m:s'});
  clockkkk.start();

  //
class Clock {
	constructor({ template }) {
	  this.template = template;
	}
	render() {
	  let date = new Date();
	  let hours = date.getHours();
	  if (hours < 10) hours = '0' + hours;
	  let mins = date.getMinutes();
	  if (mins < 10) mins = '0' + mins;
	  let secs = date.getSeconds();
	  if (secs < 10) secs = '0' + secs;
	  let output = this.template
		.replace('h', hours)
		.replace('m', mins)
		.replace('s', secs);
	  console.log(output);
	}
	stop() {
	  clearInterval(this.timer);
	}
	start() {
	  this.render();
	  this.timer = setInterval(() => this.render(), 1000);
	}
  }
  let clockkk = new Clock({template: 'h:m:s'});
//   clockkk.start();

// И класс часы, которые наследуют основные часы
  class ExtendedClock extends Clock {
	constructor(template, precision = 500) {
		super(template);
		this.precision  = precision;
	}
	start() {
		super.render();
		this.timer = setInterval(() => super.render(), this.precision);
	}
  }
let exClock = new ExtendedClock({template: 'h:m:s'});
exClock.start();



// Пример со класса со статическим св-вом
class Article {
	constructor(name, title) {
		this.name = name;
		this.title = title;
		this.date = new Date();
	}
	static createArticle() {
		return new this("New Page", "News") ;
	}
	getTime() {
		let day = this.date.getDate();
		console.log(day);
	}
}
let page = Article.createArticle();
class NewArticle extends Article {

}
let page1 = new NewArticle("New Page", "Stars");
page1.getTime();
console.log(page);
console.log(page1);


//Защищённые св-ва для класса
class CoffeeMachine {
	_water = 0;
	#waterLimit = 200;
	constructor(power) {
		this._power = power
	}
	setWater(value) {
		if(value < 0) throw new Error("Ошибка!");
		return this._water = value;
	}
	getWater() {
		return this._water;
	  }
	getPower() {
		return this._power;
	}
	#checkWater(value) {
		if (value < 0) throw new Error("Отрицательный уровень воды");
		if (value > this.#waterLimit) throw new Error("Слишком много воды");
	  }
	  getLimit() {
		return this.#waterLimit;
	}
}	

let machine = new CoffeeMachine("120w");
machine.setWater(300); // задать "_water" через ф-цию. Не удасться установить меньше 0
console.log(machine.getWater());// получить значение через ф-цию.
console.log(machine.getPower()); // можно только получить значение через ф-цию.Для установки ф-ции нет
/* machine.#checkWater() */ // приватный метод. обращение снаружи вызовет ошибку
console.log(machine.getLimit());


// Error
let anya = true;
try {
	console.log(anya) ;
	if(!anya) throw new SyntaxError("My error!");
	console.log(anya + "smth");
	// blabla();
	console.log(anya + "smth else");
}
catch(err) {
	if(err.name == "SyntaxError") {
		console.log("This is my SyntaxError. Any not true");
	} 
	else  {
		console.log("Another error: " + err.message);
		throw err;
	}	
}
finally {console.log("Finally");}



//Error. Пример наследования класса ошибки. Создание своего класса Error.
/* class Error {
	constructor(message) {
	  this.message = message;
	  this.name = "Error"; // 
	  this.stack = "<стек вызовов>"; 
	}
  } */
class MyError extends Error {
    constructor() {
        super();
        this.name = this.constructor.name;
    }
}
class CustomError extends MyError {
    constructor(message) {
        super();
        this.message = message;
    }
}
class SpecialCustomError extends CustomError {
    constructor(property) {
        super();
        this.message = "Нет св-ва " + property;
        this.property = property;
    }
}

let toValidate = (user) => {
    let result = JSON.parse(user);
    if(!result.age) {
        throw new SpecialCustomError("age");
    }
    return result;
};
try {
    toValidate(`{ "name" : "Alex" }`)
} catch(err) {
    if(err instanceof CustomError) {
        console.log("This is Error: " + err.message);
        console.log("Error name: " + err.name);
        console.log("Missing property: " + err.property);
    } else if(err instanceof SyntaxError) {
        console.log("Wrong Syntax!" + err.message);
    } else {
        console.log(err);
    }
}



//Proxy
// get ловушка
let obj = {};
obj = new Proxy(obj, {
	get(target, prop) {
		if (target[prop] == undefined) console.log("has not")
	}
});
obj.property = 10;
obj.anotherProperty = 11;
obj.method = () => {
	console.log("hi!");
} 

// set ловушка
let anyObj = {
	key : "smth",
	key2 : "smth else",
	key3 : true
};
anyObj = new Proxy(anyObj, {
	set(anyObj, prop, val) {
		if(!val) {
			console.log("catch false property");
			return anyObj[prop] = "changed from `false`";
		} else {
			return anyObj[prop] = val;
		}
	}
});
anyObj.key4 = "";
console.log(anyObj);
	
// Ловушка с перебором
let objj = {
	key1 : "qqq",
	key2 : 11,
	_key1 : false,
	_key2 : true
};
objj = new Proxy(objj, {
	ownKeys(target) {
		return Object.keys(target).filter((item) => !item.startsWith("_"));
	}
});
for(let keys in objj) {
	console.log(keys);
}

let myObject = {
	name : "username",
	_password : "*****",
};

//ловушка has
let range = {
	start: 1,
	end: 10
  };
  range = new Proxy(range, {
	has(target, prop) {
		return prop >= target.start && prop <= target.end
	}
  });
  
// декоратор на прокси
let sayHi = (user) => {
	console.log("Hi " + user);
}
let delay = (f, ms) => {
	return new Proxy(f, {
		apply(target, thisArg, ...args) {
			setTimeout(() => target.call(thisArg, ...args), ms);
		}
	});
};
let sayHiDecor = delay(sayHi, 3000);
sayHiDecor("Alex");

//Обёртка с прокси, которая на обращение к несуществующему св-ву выдаёт свою ошибку
let userr = {
	name: "Alex",
	age: 35,
	married: false,
};
function wrap(target) {
	return new Proxy(target, {
		get(target,prop) {
			if(target[prop] == undefined) {
				throw new Error("Ошибка: такого свойства не существует")
			} else {
				return target[prop];
			}
		}
	});
}
userr = wrap(userr);
console.log(userr.nam);

//  Прокси для вывода по отрицательным индексам массива
let arraya = [1, 2, 3]; 
let arra = new Proxy(arraya, {
	get(target, prop) {
		if (prop < 0) {
			prop = +prop + target.length;
		}
		return target[prop];
	}
});
console.log(arra[-1]);


// При установке нового св-ва,объекту добавляется новый метод(геттер) и выполняется
let obj = {}
let makeObservable = (target) => {
	/* target["observe"] = function (key, val) {
		console.log(`${key} : ${val}`);
	} */
	Object.defineProperty(target, "observe", {
		set: function ([key, val]) {
			console.log(`${key} : ${val}`);
		}
		});
	return new Proxy(target, {
		set(target, prop, value, receiver) {
			target.observe = ([prop, value]);
            return target[prop] = value;
			// return Reflect.set(target, prop, value, receiver);
		}
	});
}
obj = makeObservable(obj)
obj.name = "Alex";

//вариант с возможностью задать аргументом другой обработчик и без геттера, просто устанавливаем св-во
/* let obj = {}
let makeObservable = (target) => {
	target["observe"] = function(handler) {
		return this.handler = handler;
	}
	return new Proxy(target, {
		set(target, prop, value) {
			if (typeof target.handler == "function") {
				target.handler(prop, value);
			}
			return target[prop] = value;
		}
	});
}
obj = makeObservable(obj)ж
obj.observe((key, value) => {
	console.log(`SET ${key}=${value}`);
  });
obj.name = "Alex";
obj.age = 99; */



//Пример карирования
function curring(f) {
	return function(a) {
		return function(b) {
			return f(a, b);
		}
	}
}
let func = (a, b) => {
	return a + b;
}
func = curring(func);
console.log(func(1)(2));


//
/* console.log(window.navigator.mediaDevices.getUserMedia({ audio: true, video: true })); */


// Простой тернарник
// условие ? выражение1 : выражение2
let f = () => {
    let any = 0;
    typeof any == "number" ? console.log(true) : console.log(false);
    }
f();

// Запись в переменную с тернарником
let day = "Вторник";
let value = day === 'Вторник' ? 50 : 1;


// Обект-наблюдатель зс изменнениями 
let observer = new MutationObserver((changes) => console.log(changes));
observer.observe(divv, {
	childList: true, 
	subtree: true, 
	characterDataOldValue: true ,
});




//Получить выделение:
let selection = document.getSelection();
let cloned  /* элемент, в который мы хотим скопировать выделенные узлы */;
// затем применяем методы Range к selection.getRangeAt(0)
// или, как здесь, ко всем диапазонам, чтобы поддерживать множественное выделение
for (let i = 0; i < selection.rangeCount; i++) {
  cloned.append(selection.getRangeAt(i).cloneContents());
}
//пример
/* document.onkeydown = () => {
	x = selected.getRangeAt(0).cloneContents();
	inp.value += x.firstChild.data;
} */


//Установить выделение:
let selectionn = document.getSelection();
// напрямую:
// selectionn.setBaseAndExtent(...from...to...);
// или можно создать диапазон range и:
selectionn.removeAllRanges();
selectionn.addRange(range);
//пример
/* document.onkeydown = () => {
	selected.setBaseAndExtent(divv, 0, divv, 1);
} */


    
//попап
function Popup() {
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
    }
    document.addEventListener("click", () => {
        myWinwod = open("popup.html", "window", param);
        myWinwod.focus();
        myWinwod.addEventListener("DOMContentLoaded", setPopup);
    });
}
Popup();



//модалка с dialog
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

//модалка с dialog. Закоментирован вариант с переменной(true/false).
//Он тут не нужен, т.к. есть св-во dialog.open и методы showModal()
let dialog = document.querySelector("body > section.dialog-section > dialog");
// let isOpened = false;
document.addEventListener("click", (e) => {
	if(e.target.closest(".dialog__inner-content")) return;
	if(!dialog.open) {
		dialog.showModal();
		// isOpened = true;
	} else {
		dialog.close();
		// isOpened = false;
	}
});



//Окрытие нового окна popup.html, заранее созданного в корне и динамически изменённого;
//При попытке повторного открытия окна, фокусируется на уже открытом окне.
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




//содание типизированного бинарного массива.
let buffer = new ArrayBuffer(16);
let view = new Uint8Array(buffer);
//Можно сразу. Тогда buffer создаётся сам
let view1 = new Uint8Array(16);
// console.log(view1.buffer);

//кодирование/раскодирование строк 
let binarView = new Uint8Array([72, 101, 108, 108, 111]);
let decodeObj = new TextDecoder();
let decoded = decodeObj.decode(binarView);

let str = "Hellow world!!!";
let encoderObj = new TextEncoder();
let encoded = encoderObj.encode(str);

//Blob
// let blob = new Blob(["<html></html>"], {type: "text/html"}); пример блоба
//делаем Blob для url ссылки
let link = document.querySelector(".any-link");
/* let strr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, delectus!";
let encodedd = new TextEncoder().encode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, delectus!");
let blobForLink = new Blob([encodedd], {type: "text/plain"}); */
// blobForLink = new Blob(["Lorem ipsum"], {type: "text/plain"});

let blobForLink = new Blob(["./../img/icon_card-heart.svg"], {type: "image/png"});
link.download = URL.createObjectURL(blobForLink);
// link.click();



//canvas
let canvasImg = document.querySelector(".canvas__img");
let canvas = document.getElementById("canvas");

canvas.addEventListener("click", () => {
    let context = canvas.getContext("2d");
    context.drawImage(canvasImg, 100, 100);
    canvas.toBlob((blob) => {
        let link = document.createElement("a");
        link.download = "img.png";
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
    }, "image/png");
});

// canvas пример через асинхронные функции + промис
async function f() {
	let blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png")
).then((arg) => {
		let context = canvas.getContext("2d");
		context.drawImage(canvasImg, 100, 100);
	 	let link = document.createElement("a");
        link.download = "img.png";
        link.href = URL.createObjectURL(arg);
        link.click();
        URL.revokeObjectURL(link.href);
	});
}
canvas.addEventListener("click", f);
// canvas пример через асинхронные функции
async function f() {
	let blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
	let createLink = await function(blob) {
		let context = canvas.getContext("2d");
		context.drawImage(canvasImg, 100, 100);
	 	let link = document.createElement("a");
        link.download = "img.png";
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
	}
	createLink(blob);
}
canvas.addEventListener("click", f);



//File, FileReader()
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
} 


//Примеры работы с JSON
let obj = {
	"key1": "value1",
	"key2": "value2",
	"key3": "value3",
}
let json = JSON.stringify(obj);
let string = JSON.parse(`{"key1":"value1","key2":"value2","key3":"value3"}`);
console.log(json);
console.log(string);




// объект URL
/* let url = new URL('https://javascript.info/profile/admin');
let newUrl = new URL('tester', url);
console.log(newUrl); // https://javascript.info/profile/tester */

let urll = new URL('https://javascript.info/url');
console.log(urll.protocol); // https:
console.log(urll.host);     // javascript.info
console.log(urll.pathname); // /url

let url = new URL('https://google.com/search');
url.searchParams.set("q", "test"); 
console.log(url); // Выведет весь объект URL у которого будет - href : "https://google.com/search?q=test"
console.log(url.searchParams.has("q")); // true

url.searchParams.set('tbs', 'qdr:y');
for (let [name, value] of urll.searchParams) {
	console.log(name + " : " + value); //  q : test  tbs : qdr:y
}

let link = encodeURI('http://site.com/привет'); // encodeURI – кодирует URL-адрес целиком.
console.log(link); // http://site.com/%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82



// cookie
let userrr = "name";
let valueeeee = "J O H N";
let cookie = encodeURIComponent(userrr) + "=" + encodeURIComponent(valueeeee);
document.cookie = cookie;

let datee = new Date(Date.now() + 100000);
datee = datee.toUTCString();

document.cookie = "name=John surname=Snow; path=/"; //Как правило, указывают путь path=/, чтобы куки было доступно на всех страницах
document.cookie = "name=John surname=Snow; domain=site.com"; // куки доступным для всех поддоменов *.site.com
document.cookie = "name=John surname=Snow; secure"; // куки будет доступно только через HTTPS
document.cookie = "name=John surname=Snow; samesite=lax"; // защита от XSRF атак, мягкий вариант. samesite=strict - жесткий
/* document.cookie = `name=John surname=Snow; expires=${datee}`; // куки удалятся через 100000мл/сек от "сейчас"(Date.now()) */
document.cookie = `name=John surname=Snow; max-age=2`; // куки удалятся через 0сек (т.е сразу. Или поставить другое значение)
console.log(document.cookie); 
setTimeout(() => console.log(document.cookie), 3000);

// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Устанавливает куки с именем name и значением value, с настройкой path=/
function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
}
// Пример использования:
setCookie('user', 'John', {secure: true, 'max-age': 3600});

// Чтобы удалить куки, мы можем установить отрицательную дату истечения срока действия:
function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}


let mySelect = document.getElementById("select");
function setValue() {
	if(!document.cookie.includes("cityValue")) return;
	let cookieCollection = document.cookie.split("; ");
	let filtered = cookieCollection.filter(item => item.includes("cityValue"));
	let targetArray = filtered.map(item => item.split("="));
	if(targetArray) mySelect.value = targetArray[0][1];
	// Ниже превращение массива сначала в объект и только потом утановка value.
	/* let townObject = targetArray.reduce((obj, item) => {
	obj[item[0]] = item[1];
	return obj;
	}, {})
	if(townObject) mySelect.value = townObject.cityValue; */
}
setValue();
mySelect.addEventListener("input", () => document.cookie = `cityValue=${mySelect.value}; max-age=10`);



// localStorage
let storage = localStorage;
let obj = {
	"key1" : "value1",
	"key2" : "value2",
	"key3" : "value3",
	"key4" : "value4",
}
let jsonn = JSON.stringify(obj);

function setStorage() {
	if(storage.getItem("key")) {
		return;
	} 
	storage.setItem("key", true);
	storage.setItem("myObject", jsonn);
}
setStorage();

for(let key in storage) {
	if (!storage.hasOwnProperty(key)) {
		continue;
	}
	console.log(key + " : " + storage.getItem("key"));
}

document.addEventListener("mousedown", (e) => {
	if(e.button == 1) storage.clear();
})
window.addEventListener("storage", (e) => {
	console.log(e.key); 
	console.log(e.url); 
	console.log(e.newValue);
	console.log(e.oldValue);
});



// localStorage
let storagee = localStorage;
let obj = {
	"key1" : "value1",
	"key2" : "value2",
	"key3" : "value3",
	"key4" : "value4",
}
let jsonnn = JSON.stringify(obj);  // можно добавлять объект пропустив через stringify

function setStorage() {
	if(storagee.getItem("key")) {
		return;
	} 
	storagee.setItem("key", true);
	storagee.setItem("myObject", jsonnn);
}
setStorage();

for(let key in storagee) {          // или можно перебирать через Object.entries / Object.key
	if (!storagee.hasOwnProperty(key)) continue;
	console.log(key + " : " + storagee.getItem("key"));
}

document.addEventListener("mousedown", (e) => {
	if(e.button == 1) storagee.clear();
})
window.addEventListener("storage", (e) => {
	console.log(e.key); 
	console.log(e.url); 
	console.log(e.newValue);
	console.log(e.oldValue);
});


// Задача на localStorage
let textarea = document.getElementById("textarea");
textarea.style.cssText = "min-width: 300px; min-height: 120px; resize: none;"
function setArea() {
	textarea.value = localStorage.getItem("inputValue");
}
window.addEventListener("load", setArea);

textarea.addEventListener("input", (e) => {
	localStorage.setItem("inputValue", textarea.value);
});



// indexedDB
let openRequest = indexedDB.open("store", 1);// запрос

openRequest.addEventListener("upgradeneeded", () => { //Обновление бд. Событие также работает, если базы ещё не существует
	console.log("upgradeneeded event!");
	let db = openRequest.result; // объект базы данных, с которым будем работать
	console.log(db);
	//Хранилище объектов можно создавать/изменять только при обновлении версии базы данных в обработчике upgradeneeded.
	if (!db.objectStoreNames.contains("books")) { // если хранилище "objectStore" не существует
    	let books = db.createObjectStore("books", {keyPath: "id"}); // создаём хранилище

	// index - структура данных для посика по индексированному полю.Индексы создаються в upgradeneeded,как и хранилище объектов
		let index = books.createIndex('price_idx', 'price'); // Индекс будет отслеживать поле price.
  	}
	/* db.deleteObjectStore('books') */  // удалить хранилище объектов

});
openRequest.addEventListener("success", (e) => { // После upgradeneeded сработает событие success	
	// при попытке обновления на объекте базы возникает событие versionchange
	let db = openRequest.result;
	db.addEventListener("versionchange", () => console.log("versionchange event!"));
	
	//Все операции с данными в IndexedDB могут быть сделаны только внутри транзакций.
	let transaction = db.transaction("books", "readwrite");
	let books = transaction.objectStore("books"); // получить хранилище объектов для работы с ним
	console.log(books);

	let book = {
		id: 'js',
		price: 10,
		created: new Date()
	};

	let request = books.add(book, /* "myKey" */); // Выполнить запрос на добавление элемента в хранилище объектов 

	// add(value, [key]) То же, что put, но если уже существует значение с таким ключом, 
	// то запрос не выполнится, будет сгенерирована ошибка с названием "ConstraintError".

	// put(value, [key]) Добавляет значение value в хранилище. Ключ key необходимо указать, 
	// если при создании хранилища объектов не было указано свойство keyPath или autoIncrement. 
	// Если уже есть значение с таким же ключом, то оно будет заменено.

	request.onsuccess = function() { // Обработать результат запроса
  		console.log("Книга добавлена в хранилище", request.result);
	};
	request.onerror = function(e) {
  		console.log("Ошибка", request.error);
		if (request.error.name == "ConstraintError") {
			// ConstraintError возникает при попытке добавить объект с ключом, который уже существует
			console.log("Книга с таким id уже существует"); // обрабатываем ошибку
			e.preventDefault(); // предотвращаем отмену транзакции(иначе при ошибке она отменяется полностью)
			// ...можно попробовать использовать другой ключ...
		} else {
			// transaction.abort(); ? Возможно это не нужно и транзакция прерывается сама
			// неизвестная ошибка
			// транзакция будет отменена
  		}
		transaction.onabort = function() {
			console.log("Ошибка", transaction.error);
		};
	};

	/* // удалить книгу с id='js'
	books.delete('js'); */
	
	//Поиск по ключам
	// получить одну книгу
	books.get('js')
	let getRequest = books.get('js');
	getRequest.onsuccess = () => {
		if(getRequest.result !== undefined) console.log(getRequest.result);
		else console.log("Нет таких книг");
	}

	// получить книги с 'css' <= id <= 'html'
	books.getAll(IDBKeyRange.bound('css', 'html'))
	// получить книги с id < 'html'
	books.getAll(IDBKeyRange.upperBound('html', true))
	// получить все книги
	books.getAll()
	// получить все ключи, гдe id > 'js'
	books.getAllKeys(IDBKeyRange.lowerBound('js', true))

	
	// Поиск по индексированному полю. Для этошо в событии "upgradeneeded" сначала создали структуру данных "Index"
	let priceIndex = books.index("price_idx");
	let indexRequest = priceIndex.getAll(10);

	/* // Если нам нужно удалить книги, основываясь на цене или на любом другом поле
		// найдём ключ, где цена = 5
		let request = priceIndex.getKey(5);
		request.onsuccess = function() {
			let id = request.result;
			let deleteRequest = books.delete(id);
		}; */

	// Чтобы удалить всё:
	/* books.clear(); // очищаем хранилище. */

	indexRequest.onsuccess = () => {
		if(indexRequest.result.length !== 0) console.log(indexRequest.result);
		else console.log("Нет таких книг");
	} 

	transaction.oncomplete = function() {
  		console.log("Транзакция выполнена");
	}
	/* transaction.abort(); */ // вручную отменить транзакцию. отменит все изменения, сделанные запросами в транзакции,
	// и сгенерирует событие transaction.onabort
});
openRequest.addEventListener("error", () => console.error(openRequest.error));


/* let openRequest2 = indexedDB.open("store", 2);  // попытка открыть новоую версию хранилища вызовет "blocked", т.к открыта версия 1
// openRequest2.addEventListener("onupgradeneeded", () => console.log("let upgrade DB!"));
openRequest2.addEventListener("blocked", (e) => console.log("blocked!")); */

/* let deleteRequest = indexedDB.deleteDatabase("store"); // удаление бд
deleteRequest.addEventListener("success", () => console.log("deleted!"));
deleteRequest.addEventListener("error", () => console.error(deleteRequest.error)); */


// ещё работа с indexedDB
let book = {
  id: 'js',
  price: 10,
  created: new Date(),
};

let obj = {
	id : "obj#1",
	key1 : "value1",
	key2 : "value2",
	key3 : "value3",
	date : new Date(),
	number : 12,
}
let obj2 = {
	id : "obj#2",
	key1 : "value1",
	key2 : "value2",
	key3 : "value3",
	date : new Date(),
	number : 12,
}
let obj3 = {
	id : "obj#3",
	key1 : "value1",
	key2 : "value2",
	key3 : "value3",
	date : new Date(),
	number : 12,
}
let openRequestt = indexedDB.open("store", 1);
openRequestt.onupgradeneeded = (e) => {
	console.log(e.oldVersion);
	let db;
	if(e.oldVersion == 0)  {
		db = openRequestt.result;
		console.log(db.version);
		let storage = db.createObjectStore("myStorage", {keyPath: "id"});
		let index = storage.createIndex("number-srch", "number");
	} 
	/* if(e.oldVersion == 1) {
		openRequest = indexedDB.open("store", 2);
		db = openRequest.result;
		console.log(db.version);
	}  */ 
}
openRequestt.onsuccess = () => {
	let db = openRequestt.result;
	console.log(db);
	let transaction = db.transaction("myStorage", "readwrite");
	let storage = transaction.objectStore("myStorage");
	
	transaction.onabort = () => console.log("Transaction aborted! " + transaction.error)

	let addRequest = {
		1 : storage.add(obj),
		2 : storage.add(obj2),
		3 : storage.add(obj3),
		4 : storage.add(book),
	}
	for(let num in addRequest) {
		addRequest[num].onsuccess = () => console.log("Объект добавлен");
		addRequest[num].onerror = (e) => {
			if(addRequest[num].error.name == "ConstraintError") {
				console.log("Объект уже был добавлен");
				// благодаря preventDefault при попытке повторного добавления уже существующих объектов в хранилище
				// (в данном случае при каждом последующем обновлении страницы)
				// транзакция не будет прервана и событие onabort не произойдёт. И можно будет не создавать новую
				//транзакцию ниже для "get"
				e.preventDefault();
			}
		} 
	}
	// let getTransaction = db.transaction("myStorage", "readwrite");
	// let getStorage = getTransaction.objectStore("myStorage")
	let getRequest = /* getStorage */ storage.get("obj#2");
	getRequest.onsuccess = () => {
		if(getRequest.result !== undefined) {
			console.log(getRequest.result);
			/* getStorage */ storage.delete("obj#2");
		} 
		else console.log("нет таких объектов");
	}

	let index = storage.index("number-srch");
	let indexRequest = index.getAll(12)
	indexRequest.onsuccess = () => console.log(indexRequest.result);
	indexRequest.onerror = () => console.log(indexRequest.error);


	let cursorRequest = storage.openCursor(); // cursor идёт по хранилищу объектов и возвращает пары ключ/значение по очереди
	cursorRequest.onsuccess = () => {
		if(cursorRequest.result) {
			console.log("key: " + cursorRequest.result.key + " value: " + cursorRequest.result.value)
			cursorRequest.result.continue(); /* продвинуть курсор к следующему значению */
			/* cursorRequest.result.advance(3); */ /* продвинуть курсор на count позиций, пропустив значения */
		} 
		else console.log("...объектов обольше нет");
	}
}
openRequestt.onerror = function() {
	console.error("Error", openRequestt.error);
};


// indexedDB с плагином обёрткой для промисов  https://github.com/jakearchibald/idb
let oobj1 = {
	"id" : 1,
	"key1": "val1",
	"key2": "val2",
	"key3": "val3",
	"key4": "val4",
}
let oobj2 = {
	"id" : 2,
	"key1": "val1",
	"key2": "val2",
	"key3": "val3",
	"key4": "val4",
}
let oobj3 = {
	"id" : 3,
	"key1": "val1",
	"key2": "val2",
	"key3": "val3",
	"key4": "val4",
}
let oobj4 = {
	"id" : 4,
	"key1": "val1",
	"key2": "val2",
	"key3": "val3",
	"key4": "val4",
}
async function createDb() {
	let db = await idb.openDB('store', 1,  {
		upgrade(db) {
			db.createObjectStore('myStore', {keyPath: 'id'});
		}
	});
	async function addObj() {
		let transaction = db.transaction('myStore', "readwrite");
		try {
		await Promise.all([
			transaction.objectStore("myStore").add(oobj1),
			transaction.objectStore("myStore").add(oobj2),
			transaction.objectStore("myStore").add(oobj3),
			transaction.objectStore("myStore").add(oobj4),
		]);
			let getRequests = await transaction.objectStore("myStore").getAll();
			console.log("В хранилище добавлены объекты: " + getRequests);
		}
		catch(err) {
			if(err.name == "ConstraintError") {
				console.log("Объект уже был добавлен");
			} else {
				console.log(err);
				throw err;
			}
		}
	}
	async function clearStorage() {
		let transaction = db.transaction("myStore", "readwrite");
		let objects = await transaction.objectStore("myStore").getAll();
		if(objects.length > 0) {
			try {
				await transaction.objectStore("myStore").clear();
				console.log("Хранилище очищено");
				await getObj();	
			}
			catch(err) {
				console.log(err);
				throw err;
			} 
			
		} else console.log("Хранилище пустое");
	}
	async function getObj() {
		let transaction = db.transaction("myStore");
		try {
			let objects = await transaction.objectStore("myStore").getAll();
			console.log(objects);
			if(objects.length == 0) return;
			else {
				for(let object of objects) {
					console.log("Получен объект id: " + object.id);
				}
			}
		}
		catch(err) {
			console.log(err);
			throw err;
		}
	}
	document.addEventListener("mousedown", (e) => {
		if(e.button == 2 && e.ctrlKey) {
			document.addEventListener("contextmenu", (e) => e.preventDefault());
			addObj();
		}
	});
	document.addEventListener("mousedown", (e) => {
		if(e.button == 2 && e.altKey) {
			document.addEventListener("contextmenu", (e) => e.preventDefault());
			clearStorage();
		} 
	});
	document.addEventListener("mousedown", (e) => {
		if(e.button == 2 && e.shiftKey) {
			document.addEventListener("contextmenu", (e) => e.preventDefault());
			getObj();
		}
	});
}
createDb();
window.addEventListener("unhandledrejection", (e) => {
	console.log(e.target);
	console.log(e.reason.message);
});



// Демо из учебника indexedDB с плагином обёрткой для промисов
//html
// <!doctype html>
// <script src="https://cdn.jsdelivr.net/npm/idb@3.0.2/build/idb.min.js"></script>

// <button onclick="addBook()">Добавить книгу</button>
// <button onclick="clearBooks()">Очистить хранилище</button>

// <p>Список книг:</p>

// <ul id="listElem"></ul>

// js
let db;
init();
async function init() {
  db = await idb.openDb('booksDb', 1, db => {
    db.createObjectStore('books', {keyPath: 'name'});
  });

  list();
}

async function list() {
  let tx = db.transaction('books');
  let bookStore = tx.objectStore('books');

  let books = await bookStore.getAll();

  if (books.length) {
    listElem.innerHTML = books.map(book => `<li>
        название: ${book.name}, цена: ${book.price}
      </li>`).join('');
  } else {
    listElem.innerHTML = '<li>Книг пока нет. Пожалуйста, добавьте книги.</li>'
  }
}

async function clearBooks() {
  let tx = db.transaction('books', 'readwrite');
  await tx.objectStore('books').clear();
  await list();
}

async function addBook() {
  let name = prompt("Название книги");
  let price = +prompt("Цена книги");

  let tx = db.transaction('books', 'readwrite');

  try {
    await tx.objectStore('books').add({name, price});
    await list();
  } catch(err) {
    if (err.name == 'ConstraintError') {
      alert("Такая книга уже существует");
      await addBook();
    } else {
      throw err;
    }
  }
}
window.addEventListener('unhandledrejection', event => {
  alert("Ошибка: " + event.reason.message);
});



// Анимации
// Элемент двигается вперёд/назад при завершении соответствующей анимации
function moveButton() {
	let elem = document.querySelector(".any-section__button");
	let direction = "right"; 
	elem.addEventListener("click", () => {
		function toMove() {
			if(direction == "right") elem.style.left = 100 + "px";  
			if(direction == "left") elem.style.left = -100 + "px";
		}
		toMove();

		elem.addEventListener("transitionend", () => {
			if(direction == "right") direction = "left";
			else direction = "right";
			toMove();
		});
	});
}
moveButton();


// Задача с самолётом, который увеличивается при клике.(мой вариант + toggle)
let plane = document.getElementById("flyjet");
let props = [];

function zoomIn(el) {
	el.classList.toggle("zoomed");
	function onTransitionEnd(e) {
		props.push(e.propertyName);
		if(props.length == 2) {
			alert("Анимация завершена!");
			props.splice(0);
		} 
	}
	if(el.classList.contains("zoomed")) el.ontransitionend = (e) => onTransitionEnd(e);
}
function onZoom() {
	zoomIn(plane); 
}
plane.addEventListener("click", onZoom);
// Вариант из решения
let ended = false;
   flyjet.onclick = function() {
      flyjet.addEventListener('transitionend', function() {
        if (!ended) {
          ended = true;
          alert('Анимация закончилась!');
        }
      });
      flyjet.classList.add('zoomed');
    }



	//задача с анимированым кругом и коллбеко
function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);
    setTimeout(() => {
      div.style.width = radius + 'px';
      div.style.height = radius + 'px';
    }, 0);

	div.addEventListener("transitionend", function handler() {
		div.removeEventListener('transitionend', handler); // удаляем одно из событий, т.к их повесится 2(для каждого сво-ва)
		callback(div, radius);
	});
  }

  document.addEventListener("keydown", (e) => {
	if(e.key == "q") showCircle(150, 150, 200, function(div, lh) {
		div.classList.add('message-ball');
		div.style.lineHeight = lh + "px";
		div.append("Hello, world!");
	});
}); 
// решение из учебника
/* function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler); // удаляем одно из событий, т.к их повесится 2(для каждого сво-ва)
        callback(div);
      });
    }, 0);
  }
  document.addEventListener("keydown", (e) => {
	if(e.key == "q") showCircle(150, 150, 100, div => {
      div.classList.add('message-ball');
      div.append("Привет, мир!");
    });
  }); */