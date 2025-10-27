import bgImg from "../assets/9-1.jpg";
import bgImg1 from "../assets/9-2.jpg";
import bgImg2 from "../assets/9-3.jpg";
import bgImg3 from "../assets/9-4.jpg";
import bgImg4 from "../assets/9-5.jpg";
import bgImg5 from "../assets/9-6.jpg";
import bgImg6 from "../assets/9-7.jpg";
import bgImg7 from "../assets/9-8.png";
import bgImg8 from "../assets/1-10.png";
import aws from "../assets/aws.png";
import opentext from "../assets/opentext.png";
import sap from "../assets/SAP.png";
import databricks from "../assets/databrick.png";
import cloudera from "../assets/cloudera.png";
import dynatrace from "../assets/dynatrace.png";
import bgImg12 from "../assets/1-10.png";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import { FaArrowRight, FaArrowLeft , FaChevronRight } from "react-icons/fa";
import { FaCog, FaDollarSign, FaChartLine } from "react-icons/fa";

import {
  FaServer,
  FaCloud,
  FaShieldAlt,  
  FaUndo,
  FaCogs,
  FaNetworkWired,
} from "react-icons/fa";

const CloudOperationSection = () => {
  return (
    <section
      className="relative w-full h-[90vh] flex items-center justify-start bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-16 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">
            Cloud
          </span>
          <br />
          Transformation
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-md">
          Modernize your cloud for speed, scale, and agility.
        </p>
      </div>
    </section>
  );
};

