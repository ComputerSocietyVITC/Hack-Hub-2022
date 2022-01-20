import React from "react";
import "../../styles/gradients.css";

const WhiteBox = ({ Title }) => {
  return (
    <section className="m-4 py-4 bg-[#F3F1F1] rounded-large p-2 drop-shadow-[6px_6px_2px_rgba(236,82,26,100)]">
      <section className="font-Ally font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-orange-400">
        {Title}
      </section>
    </section>
  );
};
const BlueBox = ({ Title }) => {
  return (
    <section className="m-4 py-4 bg-[#101743] rounded-large p-2 drop-shadow-[4px_4px_2px_#08CFE9]">
      <section className="font-Ally font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
        {Title}
      </section>
    </section>
  );
};

const Text =
  "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.Get access to over 20+ pages including a dashboard layout, charts,kanban board, calendar, and pre-order E-commerce & Marketing pages.Get access to over 20+ pages including a dashboard layout, charts,kanban board, calendar, and pre-order E-commerce & Marketing pages.";

const TextTitle = "Flowbite Application UI v2.0.0";

const ListItem = ({ Content, Title }) => {
  return (
    <>
      <li class="mb-10 ml-6">
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-black">
          {Title}
        </h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-black">
          {Content}
        </p>
      </li>
    </>
  );
};

const FrameWorks = () => {
  return (
    <>
      <section className="grid grid-rows-3">
        <section className=" row-start-1 row-span-1">
          <section className="pl-24 frameworks_grad text-4xl font-Ally font-bold">
            Frameworks
          </section>
        </section>
      </section>
      <section className="grid grid-cols-12">
        <section className="row-start-2 row-span-2 col-start-2 col-span-9">
          <section className="py-2">
            <ol className="border-l-4 dark:border-gray-700">
              <li className="list-disc text-4xl">
                <WhiteBox Title={TextTitle} />
              </li>
              <li className="list-disc text-4xl">
                <BlueBox Title={TextTitle} />
              </li>
              <li className="list-disc text-4xl">
                <WhiteBox Title={TextTitle} />
              </li>
            </ol>
          </section>
        </section>
      </section>
    </>
  );
};

export default FrameWorks;
