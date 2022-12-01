/*MULTIPLE POINTER: Implement a function called countUniqueValues, 
which accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted. */

function countUniqueValues(arr) {
	let i = 0;

	if (arr.length < 1) {
		return 0;
	}

	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}

	return i + 1;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4

/* AveragePair
Write a function called averagePair. Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.*/
function averagePair(arr, avg) {
	let first = 0;
	let last = arr.length - 1;

	while (first < last) {
		let sumAvg = (arr[first] + arr[last]) / 2;

		if (sumAvg === avg) return true;

		if (sumAvg < avg) {
			first++;
		} else {
			last--;
		}
	}

	return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
