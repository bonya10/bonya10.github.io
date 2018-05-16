jQuery(function ($) {
	$(".but").on("click", function () {
		$(".modal-form").toggle();
		$(".modal1").show();
	});
	$(".modal1").on("click", function (e) {
		$(".modal-form").toggle();
		$(this).hide();
		var elem = document.elementFromPoint(e.clientX, e.clientY);
		if (elem.className != "but") {
			elem.click();
		}
	});
});
