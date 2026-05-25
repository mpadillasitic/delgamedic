// DelgaMedic — Header & Footer + small primitives.

const { useState, useEffect, useRef } = React;

/* ---------- Reveal on scroll ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.04 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/* ---------- Header ---------- */
function Header({ page, navigate, onCta }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
  }, [open]);

  const links = [
    { id: "home", label: "Inicio" },
    { id: "tratamientos", label: "Tratamientos" },
    { id: "nosotros", label: "Nosotros" },
    { id: "blog", label: "Recursos" },
    { id: "contacto", label: "Contacto" },
  ];

  const go = (id) => { setOpen(false); navigate(id); };

  return (
    <header className={"site-header " + (scrolled ? "scrolled" : "")}>
      <div className="container nav">
        <a className="brand" onClick={() => go("home")} style={{ cursor: "pointer" }}>
          <span style={{
            width: 38, height: 38, borderRadius: 8, overflow: "hidden",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            background: "#2F4358",
            boxShadow: "0 1px 0 rgba(255,255,255,.4) inset",
          }}>
            <img src="assets/logo.png" alt="DelgaMedic" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </span>
          <span className="brand-name">Delga<span>Medic</span></span>
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <a
              key={l.id}
              className={"nav-link " + (page === l.id ? "active" : "")}
              onClick={() => go(l.id)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a
            className="btn btn-ghost btn-sm header-wa"
            href={window.DM_DATA.clinic.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            style={{ gap: 8 }}
          >
            <Icon.Chat size={16} /> WhatsApp
          </a>
          <button className="btn btn-primary btn-sm" onClick={onCta}>
            Agendar consulta <Icon.Arrow size={16} className="arrow" />
          </button>
          <button
            className="btn-ghost nav-mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
            style={{
              padding: 8,
              borderRadius: 999,
              border: "1px solid var(--line)",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            {open ? <Icon.Close size={18} /> : <Icon.Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: "64px 0 0 0",
            background: "var(--bg)",
            zIndex: 40,
            padding: "32px var(--gutter)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {links.map((l) => (
            <a
              key={l.id}
              onClick={() => go(l.id)}
              style={{
                fontFamily: "var(--serif)",
                fontSize: 32,
                padding: "14px 0",
                borderBottom: "1px solid var(--line-soft)",
                color: page === l.id ? "var(--accent)" : "var(--ink)",
              }}
            >
              {l.label}
            </a>
          ))}
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
            <button className="btn btn-primary" onClick={() => { setOpen(false); onCta(); }}>
              Agendar consulta <Icon.Arrow size={16} className="arrow" />
            </button>
            <a className="btn btn-ghost" href={window.DM_DATA.clinic.whatsappUrl} target="_blank" rel="noreferrer">
              <Icon.Chat size={16} /> Escribir por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Footer ---------- */
function Footer({ navigate, onCta }) {
  const c = window.DM_DATA.clinic;
  return (
    <footer className="footer">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 64,
            borderBottom: "1px solid rgba(255,255,255,.08)",
          }}
          className="footer-grid"
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, color: "#fff", fontFamily: "var(--serif)", fontSize: 28 }}>
              <span style={{
                width: 44, height: 44, borderRadius: 10, overflow: "hidden",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                background: "#2F4358",
              }}>
                <img src="assets/logo.png" alt="DelgaMedic" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </span>
              <span>Delga<i style={{ color: "var(--accent-soft)" }}>Medic</i></span>
            </div>
            <p style={{ marginTop: 16, maxWidth: 360, color: "#B7B0A0", lineHeight: 1.6, fontSize: 14 }}>
              Endocrinología clínica, nutrición y control metabólico en Santa Cruz de la Sierra. Medicina seria, resultados sostenibles.
            </p>
            <button onClick={onCta} className="btn btn-accent btn-sm" style={{ marginTop: 24 }}>
              Agendar consulta <Icon.Arrow size={16} className="arrow" />
            </button>
          </div>

          <FooterCol title="Sitio">
            <a onClick={() => navigate("home")}>Inicio</a>
            <a onClick={() => navigate("tratamientos")}>Tratamientos</a>
            <a onClick={() => navigate("nosotros")}>Nosotros</a>
            <a onClick={() => navigate("blog")}>Recursos</a>
            <a onClick={() => navigate("contacto")}>Contacto</a>
          </FooterCol>

          <FooterCol title="Contacto">
            <a href={"tel:" + c.phone.replace(/\s/g, "")}>{c.phone}</a>
            <a href={c.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp directo</a>
            <a href={"mailto:" + c.email}>{c.email}</a>
            <span>{c.address}</span>
          </FooterCol>

          <FooterCol title="Horarios">
            <span>{c.hours.week}</span>
            <span>{c.hours.sat}</span>
            <span style={{ display: "block", marginTop: 16, fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "#8A8270" }}>
              Síguenos
            </span>
            {c.social.map((s) => <a key={s.label} href={s.url}>{s.label}</a>)}
          </FooterCol>
        </div>

        <div style={{ paddingTop: 28, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, color: "#8A8270", fontSize: 12 }}>
          <span>© {new Date().getFullYear()} DelgaMedic. Todos los derechos reservados.</span>
          <span style={{ display: "flex", gap: 24 }}>
            <a>Aviso legal</a>
            <a>Política de privacidad</a>
            <a>Cookies</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <div style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#8A8270", marginBottom: 16 }}>
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, color: "#D5CFC0" }}>
        {children}
      </div>
    </div>
  );
}

