"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const highlights = [
  "Software Developer at Coseke Uganda Limited",
  "Systems Developer (Volunteer) at Ministry of Health",
  "Freelance full-stack developer since 2020",
  "Makerere University BSc Software Engineering, CGPA 3.57",
];

export function HeroSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 lg:grid-cols-[1.4fr_0.8fr] lg:py-24">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Software Engineer
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Ssali Benjamin Tamale
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            I build full-stack applications, backend APIs, cross-platform mobile apps, and automation tooling.
            My work spans Spring Boot, Kotlin, Java, Next.js, React, React Native, Golang, Python, Docker,
            and practical CI/CD delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="default" className="rounded-none">
              <a href="mailto:ssalibenjamin0402@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-none">
              <a href="https://github.com/BenziDarwin" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-none">
              <a href="https://www.linkedin.com/in/benzidarwin" target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        <div className="border border-border bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Snapshot
          </p>
          <ul className="mt-4 space-y-4 text-sm leading-6 text-muted-foreground">
            {highlights.map((item) => (
              <li key={item} className="border-l-2 border-foreground pl-4 text-foreground">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="border border-border p-4">
              <p className="text-2xl font-semibold">5+</p>
              <p className="mt-1 text-sm text-muted-foreground">years shipping software</p>
            </div>
            <div className="border border-border p-4">
              <p className="text-2xl font-semibold">80+</p>
              <p className="mt-1 text-sm text-muted-foreground">public repositories</p>
            </div>
            <div className="border border-border p-4">
              <p className="text-2xl font-semibold">3</p>
              <p className="mt-1 text-sm text-muted-foreground">active work tracks</p>
            </div>
            <div className="border border-border p-4">
              <p className="text-2xl font-semibold">Uganda</p>
              <p className="mt-1 text-sm text-muted-foreground">based in Wakiso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
