import * as React from "react";
import faqribbon1 from "../images/faqribbon1.png";
import faqribbon2 from "../images/faqribbon2.png";
import arrow from "../images/svgs/arrow.svg";
import FAQdata from "../helpers/FAQdata"
import { useNav } from '../helpers/customHooks/useNav';

const OddComponent = ({ Question, Answer }) => {

  const [des, setDes] = React.useState(false);

  return (
    <>
      <div className="md:w-3/5 mx-auto">
        <div
          className="mx-auto w-full relative md:my-4 font-Arya my-2 cursor-pointer"
          onClick={() => setDes(!des)}
        >
          <img src={faqribbon1} alt="Ribbon 1" className="md:h-16 md:w-full" />
          <div className="text-white text-xs md:text-xl absolute md:top-4 md:left-20 md:pl-2 top-3 left-12">
            {Question}
          </div>
          <div className="absolute md:top-4 md:left-14 top-3 left-7">
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
          <div className="absolute md:top-4 md:right-14 top-3 right-7">
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

const EvenComponent = ({ Question, Answer }) => {
  const [state, setState] = React.useState(false);
  return (
    <>
      <div className="md:w-2/3 mx-auto">
        <div
          className="mx-auto w-full relative md:my-4 my-2 font-Arya cursor-pointer"
          onClick={() => setState(!state)}
        >
          <img src={faqribbon2} alt="Ribbon 2" className="md:h-16 md:w-full" />
          <div className="text-white text-xs md:text-xl absolute md:top-4 md:left-32 top-2 left-12">
            {Question}
          </div>
          <div className="absolute md:top-4 md:left-24 top-2 left-7">
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
          <div className="absolute md:top-4 md:right-24 top-2 right-7">
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

  const faqsRef = useNav('Faqs');

  return (
    <>
      <div className="min-h-screen px-8 sm:px-0 mt-24" ref={faqsRef} id='faqsContainer'>
        <section className="sm:w-1/3 lg:w-1/5 my-8 py-12">
          <section className="text-white font-Sansation font-bold text-5xl text-center">
            FAQs
          </section>
          <div class="h-1 w-full rounded-lg bg-white"></div>
        </section>
        <div className="w-full md:px-40">
          {FAQdata.map((faq) =>
            faq.sr % 2 !== 0 ?
              <OddComponent Question={faq.Question} Answer={faq.Answer} />
              :
              <EvenComponent Question={faq.Question} Answer={faq.Answer} />
          )}
        </div>
      </div>
    </>
  );
};

export default FAQ;
