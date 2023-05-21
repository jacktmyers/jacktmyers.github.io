function scrollFix(){
    footerBars = document.getElementsByClassName("footerBar")
    for(var elem of footerBars){
        if (elem.classList[1] == "mobile"){
            currFooterBar = elem
            break;
        }
    }
    contentElems = document.getElementsByClassName("content");
		for (var elem of contentElems){
			if (elem.classList[0] == "mobile"){
				content = elem;
				break;
			}
		}
    content.style.marginBottom = currFooterBar.offsetHeight + "px"
		console.log("Fixed Scroll for mobile");
}

window.addEventListener('load', (event) => scrollFix());
addEventListener("resize", (event) => scrollFix());
