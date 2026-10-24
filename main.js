/**
 * dousanmiao.com Structural Replication System for uxsarvesh.in
 * Core Controller: Case Study Modals, Dubai Live Clock, Interactive Ruler, Theme Engine, Cursor
 */

// --- VERCEL TELEMETRY INITIALIZATION (SPEED INSIGHTS & WEB ANALYTICS) ---
(function initVercelTelemetry() {
  if (typeof window === 'undefined') return;
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };

  // Guarantee SDK attributes exist on the Speed Insights script tag
  const siScript = document.querySelector('script[src*="/_vercel/speed-insights/script.js"]');
  if (siScript) {
    if (!siScript.getAttribute('data-sdkn')) siScript.setAttribute('data-sdkn', '@vercel/speed-insights');
    if (!siScript.getAttribute('data-sdkv')) siScript.setAttribute('data-sdkv', '2.0.0');
    if (!siScript.getAttribute('data-route')) {
      const cleanPath = window.location.pathname.replace(/\.html$/, '') || '/';
      siScript.setAttribute('data-route', cleanPath);
    }
  }
})();

// --- 1. CASE STUDY AUTHENTIC DATA STORE ---
const CASE_STUDIES = [
  {
    id: 'aura-gold',
    title: 'Aura Gold',
    subtitle: 'Invest in 24k gold daily for the price of a cup of chai',
    badgeText: 'Shipped',
    badgeClass: 'shipped',
    image: 'assets/images/card-aura-gold.jpg',
    intro: 'Aura Gold is a revolutionary micro-investing platform designed to make wealth creation accessible, secure, and effortless for retail users. By breaking down traditional high entry barriers, users can accumulate 24k pure digital gold starting at just ₹10 ($0.12).',
    product: 'Aura Gold Mobile App',
    role: 'Lead Product Designer',
    timeline: '2022 - 2023',
    skills: 'Fintech Micro-investing, Mobile UX, Design System, Interaction Prototyping',
    team: 'Sarvesh Sawardekar (Lead Designer), Fintech Product Engineering Team',
    problemTitle: 'Problem: The Psychological Barrier to Wealth Creation',
    problemBody: 'In emerging markets, gold has traditionally been bought in physical, high-denomination increments during festivals or milestone events. Retail millennials and daily earners were locked out due to liquidity constraints, volatile lump-sum costs, and security anxieties around physical storage.',
    problemBullets: [
      'High minimum investment thresholds deterred first-time micro-investors.',
      'Complex multi-step KYC and opaque pricing structures drove high onboarding drop-offs.',
      'Lack of real-time price transparency diminished trust in digital asset custody.'
    ],
    solutionTitle: 'Solution: The "Chai Rule" & Habitual Micro-Savings',
    solutionBody: 'We redesigned the transaction architecture around relatable daily micro-habits—anchoring the price of daily gold investment to the cost of a cup of chai (₹10). The user journey was condensed into a 3-tap instant checkout with automated recurring SIPs and live price locking.',
    solutionBullets: [
      'Introduced frictionless 1-tap recurring micro-deposits backed by 24k 99.9% hallmarked physical vaults.',
      'Engineered a live transparent price ladder with real-time sell-back liquidity to bank accounts.',
      'Designed a gamified milestone tracker celebrating micro-gram accumulation habits.'
    ],
    ctaTitle: 'Explore Live Interactive Prototype',
    ctaSub: 'Experience the verified high-fidelity user flows and interactive state transitions in Figma.',
    ctaLink: 'https://www.figma.com/proto/lPSvl9AWQaL5s1AQCuWfF8/Sarvesh---Case-Study?node-id=2246-1301&t=ZVpIg2cDz2hmR8Ln-1&scaling=min-zoom&content-scaling=fixed&page-id=2242%3A998',
    ctaText: 'Open Figma Prototype ↗'
  },
  {
    id: 'icici-lombard',
    title: 'ICICI Lombard Revamp',
    subtitle: 'A one-stop wellness and insurance solution for millions',
    badgeText: 'Shipped',
    badgeClass: 'shipped',
    image: 'assets/images/card-icici.jpg',
    intro: 'Comprehensive redesign of ICICI Lombard’s flagship mobile app (IL Take Care). Modernizing the policyholder journey with simplified claim processing, real-time wellness tracking, telemedicine consultations, and unified policy management across Health, Motor, and Travel.',
    product: 'IL Take Care Mobile Ecosystem',
    role: 'Senior UI/UX Designer',
    timeline: '2023 - 2024',
    skills: 'Insurtech UX, Claims Architecture, WCAG 2.1 Accessibility, Multi-device Systems',
    team: 'Sarvesh Sawardekar (Senior UI/UX), Clover Infotech & ICICI Lombard Digital Team',
    problemTitle: 'Problem: Fragmented Navigation & Opaque Claims Anxiety',
    problemBody: 'Policyholders frequently open insurance apps during stressful emergency moments—such as vehicle accidents or medical hospitalization. The legacy interface suffered from high cognitive friction, convoluted terminology, and lack of live claims visibility.',
    problemBullets: [
      'Claims filing required navigating through nested multi-tier forms with frequent error states.',
      'Users struggled to locate policy coverage terms, leading to overloaded customer support hotlines.',
      'Low daily active engagement between yearly policy renewal cycles.'
    ],
    solutionTitle: 'Solution: Empathy-Driven Claims & Unified Wellness',
    solutionBody: 'We re-architected the entire information architecture around rapid emergency action and continuous preventive wellness. Featuring instant cashless hospital search, photo-guided motor claim filing, and "Ria" AI virtual assistance.',
    solutionBullets: [
      'Constructed a 3-step express claim submission flow with real-time progress milestone tracking.',
      'Consolidated multi-vertical policies (Motor, Health, Home) into a single glanceable dashboard.',
      'Embedded preventive wellness tracking (step counter, health checks, doctor consultations) to sustain daily retention.'
    ],
    ctaTitle: 'Inspect Full Case Study & Flows',
    ctaSub: 'View the validated end-to-end design artifacts, component guidelines, and prototype in Figma.',
    ctaLink: 'https://www.figma.com/proto/lPSvl9AWQaL5s1AQCuWfF8/Sarvesh---Case-Study?node-id=2027-1676&p=f&t=8qX09Rgeth69CF3z-1&scaling=contain&content-scaling=fixed&page-id=2027%3A1675',
    ctaText: 'Open Figma Prototype ↗'
  },
  {
    id: 'invusprop',
    title: 'Invusprop Real Estate App',
    subtitle: 'Comprehensive property ecosystem with integrated loan assistance',
    badgeText: 'Shipped',
    badgeClass: 'shipped',
    image: 'assets/images/card-invusprop.jpg',
    intro: 'Invusprop is an end-to-end real estate and proptech mobile ecosystem designed to simplify the complex journey of buying, selling, and renting residential and commercial properties with built-in mortgage eligibility pre-approval.',
    product: 'Invusprop PropTech App',
    role: 'Product Designer',
    timeline: '2022',
    skills: 'Proptech Discovery, Interactive Map UI, Financial Calculator UX, User Research',
    team: 'Sarvesh Sawardekar (Product Designer), Mobile Development Squad',
    problemTitle: 'Problem: Disconnected Discovery & Financing Paralysis',
    problemBody: 'Property seekers faced severe friction jumping between fragmented listing platforms, unverified broker contacts, and confusing bank mortgage eligibility calculators. Home buyers experienced decision fatigue and high drop-off before property viewings.',
    problemBullets: [
      'Inaccurate or duplicate property listings degraded buyer trust.',
      'Financing approval was completely decoupled from listing discovery, causing late-stage deal collapse.',
      'Property tour scheduling required endless manual phone coordination.'
    ],
    solutionTitle: 'Solution: Map-First Discovery with Instant Pre-Qualification',
    solutionBody: 'We designed a cohesive experience combining geo-spatial map exploration with instant neighborhood analytics (schools, transit, amenities) and automated home loan pre-qualification directly on property cards.',
    solutionBullets: [
      'Interactive vector map view with dynamic price cluster filtering and street-level preview.',
      'Integrated EMI and mortgage calculator providing real-time monthly payment estimates per listing.',
      'Instant 1-click in-app tour scheduling with direct verified agent chat.'
    ],
    ctaTitle: 'View Behance Deep Dive',
    ctaSub: 'Read the comprehensive UX discovery study, persona breakdowns, and high-res screen designs on Behance.',
    ctaLink: 'https://www.behance.net/gallery/238900229/Invusprop-Real-Estate-Case-Study',
    ctaText: 'View on Behance ↗'
  },
  {
    id: 'intelli',
    title: 'Intelli — Design System',
    subtitle: 'Scalable design system for digital transaction banking platforms',
    badgeText: 'Shipped',
    badgeClass: 'shipped',
    image: 'assets/images/card-intelli.jpg',
    intro: 'Transforming digital transaction banking and corporate cash management experiences through a unified, multi-brand, multi-tenant design system. Engineered to empower product and development teams to ship compliant, accessible financial interfaces at scale.',
    product: 'Enterprise Banking Design System',
    role: 'UI/UX Design Lead',
    timeline: '2024 - 2025',
    skills: 'Design Tokens, Multi-tenant Architecture, WCAG 2.1 AA, Banking Governance',
    team: 'Sarvesh Sawardekar (Design Lead), Intellect Design Arena Global Core Banking Team',
    problemTitle: 'Problem: Siloed Banking Portals & Fragmented Design Debt',
    problemBody: 'Corporate banking applications across multiple international client banks (National Bank of Fujairah, National Bank of Kuwait, ADIB, ANZ Bank, Riyad Bank) were built on disparate legacy frameworks, leading to high maintenance overhead and inconsistent user experiences.',
    problemBullets: [
      'Duplicated engineering efforts across treasury, liquidity, trade finance, and payments modules.',
      'Accessibility non-compliance across complex data tables and transaction audit logs.',
      'Inability to rapidly white-label platforms for global tier-1 institutional clients.'
    ],
    solutionTitle: 'Solution: Atomic Tokenized Design System & Governance',
    solutionBody: 'We established an atomic design architecture with a three-tiered token model (Global, Semantic, Component) enabling instant theming and robust white-labeling across desktop portals, tablets, and mobile banking apps.',
    solutionBullets: [
      'Standardized over 80+ enterprise financial components including complex financial ledgers and approvals.',
      'Strict WCAG 2.1 AA compliance across contrast, keyboard accessibility, and screen reader annotations.',
      'Accelerated product delivery lead time by over 40% across cross-functional engineering teams.'
    ],
    ctaTitle: 'Inspect Intelli Design System',
    ctaSub: 'Explore token documentation, component libraries, and interactive banking prototypes in Figma.',
    ctaLink: 'https://www.figma.com/proto/lPSvl9AWQaL5s1AQCuWfF8/Sarvesh---Case-Study?node-id=3-707&p=f&t=dvrdHMbfySsQQqF5-1&scaling=scale-down&content-scaling=fixed&page-id=3%3A2',
    ctaText: 'Open Figma Prototype ↗'
  },
  {
    id: 'halapark',
    title: 'HalaPark 2.0 & Design System',
    subtitle: 'Redesigning parking discovery, spot booking & scalable design system',
    badgeText: 'Shipped',
    badgeClass: 'shipped',
    image: 'assets/images/card-halapark.jpg',
    intro: 'HalaPark 2.0 is an end-to-end mobile parking ecosystem designed to make finding, booking, and managing parking spots faster, clearer, and stress-free for drivers. Built with a modular 4-stage tokenized design system scaling from foundation primitives to full commercial interfaces.',
    product: 'HalaPark 2.0 Mobile App & Design System',
    role: 'Lead Product Designer',
    timeline: '2025 - 2026',
    skills: 'Mobile UX/UI, Design Tokens, Modular Design System, Geo-spatial Map Discovery, High-Stress Workflows',
    team: 'Sarvesh Sawardekar (Lead Product Designer), Mobile Engineering & Operations Squad',
    problemTitle: 'Problem: Driving Stress, Visual Clutter & Fragmented Checkout',
    problemBody: 'Finding and paying for parking should never add cognitive stress when navigating high-density traffic. In the baseline product, drivers struggled with competing map layers, dense modal sheets, and fragmented payment flows that triggered high booking drop-offs.',
    problemBullets: [
      'Cluttered map pins and competing UI layers created severe cognitive overload during transit.',
      'Fragmented multi-step booking flow caused high drop-off before driver spot arrival.',
      'Inconsistent component patterns created technical debt across iOS and Android builds.'
    ],
    solutionTitle: 'Solution: 4-Stage Architecture, Live Availability & Design System',
    solutionBody: 'We re-architected the entire mobile journey around quick-glance driving ergonomics: dynamic price pins on live vector maps, single-tap spot booking, active session timer widgets, and a modular tokenized design system.',
    solutionBullets: [
      'Engineered dynamic price pins with instant spot availability and proximity filtering.',
      'Constructed a 4-stage tokenized design system (Foundation Tokens → Primitives → Transaction Patterns → Adaptive Screens).',
      'Designed an interactive post-booking session widget with live slot guidance and countdown timer.'
    ],
    ctaTitle: 'Explore Full Case Study & Design System',
    ctaSub: 'Inspect the comprehensive design breakdown, baseline screen audits, token architecture, and outcome metrics.',
    ctaLink: 'case-study-halapark.html',
    ctaText: 'Open Full Case Study Page ↗'
  }
];

