




const AnalogClock = $container => {
  // do somethin  g!
  const clock = document.querySelector(".analog-clock")
  const hand_hour = document.createElement("div")
  hand_hour.classList.add("hand")
  hand_hour.classList.add("hour")
  clock.appendChild(hand_hour)



  const hand_minute = document.createElement("div")
  hand_minute.classList.add("hand")
  hand_minute.classList.add("minute")
  clock.appendChild(hand_minute)



  const hand_second = document.createElement("div")
  hand_second.classList.add("hand")
  hand_second.classList.add("second")
  clock.appendChild(hand_second)

  time_times()
  degcount()
  setInterval(degcount, 1000)

};



const time_times = $container => {
  const clock = document.querySelector(".analog-clock")
  for (let i = 1; i <= 12; i++) {
    const time_time = document.createElement("div");
    time_time.classList.add("time");
    time_time.innerHTML = "|";
    time_time.classList.add("time" + i);
    clock.appendChild(time_time);
  }
}

const degcount = $container => {
  let second = document.querySelector(".hand.second");
  let minute = document.querySelector(".hand.minute");
  let hour = document.querySelector(".hand.hour");


  let secondnum = Number(getComputedStyle(second).getPropertyValue("--deg"));
  let minutenum = Number(getComputedStyle(minute).getPropertyValue("--deg"));
  let hournum = Number(getComputedStyle(hour).getPropertyValue("--deg"));

  secondnum = secondnum + 6
  second.style.setProperty('--deg', secondnum)
  if (secondnum % 360 === 0) {
    minutenum = minutenum + 6;
  }
  if (minute % 360 === 0) {
    hournum = hournum + 30;
  }
  minute.style.setProperty('--deg', minutenum)
  hour.style.setProperty('--deg', hournum)
}
export default AnalogClock;
