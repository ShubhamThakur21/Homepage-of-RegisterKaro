import score from '../assets/Pagination container.png';

const HappyClient = () => {
  const steps = [
    { id: 1, title: "Fill up Application Form", bgColor: "bg-orange-500", icon: "📝" },
    { id: 2, title: "Make Online Payment", bgColor: "bg-green-500", icon: "💳" },
    { id: 3, title: "Executive will Process Application", bgColor: "bg-blue-500", icon: "🔄" },
    { id: 4, title: "Get Confirm Mail", bgColor: "bg-purple-500", icon: "📩" },
  ];

  return (
    <div className="bg-gray-100">
      <section className="py-12 bg-white text-center">
        <div className="max-w-7xl mx-auto p-3">
          <h2 className="text-3xl font-bold text-gray-800">Our Happy Clients</h2>
          <p className="text-gray-600 mt-2 mb-8">
            Professionally cultivate one-to-one customer service with robust ideas. Dynamically
            innovate resource-leveling customer service for state-of-the-art customer service.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <img src={score} alt="Client Feedback" />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-8 bg-orange-400">
        <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex  justify-center gap-6 ">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center p-4 w-full max-w-sm  rounded-lg  text-gray-800`}
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full text-2xl text-white ${step.bgColor} mr-4`}
                >
                  {step.icon}
                </div>
                <p className="text-sm font-medium">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HappyClient;
