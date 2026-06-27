function Stats() {
  return (
    <section className="bg-slate-900 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

        <div>
          <h2 className="text-4xl font-bold text-green-400">2500+</h2>
          <p>Charging Stations</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-green-400">500+</h2>
          <p>Cities Covered</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-green-400">50K+</h2>
          <p>Happy Users</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-green-400">1.2M kg</h2>
          <p>CO₂ Saved</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;