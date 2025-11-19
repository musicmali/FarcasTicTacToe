# FarcasTicTacToe

A beautiful and interactive tic-tac-toe game built as a Farcaster miniapp on Base. Play against the CPU on medium difficulty.

## Features

- 🎮 Play tic-tac-toe against a CPU opponent (medium difficulty)
- 🎨 Beautiful, modern UI with smooth animations
- 📊 Score tracking system
- 🎯 Medium difficulty - CPU blocks wins and takes opportunities
- 📱 Fully responsive design
- ⚡ Built with React + Vite for optimal performance
- 🔗 Integrated with Farcaster Frame SDK

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

### 4. Deploy

Deploy the contents of the `dist` folder to your hosting platform (Vercel, Netlify, etc.)

### 5. Configure farcaster.json

After deployment, update `public/.well-known/farcaster.json`:

1. Replace `https://your-domain.com` with your actual domain
2. Add your icon and splash images
3. Sign the manifest using the Base Build Account Association tool
4. Update the `accountAssociation` fields with the generated values

## Farcaster Frame Specifications

- **Frame Version:** vNext
- **Required Chain:** Base (eip155:8453)
- **Manifest Location:** `/.well-known/farcaster.json`

## Technologies Used

- React 18
- Vite 5
- Farcaster Frame SDK
- Lexend Font
- CSS3 with Animations

## Game Features

- **Player:** You play as X (blue)
- **CPU:** Computer plays as O (pink)
- **Difficulty:** Medium mode - CPU blocks your wins and takes its own, otherwise random
- **Score Tracking:** Wins, losses, and draws

## Manifest File

The `farcaster.json` file is located at `public/.well-known/farcaster.json` and contains:
- Account association data (to be signed after deployment)
- Frame metadata (name, icon, splash screen)
- App configuration (version, URLs, required chains)

## Important Notes

- Remember to update all placeholder URLs in `farcaster.json` with your actual domain
- Sign the manifest after deployment using the Base Build Account Association tool
- The miniapp follows Farcaster's frame specifications for optimal compatibility
- Ensure your domain serves the `farcaster.json` file at `/.well-known/farcaster.json`

