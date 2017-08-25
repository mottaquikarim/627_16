(function() { // protect the lemmings!

	// the goal of this pset is to familiarize yourself with basic
	// jquery FUNCTIONS (so stuff that you will use very often/is useful)

	// we will explore the properties of
	//		.css()
	//		.hasClass(), .addClass(), .removeClass()
	// 		.find() vs the $( selector, jQuery object )
	//		.offset() vs .position()
	// 		.width() and .height()
	// 		.html() vs .text()

	// ------------------------------------------------------------
	// please select all the .card HTML elements in the document
	// and save as cards
	const cards = $('.card');
	console.log(cards);

	// now, using the .css() method, please add a
	// border: 1px solid red to each item found in var cards
	// note how this applies to ALL the items in var cards
	cards.css('border', '1px solid red');

	console.log(cards.css('border'))

	// we will now explore another way to easily add css to jQuery elements
	// choose three CSS rules (it can be anything you like)
	// add ALL three rules to the var cards in ONE .css() call
	// feel free to google around for this

	cards.css({
		"background-color": "red",
		"font-size": '28px',
		"text-align": "center",
	});

	// we can also use the .css() method to GET a css property of an element
	// select all the items in the document with class: profile
	const profile = cards.find('.profile'); //  vs. $('.profile')
	console.log(profile)
	// now, create a var called padding and store the padding CSS rule for the profile
	// var. what kind of variable is this? a number? string? boolean? array? object?
	const profilePaddingRule = profile.css('padding');
	console.log(profilePaddingRule)
	console.log(typeof profilePaddingRule);

	// ------------------------------------------------------------
	// the .css() class is awesome and all - but from a performance perspective
	// it's not all the efficient. (The reason behind this is that adding inline styles
	// forces the browser to 'repaint' the browser viewport, which is very performance 
	// intensive). Instead, it is recommended that we write our styles in classes and 
	// simple add or remove them as necessary. This keeps code clean *and* efficient
	// using the var cards from earlier, add a class to each item called 'card-class-2'
	// with the .addClass() method

	// now, create a var called cardClass2 and select all the items with class: card-class-2
	// using the removeCLass method, remove the class: card-class-2
	const cardClass2 = $('.card-class-2');

	// GOTCHA: do NOT add a '.' if using the addClass, removeClass, or hasClass methods
	cardClass2.removeClass('card-class-2');

	// console.log the var cardClass2 now that you've removed the class: card-class-2
	// see anything interesting/worth noting?

	// please select all LIs that are the children of id: page-header
	const pageHeaderLIs = $('#page-header li');
	// using a for loop, loop through the items here and use the .hasClass method to find
	// the LI item that has the class: active
	// NOTE: what does the .hasClass() method return?

	// ------------------------------------------------------------
	// using the .find() method on var cards, please find elements with class: profile
	const profiles = cards.find('.profile');
	console.log(profiles)
	// using the .find() method on var cards, please find elements with class: tags
	const tags = cards.find('.tags');
	console.log(tags)
	// using the .find() method on var tags, please find all anchor tags
	const anchors = cards.find('a');
	console.log(anchors)
	// using the .find() method on var anchors, find all span tags
	const spans = cards.find('span');
	console.log(spans)
	// console.log out var spans - what do you see? can you think of a test we can do,
	// with an if statement, that could reliably tell us if any items with your selector was found?

	// ------------------------------------------------------------
	// .offset() and .position() are ways to get the position of a jquery element 
	// here's a good article about this: http://stackoverflow.com/questions/3202008/jquery-difference-between-position-and-offset
	// basically, .position() is relative to the parent whereas .offset() is relative to the viewport

	// let's put this to the test - using jquery, grab the last item from var cards
	const lastItem = cards.last();
	console.log(lastItem);

	// call the .offset() and the .position() methods on var lastitem
	var lastItemPos = lastItem.position();
	var lastItemOffs = lastItem.offset();
	// console.log both vars: lastItemPos and lastItemOffs
	console.log('lastItemPos...', lastItemPos, lastItemPos.left);
	console.log('lastItemOffs...', lastItemOffs);

	// you will see that they are objects - create 4 vars that will each contain
	// one of the properties of each object
	const lastItemPosLeft = lastItemPos.left; 
	const lastItemPosTop = lastItemPos.top;
	const lastItemOffsLeft = lastItemOffs.left;
	const lastItemOffsTop = lastItemOffs.top;
	// are the property top of the .offset() and .position() the same? 
	// how about the property lefts? can you explain why or why not?
	// (again, food for though: no need to actually jot down any particular answer here)

	// ------------------------------------------------------------
	// for the var profiles, please use the .width() and .height() methods to
	// store width and height
	const  profileWid = profile.width();
	const profileHeight = profile.height();
	console.log(profileWid, profileHeight)
	// does this valye reflect what you get if you try to find dimensions using Chrome Dev Tools?
	// if not, can you explain why not? (food for thought)
	// what kind of variable type is profileWid and profileHeight? 
	// use the .css() method to grab the height and width now
	var cssProfileWid, cssProfileHeight;
	// what type of variable is cssProfileWid and cssProfileHeight?

	// ------------------------------------------------------------
	// select the first LI item in var cards
	// using the .html() method, update the html code to
	// <strong>Hello Wrold</strong>

	// select the second LI item in var cards
	// do the same as above, but with the .text() method
	// whats the difference here?
})();

// const onOffline = () => {
// 	$('body').hide();
// }
// window.addEventListener('offline', onOffline);

// const onOnline = () => {
// 	$('body').show();
// }
// window.addEventListener('online', onOnline);












