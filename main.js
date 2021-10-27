img="";
status="";
objects=[];
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function preload(){
    img=loadImage('Fruit Basket.jpg');
}
function draw(){
    image(img, 0, 0, 640, 420);
    if(status != ""){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="Status: Object Detected";
            fill("#00FF00");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y);
            noFill();
            stroke("#00FF00");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        } 
     }
    fill("#00FF00");
    text("Banana", 250, 30);
    noFill();
    stroke("#00FF00");
    rect(245, 15, 250, 150);
    fill("#00FF00");
    text("Apple", 300, 245);
    noFill();
    stroke("#00FF00");
    rect(295, 230, 150, 70);
    fill("#00FF00");
    text("Orange", 205, 275);
    noFill();
    stroke("#00FF00");
    rect(200, 260, 90, 90);
}
function modelLoaded(){
    console.log("modelLoaded!");
    status=true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}