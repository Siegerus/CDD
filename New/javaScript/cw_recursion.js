// сумма вложенных массивов 
let sumNested = (arr) => {
	let result;
	if(Array.isArray(arr)) {
		result = arr.reduce((sum, value) => {
			return sum + sumNested(value); 
		}, 0);
		return result;
	} else 
		return arr;
};
console.log(sumNested([1, [2, [3, [4]]]]));