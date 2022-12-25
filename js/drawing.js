let canv = doc.getElementById("canvas"),
    ctx = canv.getContext('2d'),
    customCursor = doc.getElementById("cursor"),
    clearBtn = doc.getElementById('clear'),
    saveBtn = doc.getElementById('save'),
    brushSize = 5,
    maxBrushSize = 100,
    shapeName = '',
    drawingShape = false,
    brushColor = "#000",
    isDrawing = false,
    isErasing = false,
    snapshot = '',
    selectedTool = "brush"
let prevMouseX, prevMouseY
canv.style.cursor = "none"
canv.height = canv.offsetHeight
canv.width = canv.offsetWidth
setBckg = () => {
    ctx.fillStyle = "#fff"
    ctx.fillRect(0,0,canv.width, canv.height)
}
setBckg()
drawTriangle = (e) => {
    ctx.beginPath()
    ctx.moveTo(prevMouseX, prevMouseY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY)
    ctx.closePath()
    ctx.stroke()
}
drawRectangle = (e) => {
    ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY-e.offsetY)
}
drawCircle = (e) => {
    ctx.beginPath()
    let radius = Math.sqrt(Math.pow((prevMouseX-e.offsetX), 2) + Math.pow((prevMouseY-e.offsetY),2))
    ctx.arc(prevMouseX, prevMouseY, radius, 0, 2*Math.PI)
    ctx.stroke()
}
drawLine = (e) => {
    ctx.beginPath()
    ctx.moveTo(prevMouseX, prevMouseY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
}
saveBtn.addEventListener(('click'), (e)=>{
    let link = doc.createElement('a')
    link.download = `${Date.now()} picture`
    link.href = canv.toDataURL()
    link.click()
})
clearBtn.addEventListener(('click'), ()=>{
    ctx.clearRect(0,0, canv.width, canv.height)
    setBckg()
})
canv.addEventListener(('mousedown'), (e)=>{
    isDrawing = true
    prevMouseX = e.offsetX
    prevMouseY = e.offsetY
    snapshot = ctx.getImageData(0,0,canvas.width, canvas.height)
})
canv.addEventListener(('mouseup'), ()=>{
    isDrawing = false
    ctx.beginPath()
})
canv.addEventListener(('mousemove'),(e)=>{
    if(!isDrawing) return
    ctx.putImageData(snapshot, 0,0)
    ctx.lineWidth = brushSize
    ctx.strokeStyle = brushColor
    console.log(brushColor)
    switch(selectedTool){
        case "brush":
            ctx.lineTo(e.offsetX, e.offsetY)
            ctx.stroke()
            break
        case "eraser":
            ctx.lineTo(e.offsetX, e.offsetY)
            ctx.stroke()
            break
        case "triangle":
            drawTriangle(e)
            break
        case "rectangle":
            drawRectangle(e)
            break
        case "line":
            drawLine(e)
            break
        case "circle":
            drawCircle(e)
            break
    }
})
