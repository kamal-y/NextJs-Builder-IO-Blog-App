import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/app/components/builder";
import Head from "next/head";
import BlogHeroSection from "@/app/components/Blog Details/Hero Section/BlogHeroSection";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);



export default async function BlogArticle(props: any) {
    const model = "articles";

    console.log(props);

    const resolvedProps = await props.params;
    const slug = resolvedProps?.slug;

    // Use the slug to query specific article content
    const content = await builder
    .get("articles", {
        userAttributes: {
          urlPath: "/" + (props?.params?.page?.join("/") || ""),
          options: { includeRefs: true },
          query: { "data.slug": slug },  
          cachebust: true
        },
      })
      .toPromise();

    console.log("Fetched Content for article slug --->", content);

    const title = content[0]?.data?.title || "Title";
    const postedDate = content?.data?.postedDate || "";
    const authorName = content?.data?.authorName || "Author Name";
    const authorImage = content?.data?.authorImage || "Author Image";
    const readingTime = content?.data?.readingTime || ""

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div>
                <BlogHeroSection
                 title={title} 
                 authorName={authorName} 
                 readingTime={readingTime}
                 date={postedDate}
                 authorImage={authorImage}
                 />
                <RenderBuilderContent
                    content={content}
                    model={model}
                />
            </div>
        </>
    );
}