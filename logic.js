$(document).ready(function(){

	//Handles the quote text appearing on scroll down
	$(window).on('scroll', function() {

		let element_position = $('.tlt').offset().top;
		let screen_height = $(window).height();
		let activation_offset = 0.5;//determines how far up the the page the element needs to be before triggering the function
		let activation_point = element_position - (screen_height * activation_offset);
		let max_scroll_height = $('body').height() - screen_height - 5;//-5 for a little bit of buffer
    	let y_scroll_pos = window.pageYOffset;
    	let element_in_view = y_scroll_pos > activation_point;
    
    	if(element_in_view) {
  			$('.tlt').textillate({
  				in: {
    			effect: 'rollIn',
    			delayScale: 0.5,
    			delay: 10,
    			shuffle: true
				},
				loop: false,
			});
		}
	});
});