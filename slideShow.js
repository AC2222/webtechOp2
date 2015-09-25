var slideImages = new Array()

//preload all images
slideImages[0] = new Image()
slideImages[0].src = "../images/image1.jpg"
slideImages[1] = new Image()
slideImages[1].src = "../images/image2.jpg"
slideImages[2] = new Image()
slideImages[2].src = "../images/image3.jpg"
slideImages[3] = new Image()
slideImages[3].src = "../images/image4.jpg"
slideImages[4] = new Image()
slideImages[4].src = "../images/image5.jpg"

var playimage = new Image()
playimage.src ="../images/play.png"
var pauzeimage = new Image()
pauzeimage.src ="../images/pauze.png"


var playing=1
var step=0
var timer
var fadingtimer = 0
var starttime
var timertimeremaining = 0
var slidetime = 4000


//function that is called when the slideshow has to move 1 slide forward
function moveslide(){
	clearTimeout(timer)
	clearTimeout(fadingtimer);
	changeImage()
	op = 1
		if (!document.images){
			return
 		}
 		if (step<(slideImages.length-1)){
  		step++
  	}
 		else{
  		step=0
  	}
 		timer=null
 		nomoving =true
 		imagefadeout()
 	
}

//function that is called when the slideshow has to move 1 slide back
function moveslideback(){
	clearTimeout(timer)
	clearTimeout(fadingtimer);
	changeImage()
	op = 1
		if (!document.images){
			return
 		}
 		if (step>0){
  		step--
  	}
 		else{
  		step=slideImages.length-1
  	}
 		timer=null
 		nomoving =true
 		imagefadeout()
}

//function that is called when the slideshow has to stard fading out, when it is done fading out it calls changeimage() en imagefadein()
var op =1
function imagefadeout(){
	fadingtimer = 0
	document.getElementById("slide").style.opacity = op
	
	if (op>0){
		op = op - 0.045
		fadingtimer=setTimeout("imagefadeout()",35)
	}
	else{
		changeImage()
		imagefadein()
		return
	}
}

// changes the image scr of the slide show
function changeImage(){
	document.getElementById("slide").src = slideImages[step].src
}

//calls when the image needs to fade back in, when it is done it checks whether the show is pauzed if it is not it staarts a timeout to move to the next slide
function imagefadein(){
	fadingtimer = 0
	document.getElementById("slide").style.opacity = op
	
	if (op<1){
		op = op + 0.045
		fadingtimer = setTimeout("imagefadein()",35)
	}
	else{
		if (playing===1){
			startTimeMS = (new Date()).getTime();
			timer = setTimeout("moveslide()",slidetime)
		}
		return
	}
}

//if this function is called it checks wether te slideshow is pauzed or not and either pauzes or plays the slide show
function pauzeorplay(){
	if (playing===1){
		if (timertimeremaining===0){
			timertimeremaining = slidetime-((new Date()).getTime()-startTimeMS)

		if (timertimeremaining<=0){
			timertimeremaining=slidetime
		}}
		clearTimeout(timer);
		timer=null
		playing=0
		document.getElementById("playbutton").src =playimage.src;
	}else{
		if(timer===null){
			timer = setTimeout("moveslide()",timertimeremaining)
		}
		timertimeremaining=0
		playing = 1
		document.getElementById("playbutton").src =pauzeimage.src;
	}
	
}

// starts the first timeout when the script is loaded
startTimeMS = (new Date()).getTime();
timer = setTimeout("moveslide()",slidetime);