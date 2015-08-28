var JET = (function() {
	// source: http://stackoverflow.com/questions/7706339/grayscale-to-red-green-blue-matlab-jet-color-scale

	function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	};

	function rgbToHex(r, g, b) {
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	};

	var colors = {
		r: new Uint8Array(256),
		g: new Uint8Array(256),
		b: new Uint8Array(256),
		hex: []
	}

	var r, g, b;
	for (var i=0; i<256; i++) {

		r = Math.min(255, 4*(i-96), 255 - 4*(i-224));
		r = r < 0 ? 0 : r;

		g = Math.min(255, 4*(i-32), 255 - 4*(i-160));
		g = g < 0 ? 0 : g;

		b = Math.min(255, 4*i + 127, 255 - 4*(i-96));
		b = b < 0 ? 0 : b;
		
		colors.r[i] = r;
		colors.g[i] = g;
		colors.b[i] = b;
		colors.hex.push(rgbToHex(r,g,b));
	}

	colors.index = function(min, max, value) {
		if (value > max) return 255;
		else if (value < 0) return 0;
		else return Math.floor(256*(value - min)/(max-min));
	}

	return colors;

})();