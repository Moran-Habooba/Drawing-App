const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let painting = false;
const toolbar = document.getElementById("toolbar");
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;
canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

function startPosition(e) {
  const touch = e.touches[0];
  painting = true;
  startX = touch.pageX - canvasOffsetX;
  startY = touch.pageY - canvasOffsetY;
  // startX = e.offsetX;
  // startY = e.offsetY;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
}

function endPosition() {
  painting = false;
}

function draw(e) {
  if (!painting) return;
  // console.log(e.offsetX, e.offsetY);
  e.preventDefault();
  const touch = e.touches[0];
  const x = touch.pageX - canvasOffsetX;
  const y = touch.pageY - canvasOffsetY;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  // ctx.lineTo(e.offsetX, e.offsetY);
  ctx.lineTo(x, y);
  ctx.stroke();
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
});

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);

// מגע

canvas.addEventListener("touchstart", startPosition);
canvas.addEventListener("touchend", endPosition);
canvas.addEventListener("touchmove", draw);
