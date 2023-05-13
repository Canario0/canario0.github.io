import type { Page } from "./lib/types/page";
import Home from "./pages/Home.svelte";
import Whoami from "./pages/Whoami.svelte";

export const PAGES: [Page<Home>, Page<Whoami>] = [
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
  }
];
