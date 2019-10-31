let myHeader = {};

function setup() {
	sea.screen.width = 800;
	createCanvas(sea.screen.width, sea.screen.height);
	background(sea.screen.background);
	myHeader = new sea.header({
		'id': 'monHeader',

		'color': '#333',
		'fontSize': 4
	});
	myHeader.link('click', sayHello);
}

function draw() {


}

function mousePressed() {

	sea.mousePressed();

}


function sayHello() {
	text('HELLO', 100, 100);
}
