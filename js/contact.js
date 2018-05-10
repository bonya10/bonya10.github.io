$(document).ready(function() {
  
  
  $('#contact-form').submit(function(e) {
      
        $.ajax({
          method: 'POST',
          url: 'https://formspree.io/alinka_cydik@mail.ru',
          data: $('#contact-form').serialize(),
          datatype: 'json'

        });     
        
    });

}); 
  
  

  
