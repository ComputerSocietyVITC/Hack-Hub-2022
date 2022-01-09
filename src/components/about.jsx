import React from "react";
import "../styles/about.css";

let page = [
  {
    id: 1,
    textHeader: "ABOUT",
    About:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae arcu dui. Praesent ut eros nulla. Phasellus ex tellus, pulvinar quis placerat semper, maximus a lorem. Nullam hendrerit, erat blandit iaculis eleifend, justo orci aliquet mi, finibus imperdiet augue lorem eget lacus. Quisque efficitur consectetur nisl, dapibus ullamcorper risus hendrerit sit amet. Donec rhoncus diam imperdiet, aliquam turpis et, aliquet nunc. Fusce augue magna, bibendum aliquam ullamcorper id, rhoncus bibendum nunc. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In lacinia mauris eget massa rutrum dapibus. Cras molestie tempor tellus, a posuere leo. ",
  },
];

function About() {
  return (
    <section className="bground">
      {page.map((pag) => {
        return <Show key={pag.id} {...pag} />;
      })}
    </section>
  );
}

const Show = (props) => {
  const { textHeader, About } = props;
  return (
    <section className="grid grid-cols-12">
      <section className="col-start-2 col-span-1">
        <section className="text-white font-Sansation font-bold text-6xl">
          {textHeader}
        </section>
      </section>
      <section className="col-start-2 col-span-10 font-Arya text-bold text-xl text-white">
        {About}
      </section>
    </section>
  );
};
export default About;
