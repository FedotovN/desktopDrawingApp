customCursor = doc.getElementById("cursor")
canv.addEventListener("mousemove", (e)=>{
    customCursor.style.height = brushSize + "px"
    customCursor.style.width = brushSize + "px"
    customCursor.style.left = `${e.clientX}px`
    customCursor.style.top = `${e.clientY}px`
})
canv.addEventListener(('mousedown'), (e)=>{
    customCursor.style.borderWidth = "4px"
})
canv.addEventListener(('mouseup'), (e)=>{
    customCursor.style.borderWidth = "2px"
})
canv.addEventListener("mouseleave", ()=>{
    customCursor.style.borderColor = "transparent"
})
canv.addEventListener("mouseenter", ()=>{
    customCursor.style.borderColor = "rgb(77, 47, 78)"
})