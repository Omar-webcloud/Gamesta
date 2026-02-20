const toggleBtn = document.querySelector(".toggle-btn");
const navItems = document.querySelector(".nav-items");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    navItems.classList.toggle("active");
});
