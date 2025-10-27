import bgImg from "../assets/1_1.png";
import { CheckCircleIcon } from "@heroicons/react/24/solid";


const ApplicationDevelopment = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c44]/90 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-xl px-8 md:px-16">
        <h2 className="text-4xl md:text-5xl font-semibold">
          <span className="text-[#6A74FF]">Application</span>{' '}
          <span className="font-bold">Development</span>
        </h2>

        <p className="mt-6 text-sm md:text-base text-gray-200 leading-relaxed">
          From concept to code, we develop secure, scalable,
          and high performance applications tailored to your
          business goals.
        </p>
      </div>
    </div>
  );
};

// DigitalTransformation.jsx

const DigitalTransformation = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Built Applications to Drive <br />
            <span className="text-white">Digital Transformation</span>
          </h1>

          <div className="mb-8">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              We Develop Apps That Power Every Industry
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We design and develop custom applications that modernize
              your business, streamline operations, and enhance customer
              engagement. Whether it’s web, mobile, or cross-platform, our
              solutions are built for speed, security, and long-term success.
            </p>
          </div>

          <button className="group inline-flex items-center text-sm md:text-base font-medium text-white relative">
            <span>Get Started</span>
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
            <span className="absolute -inset-1 rounded-full border border-red-500 opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"></span>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={bgImg}
            alt="Digital Transformation"
            className="rounded-lg w-full max-w-md md:max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

