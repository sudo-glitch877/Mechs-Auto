# MECHS Automotive Services Worker

Emergency Worker migration for the live MECHS Pages deployment.

## Deploy

```bash
npm install
npm run deploy
```

After deployment, attach `mechsautomotiveservices.com` and
`www.mechsautomotiveservices.com` to this Worker in Cloudflare, or create the
matching Worker Routes. The Worker mirrors the existing Pages production
deployment, preserving the public website while the original project is kept
online.

`/api/health` provides a lightweight health check.
