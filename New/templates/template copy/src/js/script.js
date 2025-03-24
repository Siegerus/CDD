"use strict"
let inputs = document.querySelectorAll(".feed-form__input"),
    clickBox = document.querySelectorAll(".box__inner")[0],
    newElement = document.createElement("input"),
    form = document.getElementsByTagName("form");

let anyItems = document.querySelectorAll(".any-section__item");



/* let toRecurse = (a, n) => {
    if(n == 1) {
        return a
    } else {
        console.log(n);
        a =  a * toRecurse(a, n - 1)
        return a
    }
};

console.log(toRecurse(5,10)); */


/* let company = {
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
console.log(getSum(company)); */


/* let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null; */

// Рекурсия вычисляет сумму всех чисел, которые идут до заданного(включительно)
/* let sumTo = (n) => {
    if(n == 1) {
        return 1;
    } else {
      console.log(n);
      return n + sumTo(n - 1);
    }
};
console.log(sumTo(8)); */
/* // Факториал рекурсия
let getFactorial = (n) => {
    if(n == 1) {
        return 1;
    } else {
        n = n * getFactorial(n - 1)
        return n;
    } 
};
console.log(getFactorial(5));  */

/* let myList = {
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
}; */

/* let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
}; */


/* let obj = {
	name : "Alex",
	age : 35,
	get sayName() {
		console.log(this.name);
	},
	sayAge() {
		console.log(this.age);
	},

	set setAge(value) {
		if(value > 95) console.log("to match!");
		else this.age = value;
		
	}
}
obj.setAge = 97; */

// Пример прототипного наследования
/* let user = {
	name : "Alex",
	surname: "Nail",
	age: 35,
	get sayHi() {
		console.log("Hi!");
	},
	sayAge() {
		console.log(this.age);
	},
	set setProperty(value) {
		this.custom = value;
	}
};
let guest = {
	name: "John",
	surname: "Smith",
	age : 97,
	__proto__ : user
};
let admin = {
	name : "James",
	surnamr: "Hetfield",
	age: 27,
	__proto__ : user
};

for(let prop in admin) {
	let isOwn = admin.hasOwnProperty(prop);
	if (isOwn) {
		console.log(prop + ":" + admin[prop]);
	}
} */


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
let user2 = new user.constructor("John", 94, console.log); // можно создать нового "user" через св-во "constructor"(встроенное св-во)
user.sayAge();
user2.sayAge();
console.log(user.man.walk);
console.log(user2.man.eat);


console.log();
console.log();
console.log();
console.log();
console.log();







      
      
















  






  














































































        


    




     





