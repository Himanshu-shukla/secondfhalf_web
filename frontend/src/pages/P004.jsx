import bgImg from "../assets/4-1.jpg";
import bgImg1 from "../assets/4-2.jpg";
import bgImg2 from "../assets/4-3.jpg";
import bgImg3 from "../assets/4-4.jpg";
import bgImg4 from "../assets/4-5.jpg";
import bgImg5 from "../assets/4-6.jpg";
import bgImg6 from "../assets/4-7.jpg";
import bgImg7 from "../assets/4-8.png";
import bgImg8 from "../assets/1-10.png";

import aws from "../assets/aws.png";
import opentext from "../assets/opentext.png";
import sap from "../assets/sap.png";
import databricks from "../assets/databrick.png";
import cloudera from "../assets/cloudera.png";
import dynatrace from "../assets/dynatrace.png";

import { CheckCircleIcon } from "@heroicons/react/24/solid";

import { FaArrowRight, FaArrowLeft , FaChevronRight } from "react-icons/fa";


const ApplicationIntegration = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-12">
        <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
          <span className="block text-white/90 font-normal"
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
          >Application</span>
          <span className="block font-bold">Integration</span>
        </h1>
        <p className="mt-6 text-white/80 text-base md:text-lg leading-relaxed">
          We unify your apps, data, and systems into one seamless, intelligent ecosystem — fast, secure, and scalable.
        </p>
      </div>
    </section>
  );
};


const IntegrationSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          Integration That <br />
          Powers <span className="text-[#6366F1]">Real Efficiency</span>
        </h1>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          When your systems don’t talk to each other, productivity stalls,
          errors increase, and growth slows down. Integration bridges those gaps
          creating a smooth flow of data, automating manual processes, and
          aligning your entire tech stack to move faster, smarter, and together.
          It’s not just about efficiency — it’s about unlocking the full
          potential of your business operations.
        </p>

        <button className="flex items-center gap-2 mt-4 text-sm md:text-base font-medium px-5 py-2 rounded-full transition-colors duration-300">
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

      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src={bgImg1}
          alt="Integration Illustration"
          className="rounded-lg shadow-lg w-full object-cover"
        />
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

const IntegrationExpertise = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Our <span className="text-[#6366F1]">Integration</span> Expertise
        </h2>
        <p className="text-gray-400 text-base">
          Expertly Engineered to <br className="md:hidden" /> Connect It All
        </p>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch">
        {/* Card 1 */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#C026D3] text-[#C026D3] text-3xl">
              <i className="fas fa-cloud"></i>
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-3">API Integration</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Connect apps and services via secure, scalable APIs to streamline
            communication and automate processes.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white text-white text-3xl">
              <i className="fas fa-network-wired"></i>
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-3">
            Third-Party System Integration
          </h3>
          <p className="text-gray-100 text-sm leading-relaxed">
            Seamlessly integrate CRMs, ERPs, payment gateways, cloud platforms,
            and more — no data loss or disruption.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#C026D3] text-[#C026D3] text-3xl">
              <i className="fas fa-sync-alt"></i>
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-3">Data Synchronization</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Ensure consistent, real-time data flow across multiple platforms and
            business units with smart sync logic.
          </p>
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



const SyncAutomationSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      {/* Header */}
      <div className="text-left mb-12">
        <h2 className="text-4xl md:text-5xl font-bold leading-snug">
          Disconnected systems create friction.
          <br />
          <span className="text-gray-200">
            We help you sync, automate, and scale.
          </span>
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Cards */}
        <div className="flex flex-col gap-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold mb-2">
              Break Down Data Silos
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Integrate departments, tools, and platforms to create a unified,
              real-time view of your business operations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold mb-2">Streamline Workflows</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Reduce manual effort by automating routine tasks and creating
              seamless interactions between systems.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src={bgImg2}
            alt="Automation Visualization"
            className="rounded-lg shadow-2xl w-full h-full max-w-xs md:max-w-sm object-cover"
            style={{ height: "325px" }}
          />
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold mb-2">
              Ensure Real-Time Accuracy
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Keep your data consistent, synchronized, and up-to-date across all
              applications with minimal lag or loss.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold mb-2">Build for the Future</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Flexible, scalable integration architecture that adapts to new
              tools, technologies, and business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};



