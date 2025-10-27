import bgImg from "../assets/1_1.png";
import {useState} from 'react'
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

import { FaCircle } from "react-icons/fa";

// function ArticleRealTimeAnalytics({ image = bgImg }) {
//   return (
//     <div className="min-h-screen bg-[#0b0b0f] text-white">
//       {/* Top hero with background image */}
//       <section
//         className="relative h-[38vh] md:h-[46vh] w-full overflow-hidden"
//         style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-[#0b0b0f]" />
//         <div className="absolute inset-x-0 bottom-6 px-6 md:px-10">
//           <div className="max-w-6xl">
//             <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[12px] tracking-wide uppercase text-white/70 backdrop-blur">
//               <span className="inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
//               Insights
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Body */}
//       <main className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-[300px,1fr] md:px-10 md:py-14">
//         {/* Sidebar Card */}
//         <aside className="order-2 md:order-1">
//           <div className="sticky top-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
//             {/* Social row (icons placeholders) */}
//             <div className="mb-4 flex items-center gap-3">
//               {['share','x','in','fb','copy'].map((k) => (
//                 <span
//                   key={k}
//                   className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs text-white/70"
//                 >
//                   {k.toUpperCase().slice(0,2)}
//                 </span>
//               ))}
//             </div>

//             <div className="my-4 h-px bg-white/10" />

//             <div className="space-y-4 text-sm">
//               <div>
//                 <p className="text-white/50">POSTED</p>
//                 <p className="mt-1 font-medium">August 22, 2019</p>
//               </div>

//               <div className="h-px bg-white/10" />

//               <div>
//                 <p className="text-white/50">ESTIMATED READ TIME</p>
//                 <p className="mt-1 font-medium">3 Minutes</p>
//               </div>

//               <div className="h-px bg-white/10" />

//               <div>
//                 <p className="text-white/50">AUTHOR</p>
//                 <p className="mt-1 font-medium">HPIT Team</p>
//               </div>

//               <div className="h-px bg-white/10" />

//               <div>
//                 <p className="text-white/50">TAGS</p>
//                 <div className="mt-2 flex flex-wrap gap-2">
//                   {[
//                     'Advanced Cyber Defense',
//                     'Enterprise IT',
//                     'Digital Engineering',
//                     'Data and AI',
//                     'Agile Transformation',
//                   ].map((tag) => (
//                     <span
//                       key={tag}
//                       className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </aside>

//         {/* Article Content */}
//         <article className="order-1 md:order-2">
//           <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">
//             Why real <span className="text-fuchsia-400">– time analytics</span>{' '}
//             is crucial for modern business.
//           </h1>

//           <p className="mt-5 text-[15px] leading-7 text-white/80">
//             In today’s digital-first economy, real-time analytics has become a game-changer for modern
//             businesses. Unlike traditional reporting methods that rely on historical data, real-time
//             analytics delivers instant insights from ongoing operations, enabling leaders to react with agility and
//             precision. This capability is especially vital in industries where conditions change rapidly—such as
//             e-commerce, finance, healthcare, and manufacturing—because even minor delays in decision-making can
//             lead to lost revenue, security risks, or dissatisfied customers. With real-time visibility, companies
//             can monitor customer behaviors as they happen, predict demand fluctuations, optimize resource
//             allocation, and mitigate potential disruptions before they escalate. Beyond operational efficiency, it
//             also fuels innovation by helping businesses experiment, track outcomes immediately, and refine
//             strategies on the go. Ultimately, real-time analytics transforms raw data into actionable intelligence
//             that drives resilience, competitiveness, and sustainable growth in an increasingly dynamic marketplace.
//           </p>

//           <h2 className="mt-10 text-2xl font-extrabold leading-tight md:text-3xl">
//             How AI is <span className="text-indigo-300">Transforming</span> Business
//             Intelligence in the Digital Era
//           </h2>

//           <p className="mt-3 text-[15px] leading-7 text-white/80">
//             AI is revolutionizing how businesses analyze and act on data, enabling smarter decisions and
//             real-time automation. It empowers organizations with deeper insights to stay competitive in the digital era.
//           </p>

//           <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
//             <h3 className="text-lg font-semibold">Enhances Strategic Decision–Making</h3>
//             <ul className="mt-3 space-y-3">
//               <Bullet>AI-powered BI tools can analyze massive datasets quickly, uncovering patterns and trends that are invisible to the human eye.</Bullet>
//             </ul>
//           </section>

