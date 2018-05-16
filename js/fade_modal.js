
$(#open_modal).mouseup(function() {
    var container = $(".modal1");
    if (container.has(this.target).length === 0){
        container.hide();
    }
});
