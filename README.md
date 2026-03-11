# cp-inboxmonster

Netlify Functions proxy for the Inbox Monster API — CrabPlace.com email deliverability integration.

## Setup

### 1. Create GitHub repo
Create a new repo named `cp-inboxmonster` under the `crabplace` GitHub account and push this code.

### 2. Deploy to Netlify
- Connect the GitHub repo to a new Netlify site
- Suggested site name: `crabplace-inboxmonster`

### 3. Add Environment Variable in Netlify
In Netlify → Site Settings → Environment Variables, add:

```
INBOXMONSTER_API_KEY = your_api_key_here
```

### 4. Test Connection
Once deployed, visit:
```
https://crabplace-inboxmonster.netlify.app/.netlify/functions/test-connection
```
Should return `{ "success": true }` with client data.

---

## Available Functions

| Function | Endpoint | Description |
|---|---|---|
| `test-connection` | `/test-connection` | Verify API key works |
| `inbox-placement` | `/inbox-placement?limit=25&page=1` | Inbox placement test results |
| `inbox-placement` | `/inbox-placement?id=<id>` | Single placement test detail |
| `reputation` | `/reputation` | Sender reputation data |
| `blocklist` | `/blocklist` | Blocklist monitoring |
| `spamtraps` | `/spamtraps` | Spam trap hits |
| `engagement` | `/engagement` | Engagement metrics |
| `oversight` | `/oversight` | Oversight monitoring |

All functions use Bearer Token auth via the `INBOXMONSTER_API_KEY` environment variable — the key is never exposed client-side.
