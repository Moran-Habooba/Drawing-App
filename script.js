const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let painting = false;
const toolbar = document.getElementById("toolbar");
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;
canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("touchstart", startPositionTouch);
canvas.addEventListener("touchend", endPositionTouch);
canvas.addEventListener("touchmove", drawTouch);

function startPosition(e) {
  painting = true;

  startX = e.offsetX;
  startY = e.offsetY;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
}

function endPosition() {
  painting = false;
}

function draw(e) {
  if (!painting) return;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

function startPositionTouch(e) {
  if (e.touches && e.touches.length > 0) {
    const touch = e.touches[0];
    painting = true;
    const startX = touch.pageX - canvasOffsetX;
    const startY = touch.pageY - canvasOffsetY;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
  }
}

function endPositionTouch() {
  painting = false;
}

function drawTouch(e) {
  if (!painting) return;
  e.preventDefault();
  if (e.touches && e.touches.length > 0) {
    const touch = e.touches[0];
    const x = touch.pageX - canvasOffsetX;
    const y = touch.pageY - canvasOffsetY;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

console.log(toolbar.id);

toolbar.addEventListener("click", (e) => {
  if (e.target.id === "clear") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});
toolbar.addEventListener("change", (e) => {
  if (e.target.id === "color") {
    ctx.strokeStyle = e.target.value;
  }
  if (e.target.id === "lineWidth") {
    lineWidth = parseInt(e.target.value);

    lineWidth = e.target.value;
  }
  if (e.target.id === "eraserSize") {
    lineWidth = parseInt(e.target.value);

    lineWidth = e.target.value;
  }
});

const fillImage = document.getElementById("fillImage");
fillImage.addEventListener("click", () => {
  ctx.fillStyle = document.getElementById("color").value;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// *****************
let erasing = false;
const eraserButton = document.getElementById("eraser");
const pencilButton = document.getElementById("pencil");
eraserButton.addEventListener("click", () => {
  toggleEraser();
});
pencilButton.addEventListener("click", () => {
  togglePencil();
});

function toggleEraser() {
  erasing = !erasing;
  if (erasing) {
    ctx.globalCompositeOperation = "destination-out";
    setEraserCursor();
    canvas.addEventListener("mousemove", draw);
  } else {
    ctx.globalCompositeOperation = "source-over";
    canvas.classList.remove("canvas-eraser");
    canvas.removeEventListener("mousemove", draw);
  }
}

function togglePencil() {
  erasing = false;
  ctx.globalCompositeOperation = "source-over";
  canvas.style.cursor = "default";
}
