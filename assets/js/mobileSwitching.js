function mobileSwitching(baseDir){
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
		swapStyleSheet(baseDir + "desktop.css");
		currentLayout = "Desktop";
		scrollFix(currentLayout)
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
		scrollFix(currentLayout)
	} else {
		console.log("Resize detected but no switch necessary");
		scrollFix(currentLayout)
	}
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

function scrollFix(switchTo){
	console.log("running scroll fix")
	contentElems = document.getElementsByClassName("content");
	descriptionElems = document.getElementsByClassName("description")
	if (switchTo == "Mobile") {
		mobileFooterBar = document.getElementsByClassName("footerBar mobile")
		if (contentElems.length == 1){
			contentElems[0].style.marginBottom =	mobileFooterBar[0].offsetHeight+"px"
			console.log(mobileFooterBar[0].offsetHeight + "=" + contentElems[0].style.marginBottom);
		}
		if (descriptionElems.length == 1){
			descriptionElems[0].style.marginBottom =	mobileFooterBar[0].offsetHeight+"px"
			console.log(mobileFooterBar[0].offsetHeight + "=" + descriptionElems[0].style.marginBottom);
		}
	} else {
		desktopFooterBar = document.getElementsByClassName("footerBar desktop")
		if (contentElems.length == 1){
			contentElems[0].style.marginBottom =	desktopFooterBar[0].offsetHeight+"px"
		}
		if (descriptionElems.length == 1){
			descriptionElems[0].style.marginBottom =	desktopFooterBar[0].offsetHeight+"px"
		}
	}
}

var currentLayout;
var descMargin;
var contMargin;
var baseDir = getDirectory();
addEventListener("load", (event) => mobileSwitching(baseDir))
addEventListener("resize", (event) => mobileSwitching(baseDir));


