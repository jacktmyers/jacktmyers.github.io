//document.onload = scrollFix();
window.onresize = scrollFix();

function scrollFix(){
    const mobileSize = 1100
    homeBars = document.getElementsByClassName("homeBar")
    footerBars = document.getElementsByClassName("footerBar")
    // Choose an element based on the screen size
    var elemType = "desktop"
    if(screen.width <= mobileSize){
        elemType = "mobile"
    }
    // We only filter footerbars for now because there
    // does not exist a mobile and desktop version
    currHomeBar = homeBars[0]
    for(var elem of footerBars){
        if (elem.classList[1] == elemType){
            currFooterBar = elem
            break;
        }
    }
    console.log(document.getElementById("gallery").offsetHeight)
    typedHeader = document.getElementsByClassName("typed")[0];
    typedHeader.style.marginTop = currHomeBar.offsetHeight + typedHeader.offsetHeight/2 + "px"
}

addEventListener("resize", (event) => mobileSwitching());
