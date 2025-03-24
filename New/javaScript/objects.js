// Перебор объекта 
let ob = {
    width: 300, 
    height: 200, 
    title: "Menu",
}

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


// Функция возвращает объект с изменёнными ключами
let anyObj = {
    someKey : "smth",
    anyKey : "smthMore",
    aotherKey : 123,
};

let toChangeKeys = (obj) => {
    let mapFromObj = new Map(Object.entries(obj));
    let resultMap = new Map();

    mapFromObj.forEach((value, key, map) => {
        key = key + " changed";
        resultMap.set(key, value);
    });
    obj = Object.fromEntries(resultMap);

    return obj;
}
console.log(toChangeKeys(anyObj));


// элементарный калькулятор
let calculator = {
    read() {
        this.a = +prompt("Введите первое значение", "");
        this.b = +prompt("Введите ворое значение", "");
    },
    sum() {
        return (this.a + this.b);
    },

    mul() {
        return (this.a * this.b);
    }
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


// умножение св-в объекта на 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

let multiplyNumeric = (obj) => {
    for (let key in obj) {
        if(typeof(obj[key]) == "number") {
            obj[key] = obj[key] * 2;
            console.log(obj[key]);
        }
    }
};
multiplyNumeric(menu);


// получение суммы св-в объекта
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

  let toSumValues = () => {
    let sum = 0;
    if (typeof(salaries) !== "object") {
        return;
    }
    for (let key in salaries) {
        sum = sum + salaries[key];
    }
    return sum;
  };
  console.log(toSumValues());



// Получение получение сумм значений св-в вложенных объектовБ которые в свою очередь находятся в массивах
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

  let getSum = (property) => {
    let sum = 0;
    let {sales, development} = company;

    for(let items of sales) {
        sum += items[property];
    }
    for(let keys in development) {
        for( let items of development[keys]) {
            sum += items[property];
        }
    }
    return (isFinite(sum)) ? sum : alert("Sorry, invalid property!");
  };
console.log(getSum("salary")); // обратить внимание - параметром выступает св-во объекта, по этому ""


// Проверка объекта на пустоту
  let schedule = {
    // "111" : "222"
};
let isEmpty = (obj) => {
    for (let key in obj){
        if (obj[key]) {
            console.log("not empty!");
            return false;
        }  
    }
    if (typeof(obj !== "object")) {
        console.log("empty!");
        return true;
    }
};
alert(isEmpty(schedule));


// Вызов методов объекта по цепочке. Для этого добавили "return"
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() {
      alert( this.step );
      return this;
    }
  };

  ladder.up().up().down().showStep().down().showStep();

  
//
let a = 5 + "dfg";
let x = {
    user : "qqq",
    [a] : "hhh", // без скобок было бы просто св-во "a" вместо ссылки на переменную.
};
console.log(x);


// Преобразование объекта в примитив.Если использовать объект как строку, то будет браться key1 ,
// если как число - key2
let obj = {
    key1 : "Lorem",
    key2 : 321,
    anyMethod() {
        this.key2 = this.key2 + 136;
        console.log(this.key2);
        return this;
    },
    /* toString() {                    //с помощью методов
        return this.key1;
    },
    valueOf() {
        return this.key2
    } */
    [Symbol.toPrimitive](hint) {        //с помощью символа
        alert(hint);
        if (hint == "string") {   
            return this.key1
        } else {
            return this.key2
        }
    }
}
alert(obj);
alert(+obj);
alert(obj + 400);

//  Map и Set

// Возвратит Set с уникальными значениями из массива
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O",
  ];
let unique = (arr) => {
    return Array.from(new Set(arr));
};
console.log(unique(values));


// Возвращет массив без анограмм
let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
let aclean = (arr) => {
    let newMap = new Map();  
    for(let items of arr) {
        let sorted = items.toLowerCase().split("").sort().join("");
        newMap.set(sorted, items);
    }
    let finalArr = Array.from(newMap.values()) ;
    return finalArr;
};
console.log(aclean(array));



// Пример прототипного наследования
let user = {
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
}

