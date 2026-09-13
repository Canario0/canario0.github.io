import type { Locale } from "./i18n.svelte";
import type { Page } from "./lib/types/page";
import { m } from "../.paraglide/messages";
import Home from "./pages/Home.svelte";
import Whoami from "./pages/Whoami.svelte";
import Experience from "./pages/Experience.svelte";

type Message = (inputs?: Record<string, never>, options?: { locale?: Locale }) => string;

export const getUi = (locale: Locale) => ({
  menu: m.ui_menu({}, { locale }),
  language: m.ui_language({}, { locale })
});

export const getPages = (
  locale: Locale
): [Page<typeof Home>, Page<typeof Whoami>, Page<typeof Experience>, Page<typeof Experience>] => {
  const t = (message: Message) => message({}, { locale });

  return [
    {
      id: "home",
      linkName: t(m.nav_home),
      component: Home,
      props: {
        subtitle: t(m.home_subtitle),
        title: "Pablo<br />Renero<br />Balgañón",
        imageAlt: t(m.home_image_alt)
      }
    },
    {
      id: "whoami",
      linkName: t(m.nav_whoami),
      component: Whoami,
      props: {
        subtitle: t(m.whoami_subtitle),
        title: t(m.whoami_title),
        headline: t(m.whoami_headline),
        entries: [t(m.whoami_entry_1), t(m.whoami_entry_2)]
      }
    },
    {
      id: "experience",
      linkName: t(m.section_experience),
      component: Experience,
      props: {
        sectionTitle: t(m.section_experience),
        experienceEntries: [
          {
            time: t(m.experience_celtiberian_time),
            company: "Celtiberian Solutions",
            title: t(m.role_full_stack),
            description: t(m.experience_celtiberian_description),
            projects: [
              {
                name: "Cipherscale",
                role: t(m.experience_celtiberian_cipherscale_role),
                time: t(m.experience_celtiberian_cipherscale_time),
                description: t(m.experience_celtiberian_cipherscale_description)
              },
              {
                name: "SMBX",
                role: t(m.role_back_end),
                time: t(m.experience_celtiberian_smbx_time),
                description: t(m.experience_celtiberian_smbx_description)
              }
            ]
          },
          {
            time: t(m.experience_braintec_time),
            company: "Brain-Tec Group",
            title: t(m.role_full_stack),
            description: t(m.experience_braintec_description)
          },
          {
            time: t(m.experience_ayesa_time),
            company: "Ayesa Spain",
            title: t(m.role_full_stack),
            description: t(m.experience_ayesa_description)
          },
          {
            time: t(m.experience_uva_time),
            company: t(m.org_uva),
            title: t(m.role_researcher),
            description: t(m.experience_uva_description)
          },
          {
            time: t(m.experience_alten_time),
            company: "Alten Spain",
            title: t(m.role_qa_automation),
            description: t(m.experience_alten_description)
          }
        ]
      }
    },
    {
      id: "education",
      linkName: t(m.section_education),
      component: Experience,
      props: {
        sectionTitle: t(m.section_education),
        experienceEntries: [
          {
            time: "2023 - 2025",
            company: "Universidad a Distancia de Madrid",
            title: t(m.education_udima_title)
          },
          {
            time: "2015 - 2020",
            company: t(m.org_uva),
            title: t(m.education_uva_title),
            description: t(m.education_uva_description)
          },
          {
            time: "2019",
            company: "ISTQB",
            title: "ISTQB Foundation Level",
            description: t(m.education_istqb_description)
          }
        ]
      }
    }
  ];
};
