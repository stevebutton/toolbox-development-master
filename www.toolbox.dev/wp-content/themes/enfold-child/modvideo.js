// JavaScript Document

//pause the video when scroll to div

	$('#layerslider_1').layerSlider('start');

function pause() {
    document.getElementById('myVideo1').pause();
	 document.getElementById('myVideo2').pause();
	  document.getElementById('myVideo3').pause();
	$('#layerslider_1').layerSlider('stop'); 
}


//play the video when scroll to #top
function play() {
    document.getElementById('myVideo').play();
	$('#layerslider_1').layerSlider('start');
}



 function videoControl() {
    var myVideo = document.getElementById('myVideo');
    if (myVideo.paused) {
        myVideo.play();
    } else {
        myVideo.pause();
    }
}


/*doStuff(

    document.getElementById("myCircle1") ,

    document.getElementById("myCircle2") ,

    document.getElementById("myCircle3") ,

    document.getElementById("myCircle4")

);
*/
/*
  $("#spritesavplus3").click(function () {

          $('#myVideo')[0].play()
    });


$(function(){

  // Functionality starts here
  $('#spritesavplus3').on('click', function(e){
    $('#myVideo')[0].play()
    });
  })
*/
/*$(document).ready(function(){
 $('#spritesavplus3').on('click', function(e) {
	$("#myVideo").play();
  });
});
*/
$("#spritesavplus3").on('click', function(e) {
	$("#myVideo").play();
});

/////////check if video is in viewport and pause if outside//////////
 function inViewPort (elem) {
        //First get the scroll y position (how far the user scrolled down)
        var scrollY = document.body.scrollTop;
        //Now get the height of the viewport
        var screenH=document.body.clientHeight;
        //Also get the y position of the element
        var yPos=elem.offsetTop;
        //And now calculate the maximal y position for elem when it is still visible
        var maxY=scrollY+screenH;
 
        if (yPos>scrollY && yPos<maxY) {
          //It is in the users viewport
          return true;
        } else {
          //It isn't in the users viewport
          return false;
        }
      }
 
      function checkStart (videoName) {
        var elem = document.getElementById(videoName);
        if (inViewPort(elem)) {
          elem.load();
          elem.play();
        } else if (!elem.ended) {
          setTimeout("checkStart('"+videoName+"');", 100);
        }
      }
/////////check if video is in viewport and pause if outside//////////	  
	  var video = document.getElementById('myVideo'),
    info = document.getElementById('info'),
    fraction = 0.8;

function checkScroll() {
  var x = video.offsetLeft,
      y = video.offsetTop,
      w = video.offsetWidth,
      h = video.offsetHeight,
      r = x + w, //right
      b = y + h, //bottom
      visibleX,
      visibleY,
      visible;

  if (window.pageXOffset >= r ||
      window.pageYOffset >= b ||
      window.pageXOffset + window.innerWidth < x ||
      window.pageYOffset + window.innerHeight < y
     ) {    
    
    info.innerHTML = '0%';
    return;
  }

  visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
  visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

  visible = visibleX * visibleY / (w * h);
  
  info.innerHTML = Math.round(visible * 100) + '%';
  
  if (visible > fraction) {
    video.play();
  } else {
    video.pause();
  }
  
}

checkScroll();
window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);