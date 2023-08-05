/* VARIABLES */
let eyeWidth = 50;
let eyeHeight = 30;
let pupilWidth = 22;
let pupilHeight = 25;
let toggle = false;

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 

  //sets the background color
  background(209,245,233);
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);
  strokeWeight(3);
  stroke(98,19,25);

  //Hair
  fill(253,106,34);
  rect(width/2, 270, 200, 100);
  rect(300, 257, 50, 200);

  //Face
  fill(250,194,146);
  ellipse(278, 191, 75, 70);
  rect(width/2, 280, 50, 100)
  ellipse(width/2, height/2, 175, 200);

  //Hair
  fill(253,106,34);
  arc(200, 150, 250, 180, 177, PI + QUARTER_PI, CHORD);
  rect(100, 257, 50, 200);

  //Eyes
  if (toggle == true /*mouseIsPressed*/) {
    //Eyes closed
    // fill(92,32,55);
    // ellipse(170, 170, eyeWidth, eyeHeight/8);
    // ellipse(230, 170, eyeWidth, eyeHeight/8);

    //One eye closed
    fill(92,32,55);
    ellipse(235, 178, eyeWidth, eyeHeight/8);

    //One eye open
    fill(252,250,245);
    ellipse(165, 178, eyeWidth, eyeHeight);
    fill(248,220,72);
    ellipse(165, 178, pupilWidth, pupilHeight);

    //Mouth closed
    fill(256,256,256);
    arc(200, 240, 50, 30, 0, 180, CHORD);

    //Eyebrows down
    noFill();
    arc(165, 162, 60, 40, 190, QUARTER_PI - 35);
    arc(235, 172, 60, 40, 213, QUARTER_PI - 12);
  }
  else if (toggle == false) {
    //Eyes open
    fill(252,250,245);
    ellipse(165, 178, eyeWidth, eyeHeight);
    ellipse(235, 178, eyeWidth, eyeHeight);
    fill(248,220,72);
    ellipse(165, 178, pupilWidth, pupilHeight);
    ellipse(235, 178, pupilWidth, pupilHeight);

    //Mouth open
    fill(219,162,144);
    arc(200, 240, 50, 30, 0, 180, CHORD);

    //Eyebrows up
    noFill();
    arc(165, 162, 60, 40, 190, QUARTER_PI - 35);
    arc(235, 162, 60, 40, 213, QUARTER_PI - 12);
  }
  //Nose
  fill(219,162,144);
  triangle(210, 210, 200, 210, 201, 220);

  //Blush
  fill(250,144,105);
  ellipse(145, 210, 30, 20);
  ellipse(257, 210, 30, 20);

  //Text
  noStroke();
  fill(0);
  textSize(15);
  text("Click to see me wink!", 130, 30);
}

/* FUNCTIONS */
function mousePressed() {
  toggle = !toggle;
}