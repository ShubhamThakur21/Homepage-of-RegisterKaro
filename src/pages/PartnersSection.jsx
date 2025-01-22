import { CiCircleCheck } from "react-icons/ci";
import logoone from "../assets/Group 23.png";

const stats = [
  { id: 1, label: 'Customers', value: '1M+' },
  { id: 2, label: 'Years of Excellence', value: '12+' },
  { id: 3, label: 'R&D Engineers', value: '41+' },
  { id: 4, label: 'Countries', value: '78+' },
  { id: 5, label: 'Partners', value: '3287+' },
  { id: 6, label: 'Awards Received', value: '41+' },
];

const AppPromoSection = () => (
<div className="relative bg-gradient-to-r from-blue-800 to-blue-500 text-white py-10 px-6 sm:px-16 lg:flex lg:justify-between lg:items-center overflow-hidden">
  <div className="lg:w-1/2">
    <h2 className="text-2xl font-bold mb-4">Manage Your Services by Your Mobile Phone</h2>
    <p className="mb-6">
      Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.
    </p>
    <div className="flex gap-4">
      <button className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded">Get on App Store</button>
      <button className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded">Get it on Google Play</button>
    </div>
  </div>
  <div className="lg:w-1/2 flex justify-end items-center">
    <img
      src={logoone}
      alt="Mobile App"
      className="h-[500px] w-[400px] object-contain lg:absolute lg:right-0 lg:top-0 z-0"
    />
  </div>
</div>

);

const StatsSection = () => (
  <div className="bg-gray-100 py-10 px-6 sm:px-16 text-center">
    <h2 className="text-xl font-semibold text-orange-500 mb-4">WHY REGISTER KARO</h2>
    <h3 className="text-2xl font-bold mb-6">Some Numbers are Important</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
      {stats.map((stat) => (
       <div key={stat.id} className="text-center">
       <h4 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-blue-800 text-transparent bg-clip-text">
         {stat.value}
       </h4>
       <p className="text-gray-700 font-medium">{stat.label}</p>
     </div>
     
      ))}
    </div>
  </div>
);

const SubscriptionSection = () => (
  <div className="bg-gradient-to-r from-orange-500 to-blue-800 text-white py-10 px-6 sm:px-16 text-center">
    <h2 className="text-2xl font-bold mb-4">Welcome to your new digital reality. Now.</h2>
    <form className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
      <input
        type="email"
        placeholder="Enter Your Email"
        className="py-2 px-4 rounded text-gray-900 w-full sm:w-auto"
      />
      <button
        type="submit"
        className="bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
    <div className="mt-4 text-sm text-gray-200 flex flex-col sm:flex-row justify-center items-center gap-2">
    <div className="flex items-center">
    <span className=" mr-1">  <CiCircleCheck/> </span> Instant results
    </div>
    <div className="flex items-center">
    <span className=" mr-1">  <CiCircleCheck/> </span> User-friendly Interface
    </div>
    <div className="flex items-center">
    <span className=" mr-1">  <CiCircleCheck/> </span> Personalized customization
    </div>
     
    </div>
  </div>
);

const PartnersSection1 = () => (
  <div className="bg-white py-6 px-6 sm:px-16 text-center">
    <div className="flex flex-wrap justify-center gap-6">
      <img src="https://cdn.iconscout.com/icon/free/png-256/free-coinbase-logo-icon-download-in-svg-png-gif-file-formats--digital-wallet-crypto-cryptocurrency-logos-icons-2249228.png" alt="Coinbase" className="h-20 w-20" />
      <img src="https://download.logo.wine/logo/Spotify/Spotify-Logo.wine.png" alt="Spotify" className="h-20 w-36" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR220T_fujNoXwRqi349C8BhjDieJJN0Vgd1w&s" alt="Slack" className="h-20 w-36"/>
      <img src="https://download.logo.wine/logo/Dropbox_(service)/Dropbox_(service)-Logo.wine.png" alt="Dropbox" className="h-20 w-36" />
      <img src="https://logowik.com/content/uploads/images/webflow-new2506.logowik.com.webp" alt="Webflow" className="h-20 w-36" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ewAZsF2999DQVc6Sd6gEj-vvLI2FDf-RmQ&s" alt="Zoom" className="h-20 w-36" />
    </div>
  </div>
);

const PartnersSection = () => (
  <div className="font-sans">
    <AppPromoSection />
    <StatsSection />
    <SubscriptionSection />
    <PartnersSection1 />
  </div>
);

export default PartnersSection;