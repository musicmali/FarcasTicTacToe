# 🚀 Deployment Guide: Publishing Your Farcaster MiniApp

Follow these steps to publish your Tic-Tac-Toe miniapp on Base and Farcaster.

---

## 📋 Prerequisites

Before you start, make sure you have:
- [ ] A Farcaster account
- [ ] A domain name or hosting service (Vercel/Netlify recommended - free tier works!)
- [ ] Node.js installed on your Mac
- [ ] Git installed (for Vercel/Netlify deployment)

---

## Step 1: Test Locally ✅

First, make sure everything works on your Mac:

```bash
cd "/Users/mali/MINIAPP V2"
npm install
npm run dev
```

Open `http://localhost:3000` and test the game thoroughly:
- Play a few games
- Test all buttons
- Check that it looks good on different window sizes

---

## Step 2: Build for Production 🏗️

Create an optimized production build:

```bash
npm run build
```

This creates a `dist` folder with your production-ready files.

---

## Step 3: Deploy to Hosting Service 🌐

### Option A: Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Initialize Git (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
4. **Follow the prompts:**
   - Login with your account (or create one)
   - Set up and deploy
   - Choose default settings

5. **Deploy to production:**
   ```bash
   vercel --prod
   ```

6. **Note your URL:** You'll get something like `https://your-app.vercel.app`

### Option B: Deploy to Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   netlify deploy --prod
   ```
   
3. **Follow prompts and specify `dist` as your publish directory**

4. **Note your URL:** You'll get something like `https://your-app.netlify.app`

### Option C: Use Your Own Domain

If you have your own domain, configure your DNS to point to Vercel/Netlify and set up a custom domain in their dashboard.

---

## Step 4: Create App Icons 🎨

Create two images for your miniapp:

1. **Icon** (512x512 px recommended)
   - Square app icon
   - Save as `icon.png`

2. **Splash Screen** (1200x630 px recommended)
   - Landscape image shown when app loads
   - Save as `splash.png`

Upload both images to your hosting service in the `public` folder or use an image hosting service.

---

## Step 5: Update farcaster.json 📝

Edit `public/.well-known/farcaster.json` and replace placeholder URLs:

```json
{
  "accountAssociation": {
    "header": "",
    "payload": "",
    "signature": ""
  },
  "frame": {
    "version": "next",
    "name": "Tic-Tac-Toe MiniApp",
    "iconUrl": "https://YOUR-DOMAIN.com/icon.png",
    "splashImageUrl": "https://YOUR-DOMAIN.com/splash.png",
    "splashBackgroundColor": "#667eea",
    "homeUrl": "https://YOUR-DOMAIN.com",
    "webhookUrl": "https://YOUR-DOMAIN.com/api/webhook"
  }
}
```

Replace `YOUR-DOMAIN.com` with your actual deployment URL.

**Redeploy after making changes:**
```bash
vercel --prod
# or
netlify deploy --prod
```

---

## Step 6: Verify Manifest Accessibility 🔍

Make sure your manifest is publicly accessible:

Open in browser: `https://YOUR-DOMAIN.com/.well-known/farcaster.json`

You should see your JSON configuration. If you get a 404, check:
- File is in `public/.well-known/` folder
- You've redeployed after adding the file
- Your hosting service serves files from the `public` folder correctly

---

## Step 7: Sign Your Manifest with Base 🔐

This proves you own the miniapp:

1. **Go to Base Build Account Association tool:**
   - Visit: https://build.base.org/ or https://www.base.org/build
   - Look for "Account Association" or "MiniApp Registration"

2. **Connect your wallet:**
   - Use a wallet on Base network (MetaMask, Coinbase Wallet, etc.)
   - Make sure you're on Base mainnet (Chain ID: 8453)

3. **Enter your miniapp URL:**
   - Input: `https://YOUR-DOMAIN.com`
   - The tool will fetch your `farcaster.json`

4. **Sign the message:**
   - Your wallet will prompt you to sign
   - This generates the `accountAssociation` fields

5. **Copy the generated values:**
   The tool will give you:
   - `header`
   - `payload`
   - `signature`

6. **Update farcaster.json:**
   Replace the empty strings in `accountAssociation`:
   ```json
   "accountAssociation": {
     "header": "eyJmaWQ...",
     "payload": "eyJkb21h...",
     "signature": "MHg3Nz..."
   }
   ```

7. **Redeploy:**
   ```bash
   vercel --prod
   # or
   netlify deploy --prod
   ```

---

