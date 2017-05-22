//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



//gallery
$(document).ready(function(){

	$('.filter').not('.appdesign').hide(1);
			$('.filter').filter('appdesign').show('3000');
			
	
	
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        $(this).addClass('active');
        
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        
    });
    
    if ($(".filter-button").removeClass('active')) {
$(this).removeClass("active");
}
$(this).addClass("active");

});





