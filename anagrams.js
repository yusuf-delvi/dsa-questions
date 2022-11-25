/* Given Two strings, write a function to determine if the
second string is an anagram of the first. An anagram is
a word, phrase, or name formed by rearranging the letters
of another, such as cinema, formed from iceman.*/
// validAnagram('', '') // true

function validAnagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	const mapOfStr1 = {};
	const mapOfStr2 = {};

	for (let letter of str1) {
		mapOfStr1[letter] = mapOfStr1[letter] ? mapOfStr1[letter] + 1 : 1;
	}

	for (let letter of str2) {
		mapOfStr2[letter] = mapOfStr2[letter] ? mapOfStr2[letter] + 1 : 1;
	}

	for (let letter in mapOfStr2) {
		if (!mapOfStr1[letter]) {
			return false;
		}

		if (mapOfStr1[letter] !== mapOfStr2[letter]) {
			return false;
		}
	}

	return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
