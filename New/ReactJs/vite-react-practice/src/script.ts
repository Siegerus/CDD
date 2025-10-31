import { bool } from "prop-types";
import { ConsumerProps } from "react";


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
    ar.push(a+b);
    return ar;
}


type User = {
    name: string,
    age: number,
    interests: string[],
    married?: boolean,
    sayPhrase(text: string),
}

const user :User = {
    name: 'Alex',
    age: 23,
    married: false,
    interests: ['tennis', 'programming'],
    sayPhrase: function(text) {
        console.log(this.interests + ' ' + text)
    }
}

function toConsole(obj: User) :void {
    console.log(obj);
}

toConsole(user);


// Пример типа, у которого все ключи будут "string" и все значения будут с объединением типов "string | boolean"
type CompopnentProps = {
    [key: string] : string | boolean;
}
const props: CompopnentProps = {randomKey: 'value'}


// Перечисления
enum Enumeration {
    First = 1,
    Second = 2,
    Third = 3
}
function geyEnumValue() :void {
    if(typeof Enumeration.First == 'number') console.log(Enumeration.First);
    else console.log(typeof Enumeration.First);
}
geyEnumValue();

// Так же перечисление через другой синтаксис
const MyEnum = {
    Key1: 'value1',
    Key2: 'value2',
    Key3: 'value3',
} as const

const obj = {
    AnyKey: MyEnum
}
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

function generic<T>(value: T) :T {
    return value;
}

console.log(generic<string[]>(['true','qqq']));

type Obj<T, U> = {
    key: T,
    key2: U
}

const myObj: Obj<string, number> = {
    key: 'lorem',
    key2: 2
}
// console.log(myObj);


type Item = {
    id: string;
}

type Post = Item & {  // &  - это пересечение типов
    title: string;
    description: string;
}

type MegaPost = Post & { // &  - это пересечение типов
    viewCount: number;
}

const itemObj: Item = {
    id: 'lorem'
}
// Что бы TS знал, что у аргумента есть "id", можно использовать объединение типов
// function printId(variable: Item | Post | MegaPost) { // "|" - это объединение
//     console.log(variable.id);
// }
// printId(itemObj)

function printId<T extends Item /* = Item */>(variable: T) {  // Вариант той же ф-ции с дженериками и extends. "= Item" можно указать п-тр по умолчанию
    console.log(variable.id);
}
printId<Item>(itemObj)

// type ObjectType = {  // также пример объединения типов
//     value: 'value1' | 'value2' | 'value3';
// }
// const obj :ObjectType = {
//     value: 'value1',
// } 



// Принудительное утверждение или уточнение типов
type SmallPost = {
    title: string;
}

type BigPost = {
    longText: string;
}

const mySmallPost: SmallPost = {
    title: 'lorem'
}

const myBigPost: BigPost = {
    longText: 'lorem ipsum'
}

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
}

type MegaPostt = {
    isPromo: boolean;
    viewCount: number;
    longText: string;
    description: string;
}
// Определям новый тип, в котором будет всё, что есть в "BigPostt", кроме того, что есть в "MegaPostt"
type Shortpost = Omit<BigPostt, keyof MegaPostt>  // с помощью keyof
// type Shortpost = Omit<BigPostt, 'isPromo' | 'viewCount' | 'longText'> // или указываем с помощью объединения
// Pick работает точно также , только после запятой наоборот указываются только те поля, которые будут в новом типе.

const myShortpost = {
    title: 'myTitle',
    description: 'descr',
}
// console.log(myShortpost);


//keyof
type someUser = {
    firstName: string;
    lastName: string;
    isAdmin: boolean;
}
type UserProperty = keyof someUser;   // тоже самое, что и ниже. Результатом будет объединение типов
// type UserProperty = 'firstName' | 'lastName' | 'isAdmin'
const property: UserProperty = 'firstName';

// keyof на практике, с использованием дженериков
type Person = {
    name: string;
    age: number;
    isMarried: boolean;
    isAdmin?: boolean;
}
const collectionArray: Person[] = [
    {name: 'Alex', age: 36, isMarried: true},
    {name: 'John', age: 31, isMarried: false},
    {name: 'Smith', age: 36, isMarried: false},
    {name: 'Alice', age: 28, isMarried: true},
    {name: 'Snow', age: 28, isMarried: true, isAdmin: true},
];
function getFilteredResult<Type, Key extends keyof Type>(array: Type[], prop: Key, value: Type[Key]) {
    return array.filter(item => item[prop] === value)
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
function getStringProp(object: Person) :string | undefined {
    if(isNamed(collectionArray[0])) return object.name;

}
// console.log(getStringProp(collectionArray[0]));


// ReturnType - helper-тип
function foo(a: number, user: {name: string; age: number; isAdmin: boolean}) {
    console.log(a);
    return user;
}
//Можно получить тип для "fooResult" вызвав функцию и получив возвращаемое ей значение
// const fooResult = foo(3, {name: 'John', age: 36, isAdmin: false});

// А можно не вызывая задать для "fooResult" тот же тип, который возвращается ф-ией "foo" с помощью "ReturnType"
const fooResult: ReturnType<typeof foo> = {
    name: 'John',
    age: 36,
    isAdmin: false
}

// самописный ReturnType с помощью infer - оператор извлечения типа
// Указываем, что можем передавать в хелпертип толь ф-ию ("T extends (...args: any[])") с любым кол-вом аргументов любого типа. 
// Т.е "T" должна быть подмножеством типа "function"
// Указываем, что эта ф-ия должна возвращать или тип своего возвращаемого результата("infer returnedFunctionType ") или "never"
// "returnedFunctionType" переменная, в которой будет возвращаемый тип
type MyReturnType<T> = T extends (...args: any[]) => infer returnedFunctionType ? returnedFunctionType : never;
 
const fooResult2: MyReturnType<typeof foo> = {
    name: 'John',
    age: 36,
    isAdmin: false
}
// по аналогии рукописный  helper-тип Params
// извлекаем типы параметров ф-ии ("infer funcParams") и возвращаем их
type MyReturnFuncParams<T> = T extends (...arg: infer funcParams) => any ? funcParams : never;

const funcParams: MyReturnFuncParams<typeof foo>[0] = 1 // т.к возвращается массив типов параметров аргументов, указываем, какой элемент массива типов 




console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();