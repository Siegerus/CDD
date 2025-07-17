//ВСЕ ЗАДАЧИ ИЗ УЧЕБНИКА
//
/* let toCamelize = (str) => {
	let arr = str.split("-");
	let maped = arr.map((item) => item.slice(0, 1).toUpperCase() + item.slice(1));
	let res = maped.join("");
	return res.slice(0, 1).toLowerCase() + res.slice(1);
}; */

/* let toCamelize = (str) => {
	let arr = str.split("-");
	let maped = arr.map((item, i) => {
		if(i !== 0) {
			return item.slice(0, 1).toUpperCase() + item.slice(1)
		} else {
			return item;
		}
	});
	return maped.join("");
}; */

/* console.log(toCamelize("-webkit-transition"));
console.log(toCamelize("list-style-image"));
console.log(toCamelize("background-color")); */


//
/* let arr = [5, 3, 8, 1];
let filterRange = (array, a, b) => {
	 let filter = array.filter((item) => item >= a && item <= b);
	 return filter
};
console.log( arr ); 
let filtered = filterRange(arr, 1, 4);
console.log( filtered );  */


//
/* let arr = [5, 3, 8, 1]; 
	let filterRangeInPlace = (array, a, b) => {
		for(let i = 0; i < array.length; i++) {
			if (array[i] < a || array[i] > b) {
				array.splice(i, 1);
			}
		}
	// array.forEach((item, i, arr) => {
	// 	if(item < a || item > b) {
	// 		arr.splice(i, 1);
	// 	}
	// });
	};
filterRangeInPlace(arr, 1, 4); 
console.log( arr ); */


//
/* let arr = [5, 2, 1, -10, 8];
	arr.sort((a,b) => b - a)
console.log( arr ); */ 


//
/* 
let arr = ["HTML", "JavaScript", "CSS"];
let copySorted = (array) => {
	let newArr = array.concat();
	return newArr.sort();
}
let sorted = copySorted(arr);
console.log( sorted );
console.log( arr );  */


//
/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];
let names = users.map((item) => item.name);
console.log( names );  */


//
/* let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let users = [ vasya, petya, masha ];

let usersMapped = users.map((item) => {
	return {
		"fullName": `${item.name} ${item.surname}`,
		"id" : item.id,
	}
});
console.log(usersMapped); */


//
/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let arr = [ vasya, petya, masha ];

let sortByAge = (array) => {
	return array.sort((a, b) => a.age - b.age )
};
console.log(arr);
console.log(sortByAge(arr)); */


//
/* let shuffle = (array) => {
	return array.sort((a,b) => Math.random(a) - Math.random(b));
}; */


//
/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [ vasya, petya, masha ];

let getAverageAge = (array) => {
	let summed = array.reduce((sum, next) => sum + next.age, 0);
	return summed / array.length;
};
console.log( getAverageAge(arr) ); */ 


//
/* let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"];
function unique(arr) {
	let result = [];
	for(let items of arr) {
		if (!result.includes(items)) {
			result.push(items);
		}
	}
	return result;
}
console.log(unique(strings));  */


//
/* let users = [
	{id: 'john', name: "John Smith", age: 20},
	{id: 'ann', name: "Ann Smith", age: 24},
	{id: 'pete', name: "Pete Peterson", age: 31},
  ];
  let groupById = (arr) => {
	let result = arr.reduce((obj, el) => {
		obj[el.id] = el;
		return obj
	}, {})
	return result;
  };
let usersById = groupById(users);
console.log(usersById); */

/* let str = "John Smith";
let arr = str.split(" "); // ['John', 'Smith']
let result = arr.reduce((res, current, i, array) => {
		res["Key# " + [i]] = current;
		return res
}, {})
console.log(result); //  {Key# 0: 'John', Key# 1: 'Smith'} */


// один из методов перебора массива
for (let inputs of newArr) {          
    console.log(inputs);
    inputs.style.display = "none";
}

// функция запрашивает ввод чисел, добавляет их в массив и выводит сумму
let sumInput = () => {
    let arr = [];
    let value;
    let sum = 0;

    while(true) {
        value = prompt("Введите число для массива", 0);
        arr.push(+value);

        if (value === null || value === '' || !isFinite(value)) {
            break;
        };
    }
    for(let items of arr) {
        sum += items;
        console.log(items);
     }

    console.log(arr);
    return sum;
};
console.log(sumInput());


// добавлять, удалять и заменять элементы.
let arr = [1, 2, 5];
// начиная с индекса -1 (перед последним элементом)
// удалить 1 элемент,
// затем вставить числа 3 и 4
removed = arr.splice(-1, 1, 3, 4); 
console.log( removed ); // 5 так же может возвращать удалённые елементы
console.log( arr ); // 1,2,3,4


// возвращает новый массив, в который копирует указынные элементы
let arrr = ["t", "e", "s", "t"];
console.log( arrr.slice(1, 3) ); // e,s (копирует с 1 до 3)(не включая 3)
console.log( arrr.slice(-2) ); // s,t (копирует с -2 до конца)


