import { MdOutlineLocalPhone } from "react-icons/md";
import { PiContactlessPayment } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const Header = () => {
  const links = [

    { href: 'tel:+918447746183', icon: <MdOutlineLocalPhone />, label: '+918447746183' },
    { href: 'www.registerkaro.com', icon: <CiMail />, label: 'www.registerkaro.com' },
    {
      icon: <CiTwitter />
    },
    {
      icon: <PiContactlessPayment />
    },
    {
      icon: <IoLogoInstagram />
    },
    {
      icon: <CiFacebook />
    }
    
    
    

   
 
  ];

  return (
    <header className="bg-[#204e82] text-white py-2">
      <div className="container mx-auto flex justify-between items-center px-4 flex-wrap">
        {/* Logo on the left side */}
        <div className="flex items-center space-x-2">
         
        </div>

        {/* Links on the right side */}
        <div className="flex gap-2 flex-wrap justify-end">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm sm:text-base mx-2 hover:text-gray-300"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
