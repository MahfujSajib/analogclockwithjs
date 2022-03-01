setInterval(() => {
  d = new Date();
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();

  hRotation = 30 * hr + min / 2;
  mRotation = 6 * min;
  sRotation = 6 * sec;

  hour.style.transform = `rotate(${hRotation}deg)`;
  minute.style.transform = `rotate(${mRotation}deg)`;
  seconds.style.transform = `rotate(${sRotation}deg)`;
}, 1000);
