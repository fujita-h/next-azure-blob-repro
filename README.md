# Repro for NextJS 14.0.4 + Azure Blob Storage error

Error: `TypeError: Expected signal to be an instanceof AbortSignal`

With NextJS 14.0.4, `npm run dev` works, but `npm run build && npm run start` gives this error at runtime:

```txt
TypeError: Expected signal to be an instanceof AbortSignal
    at new oA (/home/azureuser/next-azure-blob-repro/.next/server/app/page.js:2:33643)
    at /home/azureuser/next-azure-blob-repro/.next/server/app/page.js:2:35119
    at new Promise (<anonymous>)
    at oL (/home/azureuser/next-azure-blob-repro/.next/server/app/page.js:2:35070)
    at oK.fetch (/home/azureuser/next-azure-blob-repro/.next/server/app/page.js:2:44079)
    at oK.sendRequest (/home/azureuser/next-azure-blob-repro/.next/server/app/page.js:2:41832)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
```

## Other versions

- 14.0.3 - **works**
- 14.0.4 - **fails**
