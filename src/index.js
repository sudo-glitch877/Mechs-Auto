const UPSTREAM = 'https://mechs-auto-services.pages.dev';

// Kept separate from the mirrored build so design corrections can ship without
// changing or depending on the upstream Pages artifact.
const UI_FIXES = `
:root {
  --control-radius: 999px;
  --surface-radius: 18px;
  --field-radius: 11px;
}

/* Buttons are deliberate, touch-friendly pills instead of hard-edged blocks. */
.btn,
.menu-toggle {
  -webkit-appearance: none;
  appearance: none;
  border-radius: var(--control-radius);
}

.btn {
  white-space: nowrap;
  letter-spacing: .015em;
  box-shadow: 0 1px 0 rgba(255, 255, 255, .12) inset, 0 3px 0 rgba(0, 0, 0, .16);
}

.btn:hover {
  box-shadow: 0 1px 0 rgba(255, 255, 255, .18) inset, 0 6px 12px rgba(0, 0, 0, .18);
}

.btn:active {
  transform: translateY(0);
  box-shadow: 0 1px 0 rgba(0, 0, 0, .14) inset;
}

/* The upstream ghost button is light by default. Give it a dark, high-contrast
   treatment wherever it appears over the light and orange content bands. */
.story-band .btn-ghost,
.section-light .btn-ghost,
.location-band .btn-ghost {
  border-color: var(--ink);
  color: var(--ink);
  box-shadow: 0 1px 0 rgba(255, 255, 255, .36) inset, 0 3px 0 rgba(23, 12, 6, .18);
}

.story-band .btn-ghost:hover,
.section-light .btn-ghost:hover,
.location-band .btn-ghost:hover {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--white);
}

/* Keep appointment calls-to-action unmistakable in every page context. */
.footer .btn-primary,
.appointment .btn-primary,
.faq-band .btn-primary,
.nav-links .btn-primary {
  border-color: var(--orange);
  color: #160d08;
}

.menu-toggle {
  min-width: 46px;
  min-height: 42px;
  line-height: 1;
}

/* Give the shop mark enough presence to read clearly at a glance. */
.nav-inner {
  min-height: 110px;
}

.brand img {
  width: 84px;
  height: 84px;
}

.footer-brand {
  display: inline-flex;
  margin-bottom: 12px;
  font-size: 25px;
}

.footer-brand img {
  width: 74px;
  height: 74px;
}

.footer-credit {
  margin: 24px 0 0;
  padding: 0 20px;
  text-align: center;
  font-size: 13px;
  line-height: 1.5;
}

.footer-credit a {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.event-page {
  background: var(--ink);
}

.event-hero {
  overflow: hidden;
  padding: 82px 0;
  background:
    radial-gradient(circle at 8% 10%, rgba(242, 106, 33, .24), transparent 29%),
    radial-gradient(circle at 92% 80%, rgba(244, 194, 67, .16), transparent 26%),
    var(--ink-2);
}

.event-grid {
  display: grid;
  grid-template-columns: minmax(260px, .72fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(38px, 7vw, 100px);
}

.event-poster-frame {
  max-width: 400px;
  margin: auto;
  overflow: hidden;
  border: 1px solid rgba(244, 194, 67, .52);
  border-radius: var(--surface-radius);
  box-shadow: 14px 14px 0 var(--orange), 0 22px 50px rgba(0, 0, 0, .42);
}

.event-poster-frame img {
  display: block;
  width: 100%;
  height: auto;
}

.event-copy h1 {
  max-width: 650px;
  margin: 13px 0 22px;
  font-size: clamp(58px, 7.5vw, 98px);
}

.event-copy h1 span,
.event-copy .kicker {
  color: var(--orange);
}

.event-copy > p:not(.kicker) {
  max-width: 570px;
  margin: 0;
  color: #c6cbd0;
  font-size: 17px;
  line-height: 1.65;
}

.event-time {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 29px 0 21px;
  padding: 17px 20px;
  border-left: 4px solid var(--orange);
  border-radius: 0 var(--field-radius) var(--field-radius) 0;
  background: rgba(255, 255, 255, .06);
}

.event-time strong {
  color: var(--yellow);
  font: 800 27px/1 "Barlow Condensed", sans-serif;
  letter-spacing: .035em;
  text-transform: uppercase;
}

.event-time span {
  color: #d7dbde;
  font-size: 13px;
  font-weight: 700;
}

.event-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.event-details {
  padding: 72px 0;
  background: var(--paper);
  color: var(--ink);
}

.event-details-head {
  max-width: 650px;
  margin-bottom: 28px;
}

.event-details-head h2 {
  font-size: clamp(42px, 5vw, 64px);
}

.event-details-head p {
  margin: 13px 0 0;
  color: #697178;
  line-height: 1.65;
}

.event-info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.event-info-card {
  min-height: 176px;
  padding: 25px;
  border: 1px solid #d4d6d1;
  border-radius: var(--surface-radius);
  background: var(--white);
}

.event-info-card span {
  display: block;
  color: var(--orange);
  font: 800 12px "DM Sans", sans-serif;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.event-info-card strong {
  display: block;
  margin-top: 18px;
  font: 800 32px/1 "Barlow Condensed", sans-serif;
  letter-spacing: .02em;
  text-transform: uppercase;
}

.event-info-card p {
  margin: 10px 0 0;
  color: #697178;
  font-size: 13px;
  line-height: 1.55;
}

/* Cards and embedded content use the same visual language, and their clipped
   corners prevent backgrounds and iframes from bleeding out of their frames. */
.service-card,
.info-card,
.quote-card,
.integration-card,
.why-card,
.appointment,
.faq,
.story-note,
.bbb-mark,
.hero-offer,
.map-frame,
.toast {
  border-radius: var(--surface-radius);
}

.hero-offer {
  overflow: hidden;
}

.map-frame {
  border-width: 1px;
}

.form input,
.form select,
.form textarea {
  border-radius: var(--field-radius);
}

.form select {
  -webkit-appearance: none;
  appearance: none;
  padding-right: 42px;
  background-image: linear-gradient(45deg, transparent 50%, var(--orange) 50%), linear-gradient(135deg, var(--orange) 50%, transparent 50%);
  background-position: calc(100% - 20px) 50%, calc(100% - 15px) 50%;
  background-size: 5px 5px, 5px 5px;
  background-repeat: no-repeat;
}

.btn:focus-visible,
.menu-toggle:focus-visible,
.nav-links a:focus-visible,
.form input:focus-visible,
.form select:focus-visible,
.form textarea:focus-visible,
.service-card:focus-visible,
.footer a:focus-visible {
  outline: 3px solid var(--yellow);
  outline-offset: 3px;
}

.section-light .btn-ghost:focus-visible,
.offer-band .btn:focus-visible,
.location-band .btn:focus-visible {
  outline-color: var(--ink);
}

@media (max-width: 800px) {
  .nav-inner {
    min-height: 88px;
  }

  .brand img {
    width: 64px;
    height: 64px;
  }

  .footer-brand img {
    width: 64px;
    height: 64px;
  }

  .event-hero {
    padding: 58px 0 66px;
  }

  .event-grid,
  .event-info-grid {
    grid-template-columns: 1fr;
  }

  .event-poster-frame {
    width: min(100%, 360px);
  }

  .nav-links {
    border-radius: 0 0 var(--surface-radius) var(--surface-radius);
    box-shadow: 0 14px 24px rgba(0, 0, 0, .28);
  }

  .nav-links .btn {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
`;

