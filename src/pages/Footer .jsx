
import { CiFacebook } from "react-icons/ci";
import { AiFillGoogleCircle } from "react-icons/ai";
import { LuApple } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const footerData = [
    {
      title: "START A BUSINESS",
      links: ["Features", "Solutions", "Integrations", "Enterprise", "Solutions"],
    },
    {
      title: "GOVERNMENT REGISTRATION",
      links: ["Partners", "Community", "Developers", "App", "Blog"],
    },
    {
      title: "COMPLIANCE & TAX",
      links: ["Channels", "Scale", "Watch the Demo", "Our Competition"],
    },
    {
      title: "BIS & CDSCO",
      links: ["About Us", "News", "Leadership", "Media Kit"],
    },
  ];

  return (
    <footer className="bg-[#001a4d] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-6">
            <p className="text-sm mb-4">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-75">
              <CiFacebook  className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-75">
              <AiFillGoogleCircle  className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-75">
              <LuApple  className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-75">
              <IoLogoInstagram  className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full sm:w-2/3 lg:w-3/4 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {footerData.map((section, index) => (
              <div key={index}>
                <h3 className="text-md font-sm mb-4 whitespace-nowrap text-orange-400">{section.title}</h3>
                <ul className="space-y-1">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-sm hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center">
          <button className="w-10 h-10 bg-orange-400 text-white rounded-full flex items-center justify-center mb-4">
            <span className="text-lg"><FaArrowUp/></span>
          </button>
          <p className="text-sm">© 2024 Registerkaro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;