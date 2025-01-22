import { FaRegArrowAltCircleRight } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left Content Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-sm text-orange-500 uppercase tracking-widest">
            Welcome to RegisterKaro.in
          </h3>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            About <span className="text-orange-500">Register Karo</span>
          </h2>
          <p className="mt-4 text-gray-700 text-justify leading-relaxed">
            We have been using Intelegencia as our DevOps vendor for our field 
            service applications over the last couple of years and I m extremely 
            pleased with their performance, ability to execute, and willingness 
            to adapt in our ever-changing environment.
          </p>
          <p className="mt-4 text-gray-700 text-justify leading-relaxed">
            Perry is an outstanding leader who is fanatical about customer 
            satisfaction. He has built a solid team which has consistently 
            delivered on projects, thereby exceeding everyone’s expectations.
          </p>
          <p className="mt-4 text-gray-700 text-justify leading-relaxed">
            I would strongly recommend their services to any organization that is 
            looking for solid, reliable, and predictable outcomes.
          </p>
          <button className="mt-6 bg-[#1C4670] hover:bg-bg-[#1C4670] text-white px-6 py-3 rounded-lg flex items-center gap-2">
            Learn More <span ><FaRegArrowAltCircleRight /></span>
          </button>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/78f8/096c/dbd2da76442c29194b8d57f4b8a7db2f?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V9Tqbifv33V5d3TIBqmjk0hu2dO2xQGWfTQegcKpg9p-eQwNlP~j9O2557W9TiQP3ORvOQzmEKjK0psjCbgYOPgiDcJZMm0ss7StqA-JikLwcqhZmE358HR0mHIznEmtvuEdg5leaPDNN4CrpmxvFjYxUn6UPpbZxuiqT-K0NKndybR~vaYaB7s~wADns27yBVQ5eP6KRXsIw-KK8BDUlbKDdnrMMxA99IAd2luQcsX~iIgNn5~X3FGtzuslvKoAx6ONh42KNe6EpHWI42i7Mvxt0EuK5YZw09Bi3TjcHjSZfal73qKo9hlOwmGIqchXr87qSecKUcNctw7iX7BL6A__"
            alt="Register Karo Team"
            className="rounded-lg shadow-lg w-full"
          />
          <div className="absolute bottom-0 right-0 bg-orange-500 h-24 w-24 rounded-bl-full"></div>
          <div className="absolute bottom-10 right-10 bg-white h-6 w-6 rounded-full border border-dotted border-orange-500"></div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;