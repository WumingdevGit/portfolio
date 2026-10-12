import { media } from "./media";

export type Project = {
  id: string;
  title: string;
  description: string;
  live: string;
  repo: string;
  image: string;
  plate: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Discover Sudan — Tour Agency Web App",
    description:
      "A modern and visually appealing tour agency web application designed to showcase travel destinations across Sudan. Features clean layouts, responsive UI, and user-friendly navigation — ideal for promoting tours, packages, and customer experiences.",
    live: "https://wumingdevgit.github.io/tour-agency/",
    repo: "https://github.com/WumingdevGit/tour-agency",
    image: media.projectSudan,
    plate: "Plate 01 — Meroë, Sudan",
    tags: ["Layouts", "Responsive UI", "Navigation"],
  },
  {
    id: "02",
    title: "Real Estate Property Management Website",
    description:
      "A functional real estate management platform where users can browse properties and apply multiple filters using JavaScript. Includes sorting by property type, price, and location, responsive layouts, and image galleries for a professional listings experience.",
    live: "https://wumingdevgit.github.io/real-estate-webpage/",
    repo: "https://github.com/WumingdevGit/real-estate-webpage",
    image: media.projectEstate,
    plate: "Plate 02 — Listings facade",
    tags: ["Filtering", "Sorting", "Galleries"],
  },
];

export const skills = [
  { name: "HTML", note: "Structure & semantics" },
  { name: "CSS", note: "Layout · flexbox · grid" },
  { name: "JavaScript", note: "DOM · events · fetch" },
  { name: "React", note: "Components & state" },
  { name: "Responsive Design", note: "Mobile-first breakpoints" },
  { name: "Git & GitHub", note: "Version control & PRs" },
];

export const links = {
  github: "https://github.com/WumingdevGit",
  linkedin: "https://www.linkedin.com/in/matthew-oluwanifemi-6aa360303",
  email: "matthewoluwanifemi9@gmail.com",
  cv: "/cv.html",
};