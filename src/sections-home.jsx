// DelgaMedic — Home sections.

const { useState: useStateH, useEffect: useEffectH, useRef: useRefH } = React;

/* ============================================================
   HERO — three variants exposed via Tweaks
   ============================================================ */
function Hero({ variant = "split", onCta, navigate }) {
  const h = window.DM_DATA.hero;
  const titleHtml = h.title.replace(/\n/g, "<br/>");

  if (variant === "centered") return <HeroCentered titleHtml={titleHtml} h={h} onCta={onCta} navigate={navigate} />;
  if (variant === "editorial") return <HeroEditorial titleHtml={titleHtml} h={h} onCta={onCta} navigate={navigate} />;
  return <HeroSplit titleHtml={titleHtml} h={h} onCta={onCta} navigate={navigate} />;
}

function HeroSplit({ titleHtml, h, onCta, navigate }) {
  return (
    <section style={{ background: "var(--bg)", paddingTop: 32 }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 64, alignItems: "center", minHeight: "78vh", paddingBottom: 56 }}>
        <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <span className="eyebrow">{h.eyebrow}</span>
          <h1 className="display" dangerouslySetInnerHTML={{ __html: titleHtml }} />
          <p className="lede" style={{ marginTop: 4 }}>{h.sub}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
            <button className="btn btn-primary btn-lg" onClick={onCta}>Agendar consulta <Icon.Arrow size={18} className="arrow" /></button>
            <button className="btn btn-ghost btn-lg" onClick={() => navigate("tratamientos")}>Ver tratamientos</button>
          </div>
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <span className="pill pill-dot">Aceptando pacientes nuevos</span>
            <span style={{ fontSize: 13, color: "var(--ink-mute)" }}>{h.badge}</span>
          </div>
        </div>

        <div className="reveal reveal-delay-2" style={{ position: "relative" }}>
          <div className="img img-warm" style={{ aspectRatio: "4/5", borderRadius: 18 }}>
            <img src="assets/clinic-reception.png" alt="Recepción DelgaMedic — Dr. Paulo Peinado y Dra. Leslie Heredia" />
          </div>
          <div style={{
            position: "absolute", left: -28, bottom: 36, width: 260,
            background: "var(--bg)", padding: 18,
            borderRadius: 14, boxShadow: "var(--shadow-md)",
            display: "flex", gap: 14, alignItems: "center", border: "1px solid var(--line-soft)",
          }}>
            <div style={{ width: 44, height: 44, borderRadius: 999, background: "var(--accent-wash)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon.Stethoscope size={22} />
            </div>
            <div>
              <div style={{ fontSize: 12, color: "var(--ink-mute)", letterSpacing: ".06em", textTransform: "uppercase" }}>Consulta inicial</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.2 }}>Evaluación médica integral · 60 min</div>
            </div>
          </div>
          <div style={{
            position: "absolute", right: -20, top: 40, width: 220,
            background: "var(--bg-warm)", padding: 18,
            borderRadius: 14, fontFamily: "var(--serif)",
            fontStyle: "italic", color: "var(--accent-deep)", fontSize: 17, lineHeight: 1.35,
            boxShadow: "var(--shadow-sm)",
          }}>
            “Medicina seria, resultados sostenibles.”
          </div>
        </div>
      </div>
      <HeroStats stats={h.stats} />
    </section>
  );
}

function HeroCentered({ titleHtml, h, onCta, navigate }) {
  return (
    <section style={{ background: "var(--bg-warm)", paddingTop: 80, paddingBottom: 0 }}>
      <div className="container" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <span className="eyebrow no-rule reveal">{h.eyebrow}</span>
        <h1 className="display reveal reveal-delay-1" style={{ maxWidth: "14ch" }} dangerouslySetInnerHTML={{ __html: titleHtml }} />
        <p className="lede reveal reveal-delay-2" style={{ margin: "0 auto", textAlign: "center" }}>{h.sub}</p>
        <div className="reveal reveal-delay-3" style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <button className="btn btn-primary btn-lg" onClick={onCta}>Agendar consulta <Icon.Arrow size={18} className="arrow" /></button>
          <button className="btn btn-ghost btn-lg" onClick={() => navigate("tratamientos")}>Ver tratamientos</button>
        </div>
        <div className="reveal reveal-delay-3 img" style={{ width: "100%", aspectRatio: "16/8", marginTop: 56, borderRadius: "18px 18px 0 0", overflow: "hidden" }}>
          <img src="assets/clinic-reception.png" alt="Recepción DelgaMedic" style={{ objectPosition: "center 30%" }} />
        </div>
      </div>
      <div style={{ background: "var(--bg)" }}>
        <HeroStats stats={h.stats} />
      </div>
    </section>
  );
}

