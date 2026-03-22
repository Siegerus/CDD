import { current } from '@reduxjs/toolkit';
import { bool } from 'prop-types';
import { ConsumerProps } from 'react';

const numb = 12;

const myString = '12';

/* let person : {
    name: string,
    age: number,
    married: boolean,
}

person = {
    name: 'Alex',
    age: 22,
    married: false,
}

let human : {
    name: string,
    age: number,
    married: boolean,
}


function getObjCopy(obj: object) :object {
    
    return obj = Object.assign(person);
}

console.log(getObjCopy(human)); */

const ar: number[] = [];
function getValue(a: number, b: number): number[] {
	ar.push(a + b);
	return ar;
}

type User = {
	name: string;
	age: number;
	interests: string[];
	married?: boolean;
	sayPhrase(text: string): void;
};

const user: User = {
	name: 'Alex',
	age: 23,
	married: false,
	interests: ['tennis', 'programming'],
	sayPhrase: function (text) {
		console.log(this.interests + ' ' + text);
	},
};

function toConsole(obj: User): void {
	console.log(obj);
}

toConsole(user);

// Пример типа, у которого все ключи будут "string" и все значения будут с объединением типов "string | boolean"
type CompopnentProps = {
	[key: string]: string | boolean;
};
const props: CompopnentProps = { randomKey: 'value' };

//--------------------------

// Перечисления
enum Enumeration {
	First = 1,
	Second = 2,
	Third = 3,
}
function geyEnumValue(): void {
	if (typeof Enumeration.First == 'number') console.log(Enumeration.First);
	else console.log(typeof Enumeration.First);
}
geyEnumValue();

// Так же перечисление через другой синтаксис
const MyEnum = {
	Key1: 'value1',
	Key2: 'value2',
	Key3: 'value3',
} as const;

const obj = {
	AnyKey: MyEnum,
};
// console.log(obj);

//--------------------------

// Дженерики
function identify<T, U>(firstValue: T, secondValue: U): T {
	console.log(secondValue);
	return firstValue;
}

identify<number, string>(10, 'Hello World');

/* interface Cart<T> {
    items: T[];
  }
  const cart: Cart<string> = {
    items: []
  };
  cart.items.push('orange');
  cart.items.push('banana'); */
/*   type Cart<T = string> = {
    items: T[];
  }
  const cart: Cart<string> = {
    items: []
  };
  cart.items.push('orange');
  cart.items.push('banana'); */

function generic<T>(value: T): T {
	return value;
}
console.log(generic<string[]>(['true', 'qqq']));

//
type Letters = 'A' | 'B' | 'C' | 'D' | 'E';
type Numbers = number;

const letters: Letters[] = ['A', 'B', 'C', 'D', 'E'];
const numbers = [1, 2, 3, 4, 5];

const sortArray = <T>(arr: T[]): T[] => {
	arr.sort((a: T, b: T) => {
		if (b < a) return -1;
		else return 1;
	});
	return arr;
};
// console.log(sortArray<Letters>(letters));
// console.log(sortArray<Numbers>(numbers));

type Obj<T, U> = {
	key: T;
	key2: U;
};

const myObj: Obj<string, number> = {
	key: 'lorem',
	key2: 2,
};
// console.log(myObj);

type Item = {
	id: string;
};

type Post = Item & {
	// &  - это пересечение типов
	title: string;
	description: string;
};

type MegaPost = Post & {
	// &  - это пересечение типов
	viewCount: number;
};

const itemObj: Item = {
	id: 'lorem',
};
// Что бы TS знал, что у аргумента есть "id", можно использовать объединение типов
// function printId(variable: Item | Post | MegaPost) { // "|" - это объединение
//     console.log(variable.id);
// }
// printId(itemObj)

function printId<T extends Item /* = Item */>(variable: T) {
	// Вариант той же ф-ции с дженериками и extends. "= Item" можно указать п-тр по умолчанию
	console.log(variable.id);
}
printId<Item>(itemObj);

//--------------------------

// Принудительное утверждение или уточнение типов
type SmallPost = {
	title: string;
};

type BigPost = {
	longText: string;
};

const mySmallPost: SmallPost = {
	title: 'lorem',
};

const myBigPost: BigPost = {
	longText: 'lorem ipsum',
};

