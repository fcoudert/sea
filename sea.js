let sea = (function() {


	let clickArray = [];



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
			this.id = jsonArray.id || '0';
			this.backgroundColor = jsonArray.backgroundColor || '#000';
			this.color = jsonArray.color || '#fff';
			this.fontSize = jsonArray.fontSize || 10;
			this.height = jsonArray.height || screen.height / 10;
			fill(this.backgroundColor);
			rect(0, 0, screen.width, this.height);
			this.link = function(event, functionToCall) {
				if (event === 'click') {
					var tmp = {};
					tmp.x = 0;
					tmp.y = 0;
					tmp.width = screen.width;
					tmp.height = this.height;
					tmp.functionToCall = functionToCall;
					clickArray.push(tmp);
				}
			}

		},
		screen: screen,


		mousePressed: function() {
			clickArray.forEach(function(elem) {
				if (mouseX > elem.x && mouseX < (elem.x + elem.width) && mouseY > elem.y && mouseY < (elem.y + elem.height)) {
					elem.functionToCall();
				}
			})
		}
	}



})();
