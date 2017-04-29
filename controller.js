// fake enum
var rectSize = 5;

// determines scale
var scaling = 1;

// selected color for canvas' pixels/boxes (default black)
var selectedColor = "#00000";


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
	var rectCoordX = Math.floor((e.clientX - cOffsetLeft + window.scrollX)/(rectSize*scaling)) * rectSize;
	var rectCoordY = Math.floor((e.clientY - cOffsetTop + window.scrollY)/(rectSize*scaling)) * rectSize;
	
	// display coords - testing purposes
	document.getElementById("canvasClickCoords").innerHTML=("x: "+rectCoordX+" y: "+rectCoordY);
	
	//ctx.imageSmoothingEnabled = false;
	ctx.fillStyle = selectedColor;
	ctx.fillRect(rectCoordX,rectCoordY,rectSize,rectSize);
	
}

// select color
function changeColor(p){
	switch (p){
		case 1: selectedColor = "#FF0000"; break;
		case 2: selectedColor = "#00FF00"; break;
		case 3: selectedColor = "#0000FF"; break;
		case 4: selectedColor = "#000000"; break;
		case 5: selectedColor = "#FFFF00"; break;
		case 6: selectedColor = "#FFFFFF"; break;
		default: selectedColor = "#000000"; break;
	};
}


function toggleScale(){
	var doc = document.getElementById("canvaswrapper");
	
	if(doc.classList.contains("canvasScaleZoom"))
	{
		doc.classList.remove("canvasScaleZoom");
		doc.classList.add("canvasScaleDefault");
		scaling = 1;
	}
	else
	{
		doc.classList.remove("canvasScaleDefault");
		doc.classList.add("canvasScaleZoom");
		scaling = 5;
	}
	
	
	//document.getElementById("placecanvas").style.transform = 'scale(0.7,0.7)';
	//document.getElementById("placecanvas").style.transform = 'translate(-100px,-150px)';
	//document.getElementById("placecanvas").style.transform-origin = 'left top';
}