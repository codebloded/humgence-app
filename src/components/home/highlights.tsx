import { motion } from "framer-motion";
import { BedDouble, Cctv, MapPinned } from "lucide-react";
import { SectionLayout } from "../layouts/SectionLayout";

export function Highlights() {
  const IMG =
    "https://files.123freevectors.com/wp-content/solidbackground/light-indigo-free-solidcolor-background.jpg";

  const featuresConfig: FeatureProps[] = [
    {
      icon: <Cctv height={"100%"} width={"100%"} />,
      title: "Security Guaranteed",
      description:
        "Ensuring the safety of every property is paramount, and to achieve this goal, we are implementing a comprehensive array of state-of-the-art security technologies.",
    },
    {
      icon: <BedDouble height={"100%"} width={"100%"} />,
      title: "Complete Facilities",
      description:
        "We stand prepared to showcase an extensive array of facilities meticulously designed to cater to and enhance the fulfillment of your diverse needs and activities.",
    },
    {
      icon: <MapPinned height={"100%"} width={"100%"} />,
      title: "Strategic Location",
      description:
        "Each of our buildings is strategically situated in close proximity to city facilities, ensuring unparalleled convenience and accessibility for occupants.",
    },
  ];

  return (
    <SectionLayout
      bgColor={{
        type: "hex",
        value: "#f3ede6",
      }}
    >
      <div className="text-[#222226] flex flex-col py-28 md:py-36 lg:py-44 items-center gap-20">
        <motion.p
          className="text-3xl md:text-6xl md:leading-[70px] lg:text-7xl lg:leading-[90px] xl:text-8xl xl:leading-[110px] font-semibold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get our highlights <br /> from each property
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-5 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {featuresConfig.map((feature, index) => {
            return (
              <Feature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </motion.div>
      </div>
    </SectionLayout>
  );
}

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <motion.div
      className="flex flex-col items-center max-w-sm w-full gap-5 p-10"
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className="aspect-square h-28 p-8 bg-white rounded-full"
        whileHover={{ rotate: 360 }}
      >
        {icon}
      </motion.div>
      <motion.h3
        className="text-center text-2xl md:text-3xl max-w-60 w-full text-[#222226]"
        whileHover={{ color: "#5656b1" }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-center text-[#666361]"
        whileHover={{ color: "#5656b1" }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default Highlights;
