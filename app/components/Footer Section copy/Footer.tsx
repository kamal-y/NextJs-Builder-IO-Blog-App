import React from "react";
import Link from 'next/link';
import { builder } from "@builder.io/sdk";

// Initialize Builder.io with the API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "");

const Footer: React.FC = async () => {

  const allFooterData = await builder.getAll("footer-model", {
    sort: {
      createdDate: 1,
    },
    cachebust: true,
    fields: "data"
  });

  const aboutList = allFooterData[0].data?.about;
  const resoucesList = allFooterData[0].data?.resources;
  const supportContactList = allFooterData[0].data?.supportContact;
  const copyRightList = allFooterData[0].data?.copyRights;

  return (
    <div className="flex flex-col justify-between items-center p-6 w-full">
      {/* Footer Links */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:items-start max-w-5xl w-full sm:pb-32 pb-10">
        {/* About Section */}
        <div className="text-sm flex gap-2 flex-col justify-between items-start text-[#969595]">
          <p className="pb-2 text-black font-semibold">About</p>
          {
            aboutList &&

            aboutList.map((item: any) => {
              return <Link key={item.url} href={item.url}><p>{item.name}</p></Link>
            })
          }
        </div>

        {/* Resources Section */}
        <div className="text-sm flex gap-2 flex-col justify-between items-start text-[#969595]">
          <p className="pb-2 text-black font-semibold">Resources</p>
          {
            resoucesList &&

            resoucesList.map((item: any) => {
              return <Link key={item.url} href={item.url}><p>{item.name}</p></Link>
            })
          }
        </div>

        {/* Support & Contact Section */}
        <div className="text-sm flex gap-2 flex-col justify-between items-start text-[#969595]">
          <p className="pb-2 text-black font-semibold">Support & Contact</p>
          {
            supportContactList &&

            supportContactList.map((item: any) => {
              return <Link key={item.url} href={item.url}><p>{item.name}</p></Link>
            })
          }
        </div>
      </div>

      {/* Divider line */}
      <div className="w-full border-t border-black py-8"></div>

      {/* Footer Bottom */}
      <div className="flex flex-row justify-between items-center gap-3 sm:items-start text-[#666666] text-sm">
        
           { copyRightList &&

            copyRightList.map((item: any) => {
              return <Link key={item.url} href={item.url}><p>{item.name}</p></Link>
            })
          }
      </div>
    </div>
  );
};

export default Footer;
