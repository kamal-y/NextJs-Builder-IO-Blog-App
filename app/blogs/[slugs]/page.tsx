import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/app/components/builder";
import Head from "next/head";
import BlogHeroSection from "@/app/components/Blog Details/Hero Section/BlogHeroSection";

// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function BlogArticle(props: any) {
    const model = "articles";
    
    // Ensure slug is correctly retrieved from params
    const slug = props?.params?.page?.join("/");

    // Use the slug to query specific article content
    const content = await builder
        .get(model, {
            prerender: false,
            options: { includeRefs: true },
            query: { "data.slug": slug },  // Use slug to get specific article
            cachebust : true
        })
        .toPromise();

    const title = content?.data?.title || "Default Title";

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div>
                <RenderBuilderContent
                    content={content}
                    model={model}
                />
            </div>
        </>
    );
}