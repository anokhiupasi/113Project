var speechRecognition= window.webkitspeechRecognition;
var regonition= SpeechRecognition();
function start()
{
  document.getElementById("textbox").innerHTML="";
  regonition.start();
}
recongnition.onresult=function(event){
  console.log(event);
  var Content=event.results[0] [0].transcript;
  document.getElementById("textbox").innerHTML=Content;
  console.log(Content);
  if(content=="teke my selfie")
}
function speak(){
  var synth=window.speechSynthisis;
  speak_data=documen.getElementById("textbox").value;
  var uttterThis = new speechSynthisisUtterance(speak_data);
  synth.speak(uttterThis);
  Webcam.attach(camera);
  setTimeout(Function()
{
  take_snapshot();
  Save();
  5000);
}
{
  webcam.set{(
   width:360,
   height:250,
   image_format:'png',
   png_quality:90
  });
}
camera=document.getElementById("camera");

webcam.attach('#camera');

function take_snapshot()
{
  webcam_snap (function(data_uri){
    document.getElementsById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"+data_uri+';

  });
}