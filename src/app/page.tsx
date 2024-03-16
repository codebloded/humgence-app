import { Contact, Hero, Highlights, Para, Unlock } from "@/components/home";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* navbar */}
      <Hero />
      <Para />
      <Highlights />
      <Unlock />
      <Contact />
    </div>
  );
};

export default Page;
