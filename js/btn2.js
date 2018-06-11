$(function() {
  var $btn2 = $(".btn2"),
      $blocks = $(".modal1");
  
     $btn2.each(function(c, eli) {
    var $eli = $(eli);
    $eli.click(function() {
      $btn2.not($eli).removeClass("active-menu-item");
      $eli.toggleClass("active-menu-item");
      $blocks.filter(function(d,
        ely) {
        c == d && $(ely).fadeToggle();
        return c != d
      }).hide();
    })
  });
  
  
    if ($(event.target).closest('.btn2, .modal1').length) return;
    $btn2.filter('.active-menu-item').click()
});
});
