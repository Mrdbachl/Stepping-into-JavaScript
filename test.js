var i = i + 0;

for (i = 1; i < 10; i++){
	
	if(i === 5 || i === 3){
		
		continue;
		
	}
	
	console.log(i);
	
	if(i === 7){
		
		break;
		
	}

	
} 
	
console.log("I have broken out of the loop");