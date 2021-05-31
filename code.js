var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var wall1 = createSprite(34, 190,5,60);
wall1.shapeColor="blue"
var wall2 = createSprite(379, 190,5,60);
wall2.shapeColor="blue"
var wall3 = createSprite(355, 163,50,5);
wall3.shapeColor="blue"
var wall4 = createSprite(59, 163,50,5);
wall4.shapeColor="blue"
var wall5 = createSprite(58, 217,50,5);
wall5.shapeColor="blue"
var wall6 = createSprite(353, 217,50,5);
wall6.shapeColor="blue"
var wall7 = createSprite(82, 134,5,64);
wall7.shapeColor="blue"
var wall8 = createSprite(82, 247,5,64);
wall8.shapeColor="blue"
var wall9 = createSprite(329, 247,5,64);
wall9.shapeColor="blue"
var wall10 = createSprite(332, 134,5,64);
wall10.shapeColor="blue"
var wall11 = createSprite(205, 104,250,5);
wall11.shapeColor="blue"
var wall12 = createSprite(205, 277,250,5);
wall12.shapeColor="blue"
var rect1 = createSprite(60,190,49,50);
rect1.shapeColor="lightblue"
var rect2 = createSprite(354,190,48,50);
rect2.shapeColor="lightblue"
var dong0 = createSprite(61, 191,15,15);
dong0.shapeColor="green"
var dong1 = createSprite(121, 190,13,13);
dong1.shapeColor="red"
var dong2 = createSprite(172, 190,13,13);
dong2.shapeColor="red"
var dong3 = createSprite(221, 190,13,13);
dong3.shapeColor="red"
var dong4 = createSprite(272, 190,13,13);
dong4.shapeColor="red"






dong1.velocityY=7
dong2.velocityY=-7
dong3.velocityY=7
dong4.velocityY=-7
var count=0;



function draw() {
 background("white");
 textSize(22);
 
 text("Deaths: "+count, 200, 70);
 
 dong1.bounceOff(wall11); 
 dong1.bounceOff(wall12);
 dong2.bounceOff(wall11); 
 dong2.bounceOff(wall12);
 dong3.bounceOff(wall11); 
 dong3.bounceOff(wall12);
 dong4.bounceOff(wall11); 
 dong4.bounceOff(wall12);
 
if (keyDown("right")) {
dong0.x=dong0.x+2;
    
}
if (keyDown("left")) {
dong0.x=dong0.x-2;
    
}
if ( dong0.isTouching(dong1)|| dong0.isTouching(dong2)|| dong0.isTouching(dong3) ||dong0.isTouching(dong4)) 
{
  dong0.x=61;
  dong0.y=191;
  count=count+1; 
} 
if (count >= 5) {
dong0.destroy();
dong1.velocityY=0;
dong2.velocityY=0;
dong3.velocityY=0;
dong4.velocityY=0;               
}

 
   

  




    
  
    
 
 
 
 
 drawSprites();
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
