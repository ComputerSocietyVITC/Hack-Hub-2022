import React from "react";
import { GrDos } from "react-icons/gr";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiPython,
  SiDjango,
  SiReact,
  SiRust,
  SiNpm,
  SiGnu,
  SiFlask,
  SiNginx,
  SiKubernetes,
  SiHeroku,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiFastapi,
  SiDocker,
  SiJavascript,
  SiCss3,
  SiSpyderide,
} from "react-icons/si";
import { VscGithubAlt } from "react-icons/vsc";

const styles = {
  height: "2em",
  width: "2em",
  color: "#101743",
};
const items = [
  {
    title: "Sept 2017",
    cardTitle: <GrDos style={styles} />,
    cardSubtitle: (
      <section className="lg:text-lg sm:text-md ">
        "My first programming language and fascination with computer science"
      </section>
    ),
    cardDetailedText: (
      <section className="text-black font-Cons text-md">
        I explored how to play with BASIC. It was a part of our curriculum to
        explore a programming language which was for beginners, It was really
        the gateway to the current world I am in, It was a way too good starting
        point and It showed me how Programming languages can really help.
      </section>
    ),
  },
  {
    title: "September 2018",
    cardTitle: (
      <section className="flex flex-row justify-start gap-2">
        <AiFillHtml5 style={styles} />
        <SiCss3 style={styles} />
      </section>
    ),
    cardSubtitle: (
      <section className="lg:text-lg sm:text-md ">
        "Introduction to web-dev"
      </section>
    ),
    cardDetailedText: (
      <section className="text-black font-Cons text-md">
        This was the start to my web-development journey. We had learnt HTML as
        a part of our academic course and it really helped us understand how
        modern day websites establish their skeletal structure. I had learnt CSS
        to style the skeletal websites I built.
      </section>
    ),
  },
  {
    title: "September 2019",
    cardTitle: (
      <section className="flex flex-row justify-start gap-2">
        <SiPython style={styles} />
        <SiSpyderide className="ml-2" style={styles} />
      </section>
    ),
    cardSubtitle: (
      <section className="lg:text-lg sm:text-md ">
        "My first programming language and fascination with computer science"
      </section>
    ),
    cardDetailedText: (
      <section className="text-black font-Cons text-md">
        After my initial fascination with computer science, I decided to pursue
        the subject as a part of my secondary schoooling and learnt Python. When
        we were learning Python, I realized its simplicity and used it in other
        sciences which I had to take as a part of my secondary schooling. Python
        when combined with Spyder really helped me harness the power of
        computers for scientific calculation.
      </section>
    ),
  },
  {
    title: "March 2020",
    cardTitle: (
      <section className="flex flex-row justify-start gap-2">
        <SiDjango style={styles} />
        <SiMysql style={styles} />
        <SiPostgresql style={styles} />
      </section>
    ),
    cardSubtitle: (
      <section className="lg:text-lg sm:text-sm">
        "My first programming language and fascination"
      </section>
    ),
    cardDetailedText: (
      <section className="text-black font-Cons text-md">
        Now after exploring Python for a bit, I realized it wasn't sufficient
        enough to build real-world applications and it wasn't a solution when it
        came to projects,features, ideas and solutions. I figured out about
        web-frameworks and learnt that Django was a good framework to learn.
        Since Django is very closely coupled with SQL, I learnt how one can use
        SQL based databases like PostgresSQL/MySQL
      </section>
    ),
  },
  {
    title: "August 2020",
    cardTitle: (
      <section className="flex flex-row justify-start gap-2">
        <SiReact style={styles} />
        <SiNpm style={styles} />
        <SiJavascript style={styles} />
      </section>
    ),
    cardSubtitle: (
      <section className="lg:text-lg sm:text-md ">
        "Entry into the FrontEnd World."
      </section>
    ),
    cardDetailedText: (
      <section className="text-black font-Cons text-md">
        During the pandemic, I realized I was heavily lacking the design which
        every website had, my bare HTML CSS knowledge didn't serve me the
        requirements and I had learnt there are design frameworks like React
        which help us make front-end designs even more aesthetic. I had learnt
        how one can make a good website with React.
      </section>
    ),
  },
  {
    title: "December 2020",
    cardTitle: (
      <section className="flex flex-row justify-start gap-2">
        <SiFlask style={styles} />
        <SiFastapi style={styles} />
        <SiSqlite style={styles} />
      </section>
    ),
    cardSubtitle: (
      <section className="lg:text-lg sm:text-md ">
        "Peak Pandemic Productivity"
      </section>
    ),
    cardDetailedText: (
      <section className="text-black font-Cons text-md">
        With the Pandemic impacting my last year of schooling, I had sufficient
        time to explore app-devleopment and I had realized I can make API
        endpoints with Flask/FastAPI which in-turn can be integrated with my
        design using axios. I was roughly getting an idea of making a full-stack
        app. I learnt about microframeworks as a concept and was introducedto
        the concept of Asynchronous functions and callbacks.
      </section>
    ),
  },
  {
    title: "March 2021",
    cardTitle: (
      <section className="flex flex-row justify-start gap-2">
        <SiRust style={styles} />
        <SiHeroku style={styles} />
      </section>
    ),
    cardSubtitle: (
      <section className="lg:text-lg sm:text-md ">
        "Deployments and Developments"
      </section>
    ),
    cardDetailedText: (
      <section className="text-black font-Cons text-md">
        As time had progressed I realized I can build applications which I can
        access, the applications had their own funcitonalities but I had no clue
        as to how I will serve them to the entire world, I really didn't know
        how I can make it accessible to others. When I Interacted with a mentor
        about this issue, he gave me guidance about deployments and I deployed
        my first application with Heroku. As a side-mission, I learnt Rust for a
        hackathon.
      </section>
    ),
  },
  {
    title: "August 2021",
    cardTitle: (
      <section className="flex flex-row justify-start gap-2">
        <SiDocker style={styles} />
        <SiKubernetes style={styles} />
      </section>
    ),
    cardSubtitle: (
      <section className="lg:text-lg sm:text-md ">
        "Deployment to Dockerization"
      </section>
    ),
    cardDetailedText: (
      <section className="font-Cons text-black text-md">
        As a part of my exploration, I had come across docker as a tool to
        containerize all my services which can be shipped as a whole server. I
        realized I can divide my application into portions and I can spin them
        up into containers which will diversify stress to different nodes.
      </section>
    ),
  },
  {
    title: "September 2021",
    cardTitle: (
      <section className="flex flex-row justify-start gap-2">
        <SiGnu style={styles} />
        <SiNginx style={styles} />
      </section>
    ),
    cardSubtitle: (
      <section className="lg:text-lg sm:text-md ">
        "Introduction to Open Source"
      </section>
    ),
    cardDetailedText: (
      <section className="text-black font-Cons text-md">
        I had no exposure to Open sourcem till 2021 and it opened infinite
        opportunities for me, It gave me space to work on real-life projects
        where there were larger teams to collaborate with. It gave me projects
        which I can contribute and learn. I had learnt about proxies,
        static-file serving with NGINX as it was a part of the convention.
      </section>
    ),
  },
  {
    title: "October 2021",
    cardTitle: <VscGithubAlt style={styles} />,
    cardSubtitle: (
      <section className="lg:text-lg sm:text-md ">
        "My Contribution towards FOSS Projects"
      </section>
    ),
    cardDetailedText: (
      <section className="text-black font-Cons text-md">
        I started to contribute in larger levels for certain projects and
        explored various options and newer projects to contirbute to.
      </section>
    ),
  },
];
export default items;
