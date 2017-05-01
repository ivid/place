// fake enum
var rectSize = 5;
var scaleDefault = 1; // default scale
var scaleZoomed = 5; // scale when zoomed in

// determines scale
var scale = 1;

// selected color for canvas' pixels/boxes (default black)
//var selectedColor = "#000000";
var selectedColor = rgb(0,0,0); //both work

//var sitename = "r/place recreation";
//document.getElementById("navTitle").innerHTML=sitename;


var canvas = document.getElementById("placecanvas");
var ctx = canvas.getContext("2d");

// testing, first pixel
//ctx.imageSmoothingEnabled = false;
//ctx.fillStyle = selectedColor;
//ctx.fillRect(0,0,rectSize,rectSize);


// determine canvas' element offset
var canvasOffset = document.getElementById("canvaswrapper");
var cOffsetLeft = canvasOffset.offsetLeft;
var cOffsetTop = canvasOffset.offsetTop;

console.log("offset left: "+cOffsetLeft+" offset top: "+cOffsetTop);

// display coords - testing purposes
function updateMouseCoordinates(e){
	var x,y;
	
	x = e.clientX - cOffsetLeft;
	y = e.clientY - cOffsetTop;
	
	// update mouse coords
	document.getElementById("mousecoords").innerHTML=("x: "+x+" y: "+y);
}


// place rectangle at mouse position
function placeRectangle(e){
	
	//TODO: ~4px placing error? likely from smoothing!
	
	// determine starting coordinates for rectangle
	var rectCoordX = Math.floor((e.clientX - cOffsetLeft + window.scrollX)/(rectSize*scale)) * rectSize;
	var rectCoordY = Math.floor((e.clientY - cOffsetTop + window.scrollY)/(rectSize*scale)) * rectSize;
	
	// display coords - testing purposes
	document.getElementById("canvasClickCoords").innerHTML=("x: "+rectCoordX+" y: "+rectCoordY);
	
	//ctx.imageSmoothingEnabled = false;
	ctx.fillStyle = selectedColor;
	ctx.fillRect(rectCoordX,rectCoordY,rectSize,rectSize);
	
}

// select color
function changeColor(p){
	switch (p){
		case 0: selectedColor = rgb(255, 255, 255); break;
		case 1: selectedColor = rgb(228, 228, 228); break;
		case 2: selectedColor = rgb(136, 136, 136); break;
		case 3: selectedColor = rgb(34, 34, 34); break;
		case 4: selectedColor = rgb(255, 167, 209); break;
		case 5: selectedColor = rgb(229, 0, 0); break;
		case 6: selectedColor = rgb(229, 149, 0); break;
		case 7: selectedColor = rgb(160, 106, 66); break;
		case 8: selectedColor = rgb(229, 217, 0); break;
		case 9: selectedColor = rgb(148, 224, 68); break;
		case 10: selectedColor = rgb(2, 190, 1); break;
		case 11: selectedColor = rgb(0, 211, 221); break;
		case 12: selectedColor = rgb(0, 131, 199); break;
		case 13: selectedColor = rgb(0, 0, 234); break;
		case 14: selectedColor = rgb(207, 110, 228); break;
		case 15: selectedColor = rgb(130, 0, 128); break;
		default: selectedColor = rgb(255, 255, 255);
	}

	console.log("color number: "+p+" selectedColor: "+selectedColor);
}

// helper function for changing colors, returns CSS color code
function rgb(r,g,b){
	return "rgb("+r+","+g+","+b+")";
}


function toggleScale(){
	var canvasDiv = document.getElementById("canvaswrapper");
	var contentDiv = document.getElementById("content");
	
	// TODO: futher improve
	// due to css' transform:scale width and height of container element do not get updated
	// so unfortunately it has to be done by hardcoding new value
	
	
	if(canvasDiv.classList.contains("canvasScaleZoom"))
	{
		canvasDiv.classList.remove("canvasScaleZoom");
		canvasDiv.classList.add("canvasScaleDefault");

		contentDiv.classList.remove("contentZoom");

		scale = scaleDefault;
	}
	else
	{
		canvasDiv.classList.remove("canvasScaleDefault");
		canvasDiv.classList.add("canvasScaleZoom");

		contentDiv.classList.add("contentZoom");

		scale = scaleZoomed;
	}

	
	//document.getElementById("placecanvas").style.transform = 'scale(0.7,0.7)';
	//document.getElementById("placecanvas").style.transform = 'translate(-100px,-150px)';
	//document.getElementById("placecanvas").style.transform-origin = 'left top';
}