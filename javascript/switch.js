/*this script does xxxxxx */

function init()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	canvas.width = 1000;
	canvas.height = 800;
	document.body.style.background="black";
	document.getElementById('myCanvas').style.background = '#E5E4E2';	

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

	var menu1Bounds = (x > (canvas.width/100)*13) && (x < ((canvas.width/100)*32)) && (y > 30) && (y < 65);	

	if(menu1Bounds)
	{
		ctx.clearRect((canvas.width/100)*13, 60, 100, 10);
		ctx.lineWidth=1;
		ctx.fillStyle="#ff0000";
		ctx.font="40px sans-serif";
		ctx.fillText("Menu 1", (canvas.width/100)*13, 60);
		console.log("WORKING");
		   		                						}else{
		//	ctx.lineWidth=1;
		//	ctx.fillStyle="#0B0B61";
		//      ctx.font="40px sans-serif";
		//	ctx.fillText("Menu 1", (canvas.width/100)*13, 60);
	}
}


function choiceClick(ev)
{

}

/* menu */
function mainMenu()
{
	ctx.lineWidth=1;
	ctx.fillStyle="#000000";
	ctx.font="40px sans-serif";
	ctx.fillText("Menu 1", (canvas.width/100)*13, 60);
	console.log("cake");

	ctx.lineWidth=1;
        ctx.fillStyle="#000000";
        ctx.font="40px sans-serif";
        ctx.fillText("Menu 2", (canvas.width/100)*33, 60);

	ctx.lineWidth=1;
        ctx.fillStyle="#000000";
        ctx.font="40px sans-serif";
        ctx.fillText("Menu 3", (canvas.width/100)*53, 60);

	ctx.lineWidth=1;
        ctx.fillStyle="#000000";
        ctx.font="40px sans-serif";
        ctx.fillText("Menu 4", (canvas.width/100)*73, 60);

	ctx.lineWidth=1;
	ctx.fillStyle="#000000";
        ctx.font="40px sans-serif";
        ctx.fillText("Ignore Colour not final design", canvas.width/2, canvas.height/2);

	ctx.lineWidth = 10;	
	ctx.moveTo((canvas.width/100)*10, 70);
	ctx.lineTo((canvas.width/100)*90, 70);
	ctx.strokeStyle='#0000A0';
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
	}else if (ev.offsetX || ev.offset === 0){//opera
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






