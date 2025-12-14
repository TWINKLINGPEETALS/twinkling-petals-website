function App() {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="w-full hero-gradient-bg">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="rounded-3xl overflow-hidden shadow-card bg-white">
            <img
              src="/images/hero-banner.png"
              alt="Twinkling Petals Pre School & Day Care – Admissions Open"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* OPTIONAL CONTENT PLACEHOLDER (safe, no empty gap) */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Welcome to Twinkling Petals
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          A joyful, safe, and colourful learning environment for children aged
          18 months to 12 years in Bengaluru.
        </p>
      </section>
    </main>
  );
}

export default App;
