export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose VoltPath?
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

        <div className="bg-green-50 border border-green-100 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-green-700">
            📍 Find Nearby Stations
          </h3>
          <p className="text-gray-600 mt-2">
            Locate charging stations near you with real-time availability.
          </p>
        </div>

        <div className="bg-green-50 border border-green-100 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-green-700">
            📅 Book in Advance
          </h3>
          <p className="text-gray-600 mt-2">
            Reserve your charging slot and avoid waiting times.
          </p>
        </div>

        <div className="bg-green-50 border border-green-100 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-green-700">
            🌱 Eco-Friendly Charging
          </h3>
          <p className="text-gray-600 mt-2">
            Support sustainable transportation and reduce carbon emissions.
          </p>
        </div>

        <div className="bg-green-50 border border-green-100 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-green-700">
            🔒 Secure & Reliable
          </h3>
          <p className="text-gray-600 mt-2">
            Safe payments and verified charging stations you can trust.
          </p>
        </div>

      </div>
    </section>
  );
}