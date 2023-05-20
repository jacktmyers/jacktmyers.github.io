function mobileSwitching(){
	// We want to switch to mobile if h/l > 1
	// We want to switch to deskto if h/l < 1
	const switchRatio = 1.1;
	var currRatio = window.innerHeight / window.innerWidth;

	// Get the elements corresponding to each layout
	mobileElems = document.getElementsByClassName("mobile");
	desktopElems = document.getElementsByClassName("desktop");

	if ((currRatio < switchRatio) && (currentLayout != "Desktop")){
		console.log("Switching Page to Desktop");
		for (var elem of mobileElems) {
			elem.oldDisplay = elem.style.display;
			elem.style.display = "none";
		}
		for (var elem of desktopElems) {
			elem.style.display = elem.oldDisplay;
		}
		swapStyleSheet("assets/css/desktop.css");
		currentLayout = "Desktop";
	} else if((currRatio >= switchRatio) && (currentLayout != "Mobile")){
		console.log("Switching Page to Mobile");
		for (var elem of desktopElems) {
			elem.oldDisplay = elem.style.display;
			elem.style.display = "none";
		}
		for (var elem of mobileElems) {
			elem.style.display = elem.oldDisplay;
		}
		swapStyleSheet("assets/css/mobile.css");
		currentLayout = "Mobile";
	} else {
		console.log("Resize detected but no switch necessary");
	}
}

function swapStyleSheet(sheet) {
	var sheets = document.getElementsByTagName('link');
	sheets[1].attributes.href.nodeValue = sheet;
}

var currentLayout;
document.onload = mobileSwitching();
addEventListener("resize", (event) => mobileSwitching());
