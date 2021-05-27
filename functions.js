function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

// let x = document.getElementById('hamburgerBtn');
// x.onclick = toggleMenu;

document.getElementById("hamburgerBtn").addEventListener("click", toggleMenu);