function generateMadLib(noun, adj, verb, adverb) {   
   const madlib = `${adj} ${noun}s, how are they ${adverb} ${verb}ed??`;
   return madlib;
}

function onGenerateClicked() {

	const $i = $('.form-control');
	console.log($i)

	const madLib = generateMadLib(
		$i.eq(0).val(),
		$i.eq(1).val(),
		$i.eq(2).val(),
		$i.eq(3).val(),
	);
	$('.js-madlibs-output').html(madLib);

	$i.val('');

}

$('.create-madlib').click(onGenerateClicked)




