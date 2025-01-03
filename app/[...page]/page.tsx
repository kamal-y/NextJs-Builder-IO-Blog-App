import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";

// Initialize Builder with your API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export default async function Page({ params }: PageProps) {
  const builderModelName = "page";

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        // Join the page parameters to form the URL path
        urlPath: "/" + ((await params).page?.join("/") || ""),
      },
      cachebust: true,
    })
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}