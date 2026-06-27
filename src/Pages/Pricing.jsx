export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 text-white p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-green-400 mb-4">
          Pricing Plans
        </h1>

        <p className="text-center text-gray-300 mb-12">
          Choose the perfect plan for your EV charging needs
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Basic */}
          <div className="bg-white/10 backdrop-blur-lg border border-green-400/20 rounded-3xl p-8 shadow-xl hover:scale-105 transition">

            <h2 className="text-3xl font-bold text-green-400">
              Basic
            </h2>

            <p className="text-5xl font-bold my-6">
              ₹99
            </p>

            <ul className="space-y-3 text-gray-300 mb-8">
              <li>✅ Station Search</li>
              <li>✅ Basic Booking</li>
              <li>✅ Route Assistance</li>
            </ul>

            <button className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl font-semibold">
              Choose Plan
            </button>

          </div>

          {/* Premium */}
          <div className="bg-green-500 rounded-3xl p-8 shadow-2xl scale-105">

            <div className="bg-white text-green-500 text-xs px-3 py-1 rounded-full inline-block mb-4 font-bold">
              MOST POPULAR
            </div>

            <h2 className="text-3xl font-bold">
              Premium
            </h2>

            <p className="text-5xl font-bold my-6">
              ₹299
            </p>

            <ul className="space-y-3 mb-8">
              <li>✅ Unlimited Bookings</li>
              <li>✅ Fast Charging Access</li>
              <li>✅ Priority Support</li>
              <li>✅ Live Availability</li>
            </ul>

            <button className="w-full bg-white text-green-500 py-3 rounded-xl font-bold">
              Choose Plan
            </button>

          </div>

          {/* Enterprise */}
          <div className="bg-white/10 backdrop-blur-lg border border-green-400/20 rounded-3xl p-8 shadow-xl hover:scale-105 transition">

            <h2 className="text-3xl font-bold text-green-400">
              Enterprise
            </h2>

            <p className="text-5xl font-bold my-6">
              ₹599
            </p>

            <ul className="space-y-3 text-gray-300 mb-8">
              <li>✅ Fleet Management</li>
              <li>✅ Dedicated Support</li>
              <li>✅ Analytics Dashboard</li>
              <li>✅ Multi-Vehicle Access</li>
            </ul>

            <button className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl font-semibold">
              Choose Plan
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}