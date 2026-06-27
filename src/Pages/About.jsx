export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 text-white p-8">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-green-400 text-center mb-6">
          About VoltPath
        </h1>

        <p className="text-center text-gray-300 text-lg mb-12">
          Smart EV Charging Platform powered by Artificial Intelligence
        </p>

        {/* Main About Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-green-400/20 rounded-3xl p-8 shadow-2xl">

          <p className="text-lg leading-8 text-gray-200">
            VoltPath is an intelligent EV charging platform designed to
            help electric vehicle owners easily locate nearby charging
            stations, reserve charging slots, and manage charging
            activities efficiently.
          </p>

          <p className="text-lg leading-8 text-gray-200 mt-6">
            Our mission is to support sustainable transportation by
            providing a smart and user-friendly charging ecosystem
            powered by modern web technologies and Artificial Intelligence.
          </p>

        </div>

        {/* Features */}
        <h2 className="text-3xl font-bold text-green-400 mt-16 mb-8 text-center">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-green-400/20">
            <h3 className="text-xl font-bold text-green-400">
              📍 Smart Station Search
            </h3>
            <p className="mt-3 text-gray-300">
              Quickly locate EV charging stations based on your location.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-green-400/20">
            <h3 className="text-xl font-bold text-green-400">
              ⚡ Slot Reservation
            </h3>
            <p className="mt-3 text-gray-300">
              Reserve charging slots in advance and avoid waiting time.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-green-400/20">
            <h3 className="text-xl font-bold text-green-400">
              🔋 Live Availability
            </h3>
            <p className="mt-3 text-gray-300">
              Check charger availability and connector information instantly.
            </p>
          </div>

        </div>

        {/* AI Integration */}
        <h2 className="text-3xl font-bold text-green-400 mt-16 mb-8 text-center">
          AI Powered Features
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-green-500/20 border border-green-400 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-green-400">
              🤖 AI Route Recommendation
            </h3>

            <p className="mt-3 text-gray-300">
              AI suggests the nearest and most efficient charging station
              based on distance, availability, and charging speed.
            </p>
          </div>

          <div className="bg-green-500/20 border border-green-400 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-green-400">
              🔮 AI Availability Prediction
            </h3>

            <p className="mt-3 text-gray-300">
              Machine Learning predicts charger availability and peak
              usage times to reduce waiting periods.
            </p>
          </div>

        </div>

        {/* Future Scope */}
        <div className="mt-16 bg-white/10 backdrop-blur-lg border border-green-400/20 rounded-3xl p-8">

          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Future Enhancements
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>✅ AI Chatbot Assistant</li>
            <li>✅ Real-Time Maps Integration</li>
            <li>✅ EV Battery Health Monitoring</li>
            <li>✅ Smart Charging Recommendations</li>
            <li>✅ Dynamic Pricing Prediction</li>
          </ul>

        </div>

      </div>

    </div>
  );
}