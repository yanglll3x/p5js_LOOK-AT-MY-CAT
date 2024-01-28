/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used face_y your final arrangement of faces as well as the face editor.
 */

const background_color = [136,153,199];//blue

function drawFace1(scale_value,face_width,face_chin,ear_mov,ear_shift,mouth_shape,open_mouth,close_eye,eye_ball,color_tex) {
  colorMode(RGB);
  angleMode(DEGREES);

  scale(0.9+0.02*scale_value);

  ////cat ears////
  strokeWeight(0.15);
  if (ear_mov<=1) {
    left_mov = 0;
    right_mov = 0;
  } else if (ear_mov>1 && ear_mov<=4) {
    left_mov = 0;
    right_mov = 10;
  } else if (ear_mov>4 && ear_mov<=7) {
    left_mov = 10;
    right_mov = 0;
  } else {
    left_mov = 10;
    right_mov = 10;
  }

  ////outline////
  stroke(255);
  strokeWeight(1.2);
  strokeJoin(ROUND);
  beginShape();
  curveVertex(-2.9-0.015*face_width,-4-0.015*face_width);
  curveVertex(-2.9-0.015*face_width,-4-0.015*face_width);
  curveVertex(-5.5-0.05*face_width,-5.2-0.08*face_width);
  curveVertex(-5.55-0.06*face_width-0.01*left_mov,-4.2-0.07*face_width-0.01*left_mov);
  curveVertex(-4.9-0.05*face_width-0.08*left_mov,-4-0.06*face_width+0.01*left_mov);
  curveVertex(-5.2-0.08*face_width-0.01*left_mov,-3.2-0.06*face_width);
  curveVertex(-5.2-0.09*face_width,-2.2-0.06*face_width);
  curveVertex(-5.5-0.16*face_width,-1.6);
  curveVertex(-6.0-0.16*face_width,-0.5);
  curveVertex(-5.4-0.16*face_width-0.1*face_chin,1+0.06*face_chin);
  curveVertex(-4.6-0.14*face_width-0.13*face_chin,2.3+0.09*face_chin);
  curveVertex(-2.8-0.14*face_width-0.11*face_chin,3.7-0.02*face_width+0.1*face_chin);
  curveVertex(-1.4-0.14*face_width-0.11*face_chin,4.2-0.02*face_width+0.1*face_chin);
  curveVertex(-0.2-0.14*face_width-0.11*face_chin,4.4-0.01*face_width+0.11*face_chin);
  curveVertex(0.2+0.14*face_width+0.11*face_chin,4.4-0.01*face_width+0.11*face_chin);
  curveVertex(1.4+0.14*face_width+0.11*face_chin,4.2-0.02*face_width+0.1*face_chin);
  curveVertex(2.8+0.14*face_width+0.11*face_chin,3.7-0.02*face_width+0.1*face_chin);
  curveVertex(4.6+0.14*face_width+0.13*face_chin,2.3+0.09*face_chin);
  curveVertex(5.4+0.16*face_width+0.1*face_chin,1+0.06*face_chin);
  curveVertex(5.9+0.16*face_width,-0.5);
  curveVertex(5.5+0.16*face_width,-1.6);
  curveVertex(5.2+0.09*face_width,-2.2-0.06*face_width); 
  curveVertex(5.2+0.08*face_width+0.01*right_mov,-3.2-0.06*face_width);
  curveVertex(4.9+0.05*face_width+0.08*right_mov,-4-0.06*face_width+0.01*right_mov);
  curveVertex(5.55+0.06*face_width+0.01*right_mov,-4.2-0.07*face_width-0.01*right_mov);
  curveVertex(5.5+0.05*face_width,-5.2-0.08*face_width);
  curveVertex(2.9+0.015*face_width,-4-0.015*face_width);
  curveVertex(1+0.015*face_width,-4.4-0.015*face_width);
  curveVertex(0,-4.5);
  curveVertex(-1-0.015*face_width,-4.4-0.015*face_width);
  curveVertex(-2.9-0.015*face_width,-4-0.015*face_width);
  curveVertex(-2.9-0.015*face_width,-4-0.015*face_width);
  endShape();

  ////cat head////
  fill(217,223,231);//light white
  stroke(0);
  strokeWeight(0.15);
  beginShape();
  vertex(-5.8-0.16*face_width,-0.6);
  bezierVertex(-4-0.16*face_width,-5.6,4+0.16*face_width,-5.6,5.6+0.16*face_width,-0.6);
  bezierVertex(4.2+0.16*face_width+0.52*face_chin,5.8+0.16*face_chin,
    -4.2-0.16*face_width-0.52*face_chin,5.8+0.16*face_chin,-5.8-0.16*face_width,-0.6);
  endShape();

  ////cat texture////
  fill(53,45,42);
  noStroke();
  if (color_tex<1) {
    beginShape();
    curveVertex(-0.6,-4); curveVertex(-0.6,-4); curveVertex(-3.2-0.04*face_width,-3.2); curveVertex(-5.2-0.08*face_width,-1.2-0.02*face_width);
    curveVertex(-4.8-0.12*face_width,0.6-0.04*face_width); curveVertex(-1.2,-0.2); curveVertex(-0.2,-2); curveVertex(-0.6,-4); curveVertex(-0.6,-4);
    endShape();
  } else if (color_tex>=1 && color_tex<2) {
    beginShape();
    curveVertex(0.6,-4); curveVertex(0.6,-4); curveVertex(3.2+0.04*face_width,-3.2); curveVertex(5.2+0.08*face_width,-1.2-0.02*face_width);
    curveVertex(4.8+0.12*face_width,0.6-0.04*face_width); curveVertex(1.2,-0.2); curveVertex(0.2,-2); curveVertex(0.6,-4); curveVertex(0.6,-4);
    endShape();
  } else {
    beginShape();
    curveVertex(-2,-1.6); curveVertex(-2,-1.6); curveVertex(-2.4,0.4); curveVertex(0.3,1.2);
    curveVertex(2,-0.2); curveVertex(0.7,-2.2); curveVertex(-2,-1.6); curveVertex(-2,-1.6);
    endShape();
  }

  ////continue cat ears////
  stroke(0);
  fill(193,185,190);
  //left cat ear
  beginShape();
  curveVertex(-3-0.015*face_width,-3.8-0.015*face_width);
  curveVertex(-3-0.015*face_width,-3.8-0.015*face_width);
  curveVertex(-5.4-0.05*face_width,-5-0.08*face_width);
  curveVertex(-5.4-0.06*face_width-0.01*left_mov,-4.2-0.07*face_width-0.01*left_mov);
  curveVertex(-4.7-0.05*face_width-0.08*left_mov,-4-0.06*face_width+0.01*left_mov);
  curveVertex(-5-0.08*face_width-0.01*left_mov,-3.2-0.06*face_width);
  curveVertex(-4.9-0.09*face_width,-2.2-0.06*face_width);
  curveVertex(-4.9-0.09*face_width,-2.2-0.06*face_width);
  endShape();
  //right cat ear
  beginShape();
  curveVertex(3+0.015*face_width,-3.8-0.015*face_width);
  curveVertex(3+0.015*face_width,-3.8-0.015*face_width);
  curveVertex(5.4+0.05*face_width,-5-0.08*face_width);
  curveVertex(5.4+0.06*face_width+0.01*right_mov,-4.2-0.07*face_width-0.01*right_mov);
  curveVertex(4.7+0.05*face_width+0.08*right_mov,-4-0.06*face_width+0.01*right_mov);
  curveVertex(5+0.08*face_width+0.01*right_mov,-3.2-0.06*face_width);
  curveVertex(4.9+0.09*face_width,-2.2-0.06*face_width);
  curveVertex(4.9+0.09*face_width,-2.2-0.06*face_width);
  endShape();

  ////cat ears inside////
  fill(217,223,231);
  //left side//
  beginShape();
  curveVertex(-3-0.015*face_width,-3.8-0.015*face_width);
  curveVertex(-3-0.015*face_width,-3.8-0.015*face_width);
  curveVertex(-5.4-0.05*face_width,-5-0.08*face_width);
  curveVertex(-3.5+0.05*ear_shift-0.02*face_width,-3.45-0.02*ear_shift-0.03*face_width);
  curveVertex(-3.5+0.05*ear_shift-0.02*face_width,-3.45-0.02*ear_shift-0.03*face_width);
  endShape();
  //right side//
  beginShape();
  curveVertex(3+0.015*face_width,-3.8-0.015*face_width);
  curveVertex(3+0.015*face_width,-3.8-0.015*face_width);
  curveVertex(5.4+0.05*face_width,-5-0.08*face_width);
  curveVertex(3.5-0.05*ear_shift+0.02*face_width,-3.45-0.02*ear_shift-0.03*face_width);
  curveVertex(3.5-0.05*ear_shift+0.02*face_width,-3.45-0.02*ear_shift-0.03*face_width);
  endShape();

  ////cat nose////
  strokeJoin(ROUND);
  fill(0);
  beginShape();
  vertex(0.3,0.5);
  quadraticVertex(0,1,-0.3,0.5);
  endShape(CLOSE);
  line(0,0.8,0,1.3);

  ////cat beard///
  stroke(0);
  strokeWeight(0.08);
  //left beard
  line(-3-0.02*face_width,0.8,-6-0.06*face_width,0.6);
  line(-3.1-0.02*face_width,1,-6.2-0.06*face_width,1.2);
  line(-3.2-0.02*face_width,1.2,-6.1-0.06*face_width,1.8);
  //right beard
  line(3+0.02*face_width,0.8,6+0.06*face_width,0.6);
  line(3.1+0.02*face_width,1,6.2+0.06*face_width,1.2);
  line(3.2+0.02*face_width,1.2,6.1+0.06*face_width,1.8);


  ////cat mouth////
  strokeWeight(0.1);
  if (mouth_shape <= 1) {
    line(0,1.3,-0.8,1.8);
    line(0,1.3,0.8,1.8);
    line(-0.8,1.8,0,1.3+0.16*open_mouth+0.03*face_chin);
    line(0.8,1.8,0,1.3+0.16*open_mouth+0.03*face_chin);
  } else {
    line(0,1.3,-0.6,1.3);
    line(0,1.3,0.6,1.3);
    line(-0.6,1.3,0,1.3+0.1*open_mouth+0.02*face_chin);
    line(0.6,1.3,0,1.3+0.1*open_mouth+0.02*face_chin);
  }
  
  ////cat eyes////
  fill(147,160,172);
  stroke(0);
  strokeWeight(0.15);
  ellipse(-2.9,-1.1+0.05*close_eye,2.4,2.4-0.2*close_eye);
  ellipse(2.9,-1.1+0.05*close_eye,2.4,2.4-0.2*close_eye);

  ////cat eyeball////
  fill(0);
  if (eye_ball<=4) {
    ellipse(-3.2+0.12*eye_ball,-1.1+0.05*close_eye,0.4);
    ellipse(2.6,-1.1+0.05*close_eye,0.4);
  } else if (eye_ball>4 && eye_ball<=6) {
    ellipse(-2.6,-1.1+0.05*close_eye,0.4);
    ellipse(2.6,-1.1+0.05*close_eye,0.4);
  } else {
    ellipse(-2.6,-1.1+0.05*close_eye,0.4);
    ellipse(2.6+0.12*(eye_ball-5),-1.1+0.05*close_eye,0.4);
  }

}