const IntegrationUseCases = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 relative">
      {/* Top-right Navigation Arrows */}
      <div className="absolute top-10 right-10 flex gap-3">
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all">
          <FaArrowLeft size={14} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all">
          <FaArrowRight size={14} />
        </button>
      </div>

      {/* Heading */}
      <div className="text-left mb-12">
        <h2 className="text-4xl md:text-5xl font-bold leading-snug">
          Real-World <span className="text-[#6366F1]">Integration</span>
          <br />
          Use Cases <span className="text-[#6366F1]">We Deliver</span>
        </h2>
        <p className="text-gray-400 mt-4 text-base md:text-lg">
          From business apps to devices, we seamlessly connect the tools that
          drive your operations.
        </p>
      </div>

      {/* Use Case Grid */}
      <div className="bg-transparent border border-gray-700 rounded-xl p-10 max-w-6xl mx-auto backdrop-blur-sm">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
    {/* 1 */}
    <div className="border-r border-b border-gray-700 pr-6 pb-6">
      <h3 className="font-semibold text-lg mb-2">
        Discovery & CRM & ERP Synchronization
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Unify customer and resource data across platforms.
      </p>
    </div>

    {/* 2 */}
    <div className="border-r border-b border-gray-700 pr-6 pb-6">
      <h3 className="font-semibold text-lg mb-2">
        Payment Gateway Integration
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Secure and seamless transactions across apps and platforms.
      </p>
    </div>

    {/* 3 */}
    <div className="border-b border-gray-700 pr-6 pb-6">
      <h3 className="font-semibold text-lg mb-2">
        Cross-Platform User Authentication
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Enable smooth logins and identity management across multiple
        applications.
      </p>
    </div>

    {/* 4 */}
    <div className="border-r pr-6 pt-6">
      <h3 className="font-semibold text-lg mb-2">
        Legacy + SaaS System Linking
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Bridge old systems with new-age cloud apps without disruption.
      </p>
    </div>

    {/* 5 */}
    <div className="border-r pr-6 pt-6">
      <h3 className="font-semibold text-lg mb-2">
        Centralized Analytics Dashboards
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Bring data from various sources into one powerful dashboard view.
      </p>
    </div>

    {/* 6 */}
    <div className="pt-6">
      <h3 className="font-semibold text-lg mb-2">
        IoT & Device Data Merging
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Integrate real-time data from devices, sensors, and smart tech.
      </p>
    </div>
  </div>
</div>

    </section>
  );
};

const HpitIntegrationSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
  {/* Left Column (Steps 1–3) */}
  <div>
    <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
      Integration Done Right:
      <br /> <span className="text-[#6366F1]">The HPIT Way</span>
    </h2>
    <p className="text-gray-400 mb-10 text-base md:text-lg">
      Secure, seamless, and scalable — our process ensures nothing breaks
      as everything connects.
    </p>

    <div className="space-y-8">
      {/* Step 1 */}
      <div className="flex items-start relative">
        <div className="flex flex-col items-center mr-5">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-red-600 text-red-600 font-semibold">
            1
          </div>
          <div className="h-16 w-px bg-gray-700"></div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">
            Requirement Analysis
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Understand your systems, gaps, and business goals.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex items-start relative">
        <div className="flex flex-col items-center mr-5">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-red-600 text-red-600 font-semibold">
            2
          </div>
          <div className="h-16 w-px bg-gray-700"></div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">
            Integration Blueprint
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Design secure APIs, connectors, and flow architecture.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex items-start relative">
        <div className="flex flex-col items-center mr-5">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-red-600 text-red-600 font-semibold">
            3
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">
            Development & Testing
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Build, test, and validate every integration point.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Column */}
  <div className="flex flex-col items-center md:items-end space-y-10">
    {/* Top Image */}
    <img
      src={bgImg3}
      alt="Integration process visual"
      className="rounded-lg shadow-2xl w-full max-w-md md:max-w-lg object-cover"
    />

    {/* Steps 4 & 5 */}
    <div className="w-full max-w-md md:max-w-lg space-y-8">
      {/* Step 4 */}
      <div className="flex items-start relative">
        <div className="flex flex-col items-center mr-5">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-red-600 text-red-600 font-semibold">
            4
          </div>
          <div className="h-16 w-px bg-gray-700"></div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">
            Deployment & Monitoring
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Deploy with alerts, logs, and performance dashboards.
          </p>
        </div>
      </div>

      {/* Step 5 */}
      <div className="flex items-start relative">
        <div className="flex flex-col items-center mr-5">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-red-600 text-red-600 font-semibold">
            5
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">Ongoing Support</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We stay with you to troubleshoot, scale, or update.
          </p>
        </div>
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
      title: 'CLOUD ADOPTION',
      description: 'Discover how businesses move to the cloud with minimal disruption.',
      image: bgImg4,
    },
    {
      title: 'LEGACY MODERNIZATION',
      description: 'Transform outdated systems into agile, future-ready applications.',
      image: bgImg5,
    },
    {
      title: 'COST EFFICIENCY',
      description: 'Learn strategies to reduce migration costs while boosting performance.',
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
            src={bgImg7}
            alt="Resource graphic"
            className="w-120 h-120 object-contain"
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




export default function P004() {
  return (
    <div className="space-y-3">
     <ApplicationIntegration/>
     <IntegrationSection/>
     <SyncAutomationSection/>
     <IntegrationExpertise/>
     <IntegrationUseCases/>
     <HpitIntegrationSection/>
      <ToolsSection />
      <RelatedInsights/>
      <Resources/>
      <JoinUs/>
    </div>
  );
}
