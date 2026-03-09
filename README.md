# AtarImage — 8th Wall AR (GitHub Pages)

Image-tracking AR experience built with 8th Wall + A-Frame.

## 📁 File Structure

```
AtarImage/
├── index.html          ← Main AR page
├── ar-init.js          ← AR lifecycle (loading, scan prompt)
├── assets/
│   └── imgtracker.png  ← ⚠️ YOU MUST ADD THIS FILE (copy from your Desktop project)
└── README.md
```

## ⚠️ Before Uploading to GitHub

### 1. Copy your image target
Copy `imgtracker.png` from your original project into the `assets/` folder:
```
D:\8thWall\Atar\AtarImage\src\assets\imgtracker.png  →  assets\imgtracker.png
```

### 2. Add your 8th Wall App Key
You need a free 8th Wall account and an **App Key** for your domain.

1. Go to [https://www.8thwall.com](https://www.8thwall.com) → sign in
2. Create a new **Web AR** project
3. Go to **Settings → App Key**
4. In `index.html`, replace this line:
   ```
   REPLACE_WITH_YOUR_8THWALL_APP_KEY
   ```
   with your actual key, e.g.:
   ```
   https://apps.8thwall.com/xrweb?appKey=abc123xyz...
   ```
5. In 8th Wall dashboard → **Authorized Domains** → add:
   ```
   helmiedt.github.io
   ```

### 3. Enable GitHub Pages
In your GitHub repo → **Settings → Pages → Branch: main → / (root)** → Save

### 4. Your live URL
```
https://helmiedt.github.io/AtarImage/
```

## 🔍 How It Works
- Opens the phone camera automatically
- Point at `imgtracker.png` — a blue 3D box appears on top of the image
- The box spins with a 360° rotation animation

## 📱 Requirements
- iOS 13+ or Android 8+ with Chrome/Safari
- HTTPS required (GitHub Pages provides this automatically)
