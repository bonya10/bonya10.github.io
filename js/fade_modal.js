$(function() {
  var $but = $(".but"),
       $btn = $(".btn1"),
     $btn2 = $(".btn2"),
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
    if ($(event.target).closest('.but, .modal1').length) return;
    $but.filter('.active-menu-item').click()
  });
  
   $btn.each(function(a, en) {
    var $elem = $(en);
    $elem.click(function() {
      $btn.not($elem).removeClass("active-menu-item");
      $elem.toggleClass("active-menu-item");
      $blocks.filter(function(b,
        ele) {
        a == b && $(ele).fadeToggle();
        return a != b
      }).hide();
    })
  });
    $('html').click(function(f) {
    if ($(f.target).closest('.btn1, .modal1').length) return;
    $btn.filter('.active-menu-item').click()
 
});
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
  
   $('html').click(function(g) {
    if ($(g.target).closest('.btn2, .modal1').length) return;
    $btn2.filter('.active-menu-item').click()
 
});
 });
