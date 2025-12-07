export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl">
          Hi, I&apos;m <span className="text-primary">Mokwa</span>
        </h1>
        <p className="text-muted-foreground mb-8 max-w-2xl text-xl">
          Full-Stack Developer & DevOps Engineer building modern web
          applications
        </p>
        <div className="flex gap-4">
          <a
            href="/projects"
            className="bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="hover:bg-accent rounded-lg border px-6 py-3 font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
