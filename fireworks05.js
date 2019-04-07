//Fireworks v. 05
//This tutorial shows how to create many particles in the same position, 
//and with random velocity vectors
//
//This release adds:
//1. boundary test just for fun
//2. boundary test removed
//3. gravity
//4. boundary test returned
//
//BUGS:
//1. (SOLVED)simulation is failing, some balls are trapped in the bottom;(SOLUTION-the 
//problem was solved by subtracting an offset equals the heigth of the ball in 
//the particle system)
//
//TO DO:
//1. (ADDED)add friction;(ADDED in the particle system)
//2. add collision between balls
//3. use bounce instead of friction
//
//By Marcelo Silva

//canvas definition
var document;var window;var init;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//get canvas dimensions
var canvasWidth = canvas.width;
var canvasHeigth = canvas.height;
//font size and color
ctx.font = '20px Arial';

// var definitions
var radius = 3;//radius of the ball
var particles = [];//array of particles
var numParticles = 100;//number of particles to be created

//instanciate the particles objects
for(var i=0;i<numParticles;i++){
    particles.push(particle.create( canvasWidth/2,canvasHeigth/5,Math.random()*4+1,Math.random()*Math.PI*2,2,0.98));//gravity is added here, before the last parameter; friction is added here, the last parameter
}

var clearCanvas = function () {
	ctx.clearRect(0,0,canvasWidth,canvasHeigth);
};

function main() {
    init = window.requestAnimationFrame(main);
    // Whatever your main loop needs to do    
    clearCanvas();//clear the canvas
    for(var i=0;i<numParticles;i++){
        var p=particles[i];
        p.testBounds(canvasWidth,canvasHeigth,radius,radius);
        p.update();
        ctx.beginPath();//only this can erase stroke and arc
        ctx.arc(p.position.getX(),p.position.getY(),radius,0,Math.PI*2,false);
        ctx.fill();
        //ctx.fillText(' ypos = ' + p.position.getY(),50,50);
    }
    
}

main();