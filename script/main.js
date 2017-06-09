//Disallows use of right clicking.
document.addEventListener('contextmenu', event => event.preventDefault());

function centerCanvas() { //Changes the orientation of the canvas depending if the display is portrait or landscape. (Needs UI reworking).
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {  //Processing Setup function.
  frameRate(60);
  cursor(CROSS);
  if (window.innerWidth <window.innerHeight ){
  cnv = createCanvas(window.innerWidth, window.innerHeight/2); //Creates a canvas as large as the user's display window
} else {
  cnv = createCanvas(window.innerWidth/2, window.innerHeight/1.15);
  cnv.parent('defaultCanvasDIV');
  centerCanvas();
}
  mic = new p5.AudioIn(); //Gets the mic information.
  mic.start();
  background(backgroundColVal);
}                                                                                                     ///END OF SETUP//

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////// SETUP SEPERATOR
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function draw() {//Processing draw function. This function repeats at 60FPS.
  //+++Click Events for the main UI elements
 document.getElementById('photo').addEventListener("click", beginDrawing);
 document.getElementById('title').addEventListener("click", Credits);
 document.getElementById('smallB').addEventListener("click", brushSmall);
 document.getElementById('bigB').addEventListener("click", brushBig);
 document.getElementById('toolBox').addEventListener("click", changeTool);
 document.getElementById('settings').addEventListener("click", muteSound);
 document.getElementById('picPoke').addEventListener("click", pokeSearch);
 document.getElementById('submit').addEventListener("click", submitDrawing);
 document.getElementById('helpMe').addEventListener("click", howToLink);


  //+++Click events to Save and Delete
  document.getElementById('save').addEventListener("click", saveSelect);
  document.getElementById('yesSav').addEventListener("click", yesSave);
  document.getElementById('noSav').addEventListener("click", noSave);
  //
  document.getElementById('clear').addEventListener("click", settings);
  document.getElementById('yesDel').addEventListener("click", yesSettings);
  document.getElementById('noDel').addEventListener("click", noSettings);
  //
  document.getElementById('newPoke').addEventListener("click", nPSure);
  document.getElementById('nPSure').addEventListener("click", newPokes);

///+++Click Events to change the brush colours
 document.getElementById('red').addEventListener("click", function(){colour=  'rgb(170, 90, 95)'; turnOffMic();});
 document.getElementById('pink').addEventListener("click", function(){colour=  'rgb(245, 180, 185)'; turnOffMic();});
 document.getElementById('orange').addEventListener("click", function(){colour= 'rgb(250, 170, 110)'; turnOffMic();});
 document.getElementById('yellow').addEventListener("click", function(){colour= 'rgb(245, 230, 130)'; turnOffMic();});
 document.getElementById('green').addEventListener("click", function(){colour= 'rgb(175, 210, 105)'; turnOffMic();});
 document.getElementById('teal').addEventListener("click", function(){colour= 'rgb(130, 180, 185)'; turnOffMic();});
 document.getElementById('blue').addEventListener("click", function(){colour= 'rgb(130, 200, 210)'; turnOffMic();});
 document.getElementById('purple').addEventListener("click", function(){colour= 'rgb(130, 90, 160)'; turnOffMic();});
 document.getElementById('black').addEventListener("click", function(){colour= 'rgb(75, 90, 90)'; turnOffMic();});
 document.getElementById('grey').addEventListener("click", function(){colour= 'rgb(145, 150, 160)'; turnOffMic();});
 document.getElementById('white').addEventListener("click", function(){colour= 'rgb(250, 250, 250)'; turnOffMic();});
 document.getElementById('trueBLK').addEventListener("click", function(){colour= 'rgb(20, 20, 20)'; turnOffMic();});
 document.getElementById('mic').addEventListener("click", micColour);
 document.getElementById('colours').addEventListener("click", UISoundClick);
 document.getElementById('brushSize').addEventListener("click", UISoundClick);

 if(inSetup){
    //+++Adds/removes region click events
   document.getElementById('Kanto').addEventListener("click", getKanto);
   document.getElementById('Johto').addEventListener("click", getJohto);
   document.getElementById('Hoenn').addEventListener("click", getHoenn);
   document.getElementById('Sinnoh').addEventListener("click", getSinnoh);
   document.getElementById('Unova').addEventListener("click", getUnova);
   document.getElementById('Kalos').addEventListener("click", getKalos);
   document.getElementById('Aloha').addEventListener("click", getAloha);
   document.getElementById('regions').addEventListener("click", UISoundClick);

    //+++Click events for settings menu
   document.getElementById('timeSelect').addEventListener("click", UISoundClick);
   document.getElementById('blackBG').addEventListener("click", function(){blackBGf(); UISoundClick();});
   document.getElementById('whiteBG').addEventListener("click", function(){whiteBGf(); UISoundClick();});
   document.getElementById('clockUP').addEventListener("click", clockUp);
   document.getElementById('clockDWN').addEventListener("click", clockDwn);
   var selectedTime = timeSelect.value;
 }

//+++ Mic brush colour value generator
 if (micColourOn){
   var micLevel = mic.getLevel(); //Mic volume will be captured
   colour=constrain(250-micLevel*250*5, 20, 250);
 }

 //+++ Drawing Function
 //Main check for if the cursor is not above a DIV and mouse is also not down.
 if (mouseIsPressed && hoverDiv === false){
   stroke(colour); //Colour for the brush.
   if (toolInUse === "lineBrush"){
    lineBrush(brushSize.value);
   } else {
    sprayBrush(brushSize.value);
   }
   noStroke();
   MDown=true;
 }

//+++ Plays the initial brush down hit sound on the canvas
 if(mouseIsPressed && playOnce && hoverDiv === false){
   if (sndOn){
     sndMDown.volume = 0.5;
     sndMDown.play();
   }
    playOnce=false;
  }

  //++Checks if the user is within the settings. Allows for instant changes of the settings and keeps away some UI elements.
  if (inSetup){
    background(backgroundColVal);
    hoverDiv = true;
    currentTime = timeSelect.value;
    newPoke.style.left="100%";
    picPoke.style.left="-5%";
    submit.style.left="-5%";
    helpMe.style.left="85%";
  }

  //+++Misc functions that always fire.
  mouseDistance(); //Calculates mouse distance to change volume of the mouse drag sounds.
  changeSliderclock(); //Changes the emoji clock depending on the slider in the settings
  brushSliderfeedback(); //Shows a DIV element the size of the brush
  isAboveDiv(); //Checks if cursor is above div.

  //+++Ending Animation Function Initiation
  if (currentTime <= 6){
    endFunc();
  }
}                                                                                                     ///END OF DRAW//


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////// DRAW SEPERATOR
/////////////////////////////////////////////////////////////////////////////////////////////////////////////





//+++ Functions to Fix
// function windowResized() { //Resizes the canvas (DOES NOT WORK WITH CURRENT BRUSH FUNCTION)
//   resizeCanvas(windowWidth, windowHeight);
// }



//+++ Generic Sound Functions
function muteSound(){
  if (sndOn == false){ //Turns on sound.
    sndOn = true;
    document.getElementById("speakerIcon").innerHTML="🔊";
  } else {                      //Mutes sound.
    sndOn = false;
    document.getElementById("speakerIcon").innerHTML="🔈";
  }
}

//Makes a sound when UI is clicked
function UISoundClick(){
    if (sndOn && hoverDiv){
      sndCSelect.play();
    }
}




// +++ Misc settings UI element functions
function Credits(){ //Credits behind the title bar
  if (credits.style.display === "flex"){
    if (sndOn){
      sndCPen.play();
    }
  } else {
    credits.style.display = "flex";
    title.style.height = "5%";
    stopDraw.style.height="100%";
    stopDraw.style.top="30px";
    ghostName.style.color = "rgba(255, 255, 255, 0)";
    if (sndOn){
    sndCPen.play();
    }
  }
}

function blackBGf(){
  backgroundColVal = 20; //Changes canvas background to black
}
function whiteBGf(){
  backgroundColVal = 250; //Changes canvas background to white
}



//+++ Begin drawing Button
function beginDrawing(){ //Initiates the "game." Arranges the appropriate CSS, variables, and functions.
  timerFunc(); //Begins timer
  inSetup = false;
  seconds.innerHTML=clockArr[currentTime];
  pokeName.textContent = getPokemonName();
  colours.style.display = "flex";
  colours.style.opacity= "1";
  photo.style.bottom='-200px';
  bottom.style.display='block';
  pen.style.height = "5%";
  pen.style.display='block';
  title.style.display = "none";
  title.style.height = "15px";
  stopDraw.style.display = "none";
  credits.style.display = "none";
  timerDiv.style.display = "block";
  pokeName.style.display = "block";
  RegionAsk.style.left="-50%";
  selectedTimeDiv.style.left="150%";
  backgroundVal.style.top="100%";
  newPoke.style.left="105%";
  if (sndOn){ //Checks if sound was muted for not.
    sndPhoto.volume=.5; //Lowers initial colume of the sound.
    sndPhoto.play();
  }
}



//+++ Pokemon Bing Search
//Opens a new tab to display a Bing search of the current Pokemon (I am lazy/don't want to hold the data to have all 700+ Pokemon images. :P)
function pokeSearch(){
  var win = window.open("showImage/show.html?"+pokeName.textContent, '_blank');
  win.focus();
}


//+++ Submit Drawing
//Opens a new tab to submit a drawing to the pokedoodle.tumblr.com blog
function submitDrawing(){
  var win = window.open("https://pokedoodle.tumblr.com/submit", '_blank');
  win.focus();
}

//+++ How to Link
//Opens a new tab for help with UI elements at the pokedoodle.tumblr.com blog
function howToLink(){
  var win = window.open("https://pokedoodle.tumblr.com/howto", '_blank');
  win.focus();
}



                        //////FUNCTION INDEX////////

//+++Clock and Timer Functions
  //"timerFunc.js"

//+++Arrays of Pokemon Names/Regions/and random name generator
  //"regionArrays.js"

// +++Mouse Functions
  //"brushFunc.js"

// +++ Brush Functions
  //"brushFunc.js"

//+++Save Canvas Button
  //"saveFunc.js"

//+++ Settings func button
  //"deleteFunc.js"

//+++ Quick refresh button
  //"deleteFunc.js"

//+++"!!!" Ending Animation
  //"endFunc.js"













//That's it.
