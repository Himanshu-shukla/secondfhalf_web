import bgImg from "../assets/1_1.png";

function HeroMigration() {
  return (
    <section
      className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat flex items-center text-white"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h1
          className="text-5xl font-light mb-2"
          style={{ WebkitTextStroke: "1px white", color: "transparent" }}
        >
          Application
        </h1>
        <h2 className="text-5xl font-bold text-white">Migration</h2>
        <p className="mt-6 text-gray-300 leading-relaxed">
          Seamlessly transition from legacy systems to modern, secure, and scalable environments
          empowering your organization to evolve without losing momentum.
        </p>
      </div>
    </section>
  );
}

export default function P001() {
  return (
    <div className="space-y-3">
      <HeroMigration />
      <p className="text-white/70">Your Figma → React screen goes here.</p>
    </div>
  );
}
