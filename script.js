"use strict";

var logo; 
var dessin;
var compteur = 0;
var tamponX = [];
var tamponY = [];

var chiffre1 = 0;
var chiffre2 = 0;
var chiffre3 = 0;

function preload() {
    logo = loadImage('logo.svg');
    customCursor = loadImage('cursor.png');
}

function setup() {
   
    dessin = createCanvas(600, 200);
    dessin.parent("rectangle"); 
}

function mouseClicked() {
    if (compteur < 10) {
        chiffre1 = int(random(1, 256));
        chiffre2 = int(random(1, 256));
        chiffre3 = int(random(1, 256));
        tamponX.push(mouseX - logo.width / 2); 
        tamponY.push(mouseY - logo.height / 2);
        compteur++; 
    } else { 
        compteur = 0;
        tamponX = [];
        tamponY = [];
    }
}

function draw() {
    background("#ffdb66"); 


    for (var i = 0; i < compteur; i++) {
        image(logo, tamponX[i], tamponY[i]);
    }

    tint(chiffre1, chiffre2, chiffre3);
    var x = mouseX - logo.width / 2;
    var y = mouseY - logo.height / 2;
    image(logo, x, y);
}
