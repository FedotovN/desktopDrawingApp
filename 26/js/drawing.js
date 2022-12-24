let canv = doc.getElementById("canvas"),
    ctx = canv.getContext('2d'),
    brushSize = 5,
    maxBrushSize = 60,
    isDrawing = false
canv.height = canv.offsetHeight
canv.width = canv.offsetWidth
canv.addEventListener(('mousedown'), ()=>{isDrawing = true})
canv.addEventListener(('mouseup'), ()=>{
    isDrawing = false
    ctx.beginPath()
})
canv.addEventListener(('mousemove'),(e)=>{
    if(!isDrawing) return
    ctx.lineWidth = brushSize
    ctx.lineTo(e.offsetX, e.offsetY,)
    ctx.stroke()
})