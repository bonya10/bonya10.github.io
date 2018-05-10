$(document).ready(function() {
  
  
  $('#contact-form').submit(function(e) {
     
        $.ajax({
          method: 'POST',
          url: '//formspree.io/alin4eg10@gmail.com',
          data: $('#contact-form').serialize(),
          
            datatype: 'json'
          });
          e.preventDefault();
          $(this).get(0).reset();
          $(this).hide();
          $('.submit-success').fadeToggle(400);
           
        
      });
  });
 
  
