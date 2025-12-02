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

// Пример. Определяем тип для объекта. И потом создаем массив из объекто в такого типа
// type MegaPostt = {
//     isPromo: boolean;
//     viewCount: number;
//     longText: string;
//     description: string;
// }

// const myArr: MegaPostt[] = [
//     {
//         isPromo: true,
//         viewCount: 11,
//         longText: 'string',
//         description: 'string',
//     }
// ]

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

// type ObjectType = {  // также пример объединения типов
//     value: 'value1' | 'value2' | 'value3';
// }
// const obj :ObjectType = {
//     value: 'value1',
// }

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
) {
	return array.filter((item) => item[prop] === value);
}
// console.log(getFilteredResult(collectionArray, 'age', 36));
// {name: 'Alex', age: 36, isMarried: true}
// {name: 'Smith', age: 36, isMarried: false}

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

const phrases = {
	sayHi() {
		console.log('Hi!');
	},
	sayBy() {
		console.log('By!');
	},
};
class Man {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
}
const res = Object.assign(Man.prototype, phrases);
const man = new Man('Alex');

// let eventMixin = {
// 	/**
// 	 * Подписаться на событие, использование:
// 	 * menu.on('select', function(item) { ... }
// 	 */
// 	on(eventName, handler) {
// 		if (!this._eventHandlers) this._eventHandlers = {};
// 		if (!this._eventHandlers[eventName]) {
// 			this._eventHandlers[eventName] = [];
// 		}
// 		this._eventHandlers[eventName].push(handler);
// 	},

// 	/**
// 	 * Отменить подписку, использование:
// 	 * menu.off('select', handler)
// 	 */
// 	off(eventName, handler) {
// 		let handlers = this._eventHandlers?.[eventName];
// 		if (!handlers) return;
// 		for (let i = 0; i < handlers.length; i++) {
// 			if (handlers[i] === handler) {
// 				handlers.splice(i--, 1);
// 			}
// 		}
// 	},

// 	/**
// 	 * Сгенерировать событие с указанным именем и данными
// 	 * this.trigger('select', data1, data2);
// 	 */
// 	trigger(eventName, ...args) {
// 		if (!this._eventHandlers?.[eventName]) {
// 			return; // обработчиков для этого события нет
// 		}

// 		// вызовем обработчики
// 		this._eventHandlers[eventName].forEach((handler) =>
// 			handler.apply(this, args)
// 		);
// 	},
// };

// // Создадим класс
// class Menu {
//   choose(value) {
//     this.trigger("select", value);
//   }
// }
// // Добавим примесь с методами для событий
// Object.assign(Menu.prototype, eventMixin);

// let menu = new Menu();

// // Добавим обработчик, который будет вызван при событии "select":
// menu.on("select", value => alert(`Выбранное значение: ${value}`));

// // Генерирует событие => обработчик выше запускается и выводит:
// // menu.choose("123"); // Выбранное значение: 123

const array = ['str', 31, false, { key: 'value' }, [1, 2]];

console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();

// async function getData(url: string) {
//     let response = await fetch(url);
//     let json = await response.json();
//     console.log(json)
//     return json;
// }
// getData('https://16.design.htmlacademy.pro/six-cities')
// getData('../server/offer-by-id.json').then((result) => console.log(result));
// getData('../server/comments-list.json').then((result) => console.log(result));
// getData('../server/offers-list-favorite.json').then((result) => console.log(result));
// getData('../server/offers-list-nearly.json').then((result) => console.log(result));
// getData('../server/offers-list.json').then((result) => console.log(result));
// getData('../server/user-auth-status.json').then((result) => console.log(result));

// let userr = {
//     name: 'John',
//     surname: 'Smith'
//   };
// const json = JSON.stringify(userr);

// async function postData(url) {
//     let response = await fetch(url, {
//         method : "POST",
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//           },
//         body : JSON.stringify(userr)
//     })
//     let result = await response.text();
//     console.log(result)
// }
// postData('https://webhook.site/dd2124da-a863-4c8e-bf0f-73756b83acf9');
