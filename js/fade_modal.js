
$(#open_modal).mouseup(function (e) {
    var container = $(".modal1");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});
