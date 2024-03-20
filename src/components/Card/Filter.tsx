import React, { useState } from "react";
import {
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  InputProps,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Select, { GroupBase, OptionsOrGroups, StylesConfig } from "react-select";
import { FilterType } from ".";

interface Props {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

const PropertyType = [
  { value: "Business", label: "Business" },
  { value: "Retail", label: "Retail" },
  { value: "Industrial", label: "Industrial" },
];

const PropertyStatus = [
  { value: "For Sale", label: "For Sale" },
  { value: "For Lease", label: "For Lease" },
];

const PropertySize = [
  {
    value: { min: 0, max: 1000 },
    label: "Between 0 and 1000",
  },
  {
    value: { min: 1000, max: 5000 },
    label: "Between 1000 and 5000",
  },
  {
    value: { min: 5000, max: 10000 },
    label: "Between 500 and 1000",
  },
  {
    value: { min: 10000, max: 30000 },
    label: "Between 10000 and 30000",
  },
  {
    value: { min: 30000, max: 40000 },
    label: "40000+",
  },
];

const Broker = [
  { value: "Alex Johnson", label: "Alex Johnson" },
  { value: "John Doe", label: "John Doe" },
  { value: "Jane Smith", label: "Jane Smith" },
];

const customStyles: StylesConfig = {
  container: (baseStyles, state) => ({
    ...baseStyles,
    outlineColor: "white",
    borderColor: "white",
    outline: "none",
    border: "none",
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    height: "3.1rem",
    overflowY: "scroll",
    borderWidth: "1px",
    borderRadius: "0.5rem",
    borderColor: "white",
    focusBorderColor: "white",
    outlineColor: "white",
    backgroundColor: "5656b1", // Set background color to transparent
    color: "white", // Set text color to white
    "::-webkit-scrollbar": {
      width: 0,
    },
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: "#dddddd",
    cursor: "pointer",
    marginTop: "0.4rem",
    alignSelf: "start",
    ":hover": {
      color: "white",
    },
  }),
  clearIndicator: (baseStyles) => ({
    ...baseStyles,
    color: "#dddddd",
    cursor: "pointer",
    marginTop: "0.4rem",
    alignSelf: "start",
    ":hover": {
      color: "white",
    },
  }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  menu: (baseStyles) => ({
    ...baseStyles,
    borderRadius: "0.5rem",
    padding: "0.5rem",
    backgroundColor: "white",
    backdropFilter: "blur(4px)",
    borderColor: "#222226",
    borderWidth: "1px",
    zIndex: 9999,
  }),
  option: (baseStyles) => ({
    ...baseStyles,
    color: "#222226",
    borderRadius: "0.5rem",
    backgroundColor: "white",
    ":hover": {
      color: "#5656b1",
      backgroundColor: "#f3ede6",
      cursor: "pointer",
    },
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: "white",
  }),
  multiValue: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#f3ede6",
    color: "white",
    borderRadius: "0.25rem",
    // Set background color of selected tag to white
  }),
  multiValueRemove(base, props) {
    return {
      ...base,
      borderRadius: "50%",
      color: "#5656b1",
      backgroundColor: "#f3ede6",
      marginTop: "0.20rem",
      marginBottom: "0.20rem",
      marginLeft: "0.10rem",
      marginRight: "0.10rem",
      padding: "0.2rem",
      ":hover": {
        color: "#f3ede6",
        backgroundColor: "#5656b1",
      },
    };
  },
};

const Filter = ({ filter, setFilter }: Props) => {
  const [isSearchable, setIsSearchable] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#222226] w-[80%] mx-auto p-10 text-white rounded-2xl flex flex-col gap-7 gap-x-10">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 gap-x-10">
        <div className="col-span-1 xl:col-span-2">
          <CustomInput
            type="text"
            label="Address"
            placeholder="Address"
            value={filter.address || ""}
            onChange={(e) => setFilter({ ...filter, address: e.target.value })}
          />
        </div>

        <LabelLayout label="Property Type">
          <Select
            classNamePrefix="select"
            className="basic-multi-select border-none"
            options={PropertyType}
            menuPortalTarget={document.body}
            styles={customStyles}
            isMulti
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: "white",
              },
            })}
            onChange={(e: OptionsOrGroups<any, any>) =>
              setFilter({
                ...filter,
                propertyType: e.map((option) => option.value),
              })
            }
          />
        </LabelLayout>

        <LabelLayout label="Property Status">
          <Select
            classNamePrefix="select"
            className="basic-multi-select border-none"
            options={PropertyStatus}
            menuPortalTarget={document.body}
            styles={customStyles}
            isMulti
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: "white",
              },
            })}
            onChange={(e: OptionsOrGroups<any, any>) =>
              setFilter({
                ...filter,
                propertyStatus: e.map((option) => option.value),
              })
            }
          />
        </LabelLayout>
      </div>
      <Accordion index={isOpen ? [0] : []} allowMultiple>
        <AccordionItem borderY={"none"} px={0}>
          <AccordionPanel py={5} px={0}>
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 gap-x-10">
              <div className="col-span-1 xl:col-span-2">
                <LabelLayout label="Property Size">
                  <Select
                    classNamePrefix="select"
                    className="basic-multi-select border-none"
                    menuPortalTarget={document.body}
                    options={PropertySize}
                    styles={customStyles}
                    isMulti
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary: "white",
                      },
                    })}
                    onChange={(e: OptionsOrGroups<any, any>) =>
                      setFilter({
                        ...filter,
                        propertySize: e.map((option) => option.value),
                      })
                    }
                  />
                </LabelLayout>
              </div>

              <div className="col-span-1 xl:col-span-2">
                <LabelLayout label="Broker">
                  <Select
                    classNamePrefix="select"
                    className="basic-single border-none"
                    options={Broker}
                    menuPortalTarget={document.body}
                    styles={customStyles}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary: "white",
                      },
                    })}
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        broker: (e as any).value,
                      })
                    }
                  />
                </LabelLayout>
              </div>

              <div className="col-span-1 xl:col-span-2">
                <div className="flex flex-col gap-5 gap-x-10 w-full">
                  <div className="flex gap-5 gap-x-10 w-full">
                    <CustomInput
                      type="number"
                      label="Sale Price Min"
                      placeholder="Sale Price Min"
                      value={filter.salePriceMin}
                      onChange={(e) =>
                        setFilter({
                          ...filter,
                          salePriceMin: +e.target.value,
                        })
                      }
                    />
                    <CustomInput
                      type="number"
                      label="Sale Price Max"
                      placeholder="Sale Price Max"
                      value={filter.salePriceMax}
                      onChange={(e) =>
                        setFilter({
                          ...filter,
                          salePriceMax: +e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="px-2">
                    <RangeSlider
                      aria-label={["min", "max"]}
                      defaultValue={[0, 1000000]}
                      colorScheme="purple"
                      value={[filter.salePriceMin, filter.salePriceMax]}
                      onChange={(e) =>
                        setFilter({
                          ...filter,
                          salePriceMin: e[0],
                          salePriceMax: e[1],
                        })
                      }
                    >
                      <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                      </RangeSliderTrack>
                      <RangeSliderThumb index={0} />
                      <RangeSliderThumb index={1} />
                    </RangeSlider>
                  </div>
                </div>
              </div>

              {/*  */}
              <div className="col-span-1 xl:col-span-2">
                <div className="flex flex-col gap-5 gap-x-10 w-full">
                  <div className="flex gap-5 gap-x-10 w-full">
                    <CustomInput
                      type="number"
                      label="Price per SF Min"
                      placeholder="Price per SF Min"
                      value={filter.pricePersfMin}
                      onChange={(e) =>
                        setFilter({
                          ...filter,
                          pricePersfMin: +e.target.value,
                        })
                      }
                    />

                    <CustomInput
                      type="number"
                      label="Price per SF Max"
                      placeholder="Price per SF Max"
                      value={filter.pricePersfMax}
                      onChange={(e) =>
                        setFilter({
                          ...filter,
                          pricePersfMax: +e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="px-2">
                    <RangeSlider
                      aria-label={["min", "max"]}
                      defaultValue={[0, 1000000]}
                      value={[filter.pricePersfMin, filter.pricePersfMax]}
                      colorScheme="purple"
                      onChange={(e) =>
                        setFilter({
                          ...filter,
                          pricePersfMin: e[0],
                          pricePersfMax: e[1],
                        })
                      }
                    >
                      <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                      </RangeSliderTrack>
                      <RangeSliderThumb index={0} />
                      <RangeSliderThumb index={1} />
                    </RangeSlider>
                  </div>
                </div>
              </div>
            </div>
          </AccordionPanel>
          <Heading fontSize={"2xl"} display={"flex"} justifyContent={"end"}>
            <AccordionButton
              w={"fit-content"}
              borderRadius={"full"}
              backgroundColor={"white"}
              color={"#222226"}
              py={3}
              borderWidth={1}
              outline={"none"}
              _active={{
                outline: "none",
              }}
              onClick={() => setIsOpen((prev) => !prev)}
              _hover={{
                backgroundColor: "#222226",
                color: "white",
                borderColor: "white",
              }}
            >
              {isOpen ? "Less Options" : "More Options"}
            </AccordionButton>
          </Heading>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filter;

interface Label {
  label: string;
}
type CustomInputProps = Omit<
  InputProps,
  "borderWidth" | "borderColor" | "borderRadius" | "size"
> &
  Label;

const CustomInput = ({ label, ...props }: CustomInputProps) => {
  return (
    <LabelLayout label={label}>
      <Input
        borderWidth={1}
        borderColor={"white"}
        borderRadius="0.5rem"
        size="lg"
        width={"full"}
        outline={"none"}
        focusBorderColor="white"
        _hover={{
          borderColor: "white",
        }}
        {...props}
      />
    </LabelLayout>
  );
};

interface LabelLayoutProps {
  label: string;
  children?: React.ReactNode;
}
const LabelLayout = ({ label, children }: LabelLayoutProps) => {
  return (
    <Flex flexDirection={"column"} gap={2} w={"full"}>
      <Text fontWeight={"semibold"}>{label}</Text>
      {children}
    </Flex>
  );
};
