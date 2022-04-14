let X1;
let Y1 ;
let X2 ;
let Y2;
let X3;
let Y3 ;
let X4;
let Y4;
let X5 ;
let Y5;
let X6;
let Y6 ;
let X7;
let Y7;

function preload(){
}
function setup() {
    frameRate(0.3);
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0, 'absolute');
  link = createA('/about', '','top');
  let eye = createImg( 'static/img/i.png','eye');
    eye.size(windowWidth/20,AUTO);
    eye.position((windowWidth-windowWidth/20),0).parent(link);
    let about = createA('/about', 'a b o u t');
    let bird = createA('/bird', 'b i r d');
    let bark = createA('/bark', 'b a r k');
    let cat = createA('/cattail', 'c a t t a i l');
    let sapling = createA('/sapling', 's a p l i n g');
    let marsh = createA('/marsh', 'm a r s h');
    let acknowledgment = createA('/acknowledgment', 'a c k n o w l e d g e m e n t');
        X1 = random(0,width-30);
        Y1 = random(0,height-30 );
        X2 = random(0,width-30);
        Y2 = random(0,height-30);
        X3 = random(0,width-30);
        Y3 = random(0,height-30);
        X4 = random(0,width-30);
        Y4 = random(0,height-30);
        X5 = random(0,width-30);
        Y5 = random(0,height-30);
        X6 = random(0,width-30);
        Y6 = random(0,height-30);
        X7 = random(0,width-30);
        Y7 = random(0,height-30);
      about.position(X1,Y1);
      bark.position(X2,Y2);
      bird.position(X3,Y3);
      cat.position(X4,Y4);
      sapling.position(X5,Y5);
      marsh.position(X6,Y6);
      acknowledgment.position(X7,Y7);

}


function draw() {
        line(random(0,width),random(0,width),random(0,width),random(0,width));
    /*  line(X6,Y6,X1,Y1);
     line(X6,Y6,X3,Y3);
       line(X6,Y6,X4,Y4);
        line(X6,Y6,X5,Y4);
       line(X6,Y6,X7,Y1);
        line(X6,Y6,X1,Y2); 
        */
        circle(random(0,width),random(0,height),random(0,20));

}
