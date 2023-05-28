function isMobile(element){
	for (var elemClass of element.classList) {
		console.log(elemClass)
		if (elemClass == "mobile"){
			return true;
		}
	}
	return false;
}

function scrollFix(){
	console.log("running scroll fix")
    footerBars = document.getElementsByClassName("footerBar")
    for(var elem of footerBars){
        if (isMobile(elem)){
            currFooterBar = elem
            break;
        }
    }
    contentElems = document.getElementsByClassName("content");
		content = null;
		for (var elem of contentElems){
			if (isMobile(elem)){
				content = elem;
				break;
			}
		}
		description = null;
		for (var elem of contentElems){
			if (isMobile(elem)){
				description = elem;
				break;
			}
		}
		if (content != null){
			content.style.marginBottom = currFooterBar.offsetHeight + "px"
			console.log("Fixed Scroll for mobile");
		}
		if (description != null){
			description.style.marginBottom = currFooterBar.offsetHeight + "px"
			console.log("Fixed Scroll for mobile");
		}
}

addEventListener("load", (event) => scrollFix());
addEventListener("resize", (event) => scrollFix());
