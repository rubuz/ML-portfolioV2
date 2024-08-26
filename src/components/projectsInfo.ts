import Project1 from "../assets/project1.webp";
import Project2 from "../assets/project2.webp";
import Project3 from "../assets/project3.webp";
import Project4 from "../assets/project4.webp";
import Project5 from "../assets/project5.webp";
import Project6 from "../assets/project6.webm";

type ProjectInfo = {
  id: number;
  image?: string;
  group: string;
  title: string;
  url: string;
  description: string;
  tech: string;
  video?: string;
};

export const projectsInfo: ProjectInfo[] = [
  {
    id: 1,
    video: Project6,
    group: "Utility Andorid app",
    title: "InventuraOS",
    url: "/",
    description:
      "InventuraOS is a React Native Android app designed for efficient and accurate annual inventory audits. Optimized for Zebra barcode scanners, this app ensures quick and seamless inventory checks, making the audit process straightforward and hassle-free.",
    tech: "React Native, Expo, TailwindCSS, Zebra DataWedge, API ",
  },
  {
    id: 2,
    image: Project5,
    group: "Utility web app",
    title: "Production Counter",
    url: "/",
    description:
      "The Production Counter Webapp is designed to be displayed on screens in the production lines of the automobile (caravaning) industry.",
    tech: "ReactJS, TailwindCSS, API, React Router",
  },
  {
    id: 3,
    image: Project1,
    group: "Web page",
    title: "Moto Lander",
    url: "https://ltmoto.si/",
    description:
      "A landig page for small company that sells motorcycles. Page is written in ReactJS with TailwindCSS. Contact form uses PHP scripts on backend server.",
    tech: "ReactJS, TailwindCSS, PHP",
  },
  // {
  //   id: 2,
  //   image: Project2,
  //   group: "Web page",
  //   title: "ntRoot",
  //   url: "https://eloquent-bonbon-b4a5f7.netlify.app",
  //   description:
  //     "A website for small IT bussnies. One of my first full multi-page web pages. It was fully build with vanilla HTML, CSS and JS.",
  //   tech: "HTML, CSS, JS",
  // },
  {
    id: 4,
    image: Project3,
    group: "Utility web app",
    title: "Test drive survey",
    url: "https://64afd2688bb4cb0326df645e--splendorous-pithivier-d797a9.netlify.app/",
    description:
      "RV test drive survey is a React.js web app that simplifies the process of collecting feedback and complaints after test driving an RV. Users can enter data, submit complaints, and even upload pictures. The app generates a JSON file that is uploaded to the backend server for further analysis.",
    tech: "ReactJS, CSS, React Router",
  },
  // {
  //   id: 4,
  //   image: Project4,
  //   group: "Utility web app",
  //   title: "Travel report",
  //   url: "https://clever-praline-9cfb49.netlify.app/",
  //   description:
  //     "Business Trip Report form, simplifying reporting process. Employees can conveniently input trip details once, store them in local storage, preview the report, and print it when ready for physical submission.",
  //   tech: "ReactJS, TailwindCSS",
  // },
];
