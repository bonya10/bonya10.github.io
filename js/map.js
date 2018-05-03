var myMap;
// при успешной загрузке API выполняется соответствующая функция
ymaps.ready(function(){
     myMap = new ymaps.Map("map", {
            center: [53.670286, 23.836715],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

       

       
    
   myMap.geoObjects
        .add(myPlacemark)
        
});
