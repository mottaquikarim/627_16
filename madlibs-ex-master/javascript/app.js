const setValue = ($target, value) => {
	$target.innerHTML = value;
}

function generateMadLib(noun, adj, verb, adverb) {   
   const madlib = `${adj} ${noun}s, how are they ${adverb} ${verb}ed??`;
   return madlib;
}
console.log(1, '-----------------------')
console.log(generateMadLib('chair','sturdy','fold','carefully'))

const $nounInput = document.querySelector('.noun');
console.log($nounInput);

const $adjInput = document.querySelector('.adj');
console.log($adjInput);

const $verbInput = document.querySelector('.verb');
console.log($verbInput);

const $adverbInput = document.querySelector('.adverb');
console.log($adverbInput);

const $output = document.querySelector('.js-madlibs-output');
console.log($output)
// setValue($output, 'TESTING OUTPUT HERE');




const $generate = document.querySelector('.create-madlib');

function onGenerateClicked() {

	console.log($nounInput.value);
	console.log($adjInput.value);
	console.log($verbInput.value);
	console.log($adverbInput.value);

	const madLib = generateMadLib($nounInput.value,$adjInput.value,$verbInput.value,$adverbInput.value);
	$output.innerHTML = madLib;

	$nounInput.value = '';
	$adjInput.value = '';
	$verbInput.value = '';
	$adverbInput.value = '';



}
$generate.addEventListener('click', onGenerateClicked);









