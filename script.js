var timer, l, dir, started, credit, point
var div = [] 
var points = []
var lamp = document.getElementsByClassName('lamp')
var creditD = document.getElementById('credit')
var pointD = document.getElementById('point')
var startBtnD = document.getElementById('btn-start')
var resetBtnD = document.getElementById('btn-reset')
for (var i = 0;i < 9; i += 1){
	div.push(lamp[i])
}
console.log(creditD)

reset()
function reset(){
	points = []
	for (var i = 0;i < 9; i += 1){
		div[i].style.backgroundColor = 'blue'
		points[i] = (60 + Math.ceil(Math.random() * 20))
		points[4] = 100
		div[i].innerHTML = points[i]
	}
	points[9] = 0
	timer = null
	dir = true
	l = 0
	point = 0
	started = false
	credit = 3
	creditD.innerHTML = credit
	pointD.innerHTML = point
	startBtnD.disabled = false
	startBtnD.focus()
}

function start(){
	if (credit == 0){
		startBtnD.disabled = true
		resetBtnD.focus()
	}
	if (!started && credit > 0){
		timer = setInterval(changeColor,50)
		credit -= 1
		creditD.innerHTML = credit
		startBtnD.innerHTML = 'STOP'
		resetBtnD.disabled = true
		started = true
	} else if (started){
		clearInterval(timer);
		var p = 9
		for (var i = 0;i < 9; i += 1){
			if (div[i].style.backgroundColor == 'red'){
				p = i
			}
		}
		point += points[p]
		pointD.innerHTML = point
		startBtnD.innerHTML = 'START'
		resetBtnD.disabled = false
		started = false
	}
}

function changeColor(){
	if (dir && l < 9){
		div[l].style.backgroundColor = 'red'
		if (l-1 != -1){
			div[l-1].style.backgroundColor = 'blue'
		}
		l += 1
	} else if (!dir && l >= 0){
		div[l].style.backgroundColor = 'red'
		if (l+1 != 9){
			div[l+1].style.backgroundColor = 'blue'
		}
		l -= 1
	}
	if (l == 9){
		dir = !dir
		l -= 1
	}
	if (l == -1){
		dir = !dir
		l += 1
	}
}