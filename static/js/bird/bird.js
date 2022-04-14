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
    robin = loadSound('static/js/assets/togoose.mp3');
  goose = loadSound('static/js/assets/torobin.mp3');
  
  rex=loadFont('static/js/assets/rex.ttf');
  X1 = random(0,width);
        Y1 = random(0,height);
        X2 = random(0,width);
        Y2 = random(0,height);
        X3 = random(0,width);
        Y3 = random(0,height);
        textSize(40);
        textFont(rex);
        text("To BlackBird",X1,Y1);
        text("To Robin",X2,Y2);
        text("To Goose",Y3,Y3);

}


function mousePressed() {
  if ((mouseX > X1 - 50) && (mouseX < X1 + 50)) {
    if ((mouseY > Y1 - 50) && (mouseY < Y1 + 50)) {
      bb.play();
  }
}
  if ((mouseX > X2 - 50) && (mouseX < X2 + 50)) {
    if ((mouseY > Y2 - 50) && (mouseY < Y2 + 50)) {
      robin.play();
  }
}
  if ((mouseX > X3 - 50) && (mouseX < X3 + 50)) {
    if ((mouseY > Y3 - 50) && (mouseY < Y3 + 50)) {
      goose.play();
  }
}
}
