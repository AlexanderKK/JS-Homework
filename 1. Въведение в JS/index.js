1.
const sum = (arr) => {
	let result = Number(arr[0]) + Number(arr[1]) + Number(arr[2]);
	console.log(result);
}
sum(['1','2','3']);


2.
function calcDDS(arr) {
	let sum = 0;
	for(const price of arr) {
		sum += Number(price);
	}
	console.log("Sum is: " + sum);
	console.log("DDS: " + (sum * 0.2).toFixed(2));
	console.log("Total price: " + sum * 1.2);
}
calcDDS(['1','2.5','3']);


3.
function getOccurence([string, token]) {
	let counter = 0;
	for (let i = 0; i < string.length; i++) {
		if(string.charAt(i) == token) {
			counter++;
		}
	}
	return counter;
}
console.log(getOccurence(['hello world','l']));


4.
function calcArea(w, h, W, H) {
	const result = (W - w) * H + w * h;
	console.log(result);
}
calcArea(2,4,5,3);


5.
function isLeapYear(year) {
	if(year % 400 == 0 || year % 100 != 0 && year % 4 == 0) {
		return "Yes";
	}
	return "No";
}
console.log(isLeapYear(2020));


6.
const getNumsToN = (n) => {
	let result = "";
	for(let i = 1; i <= n; i++) {
		result += i;
	}
	console.log(result);
}
getNumsToN(10);


7.
function getDistance([x1, y1, x2, y2]) {
	let result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
	console.log(result.toFixed(2));
}
getDistance([1, 2, 3, 4]);


8.
function pairOfBottles(bottles,capacity){
	let result = Math.ceil(bottles / capacity);
	console.log(result);
}
pairOfBottles(20,5);
pairOfBottles(15,7);
pairOfBottles(5,10);


9.
function calcTriangle(a, b, c) {
	let halfP = (a + b + c) / 2;
	let area = Math.sqrt(halfP * (halfP - a) * (halfP - b) * (halfP - c));
	console.log(area.toFixed(2));
}
calcTriangle(4, 5, 6);


10.
function calcCone([radius, height]) {
	let S = Math.sqrt(radius ^ 2 + height ^ 2);
	let B = Math.PI * (radius ^ 2);
	let L = Math.PI * radius * S;
	let A = L + B;
	let V = (1 / 3) * Math.PI * radius ^ 2 * height;
	console.log(V.toFixed(2));
	console.log(A.toFixed(2));
}
calcCone([3, 4]);


11.
function evenOdd(num) {
	if(num % 1 !== 0){
		console.log("Invalid")
	} else if(num % 2 == 0){
		console.log("Even")
	} else if(num % 2 != 0){
		console.log("Odd")
	}
}
evenOdd(4);


12.
function isPrime(num) {
	let counter = 0;
	for (let i = 1; i <= num; i++) {
		if(num % i == 0) {
			counter++;
		}
	}

	if(counter == 2) {
		return true;
	}
	return false;
}
console.log(isPrime(13));


13.
function printDistance(arr) {
	const V1 = Number(arr[0]) / 3.6;
	const V2 = Number(arr[1]) / 3.6;
	const T = Number(arr[2]);
	const S1 = V1 * T;
	const S2 = V2 * T;
	console.log(Math.abs(S1 - S2).toFixed(1));
}
printDistance(['12','23','14'])


14.
const createObj = (arr) => {
	let obj = {};
	let propery = "";
	let value = "";

	for (let i = 0; i < arr.length; i++) {
		if(i % 2 != 0 && i > 0) {
			property = arr[i - 1];
			if(isFinite(arr[i])) {
				value = Number(arr[i]);
			} else {
				value = arr[i];
			}

			obj[property] = value;
		}
	}
	return obj;
}
console.log(createObj(['name', 'Pesho', 'age', '23', 'gender', 'male']));


15.
function largestNumber(arr){
	let first = Number(arr[0]);
	let second = Number(arr[1]);
	let third = Number(arr[2]);
	if(first > second && first > third) {
		console.log(first + " is the greatest");
	} else if(second > first && second > third) {
		console.log(second + " is the greatest");
	} else {
		console.log(third + " is the greatest");
	}
}
largestNumber(['3','4','5']);


16.
function calcNumbers([first, second, operator]) {
	if (operator === '+') {
		console.log(first + second);
	} else if (operator === '-') {
		console.log(first - second);
	} else if (operator === '*') {
		console.log(first * second);
	} else if (operator === '/'){
		console.log(first / second);
	} else{
		console.log("Invalid operation");
	}
}
calcNumbers(['18', '-1', '*'])


17.
function splitStr(string){
	let result = string.toUpperCase().split(/[ ,?!.]+/);

	result = result.join(", ");
	console.log(result.substring(0, result.length - 2));
}
splitStr('Hi, how are you!');