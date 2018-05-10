$(document).ready(function() {
  
  
  $('#contact-form').submit(function(e) {
     
        $.ajax({
          method: 'POST',
          url: '//formspree.io/alinka_cydik@mail.ru',
          data: $('#contact-form').serialize(),
          
            datatype: 'json'
          });
          e.preventDefault();
          $(this).get(0).reset();
          $(this).hide();
          $('.submit-success').fadeToggle(400);
           
        
      });
  });
 
  
