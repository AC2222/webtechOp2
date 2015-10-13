var playimage = new Image()
playimage.src ="../images/play.png"
var pauzeimage = new Image()
pauzeimage.src ="../images/pauze.png"

var slideImages1 = new Array()

slideImages1[0] = new Image()
slideImages1[0].src = "../images/Zwarte-Crossimage1.jpg"
slideImages1[1] = new Image()
slideImages1[1].src = "../images/Zwarte-Crossimage2.jpg"
slideImages1[2] = new Image()
slideImages1[2].src = "../images/Zwarte-Crossimage3.jpg"

var slideImages2 = new Array()

slideImages2[0] = new Image()
slideImages2[0].src = "../images/koningsdagimage1.jpg"
slideImages2[1] = new Image()
slideImages2[1].src = "../images/koningsdagimage2.jpg"
slideImages2[2] = new Image()
slideImages2[2].src = "../images/koningsdagimage3.jpg"

var slideImages3 = new Array()

slideImages3[0] = new Image()
slideImages3[0].src = "../images/dauwpopimage1.jpg"
slideImages3[1] = new Image()
slideImages3[1].src = "../images/dauwpopimage2.jpg"
slideImages3[2] = new Image()
slideImages3[2].src = "../images/dauwpopimage3.jpg"

var slidename1 = "slide1";
var slidename2 = "slide2";
var slidename3 = "slide3";

var slidetime = 4000
var op = 0
var step = 0

// function that is called when the slideshow has to move 1 slide forward
function moveslide(){
	op = 1
	if (!document.images){
		alert("error")
		return
 	}
 		if (step<2){
  		step++
  	}
 		else{
  		step=0
  	}
 		
 	imagefadeout()
 	
}

// function that is called when the slideshow has to stard fading out, when it is done fading out it calls changeimage() en imagefadein()
var op =1
function imagefadeout(){
	document.getElementById(slidename1).style.opacity = op
	document.getElementById(slidename2).style.opacity = op
	document.getElementById(slidename3).style.opacity = op
	if (op>0){
		op = op - 0.045
		setTimeout("imagefadeout()",35)
	}
	else{
		changeImage()
		imagefadein()
		return
	}
}

//changes the image scr of the slide show
function changeImage(){
	document.getElementById(slidename1).src = slideImages1[step].src;
	document.getElementById(slidename2).src = slideImages2[step].src;
	document.getElementById(slidename3).src = slideImages3[step].src;
}

//calls when the image needs to fade back in, when it is done it checks whether the show is pauzed if it is not it staarts a timeout to move to the next slide
function imagefadein(){
	
	document.getElementById(slidename1).style.opacity = op;
	document.getElementById(slidename2).style.opacity = op;
	document.getElementById(slidename3).style.opacity = op;
	
	if (op<1){
		op = op + 0.045
		setTimeout("imagefadein()",35)
	}
	else{
		
			(new Date()).getTime();
			setTimeout("moveslide()",slidetime)
		
		return
	}
}

//starts the first timeout when the script is loaded


setTimeout("moveslide()",slidetime);
