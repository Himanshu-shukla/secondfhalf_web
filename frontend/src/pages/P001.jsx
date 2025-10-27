import bgImg from "../assets/1_1.png";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const WhyMigrationMatters = () => {
  const benefits = [
    "Improve performance and scalability",
    "Strengthen security and compliance",
    "Reduce operational costs and technical debt",
    "Enable integration with modern tools and systems",
    "Support digital transformation and innovation",
  ];

  return (
    <section className="bg-black text-white px-6 md:px-16 lg:px-24 py-20 flex flex-col lg:flex-row items-start justify-between">
      {/* Left Content */}
      <div className="max-w-lg space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Why{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Application
          </span>{" "}
          Migration Matters
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Application migration boosts performance, cuts costs, and prepares your
          systems for future growth and innovation.
        </p>

        {/* Arrow Line (optional decorative element) */}
        <div className="mt-10">
          <svg
            width="120"
            height="60"
            viewBox="0 0 120 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-70"
          >
            <path
              d="M2 2C40 80 80 10 118 58"
              stroke="#ffffff50"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M110 56L118 58L116 50"
              stroke="#ffffff50"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Right Side - Bullet Points */}
      <div className="mt-12 lg:mt-0 lg:ml-16 space-y-6">
        {benefits.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <CheckCircleIcon className="w-6 h-6 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            </div>
            <p className="text-gray-300">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

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

// ModernizeSection.jsx

const ModernizeSection = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 lg:px-24 py-20 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Modernize <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Without</span> Disruption
        </h1>

        <p className="text-gray-400 leading-relaxed">
          Legacy systems can limit performance, security, and scalability.
          At HPIT, we specialize in migrating critical applications to modern environments — cloud,
          hybrid, or on-premise upgrades — ensuring seamless transitions that drive efficiency
          and long-term growth.
        </p>

        <button className="group flex items-center gap-2 text-sm font-medium text-white border border-red-500 rounded-full px-5 py-2 hover:bg-red-500 transition-all">
          Get Started
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* Right Side (Placeholder for image or video) */}
      <div className="mt-12 lg:mt-0 lg:ml-16 w-full max-w-md h-64 bg-gray-900/30 border border-gray-800 rounded-lg"></div>
    </section>
  );
};


const steps = [
  {
    number: "01",
    title: "Assessment & Planning",
    description:
      "We evaluate your existing applications, architecture, and business needs to craft a detailed migration strategy.",
  },
  {
    number: "02",
    title: "Migration & Modernization",
    description:
      "We rehost, re-platform, or refactor applications as needed—ensuring compatibility, performance, and scalability.",
  },
  {
    number: "03",
    title: "Testing & Validation",
    description:
      "We perform rigorous testing to ensure data integrity, system performance, and functional stability.",
  },
  {
    number: "04",
    title: "Deployment & Support",
    description:
      "We deploy applications in the new environment with minimal disruption and offer ongoing support and optimization.",
  },
];