function HeroEditorial({ titleHtml, h, onCta, navigate }) {
  return (
    <section style={{ background: "var(--bg)", paddingTop: 56, paddingBottom: 72 }}>
      <div className="container">
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 40 }}>
          <span className="eyebrow">{h.eyebrow}</span>
          <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent)", fontSize: 18 }}>Santa Cruz de la Sierra · Bolivia</span>
        </div>
        <h1 className="reveal reveal-delay-1 display" style={{ fontSize: "clamp(48px, 8vw, 120px)", lineHeight: .98 }} dangerouslySetInnerHTML={{ __html: titleHtml }} />

        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56, alignItems: "end" }}>
          <div className="reveal reveal-delay-2 img" style={{ aspectRatio: "16/10", borderRadius: 18 }}>
            <img src="assets/clinic-reception.png" alt="Recepción DelgaMedic" style={{ objectPosition: "center 25%" }} />
          </div>
          <div className="reveal reveal-delay-3" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p className="lede" style={{ margin: 0 }}>{h.sub}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn btn-primary btn-lg" onClick={onCta}>Agendar consulta <Icon.Arrow size={18} className="arrow" /></button>
              <button className="btn btn-ghost btn-lg" onClick={() => navigate("tratamientos")}>Ver tratamientos</button>
            </div>
          </div>
        </div>
      </div>
      <HeroStats stats={h.stats} />
    </section>
  );
}

