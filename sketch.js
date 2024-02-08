let weightSlider;
let slantSlider;
let casualSlider;
let variable;
let wghtvalue = 300;
let slntvalue = 0;
let _slntvalue;

function setup() {
  noCanvas();
  
  variable = select('.variable');
}

function draw() {
  
  /* weight */
  if(wghtvalue >= 300 && wghtvalue <= 1000){
    if(mouseIsPressed){
      wghtvalue += 3;
    }  else {
      wghtvalue -= 1;
    }
  }
  
  else if (wghtvalue >= 1000) {
    wghtvalue = 1000;
  }
  
  else {
    wghtvalue = 300;
  }
  
  
  /* slnt */
  if(slntvalue >= -20 && slntvalue <= 0){
    if (keyIsDown(RIGHT_ARROW)){
      slntvalue -= 0.2;
    }  else if (keyIsDown(LEFT_ARROW)) {
      slntvalue += 0.2;
    }
  }
  
  else if (slntvalue > 0) {
    slntvalue = 0;
  }
  
  else {
    slntvalue = -20;
  }
  
  /* slntvalue를 정수로 변환 */
  _slntvalue = slntvalue.toFixed(0);
  
  
  variable.style('font-weight', wghtvalue);
  variable.style('font-variation-settings', "'slnt' " + slntvalue);
  
  document.getElementById('_weight').innerHTML=wghtvalue;
  document.getElementById('_slnt').innerHTML=_slntvalue;
}