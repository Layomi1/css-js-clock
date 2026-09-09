const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const secondDegree = (second / 60) * 360;

  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  const minute = now.getMinutes();
  const hour = now.getHours();
}
setInterval(setDate, 1000);
