let img1;
let img2;
let font;

let eye; 

let count = 0

let X1 = 0;
let Y1 = 0;
let X2 = 0;
let Y2 = 0;
let X3 = 0;
let Y3 = 0;
let X4 = 0;
let Y4 = 0;
let X5 = 0;
let Y5 = 0;
let X6 = 0;
let Y6 = 0;
let X7 = 0;
let Y7 = 0;
let X8 = 0;
let Y8 = 0;

function preload() {
  img1 = loadImage('static/js/assets/1.png');
  img2 = loadImage('static/js/assets/2.png');
  img3 = loadImage('static/js/assets/3.png');
  img4 = loadImage('static/js/assets/4.png');
  img5 = loadImage('static/js/assets/5.png');
  img6 = loadImage('static/js/assets/6.png');
  img7 = loadImage('static/js/assets/7.png');
  img8 = loadImage('static/js/assets/8.png');


}


function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);

  cnv.position(0, 0, 'absolute');

  imageMode(CENTER);
        X1 = random(0,width);
        Y1 = random(0,height);
        X2 = random(0,width);
        Y2 = random(0,height);
        X3 = random(0,width);
        Y3 = random(0,height);
        X4 = random(0,width);
        Y4 = random(0,height);
        X5 = random(0,width);
        Y5 = random(0,height);
        X6 = random(0,width);
        Y6 = random(0,height);
        X7 = random(0,width);
        Y7 = random(0,height);
        X8 = random(0,width);
        Y8 = random(0,height);
            textFont('Courier');
                textAlign(CENTER);
    textSize(15);


    text("feel bark and listen to words before they are written. Stories before they are told. Feel the warmth behind the bark. ", windowWidth/2, windowHeight/2)


}


function draw() {
    clear()
      textAlign(CENTER);
    textSize(15);


    text("feel bark and listen to words before they are written. Stories before they are told. Feel the warmth behind the bark. ", windowWidth/2, windowHeight/2)
    tint(X1,X2,Y3)

    image(img1, X1, Y1);
    tint(X1,X2,Y3)
    image(img2, X2, Y2);
        tint(Y2,Y1,Y3)

    image(img3, X3, Y3);
        tint(Y5,X3,Y4)

    image(img4, X4, Y4);
        tint(X6,Y1,Y2)

    image(img5, X5, Y5);
        tint(Y5,X5,Y6)

    image(img6, X6, Y6);
        tint(Y4 ,X7,Y7)

    image(img7, X7, Y7);
        tint(X4,Y8,X8)

    image(img8, X8, Y8);


  }
  
function mouseDragged() {


      if (count <=1){
let eye = createImg( 'static/img/i.png','eye');
  link = createA('/about#bark', '','top');

    eye.size(windowWidth/20,AUTO);
    eye.position((windowWidth-windowWidth/20),0).parent(link);



    count = 2

  }


  if ((mouseX > X1 - 50) && (mouseX < X1 + 50)) {
    if ((mouseY > Y1 - 50) && (mouseY < Y1 + 50)) {
      X1 = mouseX;
      Y1 = mouseY;
    }
  }
  
    if ((mouseX > X2 - 50) && (mouseX < X2 + 50)) {
    if ((mouseY > Y2 - 50) && (mouseY < Y2 + 50)) {
      X2 = mouseX;
      Y2 = mouseY;
    }
  }
  
    if ((mouseX > X3 - 50) && (mouseX < X3 + 50)) {
    if ((mouseY > Y3 - 50) && (mouseY < Y3 + 50)) {
      X3 = mouseX;
      Y3 = mouseY;
    }
  }
    if ((mouseX > X4 - 50) && (mouseX < X4 + 50)) {
    if ((mouseY > Y4 - 50) && (mouseY < Y4 + 50)) {
      X4 = mouseX;
      Y4 = mouseY;
    }
  }
    if ((mouseX > X5 - 50) && (mouseX < X5 + 50)) {
    if ((mouseY > Y5 - 50) && (mouseY < Y5 + 50)) {
      X5 = mouseX;
      Y5 = mouseY;
    }
  }
  
    if ((mouseX > X6 - 50) && (mouseX < X6 + 50)) {
    if ((mouseY > Y6 - 50) && (mouseY < Y6 + 50)) {
      X6 = mouseX;
      Y6 = mouseY;
    }
  }
  
    if ((mouseX > X7 - 50) && (mouseX < X7 + 50)) {
    if ((mouseY > Y7 - 50) && (mouseY < Y7 + 50)) {
      X7 = mouseX;
      Y7 = mouseY;
    }
  }
    if ((mouseX > X8 - 50) && (mouseX < X8 + 50)) {
    if ((mouseY > Y8 - 50) && (mouseY < Y8 + 50)) {
      X8 = mouseX;
      Y8 = mouseY;
    }
  }

}

function keyPressed(){
   let eye = createImg( 'static/img/i.png','eye');
  link = createA('/about', '','top');

    eye.size(windowWidth/20,AUTO);
    eye.position((windowWidth-windowWidth/20),0).parent(link);

    if (key === ' ') {
      clear();
        X1 = random(0,width);
        Y1 = random(0,height);
        X2 = random(0,width);
        Y2 = random(0,height);
        X3 = random(0,width);
        Y3 = random(0,height);
        X4 = random(0,width);
        Y4 = random(0,height);
        X5 = random(0,width);
        Y5 = random(0,height);
        X6 = random(0,width);
        Y6 = random(0,height);
        X7 = random(0,width);
        Y7 = random(0,height);
        X8 = random(0,width);
        Y8 = random(0,height);
                   textFont('Courier');

    textAlign(CENTER);
    textSize(15);

    text("feel bark and listen to words before they are written. Stories before they are told. Feel the warmth behind the bark. ", windowWidth/2, windowHeight/2)

    }
}
