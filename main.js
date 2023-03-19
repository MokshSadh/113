function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(180,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
    ellipse();
    circle(30,30,50);
    rectMode();
    rectrect(30, 70, 55, 55);
}

function take_snapshot(){
    save("picture.png");
}