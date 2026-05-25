// DelgaMedic — Main app + routing + Tweaks.

const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "split",
  "accent": "#4A607A",
  "showQuiz": true,
  "showBlog": true,
  "showCredentials": true,
  "processStyle": "dark"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = ["#4A607A", "#2F4358", "#6E7F6B", "#B08A52"];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useStateApp(() => parseHash());
  const [booking, setBooking] = useStateApp(false);
  const [bookingReason, setBookingReason] = useStateApp("");

  useReveal();

  // Live accent application
  useEffectApp(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
    // derive a darker tone
    const deep = darken(t.accent, 0.22);
    document.documentElement.style.setProperty("--accent-deep", deep);
  }, [t.accent]);

  // Hash routing
  useEffectApp(() => {
    const onHash = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = (page, slug) => {
    const h = slug ? `#/${page}/${slug}` : `#/${page}`;
    if (window.location.hash !== h) window.location.hash = h;
    else { window.scrollTo({ top: 0 }); }
  };
  const openTreatment = (slug) => navigate("tratamientos", slug);
  const openBooking = (reason) => { setBookingReason(reason || ""); setBooking(true); };

  // Determine page label for header active state
  const activePage = route.page === "tratamientos" && route.slug ? "tratamientos" : route.page;

  return (
    <>
      <Header page={activePage} navigate={navigate} onCta={() => openBooking()} />

      <main>
        {route.page === "home" && (
          <>
            <Hero variant={t.heroVariant} onCta={() => openBooking()} navigate={navigate} />
            {t.showCredentials && <CredentialsBar />}
            <Specialists />
            <FeaturedTreatments navigate={navigate} onTreatment={openTreatment} />
            <Benefits />
            <Process />
            {t.showQuiz && <HealthQuiz onCta={() => openBooking()} />}
            <Testimonials />
            {t.showBlog && <BlogTeaser navigate={navigate} />}
            <FinalCTA onCta={() => openBooking()} />
          </>
        )}
        {route.page === "tratamientos" && !route.slug && (
          <TreatmentsPage navigate={navigate} onCta={() => openBooking()} onTreatment={openTreatment} />
        )}
        {route.page === "tratamientos" && route.slug && (
          <TreatmentDetailPage slug={route.slug} navigate={navigate} onCta={(reason) => openBooking(reason)} onTreatment={openTreatment} />
        )}
        {route.page === "nosotros" && <AboutPage navigate={navigate} onCta={() => openBooking()} />}
        {route.page === "contacto" && <ContactPage onCta={() => openBooking()} />}
        {route.page === "blog" && <BlogPage navigate={navigate} onCta={() => openBooking()} />}
      </main>

      <Footer navigate={navigate} onCta={() => openBooking()} />

      {/* Floating WhatsApp */}
      <a
        href={window.DM_DATA.clinic.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        style={{
          position: "fixed", right: 22, bottom: 22, zIndex: 60,
          width: 56, height: 56, borderRadius: 999,
          background: "#25D366", color: "#fff",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 16px 40px -12px rgba(37,211,102,.6), 0 4px 12px rgba(0,0,0,.12)",
          transition: "transform .25s ease",
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.06)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        <Icon.Chat size={26} />
      </a>

      <BookingModal open={booking} onClose={() => setBooking(false)} preselect={bookingReason} />

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio
          label="Variante"
          value={t.heroVariant}
          options={["split", "centered", "editorial"]}
          onChange={(v) => setTweak("heroVariant", v)}
        />
        <TweakSection label="Acento" />
        <TweakColor
          label="Color"
          value={t.accent}
          options={ACCENT_OPTIONS}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakSection label="Secciones de la Home" />
        <TweakToggle label="Bar de credenciales" value={t.showCredentials} onChange={(v) => setTweak("showCredentials", v)} />
        <TweakToggle label="Pre-evaluación / Quiz"  value={t.showQuiz}        onChange={(v) => setTweak("showQuiz", v)} />
        <TweakToggle label="Recursos / Blog"        value={t.showBlog}        onChange={(v) => setTweak("showBlog", v)} />
      </TweaksPanel>
    </>
  );
}

function parseHash() {
  const h = (window.location.hash || "").replace(/^#\/?/, "");
  if (!h) return { page: "home" };
  const [page, slug] = h.split("/");
  return { page: page || "home", slug: slug || "" };
}

function darken(hex, amt) {
  const c = hex.replace("#", "");
  const num = parseInt(c, 16);
  let r = (num >> 16), g = ((num >> 8) & 0xff), b = (num & 0xff);
  r = Math.max(0, Math.round(r * (1 - amt)));
  g = Math.max(0, Math.round(g * (1 - amt)));
  b = Math.max(0, Math.round(b * (1 - amt)));
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
