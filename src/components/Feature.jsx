import FeatureCard from "./FeatureCard";
import AnimationOnScroll from "@hook/Animation";
import featuresData from "@data/FeatureData";

const Feature = () => {
  return (
    <AnimationOnScroll animation="fade-in-down">
      <section className="mt-[50px] lg:mt-[200px]">
        <div className="text-center ">
          <h1 className="text-[40px] leading-[52px] font-bold  text-heading mb-6 lg:mb-12">
            Features
          </h1>
          <p className="max-w-[584px] mb-16 lg:mb-24 mx-auto description ">
            Some of the features and advantages that we provide for those of you
            who store data in this Data Warehouse.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[50px] lg:grid-cols-2">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              bg={feature.bacground}
              icon={feature.icon}
            />
          ))}
        </div>
      </section>
    </AnimationOnScroll>
  );
};

export default Feature;
