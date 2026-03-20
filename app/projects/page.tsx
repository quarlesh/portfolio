import Link from "next/link";

const projects = [
  {
    slug: "financial-approvers-population",
    title: "Financial Approvers Population Application",
    description: "Pull information from internal human resources APIs and load those users into vendor partner software as approvers of financial transactions",
  },
  {
    slug: "workflow-data-validations",
    title: "Workflow Data Validations",
    description: "Validate different data points on financial transactions subject to workflows functionality",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 datatype-font">Projects</h1>

      <div className="grid gap-6">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`}>
            <div className="border p-4 rounded-xl bg-white">
              <h2 className="text-xl">{p.title}</h2>
              <p className="text-gray-800">{p.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}