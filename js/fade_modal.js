
$('.but').click(function () {
    
    $('#modal1').toggleClass('opened');
});

$(document).click(function (e) {
    if (!$(e.target).parents().andSelf().is('.but')) {
        $("#modal1").removeClass("opened");
    }
});

$("form").mousedown(function(event){
  $("form" && "form".children()).each(function(){
    if(event.button == 2){

    $('#modal1').toggleClass('opened');}
    

     });
});





$("#modal1").click(function (e) {
    e.stopPropagation();
});



