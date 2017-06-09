//++Save Functions
function saveSelect() { //Brings up a window to save or not
  if (sndOn){
    sndCSave.play();
  }
  RUSave.style.left = "40%";
  stopDraw.style.height = "100%";
  stopDraw.style.display = "block";
  stopDraw.style.top = "0px";
};


//If Yes selected, saves a filename with the name of the URL and the current Pokemon name. (As even the best of work may not be recognized)
function yesSave() {
  saveCanvas('pokedoodle.tumblr'+" - "+pokeName.textContent, 'png');
  RUSave.style.left = "150%";
  stopDraw.style.display = "none";
  if (sndOn){
    sndyesSave.play();
  }
};

//If no, the window goes away.
function noSave(){
  RUSave.style.left = "150%";
  stopDraw.style.display = "none";
  if (sndOn){
    sndNo.play();
  }
}
