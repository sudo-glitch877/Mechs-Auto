const UPSTREAM = 'https://mechs-auto-services.pages.dev';

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === '/api/health') {
      return Response.json({ ok: true, service: 'mechs-automotive-services' });
    }

    // Emergency Worker migration: preserve the Pages deployment exactly while
    // the independent asset export is retained. Requests to the custom domain
    // are fetched from the known-good production deployment, including its
    // HTML, routes, images, CSS, and JavaScript.
    const upstreamUrl = new URL(url.pathname + url.search, UPSTREAM);
    const upstreamRequest = new Request(upstreamUrl, request);
    const response = await fetch(upstreamRequest);
    const headers = new Headers(response.headers);

    headers.set('X-MECHS-Worker', 'mirror');
    headers.delete('content-encoding');
    headers.delete('content-length');
    headers.delete('transfer-encoding');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
