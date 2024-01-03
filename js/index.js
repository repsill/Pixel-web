const ctx = canvas.getContext('2d')

const display = {
	width: 1280,
	height: 720,
	offset: {
		x: 0,
		y: 0,
	},
}

const players = [createPlayer('Whalter White')]

function createPlayer(name) {
	return {
		x: 200,
		y: 200,
		radius: 25,
		color: 'white',
		name: name,
		speed: 1,
	}
}

function follow(object) {
	display.offset.x = object.x + display.width / 2
	display.offset.y = object.y + display.height / 2
}

function drawPlayer(player) {
	ctx.beginPath()
	ctx.fillStyle = player.color
	ctx.font = '16px Arial'
	ctx.textAlign = 'center'
	ctx.fillText(
		player.name,
		player.x + display.offset.x,
		player.y - 10 + display.offset.y - player.radius
	)
	ctx.arc(
		player.x + display.offset.x,
		player.y + display.offset.y,
		player.radius,
		0,
		Math.PI * 2
	)
	ctx.fill()
	ctx.strokeStyle = '#222'
	ctx.stroke()
	ctx.closePath()
}

document.addEventListener('keydown', e => {
	if (e.keyCode == 65) players[0].x -= players[0].speed
	if (e.keyCode == 68) players[0].x += players[0].speed
	if (e.keyCode == 87) players[0].y -= players[0].speed
	if (e.keyCode == 83) players[0].y += players[0].speed
})

function draw() {
	ctx.beginPath()
	ctx.fillStyle = '#333'
	ctx.fillRect(0, 0, 1280, 720)
	ctx.closePath()

	for (let p in players) {
		drawPlayer(players[p])
	}
	requestAnimationFrame(draw)
}
draw()
