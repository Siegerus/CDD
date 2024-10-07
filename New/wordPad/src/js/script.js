let block = Array.from(document.querySelectorAll(".test"));
let secondBlock = Array.from(document.querySelectorAll(".test2"));
let contentBox = document.createElement('div'),
input = document.getElementsByTagName('input')[0];
contentBlock = document.querySelector(".content-block"),
emptyBlock = document.querySelector(".content-block_empty"),
blockItem = Array.from(document.querySelectorAll(".content-block__item"));
btn = document.getElementsByTagName("button")[0];
index = 1;



block.forEach(function(item) {
	item.addEventListener("click" , function(e) {

	for (let i = 0; i < block.length - index; i++) {
		block[i].style.backgroundColor = "coral";
		
};
});
	
});



document.body.appendChild(contentBox);
contentBox.classList.add("contentBox");



function getValue() {
input.addEventListener("input", function() {
	let value = input.value;
	contentBox.textContent = value;
});
};
getValue();


btn.addEventListener("click", function () {
	let blockHtml = contentBlock.innerHTML;
	emptyBlock.innerHTML = blockHtml;
});









console.log(btn);


