export const IconCheck = (p) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const IconStar = (p) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path d="M12 2l3 6.6 7 .9-5 4.8 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.8 7-.9z" />
  </svg>
);

export const IconPhone = (p) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const IconMail = (p) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="M3 6.5l9 6.5 9-6.5" />
  </svg>
);

export const IconClock = (p) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconPin = (p) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconShield = (p) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 3l8 4v5c0 5-3.4 8.4-8 9.5C7.4 20.4 4 17 4 12V7l8-4z" />
  </svg>
);

export const IconBuilding = (p) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 21h18M6 21V9l6-5 6 5v12" />
  </svg>
);

export const IconArrow = (p) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconPlus = (p) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconLogo = (p) => (
  <img
    src="/logo.jpeg"
    alt="ICEARK Enterprises"
    width={42}
    height={42}
    style={{ objectFit: 'contain', display: 'block' }}
    {...p}
  />
);

/* Service icons ------------------------------------------------ */
export const serviceIcons = {
  interior: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 10.5L12 3l9 7.5" /><path d="M5.5 9.5V21h13V9.5" /><path d="M10 21v-6h4v6" />
    </svg>
  ),
  exterior: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2.5" y="4" width="13" height="6" rx="1.6" />
      <path d="M15.5 7h4v4.5H13v3" />
      <rect x="11.2" y="14.5" width="3.6" height="6.5" rx="1.2" />
      <path d="M4 20h6" />
    </svg>
  ),
  commercial: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3.5" y="3" width="10" height="18" rx="1.2" />
      <rect x="13.5" y="9" width="7" height="12" rx="1.2" />
      <path d="M6.5 7h1M9.5 7h1M6.5 11h1M9.5 11h1M6.5 15h1M9.5 15h1M16.5 12.5h1M16.5 16h1" />
    </svg>
  ),
  cabinets: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M12 3v18M9 10.5v2.5M15 10.5v2.5" />
    </svg>
  ),
  drywall: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 21l6.5-6.5" />
      <path d="M9 14.5l7.5-7.5 4 4-7.5 7.5z" />
      <path d="M14 5.5l2-2 4 4-2 2" />
    </svg>
  ),
  decks: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 7h18M3 12h18M3 17h18M7 7v10M12 7v10M17 7v10" />
    </svg>
  ),
};