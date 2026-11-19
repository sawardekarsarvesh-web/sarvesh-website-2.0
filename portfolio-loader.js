(() => {
  const preview = document.currentScript?.hasAttribute('data-preview');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!preview && reducedMotion) return;

  // Theme detection matching Sarvesh's website tokens
  const isDark = (() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return document.documentElement.getAttribute('data-theme') === 'dark' ||
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    } catch {
      return false;
    }
  })();

  const host = document.createElement('div');
  if (isDark) host.classList.add('dark');
  const shadow = host.attachShadow({ mode: 'open' });

  // 12 vertical slats for the architectural shutter opening wipe
  const SLAT_COUNT = 12;
  let slatsHtml = '';
  for (let i = 0; i < SLAT_COUNT; i++) {
    const dir = (i % 2 === 0) ? 'up' : 'down';
    // Normalized distance from center (0 at center, higher towards edges)
    const center = (SLAT_COUNT - 1) / 2;
    const dist = Math.abs(i - center);
    slatsHtml += `<div class="slat slat-${dir}" style="--dist: ${dist}; --i: ${i};"></div>`;
  }

  shadow.innerHTML = `
    <style>
      :host {
        position: fixed;
        inset: 0;
        z-index: 2147483647;
        display: grid;
        place-items: center;
        user-select: none;
        -webkit-user-select: none;
        font-family: 'Open Runde', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        pointer-events: auto;
        overflow: hidden;
      }

      /* Background Shutter Slats Container */
      .slats-container {
        position: absolute;
        inset: -2px; /* slight overflow to prevent sub-pixel gaps */
        display: flex;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        pointer-events: none;
        overflow: hidden;
      }

      .slat {
        flex: 1 1 0;
        height: 100%;
        background: #F2F3F5;
        transform: translate3d(0, 0, 0);
        will-change: transform;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        transition: transform 1.1s cubic-bezier(0.76, 0, 0.24, 1);
        position: relative;
        margin-right: -1px; /* seamless edge overlap */
      }

      /* Subtle, elegant hairline guide line */
      .slat::after {
        content: '';
        position: absolute;
        inset: 0;
        border-right: 1px solid rgba(0, 0, 0, 0.03);
        pointer-events: none;
      }

      :host(.dark) .slat {
        background: #090A0C;
      }

      :host(.dark) .slat::after {
        border-right-color: rgba(255, 255, 255, 0.03);
      }

      /* Shutter Open States: Fluid, Butter-Smooth Alternating Wipe */
      :host(.opening) .slat-up {
        transform: translate3d(0, -101%, 0);
        transition-delay: calc(var(--dist) * 38ms);
      }

      :host(.opening) .slat-down {
        transform: translate3d(0, 101%, 0);
        transition-delay: calc(var(--dist) * 38ms);
      }

      /* Center Brand Lockup */
      .brand-stage {
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        pointer-events: auto;
        transform: translate3d(0, 0, 0);
        transition: opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), 
                    transform 0.55s cubic-bezier(0.16, 1, 0.3, 1),
                    filter 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        will-change: opacity, transform, filter;
      }

      /* Graceful, overlapping dissolve during shutter open */
      :host(.hiding-brand) .brand-stage {
        opacity: 0;
        transform: translate3d(0, -6px, 0) scale(0.96);
        filter: blur(3px);
      }

      /* Horizontal Lockup: Monogram + Text */
      .brand-lockup {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
      }

      /* Monogram Container */
      .monogram-box {
        position: relative;
        width: 50px;
        height: 50px;
        display: grid;
        place-items: center;
        opacity: 0;
        transform: translate3d(0, 0, 0) scale(0.85);
        animation: monogramEnter 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        will-change: transform, opacity;
      }

      @keyframes monogramEnter {
        0% {
          opacity: 0;
          transform: translate3d(0, 8px, 0) scale(0.82) rotate(-5deg);
        }
        100% {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
        }
      }

      .monogram-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0 6px 16px rgba(229, 88, 38, 0.22));
        image-rendering: -webkit-optimize-contrast;
      }

      /* Masked Text Reveal: Smooth Horizontal Unfold with Clip-path */
      .text-mask {
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        clip-path: inset(0 100% 0 0);
        transform: translate3d(-10px, 0, 0);
        opacity: 0;
        animation: textUnfold 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.42s forwards;
        will-change: clip-path, transform, opacity;
      }

      @keyframes textUnfold {
        0% {
          clip-path: inset(0 100% 0 0);
          transform: translate3d(-12px, 0, 0);
          opacity: 0;
        }
        40% {
          opacity: 1;
        }
        100% {
          clip-path: inset(0 0% 0 0);
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }
      }

      .brand-name {
        font-size: 27px;
        font-weight: 700;
        letter-spacing: -0.025em;
        line-height: 1.1;
        color: #10141A;
        white-space: nowrap;
        display: flex;
        align-items: baseline;
      }

      :host(.dark) .brand-name {
        color: #F4F6F9;
      }

      .name-accent {
        color: #E55826;
        font-weight: 800;
        margin-right: 1px;
      }

      .name-dot {
        color: #E55826;
        margin-left: 2px;
      }

      .brand-role {
        font-size: 11.5px;
        font-weight: 500;
        letter-spacing: 0.05em;
        color: #576071;
        margin-top: 5px;
        text-transform: uppercase;
        white-space: nowrap;
      }

      :host(.dark) .brand-role {
        color: #9AA3B4;
      }

      /* Hairline Status & Liquid Progress Track */
      .loader-footer {
        margin-top: 26px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        opacity: 0;
        animation: footerEnter 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.65s forwards;
      }

      @keyframes footerEnter {
        from {
          opacity: 0;
          transform: translate3d(0, 6px, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }

      .progress-track {
        width: 140px;
        height: 2px;
        background: rgba(0, 0, 0, 0.06);
        border-radius: 99px;
        overflow: hidden;
        position: relative;
      }

      :host(.dark) .progress-track {
        background: rgba(255, 255, 255, 0.09);
      }

      .progress-fill {
        height: 100%;
        width: 0%;
        background: linear-gradient(90deg, #E55826, #7049E7);
        border-radius: 99px;
        transition: width 0.12s cubic-bezier(0.22, 1, 0.36, 1);
      }

      .status-label {
        font-family: 'JetBrains Mono', monospace;
        font-size: 10.5px;
        font-weight: 500;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        color: #8993A4;
        transition: opacity 0.25s ease;
      }

      :host(.dark) .status-label {
        color: #60697B;
      }

      /* Replay Button for Preview Mode */
      .replay-btn {
        margin-top: 32px;
        padding: 9px 24px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 99px;
        background: #FFFFFF;
        color: #10141A;
        font-family: inherit;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.03em;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        opacity: 0;
        animation: footerEnter 0.6s ease 0.9s forwards;
      }

      .replay-btn:hover {
        transform: translate3d(0, -1px, 0);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.09);
      }

      :host(.dark) .replay-btn {
        background: #14171C;
        border-color: rgba(255, 255, 255, 0.14);
        color: #F4F6F9;
      }

      @media (prefers-reduced-motion: reduce) {
        :host { display: none !important; }
      }
    </style>

    <!-- Background Opening Shutter Slats -->
    <div class="slats-container" aria-hidden="true">
      ${slatsHtml}
    </div>

    <!-- Center Brand Lockup -->
    <div class="brand-stage" role="status" aria-label="Loading uxsarvesh.in">
      <div class="brand-lockup">
        <!-- Monogram -->
        <div class="monogram-box">
          <img src="assets/images/monogram-accent.png" class="monogram-img" alt="uxsarvesh monogram" />
        </div>

        <!-- Sliding Unmasking Brand Text -->
        <div class="text-mask">
          <div class="brand-name">
            <span class="name-accent">ux</span><span>sarvesh</span><span class="name-dot">.</span>
          </div>
          <div class="brand-role">Product Designer &amp; Design Systems</div>
        </div>
      </div>

      <!-- Hairline Progress Line -->
      <div class="loader-footer">
        <div class="progress-track">
          <div class="progress-fill" id="progressFill"></div>
        </div>
        <span class="status-label" id="statusLabel">Initializing…</span>
      </div>

      ${preview ? '<button type="button" class="replay-btn" id="replayBtn">Replay Opening Animation</button>' : ''}
    </div>
  `;

  document.documentElement.append(host);

  const progressFill = shadow.getElementById('progressFill');
  const statusLabel = shadow.getElementById('statusLabel');
  const replayBtn = shadow.getElementById('replayBtn');

  let currentAnimation = null;

  function runSequence(onComplete) {
    const totalDuration = 2200; // 2.2s silky progression before shutter wipe
    const startTimestamp = performance.now();

    function step(now) {
      const elapsed = now - startTimestamp;
      const progress = Math.min(elapsed / totalDuration, 1);

      // Smooth cubic ease for progress fill
      const easedProgress = 1 - Math.pow(1 - progress, 2.5);

      if (progressFill) {
        progressFill.style.width = `${(easedProgress * 100).toFixed(1)}%`;
      }

      if (statusLabel) {
        if (progress < 0.38) {
          statusLabel.textContent = 'Curating work…';
        } else if (progress < 0.72) {
          statusLabel.textContent = 'Design Systems…';
        } else {
          statusLabel.textContent = 'uxsarvesh.in';
        }
      }

      if (progress < 1) {
        currentAnimation = requestAnimationFrame(step);
      } else {
        if (onComplete) onComplete();
      }
    }

    currentAnimation = requestAnimationFrame(step);
  }

  function triggerOpening() {
    // 1. Initiate graceful dissolve of the central brand lockup
    host.classList.add('hiding-brand');

    // 2. Trigger the shutter slats opening in harmonious overlap (120ms later)
    setTimeout(() => {
      host.classList.add('opening');
    }, 120);

    // 3. Cleanly remove host once all slats complete their smooth glide
    setTimeout(() => {
      host.remove();
    }, 1500);
  }

  if (preview) {
    runSequence(() => {});
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        if (currentAnimation) cancelAnimationFrame(currentAnimation);
        host.classList.remove('hiding-brand', 'opening');

        const mask = shadow.querySelector('.text-mask');
        const mono = shadow.querySelector('.monogram-box');
        if (mask) {
          mask.style.animation = 'none';
          void mask.offsetWidth;
          mask.style.animation = '';
        }
        if (mono) {
          mono.style.animation = 'none';
          void mono.offsetWidth;
          mono.style.animation = '';
        }

        runSequence(() => {
          triggerOpening();
        });
      });
    }
    return;
  }

  // Live website mode
  let isWindowLoaded = (document.readyState === 'complete');
  let sequenceFinished = false;

  const tryOpen = () => {
    if (sequenceFinished && isWindowLoaded) {
      triggerOpening();
    }
  };

  const onWindowLoad = () => {
    isWindowLoaded = true;
    tryOpen();
  };

  if (!isWindowLoaded) {
    window.addEventListener('load', onWindowLoad, { once: true });
  }

  runSequence(() => {
    sequenceFinished = true;
    tryOpen();
  });

  // Safety fallback: trigger opening after max 3.5s
  setTimeout(() => {
    if (!host.classList.contains('opening')) {
      triggerOpening();
    }
  }, 3500);
})();
