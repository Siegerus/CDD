//Рекурсивная функция для подсчёта вложенных свойств оюекта
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