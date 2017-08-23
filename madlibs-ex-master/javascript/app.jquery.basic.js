function generateMadLib(noun, adj, verb, adverb) {   
   const madlib = `${adj} ${noun}s, how are they ${adverb} ${verb}ed??`;
   return madlib;
}

const $nounInput = $('.noun');
console.log($nounInput);

const $adjInput = $('.adj');
console.log($adjInput);

const $verbInput = $('.verb');
console.log($verbInput);

const $adverbInput = $('.adverb');
console.log($adverbInput);

const $output = $('.js-madlibs-output');
console.log($output)

const $generate = $('.create-madlib');

function onGenerateClicked() {

	console.log($nounInput.val());
	console.log($adjInput.val());
	console.log($verbInput.val());
	console.log($adverbInput.val());

	const madLib = generateMadLib($nounInput.val(),$adjInput.val(),$verbInput.val(),$adverbInput.val());
	$output.html(madLib);

	$nounInput.val('');
	$adjInput.val('');
	$verbInput.val('');
	$adverbInput.val('');



}
// $generate.on('click', onGenerateClicked);
$generate.click(onGenerateClicked)




