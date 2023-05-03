import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { Redis } from "@upstash/redis";
import { BackUpButton } from "@/app/components/backUpButton";
import { ContactMe } from "@/app/components/contactMe";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);
  let views;

  if (!project) {
    notFound();
  }

  try {
    views = await redis.get<number>(["pageviews", "projects", slug].join(":"));
  } catch {
    views = 0;
  }

  return (
    <div className="min-h-screen">
      <BackUpButton />
      <Header project={project} views={views || 0} />

      <article className="px-4 py-12 mx-auto prose prose-invert prose-quoteless border-y border-gray-800">
        <Mdx code={project.body.code} />
      </article>
      
    </div>
  );
}
