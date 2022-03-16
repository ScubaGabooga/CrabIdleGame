var crabs = 0;
var cash = 0;
var crabLegs = 0;

var handCount = 1;
var handCost = 10;

var crabCatcherCount = 0;
var crabCatcherCost = 25;
var crabHarvesterCount = 0;
var crabHarvesterCost = 250;
var crabSellerCount = 0;
var crabSellerCost = 50;

var crabsPerSec = 0;
var crabLegsPerSec = 0;
var cashPerSec = 0;

function updateAllUI(){
	document.getElementById("crabs").innerHTML = crabs;
	document.getElementById("cash").innerHTML = cash;
	document.getElementById("crabLegs").innerHTML = crabLegs;
	document.getElementById("handCount").innerHTML = handCount;
	document.getElementById("handCost").innerHTML = handCost;
	
	document.getElementById("crabCatcherCount").innerHTML = crabCatcherCount;
	document.getElementById("crabCatcherCost").innerHTML = crabCatcherCost;
	document.getElementById("crabHarvesterCount").innerHTML = crabHarvesterCount;
	document.getElementById("crabHarvesterCost").innerHTML = crabHarvesterCost;
	document.getElementById("crabSellerCount").innerHTML = crabSellerCount;
	document.getElementById("crabSellerCost").innerHTML = crabSellerCost;

	document.getElementById("crabsPerSec").innerHTML = crabsPerSec;
	document.getElementById("crabLegsPerSec").innerHTML = crabLegsPerSec;
	document.getElementById("cashPerSec").innerHTML = cashPerSec;

}

function pickUpCrab(handCount) {
	crabs += handCount;
	updateAllUI();
}

function harvestCrab(amount) {
	if (crabs > 0) {
		crabs -= amount;
		crabLegs += amount * 6;
		updateAllUI();
	}
}

function sellCrabLeg(amount) {
	if (crabLegs > 0) {
		crabLegs -= amount;
		cash += amount;
		updateAllUI();
	}
}
	
function buyHand(amount) {
	if (cash >= handCost) {
		cash -= handCost;
		handCount += amount;
		handCost = Math.round(handCost * 1.15);
		
		updateAllUI();
	}
}




function buyCrabCatcher(amount) {
	if (cash >= crabCatcherCost) {
		cash -= crabCatcherCost;
		crabCatcherCount += amount;
		crabCatcherCost = Math.round(crabCatcherCost * 1.15);
		
		crabsPerSec += amount;
		
		updateAllUI();
	}
}
function buyCrabHarvester(amount) {
	if (cash >= crabHarvesterCost) {
		cash -= crabHarvesterCost;
		crabHarvesterCount += amount;
		crabHarvesterCost = Math.round(crabHarvesterCost * 1.15);
		
		crabsPerSec -= amount;
		crabLegsPerSec += amount * 6;
		
		updateAllUI();
	}
}
function buyCrabSeller(amount) {
	if (cash >= crabSellerCost) {
		cash -= crabSellerCost;
		crabSellerCount += amount;
		crabSellerCost = Math.round(crabSellerCost * 1.15);
		
		crabLegsPerSec -= amount;
		cashPerSec += amount;
		
		updateAllUI();
	}
}





setInterval(function() {
	pickUpCrab(crabCatcherCount);
	harvestCrab(crabHarvesterCount);
	sellCrabLeg(crabSellerCount);
}, 1000) // 1000ms
