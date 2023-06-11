function mobileSwitching(baseDir){
	// We want to switch to mobile if h/l > 1.1
	// We want to switch to desktop if h/l < 1.1
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
		swapStyleSheet(baseDir + "desktop.css");
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
		swapStyleSheet(baseDir + "mobile.css");
		currentLayout = "Mobile";
	} else {
		console.log("Resize detected but no switch necessary");
	}
	loadingScreen = document.getElementById("loading")
	loadingScreen.style.display = "none"
}

function swapStyleSheet(sheet) {
	var sheets = document.getElementsByTagName('link');
	sheets[1].attributes.href.nodeValue = sheet;
}

function getDirectory(){
	var sheets = document.getElementsByTagName('link');
	var fullPath = sheets[1].attributes.href.nodeValue;
	const baseDirPattern = new RegExp("\/[^\/]*$");
	var fileName = fullPath.match(baseDirPattern);
	return fullPath.substring(0,fullPath.length-fileName[0].length+1);
}

var currentLayout;
var descMargin;
var contMargin;
var baseDir = getDirectory();
addEventListener("load", (event) => mobileSwitching(baseDir))
addEventListener("resize", (event) => mobileSwitching(baseDir));


