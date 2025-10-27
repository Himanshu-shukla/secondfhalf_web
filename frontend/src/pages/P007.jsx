import bgImg from "../assets/7-1.jpg";
import bgImg1 from "../assets/7-2.jpg";
import bgImg2 from "../assets/7-3.png";
import bgImg3 from "../assets/7-4.png";
import bgImg4 from "../assets/7-5.png";
import bgImg5 from "../assets/7-6.png";
import bgImg7 from "../assets/7-8.jpg";
import bgImg8 from "../assets/7-9.jpg";
import bgImg9 from "../assets/7-10.jpg";
import bgImg10 from "../assets/7-11.jpg";
import bgImg11 from "../assets/7-12.jpg";
import bgImg12 from "../assets/7-13.png";
import bgImg13 from "../assets/1-10.png";
import { Shield, Gauge, Settings, Server, TrendingUp, RefreshCcw } from "lucide-react"; 
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">
            Cloud
          </span>
          <br />
          Management
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-md">
          HPIT delivers secure, seamless cloud migration tailored for performance and built for the future.
        </p>
      </div>
    </section>
  );
};

const WhatWeHandle = () => {
  const featuresTop = [
    {
      icon: <Server size={22} />,
      title: "Monitoring & Uptime",
      description: "Real-time tracking with instant alerts and 24/7 coverage.",
    },
    {
      icon: <Shield size={22} />,
      title: "Security & Compliance",
      description:
        "Automated patching, threat detection, and audit-ready logs.",
    },
  ];

  const featuresBottom = [
    {
      icon: <TrendingUp size={22} />,
      title: "Cost Efficiency",
      description:
        "Identify unused resources, right-size workloads, and control spend.",
    },
    {
      icon: <Gauge size={22} />,
      title: "Performance Optimization",
      description:
        "Tune compute, storage, and traffic to keep everything smooth and fast.",
    },
    {
      icon: <RefreshCcw size={22} />,
      title: "Backup & Recovery",
      description:
        "Ensure business continuity with automated backups and rapid restore.",
    },
    {
      icon: <Settings size={22} />,
      title: "Configuration Management",
      description:
        "Keep systems consistent and stable across environments.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* === Top Section: Heading + 2 Cards === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
          {/* Left Content */}
          <div className="lg:col-span-1 text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              What{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                We Handle
              </span>{" "}
              For You
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-md">
              HPIT manages every layer of your cloud — from security and
              performance to cost control and uptime — across AWS, Azure, GCP,
              and hybrid setups.
            </p>
          </div>

          {/* Right Top Row (2 Cards) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {featuresTop.map((feature, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-gray-800 rounded-xl p-8 transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#1b1b1b] text-gray-300 mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* === Bottom Section: 4 Cards === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresBottom.map((feature, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-gray-800 rounded-xl p-8 transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#1b1b1b] text-gray-300 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Partnerships = () => {
  const partners = [
    { name: "AWS", logo: bgImg2 },
    { name: "Google Cloud", logo: bgImg3 },
    { name: "Microsoft", logo: bgImg4 },
    { name: "Red Hat", logo: bgImg5 },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ===== Left Section ===== */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Partnerships
            </span>
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
            Best-in-Class Integrations
          </h3>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            The world’s leading technology and software providers partner with
            us because of our scale, full-stack capabilities, and speed.
            Together, we can deliver new, sustainable growth across your
            business.
          </p>

          {/* Meet Partners Button */}
          <button className="group inline-flex items-center text-white font-medium">
            Meet our partners
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

        {/* ===== Right Section: Partner Logos ===== */}
        <div className="grid grid-cols-2 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-md flex items-center justify-center p-6 bg-[#0e0e0e] hover:border-purple-500 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 w-30 object-contain opacity-90 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowWeDeliverValue = () => {
  const steps = [
    {
      num: "1",
      title: "Discover",
      desc: "We audit your existing environment",
    },
    {
      num: "2",
      title: "Design",
      desc: "Tailored cloud management plan",
    },
    {
      num: "3",
      title: "Deploy",
      desc: "Tools, automations, alerts, and dashboards",
    },
    {
      num: "4",
      title: "Deliver",
      desc: "24/7 monitoring, tuning, and improvements",
    },
    {
      num: "5",
      title: "Refine",
      desc: "Ongoing reviews and strategy updates",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          How{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            We Deliver
          </span>{" "}
          Value
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <img
              src={bgImg7}
              alt="Cloud value delivery"
              className="rounded-lg w-full object-cover shadow-lg"
              style={{ height: "400px" }}
            />
            {/* Optional decorative grid dots */}
            <div className="absolute -top-5 -left-5 w-12 h-12 bg-[radial-gradient(circle,rgba(124,58,237,0.3)_1px,transparent_1px)] [background-size:8px_8px]" />
            <div className="absolute bottom-5 -right-5 w-12 h-12 bg-[radial-gradient(circle,rgba(124,58,237,0.3)_1px,transparent_1px)] [background-size:8px_8px]" />
          </div>

          {/* Right Steps Section */}
          <div>
            <p className="text-gray-300 mb-10 text-base md:text-lg border-l-4 border-purple-500 pl-4">
              A step-by-step approach to smarter, stronger cloud operations.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-5">
                  {/* Number Circle */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-purple-500 text-purple-400 font-semibold">
                    {step.num}
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const CloudManagement = () => {
  const stats = [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "24/7", label: "Incident Response" },
    { value: "30%", label: "Avg. Cost Reduction" },
    { value: "100%", label: "Client Retention" },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* ===== Top Content ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Cloud{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Management
              </span>{" "}
              That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Never Sleeps
              </span>
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              At HPIT, we believe that cloud operations should work just as hard
              as you do — even when you're offline. Our proactive support model
              combines real-time monitoring, intelligent automation, and 24/7
              expert intervention to ensure uninterrupted cloud performance.
            </p>

            <p className="text-gray-300 mb-10 leading-relaxed">
              Whether it's detecting anomalies before they become problems,
              fine-tuning workloads for peak hours, or responding instantly to
              incidents, we’ve got you covered — around the clock, across every
              cloud platform.
            </p>

            {/* Button */}
            <button className="group inline-flex items-center text-white font-medium">
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

          {/* Right Image */}
          <div>
            <img
              src={bgImg8}
              alt="Cloud management team"
              className="rounded-lg w-full object-cover shadow-lg"
            />
          </div>
        </div>

        {/* ===== Bottom Stats Section ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-800 mt-20 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="py-6">
              <h3 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r "
                style={{
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontSize: "45px",
    lineHeight: "1",
    letterSpacing: "0.01em",
    color: "transparent",
    WebkitTextStroke: "2px #ECEDEE",
    WebkitTextFillColor: "transparent",
  }}
              >
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


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

          <button className="flex items-center justify-center gap-2 bg-transparent hover:bg-indigo-500 hover:border-indigo-500 text-white py-2 px-6 rounded-full text-sm font-medium transition-all duration-300">
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

const CloudConfidenceSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-20">
        {/* Left Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            Managing Complex Environments<br />
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            HPIT provides end-to-end cloud management services that ensure your infrastructure stays secure, cost-effective, and fully optimized — every day, around the clock.
          </p>

          <button className="flex items-center gap-2 text-sm md:text-base font-medium px-5 py-2 rounded-full transition-colors duration-300">
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
      title: 'CENTRALIZED CONTROL',
      description: 'Discover how unified management simplifies multi-cloud environments.',
      image: bgImg9,
    },
    {
      title: 'SECURITY & COMPLIANCE',
      description: 'Learn strategies to keep cloud data safe and regulatory-ready.',
      image: bgImg10,
    },
    {
      title: 'PERFORMANCE OPTIMIZATION',
      description: 'See how proactive monitoring boosts efficiency and uptime.',
      image: bgImg11,
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
      title: 'Unified Cloud Management',
      description:
        'Tools like VMware vRealize, Nutanix, and ServiceNow provide centralized dashboards for managing multi-cloud environments, improving visibility and control.',
      icon: '📘', // You can replace with a proper icon if needed
    },
    {
      title: 'Orchestration Solutions',
      description:
        'Platforms such as Terraform, Ansible, and Kubernetes enable automated provisioning, scaling, and orchestration of cloud resources to boost efficiency.',
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
            src={bgImg12}
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
      className="absolute inset-0 rounded-full  border-r-transparent rotate-180 group-hover:rotate-[405deg] transition-transform duration-500 ease-in-out"
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
          src={bgImg13}
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


export default function P007() {
  return (
    <div className="space-y-3">
     <CloudOperationSection/>
     <CloudConfidenceSection/>
     <WhatWeHandle/>
     < Partnerships/>
     <HowWeDeliverValue />
     <CloudManagement />
     
      <RelatedInsights/>
      <Resources/>
      <JoinUs/>
    </div>
  );
}
