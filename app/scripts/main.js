$(document).ready(function() {
	var changeColor, colorT, scrollio;

	colorT = 0;

	randomColor = function() {
		colorT = Math.floor(Math.random() * 10);
	}
	randomColor();

	changeColor = function() {
		document.body.className = "color" + colorT % 10;
		colorT++;
		setTimeout(changeColor, 3000);
	};
	changeColor();

	$.typer.options.highlightSpeed = 15;
	$.typer.options.typeSpeed = 50;
	$.typer.options.typerInterval = 6000;
	$.typer.options.typeDelay = 50;
	$.typer.options.clearDelay = 1000;
	$('[data-typer-targets]').typer();

	scrollio = function(target, speed) {
		$("html, body").animate({
			scrollTop: $(target).offset().top
		}, speed, "easeOutExpo");
	};

	$(".workheader").on("click", function(e) {
		var target;
		e.preventDefault();
		target = $(this).attr('href');
		scrollio(target, 800);
	});

});
