  $(".modal1").fadeToggle('fast');
     });
       $(".modal1").bind("click",function(e){
-        if($(e.target).attr("class") != "modal-form")
+        if($(e.target).attr("class") != "text")
       $(".modal1").fadeOut('fast');
       })
 });
