import React from "react";
import instagram from "../images/footer/instagram_footer.png";
import linkedin from "../images/footer/linkedin_footer.png";
import github from "../images/footer/github_footer.png";
import comsoc from "../images/footer/comsoc.jpeg";
import hackhublogo from "../images/hackhublogo.png";
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
      {
        id: 3,
        name: "Person 3",
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
      {
        id: 4,
        Link: "#",
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
        <p>{name}</p>
        <a href={emails}>{emails}</a>
      </div>
    </section>
  );
};

const SocialFoot = (props) => {
  const { src, Link, alt } = props;
  return (
    <section>
      <div>
        <a href={Link}>
          <img className="h-10 lg:h-7 mx-auto lg:mx-0" src={src} alt={alt} />
        </a>
      </div>
    </section>
  );
};

function Footer() {
  return (
    <section className="bg-black mt-16">
      <div class="h-1 w-full bg-gradient-to-r from-gradPink to-gradViolet"></div>
      <section className="font-Sansation font-bold py-2 grid lg:grid-cols-3 lg:gap-44">
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
          <div className="py-10">
            <div className="grid grid-rows-1 grid-flow-col gap-1 ">
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
      <p className="text-white font-Sansation items-left justify-left text-center text-xl my-2 mx-10 lg:mx-0">
        Made With ❤️ by Team HackHub | ©️ IEEE CS VITC
      </p>
    </section>
  );
}
export default Footer;
