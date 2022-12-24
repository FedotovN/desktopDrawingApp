let size = doc.getElementById("sizeRange"),
    textSize = doc.getElementById("textSize")
size.addEventListener("input", (e)=>{
    brushSize = size.value
    textSize.value = size.value
})
textSize.addEventListener(("input"), (e)=>{
    if(textSize.value > maxBrushSize) textSize.value = maxBrushSize
    brushSize = textSize.value
    size.value = textSize.value
})