const posts = [mySmallPost, myBigPost];
const firstPost = posts[0]; // в firstPost будет значение с типом SmallPost | BigPost
const firstPostt = <SmallPost>posts[0]; // в firstPost будет значение с типом SmallPost
const firstPosttt = posts[0] as SmallPost; // Или вариант через "as"

//--------------------------

// Omit Pick
type BigPostt = {
	title: string;
	description: string;
	longText: string;
	viewCount: number;
	isPromo: boolean;
};

type MegaPostt = {
	isPromo: boolean;
	viewCount: number;
	longText: string;
	description: string;
};
// Определям новый тип, в котором будет всё, что есть в "BigPostt", кроме того, что есть в "MegaPostt"
type Shortpost = Omit<BigPostt, keyof MegaPostt>; // с помощью keyof
// type Shortpost = Omit<BigPostt, 'isPromo' | 'viewCount' | 'longText'> // или указываем с помощью объединения
// Pick работает точно также , только после запятой наоборот указываются только те поля, которые будут в новом типе.

const myShortpost = {
	title: 'myTitle',
	description: 'descr',
};
// console.log(myShortpost);

//--------------------------

//keyof
type someUser = {
	firstName: string;
	lastName: string;
	isAdmin: boolean;
};
type UserProperty = keyof someUser; // тоже самое, что и ниже. Результатом будет объединение типов
// type UserProperty = 'firstName' | 'lastName' | 'isAdmin'
const property: UserProperty = 'firstName';

// keyof на практике, с использованием дженериков
type MyObject = {
	key: 'name';
	secondKey: 'last name';
};

const object: MyObject = { key: 'name', secondKey: 'last name' };

function getProperty<T>(obj: T, value: keyof T): T[keyof T] {
	return obj[value];
}
// console.log(getProperty<MyObject>(object, 'key'));  // 'name'
//
type Person = {
	name: string;
	age: number;
	isMarried: boolean;
	isAdmin?: boolean;
};
const collectionArray: Person[] = [
	{ name: 'Alex', age: 36, isMarried: true },
	{ name: 'John', age: 31, isMarried: false },
	{ name: 'Smith', age: 36, isMarried: false },
	{ name: 'Alice', age: 28, isMarried: true },
	{ name: 'Snow', age: 28, isMarried: true, isAdmin: true },
];
function getFilteredResult<Type, Key extends keyof Type>(
	array: Type[],
	prop: Key,
	value: Type[Key]
): Type[] {
	return array.filter((item) => item[prop] === value);
}
// console.log(getFilteredResult<Person, 'age'>(collectionArray, 'age', 36));
// {name: 'Alex', age: 36, isMarried: true}
// {name: 'Smith', age: 36, isMarried: false}

//-------------

//type-guard
//type-guard с объектами с помощью in
type FirsObjType = {
	field: string;
};
type SecondObjType = {
	field: string;
	secondField: number;
};

const firstObj: FirsObjType = {
	field: 'smth',
};
const secondObj: SecondObjType = {
	field: 'smth',
	secondField: 1,
};

const guardTestFn = (obj: FirsObjType | SecondObjType): void => {
	if ('secondField' in obj) console.log(obj.secondField / 1);
	console.log(obj);
};
// guardTestFn(firstObj);

// type-guard ф-ция. Должна всегда возваращать true / false. В типе указывается 'is'
// Проверяем, есть ли св-во "name" в объекте
function isNamed(object: Person): object is Person {
	return 'name' in object;
}
// Если св-во "name" есть, то вернётся тип string, если нет - undefined. Указали объединение ":string | undefined "
function getStringProp(object: Person): string | undefined {
	if (isNamed(collectionArray[0])) return object.name;
}
// console.log(getStringProp(collectionArray[0]));

// ReturnType - helper-тип
function foo(a: number, user: { name: string; age: number; isAdmin: boolean }) {
	console.log(a);
	return user;
}
//Можно получить тип для "fooResult" вызвав функцию и получив возвращаемое ей значение
// const fooResult = foo(3, {name: 'John', age: 36, isAdmin: false});

