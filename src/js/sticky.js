window.addEventListener("scroll", () => {
    document.querySelectorAll(".art").forEach((img, index) => {
        let speed = 0.3 + index * 0.02;
        img.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
});
