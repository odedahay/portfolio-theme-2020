(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg_1_dove_banner_160x600px = function() {
	this.initialize(img.bg_1_dove_banner_160x600px);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.bubblecopy2 = function() {
	this.initialize(img.bubblecopy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,79);


(lib.bubblecopy3 = function() {
	this.initialize(img.bubblecopy3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,118);


(lib.bubblecopy4 = function() {
	this.initialize(img.bubblecopy4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,108);


(lib.bg_2_dove_banner_160x600px = function() {
	this.initialize(img.bg_2_dove_banner_160x600px);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.bubblecopy6 = function() {
	this.initialize(img.bubblecopy6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,47);


(lib.bubblecopy = function() {
	this.initialize(img.bubblecopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib.bubblecopy7 = function() {
	this.initialize(img.bubblecopy7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib.bubble = function() {
	this.initialize(img.bubble);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,41);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,271,444);


(lib.bluecloud1 = function() {
	this.initialize(img.bluecloud1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,258,183);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,318);


(lib.whitecloud1 = function() {
	this.initialize(img.whitecloud1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,114);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,376);


(lib.product1 = function() {
	this.initialize(img.product1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,802);


(lib.bubblecopy5 = function() {
	this.initialize(img.bubblecopy5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,107);


(lib.whitecloud2 = function() {
	this.initialize(img.whitecloud2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,129);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_white_cloud2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.whitecloud2();
	this.instance.setTransform(-52,-32.4,0.5024,0.5023);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_white_cloud2, new cjs.Rectangle(-52,-32.4,104,64.8), null);


(lib.mc_white_cloud1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.whitecloud1();
	this.instance.setTransform(-26,-28.75,0.5049,0.5048);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_white_cloud1, new cjs.Rectangle(-26,-28.7,52,57.5), null);


(lib.mc_text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text2();
	this.instance.setTransform(-67.75,-111,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_text2, new cjs.Rectangle(-67.7,-111,135.5,222), null);


(lib.mc_text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text1();
	this.instance.setTransform(-66,-94,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_text1, new cjs.Rectangle(-66,-94,132,188), null);


(lib.mc_bubble7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bubblecopy7();
	this.instance.setTransform(-14.5,-14.5,0.4028,0.4028);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bubble7, new cjs.Rectangle(-14.5,-14.5,29,29), null);


(lib.mc_bubble_copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bubblecopy6();
	this.instance.setTransform(-12,-11.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bubble_copy6, new cjs.Rectangle(-12,-11.7,24,23.5), null);


(lib.mc_bubble_copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bubblecopy5();
	this.instance.setTransform(-25.5,-26.5,0.495,0.4952);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bubble_copy5, new cjs.Rectangle(-25.5,-26.5,51,53), null);


(lib.mc_bubble_copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bubblecopy4();
	this.instance.setTransform(-25,-27,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bubble_copy4, new cjs.Rectangle(-25,-27,50,54), null);


(lib.mc_bubble_copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bubblecopy3();
	this.instance.setTransform(-29.75,-29.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bubble_copy3, new cjs.Rectangle(-29.7,-29.5,59.5,59), null);


(lib.mc_bubble_copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bubblecopy2();
	this.instance.setTransform(-19.75,-19.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bubble_copy2, new cjs.Rectangle(-19.7,-19.7,39.5,39.5), null);


(lib.mc_bubble_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bubblecopy();
	this.instance.setTransform(-18,-18,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bubble_copy, new cjs.Rectangle(-18,-18,36,36), null);


(lib.mc_bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bubble();
	this.instance.setTransform(-10.5,-10.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bubble, new cjs.Rectangle(-10.5,-10.2,21,20.5), null);


(lib.mc_blue_cloud1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bluecloud1();
	this.instance.setTransform(-60,-42.55,0.4652,0.4651);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_blue_cloud1, new cjs.Rectangle(-60,-42.5,120,85.1), null);


(lib.mc_bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg_2_dove_banner_160x600px();
	this.instance.setTransform(-80,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bg2, new cjs.Rectangle(-80,-300,160,600), null);


(lib.mc_bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg_1_dove_banner_160x600px();
	this.instance.setTransform(-80,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bg1, new cjs.Rectangle(-80,-300,160,600), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0,239];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}
	this.frame_239 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(239).call(this.frame_239).wait(4));

	// hotspot
	this.btn_cta_box = new lib.Symbol1();
	this.btn_cta_box.name = "btn_cta_box";
	this.btn_cta_box.setTransform(80,300,0.5333,2.4,0,0,0,150,125);
	new cjs.ButtonHelper(this.btn_cta_box, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_cta_box).to({_off:true},240).wait(3));

	// text3
	this.instance = new lib.text3();
	this.instance.setTransform(22,10,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).to({_off:true},61).wait(63));

	// text2
	this.instance_1 = new lib.mc_text2();
	this.instance_1.setTransform(79.75,120);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({alpha:1},10).to({_off:true},75).wait(124));

	// text1
	this.instance_2 = new lib.mc_text1();
	this.instance_2.setTransform(80,121);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({alpha:0},10).to({_off:true},1).wait(198));

	// bubble_copy3
	this.instance_3 = new lib.mc_bubble_copy3();
	this.instance_3.setTransform(46.75,383.5,1.0924,1.0924);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({regX:0.1,regY:0.1,scaleY:1.0906,x:33.75,y:217.5},110).to({_off:true},1).wait(93));

	// bubble_copy6
	this.instance_4 = new lib.mc_bubble_copy6();
	this.instance_4.setTransform(48,611.75);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(84).to({_off:false},0).to({x:98,y:392.8},35).to({x:86.25,y:169},60).to({_off:true},1).wait(63));

	// bubble_cop2y2
	this.instance_5 = new lib.mc_bubble_copy2();
	this.instance_5.setTransform(115,619.75);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({x:128.75,y:436.75},60).to({x:104,y:274.9},60).to({_off:true},1).wait(63));

	// bubble_copy5
	this.instance_6 = new lib.mc_bubble_copy5();
	this.instance_6.setTransform(158.5,469.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:135.5,y:179},179).to({_off:true},1).wait(63));

	// bubble_copy4
	this.instance_7 = new lib.mc_bubble_copy4();
	this.instance_7.setTransform(10,587);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:25,y:320.5},119).to({_off:true},1).wait(123));

	// bubble7
	this.instance_8 = new lib.mc_bubble7();
	this.instance_8.setTransform(41.5,607.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:552},29).to({_off:true},1).wait(213));

	// bubble_copy
	this.instance_9 = new lib.mc_bubble_copy();
	this.instance_9.setTransform(15.9,615.9,0.8889,0.8889,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:0.4,regY:0.3,scaleX:0.861,scaleY:0.861,x:15.35,y:435.6},73).to({_off:true},1).wait(169));

	// bubble
	this.instance_10 = new lib.mc_bubble();
	this.instance_10.setTransform(55.5,567.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:77.5,y:461.75},58).to({_off:true},1).wait(184));

	// bg1
	this.instance_11 = new lib.mc_bg1();
	this.instance_11.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},180).wait(63));

	// pack
	this.instance_12 = new lib.product1();
	this.instance_12.setTransform(0,25,0.5,0.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(180).to({_off:false},0).to({_off:true},60).wait(3));

	// blue_cloud1
	this.instance_13 = new lib.mc_blue_cloud1();
	this.instance_13.setTransform(125,42.55);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(180).to({_off:false},0).to({x:100},59).to({_off:true},1).wait(3));

	// white_cloud2
	this.instance_14 = new lib.mc_white_cloud2();
	this.instance_14.setTransform(125,129.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(180).to({_off:false},0).to({x:108.5},59).to({_off:true},1).wait(3));

	// white_cloud1
	this.instance_15 = new lib.mc_white_cloud1();
	this.instance_15.setTransform(5,149.75);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(180).to({_off:false},0).to({x:26.5},59).to({_off:true},1).wait(3));

	// bg2
	this.instance_16 = new lib.mc_bg2();
	this.instance_16.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},240).wait(3));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185,639.5);
// library properties:
lib.properties = {
	id: '353632F6F92944F4B6DF19D24962976F',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg_1_dove_banner_160x600px.png?1591582988306", id:"bg_1_dove_banner_160x600px"},
		{src:"images/bubblecopy2.png?1591582988306", id:"bubblecopy2"},
		{src:"images/bubblecopy3.png?1591582988306", id:"bubblecopy3"},
		{src:"images/bubblecopy4.png?1591582988306", id:"bubblecopy4"},
		{src:"images/bg_2_dove_banner_160x600px.png?1591582988306", id:"bg_2_dove_banner_160x600px"},
		{src:"images/bubblecopy6.png?1591582988306", id:"bubblecopy6"},
		{src:"images/bubblecopy.png?1591582988306", id:"bubblecopy"},
		{src:"images/bubblecopy7.png?1591582988306", id:"bubblecopy7"},
		{src:"images/bubble.png?1591582988306", id:"bubble"},
		{src:"images/text2.png?1591582988306", id:"text2"},
		{src:"images/bluecloud1.png?1591582988306", id:"bluecloud1"},
		{src:"images/text3.png?1591582988306", id:"text3"},
		{src:"images/whitecloud1.png?1591582988306", id:"whitecloud1"},
		{src:"images/text1.png?1591582988306", id:"text1"},
		{src:"images/product1.png?1591582988306", id:"product1"},
		{src:"images/bubblecopy5.png?1591582988306", id:"bubblecopy5"},
		{src:"images/whitecloud2.png?1591582988306", id:"whitecloud2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['353632F6F92944F4B6DF19D24962976F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;