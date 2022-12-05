$(document).ready(function() {
    $(".next").on('click', function(){
        var currentSlide = $(".active");
        var nextSlide = currentSlide.next();

        if (nextSlide.length > 0) {
            currentSlide.removeClass('active').css("z-index", "-10");
            nextSlide.addClass('active').css("z-index", "10");
        }
    });
    $(".prev").on('click', function(){
        var currentSlide = $(".active");
        var prevSlide = currentSlide.prev();

        if (prevSlide.length > 0) {
            currentSlide.removeClass('active').css("z-index", "-10");
            prevSlide.addClass('active').css("z-index", "10");
        }
    });
});