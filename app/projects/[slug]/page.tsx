import { notFound } from "next/navigation";
import { getMDXContent } from "@/lib/mdx";


// export default function Test() {
//   return (
//     <div className="prose prose-invert">
//       <h1>Hello</h1>
//       <p>This should look styled</p>
//     </div>
//   );
// }

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) return notFound();

  try {
    const { content, meta } = await getMDXContent(
      `projects/${slug}`
    );

    return (
      <article className="prose prose-invert max-w-none">
        <h1>{meta.title}</h1>
        {content}
      </article>
    );
  } catch {
    return notFound();
  }
}