// --- 2. GLOBAL STATE ---
let currentProjectIndex = 0;

// --- 3. DOM ELEMENTS ---
const modalBackdrop = document.getElementById('projectModalBackdrop');
const modalWindow = document.getElementById('projectModalWindow');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalPrevBtn = document.getElementById('modalPrevBtn');
const modalNextBtn = document.getElementById('modalNextBtn');

const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalBadge = document.getElementById('modalBadge');
const modalHeroImg = document.getElementById('modalHeroImg');
const modalIntro = document.getElementById('modalIntro');
const modalProduct = document.getElementById('modalProduct');
const modalRole = document.getElementById('modalRole');
const modalTimeline = document.getElementById('modalTimeline');
const modalSkills = document.getElementById('modalSkills');
const modalProblemTitle = document.getElementById('modalProblemTitle');
const modalProblemBody = document.getElementById('modalProblemBody');
const modalProblemBullets = document.getElementById('modalProblemBullets');
const modalSolutionTitle = document.getElementById('modalSolutionTitle');
const modalSolutionBody = document.getElementById('modalSolutionBody');
const modalSolutionBullets = document.getElementById('modalSolutionBullets');
const modalCtaTitle = document.getElementById('modalCtaTitle');
const modalCtaSub = document.getElementById('modalCtaSub');
const modalCtaLink = document.getElementById('modalCtaLink');

