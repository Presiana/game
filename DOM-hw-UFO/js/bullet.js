/*
function handleFire (keyCode, enable) {
	if (keyCode == 32 ){
		isShooting = enable;
	}
}

function shoot (planeBottom, planeLeft) {	
	var plane = document.getElementById('plane');

	bullet.style.left = planeLeft;
	
	var bulletBottom = planeBottom;
	
	bullet.style.visibility = 'visible';
	
	setInterval(function(){
			bulletBottom += 2; 
			
			bullet.style.bottom = bulletBottom + 'px' ; 
	},1000/20)
	
	document.getElementById("bullets").value -= 1; 
}
*/

/*
var step = 2;
var planeBottom = 0;
var planeLeft = 0;

var isShooting = false;

var direction = {
		left: false,
		right: false,
		top: false,
		bottom: false
};



function handleDirection (keyCode,enable){
		switch(keyCode){
			case 37:
				direction.left = enable;
				break;
			case 38:
				direction.top = enable;
				break;
			case 39:
				direction.right = enable;
				break;
			case 40: 
				direction.bottom = enable;
				break;
		}
}


function handleFire (keyCode, enable) {
	if (keyCode == 32 ){
		isShooting = enable;
	}
}

function shoot (planeBottom, planeLeft) {	
	var plane = document.getElementById('plane');

	bullet.style.left = planeLeft;
	
	var bulletBottom = planeBottom;
	
	bullet.style.visibility = 'visible';
	
	setInterval(function(){
			bulletBottom += 2; 
			
			bullet.style.bottom = bulletBottom + 'px' ; 
	},1000/20)
	
	document.getElementById("bullets").value -= 1; 
}

window.addEventListener('load', function(){

	var plane = document.getElementById('plane');
	
	document.addEventListener('keydown',function(event){
		handleDirection(event.keyCode,true); 
		handleFire (event.keyCode, true);
	},false);
	
	document.addEventListener('keyup',function(event){
		handleDirection(event.keyCode,false);
		handleFire (event.keyCode, false);
	},false);
	
	function gameLoop () {

		if (direction.left){
			if (planeLeft == 0){
				planeLeft = 0;
			} else {
				planeLeft -= step;
			}
			
		}
		if (direction.right) {
			if (planeLeft < 1100){
				planeLeft += step;
			}
		}
		if (direction.top){
			if (planeBottom < 300){
				planeBottom += step;
			}
		}
		if (direction.bottom){
			if (planeBottom == 0){
				planeBottom = 0;
			} else {
				planeBottom -= step;
			}
		}
		
		plane.style.bottom = planeBottom + 'px';
		plane.style.left = planeLeft + 'px';
		
		if (isShooting) {
			shoot(planeBottom,planeLeft);
		}
		
	
		requestAnimationFrame (gameLoop);
	}
	gameLoop();
},false);
*/