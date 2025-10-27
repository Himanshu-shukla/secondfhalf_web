import { useState } from 'react'
import bgImg from "../assets/6-1.jpg";
import bgImg1 from "../assets/6-2.jpg";
import bgImg2 from "../assets/6-3.jpg";
import bgImg3 from "../assets/6-4.jpg";
import bgImg4 from "../assets/6-5.jpg";
import bgImg5 from "../assets/6-6.jpg";
import bgImg6 from "../assets/6-7.jpg";
import bgImg7 from "../assets/6-8.png";
import bgImg8 from "../assets/1-10.png";
import aws from "../assets/aws.png";
import opentext from "../assets/opentext.png";
import sap from "../assets/SAP.png";
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

const ToolsSection = () => {
  const tools = [
    {
      name: "Databricks",
      logo: `${databricks}`,
    },
    {
      name: "Cloudera",
      logo: `${cloudera}`,
    },
    {
      name: "SAP",
      logo: `${sap}`,
    },
    {
      name: "Opentext",
      logo: `${opentext}`,
    },
    {
      name: "Dynatrace",
      logo: `${dynatrace}`,
    },
    {
      name: "AWS",
      logo: `${aws}`,
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

          <button className="flex items-center justify-center gap-2 bg-transparent hover:border-indigo-500 text-white py-2 px-6 rounded-full text-sm font-medium transition-all duration-300">
            Get Started 
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

const CloudMigration = () => {
  const features = [
    {
      num: "01",
      title: "Eliminating technical debt and legacy bottlenecks",
    },
    {
      num: "02",
      title: "Reducing infrastructure and maintenance costs",
    },
    {
      num: "03",
      title: "Enabling on demand scalability and automation",
    },
    {
      num: "04",
      title: "Enhancing security, compliance, and data resilience",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Cloud Migration
            </span>{" "}
            Matters
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl">
            Modern business demands agility, speed, and reliability and legacy
            infrastructure just can’t keep up. Cloud migration is no longer
            optional. It’s the foundation for digital transformation.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-800 rounded-lg divide-x divide-y sm:divide-y-0">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 flex flex-col items-start justify-start border-gray-800"
            >
              <span
                className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text"
                style={{
                  WebkitTextStroke: "1.5px #FFFFFF",
                  color: "transparent",
                }}
              >
                {item.num}
              </span>
              <p className="text-gray-200 font-medium text-lg leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CloudMigrationServices = () => {
  const services = [
    {
      title: "Cloud Readiness Assessment",
      description:
        "We assess your infrastructure, applications, security posture, and performance metrics to build a risk free migration roadmap.",
    },
    {
      title: "Migration Strategy & Planning",
      description:
        "We define the right approach — lift & shift, replatforming, refactoring — based on cost, complexity, and business impact.",
    },
    {
      title: "Application & Data Migration",
      description:
        "Seamlessly move applications, databases, workloads, and environments to AWS, Azure, GCP, or hybrid setups with near zero downtime.",
      highlight: true,
    },
    {
      title: "Hybrid & Multi cloud Support",
      description:
        "Ensure secure, connected, and performant cloud environments across providers or with on-prem systems.",
    },
    {
      title: "Post Migration Optimization",
      description:
        "We tune your cloud environment for performance, automate scaling, and implement cost-control mechanisms.",
    },
    {
      title: "Legacy System Modernization",
      description:
        "Modernize outdated, monolithic systems during migration by re-architecting them for the cloud enabling better performance, scalability, and maintainability.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-left">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Cloud Migration
          </span>{" "}
          Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border border-gray-800 shadow-md transition-all duration-300 hover:scale-[1.02] ${
                service.highlight
                  ? "bg-gradient-to-br from-indigo-500 to-purple-600"
                  : "bg-[#141414] hover:bg-[#1f1f1f]"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-3 ${
                  service.highlight ? "text-white" : "text-gray-100"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  service.highlight ? "text-white/90" : "text-gray-400"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MigrationApproaches = () => {
  const approaches = [
    {
      title: "Lift and Shift (Rehosting)",
      description: "Move apps as-is for speed and minimal change.",
    },
    {
      title: "Replatforming",
      description: "Adapt existing apps to better leverage cloud capabilities.",
    },
    {
      title: "Refactoring / Re-architecting",
      description:
        "Redesign apps to be cloud-native for scalability, flexibility, and automation.",
    },
    {
      title: "Hybrid and Multi-cloud",
      description:
        "Modernize with flexible, multi-platform deployment.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Optional subtle grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
      style={{ backgroundImage: `url(${bgImg7})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
      >

      </div>
    <h2 className="text-4xl text-white md:text-5xl font-extrabold mb-10 leading-snug">
            Migration{" "}
            <span className="text-transparent text-white bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Approaches
            </span>{" "}
            We Support
          </h2>
      <div className="max-w-7xl mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        
        <div className="flex justify-center md:justify-start">
          <img
            src={bgImg2}
            alt="Migration team collaboration"
            className="rounded-lg shadow-2xl w-50 h-50 max-w-md object-cover"
            style={{
              height: '425px',
              width: '425px',
            }}
          />
        </div>

        {/* Right Content */}
        <div>
          
          <div className="space-y-5">
            {approaches.map((item, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-lg p-5 hover:border-indigo-500 transition-all duration-300 bg-[#0f0f0f]/70"
              >
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CloudMigrationProcess = () => {
  const steps = [
    {
      num: "1",
      title: "Assess",
      desc: "Cloud readiness and dependency mapping",
    },
    {
      num: "2",
      title: "Plan",
      desc: "Select the right migration strategy",
    },
    {
      num: "3",
      title: "Migrate",
      desc: "Execute with minimal disruption",
    },
    {
      num: "4",
      title: "Optimize",
      desc: "Tune, automate, and secure your cloud",
    },
    {
      num: "5",
      title: "Support",
      desc: "Monitor, optimize costs, and boost performance",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/pw_maze_black.png')] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Cloud Migration
          </span>{" "}
          Process
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-16 max-w-2xl mx-auto">
          From assessment to optimization — a structured approach for seamless,
          secure, and scalable migration.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative"
            >
              {/* Number Circle */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-purple-500 text-purple-400 font-semibold text-lg mb-4">
                {step.num}
              </div>
              <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[180px]">
                {step.desc}
              </p>

              {/* Connector line (except last step) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 right-[-60px] w-[120px] h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustriesWeServe = () => {
  const industries = [
    "FinTech",
    "Healthcare",
    "eCommerce",
    "Manufacturing",
    "EdTech",
    "Logistics",
  ];

  const [activeIndustry, setActiveIndustry] = useState("Manufacturing");

  const industryDetails = {
    Manufacturing: {
      title: "Manufacturing",
      description:
        "Modernize ERP systems and supply chain tools to enable smart manufacturing, real-time analytics, and efficient production workflows on the cloud.",
      image: bgImg3,
    },
    FinTech: {
      title: "FinTech",
      description:
        "Transform financial systems with secure, scalable, and compliant cloud solutions tailored for high transaction volumes.",
      image: bgImg3, // replace with FinTech image
    },
    Healthcare: {
      title: "Healthcare",
      description:
        "Enable secure patient data access, interoperability, and predictive analytics powered by HIPAA-compliant cloud infrastructure.",
      image: bgImg3, // replace with Healthcare image
    },
    eCommerce: {
      title: "eCommerce",
      description:
        "Deliver seamless shopping experiences with scalable, data-driven, and high-availability cloud environments.",
      image: bgImg3, // replace with eCommerce image
    },
    EdTech: {
      title: "EdTech",
      description:
        "Enhance learning platforms with robust cloud backends that support real-time collaboration and global scale.",
      image: bgImg3, // replace with EdTech image
    },
    Logistics: {
      title: "Logistics",
      description:
        "Empower logistics operations with IoT integration, smart routing, and real-time tracking via modern cloud systems.",
      image: bgImg3, // replace with Logistics image
    },
  };

  const { title, description, image } = industryDetails[activeIndustry];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 text-center relative">
      {/* Section Header */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Industries{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          We Serve
        </span>
      </h2>
      <p className="text-gray-400 mb-12 text-base md:text-lg">
        Tailored Cloud Migration for Every Sector
      </p>

      {/* Image + Details Card */}
      <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 max-w-6xl mx-auto">
        <img
          src={image}
          alt={title}
          className="w-full h-[400px] object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 text-left p-10">
          <h3 className="text-3xl font-bold mb-3">{title}</h3>
          <p className="text-gray-300 max-w-2xl">{description}</p>
        </div>
      </div>

      {/* Industry Selector Pills */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {industries.map((item) => (
          <button
            key={item}
            onClick={() => setActiveIndustry(item)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 ${
              activeIndustry === item
                ? "border-purple-500 text-white bg-black"
                : "border-gray-700 text-gray-400 hover:border-purple-400 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

const RelatedInsights = () => {
  const cards = [
    {
      title: 'MIGRATION STRATEGIES',
      description: 'Discover proven approaches to move workloads safely to the cloud.',
      image: bgImg4,
    },
    {
      title: 'LEGACY CHALLENGES',
      description: 'Understand how to overcome barriers when shifting from old systems.',
      image: bgImg5,
    },
    {
      title: 'COST & PERFORMANCE',
      description: 'Learn how cloud migration cuts expenses while improving efficiency.',
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
      title: 'Cloud Migration Strategies',
      description:
        'Frameworks like “Lift & Shift,” Re-platforming, and Re-architecting guide organizations in moving workloads to the cloud with minimal risk and maximum efficiency.',
      icon: '📘', // You can replace with a proper icon if needed
    },
    {
      title: 'Integration Tools',
      description:
        'Solutions such as AWS Migration Hub, Azure Migrate, and Google Cloud Migrate simplify data transfer, application integration, and hybrid cloud setup.',
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


export default function P006() {
  return (
    <div className="space-y-3">
     <CloudOperationSection/>
     <CloudMigration/>
     <CloudMigrationServices/>
     <MigrationApproaches />
     <CloudMigrationProcess/>
     <IndustriesWeServe />
      <ToolsSection />
      <RelatedInsights/>
      <Resources/>
      <JoinUs/>
    </div>
  );
}
