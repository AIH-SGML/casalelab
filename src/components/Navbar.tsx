import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/people", label: "People" },
  { to: "/software", label: "Software" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between h-14">
        <div
          className="font-heading text-lg font-semibold text-slate-100 flex items-center gap-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <img src="/icon-light.png" alt="Casale Lab icon" className="w-7 h-7 object-contain shrink-0" />
          <span className="text-slate-100">Casale Lab</span>
        </div>
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm transition-colors ${
                pathname === l.to ? "text-slate-100 font-medium" : "text-slate-400 hover:text-slate-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-100" aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black px-6 py-3 flex flex-col gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`text-sm py-1 ${
                pathname === l.to ? "text-slate-100 font-medium" : "text-slate-400"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
