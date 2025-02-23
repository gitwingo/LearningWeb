document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".btn");
    const colorSpan = document.getElementById("color-id");

    btn.addEventListener("click", function () {
        let newColor = getRandomColor();
        document.body.style.backgroundColor = newColor;
        colorSpan.textContent = newColor;
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
