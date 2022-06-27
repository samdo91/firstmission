
 



const AnalogClock = $contaier =>
{let clock= $contaier


  clock_hands(clock)
  time_times(clock)
     setInterval( function (){  degcount (clock)}, 1000)

};

function clock_hands($contaier) {
   let clock=$contaier


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


}



function time_times($contaier) {
  let clock=$contaier
  console.log(clock)


  for (let i = 1; i <= 12; i++) {
    const time_time = document.createElement("div");
    time_time.classList.add("time");
    time_time.innerHTML = "|";
    time_time.classList.add("time" + i);
    clock.appendChild(time_time);
   
  }
}

function degcount ($contaier) {
  let second = $contaier.querySelector(".hand.second");
  let minute = $contaier.querySelector(".hand.minute");
  let hour = $contaier.querySelector(".hand.hour");
 

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



//  console.log(AnalogClock(clock))
//  clock.forEach((clock) =>AnalogClock(clock))
export default AnalogClock;

