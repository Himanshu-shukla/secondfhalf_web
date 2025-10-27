// src/App.jsx
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/Footer.jsx";
import PageLoader from "./PageLoader.jsx";
import { useMemo, useState } from "react";

const TOTAL = 170;

function Sidebar() {
  const [q, setQ] = useState("");
  const items = useMemo(() => {
    const nums = Array.from({ length: TOTAL }, (_, i) => i + 1);
    if (!q) return nums;
    const n = Number(q);
    if (!Number.isNaN(n)) {
      return nums.filter((x) => String(x).includes(String(n)));
    }
    return nums;
  }, [q]);

  return (
    <aside className="w-64 shrink-0 border-r border-white/10 h-[calc(100vh-64px)] overflow-y-auto p-3 sticky top-16">
      <div className="mb-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search number…"
          className="w-full rounded-md bg-zinc-900 border border-white/10 px-3 py-2 text-sm outline-none focus:border-white/30"
        />
      </div>
      <ul className="space-y-1">
        {items.map((n) => (
          <li key={n}>
            <Link
              to={`/p/${n}`}
              className="block rounded-md px-3 py-2 text-sm hover:bg-white/10"
            >
              Page {n}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Breadcrumb() {
  const { pathname } = useLocation();
  return (
    <div className="text-xs text-white/60 mb-4">
      {/* {pathname === "/" ? "Home" : `Home ${pathname}`} */}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar
       />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-w-0 p-6">
          <Breadcrumb />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/p/:id" element={<PageLoader />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function Welcome() {
  return (
    <div className="opacity-80">
      <h1 className="text-2xl font-semibold mb-2">UI Navigator</h1>
      <p>Select a page on the left (1–170) or go to <code className="bg-white/10 px-2 py-1 rounded">/p/42</code>.</p>
    </div>
  );
}

function NotFound() {
  return <div className="text-red-300">Route not found.</div>;
}
