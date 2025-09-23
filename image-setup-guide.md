# Image Setup Guide

## 📁 Folder Structure

Create these folders in your project directory:

```
web/
├── images/
│   ├── me.jpg                    # Your profile photo
│   ├── satellite/
│   │   ├── satellite-main.jpg
│   │   ├── on_table.jpg
│   │   ├── telemetry-dashboard.jpg
│   │   └── orbital-tracking.jpg
│   ├── ball/
│   │   ├── ball_main.jpg
│   │   └── brendan_flying.png
│   ├── aircraft/
│   │   └── aircraft-main.jpg
│   └── rocketry/
│       └── rocketry-main.jpg
```

## 🖼️ Image Requirements

### Profile Photo (`images/me.jpg`)
- **Size:** 300x300px (square)
- **Format:** JPG or PNG
- **Quality:** High resolution, professional headshot
- **Background:** Clean, professional background

### Project Images
- **Size:** 400x300px (4:3 ratio) or 600x400px
- **Format:** JPG or PNG
- **Quality:** High resolution, clear screenshots
- **Content:** Show your project in action

## 🎯 Image Optimization Tips

### Before Adding Images:
1. **Resize images** to the recommended dimensions
2. **Compress images** using [TinyPNG](https://tinypng.com/) or similar
3. **Keep file sizes under 500KB** each
4. **Use descriptive filenames** (no spaces, use underscores)

### Tools for Image Editing:
- **Free:** GIMP, Paint.NET, Canva
- **Online:** TinyPNG, Squoosh.app
- **Mobile:** Snapseed, VSCO

## 📱 Mobile Optimization

Your images will automatically:
- Scale to fit properly (no squashing!)
- Load quickly on mobile networks
- Look great on all screen sizes

## 🔧 Adding Your Images

### Step 1: Create the folders
```
mkdir images
mkdir images/satellite
mkdir images/ball
mkdir images/aircraft
mkdir images/rocketry
```

### Step 2: Add your images
- Copy your profile photo to `images/me.jpg`
- Add satellite project images to `images/satellite/`
- Add flight simulator images to `images/ball/`
- Add aircraft restoration images to `images/aircraft/`
- Add rocketry team images to `images/rocketry/`

### Step 3: Test your website
- Open `index.html` in your browser
- Check that all images load properly
- Test on your phone to ensure mobile compatibility

## 🎨 Image Content Suggestions

### Profile Photo:
- Professional headshot
- Good lighting
- Clean background
- Smiling and approachable

### Project Images:
- **Satellite:** CubeSat on table, control system interface, team working
- **Flight Simulator:** Ball simulator in action, control panel, team testing
- **Aircraft:** Jabiru aircraft, restoration process, team assembly
- **Rocketry:** Rocket launch, team meetings, control systems

## 🚀 Quick Start

1. **Take/Find your best photos**
2. **Resize them** to the recommended dimensions
3. **Compress them** to reduce file size
4. **Add them to the correct folders**
5. **Test your website**

## 🆘 Troubleshooting

### Images not showing?
- Check file paths are correct
- Ensure images are in the right folders
- Verify image file extensions (.jpg, .png)

### Images look squashed?
- The CSS now uses `object-fit: cover` to prevent squashing
- Images will crop to fit properly instead of stretching

### Images too large/slow?
- Compress images using TinyPNG
- Resize images to recommended dimensions
- Use JPG for photos, PNG for graphics

---

**Your website is now ready for your images!** 🎉

Just add your photos to the folders and they'll appear automatically on your website.
