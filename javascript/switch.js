//this javascript is used to switch the information panes on the canvas to links to appropriate information

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.font = 'bold 40px Monospace';
ctx.textBaseline = 'top';
ctx.fillText('hello', 10, 10);

function resize() {
	// Our canvas must cover full height of screen
	// regardless of the resolution
	var height = window.innerHeight;
	
	// So we need to calculate the proper scaled width
	// that should work well with every resolution
	var ratio = canvas.width/canvas.height;
	var width = height * ratio;
	
	canvas.style.width = width+'px';
	canvas.style.height = height+'px';
}

window.addEventListener('load', resize, false);
window.addEventListener('resize', resize, false);
