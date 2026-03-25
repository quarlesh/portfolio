import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

export async function getMDXContent(slug: string) {
  const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);

  const source = fs.readFileSync(filePath, "utf-8");

  const { content, data } = matter(source);

  const { content: mdxContent } = await compileMDX({
    source: content,
  });

  return {
    content: mdxContent, // ✅ now React nodes
    meta: data,
  };
}