const EVENT_PAGE = `<main class="event-page">
  <section class="event-hero"><div class="wrap event-grid">
    <div class="event-poster-frame"><img src="/community-event.png" alt="MECHS Automotive Services Community Event flyer: hot dogs, hamburgers, Saturday September 12 at 11 AM"></div>
    <div class="event-copy"><p class="kicker">MECHS Automotive Services presents</p><h1>A community <span>event.</span></h1><p>Your car. Our passion. Your trust. Join us for great food, good people, and great service at the shop.</p><div class="event-time"><strong>Saturday<br>September 12</strong><span>Starts at 11 AM<br>Everyone is welcome</span></div><div class="event-actions"><a class="btn btn-primary" href="tel:7264440086">Call the shop <span>↗</span></a><a class="btn btn-ghost" href="https://www.google.com/maps/search/?api=1&amp;query=5220%20Leonhardt%20Rd%2C%20San%20Antonio%2C%20TX%2078233" target="_blank" rel="noopener">Get directions <span>↗</span></a></div></div>
  </div></section>
  <section class="event-details"><div class="wrap"><div class="event-details-head"><p class="kicker">Save the date</p><h2>Food, neighbors, and a good time.</h2><p>Stop by to enjoy hot dogs and hamburgers with the MECHS community.</p></div><div class="event-info-grid"><div class="event-info-card"><span>When</span><strong>Saturday, September 12</strong><p>Beginning at 11:00 AM.</p></div><div class="event-info-card"><span>Where</span><strong>MECHS Automotive Services</strong><p>5220 Leonhardt Rd<br>San Antonio, TX 78233</p></div><div class="event-info-card"><span>What to expect</span><strong>Hot dogs &amp; hamburgers</strong><p>Great food, good people, and great service.</p></div></div></div></section>
</main>`;

