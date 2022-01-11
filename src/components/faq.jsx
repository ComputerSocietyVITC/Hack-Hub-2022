import * as React from "react";
import faqribbon1 from "../images/faqribbon1.png";
import faqribbon2 from "../images/faqribbon2.png";
import arrow from "../images/svgs/arrow.svg";

const data = [{
  Text: "How can i register for hackhub?",
  Answer: "Click on this!",
},
{
  Text: "How can i register for hackhub?",
  Answer: "Click on this!",
},
{
  Text: "How can i register for hackhub?",
  Answer: "Click on this!",
},
{
  Text: "How can i register for hackhub?",
  Answer: "Click on this!",
},
{
  Text: "How can i register for hackhub?",
  Answer: "Click on this!",
}];

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
          <div className="text-white text-lg md:text-2xl absolute md:top-4 md:left-36 top-1 left-12">
            {text}
          </div>
          <div className="absolute md:top-4 md:left-16 top-3 left-7">
            {des ? (
              <div className="md:h-4 md:w-4 h-2 w-2">
                <img src={arrow} alt="arrow" className="transform rotate-90" />
              </div>
            ) : (
              <div className="md:h-4 md:w-4 h-2 w-2">
                <img src={arrow} alt="arrow" />
              </div>
            )}
          </div>
          <div className="absolute md:top-4 md:right-16 top-3 right-7">
            {des ? (
              <div className="md:h-4 md:w-4 h-2 w-2">
                <img src={arrow} alt="arrow" className="transform rotate-90" />
              </div>
            ) : (
              <div className="md:h-4 md:w-4 h-2 w-2">
                <img src={arrow} alt="arrow" className="transform rotate-180" />
              </div>
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
          <div className="text-white text-lg md:text-2xl absolute md:top-4 md:left-48 top-1 left-12">
            {text}
          </div>
          <div className="absolute md:top-4 md:left-28 top-3 left-7">
            {state ? (
              <div className="md:h-4 md:w-4 h-2 w-2">
                <img src={arrow} alt="arrow" className="transform rotate-90" />
              </div>
            ) : (
              <div className="md:h-4 md:w-4 h-2 w-2">
                <img src={arrow} alt="arrow" />
              </div>
            )}
          </div>
          <div className="absolute md:top-4 md:right-28 top-3 right-7">
            {state ? (
              <div className="md:h-4 md:w-4 h-2 w-2">
                <img src={arrow} alt="arrow" className="transform rotate-90" />
              </div>
            ) : (
              <div className="md:h-4 md:w-4 h-2 w-2">
                <img src={arrow} alt="arrow" className="transform rotate-180" />
              </div>
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
      <div className="h-screen px-8 sm:px-0 pt-24">
        <section className="sm:w-1/3 lg:w-1/5 py-20">
          <section className="text-white font-Sansation font-bold text-5xl text-center">
            FAQs
          </section>
          <div class="h-1 w-full rounded-lg bg-white"></div>
        </section>
        <div className="w-full px-6 md:px-40">
          {data.map((faq, index) =>
            index % 2 == 0 ?
              <OddComponent text={faq.Text} Answer={faq.Answer} />
              :
              <EvenComponent text={faq.Text} Answer={faq.Answer} />
          )}
        </div>
      </div>
    </>
  );
};

export default FAQ;
