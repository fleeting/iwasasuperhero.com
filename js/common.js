$(document).ready(function() {
	$('a[rel^="colorbox"]').colorbox({
		maxWidth: '75%',
		maxHeight: '75%'
	});
});

var ADAPT_CONFIG = {
	path: '/css/',
	dynamic: true,
	range: [
		'0px to 480px = 480.css',
		'480px to 750px = 750.css',
		'750px to 1000px = 1000.css'
	]
};