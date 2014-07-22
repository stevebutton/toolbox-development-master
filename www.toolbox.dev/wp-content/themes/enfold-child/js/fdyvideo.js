
var iframe = document.getElementById('video1');
var iframe2 = document.getElementById('video2');
var iframe3 = document.getElementById('video3');


var player = $f(iframe);
var player2 = $f(iframe2);
var player3 = $f(iframe3);




var pauseButton = document.getElementById("pause-button");
pauseButton.addEventListener("click", function() {
  player.api("pause");
/*  jQuery('#layerslider_13').layerSlider('stop'); 
*/});

var pauseButtonA = document.getElementById("pause-buttonA");
pauseButtonA.addEventListener("click", function() {
  player.api("pause");
  jQuery('#layerslider_13').layerSlider('stop'); 

});

var pauseButtonB = document.getElementById("pause-buttonB");
pauseButtonB.addEventListener("click", function() {
  player.api("pause");
  jQuery('#layerslider_13').layerSlider('stop'); 

});


var pauseButton2 = document.getElementById("pause-button2");
pauseButton2.addEventListener("click", function() {
  player2.api("pause");
/*  jQuery('#layerslider_13').layerSlider('stop'); 
*/
});

var pauseButton2A = document.getElementById("pause-button2A");
pauseButton2A.addEventListener("click", function() {
  player2.api("pause");
  jQuery('#layerslider_13').layerSlider('stop'); 

});

var pauseButton2B = document.getElementById("pause-button2B");
pauseButton2B.addEventListener("click", function() {
  player2.api("pause");
  jQuery('#layerslider_13').layerSlider('stop'); 

});
var pauseButton3 = document.getElementById("pause-button3");
pauseButton3.addEventListener("click", function() {
  player3.api("pause");
/*  jQuery('#layerslider_13').layerSlider('stop'); 
*/
});

var pauseButton3A = document.getElementById("pause-button3A");
pauseButton3A.addEventListener("click", function() {
  player3.api("pause");
  jQuery('#layerslider_13').layerSlider('stop'); 

});

var pauseButton3B = document.getElementById("pause-button3B");
pauseButton3B.addEventListener("click", function() {
  player3.api("pause");
  jQuery('#layerslider_13').layerSlider('stop'); 

});

  


