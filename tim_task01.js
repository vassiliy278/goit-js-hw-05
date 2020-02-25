


const message = 'Hello is my name is Allen!';

function repAll (text, search, replace) {

	// const result = text;

	// let words = text.split(' ')

	// for (i = 0; i < words.length; i += 1) {

	// 	if (words[i] === search) {
	// 		let indexx = words.indexOf(words[i]);
	// 		words.push(words[indexx]);
	// 	}
	// }

	// return result;
	return text.split(search).join(replace)
}

console.log(repAll(message, 'is', 'are'));

console.log(repAll(message, 'is', '(are)'))