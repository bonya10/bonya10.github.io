$(function() {
  var $but = $(".btn1"),
      $blocks = $(".modal1");
  
  $but.each(function(i, elem) {
    var $el = $(elem);
    $el.click(function() {
      $but.not($el).removeClass("active-menu-item");
      $el.toggleClass("active-menu-item");
      $blocks.filter(function(j,
        el) {
        i == j && $(el).fadeToggle();
        return i != j
      }).hide();
    })
  }); 
  
  
   $('html').click(function(event) {
    if ($(event.target).closest('.btn1, .modal1').length) return;
    $but.filter('.active-menu-item').click()
    
});
});
