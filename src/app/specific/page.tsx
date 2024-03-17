import React from "react";
import data from "../../components/Card/properties_data.json";
import {
  Box,
  Container,
  Tag,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  Input,
} from "@chakra-ui/react";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import Image from "next/image";
import { ArrowBigRight, User } from "lucide-react";
import { WhiteButton } from "@/components/common/buttons";

const Specific = () => {
  const id = 1;

  const [dataForOne] = data.properties.filter((property) => property.id === id);

  return (
    <>
      <SectionLayout bgColor={{ type: "hex", value: "#222226" }}>
        <div className=" flex flex-row justify-between place-items-center pb-14 md:pb-28 lg:pb-32 gap-10 text-[#f3ede6] ">
          <div className=" flex flex-col pb-14 md:pb-28 lg:pb-32 gap-10 text-[#f3ede6] ">
            <div>
              <p className="w-full pt-14 md:pt-28 lg:pt-32 text-3xl leading-[40px] md:text-4xl md:leading-[70px] lg:text-4xl lg:leading-[80px] xl:text-5xl xl:leading-[100px] font-semibold">
                {dataForOne.name}
              </p>

              <HStack spacing={2}>
                {dataForOne.status.map((status) => (
                  <Tag key={status} colorScheme="green">
                    {status}
                  </Tag>
                ))}
                {dataForOne.categories.map((category) => (
                  <Tag key={category} colorScheme="green">
                    {category}
                  </Tag>
                ))}
              </HStack>
            </div>

            <div>
              <Text fontSize="lg">{dataForOne.address}</Text>
              <Text fontSize="lg">
                {dataForOne.sizeInSqFt} SF | ${dataForOne.price.total}
              </Text>
            </div>

            <div>
              <Image
                src={"/1.jpg"}
                height="600"
                width="600"
                alt="thumbnail"
                className="object-cover rounded-xl group-hover/card:shadow-xl"
              />
            </div>
          </div>
          <div className="bg-[#f3ede6] flex flex-col items-start justify-start p-10 pb-14 md:pb-28 lg:pb-32 gap-10 rounded-md text-[#222226] ">
            <h3 className="text-4xl  text-[#222226] ">Broker</h3>
            <div className="flex flex-row justify-between items-center gap-7 text-[#222226] ">
              <User size={100} className="p-8 rounded-full bg-[#5656b1]" />
              <div className="flex flex-col gap-2">
                <p className="text-xl ">{dataForOne.brokerInfo.name}</p>
                <p className="text-sm">
                  {/* icon */}
                  <span className="text-[#5656b1]">✉️</span> {"  "}
                  {dataForOne.brokerInfo.contact}
                </p>

                <p className="text-sm ">{dataForOne.brokerInfo.email}</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-center">
              <h3 className="text-xl  text-[#222226] text-center">
                Request More Info
              </h3>
              <div className="w-full flex flex-col gap-10 md:flex-row text-[#222226]">
                {/* Contact form */}
                <form className="w-full max-w-sm">
                  <Input
                    border="1px solid #5656b1"
                    variant="outline"
                    placeholder="First Name"
                    className="mb-6"
                  />
                  <Input
                    border="1px solid #5656b1"
                    variant="outline"
                    placeholder="Last Name"
                    className="mb-6"
                  />
                  <Input
                    border="1px solid #5656b1"
                    variant="outline"
                    type="email"
                    placeholder="Your Email"
                    className="mb-6"
                  />
                  {/* button with arrow icon  */}
                  <WhiteButton label={"Send"} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout bgColor={{ type: "hex", value: "#f3ede6" }}>
        <div className="flex flex-col py-14 md:pb-28 lg:pb-32 gap-10 text-[#222226]">
          <div className="flex flex-col gap-5 justify-start items-start w-3/4">
            <div className="flex flex-col gap-5">
              <h2 className="text-6xl  text-[#222226]">Description</h2>
              <p className="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium soluta voluptates repellendus exercitationem enim
                animi expedita cumque! Tempora perferendis eligendi quibusdam
                iste vitae? Soluta culpa perferendis explicabo aliquid illum
                numquam.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="text-4xl  text-[#222226]">Address</h2>
              <p className="text-lg">{dataForOne.address}</p>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="text-4xl  text-[#222226]">Opportunity</h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur illum amet officia, debitis veritatis quae dolorem
                laborum deleniti eveniet, labore enim magni nobis velit harum,
                modi vel aliquid nostrum aliquam!
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl  text-[#222226]">Property Details</h3>
              <div className="flex flex-col gap-2">
                <p className="text-lg">Price: ${dataForOne.price.total}</p>
                <p className="text-lg">
                  Price per SF: ${dataForOne.price.perSqFt}
                </p>
                <p className="text-lg">
                  Property Size: {dataForOne.sizeInSqFt} SF
                </p>
                <p className="text-lg">
                  Property Type: {dataForOne.categories.join(", ")}
                </p>
                <p className="text-lg">
                  Property Status: {dataForOne.status.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default Specific;
