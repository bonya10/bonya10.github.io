$(document).ready(function() {
  $("#dialog").dialog({
    autoOpen: false,
    show: {
        effect: "blind",
        duration: 1000
    },
    hide: {
        effect: "explode",
        duration: 1000
    }
});
  
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
          url: '//formspree.io/alin4eg10@gmail.com',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
       $('.modal1').remove();
          $( function() {
    $( "#dialog" ).dialog("open");
  } );
      }
    });
  
  $('.submit-fail, .submit-success').click(function() {
    $(this).hide();
  })
});
  
