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
          type: 'GET',
    dataType: "text",
    processData: false,
    crossDomain: true,
            url: '//formfarm.im/alin4eg10@gmail.com',
             data: $(this).attr('href'),
  xhrFields: {
    withCredentials: true
  },
  success: function(out) {
    console.log(out);
  },
            data: $('#contact-form').serialize()
           
          });
           
          e.preventDefault();
          $(this).get(0).reset();
          $('.submit-success').fadeToggle(400);
       
         
    }

        
        
      });
    
 
  });
 
  
