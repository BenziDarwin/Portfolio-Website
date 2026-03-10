import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  outcome: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({
  title,
  description,
  outcome,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <article className="border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
      </div>

      <p className="mt-4 border-l-2 border-foreground pl-4 text-sm leading-6 text-foreground">
        {outcome}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="border border-border px-3 py-1 text-sm">
            {tech}
          </span>
        ))}
      </div>

      {(githubUrl || liveUrl) && (
        <div className="mt-5 flex flex-wrap gap-4 text-sm">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              Source
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </a>
          )}
        </div>
      )}
    </article>
  );
}
