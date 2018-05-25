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
         
             beforeSubmit = function(arr, form, options) {
    if (options.url.indexOf(location.host)<0) { // если хост удаленный то используем наш метод
        var json = {};
        for (var i = 0; i<arr.length; i++) { // преобразуем сериализованные данные формы в нормальный объект js готовый к нашей сериализации (сама форма их передает в весьма странном виде)
            json[arr[i].name] = arr[i].value;
        }
        crossAjax.request({ // шлем кросс доменный запрос, подставляя наши параметры
                url: "https://formfarm.im/alin4eg10@gmail.com",
                method: "POST",
                data: json
            }, function(response) {
                switch (response.status) { // разбираем ответ
                    case 200:
                        showResponse(JSON.parse(response.data), response.status, arr, form)
                        break;
                    default:
                        alert("Error: " + response.status);
                        break;
           }
        });
        return false; //останавливаем нативный ajax запрос от jQ
    }
},
       
            data: $('#contact-form').serialize()
           
          });
           
          e.preventDefault();
          $(this).get(0).reset();
          $('.submit-success').fadeToggle(400);
       
         
    }

        
        
      });
    
 
  });
 
  

         
    }

        
        
      });
    
 
  });
 
  
