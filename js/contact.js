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
var url = 'https://formfarm.im/alin4eg10@gmail.com';

    function doCallOtherDomain(){

        var XHR = window.XDomainRequest || window.XMLHttpRequest
        var xhr = new XHR();
        
        xhr.open('POST', url, true);

        // замена onreadystatechange
        xhr.onload = function() {
            document.getElementById('response').innerHTML = xhr.responseText
        }

        xhr.onerror = function() {
            alert("Error")
        }
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send("site="+window.location.hostname)
    }


    function callOtherDomain() {
        try {
            doCallOtherDomain()
        } catch (e) {
            alert("В этом браузере данная фича не поддерживается.")
        }
    }          e.preventDefault();
          $(this).get(0).reset();
          $('.submit-success').fadeToggle(400);
       
         
    }

        
        
      });
    
 
  });
 
  

         
    

        
