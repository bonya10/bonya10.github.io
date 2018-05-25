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
    type: 'POST',
    dataType: "text",
    crossDomain: true,
    url: 'https://formfarm.im/alin4eg10@gmail.com',
    success: function (responseData, textStatus, jqXHR) {
        var authResult = JSON.parse(
            responseData.replace(
                '{"AuthenticateUserResult":"', ''
            ).replace('}"}', '}')
        );
        console.log("in");
    },
    error: function (responseData, textStatus, errorThrown) {
        alert('POST failed.');
    },

 
            data: $('#contact-form').serialize()
           
          });
               e.preventDefault();
          $(this).get(0).reset();
          $('.submit-success').fadeToggle(400);
       
         
    }

        
        
      });
    
 
  });
 
  

         
    

        