const themeSwitchLight = document.getElementById('themeSwitchLight');
const themeSwitchDark = document.getElementById('themeSwitchDark');
const modalThemeSwitch = document.getElementById('modalThemeSwitch');
const navThemeToggle = document.getElementById('navThemeToggle');

const copyEmailBtn = document.getElementById('copyEmailBtn');
const toastNotification = document.getElementById('toastNotification');
const cursorFollower = document.getElementById('customCursorFollower');

// --- 4. THEME CONTROLLER ---
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const activeTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(activeTheme);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  if (themeSwitchDark && themeSwitchLight) {
    if (theme === 'dark') {
      themeSwitchDark.classList.add('active');
      themeSwitchLight.classList.remove('active');
    } else {
      themeSwitchLight.classList.add('active');
      themeSwitchDark.classList.remove('active');
    }
  }

  // Dynamic Theme Label:
  // On light mode it displays "Dark mode"
  // On dark mode it displays "Light mode"
  const themeLabels = document.querySelectorAll('.theme-toggle-label');
  themeLabels.forEach(label => {
    label.textContent = (theme === 'dark') ? 'Light mode' : 'Dark mode';
  });

  if (navThemeToggle) {
    if (theme === 'dark') {
      navThemeToggle.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>`;
      navThemeToggle.setAttribute('aria-label', 'Switch to light mode');
      navThemeToggle.setAttribute('title', 'Switch to light mode');
    } else {
      navThemeToggle.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path class="theme-icon-moon" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>`;
      navThemeToggle.setAttribute('aria-label', 'Switch to dark mode');
      navThemeToggle.setAttribute('title', 'Switch to dark mode');
    }
  }
}

if (themeSwitchLight) {
  themeSwitchLight.addEventListener('click', () => setTheme('light'));
}
if (themeSwitchDark) {
  themeSwitchDark.addEventListener('click', () => setTheme('dark'));
}

if (navThemeToggle) {
  navThemeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}

if (modalThemeSwitch) {
  modalThemeSwitch.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}

// --- 5. CASE STUDY MODAL ENGINE ---
function openCaseStudy(indexOrId) {
  if (indexOrId === 'document-retrieval-ai' || indexOrId === 'fdf' || indexOrId === 'fdf-ai' || indexOrId === 'fdf-ai-assistant' || indexOrId === 'ai-chatbot') {
    window.location.href = 'case-study-document-retrieval-ai.html';
    return;
  }
  if (indexOrId === 'impactguru' || indexOrId === 'impactguru-donor-app' || indexOrId === 'donor-app') {
    window.location.href = 'case-study-impactguru.html';
    return;
  }
  if (!modalBackdrop) return;
  let idx = 0;
  if (typeof indexOrId === 'number') {
    idx = indexOrId;
  } else {
    const found = CASE_STUDIES.findIndex(p => 
      p.id === indexOrId || 
      (indexOrId === 'icici' && p.id === 'icici-lombard') ||
      (indexOrId === 'halapark-2' && p.id === 'halapark')
    );
    if (found !== -1) idx = found;
  }
  
  if (idx < 0) idx = 0;
  if (idx >= CASE_STUDIES.length) idx = CASE_STUDIES.length - 1;
  currentProjectIndex = idx;
  
  const project = CASE_STUDIES[currentProjectIndex];
  
  // Populate content
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalSubtitle) modalSubtitle.textContent = project.subtitle;
  if (modalBadge) {
    modalBadge.innerHTML = `<span class="dot"></span> ${project.badgeText}`;
    modalBadge.className = `status-badge ${project.badgeClass}`;
  }
  if (modalHeroImg) {
    modalHeroImg.src = project.image;
    modalHeroImg.alt = `${project.title} Case Study Preview`;
  }
  if (modalIntro) modalIntro.textContent = project.intro;
  
  if (modalProduct) modalProduct.textContent = project.product;
  if (modalRole) modalRole.textContent = project.role;
  if (modalTimeline) modalTimeline.textContent = project.timeline;
  if (modalSkills) modalSkills.textContent = project.skills;
  
  if (modalProblemTitle) modalProblemTitle.textContent = project.problemTitle;
  if (modalProblemBody) modalProblemBody.textContent = project.problemBody;
  if (modalProblemBullets) modalProblemBullets.innerHTML = project.problemBullets.map(b => `<li>${b}</li>`).join('');
  
  if (modalSolutionTitle) modalSolutionTitle.textContent = project.solutionTitle;
  if (modalSolutionBody) modalSolutionBody.textContent = project.solutionBody;
  if (modalSolutionBullets) modalSolutionBullets.innerHTML = project.solutionBullets.map(b => `<li>${b}</li>`).join('');
  
  if (modalCtaTitle) modalCtaTitle.textContent = project.ctaTitle;
  if (modalCtaSub) modalCtaSub.textContent = project.ctaSub;
  if (modalCtaLink) {
    modalCtaLink.href = project.ctaLink;
    modalCtaLink.textContent = project.ctaText;
    if (project.ctaLink.startsWith('http')) {
      modalCtaLink.target = '_blank';
      modalCtaLink.rel = 'noopener';
    } else {
      modalCtaLink.removeAttribute('target');
      modalCtaLink.removeAttribute('rel');
    }
  }
  
  // Open modal & reset scroll
  modalBackdrop.scrollTop = 0;
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  window.location.hash = `#${project.id}`;

  if (modalCtaLink) {
    modalCtaLink.onclick = () => {
      trackEvent('project_external_link', {
        project_id: project.id,
        project_name: project.title,
        destination_url: project.ctaLink
      });
    };
  }

  trackEvent('case_study_open', {
    project_id: project.id,
    project_name: project.title
  });
}

function closeCaseStudy() {
  if (!modalBackdrop) return;
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
  if (window.location.hash.startsWith('#')) {
    history.pushState(null, '', window.location.pathname);
  }
}

