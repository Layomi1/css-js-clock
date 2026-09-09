const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondDegree = (second / 60) * 360;
  const minuteDegree = (minute / 60) * 360 + 90;

  const hourDegree = (hour / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  secondHand.style.backgroundColor = "silver";

  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate, 1000);
