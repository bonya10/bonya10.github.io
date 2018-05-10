$(document).ready(function() {
  
  
  $('#contact-form').submit(function(e) {
      
        $.ajax({
          method: 'POST',
          url: 'https://formspree.io/alinka_cydik@mail.ru',"https://formspree.io/you@email.com",
          data: $('#contact-form').serialize(),
          datatype: 'json'
 success:function() {
        e.preventDefault();
        $(this).get(0).reset();
       $('.modal1').hide();
        $('.submit-success').fadeToggle(100);
        }
   
      }  });
    });
  
  

  
