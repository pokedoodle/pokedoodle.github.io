//Makes sure that that the ending sound will only play once.
var playEnd = true;

//+++Ending Function to handle the "!!!" animation.
function endFunc(){
  seconds.style.fontSize = "9vw";
  timerDiv.style.left = "82.5%";
  timerDiv.style.top = "9.5%";
  if (currentTime ===4 ){
    seconds.style.fontSize = "10vw";
    timerDiv.style.left = "82%";
    timerDiv.style.top = "9%";
     playEnd = true;
  }  else if (currentTime ===3){
  endPointIcon.innerHTML = "❕❕❕";
  endPoint.style.top = "20%";
  endPoint.style.left = "45%";
  seconds.style.fontSize = "9vw";
  timerDiv.style.left = "82.5%";
  timerDiv.style.top = "9.5%";
  //add clap sound effect //low
  } else if (currentTime===2){
    endPointIcon.innerHTML = "❕❕";
    endPoint.style.left = "47%";
    seconds.style.fontSize = "10vw";
    timerDiv.style.left = "82%";
    timerDiv.style.top = "9%";
    //add clap sound effect //medium
  } else if (currentTime ===1){
    endPointIcon.innerHTML = "❕";
    endPoint.style.left = "48%";
    seconds.style.fontSize = "9vw";
    timerDiv.style.left = "82.5%";
    timerDiv.style.top = "9.5%";
    //add clap sound effect //full
  } else if (currentTime === 0){
    endPointIcon.innerHTML = "";
    if (sndOn &&  playEnd){
      sndSend.volume = 0.4;
      sndSend.play();
       playEnd = false;
    }
  }
}

//Resets the "!!!" when clearing the page during the animation
function resetPoints(){
  endPointIcon.innerHTML = "";
}
