
// (function($) {

// 	var	$window = $(window),
// 		$body = $('body');

// 	// Breakpoints.
// 		breakpoints({
// 			wide:      [ '1281px',  '1680px' ],
// 			normal:    [ '981px',   '1280px' ],
// 			narrow:    [ '841px',   '980px'  ],
// 			narrower:  [ '737px',   '840px'  ],
// 			mobile:    [ '481px',   '736px'  ],
// 			mobilep:   [ null,      '480px'  ]
// 		});

// 	// Play initial animations on page load.
// 		$window.on('load', function() {
// 			window.setTimeout(function() {
// 				$body.removeClass('is-preload');
// 			}, 100);
// 		});

// })(jQuery);

function seeMore() {
	let cMore = document.getElementById("more");
	let btnText = document.getElementById("seemore");
	if (cMore.style.display!="block") {
		cMore.style.display= "block"
		btnText.innerText = "See Less";
	}else{
		cMore.style.display = "none";
		btnText.innerHTML = "See More";

	}
}

function sayThankYou() {
	document.getElementById("thankyou").style.display="block";
	document.getElementById("contact").style.display="none";
	
}