// А можно не вызывая задать для "fooResult" тот же тип, который возвращается ф-ией "foo" с помощью "ReturnType"
const fooResult: ReturnType<typeof foo> = {
	name: 'John',
	age: 36,
	isAdmin: false,
};

// самописный ReturnType с помощью infer - оператор извлечения типа
// Указываем, что можем передавать в хелпертип толь ф-ию ("T extends (...args: any[])") с любым кол-вом аргументов любого типа.
// Т.е "T" должна быть подмножеством типа "function"
// Указываем, что эта ф-ия должна возвращать или тип своего возвращаемого результата("infer returnedFunctionType ") или "never"
// "returnedFunctionType" переменная, в которой будет возвращаемый тип
type MyReturnType<T> = T extends (...args: any[]) => infer returnedFunctionType
	? returnedFunctionType
	: never;

const fooResult2: MyReturnType<typeof foo> = {
	name: 'John',
	age: 36,
	isAdmin: false,
};
// по аналогии рукописный  helper-тип Params
// извлекаем типы параметров ф-ии ("infer funcParams") и возвращаем их
type MyReturnFuncParams<T> = T extends (...arg: infer funcParams) => any
	? funcParams
	: never;

const funcParams: MyReturnFuncParams<typeof foo>[0] = 1; // т.к возвращается массив типов параметров аргументов, указываем, какой элемент массива типов

// ----------------

// Кортежи
// Длинна такого массива известна заранее и её нельзя изменить
// Может содержать элементы разных типов.Типы известны заранее
// Типы элементов упорядоченны и порядок нельзя изменить. Добавлять или удалять элементы нельзя.
// Для именование кортежей используются существительные в единствееном числе

/* const args = [1,'lorem', 3, false, 5]; // пример создания кортежа в нативном js с помощью метода объекта "freeze"
const tuple = Object.freeze(args); */

// const randomUser: [string, number, boolean] = ['Alex', 323123, true] // пример и синтаксис кортежа
let randomUser: [string, number, boolean]; // Можно сначала определить кортеж с помощью "let"
randomUser = ['Alex', 323123, true]; // А потом задать значения

randomUser[0] = 'John'; // Редактировать элементы кортежа можно. Главное, что бы совпадали типы.
randomUser[2] = false;

const cortage: readonly [string, string] = ['lorem', 'ipsum']; // А такой кортеж (с "readonly") редактировать нельзя. Лучше создавать такие.(что бы избежать проблемм с "push")

const [username, id, isAdmin] = randomUser; // Деструктуризаци кортежа проходит как и обычным массивом
// console.log(username) // Alex
// console.log(randomUser) // ['Alex', 323123, true]

const newUser = ['Alice', 122231] as const; // Упрощённый синтаксис содания кортежей. Он по умолчанию "readonly"

function innerCb(innerCb2: () => void) {
	console.log('hellow from innerCb!');
	innerCb2();
}
const func = (cb: () => void) => {
	console.log('hellow from func!');
	cb();
};
func(() => innerCb(() => console.log('hellow from innerCb2!')));

// --------------------

//  typeof keyof
enum Lang {
	english = '1',
	spanish = 'spanish',
	italian = 'italian',
	france = 'france',
}

type Word = {
	text: string;
	isRussian: boolean;
	letterCount: number;
	language: Lang;
};

const word: Word = {
	text: 'lorem',
	isRussian: true,
	letterCount: 5,
	language: Lang.english,
};

const keyOfTest: keyof Word = 'isRussian'; // с типом (объединение типов как "|" ниже. Но keyof не всегда работает??)
// type KeyOfTest = string | boolean | number | Lang;
// У меня работает только как сверху и снизу. Если попытаться со всеми ключами объекта\типа - то ошибка. Т.е. задаёт тип только какого то из ключей (не значения)
const keyOfTypeOfTest: keyof typeof word = 'isRussian'; // работает как и "keyof Word", только от объекта "word"

const newWord: typeof word = {
	//с объектом. Новый объект "newWord" будет с тем же типом, что объект word
	text: 'lorem',
	isRussian: true,
	letterCount: 5,
	language: Lang.english,
};

enum Hosts {
	admin = 'admi',
	user = 'user',
	unknow = 'unknow',
}

type Book = {
	autor: string;
	ganre: string;
	pages: number;
	isFavorite: boolean;
	host: Hosts;
};

