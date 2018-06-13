$(function() {
  var $btn = $(".btn1"),
      $blocks = $(".modal1");
  
  
   $btn.each(function(a, en) {
    var $eles = $(en);
    $eles.click(function() {
      $btn.not($eles).removeClass("active-menu-item");
      $eles.toggleClass("active-menu-item");
      $blocks.filter(function(b,
        ele) {
        a == b && $(ele).fadeToggle();
        return a != b
      }).hide();
    })
  });
  
   $('html').click(function (event) {
   if ($(event.target).closest('.btn1, .modal1').length) return;
    $btn.filter('.active-menu-item').click()
   });

});