function nextCaseStudy() {
  const nextIdx = (currentProjectIndex + 1) % CASE_STUDIES.length;
  openCaseStudy(nextIdx);
}

function prevCaseStudy() {
  const prevIdx = (currentProjectIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length;
  openCaseStudy(prevIdx);
}

// Modal event listeners
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCaseStudy);
if (modalPrevBtn) modalPrevBtn.addEventListener('click', prevCaseStudy);
if (modalNextBtn) modalNextBtn.addEventListener('click', nextCaseStudy);

if (modalBackdrop) {
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeCaseStudy();
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (!modalBackdrop || !modalBackdrop.classList.contains('open')) return;
  if (e.key === 'Escape') closeCaseStudy();
  if (e.key === 'ArrowRight') nextCaseStudy();
  if (e.key === 'ArrowLeft') prevCaseStudy();
});

// Card click handlers
document.querySelectorAll('.project-card[data-project-id]').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-project-id');
    openCaseStudy(id);
  });
});

// URL hash router on page load
window.addEventListener('load', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'document-retrieval-ai' || hash === 'fdf' || hash === 'fdf-ai' || hash === 'fdf-ai-assistant' || hash === 'ai-chatbot') {
    window.location.href = 'case-study-document-retrieval-ai.html';
    return;
  }
  if (hash === 'impactguru' || hash === 'impactguru-donor-app' || hash === 'donor-app') {
    window.location.href = 'case-study-impactguru.html';
    return;
  }
  if (hash && modalBackdrop) {
    const match = CASE_STUDIES.find(p => p.id === hash);
    if (match) openCaseStudy(match.id);
  }
});

// --- 6. CUSTOM CURSOR FOLLOWER ---
if (cursorFollower && window.matchMedia('(pointer: fine)').matches) {
  let mouseX = -100, mouseY = -100;
  let cursorX = -100, cursorY = -100;
  let isHovering = false;
  let isTicking = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(renderCursor);
    }
  }, { passive: true });

  document.querySelectorAll('.project-card, .card-architecture-showcase').forEach(card => {
    card.addEventListener('mouseenter', () => {
      isHovering = true;
      cursorFollower.classList.add('visible');
    });
    card.addEventListener('mouseleave', () => {
      isHovering = false;
      cursorFollower.classList.remove('visible');
    });
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.25;
    cursorY += (mouseY - cursorY) * 0.25;
    cursorFollower.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

    if (Math.abs(mouseX - cursorX) > 0.1 || Math.abs(mouseY - cursorY) > 0.1 || isHovering) {
      requestAnimationFrame(renderCursor);
    } else {
      isTicking = false;
    }
  }
}

// --- 7. DUBAI ANALOG & DIGITAL LIVE CLOCK (SMOOTH QUARTZ SWEEP MOTION) ---
(function initDubaiSmoothClock() {
  const DUBAI_OFFSET_MS = 4 * 60 * 60 * 1000; // Dubai is UTC+4 (GST) year-round
  let lastSecondStr = '';

  function renderDubaiClock() {
    const hourHand = document.getElementById('analogHourHand');
    const minuteHand = document.getElementById('analogMinuteHand');
    const secondHand = document.getElementById('analogSecondHand');
    const digitalDisplay = document.getElementById('dubaiDigitalTime');

    if (!hourHand && !digitalDisplay) {
      // Not on page with clock
      return;
    }

    const now = new Date(Date.now() + DUBAI_OFFSET_MS);
    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();
    const millis = now.getUTCMilliseconds();

    // High-precision fractional second for continuous quartz sweep (no 'tik tik' stepping)
    const smoothSeconds = seconds + (millis / 1000);

    const secondDeg = smoothSeconds * 6; // 360° / 60s = 6° per sec
    const minuteDeg = (minutes * 6) + (smoothSeconds * 0.1); // 360° / 3600s = 0.1° per sec
    const hourDeg = ((hours % 12) * 30) + (minutes * 0.5) + (smoothSeconds * (0.5 / 60));

    if (secondHand) secondHand.setAttribute('transform', `rotate(${secondDeg.toFixed(2)} 50 50)`);
    if (minuteHand) minuteHand.setAttribute('transform', `rotate(${minuteDeg.toFixed(2)} 50 50)`);
    if (hourHand) hourHand.setAttribute('transform', `rotate(${hourDeg.toFixed(2)} 50 50)`);

    // Digital time updates only once per whole second for efficiency
    const sStr = String(seconds).padStart(2, '0');
    if (sStr !== lastSecondStr) {
      lastSecondStr = sStr;
      const hStr = String(hours).padStart(2, '0');
      const mStr = String(minutes).padStart(2, '0');
      if (digitalDisplay) {
        digitalDisplay.textContent = `${hStr}:${mStr}:${sStr}`;
      }
    }

    requestAnimationFrame(renderDubaiClock);
  }

  requestAnimationFrame(renderDubaiClock);
})();

// --- 8. INTERACTIVE CAREER RULER DIAL (LOCKED STRICTLY TO 8+ YEARS) ---
const RESTING_MILESTONE = {
  company: 'Birbal AI UAE',
  role: 'UI/UX Designer (TAMM Ecosystem)',
  years: '8+',
  year: '2026'
};

const CAREER_MILESTONES = {
  0: { company: 'UX Design Journey Starts', role: 'Design Foundation', years: 0, year: '2018' },
  1: { company: 'Powerweave Software', role: 'UI/UX Designer', years: 1, year: '2019' },
  2: { company: 'Fluidscapes Consultants', role: 'UI/UX Designer', years: 2, year: '2020' },
  3: { company: 'Fluidscapes Consultants', role: 'UI/UX Designer', years: 3, year: '2021' },
  4: { company: 'ImpactGuru', role: 'UI/UX Designer', years: 4, year: '2022' },
  5: { company: 'ImpactGuru', role: 'UI/UX Designer', years: 5, year: '2023' },
  6: { company: 'Clover Infotech (ICICI Lombard)', role: 'Senior UI/UX Designer', years: 6, year: '2024' },
  7: { company: 'Intellect Design Arena', role: 'UI/UX Design Lead', years: 7, year: '2025' },
  8: RESTING_MILESTONE
};

const rulerTrack = document.getElementById('rulerTrack');
const rulerTicks = document.querySelectorAll('.ruler-tick[data-year]');
const rulerCompany = document.getElementById('rulerCompany');
const rulerTitle = document.getElementById('rulerTitle');
const rulerYearsVal = document.getElementById('rulerYearsVal');
const rulerYearTag = document.getElementById('rulerYearTag');