type BooksProp = keyof Book;
const bookProp: BooksProp = 'autor';

type Persons = keyof typeof Hosts; // Так можно сделать тип для всех ключей перечисления (просто "keyof" работать не будет)
const persons: Persons = 'admin';

const book: Book = {
	autor: 'Remark',
	ganre: 'dramm',
	pages: 300,
	isFavorite: false,
	host: Hosts.admin,
};

const BOOKS: Book[] = [
	{
		autor: 'Farmer',
		ganre: 'fantastic',
		pages: 300,
		isFavorite: true,
		host: Hosts.admin,
	},
	{
		autor: 'Tolkien',
		ganre: 'fantasy',
		pages: 500,
		isFavorite: true,
		host: Hosts.user,
	},
];

const NEW_BOOK: typeof BOOKS = [
	{
		autor: 'Doil',
		ganre: 'fantastic',
		pages: 300,
		isFavorite: true,
		host: Hosts.admin,
	},
];

// Пример типа, у которого все ключи будут "string" и все значения будут с объединением типов "string | boolean"
type CompopnentPropss = {
	[key: string]: string | boolean;
};

// Создание типа, в котором задаём все ключи, как в типе "Book", а значение - boolean или 'test'.
type BooleanBook = {
	[Key in keyof Book]: boolean | 'test';
};

const booleabBook: BooleanBook = {
	autor: 'test',
	ganre: true,
	pages: true,
	isFavorite: false,
	host: true,
};

// Два одинаковых варианта. Тип будет включать все типы ключей из "BooleanBook".
type Test = (typeof booleabBook)[keyof typeof booleabBook]; // от объекта
// type Test = BooleanBook[keyof BooleanBook] // от типа
const test: Test = 'test';

// -------------------

// Содаём кортеж
const STRS = ['lorem1', 'lorem2', 'lorem3', 'lorem4'] as const;
// объявляем тип от кортежа
type TestType = (typeof STRS)[number];
// В итоге тип будет оъединением "lorem1" | "lorem2" | "lorem3" | "lorem4"
const lorem: TestType = 'lorem1';

//--------------------

// Тоже кортеж. Уже из объектов.
const MEMBERS = [
	{ name: 'First name', secondName: 'Second name', role: 'user', age: 21 },
	{ name: 'First name', secondName: 'Second name', role: 'admin', age: 33 },
	{ name: 'First name', secondName: 'Second name', role: 'guest', age: 41 },
	{ name: 'First name', secondName: 'Second name', role: 'user', age: 19 },
] as const;
// По той же логике, только тип будет объединением  значений св-в age
type Age = (typeof MEMBERS)[number]['age'];
// 21 | 33 | 41 | 19
const someAge: Age = 19;
// -------------------

type City = {
	name: string;
	persons: number;
	russian: boolean;
};

const CITIES = [
	{ name: 'Anapa', persons: 1.2, russian: true },
	{ name: 'Anapa', persons: 1.2, russian: true },
	{ name: 'Anapa', persons: 1.2, russian: true },
	{ name: 'Krasnodar', persons: 3, russian: true },
	{ name: 'Krasnodar', persons: 3, russian: true },
	{ name: 'Krasnodar', persons: 3, russian: true },
	{ name: 'Kiev', persons: 8, russian: false },
	{ name: 'Kiev', persons: 8, russian: false },
	{ name: 'Kiev', persons: 8, russian: false },
	{ name: 'Simferopol', persons: 1, russian: true },
	{ name: 'Simferopol', persons: 1, russian: true },
	{ name: 'Simferopol', persons: 1, russian: true },
	{ name: 'New-York', persons: 16, russian: false },
	{ name: 'New-York', persons: 16, russian: false },
	{ name: 'New-York', persons: 16, russian: false },
	{ name: 'Moskow', persons: 13, russian: true },
	{ name: 'Moskow', persons: 13, russian: true },
	{ name: 'Moskow', persons: 13, russian: true },
];

//--------------------
// -------------------

// const grouped = CITIES.reduce((obj, city) => {
// 	debugger;
// 	obj[city.name] = obj[city.name] || [];

// 	obj[city.name].push(city);

// 	return obj;
// }, {});

//--------------------
// -------------------

