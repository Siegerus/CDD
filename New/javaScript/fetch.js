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

