"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./3dCard";
import Link from "next/link";
import data from "./properties_data.json";
import { Button, Tag, Text } from "@chakra-ui/react";
import { CircleUser } from "lucide-react";
import Filter from "./Filter";
import DataOnDataPage from "./DataOnDataPage";
import { motion } from "framer-motion";

type SizeFilter = {
  min: number;
  max: number;
};

export type FilterType = {
  address: string | null;
  propertyType: string[];
  propertyStatus: string[];
  propertySize: SizeFilter[];
  broker: string | null;
  salePriceMin: number;
  salePriceMax: number;
  pricePersfMin: number;
  pricePersfMax: number;
};
export function ThreeDCardDemo() {
  const [filter, setFilter] = useState<FilterType>({
    address: null,
    propertyType: [],
    propertyStatus: [],
    propertySize: [],
    broker: null,
    salePriceMin: 0,
    salePriceMax: 1000000,
    pricePersfMin: 0,
    pricePersfMax: 100,
  });
  console.log("filterData", { filter });
  const initialLoad = 3;
  const loadMoreCount = 5;
  const [visibleCount, setVisibleCount] = useState(initialLoad);

  const loadMore = () => {
    setVisibleCount((prevVisibleCount) => prevVisibleCount + loadMoreCount);
  };

  const filteredData = useMemo(() => {}, [filter]);

  return (
    <motion.div
      className="text-[#222226] flex flex-col py-28 md:py-36 lg:py-44 items-center bg-[#f3ede6] gap-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="text-3xl md:text-6xl md:leading-[70px] lg:text-7xl lg:leading-[90px] xl:text-8xl xl:leading-[110px] font-semibold text-start">
        Property{" "}
        <span className="font-bolder-500 text-[#5656b1]">Listings</span>
      </p>

      <Filter filter={filter} setFilter={setFilter} />

      <div className="flex flex-wrap -mx-4">
        {data.properties.slice(0, visibleCount).map((property) => (
          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4" key={property.id}>
            <CardContainer className="inter-var" key={property.id}>
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={"/1.jpg"}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {property.categories.slice(0, 3).map((category) => (
                    <Tag
                      size="sm"
                      colorScheme="teal"
                      className="text-xs font-bold"
                      key={category}
                    >
                      {category}
                    </Tag>
                  ))}
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {property.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {property.description}
                </CardItem>

                <CardItem
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  <Text>
                    {property.sizeInSqFt} SF | Rs.{property.price.total}
                  </Text>
                </CardItem>

                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    <div className="flex items-center">
                      <CircleUser />
                      {property.brokerInfo.name}
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <Link href={`/home/${property.id}`}>View More Info</Link>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
      <div>
        {visibleCount < data.properties.length && (
          <div className="flex justify-center mt-8">
            <Button onClick={loadMore} colorScheme="teal">
              Load More
            </Button>
          </div>
        )}
      </div>
      <DataOnDataPage />
      <motion.div />
    </motion.div>
  );
}