// function getGrouped() {
// 	const objj: Record<string, City[]> = {};
// 	CITIES.forEach((item) => {
// 		if (item.name in objj) objj[item.name].push(item);
// 		else objj[item.name] = [];
// 		/* objj[item.name] = objj[item.name] || [];
// 		for (let prop in objj) {
// 			if (prop === item.name) objj[item.name].push(item);
// 		} */
// 	});
// 	return objj;
// }

// console.log(getGrouped());

//--------------------
//--------------------

const nums = [9, 1, 3, 5, 7, 2];

const coins = [25, 10, 5, 2, 1];

function coinChangeGreedy(sum) {
	const result = [];
	for (let coin of coins) {
		while (sum >= coin) {
			sum -= coin;
			result.push(coin);
		}
	}
	return result;
}

console.log(coinChangeGreedy(63));

// function countDuplicates(array, startPosition) {
// 	// сначала предположим, что число встречается всего один раз
// 	let lastPosition = startPosition;

// 	// последнее проверенное число — то же самое, что и в начале повторений. И мы не прошли массив полностью...
// 	while (
// 		array[startPosition] === array[lastPosition] &&
// 		lastPosition < array.length
// 	) {
// 		// ...подвигаем указатель на последнее одинаковое число
// 		lastPosition++;
// 	}

// 	// а как только числа перестали совпадать, вернём длину отрезка с дубликатами
// 	return lastPosition - startPosition;
// }

// function countMostFrequent(firstArray, secondArray) {
// 	let result = 0;
// 	// храним указатели на текущие элементы в массиве
// 	let firstPointer = 0;
// 	let secondPointer = 0;

// 	// пока не закончился один из наших массивов
// 	while (
// 		firstPointer < firstArray.length &&
// 		secondPointer < secondArray.length
// 	) {
// 		// если в первом массиве текущее число меньше, чем во втором, то нужно сначала посчитать количество этих чисел
// 		if (firstArray[firstPointer] < secondArray[secondPointer]) {
// 			// посчитаем дубликаты, начиная с текущего указателя
// 			const dup1 = countDuplicates(firstArray, firstPointer);

// 			// если получилось больше дубликатов, чем уже было, то запомним это число как текущий результат
// 			result = Math.max(result, dup1);
// 			// и подвигаем указатель внутри первого массива
// 			firstPointer += dup1;
// 			// если в массивах числа совпадают, то ...
// 		} else if (firstArray[firstPointer] === secondArray[secondPointer]) {
// 			// ...посчитаем их количество в каждом массиве
// 			const dup1 = countDuplicates(firstArray, firstPointer);
// 			const dup2 = countDuplicates(secondArray, secondPointer);

// 			// если нужно, обновим результат и подвигаем каждый из указателей
// 			result = Math.max(result, dup1 + dup2);
// 			firstPointer += dup1;
// 			secondPointer += dup2;
// 			// если же во втором массиве число больше, чем в первом, то сделаем над ним те же операции, что над первым
// 		} else {
// 			const dup2 = countDuplicates(secondArray, secondPointer);

// 			result = Math.max(result, dup2);
// 			secondPointer += dup2;
// 		}
// 	}

// 	// если один из массивов закончился, значит нужно досчитать дубликаты в оставшемся массиве подобным образом, пока не закончится и второй
// 	while (firstPointer < firstArray.length) {
// 		const dup1 = countDuplicates(firstArray, firstPointer);

// 		result = Math.max(result, dup1);
// 		firstPointer += dup1;
// 	}

// 	while (secondPointer < secondArray.length) {
// 		const dup2 = countDuplicates(secondArray, secondPointer);

// 		result = Math.max(result, dup2);
// 		secondPointer += dup2;
// 	}

// 	return result;
// }

// console.log(countMostFrequent([1, 2, 2, 3], [0, 2, 4, 4]));
// console.log(countMostFrequent([], [0, 0]));

//--------------------

// // Пример класса с типами
// // Класс будет принимать аргументом текст для элемента и кол-во первых символов, которые будут закрашены
// const createClassFn = () => {
// 	class TextPainter {
// 		element: HTMLElement | undefined;
// 		text: string;
// 		wordLength: number;

