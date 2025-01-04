"use client";
import { builder, Builder } from "@builder.io/react";
// import BlogFooterSection from "./app/components/Blog Details/Content Section/BlogFooterSection";
import BlogHeroSection from "./app/components/Blog Details/Hero Section/BlogHeroSection";
// import BlogIntroduction from "./app/components/Blog Details/Content Section/BlogIntroduction";
// import BlogParaGraph from "./app/components/All Blog Section/BlogParaGraph";
// import BlogPostLists from "./app/components/Blog Details/Content Section/BlogPostLists";
import BlogSection from "./app/components/All Blog Section/BlogSection";
import BlogsTopHeadlines from "./app/components/All Blog Section/BlogsTopHeadlines";
// import BlogSubSectionContents from "./app/components/Blog Details/Content Section/BlogSubSectionContents";
// import ExploreOurCaseStudySection from "./app/components/Featured Cards Section/Featured Cards Section";
import FAQ from "./app/components/FAQ Section/FAQ";
import FAQItems from "./app/components/FAQ Section/FAQItems";
import FeaturedCard from "./app/components/Featured Cards Section/FeaturedCard";
import NewsletterSubscription from "./app/components/Blog Details/Newsletter Signup Section/NewsletterSignupSection";
import RelatedPostCard from "./app/components/Related Posts Section/RelatedPostCard";
import Testimonials from "./app/components/Testimonials Section/Testimonials";
import FeaturedCardSection from "./app/components/Featured Cards Section/Featured Cards Section";
import BlogIntroduction from "./app/components/Blog Details/Content Section/BlogIntroduction";
import BlogPostLists from "./app/components/Blog Details/Content Section/BlogPostLists";
import BlogFooterSection from "./app/components/Blog Details/Content Section/BlogFooterSection";
import BlogParaGraph from "./app/components/All Blog Section/BlogParaGraph";
import BlogSubSectionContents from "./app/components/Blog Details/Content Section/BlogSubSectionContents";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(BlogHeroSection, {
  name: "BlogHeroSection",
  inputs: [
    {
      name: "authorImage",
      type: "file",
    },
    {
      name: "authorName",
      type: "string",
    },
    {
      name: "date",
      type: "date",
    },
    {
      name: "readingTime",
      type: "number",
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(BlogIntroduction, {
  name: "Current Blog Introduction",
  inputs: [
    {
      name: "Introduction",
      type: "richText",
      defaultValue: "<p>YOUR INTRODUCTION COMES HERE</p>",
    },
    {
      name: "paragraphLists",
      type: "list",
      subFields: [
        {
          name: "data",
          type: "richText",
          defaultValue: "<p>Your text here...</p>",
        },
      ],
    },
  ],
});


Builder.registerComponent(BlogParaGraph, {
  name: "Current Blog New ParaGraph",
  inputs: [
    {
      name: "text",
      type: "richText",
      required: true,
    },
  ],
});

Builder.registerComponent(BlogSubSectionContents, {
  name: "Current Blog SubSection",
  inputs: [
    {
      name: "Heading",
      type: "richText",
      defaultValue: "Enter Your Subheading..",
    },
    {
      name: "paragraphLists",
      type: "list",
      subFields: [
        {
          name: "text",
          type: "richText",
          defaultValue: "Your text here...",
        },
      ],
    },
  ],
});

Builder.registerComponent(BlogPostLists, {
  name: "Current Blog Post List Item",
  inputs: [
    {
      name: "ListItems",
      type: "list",
      // hideFromUI: true,
      subFields: [
        {
          name: "text",
          type: "richText",
        },
      ],
      required: true,
    },
  ],
});

Builder.registerComponent(BlogFooterSection, {
  name: "Current Blog Footer Section",
  inputs: [
    {
      name: "authorImage",
      type: "file",
      required: true,
    },
    {
      name: "authorName",
      type: "string",
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
    },
    {
      name: "tag",
      type: "string",
      enum: [
        "AI Healthcare",
        "AI Insights",
        "Case Studies",
        "Best Practices",
        "others",
      ],
      required: true,
      defaultValue: "others",
    },
    {
      name: "facebookLink",
      type: "string",
    },
    {
      name: "linkdInLink",
      type: "string",
    },
    {
      name: "personalLink",
      type: "string",
    },
    {
      name: "twitterLink",
      type: "string",
    },
  ],
});

Builder.registerComponent(NewsletterSubscription, {
  name: "NewsletterSubscription",
  inputs: [
    
    {
      name: "title",
      type: "richText",
      defaultValue: "<p>WeframeTech News Weekly</p>",
    },
    
    {
      name: "description",
      type: "richText",
      defaultValue:
        "<p>Stay informed on our latest AI advancements and business insights by joining the Symbiofy newsletter. By subscribing, you consent to our Privacy Policy.</p>",
    },
  ],
});

Builder.registerComponent(Testimonials, {
  name: "Testimonials",
  inputs: [
    {
      name: "clientName",
      type: "string",
      required: true,
    },
    {
      name: "review",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(FAQItems, {
  name: "FAQ Item",
  inputs: [
    
    {
      name: "question",
      type: "richText",
      required: true,
    },
    {
      name: "answer",
      type: "richText",
      required : true
    },
  ],
});

Builder.registerComponent(BlogsTopHeadlines, {
  name: "BlogsTopHeadlines",
  inputs: [
    {
      name: "description",
      type: "string",
      required: true,
    },
    {
      name: "heading",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(FAQ, {
  name: "FAQ Section",
});

Builder.registerComponent(BlogSection, {
  name: "All Blog Section",
});


Builder.registerComponent(FeaturedCard, {
  name: "FeaturedCard",
  inputs: [
    {
      name: "articleRef",
      type: "reference",
      model: "articles",
      meta: {
        ts: "any",
      },
    },
    {
      name: "blog",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ data: BlogData; }",
      },
    },
  ],
});

Builder.registerComponent(RelatedPostCard, {
  name: "Current Blog Related Post Card",
  inputs: [
    {
      name: "articleRef",
      type: "reference",
      model: "articles",
      meta: {
        ts: "any",
      },
    },
  ],
});

Builder.registerComponent(FeaturedCardSection, {
  name: "Featured Cards Section",
  inputs: [
    {
      name: "ArtclesList",
      type: "list",
      meta: {
        ts: "any",
      },
      subFields:[{
        name:"blog",
        type:"reference",
        model:"articles"
      }]

    },
    
    {
      name: "heading",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "toggleButtonViewAll",
      type: "boolean",
      defaultValue : false
    },
  ],
});
