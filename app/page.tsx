import interestsData from "@/data/interests.json";
import linksData from "@/data/links.json";
import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import sectionsData from "@/data/sections.json";
import type {
  Interest,
  LinkSection,
  Profile,
  Project,
  SectionTitles,
} from "@/types/content";
import Interests from "@/components/Interests";
import Intro from "@/components/Intro";
import Links from "@/components/Links";
import Projects from "@/components/Projects";
import SiteFooter from "@/components/SiteFooter";

const profile: Profile = profileData;
const projects: Project[] = projectsData;
const interests: Interest[] = interestsData;
const links: LinkSection = linksData;
const sections: SectionTitles = sectionsData;

export default function Home() {
  return (
    <main className="relative mx-auto flex w-full max-w-[672px] flex-col gap-16 px-6 pt-24 pb-[120px]">
      <Intro profile={profile} />
      <Projects projects={projects} title={sections.projects} />
      <Interests interests={interests} title={sections.interests} />
      <Links links={links} title={sections.links} />
      <SiteFooter profile={profile} />
    </main>
  );
}
