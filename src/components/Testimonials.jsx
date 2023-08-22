import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get("https://test-react.agiletech.vn/galleries")
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <section className="my-[50px] lg:my-[200px] relative">
      <div className="bg-bg_color rounded-[50px] min-h-[710px]">
        <div className="flex flex-col justify-center px-2 lg:px-0 h-[710px]">
          <h2 className="text-[40px] leading-[52px] text-white font-bold mb-[90px] px-[80px]">
            Testimonials
          </h2>
          <div className="mx-[50px] lg:mx-[80px]">
            <Slider {...settings} className="">
              {testimonials.map((item) => (
                <div
                  className="bg-white rounded-[20px] w-full max-w-[930px] h-[330px] mx-auto overflow-y-auto shadow-2xl"
                  key={item.id}
                >
                  <div className="p-5 lg:px-[100px] lg:py-[60px] flex flex-col lg:flex-row items-start gap-[43px]">
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="rounded-[100px/50px] w-[100px] h-[50px] object-cover"
                    />
                    <div className="flex flex-col items-start">
                      <p className="text-[18px] leading-7 font-bold">
                        John Fang
                      </p>
                      <p className="text-sm font-medium text-bg_color mb-5">
                        wordfaang.com
                      </p>
                      <p className="description ">{item.desctiption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