// 		constructor(text: string, wordLength: number) {
// 			this.element;
// 			this.text = text;
// 			this.wordLength = wordLength;
// 			this.setHtml();
// 		}
// 		static createNewClass() {
// 			// статичный метод для создания нового экземпляра класса. Этот метод есть только у самого класса, но не у обектов.
// 			new this('Hellow from static method', 6);
// 		}
// 		createElement(): void {
// 			this.element = document.createElement('p');
// 			this.element.className = 'text-element';
// 			this.element.textContent = this.text;
// 			document.body.append(this.element);
// 		}
// 		getHtml(): string {
// 			const letterCount = this.element?.innerHTML;
// 			const text = letterCount
// 				?.split('')
// 				.splice(this.wordLength, letterCount.length)
// 				.join('');
// 			const firstWord = letterCount
// 				?.split('')
// 				.splice(0, this.wordLength)
// 				.join('');
// 			return `<span style="color: coral;">${firstWord}</span>${text}`;
// 		}
// 		setHtml(): void {
// 			this.createElement();
// 			if (this.element) this.element.innerHTML = this.getHtml();
// 		}
// 	}
// 	new TextPainter('This is text element!', 4);
// 	new TextPainter('And this is one more text element!', 3);
// 	// Ниже обращение к статичному методу класса
// 	console.log(new TextPainter('And this is one more text element!', 3));
// 	TextPainter.createNewClass();

// 	//Класс, который наследует от класса выше. Перезаписывает метод "getHtml()", который теперь будет делает текст заглавным
// 	class ModifiedTextPainter extends TextPainter {
// 		test: string;

// 		constructor(text: string, wordLength: number, test: string) {
// 			super(text, wordLength);
// 			this.test = test;
// 		}

// 		getHtml(): string {
// 			const letterCount = this.element?.innerHTML;
// 			const text = letterCount
// 				?.split('')
// 				.splice(this.wordLength, letterCount.length)
// 				.join('')
// 				.toUpperCase();
// 			const firstWord = letterCount
// 				?.split('')
// 				.splice(0, this.wordLength)
// 				.join('')
// 				.toUpperCase();
// 			return `<span style="color: coral;">${firstWord}</span>${text}`;
// 		}
// 	}

// 	new ModifiedTextPainter('This is modified', 4, 'test');

// 	// Ниже наледуемый класс без своего конструктора. Он просто переопределяет метод, добавляя alert
// 	class AlertTextPainter extends TextPainter {
// 		setHtml(): void {
// 			this.createElement();
// 			alert('hellow from extend class!');
// 			if (this.element) this.element.innerHTML = this.getHtml();
// 		}
// 	}
// 	// new AlertTextPainter('lorem', 2);
// };

// createClassFn();

// class NewError extends Error {
// 	constructor(message: string) {
// 		super();
// 		this.name = 'My Error name';
// 		this.message = message;
// 	}
// }

// const error = new NewError('this is custom Error!');

// // throw new NewError('!!!');

// try {
// 	let value = 10;

// 	const res = value++;

// 	if (res < 10) throw new NewError('this is custom Error!');
// 	console.log(object);
// } catch (error) {
// 	if (error instanceof NewError) console.log('< 10');
// 	else if (error instanceof ReferenceError)
// 		console.log('this is ReferenceError');
// }

// Аккардеон с типами
// class Accordeon {
// 	element: HTMLElement;

// 	constructor(element: HTMLElement) {
// 		this.element = element;
// 		this.accordeonClickHandle = this.accordeonClickHandle.bind(this);

// 		element.addEventListener('click', this.accordeonClickHandle);
// 	}
// 	accordeonClickHandle(e: MouseEvent) {
// 		const targetType = e.target as HTMLButtonElement;
// 		const target = targetType.closest('BUTTON');
// 		if (!target) return;

// 		const buttons = this.element.querySelectorAll('BUTTON');

// 		buttons.forEach((button) => button.classList.remove('active'));
// 		target.classList.toggle('active');

// 		this.setContentVisibility(buttons);
// 	}
// 	setContentVisibility(elems: NodeListOf<Element>) {
// 		elems.forEach((elem: Element) => {
// 			if (elem.parentElement && elem.classList.contains('active')) {
// 				elem.parentElement.style.minHeight = '100px';
// 			} else if (elem.parentElement) elem.parentElement.style.minHeight = '0';
// 		});
// 	}
// }

