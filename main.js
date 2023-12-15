leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(VIDEO, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("posenet is initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results)


        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log(difference);
    }
}

function draw() {
    background("#969A97");
    textSize(difference);

    fill("red");
    text("Reyansh", 250, 250);
}