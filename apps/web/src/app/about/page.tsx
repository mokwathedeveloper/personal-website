export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <div className="mb-8 flex items-center gap-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white">
            M
          </div>
          <div>
            <h1 className="mb-2 text-5xl font-bold tracking-tight">About Me</h1>
            <p className="text-muted-foreground text-xl">
              Full-Stack Developer & DevOps Engineer
            </p>
          </div>
        </div>
        <div className="max-w-3xl">
          <p className="mb-6 text-lg leading-relaxed">
            I&apos;m a passionate full-stack developer with over 3 years of
            experience building modern web applications. I specialize in React,
            Next.js, and Node.js, with a strong focus on creating performant,
            accessible applications.
          </p>
          <p className="text-lg leading-relaxed">
            When I&apos;m not coding, you can find me exploring new
            technologies, contributing to open source projects, or sharing
            knowledge with the developer community.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">
          Skills & Technologies
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border p-6">
            <h3 className="mb-2 text-lg font-semibold">Frontend</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              User interfaces & experiences
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary text-primary-foreground rounded px-2 py-1 text-xs">
                React
              </span>
              <span className="bg-primary text-primary-foreground rounded px-2 py-1 text-xs">
                Next.js
              </span>
              <span className="bg-primary text-primary-foreground rounded px-2 py-1 text-xs">
                TypeScript
              </span>
              <span className="bg-primary text-primary-foreground rounded px-2 py-1 text-xs">
                Tailwind CSS
              </span>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="mb-2 text-lg font-semibold">Backend</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Server-side & databases
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-secondary text-secondary-foreground rounded px-2 py-1 text-xs">
                Node.js
              </span>
              <span className="bg-secondary text-secondary-foreground rounded px-2 py-1 text-xs">
                Python
              </span>
              <span className="bg-secondary text-secondary-foreground rounded px-2 py-1 text-xs">
                PostgreSQL
              </span>
              <span className="bg-secondary text-secondary-foreground rounded px-2 py-1 text-xs">
                MongoDB
              </span>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="mb-2 text-lg font-semibold">DevOps</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Deployment & infrastructure
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded border px-2 py-1 text-xs">Docker</span>
              <span className="rounded border px-2 py-1 text-xs">AWS</span>
              <span className="rounded border px-2 py-1 text-xs">
                GitHub Actions
              </span>
              <span className="rounded border px-2 py-1 text-xs">Vercel</span>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="mb-2 text-lg font-semibold">Tools</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Development workflow
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded border px-2 py-1 text-xs">Git</span>
              <span className="rounded border px-2 py-1 text-xs">VS Code</span>
              <span className="rounded border px-2 py-1 text-xs">Figma</span>
              <span className="rounded border px-2 py-1 text-xs">Jest</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Experience</h2>
        <div className="space-y-6">
          <div className="rounded-lg border p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">Full-Stack Developer</h3>
                <p className="text-muted-foreground text-base font-medium">
                  Tech Solutions Inc.
                </p>
              </div>
              <span className="rounded border px-2 py-1 text-xs">
                2022 - Present
              </span>
            </div>
            <p>
              Leading development of modern web applications using React,
              Node.js, and cloud technologies.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">Frontend Developer</h3>
                <p className="text-muted-foreground text-base font-medium">
                  Digital Agency
                </p>
              </div>
              <span className="rounded border px-2 py-1 text-xs">
                2021 - 2022
              </span>
            </div>
            <p>
              Built responsive web applications and collaborated with design
              teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
