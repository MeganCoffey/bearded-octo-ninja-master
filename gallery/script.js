// // Add your code here

// $("#monkey").on("click", function() {
// 	$(this).fadeOut("active");
// 	$(".monkey").fade();
// });

// $("#monkey").on("click", function() {
// 	$(this).toggleClass("active");
// 	$(".monkey").toggle();
// });

// $("#dog").on("click", function() {
// 	$(this).toggleClass("active");
// 	$(".dog").toggle();
// });

// $("#cat").on("click", function() {
// 	$(this).toggleClass("active");
// 	$(".cat").toggle();
// });


$('.filter-button').on('click', function(e) {
//once filter button is clicked, run command, if class active will run functions 
//"Hid these Iamges" 
	var button = $(this).attr('id');

	if ( $(this).hasClass('active')) {

		
		hideTheseImages(button);

	} else {

		showTheseImages(button);

	}

});

// Add your code here
// $(".filterbutton").on("click", function() {
// 	var button = $(this).attr('id');

// 	$(this).attr("active");
// 	if { $(this).attr("active");
// 			 $(".filterbutton").hideTheseImages();
// 	} else {
// 			$(".filterbutton").showTheseImages();
// 	}
// });

function hideTheseImages(imageClass) {
  $('.' + imageClass).fadeOut();
  $('#' + imageClass).removeClass('active');
}

function showTheseImages(imageClass) {
  $('.' + imageClass).fadeIn();  
  $('#' + imageClass).removeClass('active');

}
