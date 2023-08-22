import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const AnimationOnScroll = ({ animation, children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animation);
        } else {
          entry.target.classList.remove(animation);
        }
      });
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animation]);

  return <div ref={elementRef}>{children}</div>;
};

AnimationOnScroll.propTypes = {
  animation: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AnimationOnScroll;
