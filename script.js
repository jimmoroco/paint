// Obtener los elementos del DOM
const canvas = document.getElementById("drawing-board");
const ctx = canvas.getContext("2d");
const stroke = document.getElementById("stroke");
const lineWidth = document.getElementById("lineWidth");
const clear = document.getElementById("clear");

// Ajustar el tamaño del canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables para controlar el estado del dibujo
let drawing = false;
let x = 0;
let y = 0;

// Función para dibujar una línea entre dos puntos
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.strokeStyle = stroke.value;
    ctx.lineWidth = lineWidth.value;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

// Función para borrar el lienzo
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Función para guardar la imagen como un archivo PNG
function saveImage() {
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "paint.png";
    link.click();
}

// Eventos del ratón
canvas.addEventListener("mousedown", function (e) {
    // Comenzar a dibujar
    drawing = true;
    // Obtener las coordenadas actuales del ratón
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mousemove", function (e) {
    if (drawing) {
        // Dibujar una línea desde el punto anterior al actual
        drawLine(x, y, e.offsetX, e.offsetY);
        // Actualizar las coordenadas del ratón
        x = e.offsetX;
        y = e.offsetY;
    }
});

canvas.addEventListener("mouseup", function (e) {
    // Dejar de dibujar
    drawing = false;
});

// Eventos de los botones
clear.addEventListener("click", function () {
    // Borrar el lienzo
    clearCanvas();
});

save.addEventListener("click", function () {
    // Guardar la imagen
    saveImage();
});
