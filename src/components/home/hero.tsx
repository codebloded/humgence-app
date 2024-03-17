import { SectionLayout } from "../layouts/SectionLayout";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <SectionLayout
      bgColor={{
        type: "hex",
        value: "#5656b1",
      }}
    >
      <motion.div
        className="py-40 min-h-[100vh] w-full h-full flex justify-start md:justify-center items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="flex flex-col text-8xl font-bold md:text-9xl text-white items-start md:items-center leading-[160px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.p
            className="text-start md:text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span
              className="text-white"
              style={{ display: "inline-block", marginRight: "10px" }}
            >
              Invest
            </span>
            <span
              className="text-[#ffdf00]"
              style={{ display: "inline-block" }}
            >
              in
            </span>
          </motion.p>
          <motion.p
            className="text-start md:text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            your future
          </motion.p>
        </motion.div>
      </motion.div>
    </SectionLayout>
  );
}