let counter = 0;
const data = [
  {
    key: (counter += 1),
    title: `OpenCiviWiki`,
    subtitle: "An open-source democratic platform to experience",
    color: "#ffba41",
    image:
      "https://opengraph.githubassets.com/ace80bb40c0afca22a41b0b219c7510214cad8800dcfc91c58b648ddc14fa31c/CiviWiki/OpenCiviWiki",
    web:"https://github.com/CiviWiki/OpenCiviWiki",
    tools:["Django","PostgreSQL"],
    src:"https://github.com/CiviWiki/OpenCiviWiki",
    info: "An Open-source project which intends to promote democratic discussions. Worked on major part of its features.",
  },
  {
    key: (counter += 1),
    title: `Team Unhackables`,
    subtitle: "A Password-Generator",
    color: "#ffba41",
    web:"https://team-unhackables.herokuapp.com/Password_Generator/Password.html",
    src:"https://github.com/AbhijithGanesh/Password-Generator-Django",
    tools:["Django", "Cryptography"],
    image:
      "https://opengraph.githubassets.com/e4e2a68e34273c813aee563a0c27ddb9a65713894a0d70a54d1a3695a9602ff0/AbhijithGanesh/Password-Generator-Django",
    info: "Worked with a team of three on building a password-generator that generates and securely mails it to the users once registered.",
  },
  {
    key: (counter += 1),
    title: `DjangAPI Integration`,
    subtitle:
      "An ASGI Powerhouse which brings in the robustness of Django and FastAPI",
    color: "#ffba41",
    web:"https://fastapi-django.herokuapp.com/",
    src:"https://github.com/AbhijithGanesh/FastAPI-Django-Integration",
    tools:["Django","FastAPI"],
    image:
      "https://opengraph.githubassets.com/7878db48a67d9ba6b967c5b7bdec67a644b54cface7f426907fa5890e69be7a5/AbhijithGanesh/FastAPI-Django-Integration",
    info: "Integrated Django with FastAPI through ASGI combining the powers of ORM with Asynchronous Endpoints.",
  },
  {
    key: (counter += 1),
    title: `Car Data Analyzer`,
    subtitle: "Data analysis for cars.",
    web:"https://car-data-analyzer.herokuapp.com/",
    src:"https://github.com/AbhijithGanesh/car-data-analyzer",
    tools:["Django","PostgreSQL"],
    color: "#ffba41",
    image:
      "https://opengraph.githubassets.com/7878db48a67d9ba6b967c5b7bdec67a644b54cface7f426907fa5890e69be7a5/AbhijithGanesh/car-data-analyzer",
    info: "A sample data fork which simulates environment of showing proccessed car-data from an On-Board-Diagnostics device.",
  },
  {
    key: (counter += 1),
    title: `How-to-DoK`,
    subtitle: "A project from Data-on-Kubernetes community",
    color: "#ffba41",
    web:"",
    src:"https://github.com/dokc/how-to-dok",
    tools:["Express","Cassandra"],
    image:
      "https://images-ext-1.discordapp.net/external/d2ycxeQa49cX-o1RlqiAEJsev4nlKDHShufJJXph0YU/https/opengraph.githubassets.com/5bf6e11e5cf780e218827c5cdf9ee055127d412380c6ae1dd73b892bb7fd1af4/dokc/how-to-dok",
    info: "A place to develop, practice and gather knowledge about running data on kubernetes.",
  },
  {
    key: (counter += 1),
    title: `Sahaay`,
    subtitle: "Q&A platform.",
    color: "#ffba41",
    web:"",
    tools:["Docker","FastAPI"],
    src:"https://github.com/ComputerSocietyVITC/Sahaay",
    image:
      "https://images-ext-2.discordapp.net/external/934BHTzYTRQGK8T1-deGHlhNDU05ot6nLjJ7oPq94wc/https/opengraph.githubassets.com/90168e3b124f68fbdf3a42ed93d556e504397a0b2cb272123fd3e4dff2640f35/ComputerSocietyVITC/Sahaay",
    info: "Sahaay is an app with grievances/ questions being posted . An open source application developed by IEEE ComSoc VIT Chennai student chapter.",
  },
];
export default data;
