//Variable to clear the interval
var timeInterval;

//+++Main Timer function
function timerFunc(){
  emojiTimer(); //Updates the emoji clock with function below
  clearInterval(timeInterval);
  timeInterval = setInterval(function(){
  currentTime--;
  emojiTimer();
  if (currentTime <= 0 || inSetup === true){ //When timer ends or in settings
    clearInterval(timeInterval); //Stops timer
    timerStart = false;
    currentTime = 0;
    seconds.innerHTML=clockArr[currentTime];
    stopDraw.style.display="none";
    submit.style.left="8%";
    picPoke.style.left="8%";
    stopDraw.style.display="block";
    stopDraw.style.left="25%";
    stopDraw.style.width="55%";
    }
  },2000); //Fires every 2 seconds.
};


//+++Emoji Clock Function
function emojiTimer(){
  seconds.innerHTML=clockArr[currentTime]; //Updates the clock by checking the clock array with the current time. This is one line. It used to be 30.
  if (sndOn){
    sndClockTick.volume = 0.2;
    sndClockTick.play();
  }
}

//++Clock Slider Function
//Changes the slider clock emoji depending on slider value.
function changeSliderclock(){
  document.getElementById('timeSel').innerHTML = clockArr[timeSelect.value];
}

//Button click for reducing time
function clockDwn(){
  if (sndOn){
    sndSdwn.play();
  }
  timeSelect.value--;
}

//Button click for increasing time
function clockUp(){
  if (sndOn){
    sndSup.play();
  }
  timeSelect.value++;
}
