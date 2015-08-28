var JET = (function() {
	// approximation source: http://stackoverflow.com/questions/7706339/grayscale-to-red-green-blue-matlab-jet-color-scale

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
		hex: [],
	};

	/*var R = new Uint8Array(256),
		G = new Uint8Array(256),
		B = new Uint8Array(256),
		H = [];*/

	//var r, g, b;
	for (var i=0; i<256; i++) {

		/*
		r = Math.min(255, 4*(i-96), 255 - 4*(i-224));
		r = r < 0 ? 0 : r;

		g = Math.min(255, 4*(i-32), 255 - 4*(i-160));
		g = g < 0 ? 0 : g;

		b = Math.min(255, 4*i + 127, 255 - 4*(i-96));
		b = b < 0 ? 0 : b;

		R[i] = r;
		G[i] = g;
		B[i] = b;

		H.push(rgbToHex(r,g,b));*/

		colors.r[i] = Math.min(255, 4*(i-96), 255 - 4*(i-224));
		colors.r[i] = colors.r[i] < 0 ? 0 : colors.r[i];

		colors.g[i] = Math.min(255, 4*(i-96), 255 - 4*(i-224));
		colors.g[i] = colors.g[i] < 0 ? 0 : colors.g[i];

		colors.b[i] = Math.min(255, 4*(i-96), 255 - 4*(i-224));
		colors.b[i] = colors.b[i] < 0 ? 0 : colors.b[i];

		colors.hex.push(rgbToHex(colors.r[i],colors.g[i],colors.b[i]));

	}

	//return {r: R, g: G, b: B, hex: H};
	return colors;

})();