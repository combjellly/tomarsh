let bb;
let robin;
let goose;

let rex;

let X1 = 0;
let Y1 = 0;
let X2 = 0;
let Y2 = 0;
let X3 = 0;

function preload(){
  rex=loadFont('static/js/assets/rex.ttf');


}

function setup() {
    createCanvas(windowWidth, windowHeight);

    bb = loadSound('static/js/assets/toblackbird.mp3');
    goose = loadSound('static/js/assets/togoose.mp3');
    robin = loadSound('static/js/assets/torobin.mp3');
  
        X1 =  windowWidth/6.4
        Y1 = windowHeight/6.4
        X2 =  windowWidth/10
        Y2 = windowHeight/10
        X3 = windowWidth/20
        Y3 = windowHeight/20
        textSize(windowHeight/20);
        textFont(rex)
        text("To BlackBird",X1,Y1);
        text("To Robin",X2,Y2);
        text("To Goose",Y3,Y3);
        textFont("Courier")
         //textSize(windowHeight/80);
         //textAlign(CENTER)
       // text("To bird is feeling hops between landing spots. \nParallel whistling to chew the fat.\n Sparse blinks sense the fragile. \nBirds wake every morning and sing the dawn’s chorus. \n Practicing as a flock, they get their stories ready to share with one another through the day.\n Genealogical oral traditions that spread with south western winds.", windowWidth/2, windowHeight/1.2)


}


function mousePressed() {
  if ((mouseX > X1 ) && (mouseX < X1 + windowWidth/6)) {
    if ((mouseY > Y1 - 20) && (mouseY < Y1 )) {
      bb.play();
  }
}
  if ((mouseX > X2 ) && (mouseX < X2 + windowWidth/8)) {
    if ((mouseY > Y2 - 20) && (mouseY < Y2 )) {

      robin.play();
  }
}
  if ((mouseX > X3) && (mouseX < X3 + windowWidth/8)) {
    if ((mouseY > Y3 - 20) && (mouseY < Y3 )) {
      goose.play();
  }
}
}
