function scrollFix(){
    footerBars = document.getElementsByClassName("footerBar")
    for(var elem of footerBars){
        if (elem.classList[1] == "mobile"){
            currFooterBar = elem
            break;
        }
    }
    contentElems = document.getElementsByClassName("content");
		content = null;
		for (var elem of contentElems){
			if (elem.classList[0] == "mobile"){
				content = elem;
				break;
			}
		}
		description = null;
		for (var elem of contentElems){
			if (elem.classList[0] == "mobile"){
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

window.addEventListener('load', (event) => scrollFix());
addEventListener("resize", (event) => scrollFix());
