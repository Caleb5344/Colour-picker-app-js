document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById("colorPicker");
    const colorPreview = document.getElementById("colorPreview");
    const colorCode = document.getElementById("colorCode");

    colorPicker.addEventListener("input", function() {
        const selectedColor = colorPicker.value;
        colorPreview.style.backgroundColor = selectedColor;
        colorCode.textContent = selectedColor;
    });
});
