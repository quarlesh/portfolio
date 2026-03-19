export function Hero() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">
        Haylee Quarles
      </h1>

      <p className="text-lg text-gray-400">
        Software Engineer building scalable backend systems
      </p>

      <div className="flex gap-4">
        <a href="/projects" className="btn">
          View Projects
        </a>
        <a href="/systems" className="btn-outline">
          System Designs
        </a>
      </div>
    </section>
  );
}