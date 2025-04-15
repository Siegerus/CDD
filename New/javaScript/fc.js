//Рекурсивная функция для подсчёта вложенных свойств объекта
let company = {
    sales: [{
      name: 'John',
      salary: 1000,
      age: 25
    }, {
      name: 'Alice',
      salary: 600
,      age: 25
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000,
        age: 25
      }, {
        name: 'Alex',
        salary: 1800,
        age: 25
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300,
        age: 25
      }]
    }
  };

let getSum = (item) => {
    if (Array.isArray(item)) {
      let result = item.reduce((prev, current) => prev + current.age, 0);
      return result;
    } else {
        let sum = 0
        for(let vals of Object.values(item)) {    
            sum += getSum(vals);
        }
        return sum;
    }
};
console.log(getSum(company));


// Простейшая рекурсия
function setRecourse(n) {
	console.log(n)
	if (n == 1) return n;
	else setRecourse(n - 1);
	
}
setRecourse(10);


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


// Пример рекурсии
function setRecourse(n) {
	clickBox.forEach(item => item.style.backgroundColor = "blue");
	if (n <= 1) return;
	setRecourse(n - 1);
}
setRecourse(clickBox.length);


// Факториал рекурсия
let getFactorial = (n) => {
    if(n == 1) {
        return 1;
    } else {
        n = n * getFactorial(n - 1)
        return n;
    } 
};
console.log(getFactorial(5));


//Рекурсия выводит "value" объекта по очереди
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  let printList = (list) => { 
      console.log(list.value);
      if(list.next) {
          printList(list.next); 
      }
  };
  printList(list);
  // способ через цикл
  function printListt(list) {
    let tmp = list;
    while (tmp) {
    console.log(tmp.value);
      tmp = tmp.next;
    }
  }
  printListt(list);

  //в обратном порядке рекурсиия
  let reversePrintList = (list) => { 
      if(list.next) {
          reversePrintList(list.next);
          console.log(list.value);
      }
      else {
          console.log(list.value);
      }
  };
  reversePrintList(list);


  //Замыкание. Что бы заработали вторые скобки, первые должны вернуть функцию
function getSum(a) {
	return function ff(b) {
		return a + b; // a берётся из внешнего лексического окружения 
	}
}
console.log(getSum(2)(3));


// Замыкания
function inBetween(a, b) {
  return function(item) {
    return item >= a && item <= b;
  }
}

