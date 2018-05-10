$(document).ready(function() {
  
  
  $('#contact-form').submit(function(e) {
      var name = $('#inputName')
      var phone = $('#inputPhone')
      var message = $('#inputMessage')
    
      if(name.val() == "" || phone.val() == "" || message.val() == "") {
        $('.submit-fail').fadeToggle(400);
        return false;
      }
      else {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/alinka_cydik@mail.ru',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
       $('.modal1').hide();
        $('.submit-success').fadeToggle(400);
     
   
      }
    });
  
  $('.submit-fail, .submit-success').click(function() {
    $(this).hide();
  })
});
  
