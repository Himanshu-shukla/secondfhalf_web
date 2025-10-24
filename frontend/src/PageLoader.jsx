// src/PageLoader.jsx
import { useParams } from "react-router-dom";
import { Suspense, lazy, useMemo } from "react";

const TOTAL = 170;

// Create a glob map of all pages that exist.
// Your files should be named P001.jsx, P002.jsx, ... P170.jsx
// Example path: src/pages/P001.jsx
const pages = import.meta.glob("./pages/P*.jsx");

// Helper: pad number -> P001, P042, etc.
function toCode(n) {
  return `P${String(n).padStart(3, "0")}`;
}

export default function PageLoader() {
  const { id } = useParams();
  const num = Number(id);

  const LazyComp = useMemo(() => {
    if (!Number.isInteger(num) || num < 1 || num > TOTAL) {
      return () => <ErrorBox msg={`Invalid page id: ${id}`} />;
    }
    const code = toCode(num); // e.g., P042
    const path = `./pages/${code}.jsx`;
    const importer = pages[path];
    if (!importer) {
      // File not present; show stub but keep the route working
      return () => <ComingSoon n={num} code={code} />;
    }
    return lazy(importer);
  }, [id, num]);

  return (
    <Suspense fallback={<div className="text-white/70">Loading page…</div>}>
      <LazyComp />
    </Suspense>
  );
}

function ComingSoon({ n, code }) {
  return (
    <div className="rounded-lg border border-white/10 p-6">
      <h2 className="text-xl font-semibold mb-2">Page {n} ({code})</h2>
      <p className="text-white/70">
        Component file <code className="bg-white/10 px-2 py-1 rounded">src/pages/{code}.jsx</code> not found.
        Add it to render this screen.
      </p>
    </div>
  );
}

function ErrorBox({ msg }) {
  return (
    <div className="text-red-300">
      {msg}
    </div>
  );
}