// SmartSolutions.jsx
const SmartSolutions = () => {
  const sectors = [
    { title: 'Healthcare', img: bgImg },
    { title: 'Enterprise', img: bgImg },
    { title: 'Bank and Financial', img: bgImg },
    { title: 'EdTech', img: bgImg },
    { title: 'Manufacturing', img: bgImg },
    { title: 'E-commerce', img: bgImg },
    { title: 'Government', img: bgImg },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Building <span className="text-indigo-400">Smart Solutions</span> That Serve
          <br />
          Businesses <span className="text-indigo-400">Across All Sectors</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          We build secure, scalable applications designed to meet complex business needs
          and drive lasting impact.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {sectors.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg border border-transparent hover:border-blue-500 transition-all duration-300"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-between p-4">
              <div></div>
              <div className="flex items-center justify-between">
                <h3 className="text-white text-sm md:text-base font-semibold">
                  {item.title}
                </h3>
                <button className="border border-red-500 rounded-full p-1.5 text-xs text-white group-hover:bg-red-500 transition-colors duration-300">
                  →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const AgileJourney = () => {
  const steps = [
    {
      icon: "🌀",
      title: "Discovery & Planning",
      desc: "We understand your goals, gather requirements, and define a clear roadmap to align business needs with technical execution.",
    },
    {
      icon: "📱",
      title: "UI/UX Design",
      desc: "We create wireframes and intuitive designs that prioritize user experience, visual consistency, and brand identity.",
    },
    {
      icon: "🧩",
      title: "Architecture & Tech Stack",
      desc: "We select scalable technologies and architecture that support performance, security, and future growth of your application.",
    },
    {
      icon: "💻",
      title: "Agile Development",
      desc: "Using sprint-based development, we build features iteratively with regular updates, feedback, and collaboration.",
    },
    {
      icon: "🧪",
      title: "Testing & QA",
      desc: "We test across multiple devices and scenarios to ensure quality, speed, and reliability before launch.",
    },
    {
      icon: "🚀",
      title: "Launch & Support",
      desc: "We ensure a smooth go-live and provide ongoing support, updates, and performance monitoring post-launch.",
    },
  ];

  return (
    <section
      className="relative text-white py-20 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our <span className="text-indigo-400">Agile</span> Development{" "}
          <span className="text-indigo-400">Journey</span>
        </h2>
        <p className="text-gray-300 text-lg mb-12">
          A Proven, Collaborative Process From Idea to Launch and Beyond
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 border border-gray-700 rounded-lg bg-gray-900/40 hover:bg-gray-800/60 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ToolsSection.jsx
const ToolsSection = () => {
  const tools = [
    {
      name: "Databricks",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Databricks_Logo.png",
    },
    {
      name: "Cloudera",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Cloudera_logo.svg",
    },
    {
      name: "SAP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
    },
    {
      name: "Opentext",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/OpenText_logo.svg",
    },
    {
      name: "Dynatrace",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/72/Dynatrace_logo.svg",
    },
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
  ];

  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Built With the{" "}
            <span className="text-indigo-400">Right Tools</span> for the Job
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            We use cutting-edge frameworks and platforms to ensure top
            performance.
          </p>

          <button className="flex items-center justify-center gap-2 bg-transparent border border-indigo-400 hover:bg-indigo-500 hover:border-indigo-500 text-white py-2 px-6 rounded-full text-sm font-medium transition-all duration-300">
            Get Started <span className="text-lg">→</span>
          </button>
        </div>

        {/* Right Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="w-40 h-40 bg-gray-900/60 border border-gray-700 rounded-xl flex flex-col items-center justify-center hover:bg-gray-800/70 transition-all duration-300"
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="h-10 object-contain mb-3"
              />
              <p className="text-gray-200 text-sm font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CaseStudiesSection.jsx
const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "SmartPay",
      desc: "We built a secure payment app enabling faster, safer, and more reliable transactions for global users.",
      img: "https://images.unsplash.com/photo-1556742043-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "EduConnect",
      desc: "Designed a learning platform that delivers interactive courses, real-time assessments, and smooth student-teacher engagement.",
      img: "https://images.unsplash.com/photo-1584697964199-42d6b1a1e3f3?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "HealthTrack",
      desc: "Created a healthcare app that helps users monitor health stats, book appointments, and access reports seamlessly.",
      img: "https://images.unsplash.com/photo-1601597111074-66c9b2bfc3d3?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          See What <span className="text-indigo-400">We’ve</span> Achieved{" "}
          <span className="text-indigo-400">Together</span>
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Discover how our solutions solved real problems and delivered measurable business outcomes.
        </p>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="bg-gray-900/60 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-700/40 transition-all duration-300"
            >
              <img
                src={study.img}
                alt={study.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{study.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-6 mt-12">
          <button className="w-10 h-10 rounded-full border border-indigo-400 flex items-center justify-center hover:bg-indigo-500 hover:border-indigo-500 transition-all duration-300">
            <span className="text-lg">⟵</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-indigo-400 flex items-center justify-center hover:bg-indigo-500 hover:border-indigo-500 transition-all duration-300">
            <span className="text-lg">⟶</span>
          </button>
        </div>
      </div>
    </section>
  );
};

const RelatedInsights = () => {
  const insights = [
    {
      title: "AGILE METHODS",
      description:
        "Discover how agile practices speed up development and reduce risks.",
      img: bgImg, // use your imported image
    },
    {
      title: "CLOUD-NATIVE APPS",
      description:
        "Learn why modern apps thrive on cloud-native architecture.",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "USER-CENTRIC DESIGN",
      description:
        "See how focusing on users drives better adoption and success.",
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        Related <span className="text-purple-400">Insights</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {insights.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col"
          >
            <div className="h-56 w-full overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
              </div>
              <button className="flex items-center text-white font-semibold group">
                <span className="text-sm mr-2">Learn more</span>
                <span className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded-full group-hover:border-red-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 group-hover:text-red-500 transition-colors"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-end gap-4 mt-10">
        <button className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:border-red-500 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:border-red-500 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};


const Resources = () => {
  const resources = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-8 h-8 text-gray-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "FAQs & Knowledge Base",
      description:
        "Common migration challenges explained—covering compatibility, downtime reduction, security, and compliance.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-8 h-8 text-gray-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.25 0H4.5m15 0v9a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5v-9m15 0H4.5"
          />
        </svg>
      ),
      title: "Webinars & Tutorials",
      description:
        "Expert-led sessions and video guides to help teams adopt migration best practices.",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Section - Image and Title */}
      <div className="flex flex-col items-start space-y-6 md:w-1/3">
        <h2 className="text-3xl md:text-4xl font-semibold">
          <span className="text-white">Resources</span>
        </h2>
        <img
          src={bgImg}
          alt="Resources graphic"
          className="w-64 h-64 object-contain drop-shadow-2xl"
        />
      </div>

      {/* Right Section - Cards */}
      <div className="grid md:grid-cols-2 gap-8 md:w-2/3">
        {resources.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-8 shadow-lg flex flex-col justify-between hover:scale-[1.02] transition-transform"
          >
            <div className="mb-6">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-300 text-sm mb-6">{item.description}</p>

            <button className="flex items-center text-white font-medium group">
              <span className="text-sm mr-2">Learn more</span>
              <span className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded-full group-hover:border-red-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 group-hover:text-red-500 transition-colors"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
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

export default function P002() {
  return (
    <div className="space-y-3">
      <ApplicationDevelopment/>
      <DigitalTransformation/>
      <SmartSolutions/>
      <AgileJourney/>
      <ToolsSection/>
      <CaseStudiesSection/>
      <RelatedInsights/>
      <Resources/>
      <JoinUs/>
    </div>
  );
}
