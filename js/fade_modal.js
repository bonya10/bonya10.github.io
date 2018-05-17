
$('.but').click(function () {
    
    $('#modal1').toggleClass('opened');
});


$(document).mousedown(function(e){
   
    if(e.button == 0 )
{

    if (!$(e.target).parents().andSelf().is('.but')) {
        $("#modal1").removeClass("opened");
    }
    else{
    $('#modal1').toggleClass('opened');}
    
}
    
});





$("#modal1").click(function (e) {
    e.stopPropagation();
});



