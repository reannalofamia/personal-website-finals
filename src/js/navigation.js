document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");

    menuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });

    // Close the menu if clicking outside
    document.addEventListener("click", function (event) {
        if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove("active");
        }
    });
});