// // Слайдер с типами

// const imageUrls = [
// 	'https://avatars.mds.yandex.net/i?id=57e678835ec55aed8048e39a4abcc93c7f4ff773-7452498-images-thumbs&n=13',
// 	'https://avatars.mds.yandex.net/i?id=de225eb4596bebd8cdeb6857787f5ca4450b5509-4276653-images-thumbs&n=13',
// 	'https://avatars.mds.yandex.net/i?id=c57516056eb29d6a87b4645819256947c1fbd08d-7040874-images-thumbs&n=13',
// ];
// // 	urls: imageUrls,
// // 	dots: true,
// // 	slideWidth: 380,
// // 	slideHeigh: 240,
// // 	imagesAlt: 'slide-image',
// // });

// class Slider {
// 	element: HTMLElement;
// 	urls: string[] | null;
// 	isVisibleDots: boolean;
// 	onClickZoom: boolean;
// 	slideWidth: number | null;
// 	slideHeigh: number | null;
// 	imagesAlt: string;
// 	currentIndex: number;
// 	slides: NodeListOf<HTMLImageElement>;
// 	prevNextButtons: NodeListOf<HTMLElement>;
// 	dotsButtons: NodeListOf<HTMLElement>;

// 	constructor(
// 		element: HTMLElement,
// 		params = {
// 			urls: null,
// 			dots: false,
// 			onClickZoom: false,
// 			slideWidth: null,
// 			slideHeigh: null,
// 			imagesAlt: '',
// 		}
// 	) {
// 		this.element = element;
// 		this.currentIndex = 1;
// 		this.urls = params.urls;
// 		this.isVisibleDots = params.dots;
// 		this.slideWidth = params.slideWidth;
// 		this.slideHeigh = params.slideHeigh;
// 		this.imagesAlt = params.imagesAlt;
// 		this.onClickZoom = params.onClickZoom;
// 		this.prevNextButtons = this.element.querySelectorAll(
// 			`button.${this.element.className}__prev-next-button`
// 		);

// 		this.createSlides(this.urls);
// 		this.slides = this.element.querySelectorAll('img');

// 		this.createDots(this.slides);
// 		this.dotsButtons = this.element.querySelectorAll(
// 			`button.${this.element.className}__dot-button`
// 		);

// 		this.setVisibleSlide(this.currentIndex);

// 		this.slideShift = this.slideShift.bind(this);
// 		this.showByDotClick = this.showByDotClick.bind(this);
// 		this.zoomImage = this.zoomImage.bind(this);

// 		this.element.addEventListener('click', (e) => {
// 			if (this.onClickZoom) this.zoomImage(e);

// 			const target = e.target as HTMLElement;
// 			if (!target.closest('button')) return;
// 			if (target.contains(this.prevNextButtons[0])) this.slideShift(-1);
// 			if (target.contains(this.prevNextButtons[1])) this.slideShift(1);

// 			this.dotsButtons.forEach((button, i) => {
// 				if (target.contains(button)) this.showByDotClick(i + 1);
// 			});
// 		});
// 	}

// 	createSlides(urls: string[] | null) {
// 		if (!urls) return;

// 		const images = urls.map((url) => {
// 			const img = document.createElement('img');
// 			img.src = url;
// 			img.alt = this.imagesAlt;
// 			if (this.slideWidth) img.width = this.slideWidth;
// 			if (this.slideHeigh) img.height = this.slideHeigh;
// 			return img;
// 		});
// 		this.element.firstElementChild!.prepend(...images);
// 	}

// 	createDots(slides: NodeListOf<HTMLImageElement>) {
// 		if (!slides) return;
// 		if (!this.isVisibleDots) return;

// 		const div = document.createElement('div');
// 		div.className = `${this.element.className}__dots-wrapper`;
// 		this.element.firstElementChild!.append(div);

// 		const dots = Array.from(slides).map((slide) => {
// 			const dot = document.createElement('button');
// 			dot.className = `${this.element.className}__dot-button`;
// 			return dot;
// 		});

// 		const dotsWrapper = this.element.querySelector(
// 			`.${this.element.className}__dots-wrapper`
// 		);
// 		if (dotsWrapper) dotsWrapper.append(...dots);
// 	}

