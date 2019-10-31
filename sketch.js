let myHeader = {}; 
let myBox = {};


function setup() {
	sea.screen.width = 800;
	createCanvas(sea.screen.width, sea.screen.height);
	background(sea.screen.background);
	myHeader = new sea.header({
		'id': 'monHeader',
		'backgroundColor': 'red',
		'isVisible': true,
	});
	myHeader.link('click', sayHello);



	myBox = new sea.box({
		'id': 'movingBox',
		'backgroundColor': 'green',
		'isVisible': true,
		'x': sea.screen.width / 2,
		'y': sea.screen.height,
		'width': 50,
		'height': 50,
		'move': function() {
			this.y = this.y - 1;
			if (this.y < 0)(this.y = sea.screen.height);
		}
	})

	myBox.link('click', sayHello);





}

function draw() {
	background(sea.screen.background);
	sea.move();
	sea.draw(); //call all display function when reDraw is true

}

function mousePressed() {
	sea.mousePressed(); //call linked function on objects you've created
}





//  specifics......


function sayHello() {
	//this is the object wich have been clicked
	text('you click on ' + this.id, 100, 100);
}
