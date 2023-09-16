import type { Page } from "./lib/types/page";
import Home from "./pages/Home.svelte";
import Whoami from "./pages/Whoami.svelte";
import Experience from "./pages/Experience.svelte";

export const PAGES: [Page<Home>, Page<Whoami>, Page<Experience>, Page<Experience>] = [
  {
    id: "home",
    linkName: "Home",
    component: Home,
    props: { subtitle: "Hello, My Name Is", title: "Pablo<br />Renero<br />Balgañón" }
  },
  {
    id: "whoami",
    linkName: "Whoami",
    component: Whoami,
    props: {
      title:
        "I am a passionate full-stack developer based in Spain with over 5 years of rich experience.",
      entries: [
        `As a full-stack developer with 5+ years of experience in various niches, including
        research at college. I have a diverse skill set that includes both front-end and
        back-end development as well as quality assurance (QA) automation. In my previous
        roles I have taken on complex challenges and developed scalable solutions that
        meet business and user needs.`,
        `Working as a QA automation engineer has given me a keen eye for detail and a strong
        understanding of the importance of testing and quality assurance in the software
        development process. With a passion for staying up-to-date with the latest
        technologies and trends, I enjoy exploring new tools and techniques to continually
        improve my work.`
      ]
    }
  },
  {
    id: "experience",
    linkName: "Experience",
    component: Experience,
    props: {
      sectionTitle: "Experience",
      experienceEntries: [
        {
          time: "May 2022 - Now",
          company: "Celtiberian Solutions",
          title: "Full Stack Developer",
          description: `
          Working in the international market with different Typescript/JavaScript base technologies like Express, NestJs, React, Angular, and more`
        },
        {
          time: "January 2021 - May 2022",
          company: "Brain-Tec Group",
          title: "Full Stack Developer",
          description: `Working in the European market adapting Odoo (python base ERP) to the needs of the clients.`
        },
        {
          time: "August 2020 - December 2020",
          company: "Ayesa Spain",
          title: "Full Stack Developer",
          description: `Working in the Spanish Administration with Spring and Angular.`
        },
        {
          time: "September 2019 - June 2020",
          company: "University of Valladolid",
          title: "Researcher",
          description: `Working with different Arduino base frameworks to develop an indoor localisation system base on UWB technologies.`
        },
        {
          time: "September 2018 - September 2019",
          company: "Alten Spain",
          title: "QA Automation",
          description: `Testing backend and frontend, in an Adidas’ project. Using frameworks like
Serenity, Selenium, Appium, Rest Assured.`
        }
      ]
    }
  },
  {
    id: "education",
    linkName: "Education",
    component: Experience,
    props: {
      sectionTitle: "Education",
      experienceEntries: [
        {
          time: "2015 - 2020",
          company: "University of Valladolid",
          title: "Computer Engineering School of Valladolid",
          description: `
          <ul>
            <li>Minor in Software Engineering.</li>
            <li>9.9 in my dissertation.</li>
          </ul>`
        },
        {
          time: "2019",
          company: "ISTQB",
          title: "ISTQB Foundation Level"
        }
      ]
    }
  }
];
