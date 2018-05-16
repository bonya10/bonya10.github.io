

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
