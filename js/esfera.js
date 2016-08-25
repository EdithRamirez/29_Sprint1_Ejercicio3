window.onload = function() {
	try {
		TagCanvas.Start('myCanvas','tags',{
		textColour: '#F75B7D',
		outlineColour: '#A3145A',
		reverse: true,
		depth: 0.8,
		maxSpeed: 0.05
		});
	} catch(e) {
		// something went wrong, hide the canvas container
		document.getElementById('myCanvasContainer').style.display = 'none';
	}
};