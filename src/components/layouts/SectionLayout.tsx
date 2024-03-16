import { Flex } from "@chakra-ui/react";
import React from "react";

interface SectionLayoutProps {
  children: React.ReactNode;
  bgColor?: {
    type: "hex" | "class";
    value: string;
  };
}
export const SectionLayout = ({
  bgColor = { type: "class", value: "white" },
  children,
}: SectionLayoutProps) => {
  return (
    <Flex
      justifyContent={"center"}
      px={{
        base: 10,
        md: 20,
      }}
      backgroundColor={bgColor.type === "hex" ? bgColor.value : bgColor.value}
    >
      <div className="max-w-screen-xl w-full">{children}</div>
    </Flex>
  );
};
