/**
 * brand.tsx — Paper UI Living Brand Reference
 *
 * This file is your single source of truth for the entire design system.
 * Paste it into a Next.js/React page to see the full brand at a glance.
 * Every token, every typeface, every shadow — all rendered.
 *
 * "If it looks good here, it'll look good everywhere."
 */

import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────────────────────────────────────

export const tokens = {
  colors: {
    // Paper surfaces
    paperBase: "#F5F0E8",
    paperLight: "#FAF8F3",
    paperAged: "#EDE4D0",
    paperCream: "#FFF9F0",

    // Ink (text & strokes)
    inkBlack: "#1A1209",
    inkDark: "#2C2416",
    inkMedium: "#5C4F3A",
    inkLight: "#9B8E7A",
    inkFaint: "#C8BFB0",

    // Accent (the highlighter marks)
    accentYellow: "#F2C94C",
    accentRed: "#E05A4D",
    accentGreen: "#4CAF7D",
    accentBlue: "#4A90D9",
    accentOrange: "#E8833A",

    // Sketch illustration palette
    sketchStroke: "#2C2416",
    sketchFill1: "#F2C94C",
    sketchFill2: "#E8D5B7",
    sketchFill3: "#A8D5A2",
    sketchFill4: "#F4A57A",
  },

  fonts: {
    display: "'DM Serif Display', 'Libre Baskerville', Georgia, serif",
    body: "'Lora', 'Source Serif 4', Georgia, serif",
    mono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
    handwritten: "'Caveat', 'Indie Flower', cursive",
  },

  shadows: {
    flat: "none",
    lift1: "3px 3px 0px #1A1209",
    lift2: "5px 5px 0px #1A1209",
    lift3: "8px 8px 0px #1A1209",
    lift4: "12px 12px 0px #1A1209",
    accent: "4px 4px 0px #F2C94C",
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// BASE CSS (inject into global styles or a <style> tag)
// ─────────────────────────────────────────────────────────────────────────────

export const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Lora:ital,wght@0,400;0,500;1,400&family=JetBrains+Mono:wght@400;500&family=Caveat:wght@400;600&display=swap');

  :root {
    /* Paper Surfaces */
    --color-paper-base:    #F5F0E8;
    --color-paper-light:   #FAF8F3;
    --color-paper-aged:    #EDE4D0;
    --color-paper-cream:   #FFF9F0;

    /* Ink */
    --color-ink-black:     #1A1209;
    --color-ink-dark:      #2C2416;
    --color-ink-medium:    #5C4F3A;
    --color-ink-light:     #9B8E7A;
    --color-ink-faint:     #C8BFB0;

    /* Accent */
    --color-accent-yellow: #F2C94C;
    --color-accent-red:    #E05A4D;
    --color-accent-green:  #4CAF7D;
    --color-accent-blue:   #4A90D9;
    --color-accent-orange: #E8833A;

    /* Sketch fills */
    --color-sketch-stroke: #2C2416;
    --color-sketch-fill-1: #F2C94C;
    --color-sketch-fill-2: #E8D5B7;
    --color-sketch-fill-3: #A8D5A2;
    --color-sketch-fill-4: #F4A57A;

    /* Typography */
    --font-display:     'DM Serif Display', 'Libre Baskerville', Georgia, serif;
    --font-body:        'Lora', 'Source Serif 4', Georgia, serif;
    --font-mono:        'JetBrains Mono', 'Fira Code', monospace;
    --font-handwritten: 'Caveat', 'Indie Flower', cursive;

    /* Type Scale */
    --text-xs:   0.75rem;
    --text-sm:   0.875rem;
    --text-base: 1rem;
    --text-md:   1.125rem;
    --text-lg:   1.25rem;
    --text-xl:   1.5rem;
    --text-2xl:  2rem;
    --text-3xl:  2.5rem;
    --text-4xl:  3.5rem;
    --text-5xl:  5rem;

    /* Spacing */
    --space-1:  4px;
    --space-2:  8px;
    --space-3:  12px;
    --space-4:  16px;
    --space-6:  24px;
    --space-8:  32px;
    --space-12: 48px;
    --space-16: 64px;
    --space-24: 96px;
    --space-32: 128px;

    /* Borders */
    --border-sm: 1px;
    --border-md: 2px;
    --border-lg: 3px;
    --border-xl: 4px;

    /* Radius */
    --radius-none: 0px;
    --radius-sm:   4px;
    --radius-md:   8px;
    --radius-lg:   16px;
    --radius-full: 9999px;

    /* Shadows */
    --shadow-flat:   none;
    --shadow-lift-1: 3px 3px 0px var(--color-ink-black);
    --shadow-lift-2: 5px 5px 0px var(--color-ink-black);
    --shadow-lift-3: 8px 8px 0px var(--color-ink-black);
    --shadow-lift-4: 12px 12px 0px var(--color-ink-black);
    --shadow-accent: 4px 4px 0px var(--color-accent-yellow);

    /* Motion */
    --duration-fast:   120ms;
    --duration-base:   200ms;
    --duration-slow:   350ms;
    --ease-default:    cubic-bezier(0.16, 1, 0.3, 1);
    --ease-bounce:     cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  *, *::before, *::after { box-sizing: border-box; }

  body {
    background-color: var(--color-paper-base);
    color: var(--color-ink-dark);
    font-family: var(--font-body);
    font-size: var(--text-base);
    line-height: 1.75;
    -webkit-font-smoothing: antialiased;
  }

  /* Paper grain texture overlay */
  .paper-grain {
    position: relative;
  }
  .paper-grain::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E");
    opacity: 0.035;
    pointer-events: none;
    border-radius: inherit;
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// PRIMITIVE COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

type ShadowLevel = "flat" | "lift1" | "lift2" | "lift3" | "lift4" | "accent";
type AccentColor = "yellow" | "red" | "green" | "blue" | "orange";

interface PaperCardProps {
  children: React.ReactNode;
  shadow?: ShadowLevel;
  rotate?: number;
  accent?: AccentColor;
  className?: string;
  style?: React.CSSProperties;
}

/** The core card primitive — everything inherits from this. */
export const PaperCard: React.FC<PaperCardProps> = ({
  children,
  shadow = "lift2",
  rotate = 0,
  accent,
  className = "",
  style = {},
}) => {
  const shadowMap: Record<ShadowLevel, string> = {
    flat: "none",
    lift1: "3px 3px 0px #1A1209",
    lift2: "5px 5px 0px #1A1209",
    lift3: "8px 8px 0px #1A1209",
    lift4: "12px 12px 0px #1A1209",
    accent: "4px 4px 0px #F2C94C",
  };

  const accentMap: Record<AccentColor, string> = {
    yellow: "#F2C94C",
    red: "#E05A4D",
    green: "#4CAF7D",
    blue: "#4A90D9",
    orange: "#E8833A",
  };

  return (
    <div
      className={`paper-card paper-grain ${className}`}
      style={{
        backgroundColor: "#F5F0E8",
        border: "2px solid #1A1209",
        borderRadius: "8px",
        padding: "24px",
        boxShadow: shadowMap[shadow],
        transform: rotate !== 0 ? `rotate(${rotate}deg)` : undefined,
        transition: "box-shadow 200ms cubic-bezier(0.16,1,0.3,1), transform 200ms cubic-bezier(0.16,1,0.3,1)",
        position: "relative",
        ...(accent
          ? { borderLeft: `4px solid ${accentMap[accent]}` }
          : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

/** The Paper button. No gradients. No rounded-xl. Just ink and intention. */
export const PaperButton: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  style = {},
  ...props
}) => {
  const variants = {
    primary: {
      background: "#1A1209",
      color: "#F5F0E8",
      border: "2px solid #1A1209",
      boxShadow: "3px 3px 0px #F2C94C",
    },
    secondary: {
      background: "#F5F0E8",
      color: "#1A1209",
      border: "2px solid #1A1209",
      boxShadow: "3px 3px 0px #1A1209",
    },
    ghost: {
      background: "transparent",
      color: "#1A1209",
      border: "2px solid transparent",
      boxShadow: "none",
      textDecoration: "underline",
    },
    danger: {
      background: "#E05A4D",
      color: "#FAF8F3",
      border: "2px solid #1A1209",
      boxShadow: "3px 3px 0px #1A1209",
    },
  };

  const sizes = {
    sm: { padding: "6px 14px", fontSize: "0.875rem" },
    md: { padding: "10px 20px", fontSize: "1rem" },
    lg: { padding: "14px 28px", fontSize: "1.125rem" },
  };

  return (
    <button
      {...props}
      style={{
        fontFamily: "'Lora', Georgia, serif",
        fontWeight: 500,
        letterSpacing: "0.01em",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "all 120ms cubic-bezier(0.16,1,0.3,1)",
        ...variants[variant],
        ...sizes[size],
        ...style,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        if (variant === "primary") el.style.transform = "translate(-1px, -1px)";
        if (variant === "secondary") el.style.boxShadow = "5px 5px 0px #1A1209";
        props.onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "";
        if (variant === "secondary") el.style.boxShadow = "3px 3px 0px #1A1209";
        props.onMouseLeave?.(e);
      }}
    >
      {children}
    </button>
  );
};

interface BadgeProps {
  children: React.ReactNode;
  color?: AccentColor | "ink";
  variant?: "solid" | "outline";
}

/** Tags, labels, skill chips — the punctuation of a portfolio. */
export const PaperBadge: React.FC<BadgeProps> = ({
  children,
  color = "ink",
  variant = "outline",
}) => {
  const colorMap = {
    yellow: { bg: "#F2C94C", border: "#1A1209", text: "#1A1209" },
    red: { bg: "#E05A4D", border: "#1A1209", text: "#FAF8F3" },
    green: { bg: "#4CAF7D", border: "#1A1209", text: "#1A1209" },
    blue: { bg: "#4A90D9", border: "#1A1209", text: "#FAF8F3" },
    orange: { bg: "#E8833A", border: "#1A1209", text: "#FAF8F3" },
    ink: { bg: "#1A1209", border: "#1A1209", text: "#F5F0E8" },
  };

  const c = colorMap[color];

  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.75rem",
        fontWeight: 400,
        border: `1.5px solid ${c.border}`,
        borderRadius: "4px",
        background: variant === "solid" ? c.bg : "transparent",
        color: variant === "solid" ? c.text : c.bg === "#1A1209" ? "#1A1209" : c.bg,
        letterSpacing: "0.03em",
      }}
    >
      {children}
    </span>
  );
};

interface StickyNoteProps {
  children: React.ReactNode;
  color?: "yellow" | "pink" | "blue" | "green";
  rotate?: number;
}

/** A sticky note. Because some ideas deserve to be pinned. */
export const StickyNote: React.FC<StickyNoteProps> = ({
  children,
  color = "yellow",
  rotate = -2,
}) => {
  const colorMap = {
    yellow: "#F2C94C",
    pink: "#F4A57A",
    blue: "#A8C8F4",
    green: "#A8D5A2",
  };

  return (
    <div
      style={{
        background: colorMap[color],
        border: "1px solid rgba(26,18,9,0.2)",
        borderRadius: "2px",
        padding: "16px",
        boxShadow: "4px 4px 0px rgba(26,18,9,0.15)",
        transform: `rotate(${rotate}deg)`,
        fontFamily: "'Caveat', cursive",
        fontSize: "1.1rem",
        color: "#1A1209",
        lineHeight: 1.5,
        position: "relative",
        transition: "transform 200ms cubic-bezier(0.34,1.56,0.64,1)",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "rotate(0deg) translateY(-4px)";
        e.currentTarget.style.boxShadow = "6px 6px 0px rgba(26,18,9,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotate}deg)`;
        e.currentTarget.style.boxShadow = "4px 4px 0px rgba(26,18,9,0.15)";
      }}
    >
      {children}
    </div>
  );
};

interface HighlightProps {
  children: React.ReactNode;
  color?: AccentColor;
}

/** Inline text highlight — like someone went over it with a marker. */
export const Highlight: React.FC<HighlightProps> = ({
  children,
  color = "yellow",
}) => {
  const colorMap: Record<AccentColor, string> = {
    yellow: "#F2C94C",
    red: "#E05A4D44",
    green: "#4CAF7D44",
    blue: "#4A90D944",
    orange: "#E8833A44",
  };

  return (
    <mark
      style={{
        background: color === "yellow" ? "#F2C94C" : colorMap[color],
        color: "inherit",
        padding: "0 3px",
        borderRadius: "2px",
      }}
    >
      {children}
    </mark>
  );
};

interface AnnotationProps {
  children: React.ReactNode;
  direction?: "left" | "right";
}

/** A handwritten annotation — the aside that makes content human. */
export const Annotation: React.FC<AnnotationProps> = ({
  children,
  direction = "right",
}) => (
  <span
    style={{
      fontFamily: "'Caveat', cursive",
      fontSize: "1rem",
      color: "#5C4F3A",
      display: "inline-block",
      transform: direction === "right" ? "rotate(2deg)" : "rotate(-2deg)",
      marginLeft: direction === "right" ? "8px" : 0,
      marginRight: direction === "left" ? "8px" : 0,
      position: "relative",
    }}
  >
    {direction === "right" ? "← " : ""}{children}{direction === "left" ? " →" : ""}
  </span>
);

interface DividerProps {
  style?: "solid" | "dashed" | "double";
  label?: string;
}

/** The newspaper rule. A line that means business. */
export const PaperDivider: React.FC<DividerProps> = ({
  style: lineStyle = "solid",
  label,
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "16px 0" }}>
    <div style={{ flex: 1, height: lineStyle === "double" ? "3px" : "1px",
      borderTop: lineStyle === "double"
        ? "3px double #1A1209"
        : `1px ${lineStyle} #1A1209` }} />
    {label && (
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.7rem",
        color: "#9B8E7A",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}>
        {label}
      </span>
    )}
    {label && <div style={{ flex: 1, height: "1px", borderTop: `1px ${lineStyle} #1A1209` }} />}
  </div>
);

interface StampProps {
  text: string;
  color?: "red" | "green" | "blue";
}

/** The Stamp. For things that deserve a verdict. */
export const Stamp: React.FC<StampProps> = ({ text, color = "red" }) => {
  const colorMap = {
    red: "#E05A4D",
    green: "#4CAF7D",
    blue: "#4A90D9",
  };

  return (
    <div
      style={{
        display: "inline-block",
        border: `3px solid ${colorMap[color]}`,
        borderRadius: "8px",
        padding: "6px 16px",
        color: colorMap[color],
        fontFamily: "'DM Serif Display', Georgia, serif",
        fontSize: "1.25rem",
        fontStyle: "italic",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        opacity: 0.85,
        transform: "rotate(-8deg)",
        userSelect: "none",
        boxShadow: `inset 0 0 0 1px ${colorMap[color]}33`,
      }}
    >
      {text}
    </div>
  );
};

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

/** Because "No data found" is the most boring thing you can say. */
export const EmptyState: React.FC<EmptyStateProps> = ({ title, description, action }) => (
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "64px 32px",
    textAlign: "center",
    gap: "16px",
  }}>
    {/* Placeholder for sketch illustration */}
    <div style={{
      width: 120, height: 120,
      border: "2px dashed #C8BFB0",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#9B8E7A",
      fontSize: "2.5rem",
    }}>
      ∅
    </div>
    <h3 style={{
      fontFamily: "'DM Serif Display', Georgia, serif",
      fontSize: "1.5rem",
      color: "#1A1209",
      margin: 0,
    }}>
      {title}
    </h3>
    {description && (
      <p style={{
        fontFamily: "'Lora', Georgia, serif",
        color: "#5C4F3A",
        maxWidth: "320px",
        margin: 0,
        fontSize: "0.95rem",
      }}>
        {description}
      </p>
    )}
    {action}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// BRAND REFERENCE PAGE
