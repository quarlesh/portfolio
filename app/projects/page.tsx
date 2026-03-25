import Link from "next/link";

const projects = [
  {
    slug: "scheduler",
    title: "Distributed Job Scheduler",
    description: "Handles 10k+ jobs/sec",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid gap-6">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`}>
            <div className="border p-4 rounded-xl hover:bg-gray-900">
              <h2 className="text-xl">{p.title}</h2>
              <p className="text-gray-400">{p.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}