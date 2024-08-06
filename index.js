function ToggleMenu(menuToggle, menu){
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active")
    
        if (menu.classList.contains("active")) {
            menuToggle.textContent = "Close Menu"
        } else{
            menuToggle.textContent = "Show Menu"
        }
    })
}

module.exports = ToggleMenu 