function applyMilestone(yr) {
  if (!rulerTicks || rulerTicks.length === 0) return;
  // Hard cap strictly at 8 years — cannot exceed 8 under any circumstances
  const cappedYr = Math.min(Math.max(0, yr), 8);
  const milestone = CAREER_MILESTONES[cappedYr] || RESTING_MILESTONE;
  
  rulerTicks.forEach(t => {
    const tYr = parseInt(t.getAttribute('data-year'), 10);
    t.classList.toggle('highlighted', tYr === cappedYr);
  });
  
  if (rulerCompany) rulerCompany.textContent = milestone.company;
  if (rulerTitle) rulerTitle.textContent = milestone.role;
  if (rulerYearsVal) rulerYearsVal.innerHTML = `${milestone.years}<span>yr</span>`;
  if (rulerYearTag) rulerYearTag.textContent = milestone.year;
}

function resetToRestingMilestone() {
  applyMilestone(8);
}

if (rulerTrack) {
  rulerTrack.addEventListener('mouseleave', resetToRestingMilestone);
}

rulerTicks.forEach(tick => {
  tick.addEventListener('mouseenter', () => {
    const yr = parseInt(tick.getAttribute('data-year'), 10);
    applyMilestone(yr);
  });
  tick.addEventListener('click', () => {
    const yr = parseInt(tick.getAttribute('data-year'), 10);
    applyMilestone(yr);
  });
});

// --- 9. COPY EMAIL WITH FLOATING TOAST ---
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', () => {
    const email = 'sawardekarsarvesh@gmail.com';
    trackEvent('email_click', { action: 'copy_email', email });
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email copied to clipboard! (sawardekarsarvesh@gmail.com)');
    }).catch(() => {
      showToast('Copied: sawardekarsarvesh@gmail.com');
    });
  });
}

function showToast(message) {
  if (!toastNotification) return;
  toastNotification.textContent = message;
  toastNotification.classList.add('active');
  setTimeout(() => {
    toastNotification.classList.remove('active');
  }, 3200);
}

// --- 10. UNIVERSAL FLOATING NAVIGATION CONTROLLER ---
function initNavigation() {
  const header = document.querySelector('.site-nav-header');
  const mobileToggle = document.getElementById('navMobileToggle');
  const mobileDrawer = document.getElementById('navMobileDrawer');

  // 1. Scroll-elevation transition
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Mobile drawer toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileToggle.innerHTML = isOpen ? '✕' : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target) && mobileDrawer.classList.contains('open')) {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      }
    });

    // Close on drawer link click
    mobileDrawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });
  }

  // 3. Smooth scroll for internal hashes (#work)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      if (!targetId) return;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', `#${targetId}`);
      }
    });
  });
}

// --- 11. RECRUITER ANALYTICS & EVENT TRACKING ENGINE (SECTION 22) ---
function trackEvent(eventName, params = {}) {
  try {
    const payload = {
      event_name: eventName,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_path: window.location.pathname,
      ...params
    };

    // Google Analytics 4 integration
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }

    // Private Session Storage Log (Audit trail)
    try {
      const history = JSON.parse(sessionStorage.getItem('ux_analytics_events') || '[]');
      history.push(payload);
      if (history.length > 50) history.shift();
      sessionStorage.setItem('ux_analytics_events', JSON.stringify(history));
    } catch (_) {}

    // Debug logging for developer inspection
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log(`[Recruiter Analytics] ${eventName}:`, params);
    }
  } catch (err) {
    // Fail silently
  }
}

function initRecruiterAnalytics() {
  // Track page_view
  trackEvent('page_view', {
    page_title: document.title,
    page_path: window.location.pathname
  });

  // Track Resume clicks
  document.querySelectorAll('a[href*="drive.google.com"], a[href$=".pdf"], a[href="resume.html"], .nav-resume-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      trackEvent('resume_click', {
        destination_url: btn.getAttribute('href'),
        label: btn.textContent.trim()
      });
    });
  });

  // Track LinkedIn clicks
  document.querySelectorAll('a[href*="linkedin.com"]').forEach(link => {
    link.addEventListener('click', () => {
      trackEvent('linkedin_click', { url: link.href });
    });
  });

  // Track Behance clicks
  document.querySelectorAll('a[href*="behance.net"]').forEach(link => {
    link.addEventListener('click', () => {
      trackEvent('behance_click', { url: link.href });
    });
  });

  // Track mailto clicks
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
      trackEvent('email_click', { action: 'mailto_link', email: link.href.replace('mailto:', '') });
    });
  });

  // Track phone clicks
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
      trackEvent('phone_click', { action: 'tel_link', phone: link.href.replace('tel:', '') });
    });
  });

  // Track Project Card Clicks
  document.querySelectorAll('.project-card[data-project-id]').forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.getAttribute('data-project-id');
      trackEvent('project_view', { project_id: pid });
    });
  });

  // Scroll depth tracking (50% and 90%)
  let tracked50 = false, tracked90 = false;
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if (h <= 0) return;
    const pct = (window.scrollY / h) * 100;
    if (pct >= 50 && !tracked50) {
      tracked50 = true;
      trackEvent('case_study_scroll_50', { depth: 50 });
    }
    if (pct >= 90 && !tracked90) {
      tracked90 = true;
      trackEvent('case_study_scroll_90', { depth: 90 });
    }
  }, { passive: true });

  // Contact form interactions
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    let formStarted = false;
    contactForm.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('focus', () => {
        if (!formStarted) {
          formStarted = true;
          trackEvent('contact_form_start');
        }
      }, { once: true });
    });

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      trackEvent('contact_form_submit');

      const submitBtn = document.getElementById('formSubmitBtn') || contactForm.querySelector('button[type="submit"]');
      const submitText = document.getElementById('formSubmitText');
      const submitIcon = document.getElementById('formSubmitIcon');

      const nameInput = contactForm.querySelector('[name="name"]');
      const emailInput = contactForm.querySelector('[name="email"]');
      const subjectInput = contactForm.querySelector('[name="subject"]');
      const messageInput = contactForm.querySelector('[name="message"]');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        showToast('Please fill out all required fields.');
        return;
      }

      // Update hidden subject field for form submit
      const hiddenSub = document.getElementById('formSubjectHidden');
      if (hiddenSub) {
        hiddenSub.value = `Portfolio Inquiry from ${name}${subject ? ': ' + subject : ''}`;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        if (submitText) submitText.textContent = 'Sending...';
        if (submitIcon) submitIcon.style.opacity = '0.3';
      }

      try {
        const payload = {
          name: name,
          email: email,
          _subject: `Portfolio Message from ${name}${subject ? ': ' + subject : ''}`,
          message: message,
          _replyto: email,
          _template: 'table',
          _captcha: 'false'
        };

        const response = await fetch('https://formsubmit.co/ajax/sawardekarsarvesh@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (response.ok && (data.success === 'true' || data.success === true || (data.message && data.message.toLowerCase().includes('success')))) {
          if (submitText) submitText.textContent = 'Message Sent! ✓';
          contactForm.reset();
          showToast('Thank you! Your message has been sent to Sarvesh.');
        } else if (data.message && data.message.includes('Activation')) {
          if (submitText) submitText.textContent = 'Sent! Check Email';
          contactForm.reset();
          showToast('Form activation email sent to Sarvesh. Please confirm it once.');
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (err) {
        console.warn('FormSubmit AJAX notice:', err);
        // Fallback: If network, CORS, or adblocker interrupts AJAX, offer direct mailto fallback
        if (submitText) submitText.textContent = 'Opening Mail...';
        showToast('Directing to email client so your message is delivered directly...');
        const mailtoBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailtoUrl = `mailto:sawardekarsarvesh@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent(mailtoBody)}`;
        setTimeout(() => {
          window.location.href = mailtoUrl;
        }, 600);
      } finally {
        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            if (submitText) submitText.textContent = 'Send Message';
            if (submitIcon) submitIcon.style.opacity = '1';
          }
        }, 4000);
      }
    });
  }
}

