let size = doc.getElementById("sizeRange"),
    textSize = doc.getElementById("textSize"),
    shapes = doc.getElementById("shapes"),
    shapeOptions = shapes.querySelectorAll(".option"),
    brushes = doc.getElementById("brushes"),
    brushOptions = brushes.querySelectorAll(".option"),
    customColor = doc.getElementById("custom"),
    colorOptions = doc.querySelectorAll(".colorPreset"),
    chosenBrushColor = "#000"
shapeOptions.forEach(element => {
    element.addEventListener(("click"), (e)=>{
        console.log(e.currentTarget.id)
        element.classList.add("option_chosen")
        selectedTool = element.id
        brushColor = chosenBrushColor
        shapeOptions.forEach(el => {
            if(el != element) el.classList.remove("option_chosen")
        })
        brushOptions.forEach(el => {
            el.classList.remove("option_chosen")
        })
    })
});
brushOptions.forEach(element => {
    element.addEventListener(("click"), (e)=>{
        console.log(e.currentTarget.id)
        element.classList.add("option_chosen")
        switch(element.id){
            case "brush":
                selectedTool = "brush"
                brushColor = chosenBrushColor
                break
            case "eraser":
                selectedTool = "eraser"
                brushColor = "#fff"
                break
        }
        brushOptions.forEach(el => {
            if(el != element) el.classList.remove("option_chosen")
        })
        shapeOptions.forEach(el => {
            el.classList.remove("option_chosen")
        })
    })
});
colorOptions.forEach(element => {
    element.addEventListener(('click'), e=>{
        colorOptions.forEach(el =>{el.classList.remove("chosen")})
        element.classList.add("chosen")
        brushColor = element.style.backgroundColor
        chosenBrushColor = element.style.backgroundColor
    })
})
customColor.addEventListener(("change"), e=>{
    customColor.parentNode.style.backgroundColor = customColor.value
    customColor.parentNode.click()
})
customColor.on
size.addEventListener("input", (e)=>{
    brushSize = size.value
    textSize.value = size.value
})
textSize.addEventListener(("input"), (e)=>{
    if(textSize.value > maxBrushSize) textSize.value = maxBrushSize
    brushSize = textSize.value
    size.value = textSize.value
})
