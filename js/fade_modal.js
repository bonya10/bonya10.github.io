
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



