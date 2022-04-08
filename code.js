var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["83f13b7d-4b28-4981-a2fe-35dd6a1d9c19","80724de6-f52b-4384-a2a1-fdb029b342ac"],"propsByKey":{"83f13b7d-4b28-4981-a2fe-35dd6a1d9c19":{"name":"spinner","sourceUrl":null,"frameSize":{"x":300,"y":307},"frameCount":1,"looping":true,"frameDelay":12,"version":"XbgEly1ZLegnOi2izSiXBgI4nf9ZDTu5","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":307},"rootRelativePath":"assets/83f13b7d-4b28-4981-a2fe-35dd6a1d9c19.png"},"80724de6-f52b-4384-a2a1-fdb029b342ac":{"name":"pointer","sourceUrl":null,"frameSize":{"x":25,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"Mt35raGNeUdgxOLVWBYbTmPKFlvfuTUF","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":25},"rootRelativePath":"assets/80724de6-f52b-4384-a2a1-fdb029b342ac.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var numbers = 0;
var angle = null;

var spinner = createSprite(200,200);
spinner.setAnimation("spinner");

var pointer = createSprite(200, 50);
pointer.setAnimation("pointer");

var gameMode = 0;
var spin = false;
var time = randomNumber(100, 300);

function draw() {
  background("white");
 if(gameMode === 0){
  if(mousePressedOver(spinner)){
    spin =true;
    time = randomNumber(100, 300);
    numbers = 0;
  }
  
  if(spin ===true && time>0){
    spinnerTime();
  }
  
  if(time === 0){
    spinnerR();
  }
 }
  

  drawSprites();
}

function spinnerTime(){
 spinner.rotation=spinner.rotation+2;
 time = time-1;
}

function spinnerR(){
  angle = spinner.rotation;
  if(angle>360){
    angle = angle-360;
  }
  
if(time === 0){
  
  if(angle<30){
    numbers=1;
  }else{
    if(angle<60){
      numbers=2;
    }else{
      if(angle<90){
        numbers=3;
      }else{
        if(angle<120){
          numbers=4;
        }else{
          if(angle<150){
            numbers=5;
          }else{
            if(angle<180){
              numbers=6;
            }else{
              if(angle<210){
                numbers=7;
              }else{
                if(angle<240){
                  numbers=8;
                }else{
                  if(angle<270){
                    numbers=9;
                  }else{
                    if(angle<300){
                      numbers=10;
                    }else{
                      if(angle<330){
                        numbers=11;
                      }else{
                        if(angle<360){
                          numbers=12;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  
}
  console.log(spinner.rotation, angle, numbers);
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
