//+++ Brush Functions
function lineBrush(size){ //Main brush to draw lines.
  if (MDown){
    strokeWeight(size); //Brush size
    strokeJoin(ROUND);
    strokeCap(ROUND);
    line(mouseX-5,mouseY-4,pmouseX-5,pmouseY-4); //The brush
  }
}


function sprayBrush(size){ //Spray-like brush that creates random dots around the cursor
  if (MDown){
    strokeWeight(size);
    randNumm= Math.random();
    randSize= (Math.random()*(-size - size));

    point(mouseX-randSize-5,mouseY+randSize-4); //Creates an X pattern. (Needs to be within a circle.)
    randSize= Math.random()*(-size - size);
    point(mouseX+randSize-5,mouseY+randSize-4);
    randSize= Math.random()*(-size - size);
    point(mouseX-randSize-5,mouseY-randSize-4);
    randSize= Math.random()*(-size - size);
    point(mouseX+randSize-5,mouseY-randSize-4);
  }
}


function micColour(){ //Uses the Microphone value as a colour value (Needs work).
  if (micColourOn){
    turnOffMic()
    colour= 'rgb(170, 90, 95)';
  } else {
    micColourOn = true;
    document.getElementById('mic').style.background="#bad455";
  }
}


function turnOffMic(){ //Turns off the Mic brush
  micColourOn=false;
  document.getElementById('mic').style.background="#000";
}



///+++ UI Element Functions
function brushSmall() { //Decreases brush size
    if (sndOn){
      sndSdwn.play();
    }
  brushSize.value--;
 }

function brushBig() {//Increases brush size
    if (sndOn){
      sndSup.play();
    }
  brushSize.value++;
}

function changeTool(){  //Changes the brush tool
  if (toolInUse === "lineBrush"){
    toolInUse = "sprayBrush";
    document.getElementById("toolIcon").innerHTML="🎇";
  } else {
    toolInUse = "lineBrush";
    document.getElementById("toolIcon").innerHTML="🖌️";
  }
    if (sndOn){
      sndCSelect.play();
    }
}


function isAboveDiv(){     //Bool to allow drawing depending on if the cursor is above a DIV.
  $(document).on({
        mouseenter:function(){hoverDiv = true;console.log(hoverDiv)},
        mouseleave:function(){hoverDiv = false;},
      },
     '#stopDraw,#pen,#colours,#RUSave,#RUSure,#bottom,#photo,#credits,#flash'
  );
}

//+++ Mouse Functions
function mouseReleased(){ //Detectes if the mouse is released and does some stuff.
  MDown=false; //Yeah, the mouse is not down.
  playOnce = true; //Makes sure the sound the brush hit makes only plays once.
}


function mouseDistance(){
  mouseDist = (mouseX - pmouseX) + (mouseY - pmouseY);  //Gets the mouse speed based on current and previous mouse location
  if (mouseDist<0){
    mouseDist = mouseDist*-1;  //M speed will return positive when going from bottom right to top left.
  }
  return mouseDist;
}

function brushSliderfeedback(){
  brushCircle.style.fontSize=brushSize.value+".9px";
}


function mouseMoved(){ //Plays a sound when the mouse is moved and changes volume depending on speed
  if (sndOn){ //mute sound check

  if (mouseIsPressed  && hoverDiv === false){
    if (mouseDist < 10){ sndMDrag.volume = 0; }
    else if (mouseDist > 10 && mouseDist < 20){ sndMDrag.volume = 0.2; } //lower volume for slower speeds
    else if (mouseDist > 20 && mouseDist < 30){ sndMDrag.volume = 0.3; }
    else if (mouseDist > 30 && mouseDist < 40){ sndMDrag.volume = 0.4; }
    else if (mouseDist > 40 && mouseDist < 50){ sndMDrag.volume = 0.6; } // higher volume for faster speeds
    else { sndMDrag.volume = 1; }
      sndMDrag.play();
    }
  }
}
