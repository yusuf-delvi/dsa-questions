/*Given 2 arrays, create a function that let's a user know(true/false) 
whether these two arrays contains any common items
Examples:
isCommon(['a', 'b', 'c', 'x'], ['z','y','i']) // false
isCommon(['a', 'b', 'c', 'x'], ['z', 'y', 'x']) // true
*/

// === === ===
// Time Took 7000ms
// function isCommon(arr1, arr2) {
// 	const t0 = performance.now();

// 	for (let i = 0; i < arr1.length; i++) {
// 		for (let j = 0; j < arr2; j++) {
// 			if (arr1[i] === arr2[j]) {
// 				return true;
// 			}
// 		}
// 	}

// 	const t1 = performance.now();

// 	console.log(`Performance of this func is ${t1 - t0}`);

// 	return false;
// }

// === === ===
// Time Took 253ms
// function isCommon(arr1, arr2) {
// 	const t0 = performance.now();

// 	const res = arr1.some((item) => arr2.includes(item));

// 	const t1 = performance.now();

// 	console.log(`Performance of this func is ${t1 - t0}`);

// 	return res;
// }

// === === ===
// time Took 10ms
// function isCommon(arr1, arr2) {
// 	const t0 = performance.now();

// 	const arr1L = new Set(arr1);
// 	const arr2L = new Set(arr2);

// 	const combined = new Set([...arr1L, ...arr2L]);

// 	const res = [...arr1L, ...arr2L].length > combined.size;

// 	const t1 = performance.now();

// 	console.log(`Performance of this func is ${t1 - t0}`);

// 	return res;
// }

// === === ===
// Time Took 3ms (Most efficient)
function isCommon(arr1, arr2) {
	const t0 = performance.now();

	let map = {};

	for (let i = 0; i < arr1.length; i++) {
		const item = arr1[i];

		if (!map[item]) {
			map[item] = true;
		}
	}

	for (let j = 0; j < arr2.length; j++) {
		if (map[arr2[j]]) {
			return true;
		}
	}

	const t1 = performance.now();

	console.log(`Performance of this func is ${t1 - t0}`);

	return false;
}

const arrNums1 = [];
const arrNums2 = [];

const s1 = 20000;

for (let i = 0; i < s1; i++) {
	arrNums1.push(i);
}

for (let i = s1; i < s1 * 2; i++) {
	arrNums2.push(i);
}

console.log(isCommon(arrNums1, arrNums2));
