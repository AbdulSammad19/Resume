$(document).ready(function () {

	// fading on footer section
	$('#footer-div').click(function () {
		$('#box').fadeToggle(2000);
	});

	// Animation on profile-section
	$('.about-profile-photo').waypoint(function (direction) {
		$('.about-profile-photo').addClass('animate__animated animate__backInDown');
	}, {
		offset: '10%'
	});

	$('.about-profile').waypoint(function (direction) {
		$('.about-profile').addClass('animate__animated animate__zoomInDown');
	}, {
		offset: '60%'
	});


	// Animation on skills section
	$('.skills').waypoint(function (direction) {
		$('.skills').addClass('animate__animated animate__slideInRight');
	}, {
		offset: '50%'
	});

	// Animation on Qualification section
	$('#Education').waypoint(function (direction) {
		$('#Education').addClass('animate__animated animate__flipInY');
	}, {
		offset: '130%'
	});


	// Animation on contact me section
	$('.contact-me').waypoint(function (direction) {
		$('.contact-me').addClass('animate__animated animate__slideInUp');
	}, {
		offset: '170%'
	});

	// CSS on Profile picture
	$('.profile-photo').css({
		'border-radius': '50%', 'height': '200px'
	});

	// top-container
	$('#top-container').css({
		'position': 'relative', 'padding-top': '100px', 'text-align': 'center', 'margin-top': '0',
		'line-height': '2', 'background-color': '#E4F9F5'
	});


	// CSS on hr tag
	$('hr').css({
		'border': 'dotted  #EAF6F6 6px', 'border-bottom': 'none', 'width': '4%'
	});


	// CSS on middle section

	$('#profile-section').css({
		'position': 'relative', 'padding-top': '100px', 'text-align': 'center', 'margin-top': '0',
		'line-height': '2', 'margin': '100px 0', 'font-family': 'times new roman'
	});

	// CSS on h1
	$('#h1').css({
		'margin-top': '0', 'width': '10%', 'margin': '0 auto 0 auto', 'color': '#3ca59d',
		'font-size': '200%'
	});

	//CSS on h2,h3
	$('h2,h3').css({
		'color': '#3ca59d'
	});


	//CSS on Qualification icon
	$('.degree-icon').css({
		'border-radius': '50%', 'height': '200px', 'float': 'right'
	});


	//Css on computer icon
	$('#computer-icon').css({
		'border-radius': '50%', 'width': '200px', 'float': 'left', 'margin-right': '30px'
	});


	// bottom section
	$('#box').css({
		'background-color': '#66bfbf', 'text-align': 'center', 'padding': '50px 0 20px'
	});

	// CSS About Freelancing
	$('.about-freelancing').css({
		'line-height': '2', 'width': '30%', 'margin': 'auto'
	});

});
