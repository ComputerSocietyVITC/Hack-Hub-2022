import React, { useState, useEffect, useRef } from "react";
import "../styles/gradients.css";

// const LiveEvent = () => {
//   return <>The Event is live.</>;
// };

// const RenderAction = ({ days, hours, minutes, seconds, Completed }) => {
//   if (Completed) {
//     return (
//       <>
//         <LiveEvent />
//       </>
//     );
//   } else {
//     return (
//       <>
//         {days}:{hours}:{minutes}:{seconds}
//       </>
//     );
//   }
// };

// const DecoratedText = ({ Text }) => {
//   return <section className="text-Atmos text-white  ">{Text}</section>;
// };

// const Boxes = ({ ReactElement }) => {
//   return (
//     <>
//       <section className="bg-transparent">{ReactElement}</section>
//     </>
//   );
// };

//bg-gradient-radial 

const CountDown = () => {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  let interval = useRef();

  const startTimer = () => {
    interval = setInterval(() => {
      var now = new Date().getTime();
      var distance = new Date(2022, 3, 2).getTime() - now;
      var days = String(Math.floor(distance / (1000 * 60 * 60 * 24)));
      var hours = String(Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))));
      var minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      var seconds = String(Math.floor((distance % (1000 * 60)) / 1000));
      if (days.length === 1)
        days = "0" + days;
      if (hours.length === 1)
        hours = "0" + hours;
      if (minutes.length === 1)
        minutes = "0" + minutes;
      if (seconds.length === 1)
        seconds = "0" + seconds;
      if (distance < 0) {
        //stop timer and load Play Area
        clearInterval(interval.current);
        window.location.reload();
      }
      else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  }
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, [])

  return (
    <>
      <div className="px-2 md:px-5 py-5 font-Sansation font-bold">
        <div className="text-2xl sm:text-4xl md:text-6xl text-center flex w-full items-center justify-center ">
          <div className="mx-1 md:mx-4 grid grid-cols-2">
            <div className="w-10 sm:w-16 md:w-24 mx-1 md:mx-2 h-10 sm:h-16 md:h-24 rounded-lg p-1 sm:p-4 md:p-5 bg-gray-900">
              <div className="text-gradPink">{timerDays[0]}</div>
            </div>
            <div className="w-10 sm:w-16 md:w-24 mx-1 md:mx-2 h-10 sm:h-16 md:h-24 rounded-lg p-1 sm:p-4 md:p-5 bg-gray-900">
              <div className="text-gradPink">{timerDays[1]}</div>
            </div>
          </div>
          <div className="mx-1 md:mx-4 grid grid-cols-2">
            <div className="w-10 sm:w-16 md:w-24 mx-1 md:mx-2 h-10 sm:h-16 md:h-24 rounded-lg p-1 sm:p-4 md:p-5 bg-gray-900">
              <div className="text-gradPink">{timerHours[0]}</div>
            </div>
            <div className="w-10 sm:w-16 md:w-24 mx-1 md:mx-2 h-10 sm:h-16 md:h-24 rounded-lg p-1 sm:p-4 md:p-5 bg-gray-900">
              <div className="text-gradPink">{timerHours[1]}</div>
            </div>
          </div>
          <div className="mx-1 md:mx-4 grid grid-cols-2">
            <div className="w-10 sm:w-16 md:w-24 mx-1 md:mx-2 h-10 sm:h-16 md:h-24 rounded-lg p-1 sm:p-4 md:p-5 bg-gray-900">
              <div className="text-gradPink">{timerMinutes[0]}</div>
            </div>
            <div className="w-10 sm:w-16 md:w-24 mx-1 md:mx-2 h-10 sm:h-16 md:h-24 rounded-lg p-1 sm:p-4 md:p-5 bg-gray-900">
              <div className="text-gradPink">{timerMinutes[1]}</div>
            </div>
          </div>
          <div className="mx-1 md:mx-4 grid grid-cols-2">
            <div className="w-10 sm:w-16 md:w-24 mx-1 md:mx-2 h-10 sm:h-16 md:h-24 rounded-lg p-1 sm:p-4 md:p-5 bg-gray-900">
              <div className="text-gradPink">{timerSeconds[0]}</div>
            </div>
            <div className="w-10 sm:w-16 md:w-24 mx-1 md:mx-2 h-10 sm:h-16 md:h-24 rounded-lg p-1 sm:p-4 md:p-5 bg-gray-900">
              <div className="text-gradPink">{timerSeconds[1]}</div>
            </div>
          </div>
        </div>
        <div className="text-md md:text-3xl grid grid-cols-4 text-center xl:w-2/3 mt-1 md:mt-4 mx-auto bg-clip-text text-transparent bg-gradient-to-r from-gradViolet via-gradPink to-gradViolet uppercase">
          <div className="">Days</div>
          <div className="">Hours</div>
          <div className="">Minutes</div>
          <div className="">Seconds</div>
        </div>
      </div>
    </>
  );
};

export default CountDown;
