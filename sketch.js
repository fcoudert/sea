let myHeader = {}; 
let myBox = {};


function setup() {
	sea5.screen.width = 800;
	createCanvas(sea5.screen.width, sea5.screen.height);
	background(sea5.screen.background);
	myHeader = new sea5.header({
		'id': 'monHeader',
		'backgroundColor': 'red',
		'isVisible': true,
	});
	myHeader.link('click', sayHello);



	myBox = new sea5.box({
		'id': 'movingBox',
		'backgroundColor': 'green',
		'isVisible': true,
		'x': sea5.screen.width / 2,
		'y': sea5.screen.height,
		'width': 50,
		'height': 50,
		'move': function() {
			this.y = this.y - 1;
			if (this.y < 0)(this.y = sea5.screen.height);
		}
	})

	myBox.link('click', sayHello);





}

function draw() {
	background(sea5.screen.background);
	sea5.move();
	sea5.draw(); //call all display function when reDraw is true

}

function mousePressed() {
	sea5.mousePressed(); //call linked function on objects you've created
}





//  specifics......


function sayHello() {
	//this is the object wich have been clicked
	text('you click on ' + this.id, 100, 100);
}
