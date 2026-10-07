# DaGoat Royale

DaGoat Royale is a browser-based 3D FPS battle royale prototype built with Three.js. It focuses on a polished game loop, arena-style movement, bot AI, loot, storm, and multiple modes while staying easy to extend for future online multiplayer.

## Features

- 3D first-person movement with sprint, jump, crouch, and camera look
- Original weapons and switching between them
- Bot AI with multiple difficulty tiers
- Battle royale map with buildings, trees, loot, and storm damage
- Practice mode
- Store, locker, settings, party screen, and results flow
- Local persistence using localStorage
- Event-driven UI for mode selection and home menu
- Modular structure for future Node.js/WebSocket multiplayer backend

## Quick start

1. Install dependencies:
   npm install
2. Run locally:
   npm run dev
3. Open the site in your browser at:
   http://localhost:4173

## Build production bundle

npm run build

## Preview production build

npm run preview -- --host

## Deploy to GitHub Pages

1. In `vite.config.js`, change `base` to your repo name when needed:
   base: '/DaGoat-Royale/'
2. Build the project:
   npm run build
3. Publish the `dist` folder through GitHub Pages or a GitHub Actions workflow.

## Deploy to Vercel

1. Import the repo into Vercel.
2. Use the default Vite project settings.
3. Deploy.

## Multiplayer backend plan

The code includes network interfaces in:
- `src/network/Client.js`
- `src/network/PartyClient.js`

These are placeholders to support a future WebSocket or Socket.IO backend. A real server would eventually handle:
- Player state and movement
- Shooting and hit detection
- Health/shield sync
- Inventory and loot
- Match state and party membership
- Respawns and round transitions

## Project structure

- `src/main.js` — app entry point
- `src/game/GameApp.js` — primary game loop, UI coordination, mode selection, and match state
- `src/game/Player.js` — player input and movement logic
- `src/game/Bot.js` — bot behavior and combat logic
- `src/game/World.js` — environment generation
- `src/game/Loot.js` — item pickup logic
- `src/game/Storm.js` — storm logic and damage
- `src/game/Inventory.js` — inventory placeholder logic
- `src/network/Client.js` — multiplayer hookup placeholder
- `src/network/PartyClient.js` — party-system placeholder
- `src/style.css` — all graphics and UI styling
- `index.html` — page shell
- `vite.config.js` — Vite config

## Working prototype status

Fully working in this browser prototype:
- Home screen
- 3D first-person camera and walking
- Sprinting, jumping, and crouch-like motion
- Weapon switching and firing loop
- Bots with distinct difficulty behavior
- Battle royale style map and storm zone
- Loot pickups
- Practice mode flow
- Item shop, locker, settings, and party screens
- Local save system using localStorage
- Match results overlay

Requires server/backend work for full online multiplayer:
- Real online coordination and matchmaking
- Cross-browser live combat sync
- Server-authoritative player state validation
- Party room synchronization and lobby hosting

## Commands

- npm install
- npm run dev
- npm run build
- npm run preview -- --host
