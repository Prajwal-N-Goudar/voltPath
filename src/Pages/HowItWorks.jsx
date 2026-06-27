function HowItWorks() {
  const steps = [
    {
      title: "Search Stations",
      desc: "Find nearby EV charging stations based on your location.",
      icon: "📍",
    },

     {
    title: "AI Recommendation",
    desc: "AI analyzes distance, charger availability, charging speed and suggests the best station.",
    icon: "🤖",
  },
    {
      title: "Select Charger",
      desc: "Choose the connector type and charging station.",
      icon: "⚡",
    },
    {
      title: "Book Slot",
      desc: "Reserve your charging slot in advance.",
      icon: "📅",
    },
    {
      title: "Charge Your EV",
      desc: "Arrive at the station and start charging seamlessly.",
      icon: "🚗",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 text-white p-8">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-400">
            How VoltPath Works
          </h1>

          <p className="text-gray-300 mt-3">
            Simple, Fast & Smart EV Charging Experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
             className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-xl hover:scale-105 transition flex flex-col h-full"
            >
              <div className="text-5xl mb-4">
                {step.icon}
              </div>

              <h2 className="text-2xl font-bold text-green-400 mb-3">
                {index + 1}. {step.title}
              </h2>

              <p className="text-gray-300">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default HowItWorks;