function MigrationApproach() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Our <span className="text-indigo-400">Migration</span> Approach
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          We follow a structured, low risk approach tailored to your organization&apos;s goals
        </p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-800">
        {/* Left Column */}
        <div className="space-y-16 md:pr-12">
          {steps.slice(0, 2).map((step) => (
            <div key={step.number}>
              <h3 className="text-4xl font-bold text-red-600 mb-4">{step.number}</h3>
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-16 md:pl-12 pt-16 md:pt-0">
          {steps.slice(2).map((step) => (
            <div key={step.number}>
              <h3 className="text-4xl font-bold text-red-600 mb-4">{step.number}</h3>
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Legacy to Cloud Migration",
    description:
      "We move your existing applications to secure cloud platforms like AWS, Azure, or GCP ensuring flexibility, scalability, and reduced infrastructure costs.",
  },
  {
    title: "Hybrid & Multi Cloud Integration",
    description:
      "Seamlessly integrate applications across on-premise and multiple cloud environments for better performance, control, and agility.",
  },
  {
    title: "App Rehosting & Replatforming",
    description:
      "We assess your applications and choose the right migration path whether lifting and shifting, upgrading platforms, or restructuring code for modern environments.",
    highlight: true,
  },
  {
    title: "Infrastructure Modernization",
    description:
      "We upgrade outdated systems to modern architectures that support automation, security, and scalability.",
  },
  {
    title: "Compliance & Security Enhancements",
    description:
      "Ensure your migrated applications meet industry-specific compliance standards with strong security measures and audit readiness.",
  },
  {
    title: "Post Migration Optimization & Support",
    description:
      "After migration, we fine-tune performance, monitor health, and offer continuous support to ensure long term success.",
  },
];

function MigrationServices() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Migration <br />
          <span className="text-indigo-400">Services</span> We Offer
        </h2>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-md p-6 transition-all duration-300 shadow-sm ${
              service.highlight
                ? "bg-gradient-to-br from-indigo-500 to-purple-600"
                : "bg-[#1e1e1e] hover:bg-[#2a2a2a]"
            }`}
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p
              className={`text-gray-300 text-sm leading-relaxed ${
                service.highlight ? "text-white/90" : ""
              }`}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";

const tools = [
  { name: "Databricks", logo: "/logos/databricks.png" },
  { name: "Cloudera", logo: "/logos/cloudera.png" },
  { name: "SAP", logo: "/logos/sap.png" },
  { name: "Opentext", logo: "/logos/opentext.png" },
  { name: "Dynatrace", logo: "/logos/dynatrace.png" },
  { name: "Aws", logo: "/logos/aws.png" },
];

 function ToolsSection() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Built <span className="text-indigo-400">With the Right</span> <br />
            <span className="text-indigo-400">Tools for</span> the Job
          </h2>

          <p className="text-gray-400 mb-8 text-lg">
            We use cutting-edge frameworks and platforms to ensure top performance.
          </p>

          <a
            href="#"
            className="inline-flex items-center text-white font-medium hover:text-indigo-400 transition group"
          >
            Get Started
            <span className="ml-2 transform group-hover:translate-x-1 transition">
              →
            </span>
          </a>
        </div>

        {/* Right Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] hover:bg-[#2a2a2a] transition rounded-lg p-6 flex flex-col items-center justify-center text-center"
            >
              {/* Placeholder for logo — replace with actual <img> */}
              <div className="w-14 h-14 mb-3 flex items-center justify-center">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="font-medium text-gray-200">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


const WhyChoose = () => {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Section - Image */}
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-blue-400">Choose</span> HPIT
          </h2>
          <p className="text-gray-300 mb-8 max-w-md">
            HPIT delivers secure, seamless, scalable migrations with expertise, precision, 
            and mission-first focus
          </p>
          <img 
            src={bgImg} 
            alt="Team collaboration" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right Section - Text Content */}
        <div>
          <p className="text-lg text-gray-300 mb-8">
            At HPIT, we combine expertise, precision, and innovation to deliver seamless 
            application migration solutions. Here’s what sets us apart
          </p>

          <div className="space-y-8">
            {/* Mission-Driven Approach */}
            <div>
              <h3 className="flex items-center text-xl font-semibold mb-2">
                <span className="text-red-500 text-2xl mr-2">•</span> Mission-Driven Approach
              </h3>
              <p className="text-gray-400">
                We rehost, re-platform, or refactor applications as needed ensuring compatibility, 
                performance, and scalability.
              </p>
            </div>

            {/* Proven Expertise */}
            <div>
              <h3 className="flex items-center text-xl font-semibold mb-2">
                <span className="text-red-500 text-2xl mr-2">•</span> Proven Expertise
              </h3>
              <p className="text-gray-400">
                Our team brings years of experience across government and private sectors, 
                managing complex migrations with confidence.
              </p>
            </div>

            {/* Secure & Compliant Solutions */}
            <div>
              <h3 className="flex items-center text-xl font-semibold mb-2">
                <span className="text-red-500 text-2xl mr-2">•</span> Secure & Compliant Solutions
              </h3>
              <p className="text-gray-400">
                We prioritize security and compliance at every stage, meeting the highest 
                industry and regulatory standards.
              </p>
            </div>

            {/* End-to-End Support */}
            <div>
              <h3 className="flex items-center text-xl font-semibold mb-2">
                <span className="text-red-500 text-2xl mr-2">•</span> End-to-End Support
              </h3>
              <p className="text-gray-400">
                From assessment to optimization, we provide full lifecycle support to ensure 
                your systems perform flawlessly post migration.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


const RelatedInsights = () => {
  const cards = [
    {
      title: 'CLOUD ADOPTION',
      description: 'Discover how businesses move to the cloud with minimal disruption.',
      image: bgImg,
    },
    {
      title: 'LEGACY MODERNIZATION',
      description: 'Transform outdated systems into agile, future-ready applications.',
      image: bgImg,
    },
    {
      title: 'COST EFFICIENCY',
      description: 'Learn strategies to reduce migration costs while boosting performance.',
      image: bgImg,
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-12">
          Related <span className="text-purple-400">Insights</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                <p className="text-gray-400 mb-6">{card.description}</p>
                <button className="flex items-center text-white font-semibold hover:text-red-500 transition">
                  Learn more
                  <span className="ml-2 w-6 h-6 flex items-center justify-center rounded-full border border-red-500 text-red-500 text-sm">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end space-x-4 mt-10">
          <button className="w-10 h-10 flex items-center justify-center border border-gray-500 text-gray-300 rounded-full hover:border-red-500 hover:text-red-500 transition">
            <span className="text-xl">←</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-500 text-gray-300 rounded-full hover:border-red-500 hover:text-red-500 transition">
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};


const Resources = () => {
  const cards = [
    {
      title: 'Migration Playbook',
      description:
        'Step-by-step guide covering assessment, planning, migration execution, and optimization strategies.',
      icon: '📘', // You can replace with a proper icon if needed
    },
    {
      title: 'Tools & Frameworks',
      description:
        'Access proven frameworks, checklists, and automation tools that simplify application migration.',
      icon: '🧰',
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-8">
            Resources
          </h2>
          <img
            src={bgImg}
            alt="Resource graphic"
            className="w-80 h-80 object-contain"
          />
        </div>

        {/* Right Section - Cards */}
        <div className="flex-1 grid sm:grid-cols-2 gap-8 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-900/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg mb-4 text-2xl">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-400 mb-6">{card.description}</p>
              <button className="flex items-center text-white font-semibold hover:text-red-500 transition">
                Learn more
                <span className="ml-2 w-6 h-6 flex items-center justify-center rounded-full border border-red-500 text-red-500 text-sm">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const JoinUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-black text-white px-8 md:px-16 py-16 relative overflow-hidden">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 z-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          Jo<span className="text-purple-400">in Us</span>
        </h2>
        <p className="text-lg font-semibold text-gray-200">
          Build the Future With Purpose
        </p>
        <p className="text-gray-400 leading-relaxed max-w-md">
          At HPIT, we’re a mission-driven team advancing innovation and national progress.
          We welcome passionate individuals experienced or new ready to grow, lead,
          and make a real impact through meaningful work.
        </p>

        {/* Email Form */}
        <div className="flex items-center gap-3">
          <input
            type="email"
            placeholder="Your Email Address"
            className="px-4 py-2 w-64 rounded-md bg-transparent border border-gray-600 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md font-semibold transition">
            Join
          </button>
        </div>

        {/* Connect Button */}
        <div className="pt-4">
          <button className="flex items-center gap-2 text-white hover:text-red-400 transition">
            <span>Connect HPIT</span>
            <span className="w-6 h-6 flex items-center justify-center rounded-full border border-red-500 text-red-500">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={bgImg}
          alt="Team working"
          className="rounded-md shadow-lg w-full max-w-md md:max-w-lg object-cover"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-t from-red-600/10 to-transparent blur-3xl"></div>
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-to-b from-purple-600/10 to-transparent blur-3xl"></div>
    </section>
  );
};


export default function P001() {
  return (
    <div className="space-y-3">
      <HeroMigration />
      <ModernizeSection/>
      <WhyMigrationMatters />
      <MigrationApproach/>
      <MigrationServices/>     
      <ToolsSection />
      <WhyChoose />
      <RelatedInsights/>
      <Resources/>
      <JoinUs />
    </div>
  );
}
