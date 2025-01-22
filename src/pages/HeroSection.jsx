import logo from '../assets/Group 3.png';
import scop from '../assets/Group 1261153002.png';

const services = [
  { name: "Annual Compliance" },
  { name: "Payroll Services" },
  { name: "Company Formation" },
  { name: "Payroll Services" },
];

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFFBF2] to-[#E6F7FF] min-h-[500] px-6 md:px-12 lg:px-20 py-16 flex flex-col lg:flex-row items-center">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left lg:pt-6">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500 font-semibold text-lg">Google Rating</span>
          <span className="text-yellow-500 text-xl">★★★★★</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Your trusted partner <br /> for compliance business needs
        </h1>
        <p className="text-gray-600 text-lg">
          An online business compliance platform that helps entrepreneurs and other individuals with various, <span className="font-semibold">registrations, tax filings,</span> and other <span className="font-semibold">legal matters</span>.
        </p>
        <div className="flex items-center space-x-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">4.5+</h3>
            <p className="text-gray-500">Customer Rating</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">20,000+</h3>
            <p className="text-gray-500">Clients</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">99.8%</h3>
            <p className="text-gray-500">Financial Stability</p>
          </div>
        </div>
        <div className="flex space-x-4 justify-center lg:justify-start">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Talk To An Expert
          </button>
          <button className="flex items-center text-gray-800 hover:text-blue-600 transition">
            <span className="mr-2">See how it works</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className=" ">
      <div >
      <div className="hidden absolute mt-2 right-0 sm:flex sm:flex-col items-end space-y-2">
          {services.map((service, index) => (
            <button
              key={index}
              className="bg-white shadow-lg rounded-lg py-3 px-6 w-full  text-left text-gray-800 font-medium hover:bg-blue-50 transition"
            >
              {service.name}
            </button>
          ))}
        </div>
      </div>
       
        <div className="relative w-full text-center ">
          <img
            src={logo}
            alt="Logo Illustration"
            className="w-full object-contain"
          />
          <div className="absolute  bottom-0 right-[-30px]  shadow-lg rounded-full p-2">
            <img
              src={scop}
              alt="Additional Illustration"
              className="lg:max-w-full max-w-24  object-contain"
            />
          </div>
          <div className="absolute top-4 right-4 bg-white shadow-lg rounded-full p-2">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
