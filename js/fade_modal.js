$(document).ready(function() {
    $(".open_modal").click(function() {
      $(".modal1").fadeToggle('fast');
    });
      $(".modal1").bind("click",function(e){
        if($(e.target).attr("class") != "text")
      $(".modal1").fadeOut('fast');
      })
});

window.addEventListener('DOMContentLoaded', function() {
      var page = document.querySelector(".modal1");
      var shimModalContent = document.querySelector(".shim-modal-content");
      page.addEventListener("click", function(event){
          var target = event.target;
          if(target.closest(".modal-content-window") && !target.closest(".send") && !target.closest(".close"))
          event.stopPropagation();
          else if( target.closest(".shim-modal-content") )
          shimModalContent.classList.remove("shim-modal-show");
          else shimModalContent.classList.add("shim-modal-show");
      });
    });
