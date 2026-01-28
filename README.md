# 💜 Will You Be My Valentine? Website

A beautiful, interactive website to ask your special someone to be your Valentine!

## ✨ Features

- **Interactive Question**: The "No" button shrinks while "Yes" keeps growing larger with each click (can overflow!)
- **Celebration Animation**: Confetti and celebration screen when they say yes
- **Custom Photo or Cute Cow**: Upload your own photo, or enjoy the adorable SVG cow holding a heart
- **Valentine's Day Plans**: Beautiful calendar view of your plans with times and locations
- **Multiple Calendar Events**: Each activity exported as a separate calendar event with specific times and locations
- **Fully Mobile Friendly**: Looks great on phones, tablets, and desktop

## 📁 File Structure

```
valentine-website/
│
├── index.html            # Main HTML file
├── styles.css            # All styling with lavender/lilac theme
├── script.js             # JavaScript for interactions and calendar exports
├── valentine-photo.png   # Your photo (optional - see below)
└── README.md             # This file
```

## 🖼️ Adding Your Photo (Optional)

1. Choose a photo of you and your girlfriend
2. Rename it to **exactly** `valentine-photo.png`
3. Place it in the same folder as `index.html`
4. The website will automatically display it!

**If you don't add a photo**: A cute cow holding a heart will show instead! 🐮💜

**Supported formats**: .png, .jpg, .jpeg (but must be named valentine-photo.png)

## 🚀 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it something like `valentine` or `be-my-valentine`
4. Make it **Public** (required for GitHub Pages)
5. Don't initialize with README (we have our own files)
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**

1. On your new repository page, click "uploading an existing file"
2. Drag and drop ALL files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `valentine-photo.png` (if you have one)
   - `README.md`
3. Scroll down and click "Commit changes"

**Option B: Using Git Command Line**

```bash
# Navigate to your project folder
cd path/to/your/valentine-website

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Valentine's website"

# Add your GitHub repository as remote (replace USERNAME and REPO-NAME)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (top menu)
3. Scroll down and click "Pages" (left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select `main` and `/root`
6. Click "Save"

### Step 4: Access Your Website

1. Wait 1-2 minutes for GitHub to build your site
2. Your website will be live at:
   ```
   https://USERNAME.github.io/REPO-NAME/
   ```
3. Share this link with your girlfriend! 💜

## 🎨 Customizing the Website

### Change the Plans and Times

Edit the events array in `script.js` (around line 97):

```javascript
const valentineEvents = [
    {
        title: "Pick Up My Valentine 🚗",
        start: "20250214T180000", // Format: YYYYMMDDTHHMMSS (6:00 PM)
        end: "20250214T183000",   // 6:30 PM
        location: "Your place",
        description: "Time to pick up my beautiful Valentine! 💜"
    },
    // Add more events or modify existing ones!
];
```

You can also edit the display in `index.html` (around line 56):

```html
<div class="event-item" data-event="0">
    <div class="event-time">6:00 PM</div>
    <div class="event-details">
        <div class="event-desc">Your custom plan 🚗</div>
        <div class="event-location">Your custom location</div>
    </div>
</div>
```

### Change the Date

If Valentine's Day isn't on February 14, 2025, update:

**In `index.html`** (around line 52):
```html
<p class="date">Friday, February 14, 2025</p>
```

**In `script.js`** (in the valentineEvents array, around line 97):
```javascript
start: "20250214T180000", // Format: YYYYMMDDTHHMMSS
end: "20250214T183000"
```

### Customize the Cow or Add Your Photo

**To use your own photo:**
- Name your photo `valentine-photo.png` and place it in the same folder
- Any image format works (.png, .jpg, .jpeg) but must be named valentine-photo.png
- If the photo doesn't load, the cute cow SVG will show as a fallback

**To customize the cow (in `index.html` around line 35):**
- Change colors by editing `fill` attributes
- Modify the heart color (currently `#ff69b4`)
- Add or remove spots
- Change the cow's expression

### Change Colors

Edit `styles.css` to change the color scheme. The main lavender colors are:
- `#e6d5f0` - Light lavender
- `#d4b5e8` - Medium lavender
- `#b794f6` - Purple lavender
- `#8b5fbf` - Deep purple

### Change Text

Edit `index.html` to change any text on the website:
- Main question (line 18)
- Celebration message (line 32)
- Calendar description (line 45-46)

## 🔧 Troubleshooting

### Photo Not Showing
- Make sure the photo is named **exactly** `valentine-photo.png`
- Check that it's in the same folder as `index.html`
- File must be named valentine-photo.png even if it's a .jpg
- If it still doesn't work, the cute cow will show instead!

### Yes Button Not Growing
- Make sure you're clicking the "No" button to trigger the growth
- The Yes button will overflow the container (this is intentional!)
- Try testing in different browsers

### Website Not Loading on GitHub Pages
- Wait 2-3 minutes after enabling Pages
- Check that your repository is Public
- Make sure `index.html` is in the root folder
- Clear your browser cache and try again

### Calendar Export Not Working
- **Google Calendar**: Opens multiple tabs (one per event) - allow popups!
- **Apple Calendar**: Downloads a single `.ics` file with all events
- Open the downloaded `.ics` file to add all events to Calendar app
- Some browsers may block multiple popups - check your browser settings

### Mobile Display Issues
- The site is fully responsive and should work on all devices
- Try rotating your device
- Clear your mobile browser cache
- Make sure you're using a modern browser

## 💡 Tips

1. **Test locally first**: Open `index.html` in your browser before uploading
2. **Mobile friendly**: The site works perfectly on phones - test it!
3. **Customize everything**: Feel free to change colors, text, events, or the cow drawing
4. **Share the link**: Send the GitHub Pages URL to your girlfriend
5. **Privacy**: The website is public, so don't include sensitive information
6. **Allow popups**: When exporting to Google Calendar, you'll need to allow multiple popups
7. **Click "No" multiple times**: Watch the Yes button take over the screen! 😄

## 🎉 After She Says Yes

The calendar export creates **separate events** for each activity:
- **Google Calendar**: Opens multiple tabs (one per event) with all details pre-filled
- **Apple Calendar**: Downloads one `.ics` file containing all events

Each event includes:
- Specific start and end times
- Location information
- Descriptions
- 30-minute reminder alerts

## 📝 License

Feel free to use and modify this however you want! Made with 💜

## 🤝 Need Help?

If you run into issues:
1. Check the troubleshooting section above
2. Make sure all files are uploaded correctly
3. Verify GitHub Pages is enabled in settings
4. Try opening the site in a private/incognito browser window

---

**Good luck! I hope she says yes! 💜✨**
