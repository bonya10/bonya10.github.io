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
         
             // (1)
var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

var xhr = new XHR();

// (2) запрос на другой домен :)
xhr.open('POST',  'https://formfarm.im/alin4eg10@gmail.com', true);



xhr.send();
 
            
           
$.ajax({
                
          type: 'POST',
    dataType: "text",
    processData: false,
    crossDomain: true,
              
            url: 'https://formfarm.im/alin4eg10@gmail.com',
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
 
  

         
    

        
