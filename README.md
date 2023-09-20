# Repro for NextJS 13.5 + Azure Blob Storage error

Error: `TypeError: Expected signal to be an instanceof AbortSignal`

With NextJS 13.5 (tested with 13.5.1, 13.5.2, and 13.5.2-canary.2), `npm run dev` works, but `npm run build && npm run start` gives this error at runtime:

```txt
TypeError: Expected signal to be an instanceof AbortSignal
    at new G (C:\projects\personal\next-azure-blob-repro\.next\server\chunks\609.js:24:13531)
    at C:\projects\personal\next-azure-blob-repro\.next\server\chunks\609.js:24:15051
    at new Promise (<anonymous>)
    at Object.J [as default] (C:\projects\personal\next-azure-blob-repro\.next\server\chunks\609.js:24:15003)
    at eN.fetch (C:\projects\personal\next-azure-blob-repro\.next\server\chunks\609.js:2:4247)
    at eN.sendRequest (C:\projects\personal\next-azure-blob-repro\.next\server\chunks\609.js:2:1989)
```

## Other versions

- 13.4.19 - **works**
- 13.4.20-canary.0 - **works**
- 13.4.20-canary.10 - **works**
- 13.4.20-canary.15 - **works**
- 13.4.20-canary.17 - **works**
- 13.4.20-canary.18 - **works**
- 13.4.20-canary.19 - **fails**
- 13.4.20-canary.20 - **fails**
- 13.4.20-canary.40 - **fails**
- 13.5.1 - **fails**
- 13.5.2-canary.2 - **fails**
- 13.5.2 - **fails**
