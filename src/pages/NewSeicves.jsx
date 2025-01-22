// import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FaIntercom } from "react-icons/fa";
import { TbAddressBook } from "react-icons/tb";
import { MdOutlineViewCompactAlt } from "react-icons/md";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaBookBible } from "react-icons/fa6";


const Services = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-md text-orange-500 tracking-widest">
        WELCOME TO REGISTERKARO.IN
      </h2>
      <h1 className="text-3xl font-bold text-gray-900 mt-2">
        Explore Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mr-20 ml-20 mt-10  relative">
       
        <div className="hidden  absolute  inset-y-0 left-1/2 transform -translate-x-1/2 border border-gray-300"></div>

        {/* Service Cards */}
        {services1.map((serv, index) => (
          <div
            key={index}
            className="relative   bg-white p-8 border rounded-lg shadow-sm transition hover:shadow-md"
          >
            <div className="text-orange-500 text-4xl mb-4  sm:inline-block  inline-block ">{serv.icon}</div>
            <h3 className="font-bold text-lg">{serv.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{serv.description}</p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 font-semibold"
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg">
        See All Services
      </button>
    </div>
  );
};

const services1 = [
  {
    icon: <IoSettingsOutline />,
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.technology to reach business goals",
  },
  {
    icon: <FaIntercom/>,
    title: "Company Secretarial Services",
    description:
"Make data-driven decisions and utilize technology to reach business goals.",
  },
  {
    icon: <TbAddressBook />
    ,
    title: "Virtual Office Address",
    description:
      "Foster customer relationships by effectively serving your market.technology to reach business goals",
  },
  {
    icon:<MdOutlineViewCompactAlt />
    ,
    title: "Annual Compliance Services",
    description:
      "Turn your ideas into modern products with our design experts.across the globe with minimal effort",
  },
  {
    icon: <FaCcAmazonPay />,
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.across the globe with minimal effort",
  },
  {
    icon: <FaBookBible />,
    title: "Bookkeeping Services",
    description:
      "Steering user behaviors with creative design, data insights & technology.",
  },
];

export default Services;
