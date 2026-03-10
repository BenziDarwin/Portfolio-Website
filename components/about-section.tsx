const achievements = [
  "Built an offline-first React Native mobile application for Ebtabo POS and set up CI/CD for automated APK builds and Google Play Store delivery.",
  "Worked with the Ministry of Health on partner and patient registry systems in Go, including analytics support for planning and budgeting.",
  "Delivered full-stack applications at Coseke using Spring Boot, Kotlin, Java, React, and Next.js, including Alfresco integrations and technical bid support.",
  "Contributed as a software engineer and consultant on blockchain and AI research focused on energy efficiency and security.",
];

const experience = [
  {
    role: "Systems Developer (Volunteer)",
    company: "Ministry of Health",
    period: "May 2025 - Present",
    points: [
      "Developing registry systems for chronic illness tracking and NGO partner monitoring.",
      "Using Golang, HTML, JavaScript, and CSS for internal health systems.",
      "Supporting analytics workflows for planning and budgeting.",
    ],
  },
  {
    role: "Software Developer",
    company: "Coseke Uganda Limited",
    period: "September 2023 - Present",
    points: [
      "Built full-stack applications with Spring Boot, Next.js, and React.",
      "Integrated and extended Alfresco-based content management systems.",
      "Contributed to system architecture, technical documentation, and bid proposals.",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Self Employed",
    period: "January 2020 - Present",
    points: [
      "Delivered websites and APIs for clients including SAHU, Dr. Sabrina Kitaka, Realdeal Creditors, and Yunesta.",
      "Maintained production content and functionality for deployed client systems.",
    ],
  },
];

const education = [
  "Makerere University - BSc Software Engineering, 2021 to present, CGPA 3.57",
  "Kibuli Secondary School UACE - 2019 to 2020, 15 points",
  "Kibuli Secondary School UCE - 2015 to 2018, 25 aggregates",
];

const skillGroups = [
  {
    title: "Backend",
    items: ["Spring Boot", "Kotlin", "Java", "Golang", "REST APIs", "WebSockets"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Responsive Web"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Expo", "Offline-first app delivery"],
  },
  {
    title: "Data and AI",
    items: ["Python", "Machine Learning", "Deep Learning", "Data Analysis"],
  },
  {
    title: "Infrastructure",
    items: ["Docker", "Docker Compose", "CI/CD", "Linux deployment"],
  },
  {
    title: "Data Stores",
    items: ["Postgres", "MSSQL"],
  },
];

export function AboutSection() {
  return (
    <section id="summary" className="border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Summary</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
            I am a software engineer with experience designing full-stack applications, backend services,
            mobile apps, UML-driven system designs, and CI/CD workflows. I focus on building reliable software
            that solves real operational problems while staying practical about maintainability and delivery.
          </p>

          <h3 id="experience" className="mt-12 text-xl font-semibold tracking-tight">
            Experience
          </h3>
          <div className="mt-6 space-y-6">
            {experience.map((item) => (
              <article key={`${item.role}-${item.company}`} className="border border-border p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h4 className="text-lg font-medium">{item.role}</h4>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                  {item.points.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <h3 className="mt-12 text-xl font-semibold tracking-tight">Selected achievements</h3>
          <ul className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
            {achievements.map((item) => (
              <li key={item} className="border-l-2 border-foreground pl-4 text-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <div className="border border-border p-5">
            <h3 className="text-xl font-semibold tracking-tight">Education</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              {education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="border border-border p-5">
            <h3 className="text-xl font-semibold tracking-tight">Core skills</h3>
            <div className="mt-5 space-y-5">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {group.title}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="border border-border px-3 py-1 text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
