import bgImg from "../assets/1_1.png";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useMemo, useRef, useState } from "react";

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

function InsightsSearchFilters() {
  const tabs = useMemo(
    () => [
      "All",
      "Article",
      "Blog",
      "Case Study",
      "In The News",
      "Press Release",
      "Research Report",
      "Success Story",
      "Podcast",
    ],
    []
  );

  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  // underline indicator
  const barRef = useRef(null);
  const tabsRef = useRef([]);
  const wrapRef = useRef(null);

  const moveIndicator = () => {
    const el = tabsRef.current[active];
    const wrap = wrapRef.current;
    const bar = barRef.current;
    if (!el || !wrap || !bar) return;

    const wrapRect = wrap.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    const left = rect.left - wrapRect.left;
    bar.style.width = rect.width + "px";
    bar.style.transform = `translateX(${left}px)`;
  };

  useEffect(() => {
    moveIndicator();
    window.addEventListener("resize", moveIndicator);
    return () => window.removeEventListener("resize", moveIndicator);
    // eslint-disable-next-line
  }, [active]);

  // accordion-like filter sections
  const [open, setOpen] = useState({
    content: true,
    industry: false,
    topic: false,
    people: false,
  });

  const contentChips = [
    "Article",
    "Blog",
    "Case Study",
    "In The News",
    "Press Release",
    "Research Report",
    "Success Story",
    "Podcast",
  ];
  const [selected, setSelected] = useState(new Set());

  const toggleChip = (label) => {
    const nxt = new Set(selected);
    nxt.has(label) ? nxt.delete(label) : nxt.add(label);
    setSelected(nxt);
  };

  const clearAll = () => setSelected(new Set());

  return (
    <section
      className="w-full bg-[#0a0a0c] text-white px-6 md:px-10 py-8"
     
    >
      <div className="mx-auto max-w-6xl">
        {/* Search */}
        <div className="relative">
          <div className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3.5 ring-1 ring-white/10 backdrop-blur">
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-white/60">
              <path d="M21 21l-4.2-4.2M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round"/>
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Our Insights"
              className="w-full bg-transparent text-[15px] placeholder-white/60 focus:outline-none"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="relative mt-5">
          <div ref={wrapRef} className="relative flex flex-wrap items-center gap-6 overflow-x-auto pb-2">
            {tabs.map((t, i) => (
              <button
                key={t}
                ref={(el) => (tabsRef.current[i] = el)}
                onClick={() => setActive(i)}
                className={`whitespace-nowrap pb-2 text-sm transition-colors ${
                  i === active ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
            {/* underline indicator */}
            <span
              ref={barRef}
              className="pointer-events-none absolute bottom-0 h-[3px] rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 transition-transform duration-300"
              style={{ width: 0, transform: "translateX(0px)" }}
            />
          </div>
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* Filter bars */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-px rounded-md border border-white/10 bg-white/10">
          <FilterBar
            title="Content Type"
            open={open.content}
            onToggle={() => setOpen((s) => ({ ...s, content: !s.content }))}
            minus
          />
          <FilterBar
            title="Industry"
            open={open.industry}
            onToggle={() => setOpen((s) => ({ ...s, industry: !s.industry }))}
          />
          <FilterBar
            title="Topic"
            open={open.topic}
            onToggle={() => setOpen((s) => ({ ...s, topic: !s.topic }))}
          />
          <FilterBar
            title="People & Partners"
            open={open.people}
            onToggle={() => setOpen((s) => ({ ...s, people: !s.people }))}
          />
        </div>

        {/* Chips */}
        <div className="mt-5 flex flex-wrap gap-3">
          {contentChips.map((c) => {
            const isActive = selected.has(c);
            return (
              <button
                key={c}
                onClick={() => toggleChip(c)}
                className={`rounded-md border px-4 py-2 text-sm transition-all ${
                  isActive
                    ? "border-transparent bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow"
                    : "border-white/20 bg-transparent text-white/85 hover:border-white/40"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-end gap-6">
          <button
            onClick={clearAll}
            className="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
          >
            Clear All
          </button>

          <button
            onClick={() =>
              onSearch?.({
                query,
                activeTab: tabs[active],
                chips: Array.from(selected),
              })
            }
            className="group inline-flex items-center gap-3 text-sm font-medium"
          >
            <span className="text-white/80">Show Result</span>
            <span className="relative inline-flex h-9 w-9 items-center justify-center">
              <span className="absolute inset-0 rounded-full border border-red-400/60 group-hover:border-red-400 transition-colors" />
              <span className="absolute -inset-1 rounded-full ring-1 ring-red-500/20" />
              <svg width="18" height="18" viewBox="0 0 24 24" className="text-red-500">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ----------------- Small subcomponents ----------------- */
function FilterBar({ title, open, onToggle, minus = false }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center justify-between bg-[#0f0f13] px-5 py-4 text-left"
    >
      <span className="text-[15px] font-semibold text-white/90">{title}</span>
      <span className="text-white/70">
        {/* plus / minus icon */}
        {open || minus ? (
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </span>
    </button>
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

export default function P060() {
  return (
    <div className="space-y-3">
<InsightsSearchFilters
  onSearch={(payload) => console.log("search", payload)}
/>
      <RelatedInsights/>
      <Resources/>
      <JoinUs/>
    </div>
  );
}
