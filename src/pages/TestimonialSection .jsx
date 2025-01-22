/* eslint-disable react/prop-types */


const testimonials = [
  {
    id: 1,
    rating: "4.3/5",
    reviewer: "Chris",
    role: "President and CEO, PrintReach, USA",
    review:
      "We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I'm extremely pleased with their performance, ability to execute, and willingness to adapt in our ever-changing environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team that has consistently delivered on projects thereby exceeding everyone's expectations. I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.",
    reviewPlatform: "Google Reviews",
    profileImage: "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOF-kwz6q7b6MILz8~zzH6kb0htM~dlnYSlBy-bWEtUqdRM66Tlyx-Im8GIp5zFkgkwFNXUmuzaXEIov6Nh1hTB652pnU9JheTm2m4n51eMLEW9-JKQJmtw9hf6~-v33r~2ivSROsJ7OSAEtZvBpPXbk8pbMPPXxdAbTMxJDha0gbctqB7hcsQsgWlc8KD25sa1WTD63w5O5is5B67B3W9E7GMBmmehqVo01mjEjKKsT~ba-mwGTQoW~DbcjzZzoNWK3Ii~3bJ82avjyoqgQpYSeJ1MWIi4melW1uUBcx9H7eI~k3PyXE6xGwxIZI~glaSYv8Cx6hQrjP6Vj3nr4mA__", 
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white text-black py-10 px-5 md:px-20">
      <h2 className="text-center text-yellow-400 font-semibold text-lg">
        87.6% Customer Satisfaction
      </h2>
      <h3 className="text-center text-2xl font-bold text-gray-800 my-4">
        Serving Clients Across the Globe
      </h3>
      <blockquote className="text-center text-gray-800 italic text-lg px-5 md:px-40">
        “{testimonial.review}”
      </blockquote>
      <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        <img
          src={testimonial.profileImage}
          alt={testimonial.reviewer}
          className="w-16 h-16 rounded-full border-2 border-white mr-4"
        />
        <div className="text-center md:text-left">
          <h4 className="text-yellow-400 font-semibold">{testimonial.reviewer}</h4>
          <p className="text-gray-800 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <p className="text-yellow-400 font-semibold mr-2">{testimonial.reviewPlatform}</p>
        <div className="flex items-center text-yellow-500">
          {"★".repeat(4)}{" "}
          <span className="text-gray-600 text-sm ml-1">{testimonial.rating}</span>
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <div>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default TestimonialSection;
