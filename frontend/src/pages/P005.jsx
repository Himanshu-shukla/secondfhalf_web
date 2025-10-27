import bgImg from "../assets/5-1.jpg";
import bgImg1 from "../assets/5-2.jpg";
import bgImg2 from "../assets/5-3.jpg";
import bgImg3 from "../assets/5-4.jpg";
import bgImg4 from "../assets/5-5.jpg";
import bgImg5 from "../assets/5-6.jpg";
import bgImg6 from "../assets/5-7.jpg";
import bgImg7 from "../assets/5-8.jpg";
import bgImg8 from "../assets/5-9.png";
import aws from "../assets/aws.png";
import opentext from "../assets/opentext.png";
import sap from "../assets/sap.png";
import databricks from "../assets/databrick.png";
import cloudera from "../assets/cloudera.png";
import dynatrace from "../assets/dynatrace.png";
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300"
          style={{
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: "56px",
    lineHeight: "1",
    letterSpacing: "0.01em",
    color: "transparent",
    WebkitTextStroke: "2px #ECEDEE",
    WebkitTextFillColor: "transparent",
  }}
          >
            Cloud
          </span>
          <br />
          Operation
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-md">
          Ensure performance, security, and resilience in every cloud
          environment.
        </p>
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

const CloudConfidenceSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-20">
        {/* Left Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            Operate with Confidence <br />
            in the <span className="text-[#6366F1]">Cloud.</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            HPIT delivers end-to-end cloud operations management to optimize
            performance, ensure compliance, and drive cost efficiency across
            multi-cloud and hybrid environments.
          </p>

          <button className="flex items-center gap-2 text-sm md:text-base font-medium px-5 py-2 rounded-full hover:text-white transition-colors duration-300">
            Get Started 
            
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

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={bgImg1}
            alt="Cloud Operations"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>

      {/* Divider Section */}
      <div className="text-center mb-14">
        <h3 className="text-3xl md:text-4xl font-bold leading-snug">
          Why Cloud Operations Matter <br />
          <span className="text-[#6366F1]">More Than Ever</span>
        </h3>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {/* 1 */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl text-[#818CF8] mb-4 flex justify-center">
            <FaCog />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Increasing complexity of cloud native systems requires continuous
            monitoring and optimization.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl text-[#C026D3] mb-4 flex justify-center">
            <FaShieldAlt />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Businesses need always-on infrastructure without compromising on
            security or compliance.
          </p>
        </div>

        {/* 3 */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl text-[#818CF8] mb-4 flex justify-center">
            <FaDollarSign />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Cost inefficiencies and resource sprawl are common without proper
            governance.
          </p>
        </div>

        {/* 4 */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl text-[#C026D3] mb-4 flex justify-center">
            <FaChartLine />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Cloud operations are foundational for digital agility, uptime, and
            scalability.
          </p>
        </div>
      </div>
    </section>
  );
};

const CloudOperationsServices = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      {/* Heading */}
      <div className="text-left mb-12">
        <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
          Our <span className="text-[#6366F1]">Cloud Operations</span> Services
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl">
          Modernizing every layer from interface to infrastructure.
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-800 hover:border-[#6366F1]/40">
          <div className="text-2xl text-[#6366F1] mb-4">
            <FaServer />
          </div>
          <h3 className="text-lg font-semibold mb-2">
            24/7 Monitoring & Management
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Proactive performance tracking, real-time alerts, and issue
            remediation.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-800 hover:border-[#6366F1]/40">
          <div className="text-2xl text-[#818CF8] mb-4">
            <FaCloud />
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Cloud Cost Optimization
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Rightsizing resources, avoiding wastage, and maximizing ROI on cloud
            investments.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-800 hover:border-[#6366F1]/40">
          <div className="text-2xl text-[#C026D3] mb-4">
            <FaShieldAlt />
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Security & Compliance Management
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Automated policies, risk mitigation, and adherence to regulatory
            frameworks.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-800 hover:border-[#6366F1]/40">
          <div className="text-2xl text-[#818CF8] mb-4">
            <FaUndo />
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Backup & Disaster Recovery
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Resilient architecture with automated backup, recovery, and
            failover mechanisms.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-800 hover:border-[#6366F1]/40">
          <div className="text-2xl text-[#C026D3] mb-4">
            <FaCogs />
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Infrastructure Automation
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            IaC (Infrastructure as Code), CI/CD pipelines, and auto-scaling
            solutions.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-800 hover:border-[#6366F1]/40">
          <div className="text-2xl text-[#6366F1] mb-4">
            <FaNetworkWired />
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Multi-cloud & Hybrid Cloud Support
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Unified operations across AWS, Azure, Google Cloud, and on-prem
            systems.
          </p>
        </div>
      </div>
    </section>
  );
};

const DeliveredImpactSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 relative">
      {/* Header */}
      <div className="text-left mb-12">
        <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-3">
          How <span className="text-[#6366F1]">We Delivered</span> Impact
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl">
          See how leading companies transformed their cloud operations with
          HPIT.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
          <img
            src={bgImg2}
            alt="FinTech Corp"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">FinTech Corp</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Reduced cloud waste and improved cost efficiency through proactive
              monitoring and resource optimization.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
          <img
            src={bgImg3}
            alt="ShopSphere"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">ShopSphere</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enabled seamless customer experience with high-availability
              architecture and auto-scaling setup.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
          <img
            src={bgImg4}
            alt="DevWorks"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">DevWorks</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Accelerated deployments using Infrastructure as Code and CI/CD
              automation across cloud platforms.
            </p>
          </div>
        </div>
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
    </section>
  );
};


const RelatedInsights = () => {
  const cards = [
    {
      title: 'CLOUD ADOPTION',
      description: 'Discover how businesses move to the cloud with minimal disruption.',
      image: bgImg5,
    },
    {
      title: 'LEGACY MODERNIZATION',
      description: 'Transform outdated systems into agile, future-ready applications.',
      image: bgImg6,
    },
    {
      title: 'COST EFFICIENCY',
      description: 'Learn strategies to reduce migration costs while boosting performance.',
      image: bgImg7,
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
    className="relative flex items-center justify-center w-10 h-10 right-2"
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
            src={bgImg8}
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
                 <span
    className="relative flex items-center justify-center w-10 h-10 right-2"
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
    className="relative flex items-center justify-center w-10 h-10 right-3"
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
          src={bgImg8}
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


export default function P005() {
  return (
    <div className="space-y-3">
     <CloudOperationSection/>
     <CloudConfidenceSection/>
     <CloudOperationsServices/>
      <ToolsSection />
     <DeliveredImpactSection/>
     
      <RelatedInsights/>
      <Resources/>
      <JoinUs/>
    </div>
  );
}
