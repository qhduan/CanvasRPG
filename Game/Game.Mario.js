Game.Mario = (function() {
	var ThisClass = createjs.Hero.extend({
		spawnPoint: { x: 200, y: 200 },
		
		movements: [
			{ direction: "down",			frames: [0, 1, 0, 2] },
			{ direction: "downRight", frames: [3, 4, 3, 5] },
			{ direction: "right",			frames: [6, 7, 6, 8] },
			{ direction: "upRight", 	frames: [9, 10, 9, 11] },
			{ direction: "up", 				frames: [12, 13, 12, 14] },
			{ direction: "upLeft", 	frames: [15, 16, 15, 17] },
			{ direction: "left",			frames: [18, 19, 18, 20] },
			{ direction: "downLeft", 		frames: [21, 22, 21, 23] },
		],
		
		spriteOptions: {
			images: [Game.images.mario_movements],
			frames: { width: 100, height: 100, regX: 25, regY: 10 },
			frequency: 3
		},

		// Position relative to reg point
		// Used for collision detection
		// eg: Mario's feet.
		collisionArea: {
			x: 0, y: 75,
			width: 45,
			height: 25
		},
	});
	
	return ThisClass;
})();