import { notFound } from "next/navigation";
import { db } from "@/db";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  // This line of code intent to test the loading page by setting a delay by 2 seconds
  await new Promise((r) => setTimeout(r, 2000));

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) }
  });

  if (!snippet) {
    return notFound();
  }

  return <div>{snippet.title}</div>;
}
