var sketch=function(hp){
	hp.setup=function(){
		hp.createCanvas(hp.windowWidth,200);
		hp.background(174, 203, 249,100);
		hp.noStroke();
		for(var i=0;i<200;i++){
			var d=hp.random(0,30);
			hp.fill(hp.random(255),hp.random(255),hp.random(255),50);
			hp.ellipse(hp.random(hp.width),hp.random(hp.height),d,d);
		}
	}
	hp.draw=function(){
		hp.fill(0);
		hp.textFont('Verdana');
		hp.textSize(40);
		hp.text('Welcome to my Blog!',hp.width/2-200,hp.height/2);
	}
}

var mysketch = new p5(sketch,'top');