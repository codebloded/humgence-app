import { SectionLayout } from "../layouts/SectionLayout";

export function Hero() {
  return (
    <SectionLayout
      bgColor={{
        type: "hex",
        value: "#5656b1",
      }}
    >
      <div className="py-40 min-h-[100vh] w-full h-full flex justify-start md:justify-center items-center">
        <div className="flex flex-col text-8xl font-bold md:text-9xl text-white items-start md:items-center leading-[160px]">
          <p className="text-start md:text-center">Invest in</p>
          <p className="text-start md:text-center">your future</p>
        </div>
      </div>
    </SectionLayout>
  );
}
