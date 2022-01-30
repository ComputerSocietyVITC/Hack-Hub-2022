import React from "react";
import instagram from "../images/footer/instagram.png";
import linkedin from "../images/footer/linkedin.png";
import twitter from "../images/footer/twitter.png";
import comsoc from "../images/footer/comsoc.png";
import hackhublogo from "../images/hackhublogo.png";
import "../styles/styles.css";
import { useNav } from '../helpers/customHooks/useNav';

let contact = [
  {
    id: 1,
    head: "Contact Us",
    emails: [
      {
        id: 1,
        name: "Samank Gupta",
        email: "samankgupta@gmail.com",
      },
      {
        id: 2,
        name: "Tanay Bhadula",
        email: "tanaybhadula2002@gmail.com",
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
        Link: "https://www.instagram.com/comsoc.vitcc/",
        alt: "instagram",
        src: instagram,
      },
      {
        id: 2,
        Link: "https://www.linkedin.com/company/ieee-computer-society-vit-chennai/",
        alt: "linkedin",
        src: linkedin,
      },
      {
        id: 3,
        Link: "https://twitter.com/ieeecsvitc/",
        alt: "twitter",
        src: twitter,
      },
      {
        id: 4,
        Link: "https://www.ieeecsvitc.com/",
        alt: "comsoc",
        src: comsoc,
      },
    ],
  },
];

const ContactFoot = (props) => {
  const { emails, name } = props;
  return (
    <section>
      <div className="my-4">
        <p className="font-semibold">{name}</p>
        <a href={'mailto:' + emails}>{emails}</a>
      </div>
    </section>
  );
};

const SocialFoot = (props) => {
  const { src, Link, alt } = props;
  return (
    <section>
      <div>
        <a href={Link} target="_blank" rel="noreferrer">
          <img className="h-10 lg:h-7 mx-auto lg:mx-0" src={src} alt={alt} />
        </a>
      </div>
    </section>
  );
};

function Footer() {

  const contactRef = useNav('Contact');

  return (
    <section className="bg-black mt-16" ref={contactRef} id='contactContainer'>
      <div class="h-1 w-full bg-gradient-to-r from-gradPink to-gradViolet"></div>
      <section className="py-2 grid lg:grid-cols-3 lg:gap-44">
        <div className="lg:ml-auto text-center order-1 lg:order-1">
          <div>
            <p className="uppercase font-SanBold text-4xl text-white flex-row flex-wrap mt-4 mb-5">
              Contact Us
            </p>
          </div>
          <div>
            <div className="text-white">
              {contact
                .filter((header) => {
                  return header.head === "Contact Us";
                })[0]
                .emails.map((ema) => {
                  return (
                    <ContactFoot key={ema.id} emails={ema.email} name={ema.name} />
                  );
                })}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center order-3 lg:order-2 m-6 lg:m-0">
          <div>
            <img src={hackhublogo} alt="Hackhub 2022" />
          </div>
        </div>
        <div className="order-2 lg:order-3">
          <div>
            <p className="uppercase font-SanBold text-4xl text-white flex-row flex-wrap mt-4 mb-5 text-center lg:mr-16">
              Social Links
            </p>
          </div>
          <div className="py-10 mx-4">
            <div className="grid grid-rows-1 grid-flow-col">
              {socials
                .filter((title) => {
                  return title.header === "Social Links";
                })[0]
                .icons.map((im) => {
                  return (
                    <SocialFoot
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
      <div class="h-1 w-full bg-gradient-to-r from-gradPink to-gradViolet"></div>
      <p className="text-white items-left justify-left text-center text-base my-2 mx-10 lg:mx-0">
        Made With ❤️ by Team HackHub | ©️ IEEE CS VITC
      </p>
    </section>
  );
}
export default Footer;
