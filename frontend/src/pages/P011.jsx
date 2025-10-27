import bgImg from "../assets/10-1.jpg";
import bgImg1 from "../assets/10-2.jpg";
import bgImg2 from "../assets/10-3.jpg";
import bgImg3 from "../assets/10-4.jpg";
import bgImg4 from "../assets/10-5.jpg";
import bgImg5 from "../assets/10-6.jpg";
import bgImg6 from "../assets/10-7.jpg";
import bgImg7 from "../assets/10-8.png";
import bgImg12 from "../assets/1-10.png";
import bgImg21 from "../assets/7-3.png";
import bgImg31 from "../assets/7-4.png";
import bgImg41 from "../assets/7-5.png";
import bgImg51 from "../assets/7-6.png";
import aws from "../assets/aws.png";
import opentext from "../assets/opentext.png";
import sap from "../assets/sap.png";
import databricks from "../assets/databrick.png";
import cloudera from "../assets/cloudera.png";
import dynatrace from "../assets/dynatrace.png";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ShieldCheck, Lock, AlertTriangle, ClipboardCheck } from "lucide-react"; // icons

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
      <div className="absolute inset-0 bg-black bg-opacity-50 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-16 text-white  ">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">
            Cloud
          </span>
          <br />
          Security
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-md">
          Comprehensive protection engineered for today’s dynamic and distributed cloud environments.
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
            Smart Security for the Cloud
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            HPIT delivers enterprise-grade cloud security tailored to your architecture. From identity controls to threat detection, we help you stay compliant, protected, and in control—every step of the way.
          </p>

          <button className="flex items-center gap-2 text-sm md:text-base font-medium px-5 py-2 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300">
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
    </section>
  );
};

const CloudSecurity = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* ===== HEADER ===== */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Security
            </span>{" "}
            at Every{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Cloud Layer
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mt-4 max-w-2xl">
            We secure every layer of your cloud—from access to data with smart
            controls and continuous protection.
          </p>
        </div>

        {/* ===== MAIN CONTENT GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* === LEFT SIDE (IMAGE) === */}
          <div className="flex justify-center">
            <img
              src={bgImg2}
              alt="Security Meeting"
              className="rounded-lg shadow-2xl w-full max-w-md md:max-w-lg object-cover"
              style={{
                height: "400px",
              }}
            />
          </div>

          {/* === RIGHT SIDE (TEXT + CARDS) === */}
          <div>
            <p className="text-gray-300 text-base md:text-lg mb-8 border-l-4 border-purple-500 pl-4">
              Security isn’t a feature—it’s a foundation. Here’s what we cover:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Identity & Access Management
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Granular role-based access and multi-factor authentication.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Data Protection</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Encryption in transit and at rest with secure key management.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Threat Detection & Response
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Real-time threat intelligence, monitoring, and automated
                  remediation.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Network Security</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Firewalls, VPC configuration, zero-trust access, and
                  segmentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SecurityLifecycle = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* === Heading === */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Security{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Lifecycle
          </span>{" "}
          Management
        </h2>
        <p className="text-gray-400 text-lg mb-16">
          End-to-End Security. Continuous Improvement.
        </p>

        {/* === Cards === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 text-left hover:border-purple-500 transition-all">
            <div className="bg-gray-800/70 w-10 h-10 flex items-center justify-center rounded-md mb-4">
              <ShieldCheck size={20} className="text-gray-300" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Assess</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We begin with a cloud security posture review and risk analysis.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 text-left hover:border-purple-500 transition-all">
            <div className="bg-gray-800/70 w-10 h-10 flex items-center justify-center rounded-md mb-4">
              <Lock size={20} className="text-gray-300" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Secure</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Implement best-practice configurations, access controls, and
              monitoring tools.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 text-left hover:border-purple-500 transition-all">
            <div className="bg-gray-800/70 w-10 h-10 flex items-center justify-center rounded-md mb-4">
              <AlertTriangle size={20} className="text-gray-300" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Detect & Respond</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enable automated alerts and incident response playbooks.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 text-left hover:border-purple-500 transition-all">
            <div className="bg-gray-800/70 w-10 h-10 flex items-center justify-center rounded-md mb-4">
              <ClipboardCheck size={20} className="text-gray-300" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Audit & Improve</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ongoing reviews, penetration testing, and posture optimization.
            </p>
          </div>
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
            <span className="text-white bg-clip-text bg-gradient-to-r">
              What Makes HPIT Different
            </span>{" "}

          </h2>
          <span className="mb-2">Security that Thinks Ahead</span>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 m-2 items-center">
        {/* === Left Section: Image === */}
        <div className="relative flex justify-center">
          <img
            src={bgImg3}
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

          {/* === Bullet List === */}
          <ul className="space-y-6">
  {[
    {
      title: "Cloud-Native Security Experts",
      desc: "Certified engineers focused solely on securing cloud environments.",
    },
    {
      title: "DevSecOps Integration",
      desc: "Security built into every stage of development and deployment.",
    },
    {
      title: "Zero Trust Framework",
      desc: "Assume no trust, verify every action—internally and externally.",
    },
    {
      title: "Custom Policies. Real Enforcement.",
      desc: "Tailored policies enforced through automate and cloud-native controls.",
    },
  ].map((item, idx) => (
    <li key={idx} className="flex items-start">
      {/* Hollow red circle bullet */}

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

const Partnerships = () => {
  const partners = [
    { name: "AWS", logo: bgImg21 },
    { name: "Google Cloud", logo: bgImg31 },
    { name: "Microsoft", logo: bgImg41 },
    { name: "Red Hat", logo: bgImg51 },
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
      title: 'Multi-Cloud Security',
      description: 'Consistent policies and controls across AWS, Azure, and GCP.',
      image: bgImg4,
    },
    {
      title: 'Healthcare Compliance',
      description: 'HIPAA-ready protections with strict access and audit tracking.',
      image: bgImg5,
    },
    {
      title: 'Ransomware Defense',
      description: 'Secure backups with automated, rapid recovery workflows.',
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
      title: 'Data Encryption',
      description:
        'End-to-end encryption, key management, and secure storage practices safeguard sensitive information across cloud platforms.',
      icon: '📘', // You can replace with a proper icon if needed
    },
    {
      title: 'Threat Detection',
      description:
        'AI-driven monitoring and SIEM tools like Splunk and Microsoft Sentinel help detect threats early and enable fast incident response.',
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

export default function P011() {
  return (
    <div className="space-y-3">
     <CloudOperationSection/>
     <CloudConfidenceSection/>
     <CloudSecurity/>
     <SecurityLifecycle/>
     <CloudTransformation/>

     <Partnerships/>
     <ResultsSection/>
      <ToolsSection />
     
      <RelatedInsights/>
      <Resources/>
      <JoinUs/>
    </div>
  );
}
