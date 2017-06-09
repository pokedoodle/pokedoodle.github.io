//////////////////  Global variables
  var mic; //Used for Mic Brush
  var micColourOn = false;
  var cnv; //Canvas Variable
  var  MDown=false; //Mouse drag
  var playOnce=false; //PlayOnce sound variable for brush hit
  var timerStart = false; //Check for if the timer should be on or off
  var toolInUse = "lineBrush"; //Current brush style
  var colour = "rgb(170, 90, 95)"; //Current colour
  var backgroundColVal =  250; //Current background colour
  var currentTime = 120; //Current time (not the selected time, but the current time. Selected time is stored using the slider)
  var mouseDist = 0; //Current mouse distance
  inSetup = true; //Check if the user is in settings or not.
  ////////////////  Variables for if the Regions should be in the array. They are flipped. Oops.
  var kantoOn=false;
  var johtoOn=false;
  var sinnohOn=false;
  var kalosOn=false;
  var unovaOn=false;
  var alohaOn=false;
  var hoennOn=false;
  //////////////////  Sound variables
  var sndOn = true; //Is sound muted or not?
  var sndCSelect = new Audio("sounds/selectC.ogg"); 
  var sndCErase = new Audio("sounds/selectErase.ogg");
  var sndCSave = new Audio("sounds/selectSave.ogg");
  var sndCPen = new Audio("sounds/selectPen.ogg");
  var sndMDrag = new Audio("sounds/MDrag.ogg");
  var sndMDown = new Audio("sounds/MDown.ogg");
  var sndNo = new Audio("sounds/No.ogg");
  var sndyesSave = new Audio("sounds/yesSave.ogg");
  var sndyesErase = new Audio("sounds/yesErase.ogg");
  var sndPhoto = new Audio("sounds/Photo.ogg");
  var sndnoPhoto = new Audio("sounds/noPhoto.ogg");
  var sndSup = new Audio("sounds/sizeUp.ogg");
  var sndClockTick = new Audio("sounds/ticktock.ogg");
  var sndSend = new Audio("sounds/send.ogg");
  var sndSdwn = new Audio("sounds/sizeDwn.ogg");
  /////////////////// Emoji Clocks in a large array.
  var clockArr = ["🕛","🕧","🕐","🕜","🕑'","🕝","🕒","🕞","🕓","🕟","🕔","🕠","🕕","🕡","🕖","🕢","🕗","🕣","🕘","🕤","🕙","🕥","🕚","🕦","🕛","🕧"];
