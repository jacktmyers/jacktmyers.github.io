function hover(img){
	if(img.src.endsWith("Pushed.png")){
		// The image has already been set correctly, no need to change
		return
	}
	img.src = img.src.substring(0,img.src.length-4) + "Pushed.png"
}

function hoverOut(img){
	if(!img.src.endsWith("Pushed.png")){
		// The image has already been set correctly, no need to change
		return
	}
	img.src = img.src.substring(0,img.src.length-10) + ".png"
}
