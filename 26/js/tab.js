let doc = document,
    main = doc.getElementById("main"),
    blank = doc.getElementById("blank"),
    canvas = doc.getElementById("canvas"),
    settingsContainer = doc.getElementById("settings"),
    settingsTab = doc.getElementById("settingsTab")
window.onload = () =>{
    settingsTab.addEventListener(("mouseenter"), () => {
        settingsContainer.classList.add("active")
        settingsContainer.classList.remove("inactive")
        blank.style.zIndex = 0;
        blank.style.opacity = ".4"
    })
    settingsContainer.addEventListener(("mouseleave"), ()=>{
        settingsContainer.classList.add("inactive")
        settingsContainer.classList.remove("active")
        blank.style.zIndex = -1;
        blank.style.opacity = "0"
    })
}