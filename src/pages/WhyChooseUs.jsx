// import React from "react";

const WhyChooseUs = () => {
  const cards = [
    {
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-orange-100",
      icon: "🛡️",
    },
    {
      title: "No Hidden Fee",
      description: "Everything is put before you with no hidden charges or conditions",
      bgColor: "bg-green-100",
      icon: "✅",
    },
    {
      title: "Guaranteed Satisfaction",
      description: "We ensure that you stay 100% satisfied with our offered services",
      bgColor: "bg-blue-100",
      icon: "😊",
    },
    {
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      bgColor: "bg-pink-100",
      icon: "👨‍💼",
    },
    {
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      bgColor: "bg-pink-100",
      icon: "👨‍💼",
    },
  ];

  return (
    <section className="py-4 bg-white">
      <div className="max-w-7xl  mx-auto  sm:px-2 lg:px-8">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
        <div> <h2 className="text-lg font-semibold text-orange-500 uppercase mb-2">
          WHY REGISTERKARO.IN
        </h2>
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Why Choose Register Karo
        </h3>
        <p className="text-gray-600 mb-8 max-w-sm">
          It is with consistent services and results that build trust with the people and that in
          turn help us to serve the business better.
        </p> </div>

          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${card.bgColor} flex flex-col items-start ${
                index === 0 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h4>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