const EVENT_PAGE_SCRIPT = `<script>
  (() => {
    const isEventRoute = () => location.hash.replace(/^#\\/?/, '') === 'events';
    const addEventLink = () => {
      const navLinks = document.querySelector('.nav-links');
      if (!navLinks || navLinks.querySelector('[href="#/events"]')) return;
      const eventLink = document.createElement('a');
      eventLink.href = '#/events';
      eventLink.textContent = 'Event';
      navLinks.insertBefore(eventLink, navLinks.querySelector('.btn'));
    };
    const syncEventPage = () => {
      addEventLink();
      if (!isEventRoute()) return;
      const main = document.querySelector('#app main');
      if (!main) return;
      main.outerHTML = ${JSON.stringify(EVENT_PAGE)};
      document.title = 'Community Event | MECHS Automotive Services';
      document.querySelectorAll('.nav-links a').forEach((link) => link.classList.toggle('active', link.getAttribute('href') === '#/events'));
    };
    window.addEventListener('DOMContentLoaded', syncEventPage);
    window.addEventListener('hashchange', syncEventPage);
  })();
</script>`;

const FOOTER_LOGO = `<script>
  (() => {
    const addFooterLogo = () => {
      const footer = document.querySelector('.footer');
      if (footer && !footer.querySelector('.footer-credit')) {
        const credit = document.createElement('p');
        credit.className = 'footer-credit';
        const link = document.createElement('a');
        link.href = 'https://edsmobileapp.com/website-design-services';
        link.textContent = 'Designed and Created by EDS Mobile. Build your website today';
        credit.append(link);
        footer.append(credit);
      }

      const footerColumn = document.querySelector('.footer .footer-grid > div:first-child');
      if (!footerColumn || footerColumn.querySelector('.footer-brand')) return;

      const logo = document.createElement('a');
      logo.className = 'brand footer-brand';
      logo.href = '#/home';
      logo.setAttribute('aria-label', 'MECHS Automotive Services — home');
      logo.innerHTML = '<img src="logo.png" alt=""><span>MECHS<small>Automotive Services</small></span>';

      const heading = footerColumn.querySelector('h3');
      if (heading) heading.replaceWith(logo);
      else footerColumn.prepend(logo);
    };

    window.addEventListener('DOMContentLoaded', addFooterLogo);
    window.addEventListener('hashchange', addFooterLogo);
  })();
</script>`;

function responseWithUiFixes(response) {
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) return response;

  return new HTMLRewriter()
    .on('head', {
      element(element) {
        element.append('<link rel="icon" type="image/png" href="/logo.png">', { html: true });
        element.append('<link rel="stylesheet" href="/mechs-ui-fixes.css?v=20260912-footer-credit">', { html: true });
      },
    })
    .on('body', {
      element(element) {
        element.append(FOOTER_LOGO + EVENT_PAGE_SCRIPT, { html: true });
      },
    })
    .transform(response);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/health') {
      return Response.json({ ok: true, service: 'mechs-automotive-services' });
    }

    if (url.pathname === '/mechs-ui-fixes.css') {
      return new Response(UI_FIXES, {
        headers: {
          'content-type': 'text/css; charset=utf-8',
          'cache-control': 'public, max-age=3600',
        },
      });
    }

    if (url.pathname === '/community-event.png') {
      return env.ASSETS.fetch(request);
    }

    // Emergency Worker migration: preserve the Pages deployment exactly while
    // the independent asset export is retained. Requests to the custom domain
    // are fetched from the known-good production deployment, including its
    // HTML, routes, images, CSS, and JavaScript.
    const upstreamUrl = new URL(url.pathname + url.search, UPSTREAM);
    const upstreamRequest = new Request(upstreamUrl, request);
    const response = await fetch(upstreamRequest);
    const fixedResponse = responseWithUiFixes(response);
    const headers = new Headers(fixedResponse.headers);

    headers.set('X-MECHS-Worker', 'mirror');
    headers.delete('content-encoding');
    headers.delete('content-length');
    headers.delete('transfer-encoding');
    headers.delete('etag');

    return new Response(fixedResponse.body, {
      status: fixedResponse.status,
      statusText: fixedResponse.statusText,
      headers,
    });
  },
};
