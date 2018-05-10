$(document).ready(function() {
  
  
  $('#contact-form').submit(function(e) {
       e.preventDefault();
        $.ajax({
          method: 'POST',
          url: '//formspree.io/alinka_cydik@mail.ru',
          data: $('#contact-form').serialize(),
          datatype: 'json',
       success:function() {
       
        $(this).get(0).reset();
       $('.modal1').hide();
        $('.submit-success').fadeToggle(100);
        
   
      } 
        });     
        
    });

}); 
  
  

  
