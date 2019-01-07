
var sss = 100;
var n = 5, d = 8, k = n/d
var growing = true;
var max_size = 300;
function setup(){
  createCanvas(640, 480, WEBGL);

  
}

function draw() {

  background(53);

  //translate(width/2, height/2);

  
  beginShape();
  stroke(255);
  strokeWeight(1);
  noFill();
  if(growing){
    sss = ((sss+1)%max_size);
    // n+=1/max_size;
    // d+=1/max_size;
    // k = n/d;
    console.log(n)
    console.log(d)
  }
  else{
    sss = ((sss-1)%max_size); 

    // n-=1/max_size;
    // d-=1/max_size;
    // k = n/d;

  }
  if(!Math.abs(sss)){
    growing = true;
    n  = Math.floor(random(5,20));
    d  = Math.floor(random(4,30));
    k = n/d;
    console.log("=====");
  }

  if( Math.abs(sss) === max_size-1 ){
    growing = false;
  }

  for(var a = 0; a < TWO_PI*d; a+=0.01){
    
    
    var r = sss*cos(k*a);
    var x = r* cos(a);
    var y = r* sin(a);
    vertex(x,y);
    
  }

  //sphere(sss);

  endShape(CLOSE);

  
}
