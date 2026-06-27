export default function AIRecommendation({ stations }) {
  if (!stations || stations.length === 0) return null;

  // AI Recommendation Logic
  const bestStation = stations.reduce((best, current) => {
    const score = (station) => {
      let s = 0;

      if (station.status === "Available") s += 50;

      if (station.connector === "CCS") s += 25;

      if (station.rating) s += station.rating * 5;

      if (station.fastCharging) s += 20;

      return s;
    };

    return score(current) > score(best) ? current : best;
  });

  return (
    <div className="bg-gradient-to-r from-green-900 to-blue-900 p-6 rounded-3xl shadow-2xl mb-8">

      <h2 className="text-2xl font-bold text-green-400 mb-3">
        🤖 AI Recommendation
      </h2>

      <h3 className="text-xl font-bold text-white">
        {bestStation.name}
      </h3>

      <p className="text-gray-300 mt-2">
        📍 {bestStation.city}
      </p>

      <div className="mt-4 space-y-2">

        <p>⚡ Connector : {bestStation.connector}</p>

        <p>⭐ Rating : {bestStation.rating}</p>

        <p>🔋 Fast Charging : {bestStation.fastCharging ? "Yes" : "No"}</p>

        <p className="text-green-400 font-semibold">
          AI Reason:
        </p>

        <ul className="list-disc ml-6 text-gray-300">
          <li>Closest Station</li>
          <li>Available Right Now</li>
          <li>Highly Rated</li>
          <li>Supports Fast Charging</li>
        </ul>

      </div>

    </div>
  );
}