function drawFace2(scale_value,face_width,face_chin,ear_mov,ear_shift,face_smile,open_mouth,close_eye,eye_ball,color_tex) {

colorMode(RGB);
angleMode(DEGREES);

scale(0.8+0.04*scale_value);

var col_or = color(214,147,81);//orange
var col_br = color(150,107,87);//brown
var col_dabr = color(50,23,5) //dark brown
var col_daor = color(149,96,49) //dark orange
maincolor = col_or
texcolor = col_daor

////outline////
stroke(255);
strokeWeight(1.4);
strokeJoin(ROUND);
beginShape();
curveVertex(0,-5.1);
curveVertex(0,-5.1);
curveVertex(-2.2,-4.9);
curveVertex(-4.8-0.12*ear_mov,-6+0.09*ear_mov);
curveVertex(-4.4-0.04*face_width,-3.1-0.08*face_width);
curveVertex(-4.64-0.1*face_width,-1.8);
curveVertex(-4.84-0.12*face_width,-0.55);
curveVertex(-5.2-0.18*face_width,2.4+0.08*face_width);
curveVertex(-4.4-0.06*face_width,4.4+0.08*face_width);
curveVertex(-2.9,5.6+0.05*face_chin);
curveVertex(0,6.2+0.075*face_chin);
curveVertex(2.9,5.6+0.05*face_chin);
curveVertex(4.4+0.06*face_width,4.4+0.08*face_width);
curveVertex(5.2+0.18*face_width,2.4+0.08*face_width);
curveVertex(4.84+0.12*face_width,-0.55);
curveVertex(4.64+0.1*face_width,-1.8);
curveVertex(4.4+0.04*face_width,-3.1-0.08*face_width);
curveVertex(4.8+0.12*ear_mov,-6+0.09*ear_mov);
curveVertex(2.2,-4.9);
curveVertex(0,-5.1);
curveVertex(0,-5.1);
endShape();
strokeWeight(0.8);
//cat beard
//left side
line(-4.8-0.08*face_width,1.5,-7-0.08*face_width,1);
line(-4.65-0.08*face_width,1.8,-7.2-0.08*face_width,1.9);
line(-4.75-0.08*face_width,2.1,-7.1-0.08*face_width,2.9);
//right side
line(4.8+0.08*face_width,1.5,7+0.08*face_width,1);
line(4.65+0.08*face_width,1.8,7.2+0.08*face_width,1.9);
line(4.75+0.08*face_width,2.1,7.1+0.08*face_width,2.9);


////cat head////
///cat main color///
if (color_tex <=2 ) {
  maincolor = col_or;
} else {
  maincolor = col_br;
}
stroke(0);
strokeWeight(0.15);
fill(maincolor);
//noFill();
beginShape();
//left side
vertex(0,-5);
quadraticVertex(-4.6-0.12*face_width,-4.9,-4.65-0.11*face_width,-0.5);
quadraticVertex(-6.2-0.3*face_width,4,-2,5.8+0.04*face_chin);
//chin
quadraticVertex(0,6.2+0.1*face_chin,2,5.8+0.04*face_chin); 
//right side
quadraticVertex(6.2+0.3*face_width,4,4.65+0.11*face_width,-0.5);
quadraticVertex(4.6+0.12*face_width,-4.9,0,-5);
endShape()

////cat ears////
strokeWeight(0.15);
//left cat ear
beginShape();
vertex(-2,-4.65);
bezierVertex(-6-0.04*ear_mov,-6.8+0.24*ear_mov,-4.4-0.24*ear_mov,-5.8-0.06*ear_mov,-4,-2.94);
endShape();
//right cat ear
beginShape();
vertex(2,-4.65);
bezierVertex(6+0.04*ear_mov,-6.8+0.24*ear_mov,4.4+0.24*ear_mov,-5.8-0.06*ear_mov,4,-2.94);
endShape();
//cat ears inside
fill(215,197,213); //light pink
//left cat ear inside
beginShape();
vertex(-2.8+0.08*ear_shift,-4.25-0.04*ear_shift);
bezierVertex(-5.8-0.04*ear_mov,-6.7+0.24*ear_mov,-4.3-0.24*ear_mov,-5.8-0.06*ear_mov,-4,-2.94);
endShape();
//right cat ear inside
beginShape();
vertex(2.8-0.08*ear_shift,-4.25-0.04*ear_shift);
bezierVertex(5.8+0.04*ear_mov,-6.7+0.24*ear_mov,4.3+0.24*ear_mov,-5.8-0.06*ear_mov,4,-2.94);
endShape();

////cat color & texture////
if (color_tex <= 2) {
  texcolor = col_daor
} else {
  texcolor = col_dabr
}
fill(texcolor);
noStroke();
//above
beginShape();vertex(-1.5,-4.8);quadraticVertex(-1.2,-1.8,-0.9,-4.92);endShape(CLOSE);
beginShape();vertex(-0.3,-4.98);quadraticVertex(0,-1.3,0.3,-4.98);endShape(CLOSE);
beginShape();vertex(1.5,-4.8);quadraticVertex(1.2,-1.8,0.9,-4.92);endShape(CLOSE);
//leftside
beginShape();vertex(-4.75-0.1*face_width,-0.2);quadraticVertex(-2.8,0.48,-4.95-0.12*face_width,0.45);endShape(CLOSE);
beginShape();vertex(-5.06-0.15*face_width,1.2);quadraticVertex(-1.8,1.6,-5.1-0.16*face_width,1.9);endShape(CLOSE);
beginShape();vertex(-5-0.16*face_width,2.7);quadraticVertex(-2.4,2.4,-4.8-0.16*face_width,3.3);endShape(CLOSE);
//rightside
beginShape();vertex(4.75+0.1*face_width,-0.2);quadraticVertex(2.8,0.48,4.95+0.12*face_width,0.45);endShape(CLOSE);
beginShape();vertex(5.06+0.15*face_width,1.2);quadraticVertex(1.8,1.6,5.1+0.16*face_width,1.9);endShape(CLOSE);
beginShape();vertex(5+0.16*face_width,2.7);quadraticVertex(2.4,2.4,4.8+0.16*face_width,3.3);endShape(CLOSE);


if (color_tex >=1 && color_tex <3 ) {
  beginShape();vertex(-2,-4.65);quadraticVertex(-2.3,-2,-2.6,-4.47);endShape(CLOSE);
  beginShape();vertex(2,-4.65);quadraticVertex(2.3,-2,2.6,-4.47);endShape(CLOSE);
}


////cat eyes////
stroke(0);
strokeWeight(0.1);
fill(217,206,44); //lemon yellow
//left cat eye
beginShape();
vertex(-1.1,0.1);
bezierVertex(-1.2,-1.5+0.09*close_eye,-3.1,-1.4+0.08*close_eye,-3.1,0);
bezierVertex(-2.7,0.8,-1.8,0.8,-1.1,0.1);
endShape();
//right cat eye
beginShape();
vertex(1.1,0.1);
bezierVertex(1.2,-1.5+0.09*close_eye,3.1,-1.4+0.08*close_eye,3.1,0);
bezierVertex(2.7,0.8,1.8,0.8,1.1,0.1);
endShape();

////cat eyeballs////
noStroke();
//green part//
fill(161,186,110);
//left cat eyeball//
arc(-2.1,-0.3,0.6+0.06*eye_ball,1.3,0,180);
arc(-2.1,-0.3,0.6+0.06*eye_ball,1.3-0.11*close_eye,180,0);
//right cat eyeball//
arc(2.1,-0.3,0.6+0.06*eye_ball,1.3,0,180);
arc(2.1,-0.3,0.6+0.06*eye_ball,1.3-0.11*close_eye,180,0);
//black part//
fill(0);
//left cat eyeball//
arc(-2.1,-0.32,0.35+0.06*eye_ball,1.15,0,180);
arc(-2.1,-0.32,0.35+0.06*eye_ball,1.15-0.11*close_eye,180,0);
//right cat eyeball//
arc(2.1,-0.32,0.35+0.06*eye_ball,1.15,0,180);
arc(2.1,-0.32,0.35+0.06*eye_ball,1.15-0.11*close_eye,180,0);
//white part
fill(255,255,255);
ellipse(-2.2,-0.4+0.015*close_eye,0.08+0.025*eye_ball,0.4-0.02*close_eye);
ellipse(2,-0.4+0.015*close_eye,0.08+0.025*eye_ball,0.4-0.02*close_eye);

////cat nose////
stroke(0.1);
strokeJoin(ROUND);
fill(0);
beginShape();
vertex(0.3,1.3);
quadraticVertex(0,1.8,-0.3,1.3);
endShape(CLOSE);
line(0,1.4,0,2);

////cat beard////
stroke(0);
strokeWeight(0.08);
//left side
line(-2.8-0.08*face_width,1.5,-7-0.08*face_width,1);
line(-2.65-0.08*face_width,1.8,-7.2-0.08*face_width,1.9);
line(-2.75-0.08*face_width,2.1,-7.1-0.08*face_width,2.9);
//right side
line(2.8+0.08*face_width,1.5,7+0.08*face_width,1);
line(2.65+0.08*face_width,1.8,7.2+0.08*face_width,1.9);
line(2.75+0.08*face_width,2.1,7.1+0.08*face_width,2.9);

////cat mouth////
noFill();
strokeWeight(0.1);
//left side
beginShape();
vertex(0,2);
bezierVertex(-1.8+0.13*face_smile,3.6-0.135*face_smile,-2.5+0.1*face_smile,1.6+0.15*face_smile,-1.4-0.06*face_smile,1.5+0.15*face_smile);
endShape();
//right side
beginShape();
vertex(0,2);
bezierVertex(1.8-0.13*face_smile,3.6-0.135*face_smile,2.5-0.1*face_smile,1.6+0.15*face_smile,1.4+0.06*face_smile,1.5+0.15*face_smile);
endShape();
//bottom part
beginShape();
vertex(-0.4-0.04*open_mouth,2.26+0.022*open_mouth);
quadraticVertex(0,2+0.5*open_mouth,0.4+0.04*open_mouth,2.26+0.022*open_mouth);
endShape();
}

