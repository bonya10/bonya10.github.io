$(document).ready(function() {
    $('#contact-form').submit(function(e) {
        var name = $('#inputName')
        var email = $('#inputEmail')
        var message = $('#inputMessage')
      
        if(name.val() == "" || email.val() == "" || message.val() == "") {
          $('.submit-fail').fadeToggle(400);
          return false;
        }
        else {


$.ajax({

url: "https://formfarm.im/alin4eg10@gmail.com",
    crossDomain: true,

    method: "POST",

    data: $(this).serialize(),

    dataType: "json"

});

               e.preventDefault();
          $(this).get(0).reset();
             $('.modal1').fadeToggle(400);
          $('.submit-success').fadeToggle(400);
       
         
    }

        
        
      });
    
 
  });
 
  

         
    

        
