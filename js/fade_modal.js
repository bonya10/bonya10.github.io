$(".but").click(function(e) {
  $('.modal1').toggle();
  e.stopPropagation();
});
$('.modal1').click(function(e) {
  e.stopPropagation();
});
$(document).click(function() {
  $('.modal1').hide();
});
