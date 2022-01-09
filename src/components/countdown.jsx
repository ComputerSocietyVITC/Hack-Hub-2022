import React, { useState, useEffect, useRef } from "react";
import "../styles/gradients.css";

const CountDown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();

  const startTimer = () => {
    interval = setInterval(() => {
      let now = new Date().getTime();
      let distance = new Date(2022, 3, 2).getTime() - now;
      let days = String(Math.floor(distance / (1000 * 60 * 60 * 24)));
      let hours = String(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      let minutes = String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      );
      let seconds = String(Math.floor((distance % (1000 * 60)) / 1000));
      if (days.length === 1) days = "0" + days;
      if (hours.length === 1) hours = "0" + hours;
      if (minutes.length === 1) minutes = "0" + minutes;
      if (seconds.length === 1) seconds = "0" + seconds;
      if (distance < 0) {
        //stop timer and load Play Area
        clearInterval(interval.current);
        window.location.reload();
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <>
      <section className="px-2 md:px-5 py-5 font-Sansation font-bold">
        <section className="text-2xl sm:text-4xl md:text-6xl text-center flex w-full items-center justify-center ">
          <section className="mx-1 md:mx-4 grid grid-cols-2">
            <section className="w-10 sm:w-16 md:w-24 mx-1 md:mx-2 h-10 sm:h-16 md:h-24 rounded-lg p-1 sm:p-4 md:p-5 bg-gray-900">
              <section className="text-gradPink">{timerDays[0]}</section>
            </section>
            <section className="w-10 sm:w-16 md:w-24 mx-1 md:mx-2 h-10 sm:h-16 md:h-24 rounded-lg p-1 sm:p-4 md:p-5 bg-gray-900">
              <section className="text-gradPink">{timerDays[1]}</section>
            </section>
          </section>
          <section className="mx-1 md:mx-4 grid grid-cols-2">
            <section className="w-10 sm:w-16 md:w-24 mx-1 md:mx-2 h-10 sm:h-16 md:h-24 rounded-lg p-1 sm:p-4 md:p-5 bg-gray-900">
              <section className="text-gradPink">{timerHours[0]}</section>
            </section>
            <section className="w-10 sm:w-16 md:w-24 mx-1 md:mx-2 h-10 sm:h-16 md:h-24 rounded-lg p-1 sm:p-4 md:p-5 bg-gray-900">
              <section className="text-gradPink">{timerHours[1]}</section>
            </section>
          </section>
          <section className="mx-1 md:mx-4 grid grid-cols-2">
            <section className="w-10 sm:w-16 md:w-24 mx-1 md:mx-2 h-10 sm:h-16 md:h-24 rounded-lg p-1 sm:p-4 md:p-5 bg-gray-900">
              <section className="text-gradPink">{timerMinutes[0]}</section>
            </section>
            <section className="w-10 sm:w-16 md:w-24 mx-1 md:mx-2 h-10 sm:h-16 md:h-24 rounded-lg p-1 sm:p-4 md:p-5 bg-gray-900">
              <section className="text-gradPink">{timerMinutes[1]}</section>
            </section>
          </section>
          <section className="mx-1 md:mx-4 grid grid-cols-2">
            <section className="w-10 sm:w-16 md:w-24 mx-1 md:mx-2 h-10 sm:h-16 md:h-24 rounded-lg p-1 sm:p-4 md:p-5 bg-gray-900">
              <section className="text-gradPink">{timerSeconds[0]}</section>
            </section>
            <section className="w-10 sm:w-16 md:w-24 mx-1 md:mx-2 h-10 sm:h-16 md:h-24 rounded-lg p-1 sm:p-4 md:p-5 bg-gray-900">
              <section className="text-gradPink">{timerSeconds[1]}</section>
            </section>
          </section>
        </section>
        <section className="text-md md:text-3xl grid grid-cols-4 text-center xl:w-2/3 mt-1 md:mt-4 mx-auto bg-clip-text text-transparent bg-gradient-to-r from-gradViolet via-gradPink to-gradViolet uppercase">
          <section className="">Days</section>
          <section className="">Hours</section>
          <section className="">Minutes</section>
          <section className="">Seconds</section>
        </section>
      </section>
    </>
  );
};

export default CountDown;