// создать новый массив, в который скопировать данные из других массивов и дополнительные значения.
let arrrr = [1, 2];
// создать массив из: arr и [3,4]
console.log( arrrr.concat([3, 4]) ); // 1,2,3,4
// создать массив из: arr и [3,4] и [5,6]
console.log( arrrr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
// создать массив из: arr и [3,4], потом добавить значения 5 и 6
console.log( arrrr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6


//
let arrrrr = [1, 0, false];
console.log( arrrrr.indexOf(0) ); // 1
console.log( arrrrr.indexOf(false) ); // 2
console.log( arrrrr.indexOf(null) ); // -1
console.log( arrrrr.includes(1) ); // true


//  Поиск в массиве первого элемента с подходшим запросом
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  let user = users.find(item => item.id == 1);

  console.log(user.name); // Вася


// Вернёт массив из всех элементов массива, которые искали
let usersss = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  // возвращает массив, состоящий из двух первых пользователей
  let someUsers = usersss.filter(item => item.id < 3);
  console.log(someUsers.length); // 2


 // Поиск индекса элеиента в массиве
 let userss = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"},
    {id: 4, name: "Вася"}
  ];
  // Найти индекс первого Васи
  console.log(userss.findIndex(user => user.name == 'Вася')); // 0
  // Найти индекс последнего Васи
  console.log(userss.findLastIndex(user => user.name == 'Вася')); // 3

  // map вызывает функцию для каждого элемента и возвращает массив результатов выполнения этой функции.
  let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
  console.log(lengths); // 6,8,6


// разделяет строку на массив с элементами. в качестве разделителя элементов будет присутствующая
// в троке часть. она и указывается аргументом для split

let str = "Smth SmthElse SmthMore Other"; 
let arrrrrr = str.split(" "); // тут разделим строку в массив по пробелу
// let arr = str.split(""); тут отдельным элементом станет каждая буква и отступ в строке
console.log(arrrrrr);


// join делает наоборот
let aarr = ['Smth','SmthElse','SmthMore','Other']
console.log(aarr.join(" ")); // тут просто указываем, как будут разделяться элементы в строке


//
let aaarr = [1, 2, 3, 4, 5];
let result = aaarr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15


// Задачи

// Функция убирает дефис и превращает в camelCase
let camelize = (str) => {
    str = str.split("-");
    arr = str.map((item, i) => {
        if (i < 1) return;
        item = item.slice(0, 1).toUpperCase() + item.slice(1);
        return item;
    });
    return  str = arr.join("");
};
    console.log(camelize("list-style-image"));


// Функция убирает все числа в дипазоне между указанными числами
let array = [5, 3, 8, 1];
let filterRangeInPlace = (arr, a, b) => {
    arr.forEach((item, i) => {
        if (item < a || item > b) {
            arr.splice(i, 1);
            i--;
        } 
    });
}; 
filterRangeInPlace(array, 2, 4);
console.log(array);


// Сортировка элементов массива в порядке убывания
let arrayy = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a)
console.log(arrayy);


// КалькуляторБ который добавляет новые метды
function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
    
    this.calculate = function(val) {
        let split = val.split(" "),
            a = +split[0],
            op = split[1],
            b = +split[2]; 

        let result = this.methods[op](a, b);
        return result;
    }
}

let calc = new Calculator();
let powerCalc = new Calculator();

console.log(calc.calculate("3 + 4"));
powerCalc.addMethod("*", (a, b) => a * b);
console.log(powerCalc.calculate("3 * 4"));

// Создание массива со св-вами объектов из массива с объектами
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let uusers = [ vasya, petya, masha ];

/* let names = [];          // вариант с "forEach"
users.forEach((item) => {
    names.push(item.name);
}); */

let names = uusers.map(item => item.name);
console.log(names);


// Объект в массив из "key, value". Меняем массив и обратно в объект

let userssss = {
    "name" : "john",
    "surname" : "Smith",
    "age" : 35,
    "married" : false,
}
let resultt = Object.entries(userssss).map(([key, value]) => [key + " changedKey", value + " changedValue"]);
userssss = Object.fromEntries(resultt);

console.log(userssss);


// В элементе массива создается новый обект
let vasyaa = { name: "Вася", surname: "Пупкин", id: 1 };
let petyaa = { name: "Петя", surname: "Иванов", id: 2 };
let mashaa = { name: "Маша", surname: "Петрова", id: 3 };
let usersa = [ vasya, petya, masha ];

let usersMapped = users.map((item) => { 
    item = {
    fullName: item.name + " " + item.surname,
    id: item.id
    }
    return item;
});
console.log(usersMapped);


// сортировка элементов массива по свойству объектов(age) в элементах
let avasya = { name: "Вася", age: 25 };
let apetya = { name: "Петя", age: 30 };
let amasha = { name: "Маша", age: 28 };

let ausers = [avasya, apetya, amasha];

let sortByAge = (arr) => {
    arr.sort((a, b) => a.age - b.age);
    return arr
};
console.log(sortByAge(ausers));

