import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";

// Initialize Builder with your API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// interface PageProps {
//   params: {
//     page: string[];
//   };
// }

export default async function Page({ params }: any) {
  const builderModelName = "page";

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        // Join the page parameters to form the URL path
        urlPath: "/" + (params.page?.join("/") || ""),
      },
    })
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}