function HeroStats({ stats }) {
  return (
    <div className="container reveal" style={{ marginTop: 24, paddingTop: 40, paddingBottom: 16, borderTop: "1px solid var(--line)", display: "grid", gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: 24 }}>
      {stats.map((s, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontFamily: "var(--serif)", fontSize: 42, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.v}</span>
          <span style={{ fontSize: 13, color: "var(--ink-mute)" }}>{s.l}</span>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   CREDENTIALS BAR
   ============================================================ */
function CredentialsBar() {
  const items = window.DM_DATA.credentials;
  return (
    <section style={{ background: "var(--bg)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
      <div className="container" style={{ padding: "32px 0", display: "flex", alignItems: "center", flexWrap: "wrap", gap: 32, justifyContent: "space-between" }}>
        <span style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ink-mute)", whiteSpace: "nowrap" }}>
          Avalado por
        </span>
        <div style={{ display: "flex", gap: 36, flexWrap: "wrap", flex: 1, justifyContent: "space-around" }}>
          {items.map((c) => (
            <span key={c} style={{ fontFamily: "var(--serif)", fontSize: 17, color: "var(--ink-soft)", letterSpacing: "-0.01em", fontStyle: "italic" }}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SPECIALISTS
   ============================================================ */
function Specialists() {
  const list = window.DM_DATA.specialists;
  return (
    <section className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, marginBottom: 72, alignItems: "end" }}>
          <SectionHeader eyebrow="Nuestros especialistas" title="Un equipo médico que <em>te escucha</em>" />
          <p className="lede reveal reveal-delay-1" style={{ margin: 0 }}>
            En DelgaMedic combinamos endocrinología clínica y nutrición especializada para ayudarte a alcanzar un peso saludable, mejorar tu metabolismo y recuperar tu bienestar mediante tratamientos personalizados respaldados por evidencia científica.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {list.map((s, i) => (
            <article key={s.id} className={"reveal reveal-delay-" + (i + 1)} style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 0.95fr) 1fr",
              gap: 28,
              alignItems: "stretch",
            }}>
              <div style={{
                position: "relative",
                aspectRatio: "4/5",
                borderRadius: 14,
                overflow: "hidden",
                background: "linear-gradient(180deg, #EFE9DC 0%, #DDD3BE 100%)",
              }}>
                {s.photo ? (
                  <img src={s.photo} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                ) : (
                  <div className="portrait-monogram" style={{ width: "100%", height: "100%" }}>{s.mono}</div>
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>
                <span className="eyebrow no-rule" style={{ color: "var(--accent)" }}>{s.role}</span>
                <h3 className="serif" style={{ fontSize: 30, margin: 0, letterSpacing: "-0.018em", lineHeight: 1.1 }}>{s.name}</h3>
                {s.sub && (
                  <p className="serif" style={{ fontStyle: "italic", color: "var(--accent-deep)", fontSize: 16, margin: 0, lineHeight: 1.35 }}>
                    {s.sub}
                  </p>
                )}
                <p style={{ fontSize: 13, color: "var(--ink-mute)", margin: "4px 0 0", lineHeight: 1.55, paddingTop: 14, borderTop: "1px solid var(--line-soft)" }}>
                  {s.credentials}
                </p>
                <p style={{ fontSize: 14.5, color: "var(--ink-soft)", margin: 0, lineHeight: 1.6 }}>{s.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FEATURED TREATMENTS
   ============================================================ */
function FeaturedTreatments({ navigate, onTreatment }) {
  const list = window.DM_DATA.treatments.slice(0, 4);
  return (
    <section className="section" style={{ background: "var(--bg-warm)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap", marginBottom: 56 }}>
          <SectionHeader eyebrow="Tratamientos" title="Programas médicos <em>diseñados para ti</em>" lede="Cada tratamiento se construye a la medida de tu historia clínica, hábitos y objetivos. No hay dos pacientes iguales — tampoco dos planes." />
          <button className="btn btn-ghost reveal" onClick={() => navigate("tratamientos")}>Ver todos los tratamientos <Icon.Arrow size={16} className="arrow" /></button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }}>
          {list.map((t, i) => (
            <article
              key={t.id}
              className={"reveal reveal-delay-" + (Math.min(i + 1, 4))}
              onClick={() => onTreatment(t.slug)}
              style={{
                background: "var(--bg)",
                borderRadius: 18,
                overflow: "hidden",
                cursor: "pointer",
                border: "1px solid var(--line-soft)",
                transition: "transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div className="img" style={{ aspectRatio: "16/10" }}>
                <img src={t.img} alt={t.name} />
              </div>
              <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
                <span className="eyebrow no-rule" style={{ color: "var(--accent)" }}>{t.eyebrow}</span>
                <h3 className="h3" style={{ margin: 0 }}>{t.name}</h3>
                <p style={{ color: "var(--ink-soft)", margin: 0, lineHeight: 1.55, fontSize: 15 }}>{t.short}</p>
                <div style={{ marginTop: "auto", paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, color: "var(--ink-mute)" }}>{t.duration}</span>
                  <span className="btn-link">Ver más <Icon.Arrow size={14} className="arrow" style={{ marginLeft: 6, verticalAlign: "middle" }} /></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BENEFITS
   ============================================================ */
function Benefits() {
  const list = window.DM_DATA.benefits;
  return (
    <section className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, marginBottom: 64 }}>
          <SectionHeader eyebrow="Por qué DelgaMedic" title="Una forma <em>distinta</em> de cuidar tu salud" />
          <p className="lede reveal reveal-delay-1" style={{ margin: 0 }}>
            No vendemos resultados milagrosos. Te ofrecemos algo más valioso: medicina seria, acompañamiento clínico real y un plan que puedes sostener.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--line)" }}>
          {list.map((b, i) => {
            const IconC = Icon[capitalize(b.icon)] || Icon.Heart;
            return (
              <div
                key={b.title}
                className={"reveal reveal-delay-" + (Math.min((i % 3) + 1, 4))}
                style={{
                  padding: "40px 32px 40px 0",
                  borderBottom: i < list.length - 3 ? "1px solid var(--line)" : "none",
                  borderRight: (i % 3 !== 2) ? "1px solid var(--line)" : "none",
                  paddingLeft: (i % 3 !== 0) ? 32 : 0,
                  display: "flex", flexDirection: "column", gap: 14,
                }}
              >
                <span style={{ color: "var(--accent)" }}><IconC size={28} /></span>
                <h4 className="serif" style={{ fontSize: 22, margin: "8px 0 4px" }}>{b.title}</h4>
                <p style={{ color: "var(--ink-soft)", margin: 0, lineHeight: 1.55, fontSize: 14.5 }}>{b.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

/* ============================================================
   PROCESS — timeline
   ============================================================ */
function Process() {
  const list = window.DM_DATA.process;
  return (
    <section className="section" style={{ background: "var(--accent-deep)", color: "#E8EEF5" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, marginBottom: 64 }}>
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="eyebrow no-rule" style={{ color: "var(--accent-soft)" }}>Cómo trabajamos</span>
            <h2 className="h1" style={{ margin: 0, color: "#fff", maxWidth: "16ch" }}>
              Tu camino hacia <em style={{ color: "var(--accent-soft)", fontStyle: "italic", fontWeight: 400 }}>una mejor salud</em>
            </h2>
          </div>
          <p className="lede reveal reveal-delay-1" style={{ margin: 0, color: "#B7C2D2" }}>
            Un proceso clínico estructurado y transparente. Cada etapa tiene un propósito y un resultado medible —para ti y para tu equipo médico.
          </p>
        </div>

        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 0 }}>
          {list.map((p, i) => (
            <li
              key={p.n}
              className={"reveal reveal-delay-" + (Math.min(i + 1, 4))}
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr 1.8fr",
                gap: 32,
                padding: "32px 0",
                borderTop: "1px solid rgba(255,255,255,.12)",
                borderBottom: i === list.length - 1 ? "1px solid rgba(255,255,255,.12)" : "none",
                alignItems: "baseline",
              }}
            >
              <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent-soft)", fontSize: 22 }}>{p.n}</span>
              <h4 className="serif" style={{ fontSize: 28, margin: 0, color: "#fff", letterSpacing: "-0.015em" }}>{p.title}</h4>
              <p style={{ margin: 0, color: "#B7C2D2", maxWidth: "60ch", lineHeight: 1.65, fontSize: 15.5 }}>{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
function Testimonials() {
  const list = window.DM_DATA.testimonials;
  const [idx, setIdx] = useStateH(0);
  const next = () => setIdx((i) => (i + 1) % list.length);
  const prev = () => setIdx((i) => (i - 1 + list.length) % list.length);
  const t = list[idx];

  useEffectH(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section" style={{ background: "var(--bg-warm)" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "center" }}>
        <div className="reveal">
          <span className="eyebrow">Testimonios</span>
          <h2 className="h1" style={{ marginTop: 16, marginBottom: 16 }}>
            Historias de pacientes <em>reales</em>
          </h2>
          <p className="lede">Pequeñas decisiones diarias, sostenidas con acompañamiento médico. Esto es lo que cuentan quienes ya transitaron el camino.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
            <button onClick={prev} aria-label="Anterior" style={navBtn}>
              <Icon.Arrow size={18} style={{ transform: "rotate(180deg)" }} />
            </button>
            <button onClick={next} aria-label="Siguiente" style={navBtn}>
              <Icon.Arrow size={18} />
            </button>
          </div>
        </div>

        <div className="reveal reveal-delay-1" style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: -16, left: -8, color: "var(--accent-soft)", opacity: .6 }}>
            <Icon.Quote size={72} stroke={1} />
          </div>
          <blockquote style={{ margin: 0, fontFamily: "var(--serif)", fontSize: "clamp(22px, 2vw, 30px)", lineHeight: 1.35, letterSpacing: "-0.012em", color: "var(--ink)", position: "relative" }}>
            “{t.quote}”
          </blockquote>
          <div style={{ marginTop: 32, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontWeight: 500, fontSize: 15 }}>{t.name}</div>
              <div style={{ fontSize: 13, color: "var(--ink-mute)" }}>{t.where}</div>
            </div>
            <div style={{ display: "flex", gap: 4, color: "var(--gold)" }}>
              {Array.from({ length: t.rating }).map((_, i) => <Icon.Star key={i} size={16} />)}
            </div>
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 28 }}>
            {list.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                style={{
                  height: 3, width: i === idx ? 38 : 18,
                  borderRadius: 2,
                  background: i === idx ? "var(--accent)" : "var(--line)",
                  border: 0, cursor: "pointer", padding: 0,
                  transition: "all .4s ease",
                }}
                aria-label={"Testimonio " + (i + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
const navBtn = {
  width: 48, height: 48, borderRadius: 999,
  background: "var(--bg)", border: "1px solid var(--line)",
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  color: "var(--ink)", cursor: "pointer", transition: "all .2s ease",
};

/* ============================================================
   QUIZ — Pre-evaluation
   ============================================================ */
function HealthQuiz({ onCta }) {
  const steps = [
    { id: "goal", q: "¿Cuál es tu objetivo principal?",
      options: ["Perder peso", "Controlar mi metabolismo", "Recuperar hábitos saludables", "Acompañamiento post-quirúrgico"] },
    { id: "weight", q: "¿Cómo describirías tu peso actual?",
      options: ["Normal, quiero optimizar", "Sobrepeso leve", "Sobrepeso significativo", "Obesidad — necesito ayuda médica"] },
    { id: "history", q: "¿Has intentado dietas previamente?",
      options: ["No, es mi primer intento", "Sí, sin éxito sostenido", "Sí, varias veces", "Sí, con buenos resultados temporales"] },
    { id: "conditions", q: "¿Tienes alguna condición conocida?",
      options: ["Resistencia a la insulina / prediabetes", "Tiroides", "Síndrome metabólico", "Ninguna confirmada"] },
  ];

  const [step, setStep] = useStateH(0);
  const [answers, setAnswers] = useStateH({});
  const done = step >= steps.length;

  const recommend = () => {
    const trs = window.DM_DATA.treatments;
    if (answers.weight && answers.weight.includes("Obesidad")) return trs[0];
    if (answers.conditions && (answers.conditions.includes("insulina") || answers.conditions.includes("metabólico") || answers.conditions.includes("Tiroides"))) return trs[2];
    if (answers.history && answers.history.includes("varias")) return trs[4];
    return trs[1];
  };

  const pick = (val) => {
    const id = steps[step].id;
    setAnswers({ ...answers, [id]: val });
    setStep((s) => s + 1);
  };
  const reset = () => { setStep(0); setAnswers({}); };

  return (
    <section className="section" style={{ background: "var(--bg)" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "stretch" }}>
        <div className="reveal" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24 }}>
          <div>
            <span className="eyebrow">Pre-evaluación</span>
            <h2 className="h1" style={{ marginTop: 16, marginBottom: 16 }}>
              Descubre tu <em>punto de partida</em>
            </h2>
            <p className="lede" style={{ margin: 0 }}>
              Cuatro preguntas rápidas para orientarte. Al final te sugerimos el programa que mejor encaja con tu situación —no reemplaza una evaluación médica.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, color: "var(--ink-mute)", fontSize: 13, alignItems: "center" }}>
            <Icon.Clock size={16} /> Menos de un minuto · 100% confidencial
          </div>
        </div>

        <div className="reveal reveal-delay-1" style={{
          background: "var(--bg-warm)",
          borderRadius: 22,
          padding: 40,
          display: "flex", flexDirection: "column", gap: 28,
          minHeight: 420,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ height: 4, background: "var(--bg-deep)", borderRadius: 999, flex: 1, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${(Math.min(step, steps.length) / steps.length) * 100}%`, background: "var(--accent)", transition: "width .4s ease" }} />
            </div>
            <span style={{ fontSize: 12, color: "var(--ink-mute)", letterSpacing: ".08em" }}>
              {Math.min(step + 1, steps.length)} / {steps.length}
            </span>
          </div>

          {!done && (
            <>
              <h3 className="serif" style={{ fontSize: 28, margin: 0, lineHeight: 1.2, letterSpacing: "-0.012em" }}>
                {steps[step].q}
              </h3>
              <div style={{ display: "grid", gap: 10 }}>
                {steps[step].options.map((o) => (
                  <button
                    key={o}
                    onClick={() => pick(o)}
                    style={{
                      textAlign: "left",
                      padding: "16px 20px",
                      background: "var(--bg)",
                      border: "1px solid var(--line)",
                      borderRadius: 10,
                      fontFamily: "var(--sans)",
                      fontSize: 15,
                      cursor: "pointer",
                      transition: "all .2s ease",
                      color: "var(--ink)",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.background = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.background = "var(--bg)"; }}
                  >
                    <span>{o}</span>
                    <Icon.Arrow size={16} />
                  </button>
                ))}
              </div>
            </>
          )}

          {done && (() => {
            const r = recommend();
            return (
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <span className="eyebrow no-rule">Tu recomendación</span>
                <h3 className="serif" style={{ fontSize: 32, margin: 0, lineHeight: 1.15, letterSpacing: "-0.015em" }}>
                  {r.name}
                </h3>
                <p style={{ color: "var(--ink-soft)", margin: 0, lineHeight: 1.6 }}>{r.short}</p>
                <div style={{ display: "flex", gap: 12, marginTop: 8, flexWrap: "wrap" }}>
                  <button className="btn btn-primary" onClick={onCta}>Agendar consulta <Icon.Arrow size={16} className="arrow" /></button>
                  <button className="btn btn-ghost" onClick={reset}>Repetir evaluación</button>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BLOG / RECURSOS
   ============================================================ */
function BlogTeaser({ navigate }) {
  const list = window.DM_DATA.blog;
  return (
    <section className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap", marginBottom: 56 }}>
          <SectionHeader eyebrow="Recursos & artículos" title="Educación médica que <em>vale tu tiempo</em>" />
          <button className="btn btn-ghost reveal" onClick={() => navigate("blog")}>Ver todo el contenido <Icon.Arrow size={16} className="arrow" /></button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {list.map((b, i) => (
            <article
              key={b.title}
              className={"reveal reveal-delay-" + (Math.min(i + 1, 4))}
              style={{ display: "flex", flexDirection: "column", gap: 16, cursor: "pointer" }}
            >
              <div className="img" style={{ aspectRatio: "5/4", borderRadius: 14 }}>
                <img src={b.img} alt={b.title} />
              </div>
              <span className="eyebrow no-rule" style={{ color: "var(--accent)" }}>{b.tag}</span>
              <h3 className="serif" style={{ fontSize: 22, margin: 0, lineHeight: 1.25 }}>{b.title}</h3>
              <p style={{ color: "var(--ink-soft)", margin: 0, fontSize: 14.5, lineHeight: 1.55 }}>{b.excerpt}</p>
              <span style={{ fontSize: 12, color: "var(--ink-mute)" }}>{b.read}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CTA FINAL
   ============================================================ */
function FinalCTA({ onCta }) {
  const c = window.DM_DATA.clinic;
  return (
    <section className="section" style={{ background: "var(--bg-warm)" }}>
      <div className="container reveal" style={{
        background: "var(--accent-deep)",
        borderRadius: 24,
        padding: "clamp(48px, 6vw, 88px)",
        color: "#E8EEF5",
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: 56,
        alignItems: "center",
        backgroundImage: "radial-gradient(80% 80% at 100% 0%, rgba(184,196,210,.18) 0%, transparent 60%)",
      }}>
        <div>
          <span className="eyebrow no-rule" style={{ color: "var(--accent-soft)" }}>Empieza hoy</span>
          <h2 className="h1" style={{ color: "#fff", margin: "16px 0 20px", maxWidth: "14ch" }}>
            Comienza hoy tu <em style={{ color: "var(--accent-soft)", fontStyle: "italic", fontWeight: 400 }}>transformación</em>
          </h2>
          <p className="lede" style={{ color: "#B7C2D2", margin: 0 }}>
            Agenda una consulta y recibe una evaluación profesional para iniciar tu camino hacia una vida más saludable.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <button className="btn btn-accent" onClick={onCta} style={{ background: "#fff", color: "var(--ink)", borderColor: "#fff" }}>
              Agendar consulta <Icon.Arrow size={16} className="arrow" />
            </button>
            <a className="btn btn-ghost" href={c.whatsappUrl} target="_blank" rel="noreferrer" style={{ borderColor: "rgba(255,255,255,.3)", color: "#fff" }}>
              <Icon.Chat size={16} /> Escribir por WhatsApp
            </a>
          </div>
        </div>

        <div style={{ display: "grid", gap: 16, color: "#E8EEF5" }}>
          <CTAItem icon="Phone" k="Llámanos" v={c.phone} />
          <CTAItem icon="Mail"  k="Escríbenos" v={c.email} />
          <CTAItem icon="Pin"   k="Visítanos" v={c.address} />
          <CTAItem icon="Clock" k="Horarios" v={`${c.hours.week} · ${c.hours.sat}`} />
        </div>
      </div>
    </section>
  );
}
function CTAItem({ icon, k, v }) {
  const I = Icon[icon];
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "48px 1fr", gap: 16, alignItems: "center",
      padding: "16px 0", borderTop: "1px solid rgba(255,255,255,.12)",
    }}>
      <span style={{
        width: 44, height: 44, borderRadius: 999,
        background: "rgba(255,255,255,.08)", color: "var(--accent-soft)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
      }}>
        <I size={20} />
      </span>
      <div>
        <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--accent-soft)" }}>{k}</div>
        <div style={{ fontSize: 16, marginTop: 4, color: "#fff" }}>{v}</div>
      </div>
    </div>
  );
}

Object.assign(window, { Hero, CredentialsBar, Specialists, FeaturedTreatments, Benefits, Process, Testimonials, HealthQuiz, BlogTeaser, FinalCTA });