function drawFace3(tilt_value, eye_value, mouth_value) {
  //decide showing only two kind of faces
  //boost table 
  stroke(100,0,0);
  for (let i = -10; i <= 10; i++) {
    line(-10, i, 10, i);
  }
  for (let i = -10; i <= 10; i++) {
    line(i, -10, i, 10);
  }

  //cat head//fill(209,208,208);stroke(0);strokeJoin(ROUND);beginShape();
  //vertex(-4,-4);vertex(4,-4);vertex(4.8,6);vertex(-4.8,6);endShape(CLOSE);

  //cat ears//left ear
  //fill(209,208,208);strokeJoin(ROUND);beginShape();vertex(-4,-4);vertex(-4.1,-6);vertex(-2.5,-4);endShape();
  //right ear//strokeJoin(ROUND);beginShape();vertex(4,-4);vertex(4.1,-6);vertex(2.5,-4);endShape();

  //cat eyes//line(-2.5,-0.55,-1.5,-0.8);line(2.5,-0.55,1.5,-0.8);

  //cet nose and mouth//point(0,2); point(-0.5,3.5); point(-1.5,3); point(-1.6,2.5);
  //noFill();beginShape();vertex(0,2);bezierVertex(-0.4,3.3,-1.2,3,-1.3,2.6);
  //endShape();beginShape();vertex(0,2);bezierVertex(0.4,3.3,1.2,3,1.3,2.6);endShape();
  //strokeJoin(ROUND);triangle(-0.5,1.4,0.5,1.4,0,2);

  //cat beard//left beardline(-4,1,-3,1);line(-4,1.5,-3,1.5);line(-4,2,-3,2);
  //right beardline(4,1,3,1);line(4,1.5,3,1.5);line(4,2,3,2);
}

