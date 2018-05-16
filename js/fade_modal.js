$(document).ready(function() {
    $(".open_modal").click(function() {
      $(".modal1").fadeToggle('fast');
    });
      $(".modal1").bind("click",function(e){
        if($(e.target).attr("class") != "modal-form")
      $(".modal1").fadeOut('fast');
      })
});
