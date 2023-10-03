window.onload = function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const stroke = document.getElementById("stroke");

    const clear = document.getElementById("clear");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.backgroundColor = "white";

    let drawing = false;
    
    canvas.addEventListener("mousedown", function (e) {
        drawing = true;
    });
    canvas.addEventListener("mouseup", function (e) {
        drawing = false;
    });
    canvas.addEventListener("mouseout", function (e) {
        drawing = false;
    });
    canvas.addEventListener("mousemove", function (e) {
        if (drawing) {
            ctx.beginPath();
            ctx.fillStyle = "#f00";
            ctx.lineWidth = lineWidth.value;
            ctx.rect(e.layerX, e.layerY, 10, 10);
            ctx.fill();
            ctx.closePath();
        }
    });
}