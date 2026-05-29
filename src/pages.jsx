// DelgaMedic — Inner pages: Treatments list, Treatment detail, About, Contact, Blog.
import React, { useState as useStateP, useMemo } from 'react'
import { Icon } from './icons.jsx'
import { FinalCTA, Specialists, CredentialsBar } from './sections-home.jsx'

/* ============================================================
   TREATMENTS LIST  /tratamientos
   ============================================================ */
function TreatmentsPage({ navigate, onCta, onTreatment }) {
  const all = window.DM_DATA.treatments;
  const cats = useMemo(() => ["Todos", ...Array.from(new Set(all.map((t) => t.category)))], [all]);
  const [cat, setCat] = useStateP("Todos");
  const filtered = cat === "Todos" ? all : all.filter((t) => t.category === cat);

  return (
    <>
      <PageHero
        eyebrow="Tratamientos"
        title="Programas médicos <em>integrales</em>"
        lede="Construimos cada plan a partir de tu historia clínica y objetivos. Conoce nuestros programas y elige por dónde empezar —siempre con orientación médica."
        rightImg="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80"
      />

      <section style={{ background: "var(--bg)", paddingBottom: 24, borderTop: "1px solid var(--line-soft)" }}>
        <div className="container" style={{ padding: "28px 0", display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                style={{
                  padding: "10px 18px",
                  borderRadius: 999,
                  border: "1px solid " + (cat === c ? "var(--ink)" : "var(--line)"),
                  background: cat === c ? "var(--ink)" : "transparent",
                  color: cat === c ? "var(--bg)" : "var(--ink-soft)",
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all .2s ease",
                }}
              >
                {c}
              </button>
            ))}
          </div>
          <span style={{ fontSize: 13, color: "var(--ink-mute)" }}>{filtered.length} programas</span>
        </div>
      </section>

      <section style={{ background: "var(--bg)", paddingBottom: 96 }}>
        <div className="container treatments-page-grid">
          {filtered.map((t, i) => (
            <article
              key={t.id}
              className={"reveal reveal-delay-" + (Math.min(i + 1, 4))}
              onClick={() => onTreatment(t.slug)}
              style={{
                background: "var(--bg)",
                border: "1px solid var(--line-soft)",
                borderRadius: 18,
                overflow: "hidden",
                cursor: "pointer",
                display: "flex", flexDirection: "column",
                transition: "all .3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line-soft)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="img" style={{ aspectRatio: "5/4" }}>
                <img src={t.img} alt={t.name} />
              </div>
              <div style={{ padding: 26, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                <span className="eyebrow no-rule" style={{ color: "var(--accent)" }}>{t.category}</span>
                <h3 className="serif" style={{ fontSize: 24, margin: 0, lineHeight: 1.18, letterSpacing: "-0.012em" }}>{t.name}</h3>
                <p style={{ margin: 0, color: "var(--ink-soft)", fontSize: 14.5, lineHeight: 1.55 }}>{t.short}</p>
                <div style={{ marginTop: "auto", paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13 }}>
                  <span style={{ color: "var(--ink-mute)" }}>{t.duration}</span>
                  <span style={{ color: "var(--accent)", fontWeight: 500 }}>Ver detalle →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalCTA onCta={onCta} />
    </>
  );
}

/* ============================================================
   TREATMENT DETAIL  /tratamientos/:slug
   ============================================================ */
function TreatmentDetailPage({ slug, navigate, onCta, onTreatment }) {
  const t = window.DM_DATA.treatments.find((x) => x.slug === slug) || window.DM_DATA.treatments[0];
  const related = window.DM_DATA.treatments.filter((x) => x.slug !== t.slug).slice(0, 3);
  const [open, setOpen] = useStateP(0);

  return (
    <>
      <section style={{ background: "var(--bg)", paddingTop: 32 }}>
        <div className="container">
          <nav style={{ fontSize: 13, color: "var(--ink-mute)", marginBottom: 28, display: "flex", gap: 10, alignItems: "center" }}>
            <a onClick={() => navigate("home")} style={{ cursor: "pointer" }}>Inicio</a>
            <span>/</span>
            <a onClick={() => navigate("tratamientos")} style={{ cursor: "pointer" }}>Tratamientos</a>
            <span>/</span>
            <span style={{ color: "var(--ink)" }}>{t.name}</span>
          </nav>

          <div className="treatment-hero-grid">
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <span className="eyebrow">{t.eyebrow}</span>
              <h1 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>{t.name}</h1>
              <p className="lede">{t.short}</p>
              <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
                <span className="pill"><Icon.Clock size={14} /> {t.duration}</span>
                <span className="pill pill-dot">Aceptando pacientes nuevos</span>
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
                <button className="btn btn-primary btn-lg" onClick={onCta}>Agendar consulta <Icon.Arrow size={16} className="arrow" /></button>
                <a className="btn btn-ghost btn-lg" href={window.DM_DATA.clinic.whatsappUrl} target="_blank" rel="noreferrer"><Icon.Chat size={16} /> Consultar por WhatsApp</a>
              </div>
            </div>
            <div className="reveal reveal-delay-1 img" style={{ aspectRatio: "4/5", borderRadius: 18 }}>
              <img src={t.img} alt={t.name} />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-warm)" }}>
        <div className="container treatment-detail-grid">
          <div className="reveal" style={{ position: "sticky", top: 120, alignSelf: "start" }}>
            <span className="eyebrow">En qué consiste</span>
            <h2 className="h2" style={{ margin: "16px 0 16px" }}>
              Un programa pensado para <em>resultados que duren</em>
            </h2>
            <p style={{ color: "var(--ink-soft)", lineHeight: 1.65 }}>
              Combinamos evaluación médica, diagnóstico personalizado y un plan adaptado a tu vida real. Sin atajos. Sin promesas que la ciencia no respalda.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <div className="reveal">
              <h3 className="serif" style={{ fontSize: 22, margin: "0 0 20px" }}>Beneficios clínicos</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14 }}>
                {t.benefits.map((b) => (
                  <li key={b} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 14, padding: "16px 0", borderTop: "1px solid var(--line)", fontSize: 16 }}>
                    <span style={{ color: "var(--accent)" }}><Icon.Check size={20} /></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal">
              <h3 className="serif" style={{ fontSize: 22, margin: "0 0 20px" }}>¿Para quién es este programa?</h3>
              <div className="treatment-tags-grid">
                {t.who.map((w) => (
                  <div key={w} style={{ background: "var(--bg)", padding: 20, borderRadius: 12, fontSize: 14, lineHeight: 1.45, border: "1px solid var(--line-soft)" }}>
                    {w}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process inline (compressed) */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: 56 }}>
            <span className="eyebrow">El proceso</span>
            <h2 className="h2" style={{ margin: "16px 0 0" }}>Cómo trabajamos contigo</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24 }}>
            {window.DM_DATA.process.map((p, i) => (
              <div key={p.n} className={"reveal reveal-delay-" + (Math.min(i + 1, 4))} style={{ borderTop: "1px solid var(--ink)", paddingTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent)", fontSize: 18 }}>{p.n}</span>
                <h4 className="serif" style={{ fontSize: 18, margin: 0, lineHeight: 1.25 }}>{p.title}</h4>
                <p style={{ fontSize: 13.5, color: "var(--ink-soft)", margin: 0, lineHeight: 1.55 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--line-soft)" }}>
        <div className="container about-hero-grid">
          <div className="reveal">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="h2" style={{ margin: "16px 0 16px" }}>Respondemos lo que <em>te preocupa</em></h2>
            <p style={{ color: "var(--ink-soft)", lineHeight: 1.6 }}>¿No encuentras tu pregunta? Escríbenos por WhatsApp y un especialista te responderá personalmente.</p>
          </div>
          <div className="reveal reveal-delay-1">
            {t.faqs.map((f, i) => (
              <div key={i} style={{ borderTop: "1px solid var(--line)", borderBottom: i === t.faqs.length - 1 ? "1px solid var(--line)" : "none" }}>
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  style={{
                    width: "100%", textAlign: "left", padding: "24px 0",
                    background: "transparent", border: 0, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
                    fontFamily: "var(--serif)", fontSize: 22, color: "var(--ink)",
                  }}
                >
                  <span>{f.q}</span>
                  <span style={{ color: "var(--accent)", flexShrink: 0 }}>
                    {open === i ? <Icon.Minus size={20} /> : <Icon.Plus size={20} />}
                  </span>
                </button>
                {open === i && (
                  <div style={{ paddingBottom: 24, color: "var(--ink-soft)", maxWidth: "60ch", lineHeight: 1.6 }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section" style={{ background: "var(--bg-warm)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <h2 className="h2 reveal" style={{ margin: 0 }}>Otros programas que <em>podrían interesarte</em></h2>
            <button className="btn-link reveal" onClick={() => navigate("tratamientos")}>Ver todos los tratamientos →</button>
          </div>
          <div className="about-team-grid">
            {related.map((r, i) => (
              <article key={r.id} onClick={() => onTreatment(r.slug)} className={"reveal reveal-delay-" + (i + 1)}
                style={{ background: "var(--bg)", borderRadius: 16, overflow: "hidden", cursor: "pointer", border: "1px solid var(--line-soft)" }}>
                <div className="img" style={{ aspectRatio: "5/4" }}>
                  <img src={r.img} alt={r.name} />
                </div>
                <div style={{ padding: 24 }}>
                  <h4 className="serif" style={{ fontSize: 20, margin: "0 0 8px" }}>{r.name}</h4>
                  <p style={{ margin: 0, fontSize: 14, color: "var(--ink-soft)" }}>{r.short}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA onCta={onCta} />
    </>
  );
}

/* ============================================================
   ABOUT  /nosotros
   ============================================================ */
function AboutPage({ navigate, onCta }) {
  const a = window.DM_DATA.about;
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Medicina seria,<br/><em>acompañamiento humano</em>"
        lede="Somos un equipo médico que combina rigor científico, calidez en el trato y un compromiso real con la salud de cada paciente."
        rightImg="https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Historia */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container about-values-grid">
          <div className="reveal">
            <span className="eyebrow">Nuestra historia</span>
            <h2 className="h2" style={{ margin: "16px 0 0" }}>Cómo nació <em>DelgaMedic</em></h2>
          </div>
          <p className="lede reveal reveal-delay-1" style={{ margin: 0 }}>{a.historia}</p>
        </div>
      </section>

      {/* Misión / Visión */}
      <section className="section" style={{ background: "var(--bg-warm)" }}>
        <div className="container about-faq-grid">
          <div className="reveal" style={{ background: "var(--bg)", borderRadius: 18, padding: 40, border: "1px solid var(--line-soft)" }}>
            <span className="eyebrow no-rule">Misión</span>
            <p className="serif" style={{ fontSize: 26, margin: "20px 0 0", lineHeight: 1.35, letterSpacing: "-0.012em" }}>{a.mision}</p>
          </div>
          <div className="reveal reveal-delay-1" style={{ background: "var(--accent-deep)", color: "#E8EEF5", borderRadius: 18, padding: 40 }}>
            <span className="eyebrow no-rule" style={{ color: "var(--accent-soft)" }}>Visión</span>
            <p className="serif" style={{ fontSize: 26, margin: "20px 0 0", color: "#fff", lineHeight: 1.35, letterSpacing: "-0.012em" }}>{a.vision}</p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, marginBottom: 56 }}>
            <div className="reveal">
              <span className="eyebrow">Lo que nos mueve</span>
              <h2 className="h2" style={{ margin: "16px 0 0" }}>Nuestros <em>valores</em></h2>
            </div>
            <p className="lede reveal reveal-delay-1" style={{ margin: 0 }}>
              Cuatro principios guían cada consulta, cada plan y cada decisión clínica que tomamos.
            </p>
          </div>
          <div className="about-values-items">
            {a.valores.map((v, i) => (
              <div key={v.title} className={"reveal reveal-delay-" + (i + 1)} style={{
                padding: "36px 28px 36px 0",
                paddingLeft: i === 0 ? 0 : 28,
                borderRight: i < 3 ? "1px solid var(--line)" : "none",
                display: "flex", flexDirection: "column", gap: 12,
              }}>
                <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent)", fontSize: 22 }}>0{i + 1}</span>
                <h4 className="serif" style={{ fontSize: 22, margin: 0 }}>{v.title}</h4>
                <p style={{ color: "var(--ink-soft)", margin: 0, fontSize: 14.5, lineHeight: 1.55 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Specialists />
      <CredentialsBar />
      <FinalCTA onCta={onCta} />
    </>
  );
}

/* ============================================================
   CONTACT  /contacto
   ============================================================ */
function ContactPage({ onCta }) {
  const c = window.DM_DATA.clinic;
  const [sent, setSent] = useStateP(false);

  return (
    <>
      <section style={{ background: "var(--bg)", paddingTop: 56, paddingBottom: 24 }}>
        <div className="container reveal">
          <span className="eyebrow">Contacto</span>
          <h1 className="display" style={{ fontSize: "clamp(48px, 6vw, 88px)", margin: "20px 0 12px" }}>Conversemos sobre <em>tu salud</em></h1>
          <p className="lede">Reserva tu consulta, escríbenos por WhatsApp o visita nuestra clínica en Zona Equipetrol.</p>
        </div>
      </section>

      <section style={{ background: "var(--bg)", paddingBottom: 96 }}>
        <div className="container contact-grid">
          <form
            className="reveal"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            style={{
              background: "var(--bg-warm)",
              padding: 40,
              borderRadius: 20,
              display: "flex", flexDirection: "column", gap: 18,
            }}
          >
            {!sent && (
              <>
                <h3 className="h3" style={{ margin: "0 0 4px" }}>Envíanos un mensaje</h3>
                <p style={{ margin: "0 0 12px", color: "var(--ink-soft)", fontSize: 14 }}>Te respondemos en menos de 2 horas hábiles.</p>
                <div className="form-row">
                  <div className="field"><label>Nombre</label><input required /></div>
                  <div className="field"><label>Apellido</label><input required /></div>
                </div>
                <div className="form-row">
                  <div className="field"><label>Correo</label><input type="email" required /></div>
                  <div className="field"><label>Teléfono</label><input placeholder="+591 ..." /></div>
                </div>
                <div className="field">
                  <label>Motivo de consulta</label>
                  <select>
                    <option>Selecciona un programa</option>
                    {window.DM_DATA.treatments.map((t) => <option key={t.id}>{t.name}</option>)}
                    <option>Consulta general</option>
                  </select>
                </div>
                <div className="field">
                  <label>Mensaje</label>
                  <textarea rows="5" placeholder="Cuéntanos brevemente lo que estás buscando..." />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginTop: 8 }}>
                  <label style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, color: "var(--ink-soft)", textTransform: "none", letterSpacing: 0 }}>
                    <input type="checkbox" required /> Acepto la política de privacidad y el manejo de mis datos.
                  </label>
                  <button type="submit" className="btn btn-primary">Enviar mensaje <Icon.Arrow size={16} className="arrow" /></button>
                </div>
              </>
            )}
            {sent && (
              <div style={{ textAlign: "center", padding: "40px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                <div style={{ width: 64, height: 64, borderRadius: 999, background: "var(--accent)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon.Check size={28} />
                </div>
                <h3 className="h2" style={{ margin: 0 }}>¡Mensaje enviado!</h3>
                <p style={{ color: "var(--ink-soft)", margin: 0, maxWidth: "40ch" }}>Te contactaremos en breve. Si necesitas atención inmediata, escríbenos por WhatsApp.</p>
                <a className="btn btn-accent" href={c.whatsappUrl} target="_blank" rel="noreferrer" style={{ marginTop: 12 }}><Icon.Chat size={16} /> Abrir WhatsApp</a>
              </div>
            )}
          </form>

          <aside className="reveal reveal-delay-1" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ContactCard icon="Phone" k="Teléfono" v={c.phone} sub="Llámanos en horario de atención" href={"tel:" + c.phone.replace(/\s/g, "")} />
            <ContactCard icon="Chat" k="WhatsApp" v="Respuesta rápida" sub={c.whatsapp} href={c.whatsappUrl} target="_blank" />
            <ContactCard icon="Mail" k="Correo" v={c.email} sub="Respondemos en 24h hábiles" href={"mailto:" + c.email} />
            <ContactCard icon="Pin" k="Dirección" v={c.address} sub="Zona Equipetrol — Santa Cruz" />
            <ContactCard icon="Clock" k="Horarios" v={c.hours.week} sub={c.hours.sat} />
            <button className="btn btn-primary" onClick={onCta} style={{ marginTop: 12 }}>O agenda directo en línea <Icon.Arrow size={16} className="arrow" /></button>
          </aside>
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ background: "var(--bg-warm)", paddingBottom: 96 }}>
        <div className="container">
          <div className="reveal" style={{ borderRadius: 22, overflow: "hidden", position: "relative", aspectRatio: "21/9", border: "1px solid var(--line)", background: "linear-gradient(135deg, #E9E5DD 0%, #DCD6CA 60%, #B8C4D2 100%)" }}>
            <svg viewBox="0 0 1000 420" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0 }}>
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(74,96,122,.18)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="1000" height="420" fill="url(#grid)" />
              <path d="M0 220 C 200 160, 380 280, 600 200 S 900 240, 1000 180" stroke="rgba(74,96,122,.5)" strokeWidth="2" fill="none" />
              <path d="M0 100 L 1000 100" stroke="rgba(74,96,122,.2)" strokeWidth="1" />
              <path d="M0 320 L 1000 320" stroke="rgba(74,96,122,.2)" strokeWidth="1" />
              <path d="M300 0 L 300 420" stroke="rgba(74,96,122,.2)" strokeWidth="1" />
              <path d="M700 0 L 700 420" stroke="rgba(74,96,122,.2)" strokeWidth="1" />
            </svg>
            <div style={{
              position: "absolute", top: "50%", left: "60%", transform: "translate(-50%,-100%)",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
            }}>
              <div style={{
                background: "var(--bg)", padding: "12px 18px", borderRadius: 14, boxShadow: "var(--shadow-md)",
                fontFamily: "var(--serif)", fontSize: 18, letterSpacing: "-0.01em",
              }}>
                DelgaMedic · Zona Equipetrol
              </div>
              <div style={{ width: 36, height: 36, borderRadius: 999, background: "var(--accent)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(74,96,122,.35)" }}>
                <Icon.Pin size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({ icon, k, v, sub, href, target }) {
  const I = Icon[icon];
  const Wrap = href ? "a" : "div";
  return (
    <Wrap href={href} target={target} rel={target ? "noreferrer" : undefined} style={{
      display: "grid", gridTemplateColumns: "52px 1fr", gap: 16, alignItems: "center",
      background: "var(--bg)", padding: 20, borderRadius: 14, border: "1px solid var(--line-soft)",
      transition: "border-color .2s ease", textDecoration: "none", color: "inherit",
    }}>
      <span style={{ width: 48, height: 48, borderRadius: 999, background: "var(--accent-wash)", color: "var(--accent)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
        <I size={20} />
      </span>
      <div>
        <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ink-mute)" }}>{k}</div>
        <div style={{ fontSize: 16, fontWeight: 500, marginTop: 2 }}>{v}</div>
        {sub && <div style={{ fontSize: 13, color: "var(--ink-mute)", marginTop: 2 }}>{sub}</div>}
      </div>
    </Wrap>
  );
}

/* ============================================================
   BLOG  /blog
   ============================================================ */
function BlogPage({ navigate, onCta }) {
  const list = window.DM_DATA.blog;
  return (
    <>
      <PageHero
        eyebrow="Recursos & artículos"
        title="Educación médica<br/>que <em>vale tu tiempo</em>"
        lede="Contenido revisado por nuestro equipo clínico. Sin clickbait. Sin promesas vacías."
        rightImg="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80"
      />

      <section style={{ background: "var(--bg)", paddingBottom: 96 }}>
        <div className="container">
          {/* Feature article */}
          <article className="reveal blog-article-grid" style={{ borderBottom: "1px solid var(--line)" }}>
            <div className="img" style={{ aspectRatio: "5/4", borderRadius: 18 }}>
              <img src={list[0].img} alt={list[0].title} />
            </div>
            <div>
              <span className="pill">Destacado</span>
              <span className="eyebrow no-rule" style={{ color: "var(--accent)", marginLeft: 12 }}>{list[0].tag}</span>
              <h2 className="h1" style={{ margin: "20px 0 16px", fontSize: "clamp(28px, 3vw, 44px)" }}>{list[0].title}</h2>
              <p className="lede" style={{ margin: "0 0 20px" }}>{list[0].excerpt}</p>
              <span style={{ fontSize: 13, color: "var(--ink-mute)" }}>{list[0].read}</span>
            </div>
          </article>

          <div className="blog-related-grid">
            {list.slice(1).concat(list).slice(0, 6).map((b, i) => (
              <article key={i} className={"reveal reveal-delay-" + ((i % 3) + 1)} style={{ display: "flex", flexDirection: "column", gap: 14, cursor: "pointer" }}>
                <div className="img" style={{ aspectRatio: "5/4", borderRadius: 14 }}>
                  <img src={b.img} alt={b.title} />
                </div>
                <span className="eyebrow no-rule" style={{ color: "var(--accent)" }}>{b.tag}</span>
                <h3 className="serif" style={{ fontSize: 20, margin: 0, lineHeight: 1.25 }}>{b.title}</h3>
                <p style={{ color: "var(--ink-soft)", margin: 0, fontSize: 14, lineHeight: 1.55 }}>{b.excerpt}</p>
                <span style={{ fontSize: 12, color: "var(--ink-mute)" }}>{b.read}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA onCta={onCta} />
    </>
  );
}

/* ============================================================
   PAGE HERO (shared inner-page hero)
   ============================================================ */
function PageHero({ eyebrow, title, lede, rightImg }) {
  return (
    <section style={{ background: "var(--bg)", paddingTop: 56, paddingBottom: 72 }}>
      <div className="container contact-bottom-grid">
        <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="display" style={{ fontSize: "clamp(44px, 5.4vw, 80px)" }} dangerouslySetInnerHTML={{ __html: title }} />
          <p className="lede">{lede}</p>
        </div>
        <div className="reveal reveal-delay-1 img" style={{ aspectRatio: "4/3", borderRadius: 18 }}>
          <img src={rightImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export { TreatmentsPage, TreatmentDetailPage, AboutPage, ContactPage, BlogPage, PageHero };
