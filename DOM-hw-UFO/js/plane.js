
var planeBottom = 0;
var planeLeft = 0;

var isShooting = false;

function handleFire (keyCode, enable) {
	if (keyCode == 32){
		isShooting = enable;
	}
}

function shoot () {	
	var plane = document.getElementById('plane');
	
	var bulletBottom = 0;
	var bulletLeft = plane.style.left;
    
	bullet.style.visibility = 'visible';
	
	setInterval(function(){
			bulletBottom += 2; 
			
			bullet.style.bottom = bulletBottom + 'px' ; 
			bullet.style.left = bulletLeft;
	},1000/20)
	
	document.getElementById("bullets").value -= 1; 
}

document.addEventListener("click", function() {shoot() });


var step = 3;
var planeLeft = 0;

window.addEventListener('load', function(){
    var plane = document.getElementById('plane');
    var bullet = document.querySelector('#bullet')
    
    
    document.addEventListener('keydown', function(Event){
        switch(Event.keyCode){
            case 37:
            	if (planeLeft > 0){
                planeLeft -= step;
            	} else {
            		planeLeft = 0;
            	}
            	break;
            case 39:
                planeLeft += step;
                break;
        }
        plane.style.left = planeLeft + 'px';
        
        handleFire (Event.keyCode,true);
        
        if (isShooting) {
			shoot();
		}
    });
    
	document.addEventListener('keyup',function(event){
		handleFire (event.keyCode, false);
	},false);

    document.addEventListener("mousemove", function(event){
    	if (event.clientX < 55){
    		plane.style.left = 0;
    	} else {
    		 plane.style.left = (event.clientX - 55) + 'px';
    	}
    	
    	 bullet.style.left = (event.clientX) + 'px';
      
    });
})

