var KFENG = KFENG || {};
var _canvas, _ctx;

// helpers
function random(min, max) {
	// TODO make more random
	return (Math.random() * (max - min) + min);
}

function circle(x, y, r) {
	_ctx.beginPath();
	_ctx.arc(x, y, r, 0, 2*Math.PI);
	_ctx.stroke();
}

// main
(function() {
var xs = [];
var N = 5;
var t = 0;

function init() {
	_canvas = document.querySelector("#canvas");
	_ctx = _canvas.getContext("2d");

	_canvas.width = window.innerWidth;
	_canvas.height = window.innerHeight;

	for (var i = 0; i < N; i++) {
		xs[i] = {};
		xs[i].x = random(0, _canvas.width);
		xs[i].y = random(0, _canvas.width);
		xs[i].R = random(30, 80);
	}
}

function update() {
	requestAnimationFrame(update);
	t++;

	for (var i = 0; i < N; i++) {
		xi = xs[i];
		xi.x += random(-1, 1);
		xi.y += random(-1, 1);
		xi.r = xi.R * Math.sin(t);

		circle(xi.x, xi.y, xi.r);
	}
}

init();
// _anim = requestAnimationFrame(update);
})();
