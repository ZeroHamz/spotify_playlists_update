# Internal Playlist Evaluation Tool – Web Client

This repository contains the web client for an internal Playlist Evaluation Tool.
The tool is used by curation, editorial, and experimentation teams to quickly
assess playlist concepts and register lightweight engagement signals.

The client is a small React application that surfaces a list of test playlists
and allows internal reviewers to register "Like" interactions.

---

## Overview

The current build renders a static set of playlists with:

- Playlist name
- Current like count
- A button to register a like

Each interaction is intended to simulate an engagement event that would be sent
to downstream systems.

There is a known issue in the current implementation:

- The client calls a simulated backend function to compute an updated like
  count.
- However, the UI does not reflect the updated value after the interaction.
- The new like count is not visible unless the page is reloaded or data is
  re-fetched.

This repository hosts the existing implementation so the issue can be
reproduced and addressed.

---

## Tech Stack

- React + TypeScript
- Vite (build tooling)
- Local in-memory mock for the "like" endpoint (no external backend dependency)

The project is intentionally lightweight and suitable for static deployment.

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The application will be available at the URL printed in the terminal
(typically http://localhost:5173).

### Building for Production

```bash
npm run build
```

The optimized build will be output to the `dist/` directory.

This build can be deployed to static hosting providers, including Vercel.

### Deployment (Vercel)

When deploying to Vercel, use the following settings:

- Framework preset: React
- Build command: `npm run build`
- Output directory: `dist`

Vercel will handle the remainder of the configuration automatically.

---

## Structure

```
src/
  api/
    likePlaylist.ts     # simulated "backend" like endpoint
  PlaylistsPage.tsx     # main UI for playlist list + like interaction
  App.tsx
  main.tsx
  types.ts
  index.css
```

`likePlaylist.ts` simulates the behavior of a backend system that returns an
updated like count.

`PlaylistsPage.tsx` contains the current like interaction logic and the known
UI update issue.
