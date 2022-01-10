import * as React from "react";
import faqribbon1 from "../images/faqribbon1.png";
import faqribbon2 from "../images/faqribbon2.png";

const data = {
  Text: "How can I register for the event",
  Answer: "Click on this!",
};

const OddComponent = ({ text, Answer }) => {
  const [des, setDes] = React.useState(false);
  return (
    <>
      <div className="md:w-1/2 mx-auto">
        <div
          className="mx-auto w-full relative md:my-4 font-Arya my-2 cursor-pointer"
          onClick={() => setDes(!des)}
        >
          <img src={faqribbon1} alt="Ribbon 1" />
          <div className="text-white text-lg md:text-2xl absolute md:top-4 md:left-32 top-1 left-12">
            {text}
          </div>
          <div className="absolute md:top-4 md:left-12 top-2 left-5">
            {des ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-10 md:w-10 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-10 md:w-10 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </div>
          <div className="absolute md:top-4 md:right-12 top-2 right-5">
            {des ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-10 md:w-10 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-10 md:w-10 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            )}
          </div>
        </div>
        <div>
          <p
            className={
              "p-2 text-white text-lg md:text-xl text-center" +
              (des ? " block" : " hidden")
            }
          >
            {Answer}
          </p>
        </div>
      </div>
    </>
  );
};

const EvenComponent = ({ text, Answer }) => {
  const [state, setState] = React.useState(false);
  return (
    <>
      <div className="md:w-7/12 mx-auto">
        <div
          className="mx-auto w-full relative md:my-4 my-2 font-Arya cursor-pointer"
          onClick={() => setState(!state)}
        >
          <img src={faqribbon2} alt="Ribbon 2" />
          <div className="text-white text-lg md:text-2xl absolute md:top-4 md:left-1/4 top-1 left-12">
            {text}
          </div>
          <div className="absolute md:top-4 md:left-12 top-2 left-5">
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-10 md:w-10 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-10 md:w-10 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </div>
          <div className="absolute md:top-4 md:right-12 top-2 right-5">
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-10 md:w-10 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-10 md:w-10 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            )}
          </div>
        </div>
        <div>
          <p
            className={
              "p-2 text-white text-lg md:text-xl text-center" +
              (state ? " block" : " hidden")
            }
          >
            {Answer}
          </p>
        </div>
      </div>
    </>
  );
};

const FAQ = () => {
  return (
    <>
      <div className="h-screen">
        <div className="w-full p-6 md:p-40">
          <OddComponent text={data.Text} Answer={data.Answer} />
          <EvenComponent text={data.Text} Answer={data.Answer} />
          <OddComponent text={data.Text} Answer={data.Answer} />
          <EvenComponent text={data.Text} Answer={data.Answer} />
          <OddComponent text={data.Text} Answer={data.Answer} />
        </div>
      </div>
    </>
  );
};

export default FAQ;
