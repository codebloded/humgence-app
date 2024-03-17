import React from "react";
import { SectionLayout } from "../../components/layouts/SectionLayout";
import { Input, Button } from "@chakra-ui/react";
import { WhiteButton } from "@/components/common/buttons";

export default function ContactPage() {
  return (
    <SectionLayout bgColor={{ type: "hex", value: "#222226" }}>
      <div className="text-[#f3ede6] flex flex-col py-10 md:py-36 lg:py-44 items-start gap-20">
        <p className="text-3xl md:text-6xl md:leading-[70px] lg:text-7xl lg:leading-[90px] xl:text-8xl xl:leading-[110px] font-semibold text-start">
          Contact and{" "}
          <span className="font-bolder-500 text-[#5656b1]">Connect</span>
        </p>

        <div className="w-full flex flex-col gap-10 md:flex-row">
          {/* Contact form */}
          <form className="w-full max-w-lg">
            <Input
              variant="flushed"
              colorScheme="#5656b1"
              placeholder="First Name"
              className="mb-6"
            />
            <Input
              variant="flushed"
              colorScheme="#5656b1"
              placeholder="Last Name"
              className="mb-6"
            />
            <Input
              variant="flushed"
              colorScheme="#5656b1"
              type="email"
              placeholder="Your Email"
              className="mb-6"
            />
            <Input
              variant="flushed"
              colorScheme="#5656b1"
              as="textarea"
              rows={4}
              placeholder="Your Message"
              className="mb-6"
            />

            <WhiteButton label={"Send"} />
          </form>

          {/* Contact information */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p>Contact</p>
              <p className="text-[#f]">(08) 9373 3999</p>
              <p className="text-[#666361]">humgencesupport@mail.com</p>
            </div>
            <div className="flex flex-col gap-3">
              <p>Office</p>
              <p className="text-[#f3ede6]">
                1234, 5th Avenue, New York, NY 10001, USA
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p>Social</p>
              <div className="flex flex-col gap-1">
                <p className="text-[#f3ede6]">Facebook</p>
                <p className="text-[#f3ede6]">Twitter</p>
                <p className="text-[#f3ede6]">LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
