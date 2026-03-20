import Link from "next/link";

const designs = [
  {
    slug: "placeholder",
    title: "Placeholder",
    description: "Placeholder",
  },
];

export default function DesignsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 datatype-font">Designs</h1>

      <div className="grid gap-6">
        {designs.map((p) => (
          <Link key={p.slug} href={`/designs/${p.slug}`}>
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