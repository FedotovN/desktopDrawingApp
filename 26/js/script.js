let doc = document,
    main = doc.getElementById("main"),
    canvas = doc.getElementById("canvas"),
    settingsContainer = doc.getElementById("settings"),
    settingsOpened = false;
window.onload = () =>{
    doc.addEventListener(('mousemove'), (e)=>{
        if(e.clientX < 50 && !settingsOpened){
            main.style.backgroundColor = "#302a3a"
            canvas.style.backgroundColor = "#666"
            settingsContainer.classList.add("active")
            settingsContainer.classList.remove("unactive")
            settingsOpened = true
        }
        else if(e.clientX > 400 && settingsOpened){
            main.style.backgroundColor = "#413b4b"
            canvas.style.backgroundColor = "#fff"
            settingsContainer.classList.add("unactive")
            settingsContainer.classList.remove("active")
            settingsOpened = false
        }
    })
}