// Выведения элементов в случайном порядке
let arra = [1, 2, 3];
function toShaffle(arr) {
    // arr.sort((a,b) => Math.random(a)*10 - Math.random(b)*10); // мой вариант
    // arr.sort(() => Math.random() - 0.5); // чуть более правильный вариант
    for(let i = arr.length - 1; i > 0; i-- ) {// нужный правильный вариант
        j = Math.floor(Math.random() * (i + 1));// тут делаем новый случайный индекс от 0 до i
        t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    return arr;
}
console.log(toShaffle(arra));

// код для проверки случайностей
let showRandom = () => {
    let obj = {
        '123': 0,
        '132': 0,
        '213': 0,
        '231': 0,
        '321': 0,
        '312': 0
    }
    for(let i = 0; i < 10000; i++) {
        let array = [1, 2, 3];
        toShaffle(array);
        obj[array.join("")]++;
    }
    for(let key in obj) {
        console.log(key + ":" + obj[key]);
    }
};
showRandom();


// Функция вернёт средний возраст из объектов в элементах массива
let vvasya = { name: "Вася", age: 25 };
let vpetya = { name: "Петя", age: 30 };
let vmasha = { name: "Маша", age: 29 };
let kostya = { name: "Костя", age: 35 };
let varray = [ vvasya, vpetya, vmasha, kostya];

let getAverageAge = (arr) => {
    let age = arr.reduce((sum, curent) => sum + curent.age, 0)
    return Math.floor(age / arr.length);
};
console.log(getAverageAge(varray))


// Функция возвращает массив уникальных элементов из строки
let string = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"];
  
let toUnique = (arr) => {
    let unique = [];
    for(let item of arr) {
        if(!unique.includes(item)) {
            unique.push(item);
        }
    }
    return unique;
};
console.log(toUnique(string));


// Функция делает из массива с объектамЮ объект с объектами.
let useers = [
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
  console.log(toGrouped(useers));


// На выходе функции - массив с массивами из пар "[ключ, значение]" из св-в объекта
let members = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

let toArray = (arr) => {
    let newArr = arr.map((item) => [item.name, item.age])
    return newArr;
};
console.log(toArray(members));

// Функция возвращает сумму значений объекта. Если объект пуст, возвращает 0
let salaries = {
"John": 100,
"Pete": 300,
"Mary": 250
};
let sum = 0;

let sumSlaries = (obj) => {
    for(let items of Object.values(salaries)) {
    sum += items;
    }
    if(typeof(salaries)!== "object") {
        return 0;
    } else {
        return sum;
    }
};
console.log(sumSlaries(salaries));
// способ с "reduce"
/* function sumSlaries(obj) {
    return Object.values(obj).reduce((a, b) => a + b, 0) 
}
console.log(sumSlaries(salaries)); */


// Возвращает пользователя с самым больши числом
let salarieуs = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Mary2": 750,
    "John2": 10,
};
let biggest = [];

let getTopSalary = (obj) => {
        let allValues = Object.entries(obj);
        // allValues.sort((a,b) => a[1] - b[1]); // <- первый вариант записи. Второй на строке ниже
        allValues.sort(([currKey, currValue], [nextKey, nextValue]) => currValue - nextValue);// 2
        biggest = allValues.splice(-1);
    if (allValues.length == 0) {
        return  null;
    } else {
        return biggest[0][0];
    }
};
console.log(getTopSalary(salarieуs));
// второй вариант
/* let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Pete2": 600,
};
let max = 0;
let maxName = null;
let getTopSalary = (obj) => {
  for(const [key, value] of Object.entries(obj)) {
    if (max < value) {
      max = value;
      maxName = key;
    }
  }
  return maxName;
};
console.log(getTopSalary(salarieуs)); */

// Третий вариант
/* let getTopSalary = (obj) => {
    let allValues = Object.entries(obj).reduce(([key, value], [currKey, currValue]) => {
        if (currValue > value) {
            return [currKey, currValue];
        } else {
            return [key, value]; 
        }
    });
    if (allValues.length == 0) {
        return  null;
    } else {
        return allValues[0];
    }
};
console.log(getTopSalary(salarieуs)); */


// Вернуть случайный элемент из массива
let myArray = [true, 4, "str", {key : "value"}];
let toRandomize = (arr) => {
	let res = arr.map((item, i, arr) => arr[Math.floor(Math.random(i) * arr.length)]); 
	return res.splice(0, 1);
}
console.log(toRandomize(myArray));

// тоже случайный элеиент из массива ( мой вариант)
let arrq = ["text", 1, true, [5, 1], false, {}];
let i = Math.floor(Math.random(arrq.length) * arrq.length);
console.log(arrq[i] + " i = " + i);
// ниже проверка случайностей
let obj = {
	"0": 0,
	"1": 0,
	"2": 0,
	"3": 0,
	"4": 0,
	"5": 0,
}
for (let i = 0; i < 10000; i++) {
	let i = Math.floor(Math.random(arrq.length) * arrq.length);
	obj[i]++;
}