// 	setVisibleSlide(idx: number) {
// 		if (!this.slides) return;
// 		if (this.slides.length < 1) return;
// 		this.currentIndex = idx;

// 		if (idx > this.slides.length) this.currentIndex = 1;
// 		if (idx <= 0) this.currentIndex = this.slides.length;

// 		this.slides.forEach((slide) => {
// 			if (this.onClickZoom) slide.style.cursor = 'pointer';

// 			slide.classList.remove('active');
// 			slide.hidden = true;
// 		});
// 		this.slides[this.currentIndex - 1].classList.add('active');
// 		this.slides[this.currentIndex - 1].hidden = false;

// 		this.setActiveDot();
// 	}

// 	setActiveDot() {
// 		if (this.dotsButtons.length < 1) return;

// 		this.slides.forEach((slide, i) => {
// 			if (slide.classList.contains('active')) {
// 				this.dotsButtons[i].classList.add('active');
// 			} else {
// 				this.dotsButtons[i].classList.remove('active');
// 			}
// 		});
// 	}

// 	setIndex(num: number) {
// 		this.currentIndex = this.currentIndex + num;
// 	}

// 	slideShift(num: number) {
// 		this.setIndex(num);
// 		this.setVisibleSlide(this.currentIndex);
// 	}

// 	showByDotClick(i: number) {
// 		this.setVisibleSlide(i);
// 	}

// 	zoomImage(e: MouseEvent) {
// 		const target = e.target as HTMLElement;
// 		if (!target.closest('img')) return;

// 		function createOvrelayNode(className: string) {
// 			const overlayNode = document.createElement('div');
// 			overlayNode.className = `overlay ${className}__overlay`;
// 			overlayNode.style.display = 'block';
// 			overlayNode.innerHTML += `<button class="overlay__close ${className}__close" type="button" hidden>✖</button>`;
// 			return overlayNode;
// 		}
// 		if (!document.querySelector('.overlay'))
// 			document.body.append(createOvrelayNode(this.element.className));

// 		const overlay = document.querySelector('.overlay');
// 		if (!overlay) return;

// 		function createImageNode(
// 			slides: NodeListOf<HTMLImageElement>,
// 			className: string
// 		) {
// 			const nodeImage: HTMLElement[] = [];
// 			slides.forEach((slide) => {
// 				if (slide.classList.contains('active')) {
// 					const img = document.createElement('img');
// 					img.className = `overlay__inner-image ${className}__inner-image`;
// 					img.src = slide.src;
// 					console.log(img.getBoundingClientRect());
// 					nodeImage.push(img);
// 				}
// 			});
// 			return nodeImage;
// 		}

// 		overlay.append(...createImageNode(this.slides, this.element.className));
// 		const innerImage = overlay.querySelector(
// 			'.overlay__inner-image'
// 		) as HTMLElement;

// 		innerImage.addEventListener('animationend', () => {
// 			const innerImgCoords = {
// 				top: innerImage!.getBoundingClientRect().top - 20,
// 				left:
// 					innerImage!.getBoundingClientRect().left +
// 					innerImage!.offsetWidth +
// 					20,
// 			};

// 			const closeButton = overlay.querySelector(
// 				`.${this.element.className}__close`
// 			) as HTMLButtonElement;
// 			closeButton.style.cssText = `top:${innerImgCoords.top}px; left:${innerImgCoords.left}px;`;
// 			closeButton.hidden = false;
// 		});

// 		function overlayCloseHandle(e: MouseEvent) {
// 			const target = e.target as HTMLElement;
// 			if (!target.closest('.overlay')) return;
// 			if (target.closest('.overlay img')) return;
// 			if (overlay) overlay.remove();

// 			document.removeEventListener('click', overlayCloseHandle);
// 		}
// 		document.addEventListener('click', overlayCloseHandle);
// 	}
// }

// /* const slider = new Slider(document.querySelector('.new-slider'), {
// 	urls: imageUrls,
// 	dots: true,
// 	onClickZoom: true,
// 	slideWidth: 380,
// 	slideHeigh: 240,
// 	imagesAlt: 'slide-image',
// }); */

console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
