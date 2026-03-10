import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Ebtabo Mobile Application",
    description:
      "Contracted mobile application work for Ebtabo POS with an offline-first architecture using React Native.",
    outcome:
      "Set up CI/CD pipelines for testing and APK builds and supported deployment to the Google Play Store.",
    technologies: ["React Native", "Expo", "CI/CD", "Android"],
  },
  {
    title: "Ministry of Health Partners Portal",
    description:
      "Internal partner management portal for the Ministry of Health built and hosted for intranet use.",
    outcome:
      "Delivered a Go-based system used to monitor health-program support and improve planning visibility.",
    technologies: ["Golang", "Linux", "Intranet", "Analytics"],
  },
  {
    title: "Blockchain E-Banking System",
    description:
      "A decentralized banking and token campaign platform built around blockchain concepts and smart contracts.",
    outcome:
      "Implemented account onboarding and a DAO-style workflow for fundraising and governance.",
    technologies: ["Next.js", "Solidity", "Firebase", "Smart Contracts"],
    liveUrl: "https://blocksafe-dapp.web.app",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website used to present work, experience, and contact details.",
    outcome:
      "Reworked to function as a plain online CV with stronger factual positioning.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/BenziDarwin/Portfolio-Website",
  },
  {
    title: "MT5 Algo Trading Models",
    description:
      "Machine learning experiments using MetaTrader 5 historical data for trading model development.",
    outcome:
      "Documented a repeatable workflow for model experimentation and evaluation.",
    technologies: ["Python", "MetaTrader 5", "Machine Learning"],
    githubUrl: "https://github.com/BenziDarwin/MT5-Algo-trading-models",
  },
  {
    title: "Business Manager API",
    description:
      "Backend API work exploring business-management workflows and service design in Go.",
    outcome:
      "Expanded public backend work to better reflect server-side engineering capability.",
    technologies: ["Go", "REST API"],
    githubUrl: "https://github.com/BenziDarwin/Business-Manager-API",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Selected work</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            These projects reflect a mix of client delivery, internal systems work, and public technical experiments.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
