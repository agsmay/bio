# Portfolio Customization Guide

This guide will walk you through customizing your portfolio website step by step.

## 🎯 Quick Customization Checklist

- [ ] Update personal information (name, title, contact details)
- [ ] Add your profile photo
- [ ] Write your about section
- [ ] Update skills list
- [ ] Add 3-5 project showcases
- [ ] Add project images
- [ ] Test on mobile devices
- [ ] Deploy to hosting platform
- [ ] Generate QR code

## 📝 Step-by-Step Customization

### 1. Personal Information

**File to edit:** `index.html`

**What to change:**
```html
<!-- Page title -->
<title>Your Name - Project Portfolio</title>

<!-- Navigation logo -->
<h2>Your Name</h2>

<!-- Hero section -->
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="hero-subtitle">Your Job Title Here</p>

<!-- Contact information -->
<span>your.email@example.com</span>
<span>linkedin.com/in/yourprofile</span>
<span>github.com/yourusername</span>
<span>+1 (555) 123-4567</span>
```

### 2. About Section

**File to edit:** `index.html` (lines around 80-95)

**Replace the placeholder text with your story:**
```html
<p>
    I'm a passionate developer with 3+ years of experience building web applications.
    I specialize in React, Node.js, and cloud technologies. I love solving complex
    problems and creating user-friendly solutions.
</p>
<p>
    When I'm not coding, you can find me contributing to open source projects,
    writing technical blogs, or exploring new technologies. I'm always eager to
    learn and take on new challenges.
</p>
```

### 3. Skills Section

**File to edit:** `index.html` (around line 100-120)

**Update with your technical skills:**
```html
<div class="skills-grid">
    <div class="skill-item">
        <i class="fab fa-js-square"></i>
        <span>JavaScript</span>
    </div>
    <div class="skill-item">
        <i class="fab fa-react"></i>
        <span>React</span>
    </div>
    <div class="skill-item">
        <i class="fab fa-python"></i>
        <span>Python</span>
    </div>
    <!-- Add more skills -->
</div>
```

**Available icons:** Check [Font Awesome icons](https://fontawesome.com/icons) for more options.

### 4. Projects Section

**File to edit:** `index.html` (around line 130-200)

**For each project, update:**

#### Project 1 Example:
```html
<div class="project-card">
    <div class="project-image">
        <img src="images/ecommerce-app.jpg" alt="E-commerce App">
    </div>
    <div class="project-content">
        <h3 class="project-title">E-commerce Platform</h3>
        <p class="project-description">
            A full-stack e-commerce application built with React and Node.js.
            Features include user authentication, payment processing, and admin dashboard.
            Handles 1000+ concurrent users with 99.9% uptime.
        </p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
            <span class="tech-tag">Stripe API</span>
        </div>
        <div class="project-links">
            <a href="https://your-ecommerce-app.com" class="project-link" target="_blank">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="https://github.com/yourusername/ecommerce-app" class="project-link" target="_blank">
                <i class="fab fa-github"></i> GitHub
            </a>
        </div>
    </div>
</div>
```

### 5. Adding Project Images

**Steps:**
1. Create an `images` folder in your project directory
2. Add your project screenshots (recommended: 600x400px, JPG/PNG)
3. Update the image paths in your project cards

**Image optimization tips:**
- Use tools like [TinyPNG](https://tinypng.com/) to compress images
- Keep file sizes under 500KB for faster loading
- Use descriptive filenames: `project-name-screenshot.jpg`

### 6. Profile Photo

**File to edit:** `index.html` (around line 60)

**Replace the placeholder:**
```html
<div class="hero-image">
    <img src="images/profile-photo.jpg" alt="Your Name" class="profile-photo">
</div>
```

**Photo requirements:**
- Size: 300x300px (square)
- Format: JPG or PNG
- Professional appearance
- Good lighting and clear image

### 7. Color Customization

**File to edit:** `styles.css`

**Main colors to change:**
```css
/* Primary blue color */
#2563eb

/* Accent yellow color */
#fbbf24

/* Hero gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Color scheme suggestions:**
- **Professional:** Navy (#1e3a8a) + Gold (#f59e0b)
- **Modern:** Purple (#7c3aed) + Pink (#ec4899)
- **Tech:** Green (#059669) + Blue (#0ea5e9)

### 8. Font Customization

**File to edit:** `index.html` (head section)

**Change the Google Fonts link:**
```html
<!-- Current font -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Alternative fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
```

## 🚀 Deployment Guide

### Option 1: GitHub Pages (Recommended for beginners)

1. **Create GitHub repository:**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it `yourname-portfolio` or similar
   - Make it public

2. **Upload files:**
   - Upload all your files to the repository
   - Commit and push changes

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Your site will be at: `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Easiest)

1. **Go to [netlify.com](https://netlify.com)**
2. **Drag and drop** your project folder
3. **Get instant deployment** with custom URL
4. **Optional:** Connect to GitHub for automatic updates

### Option 3: Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Import your GitHub repository**
3. **Deploy with one click**
4. **Get custom domain** and automatic HTTPS

## 📱 QR Code Generation

### Online Generators:
- [QR Code Generator](https://www.qr-code-generator.com/)
- [QR Code Monkey](https://www.qrcode-monkey.com/)
- [Google QR Code API](https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=YOUR_URL)

### Steps:
1. **Deploy your website** first
2. **Copy your website URL**
3. **Paste into QR generator**
4. **Download the QR code**
5. **Use on business cards, resumes, LinkedIn**

### QR Code Tips:
- **Size:** At least 1 inch (2.5cm) for easy scanning
- **Contrast:** High contrast (black on white)
- **Testing:** Test with multiple devices before printing

## ✅ Final Checklist

Before going live:

- [ ] All personal information updated
- [ ] Profile photo added
- [ ] About section written
- [ ] Skills list accurate
- [ ] 3-5 projects showcased
- [ ] All project images added
- [ ] All links working
- [ ] Contact form functional
- [ ] Mobile responsive tested
- [ ] Loading speed optimized
- [ ] SEO meta tags added (optional)
- [ ] Analytics tracking added (optional)

## 🎨 Advanced Customizations

### Adding New Sections

**Example: Adding a "Testimonials" section:**

```html
<!-- Add after projects section -->
<section id="testimonials" class="testimonials">
    <div class="container">
        <h2 class="section-title">What People Say</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <p>"Amazing work! Highly recommend."</p>
                <h4>- Client Name</h4>
            </div>
        </div>
    </div>
</section>
```

### Adding Animations

**File to edit:** `script.js`

**Add custom animations:**
```javascript
// Custom animation example
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-me');
    elements.forEach(el => {
        // Your animation logic here
    });
}
```

## 🆘 Troubleshooting

### Common Issues:

1. **Images not showing:**
   - Check file paths are correct
   - Ensure images are in the right folder
   - Use relative paths: `images/photo.jpg`

2. **Links not working:**
   - Make sure URLs include `https://`
   - Test links in new browser tab
   - Check for typos in URLs

3. **Mobile layout issues:**
   - Test on actual devices
   - Use browser developer tools
   - Check CSS media queries

4. **Slow loading:**
   - Compress images
   - Remove unused CSS/JS
   - Use a CDN for fonts

### Getting Help:

- Check browser console for errors
- Validate HTML at [validator.w3.org](https://validator.w3.org/)
- Test CSS at [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/)

---

**Need more help?** Feel free to reach out or check the main README.md for additional resources!
