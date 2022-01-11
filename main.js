x=0;
y=0;
draw_circle='';
draw_rect="";

var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();

 function start(){
     document.getElementById("status").innerHTML="system is listening pls speak";
     Recognition.start();
 }
 Recognition.onresult=function(event){
     console.log(event);
     var content=event.results[0][0].transcript;
     document.getElementById("status").innerHTML="speech has been recognized"+content;
     if(content=="circle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML="circle is drawing in progres";
        draw_circle="set";
     }
     if(content=="rect"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML="rectangle is drawing in progres";
        draw_rect="set";
     }
 }
function setup(){
    canvas=createCanvas(900,600);
}
function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="circle is drawn";
        draw_circle="set"
    }
    if(draw_rect=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="rectangle is drawn";
        draw_rect="set"
    }
}