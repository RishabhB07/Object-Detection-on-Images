img="";
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
}
function preload(){
    img=loadImage('Fruit Basket.jpg');
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Banana", 250, 30);
    noFill();
    stroke("#FF0000");
    rect(245, 15, 250, 150);
}