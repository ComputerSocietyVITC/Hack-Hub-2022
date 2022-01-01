import * as React from "react";
import "../styles/gradients.css";
import Countdown from "react-countdown";

const LiveEvent = () => {
  return <>The Event is live.</>;
};

const RenderAction = ({ days, hours, minutes, seconds, Completed }) => {
  if (Completed) {
    return (
      <>
        <LiveEvent />
      </>
    );
  } else {
    return (
      <>
        {days}:{hours}:{minutes}:{seconds}
      </>
    );
  }
};

const DecoratedText = ({ Text }) => {
  return <section className="text-Atmos text-white  ">{Text}</section>;
};

const Boxes = ({ ReactElement }) => {
  return (
    <>
      <section className="bg-transparent">{ReactElement}</section>
    </>
  );
};

//bg-gradient-radial 

const CountDown = () => {
  return (
    <>
      <section className="text-white">
        <Countdown date={"16 February 2022"} renderer={RenderAction} />
      </section>
      <section className="grid grid-cols-12 gap-2">
        <section className="col-start-3 col-span-1">
          <section className=" bg-gradient-to-l ">
            <Boxes ReactElement={<DecoratedText Text={"Hello"} />} />
          </section>
        </section>
        <section className="col-start-4 col-span-1">
          <section className=" bg-gradient-to-l ">
            <Boxes ReactElement={<DecoratedText Text={"Hello"} />} />
          </section>
        </section>
        <section className="col-start-5 col-span-1">
          <section className=" bg-gradient-to-l ">
            <Boxes ReactElement={<DecoratedText Text={"Hello"} />} />
          </section>
        </section>
        <section className="col-start-6 col-span-1">
          <section className=" bg-gradient-to-l ">
            <Boxes ReactElement={<DecoratedText Text={"Hello"} />} />
          </section>
        </section>
        <section className="col-start-7 col-span-1">
          <section className=" bg-gradient-to-l ">
            <Boxes ReactElement={<DecoratedText Text={"Hello"} />} />
          </section>
        </section>
        <section className="col-start-8 col-span-1">
          <section className=" bg-gradient-to-l ">
            <Boxes ReactElement={<DecoratedText Text={"Hello"} />} />
          </section>
        </section>
      </section>
    </>
  );
};

export default CountDown;
