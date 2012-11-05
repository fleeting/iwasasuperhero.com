$(document).ready(function() {
	$('a[rel^="colorbox"]').colorbox({
		maxWidth: '75%',
		maxHeight: '75%'
	});

	var heroSayings = ['Currently traveling at the speed<br />of one second per second.', 'A former masked superhero who now devotes<br />most of his time to the world wide web.'];
	var index = Math.floor(Math.random() * heroSayings.length);
	$('.hero p').html(heroSayings[index]);
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