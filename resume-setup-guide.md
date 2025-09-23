# Resume Setup Guide

## 📁 Folder Structure

Create this folder and add your resume:

```
web/
├── resume/
│   └── Sam_Magarey_Resume.pdf
```

## 📄 Resume Requirements

### File Format
- **Format:** PDF (recommended for best compatibility)
- **File name:** `Sam_Magarey_Resume.pdf` (exactly as shown)
- **File size:** Under 5MB for fast loading

### Content Suggestions
- **Professional summary** or objective
- **Education** (University of Sydney, Aerospace Engineering & Mathematics)
- **Experience** (USYD Rocketry, Research Intern, Casual Academic)
- **Projects** (SELENE CubeSat, Flight Simulator, etc.)
- **Skills** (Python, MATLAB, C++, Excel, SolidWorks)
- **Achievements** (UNISEC Global Meeting, World Champion Rocketry Team)

## 🎯 How It Works

### Resume Button
- Located in the contact section
- Clicking opens a fullscreen modal
- PDF displays directly in the browser
- Download button available

### Features
- **Fullscreen viewing** - Perfect for detailed reading
- **Download option** - Easy to save for offline viewing
- **Mobile friendly** - Works great on phones
- **Professional presentation** - Clean, modern interface

## 🚀 Setup Steps

1. **Create the resume folder:**
   ```
   mkdir resume
   ```

2. **Add your resume PDF:**
   - Save your resume as `Sam_Magarey_Resume.pdf`
   - Place it in the `resume/` folder
   - Ensure it's under 5MB

3. **Test the functionality:**
   - Open your website
   - Click "View Resume" button
   - Verify PDF loads correctly
   - Test download button

## 📱 Mobile Optimization

Your resume will automatically:
- Scale to fit mobile screens
- Allow zooming and panning
- Load quickly on mobile networks
- Work with touch gestures

## 🎨 Resume Design Tips

### For Best Results:
- **Use clear, readable fonts** (Arial, Calibri, Times New Roman)
- **Keep formatting simple** - avoid complex layouts
- **Use consistent spacing** and alignment
- **Include relevant keywords** for your field
- **Keep it concise** - 1-2 pages maximum

### Content Structure:
1. **Header** - Name, contact info
2. **Summary** - Brief professional overview
3. **Education** - University, degree, relevant coursework
4. **Experience** - USYD Rocketry, research, teaching
5. **Projects** - Key technical projects
6. **Skills** - Technical and soft skills
7. **Achievements** - Awards, recognitions

## 🆘 Troubleshooting

### PDF not loading?
- Check file name is exactly `Sam_Magarey_Resume.pdf`
- Ensure file is in the `resume/` folder
- Verify file is not corrupted
- Check file size is under 5MB

### PDF looks blurry?
- Use high-resolution PDF export
- Avoid scanned documents
- Use vector-based fonts

### Mobile issues?
- Test on actual mobile device
- Ensure PDF is mobile-friendly
- Check file size for mobile loading

## 🔧 Customization

### Change Resume Button Text:
Edit in `index.html`:
```html
<button class="btn btn-primary" id="view-resume-btn">
    <i class="fas fa-file-pdf"></i> View My Resume
</button>
```

### Change Resume File Name:
Update in `index.html`:
```html
<iframe id="resume-iframe" src="resume/Your_Resume_Name.pdf" width="100%" height="600px"></iframe>
```

---

**Your resume is now professionally integrated!** 🎉

Perfect for conference QR code sharing - people can view your detailed resume directly on their phones.
