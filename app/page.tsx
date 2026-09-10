import interestsData from "@/data/interests.json";
import linksData from "@/data/links.json";
import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import type { Interest, Link, Profile, Project } from "@/types/content";
import Interests from "@/components/Interests";
import Intro from "@/components/Intro";
import Links from "@/components/Links";
import Projects from "@/components/Projects";

const profile: Profile = profileData;
const projects: Project[] = projectsData;
const interests: Interest[] = interestsData;
const links: Link[] = linksData;

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-16 px-6 py-24">
      <Intro profile={profile} />
      <Projects projects={projects} />
      <Interests interests={interests} />
      <Links links={links} />
    </main>
  );
}
