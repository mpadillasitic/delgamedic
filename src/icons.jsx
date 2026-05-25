// DelgaMedic — Icon set (lucide-style hairline SVG)
// Single source so every icon shares stroke/feel.

const I = ({ children, size = 22, stroke = 1.5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const Icon = {
  Arrow: (p) => <I {...p}><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></I>,
  ArrowUp: (p) => <I {...p}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></I>,
  Plus: (p) => <I {...p}><path d="M12 5v14" /><path d="M5 12h14" /></I>,
  Minus: (p) => <I {...p}><path d="M5 12h14" /></I>,
  Check: (p) => <I {...p}><path d="M20 6 9 17l-5-5" /></I>,
  Stethoscope: (p) => <I {...p}><path d="M11 2v6a4 4 0 0 1-8 0V2" /><path d="M7 12v3a6 6 0 0 0 6 6h0a6 6 0 0 0 6-6v-1" /><circle cx="20" cy="10" r="2" /></I>,
  Flask: (p) => <I {...p}><path d="M9 2h6" /><path d="M10 2v6L4 18a3 3 0 0 0 2.6 4.5h10.8A3 3 0 0 0 20 18L14 8V2" /><path d="M6.5 14h11" /></I>,
  Award: (p) => <I {...p}><circle cx="12" cy="9" r="6" /><path d="M9 14.7 7.5 22l4.5-3 4.5 3-1.5-7.3" /></I>,
  Calendar: (p) => <I {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4" /><path d="M16 3v4" /><path d="M3 11h18" /></I>,
  Heart: (p) => <I {...p}><path d="M20.8 6.6a5.5 5.5 0 0 0-9-1.6L12 5l-.2-.2a5.5 5.5 0 0 0-9 7L12 21l9-8.6a5.5 5.5 0 0 0 .2-5.8z" /></I>,
  Leaf: (p) => <I {...p}><path d="M11 20A7 7 0 0 1 4 13c0-3.5 2.5-7 11-10 .5 6-1 11.5-4 14a7 7 0 0 1-7 7" /><path d="M2 22 15 9" /></I>,
  Star: (p) => <I {...p}><path d="M12 3l2.6 5.3 5.9.9-4.3 4.2 1 5.9L12 16.5l-5.3 2.8 1-5.9L3.5 9.2l5.9-.9z" /></I>,
  Quote: (p) => <I {...p}><path d="M7 7v4a4 4 0 0 1-4 4M7 7h4v8H3" /><path d="M17 7v4a4 4 0 0 1-4 4M17 7h4v8h-8" /></I>,
  Phone: (p) => <I {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z" /></I>,
  Mail: (p) => <I {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></I>,
  Pin: (p) => <I {...p}><path d="M12 22s-7-7.5-7-13a7 7 0 0 1 14 0c0 5.5-7 13-7 13z" /><circle cx="12" cy="9" r="2.5" /></I>,
  Clock: (p) => <I {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></I>,
  Chat: (p) => <I {...p}><path d="M21 11a8 8 0 0 1-8 8H8l-5 3v-9a8 8 0 0 1 8-8h2a8 8 0 0 1 8 6z" /></I>,
  Menu: (p) => <I {...p}><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></I>,
  Close: (p) => <I {...p}><path d="M6 6l12 12" /><path d="M18 6 6 18" /></I>,
  Search: (p) => <I {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></I>,
  Sparkle: (p) => <I {...p}><path d="M12 3v6" /><path d="M12 15v6" /><path d="M3 12h6" /><path d="M15 12h6" /><path d="m6 6 3 3" /><path d="m15 15 3 3" /><path d="m6 18 3-3" /><path d="m15 9 3-3" /></I>,
  Logo: (p) => (
    <I {...p} stroke={1.4}>
      <circle cx="12" cy="12" r="10" />
      <path d="M7.5 12s2-3 4.5-3 4.5 3 4.5 3-2 3-4.5 3-4.5-3-4.5-3z" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </I>
  ),
};

window.Icon = Icon;
