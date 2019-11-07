var beers= parseInt(prompt("How many beers do you want"));
counter=1;

for(i=beers; i>=0; i--){
	if(counter<=0){
		alert("You are shitfaced");
		break;
	// if(i=counter; 0>=i; i--)

}else{
	alert(beers + " bottles of beer on the wall")
	alert(beers + " bottles of beer")
	if(i=beers-1){
	alert("Take " +counter+ " down, Pass them around")
	beers=beers-counter;
	alert(beers + " bottles of beer ");
	counter++;
	if(counter>=beers){
		alert(beers+ " bottle of beer on the wall");
		alert(beers+ " bottle of beer");
		alert("You are shitfaced");
		break;
	}
	}
}
}

alert("Go home you're drunk");