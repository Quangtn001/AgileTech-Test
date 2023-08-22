import arrowRight from "../assets/arrow-right.svg";
import PropTypes from "prop-types";
import AnimationOnScroll from "../hooks/Animation";

const FeatureCard = ({ title, description, link, bg, icon }) => {
  return (
    <>
      <AnimationOnScroll animation="fade-in-scale">
        <div className="w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center lg:flex-row lg:justify-start max-auto">
          <div className="hidden lg:flex absolute top-0 right-0 -z-10">
            <img src={bg} alt="" />
          </div>
          <div className="max-w-[120px] lg:mr-7 lg:max-w-[232px]">
            <img src={icon} alt="" />
          </div>
          <div className="max-w-[220px]">
            <h3 className=" text-2xl leading-8 font-normal mb-4 text-heading">
              {title}
            </h3>
            <p className="text-base leading-6 font-normal text-heading mb-4">
              {description}
            </p>
            <div className="flex items-center gap-x-2">
              <a
                href={link}
                className="text-base leading-[26px] font-extrabold text-heading"
              >
                Learn more
              </a>
              <img src={arrowRight} alt="" />
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </>
  );
};
FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default FeatureCard;
