import React, { useEffect, useState, useRef } from "react";
 // Make sure to install gsap as a dependency
import "../../css/timer.css"
const Timer = () => {
   const [timerDays, setTimerDays] = useState(0);
   const [timerHours, setTimerHours] = useState(0);
   const [timerMinutes, setTimerMinutes] = useState(0);
   const [timerSeconds, setTimerSeconds] = useState(0);

   let interval;

   const startTimer = () => {
     const countDownDate = new Date("March 29,2024 ").getTime();

     interval = setInterval(() => {
       const now = new Date().getTime();

       const distance = countDownDate - now;

       const days = Math.floor(distance / (24 * 60 * 60 * 1000));
       const hours = Math.floor(
         (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
       );
       const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
       const seconds = Math.floor((distance % (60 * 1000)) / 1000);

       if (distance < 0) {
         // Stop Timer

         clearInterval(interval.current);
       } else {
         // Update Timer
         setTimerDays(days);
         setTimerHours(hours);
         setTimerMinutes(minutes);
         setTimerSeconds(seconds);
       }
     });
   };

   useEffect(() => {
     startTimer();
   });


  return (
    <div className="w-max">
      <section className="timer-container">
        <section className="timer">
          <div className="clock w-full md:h-32 h-32">
            <section>
              <p className="md:text-[2rem] text-[1rem]">{timerDays}</p>
              <small className="text-lg">Days</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <small className="text-lg">Hours</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <small className="text-lg">Minutes</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <small className="text-lg">Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Timer;
