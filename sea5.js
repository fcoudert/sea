let sea5 = (function() {



	let clickArray = [];
	let allObjects = [];



	let screen = {};
	let w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[0];
	screen.width = w.innerWidth || e.clientWidth || g.clientWidth,
		screen.height = w.innerHeight || e.clientHeight || g.clientHeight;
	screen.background = 100;

	return {
		button: function() {

		},
		header: function(jsonArray) {
			this.id = jsonArray.id || '';
			this.backgroundColor = jsonArray.backgroundColor || '#000';
			this.height = jsonArray.height || screen.height / 10;
			this.isVisible = jsonArray.isVisible || true;
			this.x = 0;
			this.y = 0;
			this.width = jsonArray.width || screen.width;
			this.redraw = jsonArray.reDraw || false;
			this.move = jsonArray.move || function() {};
			this.seaType = 'header';
			this.display = function() {
				if (this.isVisible === true) {
					fill(this.backgroundColor);
					rect(this.x, this.y, this.width, this.height);
				}
			}
			this.link = function(event, functionToCall) {
				if (event === 'click') {
					var tmp = {};
					tmp.obj = this;
					tmp.functionToCall = functionToCall;
					clickArray.push(tmp);
				}
			}
			allObjects.push(this);
		},

		box: function(jsonArray) {
			this.id = jsonArray.id || '';
			this.backgroundColor = jsonArray.backgroundColor || '#000';
			this.height = jsonArray.height || screen.height / 10;
			this.isVisible = jsonArray.isVisible || true;
			this.x = jsonArray.x || 0;
			this.y = jsonArray.y || 0;
			this.width = jsonArray.width || screen.width;
			this.redraw = jsonArray.reDraw || false;
			this.move = jsonArray.move || function() {};
			this.seaType = 'box';
			this.display = function() {
				if (this.isVisible === true) {
					fill(this.backgroundColor);
					rect(this.x, this.y, this.width, this.height);
				}
			}
			this.link = function(event, functionToCall) {
				if (event === 'click') {
					var tmp = {};
					tmp.obj = this;
					tmp.functionToCall = functionToCall;
					clickArray.push(tmp);
				}
			}
			allObjects.push(this);
		},






		screen: screen,

		draw: function() {
			allObjects.forEach(function(elem) {
				if (elem.isVisible === true) elem.display();
			})

		},
		move: function() {
			allObjects.forEach(function(elem) {
				if (elem.move !== undefined) elem.move();
			})
		},


		mousePressed: function() {
			clickArray.forEach(function(elem) {
				if (mouseX > elem.obj.x && mouseX < (elem.obj.x + elem.obj.width) && mouseY > elem.obj.y && mouseY < (elem.obj.y + elem.obj.height)) {
					if (typeof elem.functionToCall === "function") {
						var t = elem.functionToCall.bind(elem.obj);
						t();
					}
				}
			})
		}
	}



})();
