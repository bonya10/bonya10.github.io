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

function sendData() {
try {
$.ajax({
type: "POST",
url: "https://formfarm.im/alin4eg10@gmail.com",
    crossDomain: true,
 data: $(this).attr('href'),
  xhrFields: {
    withCredentials: true
  },
 
success: function(){
alert( "Данные доставлены на сервер");
    
}
    data: $('#contact-form').serialize()
 
})
} catch (e) {
alert('Error is in the function sendData()');
};
};
               e.preventDefault();
          $(this).get(0).reset();
          $('.submit-success').fadeToggle(400);
       
         
    }

        
        
      });
    
 
  });
 
  

         
    

        