function inArray(array) {
  return function(item) {
    return  array.includes(item);
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2


// Сортировка массива через замыкание
let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" }
];

function byField(field) {
  return function(a, b) {
    return a[field] > b[field] ? 1 : -1;
  }
}
// users.sort(byField('name'));
users.sort(byField('age'));
console.log(users)
// Для сравнения реализация без замыкания
/* function byField(a, b) {
  return a.age > b.age ? 1 : -1;
}
users.sort(byField);
console.log(users) */


// Пример замыкания
function fun() {
	let sum = 0;
	function toGetAny(a, b) {
		return sum = sum + (a + b);
	}
	return toGetAny;
}
let fo = fun();
console.log(fo(4, 7));
console.log(fo(4, 7));


//счётчик, который делался через замыкание - теперь вариант через установку пользовательского св-ва ф-ии
let foo = (a) => {
  let testFn = () => {
    return testFn.anyProperty = testFn.anyProperty + a;
  }
  testFn.anyProperty = 0;
  return testFn;
};
let counter = foo(2);

console.log(counter());
console.log(counter());
console.log(counter());



// Работа с пользовательскими св-вами функции и замыканием
function makeCounter() {
  let count = 0;
  function counterr() {
    return count++;
  }
  counterr.set = function(a) { // аналогично записи "counter.set = a => count = a"
    return count = a;
  } 
  counterr.decrease = function() { // аналогично записи "counter.decrease = () => count--"
    return count--;
  }

  return counterr;
}
let counte = makeCounter();
console.log( counte() ); // 0
console.log( counte() ); // 1
counte.set(10);          // установить новое значение счётчика
console.log( counte() ); // 10
counte.decrease();       // уменьшить значение счётчика на 1
console.log( counte() ); // 10 (вместо 11)



// seiInterval через setTimeout
let a = 0;
let timer = setTimeout(function f() {
  console.log(a++);
  if (a > 10) return;
  let inner = setTimeout(f, 1000);
  return a;
}, 1000);



// Интервал через "setTimeout" - каждую секунду выводиться чисто по порядку в заданном диапазоне
let printNumbers = (from, to) => {
	let current = from;
	let timer = setTimeout(function fn() {
		if (current <= to) console.log(current++);
		let inner = setTimeout(fn, 500);
		if (current > to) {
			console.log("Thats all!");
			clearTimeout(inner);
		} 
	});
}
printNumbers(3, 7)


// Декоратор, который выводит историю вызовов
function work(a, b) {
	console.log(a + b); 
}
 function spy(func) {
	 function f(...args) {
		let launch = func(...args);
		return f.calls.push(args);
	}
	f.calls = [];  

	return f;
}
work = spy(work);
work(1, 2);
work(4, 5);

for (let args of work.calls) {
	console.log( 'call:' + args.join() );
  }



// Декоратор делает для функции задержку
function f(x) {
	console.log(x);
}
function delay(func, time) {
	function wrapper(...args) {
		setTimeout(() => func.apply(this, args), time);
	}
	return wrapper;
}
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
f1000("test");
f1500("test");



// Декоратор отложенного вызова функции
function debounce(f, ms) {
	let timer;
	function wrapper(arg) {
		clearTimeout(timer);
		timer = setTimeout(() => f.call(this, arg) , ms);
	}
	return wrapper;
}
 
let f = debounce(alert, 1000);
f("a");
setTimeout( () => f("b"), 200);
setTimeout( () => f("c"), 500);



//Замыкание и декоратор для него
let fun = () => {
	let sum = 0;
	return function (a, b) {
		return console.log(sum = sum + (a + b));
	}
}
let fooo = fun();
// fooo(4, 7);
// fooo(4, 7);
// fooo(4, 7);

let decorate = (f, ms) => {
	let wrapper = (a, b) => {
		return setTimeout(() => f(a, b), ms);
	}
	return wrapper;
}
let final = decorate(fooo, 3000);
final(4, 8);
final(4, 8);
final(4, 8);


// Практика с замыканием
let out = [];
let toPlus = (x) => {
	return x + 5;
}
let toTimes = (x) => {
	return x * 5;
}
let closer = (f) => {
	let any = 0;
	function wrapper(x) {
		any += f(x);
		out.push(any);
		return f(x);
	}
	return wrapper;	
};
let fPlus = closer(toPlus);
let fTimes = closer(toTimes);

clickBox.addEventListener("click", () => {
	fPlus(2);
	console.log(out);
});
btn.addEventListener("click", (e) => {
	e.preventDefault();
	fTimes(2);
	console.log(out);
});



// Декоратор как метод объекта - прототипа
function f(a, b) {
	console.log(a + b);
}
Function.prototype.defer = function(ms) {
	let ctx = this;
	function wrapper(...args) {
		let launch =  setTimeout(() => ctx.call(this, ...args), ms) 
		return launch;
	}
	return wrapper
}
f.defer(1000)(7, 2);



// Практика с декоратором
let showAny = (any) => {
	console.log(any);
};

let toDecorate = (f) => {
	cache = new Map();
	f.calls = [];
	console.log(cache);

	function wrapper(arg) {
		arg = arg + " is decorated";
		let launch = setTimeout(() => f.call(this, arg), 1000);
		cache.set(arg);
		f.calls.push(arg);
	}
	return wrapper;
}

showAny("smth original");

let showAnyDecorate = toDecorate(showAny);

showAnyDecorate("smth");
showAnyDecorate("smth else");
showAnyDecorate(3);
showAnyDecorate(true);
console.log(showAny.calls);


// Геттер и сеттер
let obj = {
	name : "Alex",
	secondName : "Nail",
	get getName() {
		console.log(this.name +" "+ this.secondName)},
	set getName(value) {
		this.secondName = this.secondName + value
	}
}
obj.getName = " changed";
obj.getName;



// Скрипт загрузки скрипта и колбэк с первым аргументом-ошибкой.
let loadScript = (url, callback) => {
	let script = document.createElement("script");
	script.src = url;
	script.onload = () => {
		try {
			callback(null, script);
		}
		catch(err) {
			callback(new Error("Ошибка! " + err.name));
		}
	}
	document.body.append(script);
}
let toCallback = (error, arg) => {
	if(error) console.log(error);
	else {
		console.log(arg);
		console.log(_);
	}
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js", toCallback);


//Тот же скрипт через промисы
let loadScriptt = (url) => {
	return new Promise((resolve, reject) => {
		let script = document.createElement("script");
		script.src = url;
		script.onload = () => {
			resolve(script);
			reject(new Error("Ошибка!"));
		}
		document.body.append(script);
	})
  };
  loadScriptt("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js")
  	.then((val) => console.log(val))
	.then(() => console.log(_))
	.catch((err) => console.log(err));



// Промисс последовательными асинхроными ф-ями
  let toPromise = (x) => {
    return new Promise((resolve, reject) => {
      resolve(console.log(3 + x));
    })
  }
  toPromise(7)
    .then((res) => toPromise(74))
    .then((res) => toPromise(8))
    .then(() => console.log(5 + 5))
    .then(() => alert("!"));