import bgImg from "../assets/8-1.jpg";
import bgImg1 from "../assets/8-2.jpg";
import bgImg2 from "../assets/8-3.jpg";
import bgImg3 from "../assets/8-4.jpg";
import bgImg4 from "../assets/8-5.jpg";
import bgImg5 from "../assets/8-6.jpg";
import bgImg6 from "../assets/8-7.jpg";
import bgImg7 from "../assets/8-8.jpg";
import bgImg8 from "../assets/8-9.png";
import bgImg12 from "../assets/1-10.png";

import aws from "../assets/aws.png";
import opentext from "../assets/opentext.png";
import sap from "../assets/sap.png";
import databricks from "../assets/databrick.png";
import cloudera from "../assets/cloudera.png";
import dynatrace from "../assets/dynatrace.png";

import bgImg13 from "../assets/1-10.png";

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
      
    >
      <img
    src={bgImg}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover rotate-180"
  />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-16 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">
            Cloud
          </span>
          <br />
          Support
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-md">
          Reliable support for your cloud. Anytime. Every time.
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
            Built for Cloud Reliability
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            HPIT’s Cloud Support services are designed to ensure stability, security, and performance across your cloud environments. From real-time monitoring to rapid issue resolution, we help you stay ahead of disruptions.
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

const CloudSupport = () => {
  const features = [
    {
      title: "Rapid Incident Resolution",
      desc: "Structured escalation protocols with defined SLAs for critical issue handling.",
    },
    {
      title: "Configuration Assistance",
      desc: "Support with setup, scaling, networking, and service integrations.",
    },
    {
      title: "Performance & Cost Optimization",
      desc: "Identify inefficiencies, reduce costs, and maximize cloud ROI.",
    },
    {
      title: "Security & Compliance Guidance",
      desc: "Maintain regulatory compliance and secure cloud workloads with confidence.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* === Heading Section === */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Support
            </span>{" "}
            for Every{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Cloud Environment
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            From configuration to crisis, we cover every aspect of cloud
            support.
          </p>
        </div>

        {/* === Content Section === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src={bgImg2}
              alt="Cloud environment support"
              className="rounded-lg w-full object-cover shadow-xl"
            />
          </div>

          {/* Right Text + Cards */}
          <div>
            <p className="text-gray-300 mb-10 text-base md:text-lg flex items-center gap-3">
              <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
              Stay ahead with continuous insights and proactive issue detection
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#111111] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseHPIT = () => {
  const features = [
    {
      title: "Certified Multi Cloud Experts",
      desc: "In-house teams certified across AWS, Azure, and GCP.",
    },
    {
      title: "SLA-Backed Guarantees",
      desc: "Response times and uptime metrics you can rely on.",
    },
    {
      title: "Tailored Support Plans",
      desc: "Flexible engagement models built around your operational needs.",
    },
    {
      title: "Transparent Reporting",
      desc: "Access real-time dashboards and monthly performance insights.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* === Heading Section === */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Why Choose{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            HPIT
          </span>{" "}
          for Cloud Support?
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-16">
          We’re not just reactive. We’re relentlessly proactive.
        </p>

        {/* === Layout Grid === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column (2 Cards) */}
          <div className="space-y-8">
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-gray-800 rounded-xl p-6 text-left transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]"
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Middle Image */}
          <div className="flex justify-center">
            <img
              src={bgImg3}
              alt="Team discussion"
              className="rounded-lg shadow-xl w-full max-w-sm md:max-w-md object-cover"
              style={{
                height: "300px",
              }}
            />
          </div>

          {/* Right Column (2 Cards) */}
          <div className="space-y-8">
            {features.slice(2, 4).map((feature, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-gray-800 rounded-xl p-6 text-left transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]"
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProvenImpact = () => {
  const metrics = [
    {
      value: "98%",
      label: "First-Contact Resolution Rate",
      bg: "bg-transparent border border-gray-800",
    },
    {
      value: "15-Min",
      label: "Avg. Critical Response Time",
      bg: "bg-[#4C1D95]", // purple background
    },
    {
      value: "30–40%",
      label: "Reduction in Support Overhead",
      bg: "bg-[#047857]", // green background
    },
    {
      value: "99.99%",
      label: "Client Uptime Achieved",
      bg: "bg-transparent border border-gray-800",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ===== Left Section ===== */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Proven Impact with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Measurable Outcomes
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            Our cloud support isn’t just responsive — it’s results driven. These
            metrics reflect the efficiency, reliability, and trust our clients
            experience every day.
          </p>

          {/* Get Started Button */}
          <button className="group inline-flex items-center text-white font-medium">
            Get Started
            <span className="relative flex items-center justify-center w-10 h-10 ml-2">
              <span className="absolute inset-0 rounded-full border-[2px] border-red-600 border-r-transparent group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* ===== Right Metrics Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`${metric.bg} rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105`}
            >
              <h3 className="text-3xl md:text-4xl font-extrabold mb-2"
                style={{
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    fontSize: "36px",
    lineHeight: "1",
    letterSpacing: "0.01em",
    color: "transparent",
    WebkitTextStroke: "2px #ECEDEE",
    WebkitTextFillColor: "transparent",
  }}
              >
                {metric.value}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {metric.label}
              </p>
            </div>
          ))}
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
            src={bgImg}
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
            src={bgImg}
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
            src={bgImg}
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
      <div className="flex justify-end gap-4 mt-12">
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all">
          <FaArrowLeft size={14} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all">
          <FaArrowRight size={14} />
        </button>
      </div>
    </section>
  );
};

const IndustriesSupport = () => {
  const industries = [
    "FinTech",
    "Healthcare",
    "eCommerce",
    "Manufacturing",
    "EdTech",
    "Logistics",
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* === Section Heading === */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Industries{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            We Support
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          From regulatory compliance to seasonal traffic spikes we’ve supported
          it all.
        </p>

        {/* === Image + Content Card === */}
        <div className="relative bg-[#111111] rounded-2xl overflow-hidden shadow-lg">
          {/* Background Image */}
          <img
            src={bgImg4}
            alt="Healthcare Industry"
            className="w-full h-[400px] object-cover opacity-80"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 md:p-10 text-left">
            <h3 className="text-3xl font-bold mb-3">Healthcare</h3>
            <p className="text-gray-300 max-w-xl mb-6">
              Support tailored for data-sensitive environments with strict
              compliance like HIPAA and high availability demands.
            </p>

            {/* Icon Placeholder */}
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mb-6">
              <span className="text-sm font-semibold">J</span>
            </div>

            {/* === Industry Buttons === */}
            <div className="flex flex-wrap gap-3 justify-end mr-4">
  {industries.map((industry, index) => (
    <button
      key={index}
      className={`px-5 py-2 rounded-full border ${
        industry === "Healthcare"
          ? "border-purple-500 bg-purple-900/30 text-white"
          : "border-gray-700 text-gray-300 hover:border-purple-500 hover:text-white"
      } transition-all duration-300`}
    >
      {industry}
    </button>
  ))}
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
      title: '24/7 ASSISTANCE',
      description: 'Ensure uninterrupted operations with round-the-clock cloud support.',
      image: bgImg5,
    },
    {
      title: 'PROACTIVE MONITORING',
      description: 'Identify and resolve issues before they impact performance.',
      image: bgImg6,
    },
    {
      title: 'EXPERT GUIDANCE',
      description: 'Get tailored solutions to optimize and scale your cloud environment.',
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
      title: 'Cloud Support Services',
      description:
        'Leading providers like AWS, Azure, and Google Cloud offer round-the-clock technical support, ensuring business continuity and quick resolution of issues.',
      icon: '📘', // You can replace with a proper icon if needed
    },
    {
      title: 'Knowledge Base',
      description:
        'Extensive documentation, tutorials, and user forums provide self-service guidance, helping teams troubleshoot and optimize cloud operations effectively.',
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
    className="relative flex items-center justify-center w-10 h-10 "
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


export default function P005() {
  return (
    <div className="space-y-3">
     <CloudOperationSection/>
     <CloudConfidenceSection/>
      <CloudSupport/>
<WhyChooseHPIT/>
<ProvenImpact />
      <ToolsSection />
      <IndustriesSupport />     
      <RelatedInsights/>
      <Resources/>
      <JoinUs/>
    </div>
  );
}