// --- 12. SCROLL-TRIGGERED MOTION (INTERSECTION OBSERVER) ---
function initScrollObserver() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -20px 0px'
  });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// --- 13. ROUTE CARD (BOM -> DXB) HOVER & TOUCH FLIGHT MOTION ---
function initRouteFlightInteraction() {
  const routeCard = document.querySelector('.card-route');
  if (!routeCard) return;

  const arcPath = routeCard.querySelector('#routeFlightPath') || routeCard.querySelector('.route-arc-dashed');
  const planeNode = routeCard.querySelector('#routePlaneNode') || routeCard.querySelector('.route-plane-node');
  if (!arcPath || !planeNode) return;

  let totalLength = 100;
  try {
    totalLength = arcPath.getTotalLength();
  } catch (e) {
    totalLength = 100;
  }

  // Set dasharray to totalLength for smooth dashoffset tracing
  arcPath.style.strokeDasharray = `${totalLength}`;

  // Helper to place plane at a given distance (0 to totalLength)
  function setFlightPosition(dist) {
    const clamped = Math.max(0, Math.min(totalLength, dist));
    const pt = arcPath.getPointAtLength(clamped);
    // Calculate tangent angle smoothly
    const step = 0.8;
    const ptAhead = arcPath.getPointAtLength(Math.min(totalLength, clamped + step));
    const ptBehind = arcPath.getPointAtLength(Math.max(0, clamped - step));
    const dx = ptAhead.x - ptBehind.x;
    const dy = ptAhead.y - ptBehind.y;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    planeNode.setAttribute('transform', `translate(${pt.x.toFixed(2)}, ${pt.y.toFixed(2)}) rotate(${angle.toFixed(2)})`);
  }

  // By default, park plane at destination DXB (totalLength) with dashed trail fully visible
  setFlightPosition(totalLength);
  arcPath.style.strokeDashoffset = '0';

  let animFrameId = null;
  let isFlying = false;

  function triggerFlight() {
    if (isFlying) return;
    isFlying = true;

    if (animFrameId) cancelAnimationFrame(animFrameId);

    const duration = 1350; // ms: Apple-smooth easing
    const startTime = performance.now();

    // Smooth cubic ease-out
    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function frame(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);

      const currentDist = eased * totalLength;
      setFlightPosition(currentDist);

      // Dash offset reveals the line trailing smoothly behind the plane
      arcPath.style.strokeDashoffset = `${totalLength * (1 - eased)}`;

      if (progress < 1) {
        animFrameId = requestAnimationFrame(frame);
      } else {
        setFlightPosition(totalLength);
        arcPath.style.strokeDashoffset = '0';
        isFlying = false;
        if (typeof trackEvent === 'function') {
          trackEvent('flight_route_interaction', { from: 'BOM', to: 'DXB' });
        }
      }
    }

    animFrameId = requestAnimationFrame(frame);
  }

  // Trigger on hover (mouseenter) - NOT in an infinite loop
  routeCard.addEventListener('mouseenter', triggerFlight);
  // Also support click / tap for touch/mobile devices
  routeCard.addEventListener('click', triggerFlight);
  routeCard.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerFlight();
    }
  });
}

