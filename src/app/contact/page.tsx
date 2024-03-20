import React from "react";
import { SectionLayout } from "../../components/layouts/SectionLayout";
import { Input, Button } from "@chakra-ui/react";
import { WhiteButton } from "@/components/common/buttons";
import Footer from "@/components/common/footer";
import Navbar from "@/components/navbar";

export default function ContactPage() {
  return (
    <div className="bg-brand-secondary">
      <div className="max-w-sm mx-auto flex flex-col items-start justify-center p-10 lg:max-w-screen-xl bg-brand-secondary h-screen">
        <p className="text-4xl font-bold text-start mb-10 text-brand-secondary">
          Contact and{" "}
          <span className="font-bolder-500 text-brand-primary">Connect</span>
        </p>

        <div className="w-full flex flex-col justify-between gap-10 md:flex-row mb-36">
          {/* Contact form */}
          <form className="w-full max-w-lg">
            <Input
              variant="outline"
              border={2}
              size={"sm"}
              colorScheme="#222226"
              placeholder="First Name"
              className="mb-6"
            />
            <Input
              variant="outline"
              border={2}
              size={"sm"}
              colorScheme="#222226"
              placeholder="Last Name"
              className="mb-6"
            />
            <Input
              variant="outline"
              border={2}
              size={"sm"}
              colorScheme="#222226"
              type="email"
              placeholder="Your Email"
              className="mb-6"
            />
            <Input
              variant="outline"
              border={2}
              size={"sm"}
              colorScheme="#222226"
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
              <p className=" text-brand-primary">humgencesupport@mail.com</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-brand-primary">Office</p>
              <p className="text-brand-primary">
                1234, 5th Avenue, New York, NY 10001, USA
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-brand-primary">Social</p>
              <div className="flex flex-col gap-1 text-brand-secondary">
                <p className="text-brand-primary">Facebook</p>
                <p className="text-brand-primary">Twitter</p>
                <p className="text-brand-primary">LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