//           <Section title="Automates Data Analysis and Reporting">
//             <Bullet>
//               Manual data analysis is time-consuming and prone to error. AI automates this process by cleansing,
//               processing, and visualizing data in real time.
//             </Bullet>
//           </Section>

//           <Section title="Improves Customer Personalization">
//             <Bullet>
//               With AI, businesses can deliver highly personalized experiences by analyzing customer preferences,
//               behaviors, and feedback.
//             </Bullet>
//           </Section>

//           <Section title="Strengthens Predictive and Prescriptive Analytics">
//             <Bullet>
//               This allows businesses to proactively manage risks, optimize inventory, and prevent equipment failures
//               before they occur.
//             </Bullet>
//           </Section>

//           <Section title="Increases Operational Efficiency">
//             <Bullet>
//               AI also powers robotic process automation (RPA), which takes over repetitive tasks, freeing up employees
//               to focus on strategic initiatives.
//             </Bullet>
//           </Section>
//         </article>
//       </main>
//     </div>
//   );
// }

// /* ---------- Small helpers (same file) ---------- */
// function Section({ title, children }) {
//   return (
//     <section className="mt-8">
//       <h3 className="text-base font-semibold">{title}</h3>
//       <ul className="mt-3 space-y-3">{children}</ul>
//     </section>
//   );
// }

// function Bullet({ children }) {
//   return (
//     <li className="flex gap-3 text-[15px] leading-7 text-white/80">
//       <span className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-rose-500" />
//       <span className="grow">{children}</span>
//     </li>
//   );
// }

function SidebarMeta({
  posted = "August 22,2019",
  readTime = "3 Minutes",
  author = "HPIT  Team",
  tags = [
    "Advanced Cyber Defense",
    "Enterprise IT",
    "Digital Engineering",
    "Data and AI",
    "Agile Transformation",
  ],
  onClose,
}) {
  return (
    <aside className="w-full max-w-xs rounded-2xl border border-white/10 bg-gradient-to-b from-[#1a1a1a] to-[#0b0b0b] p-6 text-white/90 shadow-xl">
      {/* Close */}
      <div className="mb-2 flex items-start justify-end">
        <button
          aria-label="Close"
          onClick={onClose}
          className="rounded-full p-1 text-white/60 hover:bg-white/10 hover:text-white transition"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Posted */}
      <Section title="POSTED">
        <p className="mt-1 text-[15px] text-white/80">{posted}</p>
      </Section>

      {/* Read Time */}
      <Divider />
      <Section title="ESTIMATED READ TIME">
        <p className="mt-1 text-[15px] text-white/80">{readTime}</p>
      </Section>

      {/* Author */}
      <Divider />
      <Section title="AUTHOR">
        <p className="mt-1 text-[15px] text-white/80">{author}</p>
      </Section>

      {/* Tags */}
      <Divider />
      <Section title="TAGS">
        <ul className="mt-3 space-y-2">
          {tags.map((t) => (
            <li key={t} className="text-[15px] text-white/90">{t}</li>
          ))}
        </ul>
      </Section>
    </aside>
  );
}

