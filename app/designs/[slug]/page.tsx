import { notFound } from "next/navigation";
import { getMDXContent } from "@/lib/mdx";
import { Card } from "@/components/ui/card";

export default async function DesignPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) return notFound();

  try {
    const { content, meta } = await getMDXContent(
      `designs/${slug}`
    );

    return (
      <Card>
        <article className="prose prose-graycustom max-w-none">
          <h1 className="datatype-font">{meta.title}</h1>
          {content}
        </article>
      </Card>
    );
  } catch {
    return notFound();
  }
}