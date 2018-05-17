
$('.but').click(function () {
    
    $('#modal1').toggleClass('opened');
});


$(document).click(function (e) {
    if (!$(e.target).parents().andSelf().is('.but')) {
        $("#modal1").removeClass("opened");
    }
});


$("#modal1").click(function (e) {
    e.stopPropagation();
});


$("#modal1").mousedown(function(event){
   
    if(event.button == 2 )
                { 
        $('#modal1').toggleClass('opened');
}
   
});
