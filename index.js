const inputText = document.getElementById('inputText');
const form = document.querySelector('form');
let value = 0;

form.addEventListener('submit', (e) => {
	e.preventDefault();

	if (inputText.value == '') {
		alert('Please input text');
	} else {

		const inputLength = inputText.value.length;
		const inputContent = inputText.value;

		for (let i = 0; i < inputText.value.length; i++) {

			if (inputContent.charAt(i) == 'a' || inputContent.charAt(i) == 'e' || inputContent.charAt(i) == 'i' || inputContent.charAt(i) == 'o' || inputContent.charAt(i) == 'u') {
				console.log(inputContent.charAt(i));
				value++;
			}

		}
		
		alert(`There are ${value} vowels!`);

	}

	value = 0;
	
});