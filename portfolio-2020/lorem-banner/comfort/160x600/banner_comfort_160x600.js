(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner_comfort_160x600_atlas_", frames: [[0,0,320,1200],[520,1363,179,46],[0,1202,320,256],[322,0,320,814],[322,1337,196,128],[644,0,320,771],[322,816,320,519],[644,773,320,588]]}
];


// symbols:



(lib.bg160x600 = function() {
	this.spriteSheet = ss["banner_comfort_160x600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ctabtn = function() {
	this.spriteSheet = ss["banner_comfort_160x600_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.glow = function() {
	this.spriteSheet = ss["banner_comfort_160x600_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.leaves = function() {
	this.spriteSheet = ss["banner_comfort_160x600_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.newflag = function() {
	this.spriteSheet = ss["banner_comfort_160x600_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.perfume = function() {
	this.spriteSheet = ss["banner_comfort_160x600_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.text1 = function() {
	this.spriteSheet = ss["banner_comfort_160x600_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.text2 = function() {
	this.spriteSheet = ss["banner_comfort_160x600_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.mc_text02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(-80,-147,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_text02, new cjs.Rectangle(-80,-147,160,294), null);


(lib.mc_text01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(-80,-129.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_text01, new cjs.Rectangle(-80,-129.7,160,259.5), null);


(lib.mc_spark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.141,0.596],-1.2,-2,0,-1.2,-2,38).s().p("AihIZIAAwxIFDAAIAAQxg");
	this.shape.setTransform(-18.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_spark, new cjs.Rectangle(-35,-53.7,32.4,107.5), null);


(lib.mc_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// strip (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_1 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_2 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_3 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_4 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_5 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_6 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_7 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_8 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_9 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_10 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_11 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_12 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_13 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_14 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_15 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_16 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_17 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_18 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_19 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_20 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_21 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_22 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_23 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_24 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_25 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_26 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_27 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_28 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_29 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_30 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_31 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_32 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_33 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");
	var mask_graphics_34 = new cjs.Graphics().p("EgMmA4SIAAiHIZNAAIAACHgEgMmA0vIAAiHIZNAAIAACHgEgMmAxVIAAiHIZNAAIAACHgEgMmAtyIAAiHIZNAAIAACHgEgMmAqJIAAiIIZNAAIAACIgEgMmAmmIAAiIIZNAAIAACIgEgMmAjMIAAiIIZNAAIAACIgAsmfpIAAiIIZNAAIAACIgAsmbsIAAiIIZNAAIAACIgAsmYJIAAiIIZNAAIAACIgAsmUvIAAiIIZNAAIAACIgAsmRMIAAiIIZNAAIAACIgAsmNiIAAiHIZNAAIAACHgAsmJ/IAAiHIZNAAIAACHgAsmGlIAAiHIZNAAIAACHgAsmDCIAAiHIZNAAIAACHgAsmg6IAAiHIZNAAIAACHgAsmkdIAAiHIZNAAIAACHgAsmn3IAAiHIZNAAIAACHgAsmraIAAiHIZNAAIAACHgAsmvDIAAiIIZNAAIAACIgAsmymIAAiIIZNAAIAACIgAsm2AIAAiIIZNAAIAACIgAsm5jIAAiIIZNAAIAACIgAsm9gIAAiIIZNAAIAACIgEgMmghDIAAiIIZNAAIAACIgEgMmgkdIAAiIIZNAAIAACIgEgMmgoAIAAiIIZNAAIAACIgEgMmgrqIAAiHIZNAAIAACHgEgMmgvNIAAiHIZNAAIAACHgEgMmgynIAAiHIZNAAIAACHgEgMmg2KIAAiHIZNAAIAACHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.7,y:60.2}).wait(1).to({graphics:mask_graphics_1,x:0.7,y:57.9}).wait(1).to({graphics:mask_graphics_2,x:0.7,y:55.5}).wait(1).to({graphics:mask_graphics_3,x:0.7,y:53.2}).wait(1).to({graphics:mask_graphics_4,x:0.7,y:50.8}).wait(1).to({graphics:mask_graphics_5,x:0.7,y:48.5}).wait(1).to({graphics:mask_graphics_6,x:0.7,y:46.1}).wait(1).to({graphics:mask_graphics_7,x:0.7,y:43.8}).wait(1).to({graphics:mask_graphics_8,x:0.7,y:41.4}).wait(1).to({graphics:mask_graphics_9,x:0.7,y:39.1}).wait(1).to({graphics:mask_graphics_10,x:0.7,y:36.7}).wait(1).to({graphics:mask_graphics_11,x:0.7,y:34.4}).wait(1).to({graphics:mask_graphics_12,x:0.7,y:32}).wait(1).to({graphics:mask_graphics_13,x:0.7,y:29.6}).wait(1).to({graphics:mask_graphics_14,x:0.7,y:27.3}).wait(1).to({graphics:mask_graphics_15,x:0.7,y:24.9}).wait(1).to({graphics:mask_graphics_16,x:0.7,y:22.6}).wait(1).to({graphics:mask_graphics_17,x:0.7,y:20.2}).wait(1).to({graphics:mask_graphics_18,x:0.7,y:17.9}).wait(1).to({graphics:mask_graphics_19,x:0.7,y:15.5}).wait(1).to({graphics:mask_graphics_20,x:0.7,y:13.2}).wait(1).to({graphics:mask_graphics_21,x:0.7,y:10.8}).wait(1).to({graphics:mask_graphics_22,x:0.7,y:8.5}).wait(1).to({graphics:mask_graphics_23,x:0.7,y:6.1}).wait(1).to({graphics:mask_graphics_24,x:0.7,y:3.8}).wait(1).to({graphics:mask_graphics_25,x:0.7,y:1.4}).wait(1).to({graphics:mask_graphics_26,x:0.7,y:-0.9}).wait(1).to({graphics:mask_graphics_27,x:0.7,y:-3.3}).wait(1).to({graphics:mask_graphics_28,x:0.7,y:-5.6}).wait(1).to({graphics:mask_graphics_29,x:0.7,y:-8}).wait(1).to({graphics:mask_graphics_30,x:0.7,y:-10.4}).wait(1).to({graphics:mask_graphics_31,x:0.7,y:-12.7}).wait(1).to({graphics:mask_graphics_32,x:0.7,y:-15.1}).wait(1).to({graphics:mask_graphics_33,x:0.7,y:-17.4}).wait(1).to({graphics:mask_graphics_34,x:0.7,y:-19.8}).wait(1));

	// mask-bg
	this.instance = new lib.bg160x600();
	this.instance.parent = this;
	this.instance.setTransform(-80,-299,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// bg_original
	this.instance_1 = new lib.bg160x600();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-80,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,601);


(lib.clickThrough = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF33").s().rr(-81.05,-270.1,162.1,540.2,3.8);
	this.shape.setTransform(0,0,1,1.113);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mc_new_splash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AB5EEQjygkhwAFQhwAFhAgEQhAgFAHiaQAHiZgCgWQgBgWAGg7QAHg7BmgWQBmgWFJBIQD0AiB5hFQAEAuABAhQABAhAEASQADASAFB7QAFB9g2BMQglAzh7AAQg7AAhOgMg");
	mask.setTransform(0,-5.2);

	// splash
	this.instance = new lib.mc_spark();
	this.instance.parent = this;
	this.instance.setTransform(-53.2,-11.2,0.813,1,33,0,0,-0.1,0);
	this.instance.alpha = 0.84;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:0.49,scaleY:1,rotation:0,skewX:32.9,skewY:33.1,x:-0.3,y:-2.7,alpha:0.5},9).to({regX:0.1,regY:0.1,scaleX:0.64,scaleY:1,rotation:18,skewX:0,skewY:0,x:67.4,y:8.4,alpha:0.199},8).wait(79));

	// new
	this.instance_1 = new lib.newflag();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-49,-32,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-32.4,98,64.4);


// stage content:
(lib.banner_comfort_160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_cta_box.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(window.clickTag);
		}
	}
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(71).call(this.frame_71).wait(1));

	// click_tag
	this.btn_cta_box = new lib.clickThrough();
	this.btn_cta_box.name = "btn_cta_box";
	this.btn_cta_box.parent = this;
	this.btn_cta_box.setTransform(80,300.5);
	new cjs.ButtonHelper(this.btn_cta_box, 0, 1, 2, false, new lib.clickThrough(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_cta_box).wait(72));

	// new
	this.instance = new lib.mc_new_splash();
	this.instance.parent = this;
	this.instance.setTransform(80,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72));

	// glow
	this.instance_1 = new lib.glow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72));

	// cta
	this.instance_2 = new lib.ctabtn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(35,237,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72));

	// leaves
	this.instance_3 = new lib.leaves();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(72));

	// text-2
	this.instance_4 = new lib.mc_text02();
	this.instance_4.parent = this;
	this.instance_4.setTransform(81,154);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).to({alpha:1},8).wait(25));

	// text-1
	this.instance_5 = new lib.mc_text01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80,149.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({alpha:0},8).to({_off:true},1).wait(29));

	// purfume
	this.instance_6 = new lib.perfume();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1,216,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(72));

	// bg
	this.instance_7 = new lib.mc_bg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53.7,284.2,187.8,736.4);
// library properties:
lib.properties = {
	id: 'CE5E6C326C4C45D593D629EA2E681B4D',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/banner_comfort_160x600_atlas_.png?1543995683958", id:"banner_comfort_160x600_atlas_"}
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
an.compositions['CE5E6C326C4C45D593D629EA2E681B4D'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;