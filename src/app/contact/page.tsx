import React from "react";
import { SectionLayout } from "../../components/layouts/SectionLayout";
import { Input, Button } from "@chakra-ui/react";
import { WhiteButton } from "@/components/common/buttons";

export default function ContactPage() {
  return (
    <div className="bg-neutral">
      <div className="max-w-sm mx-auto flex flex-col items-start justify-center p-10 lg:max-w-screen-xl bg-neutral h-screen">
        <p className="text-4xl font-bold text-start mb-10 text-brand-secondary">
          Contact and{" "}
          <span className="font-bolder-500 text-brand-primary">Connect</span>
        </p>

        <div className="w-full flex flex-col justify-between gap-10 md:flex-row">
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
            <div className="flex flex-col gap-3 text-brand-secondary">
              <p className="text-brand-primary">Contact</p>
              <p className="text-[#f]">(08) 9373 3999</p>
              <p className=" text-brand-secondary">humgencesupport@mail.com</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-brand-primary">Office</p>
              <p className="text-[#f3ede6]">
                1234, 5th Avenue, New York, NY 10001, USA
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-brand-primary">Social</p>
              <div className="flex flex-col gap-1 text-brand-secondary">
                <p className="text-[#f3ede6]">Facebook</p>
                <p className="text-[#f3ede6]">Twitter</p>
                <p className="text-[#f3ede6]">LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
