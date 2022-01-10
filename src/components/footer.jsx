import React from "react";
import instagram from "../images/footer/instagram_footer.png";
import linkedin from "../images/footer/linkedin_footer.png";
import github from "../images/footer/github_footer.png";
import "../styles/styles.css";

let contact = [
  {
    id: 1,
    head: "Contact Us",
    emails: [
      {
        id: 1,
        name: "Person 1",
        email: "contact@example.com",
        to: "#",
      },
      {
        id: 2,
        name: "Person 2",
        email: "contact@example.com",
        to: "#",
      },
    ],
  },
];

let socials = [
  {
    id: 1,
    header: "Social Links",
    icons: [
      {
        id: 1,
        Link: "#",
        alt: "instagram",
        src: instagram,
      },
      {
        id: 2,
        Link: "#",
        alt: "linkedin",
        src: linkedin,
      },
      {
        id: 3,
        Link: "#",
        alt: "github",
        src: github,
      },
    ],
  },
];

const Foot = (props) => {
  const { emails, src, Link, alt, to, name } = props;
  return (
    <section>
      <div>
        <p className="whitespace-nowrap">{name}</p>
        <a href={to}>{emails}</a>
      </div>

      <div>
        <div>
          <a href={Link}>
            <img className="h-7 my-3 mx-auto lg:mx-0" src={src} alt={alt} />
          </a>
        </div>
      </div>
    </section>
  );
};

function Footer() {
  return (
    <section>
      <section className="font-Sansation font-bold py-2 grid grid-cols-10 gap-2">
        <div className="col-start-3 col-span-2 ">
          <div>
            <p className="uppercase  font-SanBold text-4xl text-white flex-row flex-wrap mt-4 mb-5">
              Contact Us
            </p>
          </div>
          <div className="grid grid-cols-8 gap-1">
            <div className="col-start-2 col-span-1 text-base text-white">
              {contact
                .filter((header) => {
                  return header.head === "Contact Us";
                })[0]
                .emails.map((ema) => {
                  return (
                    <Foot key={ema.id} emails={ema.email} name={ema.name} />
                  );
                })}
            </div>
          </div>
        </div>

        <div className="col-start-7 col-span-2">
          <div>
            <p className="uppercase text-white text-xl mx-auto mt-3 mb-4 ">
              Social Media
            </p>
          </div>
          <div>
            <div className="grid grid-rows-1 grid-flow-col gap-1 ">
              {socials
                .filter((title) => {
                  return title.header === "Social Links";
                })[0]
                .icons.map((im) => {
                  return (
                    <Foot
                      key={im.id}
                      src={im.src}
                      Link={im.Link}
                      alt={im.alt}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <p className="text-white font-Sansation items-left justify-left text-center text-1xl mb-5">
        ©️ IEEE CS VITC
      </p>
    </section>
  );
}
export default Footer;
