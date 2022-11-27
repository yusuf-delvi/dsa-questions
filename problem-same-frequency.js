/*Write a function called sameFrequency. Given two positive integers,
find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities. */

// function sameFrequency(num1, num2) {
// 	const map = {};

// 	for (let num of num1.toString()) {
// 		map[num] = map[num] ? map[num] + 1 : 1;
// 	}

// 	for (let num of num2.toString()) {
// 		if (!map[num]) {
// 			return false;
// 		}

// 		map[num] -= 1;
// 	}

// 	return true;
// }

function sameFrequency(num1, num2) {
	const stringNum1 = num1.toString();
	const stringNum2 = num2.toString();

	if (stringNum1.length !== stringNum2.length) {
		return false;
	}

	let sumOfNum1 = 0;
	let sumOfNum2 = 0;

	for (let i = 0; i < stringNum1.length; i++) {
		sumOfNum1 += Number(stringNum1[i]);
	}

	for (let i = 0; i < stringNum2.length; i++) {
		sumOfNum2 += Number(stringNum2[i]);
	}

	return sumOfNum1 === sumOfNum2;
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