const ModernizationServices = () => {
  const services = [
    {
      title: "Assessment & Strategy",
      desc: "We analyze your current environment and define a transformation roadmap.",
    },
    {
      title: "Architecture Design",
      desc: "Build a secure, and cloud native architecture tailored to your goals.",
    },
    {
      title: "Execution & Migration",
      desc: "Move workloads with minimal disruption and complete visibility.",
    },
    {
      title: "Optimization & Enablement",
      desc: "Post migration tuning and team training for long term efficiency.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* === Left Section === */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Services Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Modernization
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
            We help you shift from legacy systems to modern, cloud-native
            architectures with speed, precision, and minimal disruption.
          </p>
        </div>

        {/* === Right Services Grid === */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-700">
            {/* Top Row */}
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                {services[0].title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {services[0].desc}
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                {services[1].title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {services[1].desc}
              </p>
            </div>

            {/* Bottom Row */}
            <div className="p-6 border-t border-gray-700 sm:border-t-0 sm:border-l">
              <h3 className="font-semibold text-lg mb-2">
                {services[2].title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {services[2].desc}
              </p>
            </div>
            <div className="p-6 border-t border-gray-700 sm:border-t-0 sm:border-l">
              <h3 className="font-semibold text-lg mb-2">
                {services[3].title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {services[3].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const CloudConfidenceSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-20">
        {/* Left Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            Make Your Cloud Future-Ready
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            HPIT’s Cloud Transformation services help businesses modernize their cloud infrastructure, streamline operations, and adopt next-gen capabilities. We ensure your cloud evolves to meet changing business needs.
          </p>

          <button className="flex items-center gap-2 text-sm md:text-base font-medium px-5 py-2 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300">
            Get Started 
            <span
    className="relative flex items-center justify-center w-10 h-10 right-5"
  >
    <span
      className="absolute inset-0 rounded-full border-[2px] border-red-600 border-r-transparent rotate-180 group-hover:rotate-[405deg] transition-transform duration-500 ease-in-out"
    ></span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="white"
      className="w-5 h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
  </span>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={bgImg1}
            alt="Cloud Operations"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

const CloudTransformation = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug"
        style={{ width: "50%"}}
      >
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              HPIT
            </span>{" "}
            for Cloud{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Transformation
            </span>
          </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* === Left Section: Image === */}
        <div className="relative flex justify-center">
          <img
            src={bgImg2}
            alt="Team Collaboration"
            className="rounded-lg shadow-2xl w-full max-w-md md:max-w-lg object-cover"
            style={{
              height: "400px",
            }}
          />
          {/* Optional subtle grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] rounded-lg"></div>
        </div>

        {/* === Right Section: Text & Bullets === */}
        <div className="text-left">

          <p className="text-gray-400 mb-8 max-w-xl leading-relaxed">
            HPIT blends cloud expertise with business focus to deliver smooth,
            secure, and future-ready transformations.
          </p>

          {/* === Bullet List === */}
          <ul className="space-y-6">
  {[
    {
      title: "Cloud-Native by Design",
      desc: "We specialize in re-architecting for AWS, Azure, and GCP.",
    },
    {
      title: "End-to-End Delivery",
      desc: "From planning to execution, we own the entire transformation journey.",
    },
    {
      title: "Zero Downtime Approach",
      desc: "We prioritize uptime and continuity throughout the migration process.",
    },
    {
      title: "Cross-Industry Expertise",
      desc: "Proven success across finance, healthcare, SaaS, and more.",
    },
  ].map((item, idx) => (
    <li key={idx} className="flex items-start">
      {/* Hollow red circle bullet */}
      <span className="w-3 h-3 mr-4 mt-2 rounded-full border-2 border-red-600 flex-shrink-0"></span>

      <div>
        <h4 className="font-semibold text-lg">{item.title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </li>
  ))}
</ul>
        </div>
      </div>
    </section>
  );
};

const ResultsSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* === LEFT SECTION === */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
            Results That Speak for{" "}
              Themselves
          </h2>

          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
            Our clients move from complex, aging systems to agile, cloud-native
            environments—setting the stage for rapid growth and innovation.
          </p>

          <button className="flex items-center gap-3 text-white font-medium group">
            Get Started
            <span
    className="relative flex items-center justify-center w-10 h-10 right-5"
  >
    <span
      className="absolute inset-0 rounded-full border-[2px] border-red-600 border-r-transparent rotate-180 group-hover:rotate-[405deg] transition-transform duration-500 ease-in-out"
    ></span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="white"
      className="w-5 h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
  </span>
          </button>
        </div>

        {/* === RIGHT SECTION === */}
        <div className="flex flex-col items-center md:items-end space-y-6">
          {/* Image */}
          <img
            src={bgImg3}
            alt="Business Results"
            className="rounded-lg shadow-2xl w-full max-w-md object-cover"
          />

          {/* Stats Row */}
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-xl px-6 py-4 flex flex-col sm:flex-row justify-between w-full max-w-md text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-700">
            <div className="flex-1 p-4">
              <p className="text-2xl font-bold"
              style={{
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: "36px",
    lineHeight: "1",
    marginBottom: "8px",
    letterSpacing: "0.01em",
    color: "transparent",
    WebkitTextStroke: "2px #ECEDEE",
    WebkitTextFillColor: "transparent",
  }}
              >50%</p>
              <p className="text-gray-400 text-sm">
                First-Contact Resolution Rate
              </p>
            </div>
            <div className="flex-1 p-4">
              <p className="text-2xl font-bold"
               style={{
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: "36px",
    lineHeight: "1",
    marginBottom: "8px",
    letterSpacing: "0.01em",
    color: "transparent",
    WebkitTextStroke: "2px #ECEDEE",
    WebkitTextFillColor: "transparent",
  }}
              >80%</p>
              <p className="text-gray-400 text-sm">lower legacy costs</p>
            </div>
            <div className="flex-1 p-4">
              <p className="text-lg font-medium">AI-ready modern</p>
              <p className="text-gray-400 text-sm">architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const tools = [
  { name: "Databricks", logo: `${databricks}` },
  { name: "Cloudera", logo: `${cloudera}` },
  { name: "SAP", logo: `${sap}` },
  { name: "Opentext", logo: `${opentext}` },
  { name: "Dynatrace", logo: `${dynatrace}` },
  { name: "Aws", logo: `${aws}` },
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

          <button
  className="flex items-center gap-3 text-white text-lg font-medium relative group"
  style={{
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "transparent",
  }}
>
  <span>Get Started</span>
  <span
    className="relative flex items-center justify-center w-10 h-10 right-5"
  >
    <span
      className="absolute inset-0 rounded-full border-[2px] border-red-600 border-r-transparent rotate-180 group-hover:rotate-[405deg] transition-transform duration-500 ease-in-out"
    ></span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="white"
      className="w-5 h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
  </span>
</button>
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


const RelatedInsights = () => {
  const cards = [
    {
      title: 'DIGITAL MODERNIZATION',
      description: 'See how cloud adoption drives innovation and business agility.',
      image: bgImg4,
    },
    {
      title: 'LEGACY UPLIFT',
      description: 'Transform outdated systems into scalable, cloud-native solutions.',
      image: bgImg5,
    },
    {
      title: 'FUTURE-READY CLOUD',
      description: 'Learn strategies to build resilient, growth-focused cloud environments.',
      image: bgImg6,
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
                  <span
    className="relative flex items-center justify-center w-10 h-10 right-1"
  >
    <span
      className="absolute inset-0 rounded-full border-[2px] border-red-600 border-r-transparent rotate-180 group-hover:rotate-[405deg] transition-transform duration-500 ease-in-out"
    ></span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="white"
      className="w-5 h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
       <div className="flex justify-end space-x-4 mt-10">
          <button
    className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-black transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  {/* Right Arrow */}
  <button
    className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-black transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
        </div>
      </div>
    </section>
  );
};


const Resources = () => {
  const cards = [
    {
      title: 'Legacy Modernization',
      description:
        'Transforming legacy systems into cloud-native applications enhances flexibility, reduces technical debt, and improves long-term scalability.',
      icon: '📘', // You can replace with a proper icon if needed
    },
    {
      title: 'Data-Driven Cloud Solutions',
      description:
        'Integrating AI, machine learning, and advanced analytics in the cloud drives smarter decision-making, automation, and long-term business growth.',
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
            src={bgImg7}
            alt="Resource graphic"
            className="w-80 h-80 object-contain"
          />
        </div>

        {/* Right Section - Cards */}
        <div className="flex-1 grid sm:grid-cols-2 gap-8 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-900/80 rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg mb-4 text-2xl">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-400 mb-6">{card.description}</p>
              <button className="flex items-center text-white font-semibold hover:text-red-500 transition">
                Learn more
                <span
    className="relative flex items-center justify-center w-10 h-10 right-1"
  >
    <span
      className="absolute inset-0 rounded-full border-[2px] border-red-600 border-r-transparent rotate-180 group-hover:rotate-[405deg] transition-transform duration-500 ease-in-out"
    ></span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="white"
      className="w-5 h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
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
             <span
    className="relative flex items-center justify-center w-10 h-10 right-1"
  >
    <span
      className="absolute inset-0 rounded-full border-[2px] border-red-600 border-r-transparent rotate-180 group-hover:rotate-[405deg] transition-transform duration-500 ease-in-out"
    ></span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="white"
      className="w-5 h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
  </span>
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={bgImg12}
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

export default function P009() {
  return (
    <div className="space-y-3">
     <CloudOperationSection/>
     <CloudConfidenceSection/>
     <ModernizationServices/>
     <CloudTransformation/>
     <ResultsSection/>
      <ToolsSection />
     
      <RelatedInsights/>
      <Resources/>
      <JoinUs/>
    </div>
  );
}
