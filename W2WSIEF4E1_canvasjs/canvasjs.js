var c = document.getElementById("myCanvas");

var context = c.getContext("2d");
context.beginPath();
context.fillStyle = "#f0d486";
context.arc(100, 50, 50, 0, 2 * Math.PI);
//context.arc(100, 130, 50, -1, 2 * Math.PI);
//context.arc(200, 100, 50, 0, 2 * Math.PI);
context.fill();
ctx = document.getElementById('canvas1').getContext('2d');

/* Draw barrier */
ctx.beginPath();
//ctx.moveTo(50, 30);
ctx.lineTo(450, 30);
ctx.stroke();

//draw_arrow(50, 180, 150, 30);
//draw_arrow(100, 50, 10, 50);
//draw_arrow(100, 80, 10, 80);
draw_arrow(100, 50, 10, 50);

function draw_arrow(x0, y0, x1, y1) {
    const width = 8;
    const head_len = 16;
    const head_angle = Math.PI / 6;
    const angle = Math.atan2(y1 - y0, x1 - x0);

    ctx.lineWidth = width;

    /* Adjust the point */
    x1 -= width * Math.cos(angle);
    y1 -= width * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(x1, y1);
    ctx.lineTo(x1 - head_len * Math.cos(angle - head_angle), y1 - head_len * Math.sin(angle - head_angle));
    ctx.lineTo(x1 - head_len * Math.cos(angle + head_angle), y1 - head_len * Math.sin(angle + head_angle));
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

c.addEventListener("click", function() {
    console.log("dsss");
});

var c = document.getElementById("myCanvas1");
var context = c.getContext("2d");
context.beginPath();
context.fillStyle = "#367ab3";
context.arc(100, 50, 50, 0, 2 * Math.PI);
//context.arc(100, 130, 50, -1, 2 * Math.PI);
//context.arc(200, 100, 50, 0, 2 * Math.PI);
context.fill();
ctx = document.getElementById('canvas2').getContext('2d');

/* Draw barrier */
ctx.beginPath();
//ctx.moveTo(50, 30);
ctx.lineTo(450, 30);
ctx.stroke();

//draw_arrow(50, 180, 150, 30);
//draw_arrow(100, 50, 10, 50);
//draw_arrow(100, 80, 10, 80);
draw_arrow(100, 50, 10, 50);

function draw_arrow(x0, y0, x1, y1) {
    const width = 8;
    const head_len = 16;
    const head_angle = Math.PI / 6;
    const angle = Math.atan2(y1 - y0, x1 - x0);

    ctx.lineWidth = width;

    /* Adjust the point */
    x1 -= width * Math.cos(angle);
    y1 -= width * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(x1, y1);
    ctx.lineTo(x1 - head_len * Math.cos(angle - head_angle), y1 - head_len * Math.sin(angle - head_angle));
    ctx.lineTo(x1 - head_len * Math.cos(angle + head_angle), y1 - head_len * Math.sin(angle + head_angle));
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}



var c = document.getElementById("myCanvas2");
var context = c.getContext("2d");
context.beginPath();
context.fillStyle = "red";
context.arc(100, 50, 50, 0, 2 * Math.PI);
//context.arc(100, 130, 50, -1, 2 * Math.PI);
//context.arc(200, 100, 50, 0, 2 * Math.PI);
context.fill();
ctx = document.getElementById('canvas3').getContext('2d');

/* Draw barrier */
ctx.beginPath();
//ctx.moveTo(50, 30);
ctx.lineTo(450, 30);
ctx.stroke();

//draw_arrow(50, 180, 150, 30);
//draw_arrow(100, 50, 10, 50);
//draw_arrow(100, 80, 10, 80);
draw_arrow(100, 50, 10, 50);

function draw_arrow(x0, y0, x1, y1) {
    const width = 8;
    const head_len = 16;
    const head_angle = Math.PI / 6;
    const angle = Math.atan2(y1 - y0, x1 - x0);

    ctx.lineWidth = width;

    /* Adjust the point */
    x1 -= width * Math.cos(angle);
    y1 -= width * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(x1, y1);
    ctx.lineTo(x1 - head_len * Math.cos(angle - head_angle), y1 - head_len * Math.sin(angle - head_angle));
    ctx.lineTo(x1 - head_len * Math.cos(angle + head_angle), y1 - head_len * Math.sin(angle + head_angle));
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}


var c = document.getElementById("myCanvas3");
var context = c.getContext("2d");
context.beginPath();
context.fillStyle = "green";
context.arc(100, 50, 50, 0, 2 * Math.PI);
//context.arc(100, 130, 50, -1, 2 * Math.PI);
//context.arc(200, 100, 50, 0, 2 * Math.PI);
context.fill();




ctx = document.getElementById('canvas').getContext('2d');

/* Draw barrier */
ctx.beginPath();
//ctx.moveTo(50, 30);
ctx.lineTo(450, 30);
ctx.stroke();

//draw_arrow(50, 180, 150, 30);
draw_arrow(100, 50, 10, 50);
//draw_arrow(100, 80, 10, 80);

function draw_arrow(x0, y0, x1, y1) {
    const width = 8;
    const head_len = 16;
    const head_angle = Math.PI / 6;
    const angle = Math.atan2(y1 - y0, x1 - x0);

    ctx.lineWidth = width;

    /* Adjust the point */
    x1 -= width * Math.cos(angle);
    y1 -= width * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(x1, y1);
    ctx.lineTo(x1 - head_len * Math.cos(angle - head_angle), y1 - head_len * Math.sin(angle - head_angle));
    ctx.lineTo(x1 - head_len * Math.cos(angle + head_angle), y1 - head_len * Math.sin(angle + head_angle));
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}