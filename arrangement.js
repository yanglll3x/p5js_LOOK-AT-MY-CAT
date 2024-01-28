/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

let faceCat;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  faceCat = int(random(0,2));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();

  faceCat = int(random(0,2));
}

function getAveragedRandom(min, max, n) {
  let sum = 0;
  for(let i=0; i<n; i++) {
    sum = sum + random(min, max);
  }
  return sum / n;
}

// global variables for colors
const bg_color1 = [136,153,199];

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  ////big cat////
  if (faceCat==0) {
    let scale_value = random(0,10);
    let face_width = getAveragedRandom(0,10,5);
    let face_chin = getAveragedRandom(0,10,5);
    let ear_mov = random(0,10);
    let ear_shift = random(0,10);
    let mouth_shape = random(0,2);
    let open_mouth = random(0,10);
    let close_eye = random(0,10);
    let eye_ball = random(0,10);
    //let color_tex = random(0,3);
    let spinner_num = int(random(1,13));
    let color_tex = 0;
    if (spinner_num>=1 && spinner_num<=3) {
      color_tex = 0;
    } else if (spinner_num>=4 && spinner_num<=7) {
      color_tex = 1;
    } else {
      color_tex = 2;
    }
    push();
      translate(220, 200);
      scale(25);
      drawFace1(scale_value,face_width,face_chin,ear_mov,ear_shift,mouth_shape,open_mouth,close_eye,eye_ball,color_tex);
    pop();
  } else {
    let scale_value = random(0,10);
    let face_width = getAveragedRandom(0,5,5);
    let face_chin = getAveragedRandom(0,8,5);
    let ear_mov = random(0,10);
    let ear_shift = random(0,10);
    let face_smile = random(0,10);
    let open_mouth = getAveragedRandom(0,10,8);
    let close_eye = getAveragedRandom(0,10,2);
    let eye_ball = getAveragedRandom(0,10,5);
    //let color_tex = random(0,4);
    let spinner_num = int(random(1,13));
    let color_tex = 0;
    if (spinner_num>=1 && spinner_num <=4)  {
      color_tex =0;
    } else if (spinner_num >=5 && spinner_num <=6) {
      color_tex =1;
    } else if (spinner_num >=7 && spinner_num <=8) {
      color_tex =2;
    } else {
      color_tex =3;
    }
    push();
      translate(220, 190);
      scale(25);
      drawFace2(scale_value,face_width,face_chin,ear_mov,ear_shift,face_smile,open_mouth,close_eye,eye_ball,color_tex);
    pop();        
  }

  ////bottom cat line////
  const num_line=20;
  for (let i=1; i<=num_line; i++) {
    push();
      translate(width*i/(num_line+1), height/2+205);
      scale(2.5);
      let pos_ran = random(-5,5);
      if (i%2==0) {
        let scale_value = random(0,10);
        let face_width = random(0,10);
        let face_chin = random(0,10);
        let ear_mov = random(0,10);
        let ear_shift = random(0,10);
        let mouth_shape = random(0,2);
        let open_mouth = random(0,10);
        let close_eye = random(0,10);
        let eye_ball = random(0,10);
        let color_tex = random(0,3);
        translate(0,pos_ran);
        drawFace1(scale_value,face_width,face_chin,ear_mov,ear_shift,mouth_shape,open_mouth,close_eye,eye_ball,color_tex);
      } else {
        let scale_value = random(0,10);
        let face_width = random(0,5);
        let face_chin = random(0,8);
        let ear_mov = random(0,10);
        let ear_shift = random(0,10);
        let face_smile = random(0,10);
        let open_mouth = random(0,10);
        let close_eye = random(0,10);
        let eye_ball = random(0,10);
        let color_tex = random(0,4);
        translate(0,pos_ran);
        drawFace2(scale_value,face_width,face_chin,ear_mov,ear_shift,face_smile,open_mouth,close_eye,eye_ball,color_tex);
      }
    pop();
  }

  ////right side grid////
  const num_across=5;
  const num_down=4;
  //// draw a 5x4 grid of faces
  let w = canvasWidth / 10;
  let h = canvasHeight / 5;
  for(let i=0; i<num_down; i++) {
    for(let j=0; j<num_across; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
      if ((i+j)%2 == 0) {
        let scale_value = random(0,10);
        let face_width = random(0,10);
        let face_chin = random(0,10);
        let ear_mov = random(0,10);
        let ear_shift = random(0,10);
        let mouth_shape = random(0,2);
        let open_mouth = random(0,10);
        let close_eye = random(0,10);
        let eye_ball = random(0,10);
        //let color_tex = random(0,3);
        let spinner_num = int(random(1,13));
        let color_tex = 0;
        if (spinner_num>=1 && spinner_num<=3) {
          color_tex = 0;
        } else if (spinner_num>=4 && spinner_num<=7) {
          color_tex = 1;
        } else {
          color_tex = 2;
        }
        push();
          translate(x+450, y+10);
          scale(w/18, h/18);
          drawFace1(scale_value,face_width,face_chin,ear_mov,ear_shift,mouth_shape,open_mouth,close_eye,eye_ball,color_tex);
        pop();
      } else {
        let scale_value = random(0,10);
        let face_width = random(0,5);
        let face_chin = random(0,8);
        let ear_mov = random(0,10);
        let ear_shift = random(0,10);
        let face_smile = random(0,10);
        let open_mouth = random(0,10);
        let close_eye = random(0,10);
        let eye_ball = random(0,10);
        //let color_tex = random(0,4);
        let spinner_num = int(random(1,13));
        let color_tex = 0;
        if (spinner_num>=1 && spinner_num <=4)  {
          color_tex =0;
        } else if (spinner_num >=5 && spinner_num <=6) {
          color_tex =1;
        } else if (spinner_num >=7 && spinner_num <=8) {
          color_tex =2;
        } else {
          color_tex =3;
        }
        push();
          translate(x+450, y+10);
          scale(w/18, h/18);
          drawFace2(scale_value,face_width,face_chin,ear_mov,ear_shift,face_smile,open_mouth,close_eye,eye_ball,color_tex);
        pop();        
      } 
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
