/*this script does xxxxxx */

function init()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	canvas.width = 1200;
	canvas.height = 800;
	document.body.style.background="black";
	document.getElementById('myCanvas').style.background = '#0B6121';	

	canvas.addEventListener('mousemove', choiceHover, false);
        canvas.addEventListener('mousedown', choiceClick, false);

	mainMenu();
}


/*highlights menu or item hovering over*/
function choiceHover(ev)
{
	var x, y;
	var pos = mouseLoc(ev);
	x = pos[0];
	y = pos[1];

	var menu1Bounds = (x > 175) && (x < 300) && (y > 30) && (y < 65);	

	if(menu1Bounds)
	{
		ctx.lineWidth=1;
        	ctx.fillStyle="#ff0000";
	        ctx.font="40px sans-serif";
        	ctx.fillText("Menu 1", 140, 60);
	}else{
		ctx.lineWidth=1;
        	ctx.fillStyle="#0B0B61";
	        ctx.font="40px sans-serif";
        	ctx.fillText("Menu 1", 140, 60);
	}
}


/*selects menu or item hovering over at the time */
function choiceClick(ev)
{

}

/* menu */
function mainMenu()
{
	ctx.lineWidth=1;
	ctx.fillStyle="#0B0B61";
	ctx.font="40px sans-serif";
	ctx.fillText("Menu 1", 140, 60);
	console.log("cake");

	ctx.lineWidth=1;
        ctx.fillStyle="#0B0B61";
        ctx.font="40px sans-serif";
        ctx.fillText("Menu 2", 340, 60);

	ctx.lineWidth=1;
        ctx.fillStyle="#0B0B61";
        ctx.font="40px sans-serif";
        ctx.fillText("Menu 3", 540, 60);


	ctx.lineWidth=1;
        ctx.fillStyle="#0B0B61";
        ctx.font="40px sans-serif";
        ctx.fillText("Menu 4", 740, 60);
	
	ctx.lineWidth=1;
        ctx.fillStyle="#0B0B61";
        ctx.font="40px sans-serif";
        ctx.fillText("Menu 5", 940, 60);

	ctx.lineWidth=1;
        ctx.fillStyle="#0B0B61";
        ctx.font="40px sans-serif";
        ctx.fillText("Ignore Colour not final design", canvas.width/2, canvas.height/2);

	ctx.lineWidth = 10;	
	ctx.moveTo(100, 70);
	ctx.lineTo(1100, 70);
	ctx.strokeStyle='#610B0B';
	ctx.stroke();
}








/////////////////////////////////////////////// Mouse location ///////////////////////////////////
var mouseLoc = function(ev)
{
	var x, y;

	if(ev.layerX || ev.layerY === 0)
	{//firefox
		x = ev.layerX;
		y = ev.layerY;
	}
	else if (ev.offsetX || ev.offset === 0)
	{//opera
		x = ev.offsetX;
		y = ev.offsetY;
	}
	
	return [x, y];
}

/**
* Used for getting mouse co ordinates and displaying them on screen
*/
function mousePos(ev)
{
	var x, y;
	var pos = mouseLoc(ev);
	x = pos[0];
	y = pos[1];
	
	var mouseP = document.getElementById("mousePos");
	mouseP.innerHTML = ("x= " + x + ", y= " + y);
	mouseP.style.backgroundColor = 'white';
}











