var cursor = "_";
var initialSpeed = 150;
var finalSpeed = 600;
typedElements = document.getElementsByClassName("typed");
// Initialize Elements
for(elemI in typedElements){
	currElem = typedElements[elemI];
	// For some reason there are jank elements
	if (currElem.id == undefined) break;
	currElem.i = 0;
	currElem.j = 0;
	// Spawn a process that will loop for each element
	typeWriter(currElem)
}

function typeWriter(currElem) {
	if(currElem.i < currElem.id.length +1){
		currElem.innerHTML = currElem.id.slice(0,currElem.i) + cursor;
		currElem.i++
		setTimeout(typeWriter, initialSpeed, currElem);
	}
	else{
		if (currElem.j == 0){
			currElem.innerHTML = currElem.id + "\u00A0";
			currElem.j = 1;
			setTimeout(typeWriter, finalSpeed, currElem);
		} else {
			currElem.innerHTML = currElem.id +  cursor;
			currElem.j = 0;
			setTimeout(typeWriter, finalSpeed, currElem);
		}
	}
}