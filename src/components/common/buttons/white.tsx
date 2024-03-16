"use client";
import { Button, ButtonProps } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import React from "react";

type WhiteButtonProps = {
  label: string;
  withArrow?: boolean;
} & Omit<ButtonProps, "children">;
export const WhiteButton = ({
  label,
  withArrow = true,
  ...props
}: WhiteButtonProps) => {
  return (
    <Button
      size={{
        base: "xs",
        sm: "sm",
        md: "md",
        xl: "lg",
      }}
      p={{
        base: 5,
        md: 6,
        lg: 7,
        xl: 10,
      }}
      bg={"white"}
      color={"#222226"}
      w={"40"}
      rounded={"full"}
      rightIcon={withArrow ? <ArrowForwardIcon /> : undefined}
      {...props}
    >
      {label}
    </Button>
  );
};
