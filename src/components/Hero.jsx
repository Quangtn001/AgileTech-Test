import hero from "../assets/hero.svg";
import AnimationOnScroll from "../hooks/Animation";
const Hero = () => {
  return (
    <AnimationOnScroll animation="fade-in-scale">
      <section className="my-[50px] lg:my-[100px]">
        <div className="flex flex-col h-full relative ">
          <div className="flex flex-col items-center lg:items-start ">
            <div className="text-center lg:text-left">
              <h1 className="text-[40px] lg:text-[80px] lg:leading-[88px] font-bold text-heading lg:max-w-[640px] mb-6 lg:mb-12">
                Save your data storage here.
              </h1>

              <p className="description lg:max-w-[378px] mb-6 lg:mb-12">
                Data Warehouse is a data storage area that has been tested for
                security, so you can store your data here safely but not be
                afraid of being stolen by others.
              </p>

              <a
                href="/"
                className="px-[37px] py-4 rounded-[50px] bg-purple-500 text-white font-bold "
              >
                Learn more
              </a>
            </div>
          </div>
          <img
            src={hero}
            className=" lg:absolute lg:right-0 lg:top-[100px] mt-8 lg:mt-0"
          />
        </div>
      </section>
    </AnimationOnScroll>
  );
};

export default Hero;