// ─────────────────────────────────────────────────────────────────────────────

const Section: React.FC<{ title: string; annotation?: string; children: React.ReactNode }> = ({
  title, annotation, children
}) => (
  <section style={{ marginBottom: "64px" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "24px" }}>
      <h2 style={{
        fontFamily: "'DM Serif Display', Georgia, serif",
        fontSize: "2rem",
        color: "#1A1209",
        margin: 0,
        borderBottom: "3px solid #1A1209",
        paddingBottom: "4px",
      }}>
        {title}
      </h2>
      {annotation && <Annotation>{annotation}</Annotation>}
    </div>
    {children}
  </section>
);

const ColorSwatch: React.FC<{ name: string; value: string; dark?: boolean }> = ({ name, value }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
    <div style={{
      width: "80px", height: "80px",
      background: value,
      border: "2px solid #1A1209",
      borderRadius: "4px",
      boxShadow: "3px 3px 0px #1A1209",
    }} />
    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#5C4F3A" }}>
      {name}
    </span>
    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#9B8E7A" }}>
      {value}
    </span>
  </div>
);

export default function BrandReference() {
  return (
    <div style={{
      background: "#F5F0E8",
      minHeight: "100vh",
      fontFamily: "'Lora', Georgia, serif",
      color: "#1A1209",
    }}>
      <style>{globalCSS}</style>

      {/* ── HEADER ── */}
      <header style={{
        borderBottom: "4px solid #1A1209",
        padding: "48px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.75rem",
          color: "#9B8E7A",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}>
          Brand Reference — Internal Use — Not a secret though
        </div>
        <h1 style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontStyle: "italic",
          margin: 0,
          lineHeight: 1,
          color: "#1A1209",
        }}>
          Paper UI
        </h1>
        <p style={{ marginTop: "16px", color: "#5C4F3A", maxWidth: "480px", fontSize: "1.1rem" }}>
          A design system for people who think interfaces should feel like they were{" "}
          <Highlight>made with care</Highlight>, not{" "}
          <Annotation>assembled with regret</Annotation>.
        </p>
        <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <PaperBadge color="ink" variant="solid">v1.0.0</PaperBadge>
          <PaperBadge color="yellow" variant="solid">Paper Design</PaperBadge>
          <PaperBadge color="green" variant="solid">Open Source</PaperBadge>
        </div>
        {/* Decorative rule */}
        <div style={{
          position: "absolute", right: "48px", top: "50%",
          transform: "translateY(-50%) rotate(8deg)",
          opacity: 0.06,
          fontSize: "12rem",
          fontFamily: "'DM Serif Display', Georgia, serif",
          userSelect: "none",
          lineHeight: 1,
        }}>
          §
        </div>
      </header>

      <main style={{ padding: "48px", maxWidth: "1200px", margin: "0 auto" }}>

        {/* ── COLORS ── */}
        <Section title="Color Palette" annotation="warm but not toasty">
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                color: "#9B8E7A",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}>
                Paper Surfaces
              </div>
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                <ColorSwatch name="paper-base" value="#F5F0E8" />
                <ColorSwatch name="paper-light" value="#FAF8F3" />
                <ColorSwatch name="paper-aged" value="#EDE4D0" />
                <ColorSwatch name="paper-cream" value="#FFF9F0" />
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#9B8E7A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Ink</div>
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                <ColorSwatch name="ink-black" value="#1A1209" />
                <ColorSwatch name="ink-dark" value="#2C2416" />
                <ColorSwatch name="ink-medium" value="#5C4F3A" />
                <ColorSwatch name="ink-light" value="#9B8E7A" />
                <ColorSwatch name="ink-faint" value="#C8BFB0" />
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#9B8E7A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Accents</div>
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                <ColorSwatch name="accent-yellow" value="#F2C94C" />
                <ColorSwatch name="accent-red" value="#E05A4D" />
                <ColorSwatch name="accent-green" value="#4CAF7D" />
                <ColorSwatch name="accent-blue" value="#4A90D9" />
                <ColorSwatch name="accent-orange" value="#E8833A" />
              </div>
            </div>
          </div>
        </Section>

        <PaperDivider style="double" label="Typography" />

        {/* ── TYPOGRAPHY ── */}
        <Section title="Typography" annotation="the soul of the thing">
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#9B8E7A", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Display — DM Serif Display
              </span>
              <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "3.5rem", fontStyle: "italic", margin: "8px 0", lineHeight: 1.1, color: "#1A1209" }}>
                Good ideas deserve good typography.
              </p>
            </div>
            <div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#9B8E7A", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Body — Lora
              </span>
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "1rem", margin: "8px 0", lineHeight: 1.75, color: "#2C2416", maxWidth: "640px" }}>
                This is body text, rendered in Lora. It's designed to be read, not skimmed. Which is why it has good line height and a serif that makes long-form content feel like something worth finishing. Unlike most SaaS landing pages.
              </p>
            </div>
            <div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#9B8E7A", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Mono — JetBrains Mono
              </span>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.875rem", margin: "8px 0", color: "#1A1209" }}>
                const shipped = true; // allegedly
              </p>
            </div>
            <div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#9B8E7A", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Handwritten — Caveat
              </span>
              <p style={{ fontFamily: "'Caveat', cursive", fontSize: "1.4rem", margin: "8px 0", color: "#5C4F3A", transform: "rotate(-1deg)", display: "inline-block" }}>
                ← this is where the personality lives
              </p>
            </div>
          </div>
        </Section>

        <PaperDivider style="solid" label="Components" />

        {/* ── BUTTONS ── */}
        <Section title="Buttons" annotation="no gradients were harmed">
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <PaperButton variant="primary">See the work</PaperButton>
            <PaperButton variant="secondary">Read more</PaperButton>
            <PaperButton variant="ghost">Skip this part</PaperButton>
            <PaperButton variant="danger">Delete (carefully)</PaperButton>
            <PaperButton variant="primary" size="sm">Small</PaperButton>
            <PaperButton variant="primary" size="lg">Large</PaperButton>
          </div>
        </Section>

        {/* ── BADGES ── */}
        <Section title="Badges & Tags" annotation="labels for the labeled">
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <PaperBadge color="ink" variant="solid">TypeScript</PaperBadge>
            <PaperBadge color="yellow" variant="solid">Highlighted</PaperBadge>
            <PaperBadge color="green" variant="solid">Shipped</PaperBadge>
            <PaperBadge color="red" variant="solid">Breaking</PaperBadge>
            <PaperBadge color="blue" variant="solid">Info</PaperBadge>
            <PaperBadge color="orange" variant="solid">WIP</PaperBadge>
            <PaperBadge color="ink" variant="outline">Next.js</PaperBadge>
            <PaperBadge color="blue" variant="outline">React</PaperBadge>
          </div>
        </Section>

        {/* ── CARDS ── */}
        <Section title="Cards" annotation="stacked like a messy desk">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
            <PaperCard shadow="lift2">
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#9B8E7A", marginBottom: "8px" }}>PROJECT — 2024</div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.5rem", margin: "0 0 8px 0" }}>The Thing I Built</h3>
              <p style={{ fontSize: "0.9rem", color: "#5C4F3A", margin: "0 0 16px 0", lineHeight: 1.6 }}>A brief description of something I made that actually worked. Most of the time.</p>
              <div style={{ display: "flex", gap: "8px" }}>
                <PaperBadge color="ink" variant="solid">React</PaperBadge>
                <PaperBadge color="blue" variant="outline">TypeScript</PaperBadge>
              </div>
            </PaperCard>

            <PaperCard shadow="lift3" accent="yellow">
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#9B8E7A", marginBottom: "8px" }}>FEATURED</div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.5rem", margin: "0 0 8px 0" }}>Accent Card</h3>
              <p style={{ fontSize: "0.9rem", color: "#5C4F3A", margin: 0, lineHeight: 1.6 }}>Left border accent in yellow. Use sparingly — like all good things.</p>
            </PaperCard>

            <PaperCard shadow="lift1" style={{ background: "#1A1209", color: "#F5F0E8" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#9B8E7A", marginBottom: "8px" }}>INVERTED</div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.5rem", margin: "0 0 8px 0", color: "#F5F0E8" }}>Dark Card</h3>
              <p style={{ fontSize: "0.9rem", color: "#9B8E7A", margin: 0, lineHeight: 1.6 }}>For contrast. Like turning the page over.</p>
            </PaperCard>
          </div>
        </Section>

        {/* ── STICKY NOTES ── */}
        <Section title="Sticky Notes" annotation="ideas that haven't graduated yet">
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", paddingBottom: "16px" }}>
            <StickyNote color="yellow" rotate={-3}>
              Ship it. You can fix it later. <br />
              (You won't fix it later.)
            </StickyNote>
            <StickyNote color="pink" rotate={2}>
              TODO: make this look intentional
            </StickyNote>
            <StickyNote color="blue" rotate={-1}>
              "Perfect is the enemy of shipped" <br />
              — someone who shipped something broken
            </StickyNote>
            <StickyNote color="green" rotate={3}>
              ✓ Made the deadline <br />
              ✓ Technically
            </StickyNote>
          </div>
        </Section>

        {/* ── STAMPS ── */}
        <Section title="Stamps" annotation="official-ish">
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", alignItems: "center" }}>
            <Stamp text="Approved" color="green" />
            <Stamp text="Draft" color="blue" />
            <Stamp text="Rejected" color="red" />
          </div>
        </Section>

        {/* ── HIGHLIGHTS & ANNOTATIONS ── */}
        <Section title="Inline Elements" annotation="the spice rack">
          <div style={{ maxWidth: "640px" }}>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.85, color: "#2C2416" }}>
              Great design is <Highlight color="yellow">always intentional</Highlight>. Even the parts that look accidental — especially those.{" "}
              <Annotation>trust me on this one</Annotation> The goal is to make something that feels{" "}
              <Highlight color="green">made</Highlight>, not generated.
            </p>
          </div>
        </Section>

        {/* ── SHADOWS ── */}
        <Section title="The Shadow System" annotation="depth without deception">
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", alignItems: "flex-end" }}>
            {(["flat", "lift1", "lift2", "lift3", "lift4", "accent"] as ShadowLevel[]).map((s) => {
              const shadowMap: Record<ShadowLevel, string> = {
                flat: "none", lift1: "3px 3px 0px #1A1209", lift2: "5px 5px 0px #1A1209",
                lift3: "8px 8px 0px #1A1209", lift4: "12px 12px 0px #1A1209", accent: "4px 4px 0px #F2C94C",
              };
              return (
                <div key={s} style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
                  <div style={{
                    width: "80px", height: "80px",
                    background: "#F5F0E8",
                    border: "2px solid #1A1209",
                    borderRadius: "4px",
                    boxShadow: shadowMap[s],
                  }} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#9B8E7A" }}>
                    {s}
                  </span>
                </div>
              );
            })}
          </div>
        </Section>

        {/* ── EMPTY STATE ── */}
        <Section title="Empty State" annotation="nothing here, by design">
          <PaperCard shadow="lift1">
            <EmptyState
              title="Nothing here yet."
              description="Unlike my commit history, this section is suspiciously clean. Check back later — or don't, it's a free country."
              action={<PaperButton variant="secondary" size="sm">Add something</PaperButton>}
            />
          </PaperCard>
        </Section>

        <PaperDivider style="double" />

        {/* ── FOOTER ── */}
        <footer style={{
          paddingTop: "32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "16px",
        }}>
          <div>
            <p style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "1.1rem",
              color: "#9B8E7A",
              margin: 0,
              transform: "rotate(-1deg)",
              display: "inline-block",
            }}>
              Made with ☕ and mild sleep deprivation.
            </p>
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            color: "#C8BFB0",
            letterSpacing: "0.05em",
          }}>
            paper-ui © {new Date().getFullYear()} — use it, don't abuse it
          </div>
        </footer>
      </main>
    </div>
  );
}
