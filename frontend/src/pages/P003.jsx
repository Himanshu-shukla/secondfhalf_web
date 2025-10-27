import bgImg from "../assets/3-1.jpg";
import bgImg1 from "../assets/3-2.jpg";
import bgImg2 from "../assets/3-3.jpg";
import bgImg3 from "../assets/3-4.png";
import bgImg4 from "../assets/3-5.png";
import bgImg14 from "../assets/3-15.png";
import bgImg5 from "../assets/3-6.jpg";
import bgImg6 from "../assets/3-7.jpg";
import bgImg7 from "../assets/3-8.jpg";
import bgImg8 from "../assets/3-9.png";
import bgImg9 from "../assets/1-10.png";
import aws from "../assets/aws.png";
import opentext from "../assets/opentext.png";
import sap from "../assets/SAP.png";
import databricks from "../assets/databrick.png";
import cloudera from "../assets/cloudera.png";
import dynatrace from "../assets/dynatrace.png";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RelatedInsights = () => {
  const cards = [
    {
      title: "DIGITAL INNOVATION",
      description:
        "Explore how modern technologies reshape applications for smarter business outcomes.",
      image: bgImg5, // Replace with your imported bgImg or other image paths
    },
    {
      title: "LEGACY TO MODERN",
      description:
        "Understand strategies to upgrade old systems into agile, scalable solutions.",
      image: bgImg6,
    },
    {
      title: "FUTURE-READY APPS",
      description:
        "Learn how transformation builds resilient applications that grow with your business.",
      image: bgImg7,
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 md:px-16">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        Related <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Insights</span>
      </h2>

      {/* Card Container */}
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 bg-[#2b2b2b] flex flex-col justify-between h-56">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              <button className="mt-5 flex items-center text-white hover:text-gray-300 transition">
                <span className="text-sm font-medium">Learn more</span>
                 <span
    className="relative flex items-center justify-center w-10 h-10 right-15"
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
      <div className="flex justify-end mt-10 space-x-4">
        <button className="w-10 h-10 flex items-center justify-center border border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition">
          <FaChevronLeft />
        </button>
        <button className="w-10 h-10 flex items-center justify-center border border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};


const ApplicationTransformation = () => {
  return (
    <section
      className="relative h-screen w-full flex items-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay gradient (optional for better text readability) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-8 md:px-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <h1
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
  Application
</h1>
          <span className="block text-white font-extrabold">
            Transformation
          </span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-200 max-w-xl">
          Give your legacy systems new life with future ready architecture,
          design, and performance — all without starting from scratch.
        </p>
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
          src={bgImg9}
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


const FullUpgradeSection = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-16">
      {/* Top content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Content */}
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            More than a facelift <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              it's a full upgrade.
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-lg leading-relaxed">
            Application transformation updates core systems, not only to modern
            UI/UX standards but to new levels of speed, scalability, security,
            and agility. We turn outdated into outstanding — with strategy, not
            shortcuts.
          </p>

          <button className="mt-8 inline-flex items-center text-white font-semibold hover:text-blue-400 transition">
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
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={bgImg1}
              alt="Transformation"
              className="rounded-md shadow-lg border border-gray-700"
            />
            <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-blue-600 rounded-md -z-10"></div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="mt-16 border-t border-gray-800 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold"
          style={{
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: "45px",
    lineHeight: "1",
    letterSpacing: "0.01em",
    color: "transparent",
    WebkitTextStroke: "2px #ECEDEE",
    WebkitTextFillColor: "transparent",
  }}
          >60%</h3>
          <p className="text-gray-400 text-sm mt-2">
            Reduction in System Downtime
          </p>
        </div>
        <div className="border-l border-gray-800 pl-4">
          <h3 className="text-4xl font-bold"
          style={{
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: "45px",
    lineHeight: "1",
    letterSpacing: "0.01em",
    color: "transparent",
    WebkitTextStroke: "2px #ECEDEE",
    WebkitTextFillColor: "transparent",
  }}
          >3x</h3>
          <p className="text-gray-400 text-sm mt-2">
            Faster Feature Deployment <br /> Post-Transformation
          </p>
        </div>
        <div className="border-l border-gray-800 pl-4">
          <h3 className="text-4xl font-bold"
          style={{
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: "45px",
    lineHeight: "1",
    letterSpacing: "0.01em",
    color: "transparent",
    WebkitTextStroke: "2px #ECEDEE",
    WebkitTextFillColor: "transparent",
  }}
          >40%</h3>
          <p className="text-gray-400 text-sm mt-2">
            Lower Maintenance & Support Costs
          </p>
        </div>
        <div className="border-l border-gray-800 pl-4">
          <h3 className="text-4xl font-bold"
          style={{
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: "45px",
    lineHeight: "1",
    letterSpacing: "0.01em",
    color: "transparent",
    WebkitTextStroke: "2px #ECEDEE",
    WebkitTextFillColor: "transparent",
  }}
          >2.5x</h3>
          <p className="text-gray-400 text-sm mt-2">
            Increase in User Satisfaction
          </p>
        </div>
      </div>
    </section>
  );
};



const TransformSection = () => {
  return (
    <section
      className="relative text-white py-20 px-6 md:px-16"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Transform</span>
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Modernizing every layer from interface to infrastructure.
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-6 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-700 p-6 md:p-10">
          {/* Column 1 */}
          <div className="border-r border-gray-700 pr-6 last:border-none md:last:border-none">
            <h3 className="text-xl font-semibold mb-3">UI/UX & Frontend</h3>
            <p className="text-gray-400">
              Outdated interfaces made modern, mobile first, and accessible keeping users engaged and satisfied.
            </p>
          </div>

          {/* Column 2 */}
          <div className="border-r border-gray-700 px-6 last:border-none md:last:border-none">
            <h3 className="text-xl font-semibold mb-3">Architecture & Codebase</h3>
            <p className="text-gray-400">
              From spaghetti code to clean structure — we refactor, rebuild, or modularize as needed.
            </p>
          </div>

          {/* Column 3 */}
          <div className="pl-6">
            <h3 className="text-xl font-semibold mb-3">Infrastructure & Deployment</h3>
            <p className="text-gray-400">
              Legacy hosting → containerized, cloud-native, CI/CD-ready deployment pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HPITApproach = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 lg:px-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 margin-auto text-center">
            The <span className="text-white">HPIT</span>{" "}
            <span className="">Approach</span>
          </h2>
           <p className="text-gray-300 mb-8 text-center">
            A clear, strategic path to modern, high performing applications.
          </p>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={bgImg2}
            alt="Smiling person at laptop"
            className="rounded-lg w-full max-w-md object-cover shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          
         

          <h3 className="text-lg font-semibold mb-6">
            Our Proven 5-Step Process to Modernize Legacy Applications
          </h3>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 border border-red-500 rounded-full flex items-center justify-center text-red-500 font-semibold mr-4">
                1
              </div>
              <div>
                <h4 className="font-semibold">Assessment</h4>
                <p className="text-gray-400 text-sm">
                  Understand your app, users, pain points, and goals.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 border border-red-500 rounded-full flex items-center justify-center text-red-500 font-semibold mr-4">
                2
              </div>
              <div>
                <h4 className="font-semibold">Strategy Design</h4>
                <p className="text-gray-400 text-sm">
                  Define what to keep, rebuild, or refactor.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 border border-red-500 rounded-full flex items-center justify-center text-red-500 font-semibold mr-4">
                3
              </div>
              <div>
                <h4 className="font-semibold">Modernization Execution</h4>
                <p className="text-gray-400 text-sm">
                  Implement code, UI, and infrastructure upgrades.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 border border-red-500 rounded-full flex items-center justify-center text-red-500 font-semibold mr-4">
                4
              </div>
              <div>
                <h4 className="font-semibold">Testing & Optimization</h4>
                <p className="text-gray-400 text-sm">
                  Ensure flawless performance and security.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 border border-red-500 rounded-full flex items-center justify-center text-red-500 font-semibold mr-4">
                5
              </div>
              <div>
                <h4 className="font-semibold">Handoff + Training</h4>
                <p className="text-gray-400 text-sm">
                  Empower your team to take full control post-launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ShowcaseSection = () => {
  return (
    <section
      className="relative bg-black text-white py-20 px-6 md:px-16"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header Section */}
     <div className="max-w-5xl text-left mb-16">
  <h2 className="text-4xl md:text-5xl font-extrabold">
    Outdated to{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
      Outstanding
    </span>
  </h2>
  <p className="text-gray-300 mt-4 text-lg max-w-2xl">
    We helped modernize their data-sharing platform, improving scalability,
    tightening security, and reducing cloud costs by 35%.
  </p>
</div>
      {/* Grid Section */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-xl border border-gray-800">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            How We <span className="text-indigo-400">Transformed</span> X's Legacy App
          </h3>
        </div>

        {/* Card 2 */}
        <div className="relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-xl border border-gray-800 flex flex-col justify-between overflow-hidden">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Thursday</h3>
          <p className="text-gray-400 mb-6">
            We enhanced this dating app’s UX and backend to support real-time events and location-based user matching.
          </p>
        </div>

        <button className="text-indigo-400 font-semibold mt-auto flex items-center gap-2 hover:gap-3 transition-all relative z-10">
          KNOW MORE
          <span className="relative flex items-center justify-center w-10 h-10 right-5">
            <span className="absolute inset-0 rounded-full border-[2px] border-red-600 border-r-transparent rotate-180 transition-transform duration-500 ease-in-out"></span>
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

        {/* Bottom-right image */}
        <img
          src={bgImg3}
          alt="Thursday Project"
          className="absolute bottom-0 right-0 w-40 opacity-90 pointer-events-none"
        />
      </div>

      {/* Card 2 */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-xl border border-gray-800 flex flex-col justify-between overflow-hidden">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Gener8</h3>
          <p className="text-gray-400 mb-6">
            Built a secure system enabling users to control their data and earn rewards by sharing it with brands.
          </p>
        </div>

        <button className="text-indigo-400 font-semibold mt-auto flex items-center gap-2 hover:gap-3 transition-all relative z-10">
          KNOW MORE
          <span className="relative flex items-center justify-center w-10 h-10 right-5">
            <span className="absolute inset-0 rounded-full border-[2px] border-red-600 border-r-transparent rotate-180 transition-transform duration-500 ease-in-out"></span>
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

        {/* Bottom-right image */}
        <img
          src={bgImg4}
          alt="Gener8 Project"
          className="absolute bottom-0 right-0 w-40 opacity-90  pointer-events-none"
        />
      </div>

      {/* Card 3 */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-xl border border-gray-800 flex flex-col justify-between overflow-hidden">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Mindful Chef</h3>
          <p className="text-gray-400 mb-6">
            A healthy meal delivery platform we optimized for performance, user experience, and seamless subscription management.
          </p>
        </div>

        <button className="text-indigo-400 font-semibold mt-auto flex items-center gap-2 hover:gap-3 transition-all relative z-10">
          KNOW MORE
          <span className="relative flex items-center justify-center w-10 h-10 right-5">
            <span className="absolute inset-0 rounded-full border-[2px] border-red-600 border-r-transparent rotate-180 transition-transform duration-500 ease-in-out"></span>
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

        {/* Bottom-right image */}
        <img
          src={bgImg14}
          alt="Mindful Chef Project"
          className="absolute bottom-0 right-0 w-40 opacity-90  pointer-events-none"
        />
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

function ResourcesSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center bg-black text-white px-8">
      {/* Left Side - Image and Heading */}
      <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mb-10 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          <span className="text-[#B7A6F7]">Res</span>ources
        </h2>
        <img
          src={bgImg8}
          alt="3D abstract"
          className="w-60 md:w-72 object-contain"
        />
      </div>

      {/* Right Side - Cards */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full md:w-2/3 justify-center">
        {/* Card 1 */}
        <div className="bg-gradient-to-b from-[#1B1C21] to-[#14151A] rounded-lg p-8 w-full md:w-1/2 shadow-lg hover:shadow-[#A855F7]/30 transition-shadow">
          <div className="mb-4">
            <div className="bg-[#25262B] w-10 h-10 flex items-center justify-center rounded-md mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Case Studies</h3>
            <p className="text-gray-400 text-sm mb-6">
              Examples of enterprises that transformed outdated applications into scalable,
              secure, and cost-efficient systems.
            </p>
            <button className="flex items-center text-sm font-medium text-white group">
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
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-b from-[#1B1C21] to-[#14151A] rounded-lg p-8 w-full md:w-1/2 shadow-lg hover:shadow-[#A855F7]/30 transition-shadow">
          <div className="mb-4">
            <div className="bg-[#25262B] w-10 h-10 flex items-center justify-center rounded-md mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Frameworks & Toolkits</h3>
            <p className="text-gray-400 text-sm mb-6">
              Pre-built methodologies, checklists, and automation tools for re-coding,
              containerization, and cloud-native adoption.
            </p>
            <button className="flex items-center text-sm font-medium text-white group">
              Learn more
               <span
    className="relative flex items-center justify-center w-10 h-10"
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
      </div>
    </section>
  );
}



export default function P002() {
  return (
    <div className="space-y-3">
      <ApplicationTransformation/>
<FullUpgradeSection/>
<TransformSection/>
<HPITApproach/>
<ShowcaseSection/>  
<ToolsSection/>
<RelatedInsights/>
<ResourcesSection/>
      <JoinUs/>
    </div>
  );
}
