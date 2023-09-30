window.onload = function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const stroke = document.getElementById("stroke");
    const lineWidth = document.getElementById("lineWidth");
    const clear = document.getElementById("clear");
    let c = 0;
    let drawing = false;
    let x = 0;
    let y = 0;

    function drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.strokeStyle = stroke.value;
        ctx.lineWidth = lineWidth.value;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
    }

    canvas.addEventListener("mousedown", function (e) {
        // drawing = true;
        // x = e.offsetX;
        // y = e.offsetY;
        c++;
        if (c == 2) c = 0;
    });

    canvas.addEventListener("mousemove", function (e) {
        // if (drawing) {
        //     drawLine(x, y, e.offsetX, e.offsetY);
        //     x = e.offsetX;
        //     y = e.offsetY;
        // }
        if (c == 1) {
            console.log(e.layerX);
            console.log(e.layerY);
            ctx.beginPath();
            ctx.fillStyle = stroke.value;
            ctx.rect(e.layerX * 1 - 5, e.layerY * 1 - 5, 10, 10);
            ctx.fill();
            ctx.closePath();
        }
    });

    canvas.addEventListener("mouseup", function (e) {
        drawing = false;
    });
}