// --- 14. BANK PORTFOLIO PRESENTATION OTP AUTHENTICATION ---
function initBankDeckAuth() {
  const bankDeckCard = document.getElementById('bankDeckCard');
  const openBankDeckBtn = document.getElementById('openBankDeckBtn');
  const bankDeckModal = document.getElementById('bankDeckModal');
  const closeBankModalBtn = document.getElementById('closeBankModalBtn');

  if (!bankDeckModal) return;

  const bankStepEmail = document.getElementById('bankStepEmail');
  const bankStepOtp = document.getElementById('bankStepOtp');
  const bankStepSuccess = document.getElementById('bankStepSuccess');

  const bankEmailForm = document.getElementById('bankEmailForm');
  const bankUserEmail = document.getElementById('bankUserEmail');
  const sendOtpBtn = document.getElementById('sendOtpBtn');
  const sendOtpText = document.getElementById('sendOtpText');
  const sendOtpIcon = document.getElementById('sendOtpIcon');
  const bankEmailError = document.getElementById('bankEmailError');

  const displayTargetEmail = document.getElementById('displayTargetEmail');
  const devOtpBanner = document.getElementById('devOtpBanner');
  const bankOtpForm = document.getElementById('bankOtpForm');
  const otpDigits = document.querySelectorAll('.otp-digit');
  const verifyOtpBtn = document.getElementById('verifyOtpBtn');
  const verifyOtpText = document.getElementById('verifyOtpText');
  const verifyOtpIcon = document.getElementById('verifyOtpIcon');
  const bankOtpError = document.getElementById('bankOtpError');

  const resendOtpBtn = document.getElementById('resendOtpBtn');
  const changeEmailBtn = document.getElementById('changeEmailBtn');
  const deckDirectLink = document.getElementById('deckDirectLink');

  let currentTargetEmail = sessionStorage.getItem('pending_otp_email') || '';
  let currentOtpToken = sessionStorage.getItem('pending_otp_token') || '';
  let currentDevOtp = sessionStorage.getItem('pending_otp_dev') || '';
  let isVerifying = false;
  let resendCountdown = 0;
  let resendInterval = null;

  const FIGMA_DECK_DEFAULT = 'https://www.figma.com/deck/A0NRN98GqyeKguCKP742LO/Sarvesh_Sawardekar_Bank_Portfolio?node-id=0-20&t=V1WK0JkyoDSVvel7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1';

  function openModal() {
    const isAlreadyVerified = sessionStorage.getItem('bank_deck_access') === 'true';

    if (isAlreadyVerified) {
      bankStepEmail.style.display = 'none';
      bankStepOtp.style.display = 'none';
      bankStepSuccess.style.display = 'block';
    } else {
      bankStepEmail.style.display = 'block';
      bankStepOtp.style.display = 'none';
      bankStepSuccess.style.display = 'none';
      if (bankEmailError) bankEmailError.style.display = 'none';
      if (bankOtpError) bankOtpError.style.display = 'none';
      setTimeout(() => {
        bankUserEmail?.focus();
      }, 150);
    }

    bankDeckModal.classList.add('is-open');
    bankDeckModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (typeof trackEvent === 'function') {
      trackEvent('bank_deck_modal_open', { verified: isAlreadyVerified });
    }
  }

  function closeModal() {
    bankDeckModal.classList.remove('is-open');
    bankDeckModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (resendInterval) {
      clearInterval(resendInterval);
      resendInterval = null;
    }
  }

  // Trigger modal
  if (bankDeckCard) {
    bankDeckCard.addEventListener('click', (e) => {
      openModal();
    });
    bankDeckCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal();
      }
    });
  }

  if (openBankDeckBtn) {
    openBankDeckBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal();
    });
  }

  if (closeBankModalBtn) {
    closeBankModalBtn.addEventListener('click', closeModal);
  }

  bankDeckModal.addEventListener('click', (e) => {
    if (e.target === bankDeckModal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bankDeckModal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Resend Countdown Timer
  function startResendTimer() {
    if (resendInterval) clearInterval(resendInterval);
    resendCountdown = 60;
    if (resendOtpBtn) {
      resendOtpBtn.disabled = true;
      resendOtpBtn.textContent = `Resend in ${resendCountdown}s`;
    }
    resendInterval = setInterval(() => {
      resendCountdown--;
      if (resendCountdown <= 0) {
        clearInterval(resendInterval);
        resendInterval = null;
        if (resendOtpBtn) {
          resendOtpBtn.disabled = false;
          resendOtpBtn.textContent = 'Resend code';
        }
      } else {
        if (resendOtpBtn) {
          resendOtpBtn.textContent = `Resend in ${resendCountdown}s`;
        }
      }
    }, 1000);
  }

  // Step 1: Send OTP
  if (bankEmailForm) {
    bankEmailForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = bankUserEmail.value.trim().toLowerCase();
      if (!email) return;

      if (bankEmailError) bankEmailError.style.display = 'none';
      if (sendOtpBtn) {
        sendOtpBtn.disabled = true;
        if (sendOtpText) sendOtpText.textContent = 'Sending Code...';
        if (sendOtpIcon) sendOtpIcon.style.opacity = '0.3';
      }

      try {
        const response = await fetch('/api/send-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });

        const data = await response.json();

        if (response.ok && data.success) {
          currentTargetEmail = email;
          currentOtpToken = data.token || '';
          currentDevOtp = data.devCode || (data.devHint ? data.devHint.match(/\d{6}/)?.[0] : '') || '';

          sessionStorage.setItem('pending_otp_email', currentTargetEmail);
          if (currentOtpToken) sessionStorage.setItem('pending_otp_token', currentOtpToken);
          if (currentDevOtp) sessionStorage.setItem('pending_otp_dev', currentDevOtp);

          if (displayTargetEmail) displayTargetEmail.textContent = email;

          // Handle development hint if present
          if (devOtpBanner) {
            if (currentDevOtp || data.devHint) {
              const code = currentDevOtp || data.devHint.match(/\d{6}/)?.[0] || '123456';
              devOtpBanner.innerHTML = `Development Preview: Your code is <strong style="letter-spacing: 1px; text-decoration: underline;" title="Click to auto-fill">${code}</strong> <span style="font-size: 11px; opacity: 0.85;">(Click to auto-fill)</span>`;
              devOtpBanner.style.cursor = 'pointer';
              devOtpBanner.style.display = 'block';
              devOtpBanner.onclick = () => {
                autoFillCode(code);
              };
            } else {
              devOtpBanner.style.display = 'none';
            }
          }

          // Transition to OTP step
          bankStepEmail.style.display = 'none';
          bankStepOtp.style.display = 'block';

          // Clear inputs
          otpDigits.forEach(input => {
            input.value = '';
            input.classList.remove('filled');
          });

          setTimeout(() => {
            otpDigits[0]?.focus();
          }, 150);

          startResendTimer();
          if (typeof showToast === 'function') {
            showToast(`Verification code sent to ${email}`);
          }
        } else {
          if (bankEmailError) {
            bankEmailError.textContent = data.error || 'Failed to send code. Please try again.';
            bankEmailError.style.display = 'block';
          }
        }
      } catch (err) {
        console.error('Send OTP error:', err);
        if (bankEmailError) {
          bankEmailError.textContent = 'Network error contacting verification server. Please try again.';
          bankEmailError.style.display = 'block';
        }
      } finally {
        if (sendOtpBtn) {
          sendOtpBtn.disabled = false;
          if (sendOtpText) sendOtpText.textContent = 'Send Verification Code';
          if (sendOtpIcon) sendOtpIcon.style.opacity = '1';
        }
      }
    });
  }

  function autoFillCode(code) {
    if (!code || code.length !== 6) return;
    const digits = code.split('');
    digits.forEach((char, i) => {
      if (otpDigits[i]) {
        otpDigits[i].value = char;
        otpDigits[i].classList.add('filled');
      }
    });
    triggerVerifyOtp(code);
  }

  // OTP Digits Navigation, Multi-Paste & Auto-Submit
  otpDigits.forEach((digitInput, idx) => {
    digitInput.addEventListener('input', (e) => {
      const val = digitInput.value.replace(/\D/g, '');
      if (val.length > 1) {
        // Multi-character input (e.g. mobile auto-fill or browser suggestion)
        const chars = val.slice(0, otpDigits.length - idx).split('');
        chars.forEach((char, i) => {
          if (otpDigits[idx + i]) {
            otpDigits[idx + i].value = char;
            otpDigits[idx + i].classList.add('filled');
          }
        });
        const targetFocus = Math.min(idx + chars.length, otpDigits.length - 1);
        otpDigits[targetFocus]?.focus();
      } else {
        digitInput.value = val;
        if (digitInput.value) {
          digitInput.classList.add('filled');
          if (idx < otpDigits.length - 1) {
            otpDigits[idx + 1].focus();
          }
        } else {
          digitInput.classList.remove('filled');
        }
      }

      // Check if all 6 digits entered
      const allDigits = Array.from(otpDigits).map(d => d.value).join('');
      if (allDigits.length === 6) {
        triggerVerifyOtp(allDigits);
      }
    });

    digitInput.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !digitInput.value && idx > 0) {
        otpDigits[idx - 1].focus();
      } else if (e.key === 'ArrowLeft' && idx > 0) {
        otpDigits[idx - 1].focus();
      } else if (e.key === 'ArrowRight' && idx < otpDigits.length - 1) {
        otpDigits[idx + 1].focus();
      }
    });

    digitInput.addEventListener('paste', (e) => {
      e.preventDefault();
      const pasteData = (e.clipboardData || window.clipboardData).getData('text');
      const cleanDigits = pasteData.replace(/\D/g, '').slice(0, 6);

      if (cleanDigits) {
        cleanDigits.split('').forEach((char, i) => {
          if (otpDigits[i]) {
            otpDigits[i].value = char;
            otpDigits[i].classList.add('filled');
          }
        });

        const nextFocus = Math.min(cleanDigits.length, otpDigits.length - 1);
        otpDigits[nextFocus]?.focus();

        if (cleanDigits.length === 6) {
          triggerVerifyOtp(cleanDigits);
        }
      }
    });
  });

  async function triggerVerifyOtp(code) {
    if (!currentTargetEmail) {
      currentTargetEmail = sessionStorage.getItem('pending_otp_email') || '';
    }
    if (!currentOtpToken) {
      currentOtpToken = sessionStorage.getItem('pending_otp_token') || '';
    }
    if (!currentDevOtp) {
      currentDevOtp = sessionStorage.getItem('pending_otp_dev') || '';
    }

    if (!currentTargetEmail || !code || code.length !== 6) return;
    if (isVerifying) return;
    isVerifying = true;

    if (bankOtpError) bankOtpError.style.display = 'none';
    if (verifyOtpBtn) {
      verifyOtpBtn.disabled = true;
      if (verifyOtpText) verifyOtpText.textContent = 'Verifying Code...';
      if (verifyOtpIcon) verifyOtpIcon.style.opacity = '0.3';
    }

    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: currentTargetEmail,
          otp: code,
          token: currentOtpToken
        })
      });

      let data = {};
      try {
        data = await response.json();
      } catch (jsonErr) {}

      if (response.ok && data.success) {
        handleVerificationSuccess(data.deckUrl);
        return;
      }

      // Preview fallback: if in dev preview mode and code matches the displayed dev code
      if (currentDevOtp && currentDevOtp === code) {
        console.warn('Verifying via preview fallback mode.');
        handleVerificationSuccess(FIGMA_DECK_DEFAULT);
        return;
      }

      if (bankOtpError) {
        bankOtpError.textContent = data.error || 'Invalid or expired verification code. Please check and try again.';
        bankOtpError.style.display = 'block';
      }
      // Shake animation on OTP digits
      otpDigits.forEach(d => {
        d.style.borderColor = '#EF4444';
        setTimeout(() => { d.style.borderColor = ''; }, 1200);
      });
    } catch (err) {
      console.error('Verify OTP error:', err);
      // Fallback: don't block user if code matches dev preview
      if (currentDevOtp && currentDevOtp === code) {
        handleVerificationSuccess(FIGMA_DECK_DEFAULT);
        return;
      }
      if (bankOtpError) {
        bankOtpError.textContent = 'Network error verifying code. Please try again.';
        bankOtpError.style.display = 'block';
      }
    } finally {
      isVerifying = false;
      if (verifyOtpBtn) {
        verifyOtpBtn.disabled = false;
        if (verifyOtpText) verifyOtpText.textContent = 'Verify & Open Presentation';
        if (verifyOtpIcon) verifyOtpIcon.style.opacity = '1';
      }
    }
  }

  function handleVerificationSuccess(deckUrl) {
    const finalDeckUrl = deckUrl || FIGMA_DECK_DEFAULT;
    sessionStorage.setItem('bank_deck_access', 'true');
    sessionStorage.setItem('bank_deck_email', currentTargetEmail);
    sessionStorage.removeItem('pending_otp_token');
    sessionStorage.removeItem('pending_otp_dev');

    if (deckDirectLink) {
      deckDirectLink.href = finalDeckUrl;
    }

    // Show success screen
    bankStepOtp.style.display = 'none';
    bankStepSuccess.style.display = 'block';

    if (typeof showToast === 'function') {
      showToast('Access granted! Opening Bank Portfolio Presentation...');
    }

    if (typeof trackEvent === 'function') {
      trackEvent('bank_deck_verified', { email: currentTargetEmail });
    }

    // Automatically open the presentation
    setTimeout(() => {
      window.open(finalDeckUrl, '_blank');
    }, 600);
  }

  if (bankOtpForm) {
    bankOtpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = Array.from(otpDigits).map(d => d.value).join('');
      triggerVerifyOtp(code);
    });
  }

  // Change Email Action
  if (changeEmailBtn) {
    changeEmailBtn.addEventListener('click', () => {
      bankStepOtp.style.display = 'none';
      bankStepEmail.style.display = 'block';
      if (bankEmailError) bankEmailError.style.display = 'none';
      currentOtpToken = '';
      currentDevOtp = '';
      sessionStorage.removeItem('pending_otp_token');
      sessionStorage.removeItem('pending_otp_dev');
      setTimeout(() => {
        bankUserEmail?.focus();
        bankUserEmail?.select();
      }, 100);
    });
  }

  // Resend OTP Action
  if (resendOtpBtn) {
    resendOtpBtn.addEventListener('click', async () => {
      if (!currentTargetEmail || resendCountdown > 0) return;

      resendOtpBtn.disabled = true;
      resendOtpBtn.textContent = 'Resending...';

      try {
        const response = await fetch('/api/send-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: currentTargetEmail })
        });
        const data = await response.json();
        if (response.ok && data.success) {
          currentOtpToken = data.token || '';
          currentDevOtp = data.devCode || (data.devHint ? data.devHint.match(/\d{6}/)?.[0] : '') || '';
          if (currentOtpToken) sessionStorage.setItem('pending_otp_token', currentOtpToken);
          if (currentDevOtp) sessionStorage.setItem('pending_otp_dev', currentDevOtp);

          if (devOtpBanner) {
            if (currentDevOtp || data.devHint) {
              const code = currentDevOtp || data.devHint.match(/\d{6}/)?.[0] || '123456';
              devOtpBanner.innerHTML = `Development Preview: New code is <strong style="letter-spacing: 1px; text-decoration: underline;" title="Click to auto-fill">${code}</strong> <span style="font-size: 11px; opacity: 0.85;">(Click to auto-fill)</span>`;
              devOtpBanner.style.cursor = 'pointer';
              devOtpBanner.style.display = 'block';
              devOtpBanner.onclick = () => {
                autoFillCode(code);
              };
            } else {
              devOtpBanner.style.display = 'none';
            }
          }

          otpDigits.forEach(input => {
            input.value = '';
            input.classList.remove('filled');
          });
          setTimeout(() => {
            otpDigits[0]?.focus();
          }, 100);

          if (typeof showToast === 'function') {
            showToast(`New verification code sent to ${currentTargetEmail}`);
          }
          startResendTimer();
        } else {
          if (bankOtpError) {
            bankOtpError.textContent = data.error || 'Failed to resend code.';
            bankOtpError.style.display = 'block';
          }
          resendOtpBtn.disabled = false;
          resendOtpBtn.textContent = 'Resend code';
        }
      } catch (err) {
        resendOtpBtn.disabled = false;
        resendOtpBtn.textContent = 'Resend code';
      }
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initScrollObserver();
  initRecruiterAnalytics();
  initRouteFlightInteraction();
  resetToRestingMilestone();
  initBankDeckAuth();
});



