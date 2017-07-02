//+++ Settings func button

 //Brings up a window to goto settings
function settings() {
  RUSure.style.display="block";
  RUSure.style.left="40%";
  if (sndOn){
    sndCErase.play();
  }
  stopDraw.style.display = "block";
  stopDraw.style.height = "100%";
  stopDraw.style.top = "0px";
}

//Deletes the drawing and resets the CSS if selects Yes
function yesSettings(){
  RUSure.style.left="-50%";
  if (sndOn){
   sndyesErase.play();
 }
  resetClockPos(); //Resets clock CSS
  resetPoints();
  inSetup = true;
  photo.style.bottom='0';
 bottom.style.display='none';
 colours.style.display='none';
 stopDraw.style.display = "block";
 stopDraw.style.height = "90%";
 stopDraw.style.top = "5%";
 title.style.display = "block";
 title.style.height = "5%";
 pen.style.display = "none";
 ghostName.style.color = "rgb(250, 250, 250)";
 RegionAsk.style.left="44%";
 selectedTimeDiv.style.left="35%";
 backgroundVal.style.top="70%";
 timerDiv.style.display = "none";
 pokeName.style.display = "none";
 helpMe.style.left = "85%";
//  coffee.style.left = "85%";
 document.getElementById("nPSure").style.display="none";
 newPoke.style.display="block";
}

//If user selects No to settings.
function noSettings() {
  RUSure.style.left="-50%";
  stopDraw.style.display = "none";
  if (sndOn){
    sndNo.play();
  }
}

  //Resets the clock CSS
function resetClockPos(){
  seconds.style.fontSize = "8vw";
  timerDiv.style.left = "83%";
  timerDiv.style.top = "10%";
}



//+++ Quick Refresh button

  //When clicked, the recycle icon then asks if the user really wants to refresh.
function nPSure(){
  document.getElementById("nPSure").style.display="block";
  newPoke.style.display="none";
}

//This refreshes the image by clearing the canvas, resetting the clock, resets some CSS, and picks a new Pokemon name.
function newPokes(){
  clear();  //Clears canvas
  timerFunc(); //Beginds the timer
  resetPoints(); //Resets the "!!!" CSS so if clicked during that animation, they won't stick.
  resetClockPos(); //Resets clock CSS
  background(backgroundColVal); //Places the BG colour
  currentTime=timeSelect.value; //Takes the current clock slider value and places it as the currentTime
  pokeName.textContent = getPokemonName(); //Gets a new Pokemon name
  seconds.innerHTML=clockArr[currentTime]; //Resets the clock Emoji as the current time
  newPoke.style.display="block";
  stopDraw.style.display="none";
  picPoke.style.left="-5%";
  submit.style.left="-5%";
  helpMe.style.left="105%";
  document.getElementById("nPSure").style.display="none";
//   coffee.style.left="105%";
  if (sndOn){
   sndnoPhoto.play();
  }
}
