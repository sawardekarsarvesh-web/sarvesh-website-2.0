/**
 * dousanmiao.com Structural Replication System for uxsarvesh.in
 * Core Controller: Case Study Modals, Dubai Live Clock, Interactive Ruler, Theme Engine, Cursor
 */

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
    role: 'Design Lead',
    timeline: '2024 - Present',
    skills: 'Design Tokens, Multi-tenant Architecture, WCAG 2.1 AA, Banking Governance',
    team: 'Sarvesh Sawardekar (Design Lead), Intellect Design Arena Global Core Banking Team',
    problemTitle: 'Problem: Siloed Banking Portals & Fragmented Design Debt',
    problemBody: 'Corporate banking applications across multiple international client banks (National Bank of Kuwait, Riyad Bank, National Bank of Fujairah, ANZ Bank) were built on disparate legacy frameworks, leading to high maintenance overhead and inconsistent user experiences.',
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

// --- 7. DUBAI ANALOG & DIGITAL LIVE CLOCK ---
function updateDubaiClock() {
  // Use Intl to format Dubai time (GST, UTC+4)
  const now = new Date();
  const options = { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  const formatter = new Intl.DateTimeFormat([], options);
  const parts = formatter.formatToParts(now);
  
  let hours = 0, minutes = 0, seconds = 0;
  parts.forEach(p => {
    if (p.type === 'hour') hours = parseInt(p.value, 10);
    if (p.type === 'minute') minutes = parseInt(p.value, 10);
    if (p.type === 'second') seconds = parseInt(p.value, 10);
  });
  
  // Format digital string
  const hStr = String(hours).padStart(2, '0');
  const mStr = String(minutes).padStart(2, '0');
  const sStr = String(seconds).padStart(2, '0');
  const digitalDisplay = document.getElementById('dubaiDigitalTime');
  if (digitalDisplay) {
    digitalDisplay.textContent = `${hStr}:${mStr}:${sStr}`;
  }
  
  // Update analog hands
  const secondDeg = seconds * 6; // 360 / 60
  const minuteDeg = (minutes * 6) + (seconds * 0.1);
  const hourDeg = ((hours % 12) * 30) + (minutes * 0.5);
  
  const hourHand = document.getElementById('analogHourHand');
  const minuteHand = document.getElementById('analogMinuteHand');
  const secondHand = document.getElementById('analogSecondHand');
  
  if (hourHand) hourHand.setAttribute('transform', `rotate(${hourDeg} 50 50)`);
  if (minuteHand) minuteHand.setAttribute('transform', `rotate(${minuteDeg} 50 50)`);
  if (secondHand) secondHand.setAttribute('transform', `rotate(${secondDeg} 50 50)`);
}

setInterval(updateDubaiClock, 1000);
updateDubaiClock();

// --- 8. INTERACTIVE CAREER RULER DIAL (LOCKED STRICTLY TO 8 YEARS) ---
const RESTING_MILESTONE = {
  company: 'Intellect Design Arena',
  role: 'Design Lead',
  years: 8,
  year: '2026'
};

const CAREER_MILESTONES = {
  0: { company: 'UX Design Journey Starts', role: 'Product Design Foundation', years: 0, year: '2018' },
  1: { company: 'Powerweave Software', role: 'Junior UI/UX Designer', years: 1, year: '2019' },
  2: { company: 'Fluidscapes', role: 'UI/UX Designer', years: 2, year: '2020' },
  3: { company: 'Fluidscapes', role: 'UI/UX Designer', years: 3, year: '2021' },
  4: { company: 'ImpactGuru', role: 'Product Designer', years: 4, year: '2022' },
  5: { company: 'ImpactGuru', role: 'Senior Product Designer', years: 5, year: '2023' },
  6: { company: 'Clover Infotech', role: 'Senior UI/UX Designer', years: 6, year: '2024' },
  7: { company: 'Intellect Design Arena', role: 'Senior Product Designer', years: 7, year: '2025' },
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

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      trackEvent('contact_form_submit');
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Message Sent! ✓';
          contactForm.reset();
          showToast('Thank you! Your message has been sent to Sarvesh.');
          setTimeout(() => {
            submitBtn.textContent = 'Send Message →';
          }, 3500);
        }, 800);
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

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initScrollObserver();
  initRecruiterAnalytics();
  resetToRestingMilestone();
});

