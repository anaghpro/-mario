function preload() {
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);

	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(600, 300);
	video.parent('game_console')
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);


}

function startGame() {
	game_status = "start";
	document.getElementById('status').innerHTML = "Game Is Loading";
}
function modelLoaded() {
	console.log('Model Loaded!!!!!')
}

function gotPoses(results) {
	if (results.length > 0) {
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX + ", noseY = " + noseY);
	}
}


function draw() {
	game()
}