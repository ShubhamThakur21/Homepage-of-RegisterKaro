/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
const testimonials = [
  {
    id: 1,
    reviewer: "Chris",
    role: "President and CEO, PrintReach, USA",
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint.",
    rating: 4.5,
    profileImage: "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOF-kwz6q7b6MILz8~zzH6kb0htM~dlnYSlBy-bWEtUqdRM66Tlyx-Im8GIp5zFkgkwFNXUmuzaXEIov6Nh1hTB652pnU9JheTm2m4n51eMLEW9-JKQJmtw9hf6~-v33r~2ivSROsJ7OSAEtZvBpPXbk8pbMPPXxdAbTMxJDha0gbctqB7hcsQsgWlc8KD25sa1WTD63w5O5is5B67B3W9E7GMBmmehqVo01mjEjKKsT~ba-mwGTQoW~DbcjzZzoNWK3Ii~3bJ82avjyoqgQpYSeJ1MWIi4melW1uUBcx9H7eI~k3PyXE6xGwxIZI~glaSYv8Cx6hQrjP6Vj3nr4mA__", // Replace with actual image URL
  },
  {
    id: 2,
    reviewer: "Alex",
    role: "Founder, TechWorld, UK",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
    profileImage: "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOF-kwz6q7b6MILz8~zzH6kb0htM~dlnYSlBy-bWEtUqdRM66Tlyx-Im8GIp5zFkgkwFNXUmuzaXEIov6Nh1hTB652pnU9JheTm2m4n51eMLEW9-JKQJmtw9hf6~-v33r~2ivSROsJ7OSAEtZvBpPXbk8pbMPPXxdAbTMxJDha0gbctqB7hcsQsgWlc8KD25sa1WTD63w5O5is5B67B3W9E7GMBmmehqVo01mjEjKKsT~ba-mwGTQoW~DbcjzZzoNWK3Ii~3bJ82avjyoqgQpYSeJ1MWIi4melW1uUBcx9H7eI~k3PyXE6xGwxIZI~glaSYv8Cx6hQrjP6Vj3nr4mA__",
  },
  {
    id: 3,
    reviewer: "Sophia",
    role: "Manager, CloudBase, USA",
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 4,
    profileImage: "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOF-kwz6q7b6MILz8~zzH6kb0htM~dlnYSlBy-bWEtUqdRM66Tlyx-Im8GIp5zFkgkwFNXUmuzaXEIov6Nh1hTB652pnU9JheTm2m4n51eMLEW9-JKQJmtw9hf6~-v33r~2ivSROsJ7OSAEtZvBpPXbk8pbMPPXxdAbTMxJDha0gbctqB7hcsQsgWlc8KD25sa1WTD63w5O5is5B67B3W9E7GMBmmehqVo01mjEjKKsT~ba-mwGTQoW~DbcjzZzoNWK3Ii~3bJ82avjyoqgQpYSeJ1MWIi4melW1uUBcx9H7eI~k3PyXE6xGwxIZI~glaSYv8Cx6hQrjP6Vj3nr4mA__",
  },
  {
    id: 4,
    reviewer: "Michael",
    role: "CTO, InnovateX, Canada",
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 4.8,
    profileImage: "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOF-kwz6q7b6MILz8~zzH6kb0htM~dlnYSlBy-bWEtUqdRM66Tlyx-Im8GIp5zFkgkwFNXUmuzaXEIov6Nh1hTB652pnU9JheTm2m4n51eMLEW9-JKQJmtw9hf6~-v33r~2ivSROsJ7OSAEtZvBpPXbk8pbMPPXxdAbTMxJDha0gbctqB7hcsQsgWlc8KD25sa1WTD63w5O5is5B67B3W9E7GMBmmehqVo01mjEjKKsT~ba-mwGTQoW~DbcjzZzoNWK3Ii~3bJ82avjyoqgQpYSeJ1MWIi4melW1uUBcx9H7eI~k3PyXE6xGwxIZI~glaSYv8Cx6hQrjP6Vj3nr4mA__",
  },
  {
    id: 5,
    reviewer: "Emma",
    role: "Designer, Creatix, Germany",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    rating: 5,
    profileImage: "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOF-kwz6q7b6MILz8~zzH6kb0htM~dlnYSlBy-bWEtUqdRM66Tlyx-Im8GIp5zFkgkwFNXUmuzaXEIov6Nh1hTB652pnU9JheTm2m4n51eMLEW9-JKQJmtw9hf6~-v33r~2ivSROsJ7OSAEtZvBpPXbk8pbMPPXxdAbTMxJDha0gbctqB7hcsQsgWlc8KD25sa1WTD63w5O5is5B67B3W9E7GMBmmehqVo01mjEjKKsT~ba-mwGTQoW~DbcjzZzoNWK3Ii~3bJ82avjyoqgQpYSeJ1MWIi4melW1uUBcx9H7eI~k3PyXE6xGwxIZI~glaSYv8Cx6hQrjP6Vj3nr4mA__",
  },
];


const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < fullStars) return "★";
    if (halfStar && index === fullStars) return "☆";
    return "☆";
  });
  return <div className="text-yellow-400">{stars.join(" ")}</div>;
};

const TestimonialSwiper = () => {
  return (
    <div className="bg-blue-900 text-white py-10 px-5 relative ">
      
      <h2 className="text-center text-2xl font-bold mb-6 relative">
        What People Say About Us
      </h2>
        {/* Navigation Arrows */}
        <div className="absolute top-12 right-24 flex text-sm space-x-2">
          <button className="bg-yellow-400 text-blue-900 w-8 h-8 flex items-center justify-center rounded-full shadow-lg">
          
           <FaLongArrowAltLeft />
          </button>
          <button className=" bg-yellow-400 text-blue-900 w-8 h-8 flex items-center justify-center rounded-full shadow-lg">
          <FaLongArrowAltRight/>
          </button>
        </div>
      <div className="max-w-6xl mx-auto relative">
         
        {/* Swiper with autoplay and navigation */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          // autoplay={{
          //   delay: 3000, // Autoplay every 3 seconds
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
                {/* Star Rating */}
                <div className="absolute top-4 right-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                {/* Testimonial */}
                <blockquote className="mb-4">
                  <div className="text-yellow-500 text-2xl">“</div>
                  <p className="italic">{testimonial.review}</p>
                </blockquote>
                {/* Reviewer */}
                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.profileImage}
                    alt={testimonial.reviewer}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold">{testimonial.reviewer}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

     

      
   
      </div>
    </div>
  );
};

export default TestimonialSwiper;