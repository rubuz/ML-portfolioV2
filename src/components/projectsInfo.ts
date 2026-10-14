import AfterSalesPortal from "../assets/after-sales-portal.webp";
import SupplierPortal from "../assets/supplier-portal.webp";
import Project1 from "../assets/project1.webp";
import Project5 from "../assets/project5.webp";
import Project6 from "../assets/project6.mp4";
import Project6Webm from "../assets/project6.webm";
import Project6Poster from "../assets/project6-poster.jpg";
import Project7 from "../assets/project7.webp";

export type ProjectColor = "greeny" | "yellowy" | "bluey" | "olivy" | "pinky";

// Full class names so Tailwind can find them (it can't see `bg-${color}`)
export const colorClasses: Record<ProjectColor, { bg: string; text: string }> =
  {
    greeny: { bg: "bg-greeny", text: "text-greeny" },
    yellowy: { bg: "bg-yellowy", text: "text-yellowy" },
    bluey: { bg: "bg-bluey", text: "text-bluey" },
    olivy: { bg: "bg-olivy", text: "text-olivy" },
    pinky: { bg: "bg-pinky", text: "text-pinky" },
  };

export type ProjectInfo = {
  id: number;
  group: string;
  title: string;
  description: string;
  tech: string;
  color: ProjectColor;
  url?: string;
  image?: string;
  video?: string;
  // Fallback for browsers without H.264 (some open-source Chromium builds)
  videoWebm?: string;
  poster?: string;
  internal?: boolean;
};

export const projectsInfo: ProjectInfo[] = [
  {
    id: 1,
    image: AfterSalesPortal,
    group: "Enterprise web app",
    title: "After-Sales Portal",
    description:
      "A multi-company after-sales portal planned for at least 5 Trigano Group business units and their dealers and distributors, replacing outdated legacy systems. I own the frontend development and the UI/UX design, from first concept to deployment.",
    tech: "Angular, TypeScript, .NET REST API, Microsoft Entra ID",
    color: "bluey",
    internal: true,
  },
  {
    id: 2,
    image: SupplierPortal,
    group: "Enterprise web app",
    title: "Supplier Portal",
    description:
      "A supplier portal that replaced a legacy desktop application. Suppliers manage orders, confirmations, delivery notes and logistics in one place. I designed and built the frontend from the start.",
    tech: "Angular, TypeScript, .NET REST API",
    color: "yellowy",
    internal: true,
  },
  {
    id: 3,
    video: Project6,
    videoWebm: Project6Webm,
    poster: Project6Poster,
    group: "Utility Android app",
    title: "InventuraOS",
    description:
      "A React Native Android app for the yearly inventory stocktake, optimized for Zebra barcode scanners. Used by ~20 staff, it made the stocktake at least twice as fast.",
    tech: "React Native, Expo, TailwindCSS, Zebra DataWedge, REST API",
    color: "greeny",
    internal: true,
  },
  {
    id: 4,
    image: Project5,
    group: "Utility web app",
    title: "Production Dashboard",
    description:
      "A dashboard shown on screens above 6 production lines in the caravan industry, giving line workers the plan, production status and major quality issues at a glance.",
    tech: "ReactJS, TailwindCSS, REST API, React Router",
    color: "olivy",
    internal: true,
  },
  {
    id: 5,
    image: Project7,
    group: "Web page",
    title: "cEnergija",
    url: "https://cenergija.vercel.app/",
    description:
      "A web page that visualizes electrical energy price changes in 2024. A dynamic doughnut chart shows price variations by date and time, helping users find cost-effective periods.",
    tech: "ReactJS, TailwindCSS, Typescript, DaisyUI",
    color: "pinky",
  },
  {
    id: 6,
    image: Project1,
    group: "Web page",
    title: "Moto Lander",
    url: "https://ltmoto.si/",
    description:
      "A landing page for a small company that sells motorcycles. Built with ReactJS and TailwindCSS, with a contact form backed by PHP scripts on the server.",
    tech: "ReactJS, TailwindCSS, PHP",
    color: "greeny",
  },
];
