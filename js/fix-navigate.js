$(function() {
    $('.primary-nav a[href^="/' + location.pathname.split("/")[1] + '"]').parent("li").addClass('active');
    
});
