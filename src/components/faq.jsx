import * as React from "react";
import arrow from "../images/svgs/arrow.svg";
import FAQdata from "../helpers/FAQdata";
import { useNav } from "../helpers/customHooks/useNav";

const FAQComponent = ({ Question, Answer }) => {
  const [state, setState] = React.useState(false);
  const [FAQHeight, setFAQHeight] = React.useState('0px');

  const toggleFAQ = () => {
    setState(!state);
    setFAQHeight(state ? '0px' : `${contentSpace.current.scrollHeight}px`)
  }
  const contentSpace = React.useRef(null)

  return (
    <>
      <div
        onClick={toggleFAQ}
        className="cursor-pointer lg:mx-28 grid grid-cols-12 bg-gradient-to-r from-gradViolet to-gradPink text-lg md:text-xl text-center text-white shadow-xl hover:shadow-md rounded-xl py-3 my-2"
      >
        <div className="ml-auto hidden md:block" >
          <div className="h-3 w-3">
            <img src={arrow} alt="arrow" className={"transition-transform duration-400 transform" + (state ? " rotate-90" : " rotate-0")} />
          </div>
        </div>
        <div className="col-span-12 md:col-span-10 px-4">{Question}</div>
        <div className="hidden md:block">
          <div className="h-3 w-3">
            <img src={arrow} alt="arrow" className={"transition-transform duration-400 transform" + (state ? " rotate-90" : " rotate-180")} />
          </div>
        </div>
      </div>
      <div ref={contentSpace} className="transition-max-height duration-300 ease-in-out overflow-hidden" style={{ maxHeight: FAQHeight }}>
        <p className="py-2 px-10 text-white text-lg md:text-xl text-center md:w-3/4 mx-auto">
          {Answer}
        </p>
      </div>
    </>
  );
};

const FrequentlyAskedQuestions = () => {
  const faqsRef = useNav("Faqs");
  const [faqState, setFaqState] = React.useState(false);
  const [FAQHeightLast, setFAQHeightLast] = React.useState('0px');

  const toggleFAQLast = () => {
    setFaqState(!faqState);
    setFAQHeightLast(faqState ? '0px' : `${contentSpaceLast.current.scrollHeight}px`)
  }
  const contentSpaceLast = React.useRef(null)

  return (
    <>
      <div
        className="min-h-screen px-8 sm:px-0 mt-24"
        ref={faqsRef}
        id="faqsContainer"
      >
        <section className="sm:w-1/3 lg:w-1/5 my-8 py-12">
          <section className="text-white font-Sansation font-bold text-5xl text-center">
            FAQs
          </section>
          <div class="h-1 w-full rounded-lg bg-white"></div>
        </section>
        <div className="w-full md:px-40">
          {FAQdata.map((faq) =>
            faq.sr % 2 !== 0 ? (
              <FAQComponent Question={faq.Question} Answer={faq.Answer} />
            ) : (
              <FAQComponent Question={faq.Question} Answer={faq.Answer} />
            )
          )}
          <>
            <div
              onClick={toggleFAQLast}
              className="cursor-pointer lg:mx-28 grid grid-cols-12 bg-gradient-to-r from-gradViolet to-gradPink text-lg md:text-xl text-center text-white shadow-xl hover:shadow-md rounded-xl py-3 my-2"
            >
              <div className="ml-auto hidden md:block">
                <div className="h-3 w-3">
                  <img src={arrow} alt="arrow" className={"transition-transform duration-400 transform" + (faqState ? " rotate-90" : " rotate-0")} />
                </div>
              </div>
              <div className="col-span-12 md:col-span-10 px-4">I still have some doubt, how can I resolve them?</div>
              <div className="hidden md:block">
                <div className="h-3 w-3">
                  <img src={arrow} alt="arrow" className={"transition-transform duration-400 transform" + (faqState ? " rotate-90" : " rotate-180")} />
                </div>
              </div>
            </div>
            <div ref={contentSpaceLast} className="transition-max-height duration-300 ease-in-out overflow-hidden " style={{ maxHeight: FAQHeightLast }}>
              <p className="p-2 md:px-10 text-white text-lg md:text-xl text-center md:w-3/4 mx-auto">
                You can ping us on <a className="underline" href="https://discord.gg/UeGSd6fKNW" target="_blank">Discord</a>, on <a className="underline" href="https://twitter.com/ieeecsvitc/" target="_blank">Twitter</a>, on <a className="underline" href="https://www.instagram.com/comsoc.vitcc/" target="_blank">Instagram</a> or you can mail us at <a className="underline" href="mailto:ieeecomputersociety@vit.ac.in" target="_blank">ieeecomputersociety@vit.ac.in</a> at any time of the day. We will try to respond as soon as possible.
              </p>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default FrequentlyAskedQuestions;
