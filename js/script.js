$(document).ready(function() {
    $(document).delegate('button#toTop', 'click', function () {
        $('html, body').stop().animate({ scrollTop : 0 }, 500);
        return false;
    });    
}); 

