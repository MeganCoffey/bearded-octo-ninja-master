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


// FROM CLASS 
// (only getting the filter button when clicked)
// $(document).ready(function() {
    // $(".filter-button").on("click", function() {
      // console.log()
    //  $(this).toggleClass("active");
    // $('.' + this.id).fadeToggle(1000, 'swing', function());
    // };
// };
// NOTES
// function() = callback
// $ = jQuery
// always wrap JS files in $(document).ready();
// console.log(this) = actually see what you are writing with "this"
// fadeToggle = fadeOut/fadeIn
// 'console.table' (better to view objects vs. 'console.log')
// [brackets] = arrays. In arrays are objects.
// it's generally a best practice to use single quotes. You can put double quotes inside of single, vs. the other way around.
// command tab = opens open apps to navigate between



$(document).on('click','.filter-button', function(e) {
//once filter button is clicked, run command, if class active will run functions 
//"Hid these Iamges" 
	var button = $(this).attr('id');

	if ( $(this).hasClass('active')) {

		
		hideTheseImages(button);

	} else {

		showTheseImages(button);

	}

});

$('#animals')
$.getJSON( "http://mks-frontend-gallery.herokuapp.com/", function( json ) {
    var animals = json;
    for (var i = 0; i < animals.length; i++) {
    	console.log(animals[i]);

    	$("#animals").append('<div class="large-4 small-6 columns '+animals[i].animals.join(" ")+'"><img src="'+animals[i].url+'"></div>');
    	for (var j = 0; j < animals[i].animals.length; j++) {
    		if ($('.filter-button').filter('#' + animals[i].animals[j]).length==0) {
    		$(".filters").append('<div class="filter-button individual button active" id="'+animals[i].animals[j]+'">'+animals[i].animals[j]+'</div>');
    		}

    	}
    }
});


function hideTheseImages(imageClass) {
  $('.' + imageClass).fadeOut();
  $('#' + imageClass).removeClass('active');
}

function showTheseImages(imageClass) {
  $('.' + imageClass).fadeIn();  
  $('#' + imageClass).removeClass('active');

}
