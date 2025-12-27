# HONOR Rasht Marketing Campaign Presentation

Professional HTML5 presentation for HONOR roadshow counters, counter installations, and rebranding project in Rasht, 1404.

## 🎯 Project Overview

- **6 Strategic Locations** across Lakaani and Motahari Streets
- **5 Staff Members** deployed
- **Interactive Map** with clickable location markers
- **Photo & Video Galleries** for each location
- **Responsive Design** for all devices

## 📁 Project Structure

```
honor-presentation-rashtan/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # Complete styling
├── js/
│   ├── navigation.js      # Slide navigation
│   ├── map.js            # Interactive map
│   └── gallery.js        # Photo/video galleries
├── images/
│   ├── placeholder.jpg    # Default placeholder
│   ├── ilia-plus/
│   │   ├── main.jpg
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   ├── photo3.jpg
│   │   ├── photo4.jpg
│   │   ├── video1.mp4
│   │   └── video2.mp4
│   ├── charsu-plus/
│   │   ├── main.jpg
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   ├── photo3.jpg
│   │   ├── photo4.jpg
│   │   ├── video1.mp4
│   │   └── video2.mp4
│   ├── puzzle/
│   │   ├── main.jpg
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   ├── photo3.jpg
│   │   ├── photo4.jpg
│   │   ├── video1.mp4
│   │   └── video2.mp4
│   ├── xiaomi-center/
│   │   ├── main.jpg
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   ├── photo3.jpg
│   │   ├── photo4.jpg
│   │   ├── video1.mp4
│   │   └── video2.mp4
│   ├── sivan/
│   │   ├── main.jpg
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   ├── photo3.jpg
│   │   ├── photo4.jpg
│   │   ├── video1.mp4
│   │   └── video2.mp4
│   └── glass-headers/
│       ├── main.jpg
│       ├── photo1.jpg
│       ├── photo2.jpg
│       ├── photo3.jpg
│       ├── photo4.jpg
│       ├── video1.mp4
│       └── video2.mp4
└── README.md
```

## 📸 Image Upload Guide

### File Naming Convention

For each location, you need:
- **1 Main Image**: `main.jpg` (displayed on location slide)
- **4 Photos**: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`
- **2 Videos**: `video1.mp4`, `video2.mp4`

### Upload Locations

1. **Ilia Plus Store** → `images/ilia-plus/`
2. **Charsu Plus Passage** → `images/charsu-plus/`
3. **Puzzle Store** → `images/puzzle/`
4. **Xiaomi Center** → `images/xiaomi-center/`
5. **Sivan Store** → `images/sivan/`
6. **Glass Headers** → `images/glass-headers/`

### Image Specifications

- **Main Images**: 1200×800px minimum (landscape)
- **Gallery Photos**: 800×600px minimum
- **Videos**: MP4 format, max 50MB each
- **File Format**: JPG for images, MP4 for videos

### Example Upload

For **Ilia Plus Store**:
```bash
images/ilia-plus/main.jpg       # Main display image
images/ilia-plus/photo1.jpg     # Gallery photo 1
images/ilia-plus/photo2.jpg     # Gallery photo 2
images/ilia-plus/photo3.jpg     # Gallery photo 3
images/ilia-plus/photo4.jpg     # Gallery photo 4
images/ilia-plus/video1.mp4     # Gallery video 1
images/ilia-plus/video2.mp4     # Gallery video 2
```

## 🚀 Deploy to Cloudflare Pages

### Method 1: Via Cloudflare Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** → **Create a project**
3. Select **Connect to Git**
4. Choose this repository: `Farsimen/honor-presentation-rashtan`
5. Configure build settings:
   - **Framework preset**: None
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
   - **Root directory**: `/`
6. Click **Save and Deploy**

### Method 2: Via Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy . --project-name=honor-rashtan
```

## ✨ Features

- ✅ **9 Professional Slides**
- ✅ **Interactive Google Maps** (using Leaflet.js + OpenStreetMap)
- ✅ **Photo & Video Galleries** for each location
- ✅ **Animated Background** with moving light effects
- ✅ **Keyboard Navigation** (Arrow keys)
- ✅ **Progress Bar** tracking
- ✅ **Responsive Design** (mobile, tablet, desktop)
- ✅ **Smooth Transitions** between slides
- ✅ **Back to Home** button on map
- ✅ **Larger Fonts** for better readability
- ✅ **All English Content**

## 🎨 Design

- **Colors**: Sky blue gradient (#0ea5e9, #38bdf8)
- **Fonts**: Poppins (English)
- **Style**: Modern glassmorphism with animated backgrounds

## 🗺️ Locations

1. **Ilia Plus Store** - RSH00011 (37.275260, 49.580277)
2. **Sivan Store** - RSH00063 (37.274390, 49.580341)
3. **Puzzle Store** - RSH00059 (37.273602, 49.579657)
4. **Charsu Plus Passage** (37.273313, 49.580028)
5. **Xiaomi Center** - RSH00164 (37.271870, 49.592535)
6. **Glass Headers** - Passage (37.273313, 49.580028)

## 📱 Navigation

- **Next/Previous Buttons**: Bottom center
- **Keyboard**: Arrow Left/Right keys
- **Progress Bar**: Top of screen
- **Back to Home**: Available on map slide

## 🔧 Customization

To customize content, edit:
- `index.html` - Main content
- `styles/main.css` - Styling
- `js/navigation.js` - Navigation logic
- `js/map.js` - Map configuration
- `js/gallery.js` - Gallery system

## 📄 License

Proprietary - HONOR Tabriz Region

## 👤 Contact

For questions or support, contact the HONOR Tabriz regional team.

---

**Live URL**: Will be available at `honor-rashtan.pages.dev` after deployment