/* helpers */
function Section({ title, children }) {
  return (
    <div className="py-3">
      <h3 className="text-xs tracking-widest text-white/70 font-semibold">{title}</h3>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="my-2 h-px bg-white/15" />;
}


function TagsSection({
  image = bgImg, // you already have bgImg imported
  tags = [
    "Advanced Cyber Defense",
    "Enterprise IT",
    "Digital Engineering",
    "Data and IT",
    "Agile Transformation",
  ],
}) {
  const [active, setActive] = useState(tags[0]);

  return (
    <section
      className="relative w-full py-10 px-6 md:px-10 bg-[#0b0b0f] text-white overflow-hidden"
      
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0f]/95 to-[#0b0b0f]/98" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Tags</h2>

        <div className="flex flex-wrap gap-4">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`rounded-md px-6 py-2 font-semibold text-[15px] transition-all duration-300 
                ${
                  active === tag
                    ? "bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md"
                    : "border border-white/20 bg-transparent text-white/85 hover:border-white/40"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedNewsletter({
  image = bgImg, // you already have bgImg imported in the parent
  onSubscribe,   // optional callback(email)
}) {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full bg-[#0a0a0c] text-white py-10 md:py-14 px-6 md:px-10">
      {/* Title */}
      <h2 className="max-w-6xl mx-auto text-2xl md:text-3xl font-extrabold">
        Featured{" "}
        <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
          Newsletter
        </span>
      </h2>

      {/* Card */}
      <div className="relative max-w-6xl mx-auto mt-6 md:mt-8 rounded-3xl border border-white/10 bg-gradient-to-b from-[#141418] to-[#0b0b0f] p-5 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div
              className="aspect-[16/10] w-full overflow-hidden rounded-2xl"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* subtle dotted decoration */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="h-32 w-1.5 rounded-full bg-white/10" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-4 pr-1">
            <h3 className="text-2xl md:text-4xl font-extrabold leading-tight">
              Stay Ahead with the <br className="hidden md:block" />
              HPIT Edge
            </h3>

            <p className="text-white/80 leading-7 text-[15px]">
              Get the latest updates from HPIT, including expert perspectives,
              technology breakthroughs, and news that keeps you at the forefront
              of digital transformation.
            </p>

            {/* Subscribe */}
            <form
              className="mt-4 flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                onSubscribe?.(email);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="w-full sm:flex-1 rounded-md border border-white/15 bg-black/30 px-4 py-3 text-sm outline-none placeholder-white/50 focus:border-white/40"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-[#e02222] px-6 py-3 text-sm font-semibold hover:brightness-110 active:scale-[.98] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* soft vignette for premium feel */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_160px_rgba(0,0,0,0.35)]" />
      </div>
    </section>
  );
}

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

function InsightFeedbackCard({
  image = bgImg, // <-- you already import bgImg elsewhere; don't import here
  title = "How relevant and useful is this article for you ?",
  insights = [
    "HPIT Technology Trends Outlook 2025",
    "The state of AI: How organizations are rewiring to capture value",
    "Superagency in the workplace: Empowering people to unlock AI’s full potential",
    "What to read next: HPIT 2025 annual book recommendations",
    "Seizing the agentic AI advantage",
    "Edge Computing Tools & Platforms: What Should Businesses Know?",
  ],
  onClose,
  onRate, // optional callback (rating 1-5)
}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const current = hover || rating;

  return (
    <aside className="w-full max-w-sm rounded-2xl border border-white/10 bg-gradient-to-b from-[#1b1b1f] to-[#0b0b0f] p-6 text-white/90 shadow-2xl">
      {/* BG image watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-0 h-40 w-40 translate-x-28 -translate-y-10 rounded-full opacity-[0.08] blur-md"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Close */}
      <div className="mb-3 flex items-start justify-end">
        <button
          aria-label="Close"
          onClick={onClose}
          className="rounded-full p-1 text-white/60 hover:bg-white/10 hover:text-white transition"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Title */}
      <h3 className="text-[17px] font-semibold leading-6 text-white">{title}</h3>

      {/* Stars */}
      <div className="mt-3 flex gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <button
            key={i}
            className="group"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(0)}
            onClick={() => {
              setRating(i);
              onRate?.(i);
            }}
            aria-label={`Rate ${i} star${i > 1 ? "s" : ""}`}
          >
            <Star filled={i <= current} />
          </button>
        ))}
      </div>

      <div className="my-5 h-px bg-white/15" />

      {/* Popular Insights */}
      <h4 className="text-sm font-extrabold tracking-wide text-white/80">
        MOST POPULAR INSIGHTS
      </h4>

      <ol className="mt-3 list-decimal space-y-4 pl-5">
        {insights.map((text, idx) => (
          <li key={idx} className="text-[15px] leading-6 text-white/90">
            {text}
          </li>
        ))}
      </ol>
    </aside>
  );
}

/* --------- Local star icon (no external imports) --------- */
function Star({ filled }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      className={`transition-transform ${filled ? "scale-105" : "scale-100"}`}
    >
      <path
        d="M12 3.5l2.77 5.61 6.2.9-4.49 4.38 1.06 6.17L12 17.9l-5.54 2.9 1.06-6.17-4.49-4.38 6.2-.9L12 3.5z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
        className={filled ? "text-amber-400" : "text-white/55"}
      />
    </svg>
  );
}

export default function P050() {
  return (
    <div className="space-y-3">
      <SidebarMeta />
     {/* <ArticleRealTimeAnalytics/> */}
     <InsightFeedbackCard/>
     <TagsSection/>
     <FeaturedNewsletter/>
      <RelatedInsights/>
      <Resources/>
      <JoinUs/>
    </div>
  );
}