## Step 8: Update HTML Meta Tags 🏷️

Edit `index.html` and update the embed metadata with your real domain:

```html
<!-- Farcaster Frame Metadata -->
<meta property="fc:frame" content="vNext" />
<meta property="fc:frame:image" content="https://YOUR-DOMAIN.com/splash.png" />
<meta property="fc:frame:button:1" content="Play Tic-Tac-Toe" />
<meta property="fc:frame:button:1:action" content="launch_frame" />
<meta property="fc:frame:button:1:target" content="https://YOUR-DOMAIN.com" />

<!-- Open Graph Metadata -->
<meta property="og:title" content="Tic-Tac-Toe MiniApp" />
<meta property="og:description" content="Play tic-tac-toe against the CPU in this Farcaster miniapp" />
<meta property="og:image" content="https://YOUR-DOMAIN.com/splash.png" />

<!-- Twitter Card Metadata -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Tic-Tac-Toe MiniApp" />
<meta name="twitter:description" content="Play tic-tac-toe against the CPU in this Farcaster miniapp" />
<meta name="twitter:image" content="https://YOUR-DOMAIN.com/splash.png" />
```

**Redeploy again:**
```bash
vercel --prod
```

---

## Step 9: Register with Farcaster 📱

Now register your miniapp so it appears in Farcaster:

1. **Go to Farcaster Miniapp Registry:**
   - Visit: https://warpcast.com/~/developers (or the current registry URL)
   - Or check: https://docs.farcaster.xyz/ for the latest submission process

2. **Submit your miniapp:**
   - Provide your domain: `https://YOUR-DOMAIN.com`
   - The registry will verify your `farcaster.json`
   - Make sure the manifest is signed properly

3. **Wait for approval:**
   - This can take anywhere from a few hours to a few days
   - You'll be notified when approved

---

## Step 10: Test in Farcaster 🧪

Once approved:

1. **Open Warpcast or another Farcaster client**

2. **Share your miniapp:**
   - Create a cast with your miniapp URL
   - Or search for it in the miniapp directory

3. **Test the launch button:**
   - Click "Play Tic-Tac-Toe"
   - The miniapp should open in the Farcaster frame viewer

4. **Test all features:**
   - Play the game
   - Check that it looks good in the frame
   - Test on mobile if possible

---

## 📊 Verification Checklist

Before submitting, verify:

- [ ] App works locally (`npm run dev`)
- [ ] Production build successful (`npm run build`)
- [ ] App deployed and accessible at public URL
- [ ] Icons and splash images uploaded and accessible
- [ ] `farcaster.json` accessible at `/.well-known/farcaster.json`
- [ ] All URLs in `farcaster.json` point to your actual domain
- [ ] Manifest signed with Base Account Association
- [ ] HTML meta tags updated with your domain
- [ ] App loads correctly at your public URL
- [ ] No console errors in browser developer tools

---

## 🔧 Troubleshooting

### Issue: 404 on farcaster.json

**Solution:** 
- Check that the file is in `public/.well-known/farcaster.json`
- Some hosting services need special configuration for `.well-known` folders
- For Vercel: should work automatically
- For Netlify: may need to add redirect rules

### Issue: Manifest not signed properly

**Solution:**
- Make sure you're on Base mainnet (Chain ID 8453)
- Double-check you copied all three fields (header, payload, signature)
- Ensure no extra spaces or line breaks in the JSON

### Issue: App doesn't load in Farcaster

**Solution:**
- Check browser console for errors
- Verify the Farcaster SDK is loaded correctly
- Make sure your domain is accessible (not blocked by firewall)
- Wait a few minutes for DNS propagation

### Issue: Images not showing

**Solution:**
- Verify image URLs are publicly accessible
- Check that images are in correct format (PNG or JPEG)
- Use absolute URLs (https://...) not relative paths

---

## 🎉 Success!

Once your miniapp is approved and working in Farcaster:
- Share it with the Farcaster community
- Post about it on Warpcast
- Get feedback and iterate
- Consider adding more features!

---

## 📚 Additional Resources

- Farcaster Docs: https://docs.farcaster.xyz/
- Base Documentation: https://docs.base.org/
- Farcaster MiniApps: https://miniapps.farcaster.xyz/
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com/

---

## 💡 Next Steps

After your miniapp is live, consider:
- Adding multiplayer functionality
- Integrating Base blockchain features (leaderboards, NFT rewards)
- Adding sound effects
- Creating difficulty selection (easy/medium/hard)
- Adding animations and polish

Good luck! 🚀

