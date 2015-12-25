
function moveEnemy() {
	var enemy = document.getElementById("enemy");
	var left = 0;
	
	setInterval (function(){
		left += 6; 
		enemy.style.left =  left + 'px'; 
		if (left > window.innerWidth) {
			left = 0
			moveEnemy();
		}
		
		
},1000/30)

	
}