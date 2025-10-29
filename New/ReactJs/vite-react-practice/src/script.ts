

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

// console.log(getValue(1, 2));
// user.sayPhrase('text')

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

console.log();
console.log();
console.log();
console.log();
console.log();
console.log();