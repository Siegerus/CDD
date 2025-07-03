// Отправка fetch запроса
fetch(`https://api.github.com/users/iliakan`)
    .then((response) => response.json())
    .then((user) => {
        return new Promise((resolve) => {
            let elem = document.createElement("img");
            elem.src = user.avatar_url;
            elem.classList.add("section__img");
            document.body.appendChild(elem);
            resolve(elem)
            setTimeout(() => document.body.removeChild(elem), 2000)
        }).then((elem) => alert(`Через 2с ${elem} будет удалён со страницы!`));
    });



// Более оптимизированная запись fetch запроса
let LoadRequest = (url) => {
    return fetch(url).then((response) => response.json());
};
let getImage = (url) => {
    return new Promise((resolve) => {
        let elem = document.createElement("img");
        elem.src = url;
        elem.classList.add("section__img");
        document.body.appendChild(elem);

        setTimeout(() => {
            resolve(elem);
            document.body.removeChild(elem);
        }, 3000);
    });
}
LoadRequest(`https://api.github.com/users/iliakan`)
    .then((json) => getImage(json.avatar_url))
    .then((elem) => console.log(`${elem} удалён со страницы!`));



// 
async function LoadRequest(url) {
	let response = await fetch(url);
	let json = await response.json();

	let setImage = await function setImage() {
		let elem = document.createElement("img");
		elem.src = json.avatar_url;
		elem.classList.add("section__img");
        document.body.appendChild(elem);
		return elem;
	}(); 

	await new Promise ((resolve) => {
		setTimeout(resolve, 3000);
	}).then(() => console.log(`${setImage} удалён со страницы!`));

	document.body.removeChild(setImage);	
}
LoadRequest(`https://api.github.com/users/iliakan`);



// Promise.all с массивом из fetch запросов
let urls = [
	'https://api.github.com/users/iliakan',
	'https://api.github.com/users/remy',
	'https://api.github.com/users/jeresig'
  ];

let arr = urls.map((item) => fetch(item));

Promise.all(arr)
  .then((responses) => {
	for(let items of responses) {
		console.log(items.url + " : " + items.status);
	}
	return responses;
  })
  .then((responses) => Promise.all(responses.map((item) => item.json())))
  .then((responses) => responses.forEach((item) => console.log(item.id)))
  .catch(() => {
	throw new Error("this is Error!");
  });


// Работа с кэшем
let loadData = () => {
	let map = new Map();
	console.log(map)
	let wrapper = (url) => {
		return fetch(url)
			.then((response) => response.json())
			.then((result) => {
				if(map.has(url)) {
					console.log("to get!");
					return Promise.resolve(map.get(url))
				} 
				console.log("to set!");
				return map.set(result.url, result.name);
			});
	}
	return wrapper;
}
let f = loadData();
f('https://api.github.com/users/remy');
f('https://api.github.com/users/iliakan');
f('https://api.github.com/users/si');


//
let toCachedFn = () => {
	let cache = new Map();
	let closeur = (url) => {
		return fetch(url)
			.then((response) => response.json())
			.then((res) => {
				cache.set(res.name, res.avatar_url);
				console.log(cache);
				return res
			})
			.then((res) => {
				let img = document.createElement("img");
				img.src = res.avatar_url;
				document.body.appendChild(img);
			});
	};
	return closeur;
};
let fd = toCachedFn();
fd('https://api.github.com/users/remy');
fd('https://api.github.com/users/iliakan');
fd('https://api.github.com/users/jeresig');



// Получаем данные с сервера в json
let response = fetch("https://jsonplaceholder.typicode.com/posts");
let resObj;
response.then((response) => {return response.json()})
		.then((json) => {
			resObj = json.map((item, i) => {
				return {
					["Number " + (i + 1)]: item.title,
				}
			});
	console.log(resObj);
});


// Получаем данные с сервера в blob
let responsee = fetch("https://jsonplaceholder.typicode.com/posts");
response.then((response) => {return responsee.blob()})
		.then((blob) => {	
			let a = document.createElement("a");
			a.href = URL.createObjectURL(blob);
			a.download = "fileName.txt";
			a.click();
		});


// отправка объекта на сервер
let submitButton = document.querySelector("body > button");
let obj = {
	user : "Alex",
	age: 28,
}
submitButton.addEventListener("click", () => { 
	async function toSend(obj) {
		let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			headers: {
				"Content-Type" : "application/json;charset=utf-8",
			},
			body: JSON.stringify(obj),
		});
		let result = await response.json();
		console.log(result);
	}
	toSend(obj);
});


//Отправка изображения на сервер через blob
let canvasImg = document.querySelector("body > img");
let canvas = document.getElementById("canvas");
let clickItem = document.querySelector("body > div.any-item1");
async function toFetch() {
	function crateCanvas() {
		let context = canvas.getContext("2d");
    	context.drawImage(canvasImg, 100, 100);
	}
	crateCanvas();
	let blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
	let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: blob,
	});
	let result = await response.json();
	console.log(result);
}
clickItem.addEventListener("click", toFetch)



// задача с получением массива объектов пользователей гитхаб по массиву из логинов
let clickItemm = document.querySelector("body > div.any-item1");
// моё решение.
async function getUsers(users) {
	let res = [];
	let responses = await Promise.all(users.map((item) => {
		return fetch(`https://api.github.com/users/${item}`);
	})).then((responses) => {
			responses.forEach(item => {
			let json = item.json();
			if(item.status !== 200) {
				res.push(null)
			} else {
				res.push(json);
			} 
		});
		
	})
	.catch((responses) => {return null});
	let results = await Promise.all(res);
	console.log(results);
	return results;
}
// Улучшеное решение без цикла forEach внутри, а просто сразу в map
/* async function getUsers(users) {
	let arr = [];
	let urls = await Promise.all(
		users.map(item => {
			return fetch(`https://api.github.com/users/${item}`)
			.then((responses) => {
				if(responses.status !== 200) arr.push(null);
				else arr.push(responses.json());
			})
			.catch((responses) => {return null});
		})
	) 
	let results = await Promise.all(arr);
	console.log(results);
	return results;
} */

/* // решение из учебника
async function getUsers(names) {
  let jobs = [];
  for(let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      successResponse => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      }
    );
    jobs.push(job);
  }
  let results = await Promise.all(jobs);
  console.log(jobs);
  return results;
} */
clickItemm.addEventListener("click", () => getUsers(["mojombo", "defunkt", "qwqqqwwq"]));