/* ---------- Section primitives ---------- */
function SectionHeader({ eyebrow, title, lede, align = "left", maxLede = 60 }) {
  return (
    <div style={{ textAlign: align, display: "flex", flexDirection: "column", alignItems: align === "center" ? "center" : "flex-start", gap: 18 }} className="reveal">
      {eyebrow && <span className={"eyebrow" + (align === "center" ? " no-rule" : "")}>{eyebrow}</span>}
      <h2 className="h1" style={{ margin: 0, maxWidth: 18 + "ch" }} dangerouslySetInnerHTML={{ __html: title }} />
      {lede && <p className="lede" style={{ margin: 0, maxWidth: maxLede + "ch" }}>{lede}</p>}
    </div>
  );
}

/* ---------- Booking modal ---------- */
function BookingModal({ open, onClose, preselect }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ name: "", phone: "", email: "", reason: preselect || "", date: "", time: "" });

  useEffect(() => {
    if (open) { setStep(1); setData((d) => ({ ...d, reason: preselect || d.reason })); }
  }, [open, preselect]);

  if (!open) return null;

  const slots = ["09:00", "10:30", "12:00", "15:00", "16:30", "17:30"];
  const reasons = window.DM_DATA.treatments.map((t) => t.name);

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(31,31,31,.5)",
        backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: 720,
          background: "var(--bg)",
          borderRadius: "var(--radius-xl)",
          overflow: "hidden",
          boxShadow: "var(--shadow-lg)",
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) 220px",
        }}
      >
        <div style={{ padding: "40px 40px 36px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
            <span className="eyebrow">Paso {step} de 3</span>
            <button onClick={onClose} aria-label="Cerrar" style={{ background: "transparent", border: 0, cursor: "pointer", color: "var(--ink-mute)" }}>
              <Icon.Close size={20} />
            </button>
          </div>

          {step === 1 && (
            <>
              <h3 className="h2" style={{ margin: "0 0 8px" }}>Agenda tu consulta</h3>
              <p className="lede" style={{ margin: "0 0 28px" }}>Comienza por contarnos un poco sobre ti.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div className="field"><label>Nombre completo</label><input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} /></div>
                <div className="field"><label>Teléfono</label><input value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} placeholder="+591 ..." /></div>
                <div className="field" style={{ gridColumn: "1/-1" }}><label>Correo electrónico</label><input value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} /></div>
                <div className="field" style={{ gridColumn: "1/-1" }}>
                  <label>Motivo de consulta</label>
                  <select value={data.reason} onChange={(e) => setData({ ...data, reason: e.target.value })}>
                    <option value="">Selecciona un programa</option>
                    {reasons.map((r) => <option key={r}>{r}</option>)}
                    <option>Aún no estoy seguro/a</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="h2" style={{ margin: "0 0 8px" }}>Elige fecha y hora</h3>
              <p className="lede" style={{ margin: "0 0 28px" }}>Estos horarios son referenciales. Te confirmaremos por WhatsApp.</p>
              <div className="field" style={{ marginBottom: 24 }}>
                <label>Fecha preferida</label>
                <input type="date" value={data.date} onChange={(e) => setData({ ...data, date: e.target.value })} />
              </div>
              <div className="field">
                <label>Hora</label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                  {slots.map((s) => (
                    <button
                      key={s}
                      onClick={() => setData({ ...data, time: s })}
                      style={{
                        padding: "12px 0",
                        borderRadius: "var(--radius)",
                        border: "1px solid " + (data.time === s ? "var(--accent)" : "var(--line)"),
                        background: data.time === s ? "var(--accent)" : "var(--bg)",
                        color: data.time === s ? "#fff" : "var(--ink)",
                        cursor: "pointer",
                        fontFamily: "var(--sans)",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h3 className="h2" style={{ margin: "0 0 8px" }}>¡Casi listo, {data.name.split(" ")[0] || "tú"}!</h3>
              <p className="lede" style={{ margin: "0 0 24px" }}>Revisa los datos. Te contactaremos en menos de 2 horas hábiles para confirmar.</p>
              <div style={{ display: "grid", gap: 14, padding: 24, background: "var(--bg-warm)", borderRadius: "var(--radius-lg)", fontSize: 14 }}>
                <Row k="Paciente" v={data.name || "—"} />
                <Row k="Contacto" v={[data.phone, data.email].filter(Boolean).join(" · ") || "—"} />
                <Row k="Motivo" v={data.reason || "Por definir"} />
                <Row k="Fecha y hora" v={[data.date, data.time].filter(Boolean).join(" · ") || "Por confirmar"} />
              </div>
            </>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 32 }}>
            <button
              className="btn-link"
              onClick={() => (step > 1 ? setStep(step - 1) : onClose())}
              style={{ cursor: "pointer" }}
            >
              {step > 1 ? "Atrás" : "Cancelar"}
            </button>
            <button
              className="btn btn-primary"
              onClick={() => (step < 3 ? setStep(step + 1) : onClose())}
            >
              {step < 3 ? "Continuar" : "Confirmar solicitud"} <Icon.Arrow size={16} className="arrow" />
            </button>
          </div>
        </div>

        <aside style={{
          background: "linear-gradient(180deg, #2F4358 0%, #1F2D3D 100%)",
          color: "#E8EEF5",
          padding: "40px 28px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 24,
        }}>
          <div>
            <span className="eyebrow no-rule" style={{ color: "var(--accent-soft)" }}>DelgaMedic</span>
            <h4 className="serif" style={{ fontSize: 26, margin: "12px 0 14px", lineHeight: 1.15, color: "#fff" }}>
              Tu primera consulta es el inicio de un acompañamiento real.
            </h4>
            <p style={{ fontSize: 13.5, color: "#B7C2D2", lineHeight: 1.55, margin: 0 }}>
              Evaluación médica integral, antropometría avanzada y plan personalizado.
            </p>
          </div>
          <div style={{ fontSize: 13, color: "#B7C2D2", borderTop: "1px solid rgba(255,255,255,.12)", paddingTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}><Icon.Clock size={16} /> 60 min · evaluación</div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}><Icon.Pin size={16} /> Zona Equipetrol, SCZ</div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}><Icon.Phone size={16} /> {window.DM_DATA.clinic.phone}</div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Row({ k, v }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 24 }}>
      <span style={{ color: "var(--ink-mute)", letterSpacing: ".04em", textTransform: "uppercase", fontSize: 11, fontWeight: 500 }}>{k}</span>
      <span style={{ color: "var(--ink)", fontWeight: 500, textAlign: "right" }}>{v}</span>
    </div>
  );
}

Object.assign(window, { Header, Footer, SectionHeader, BookingModal, useReveal });
