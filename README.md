# Project Portfolio Website

A modern, responsive portfolio website designed to showcase your projects and professional experience. This template is perfect for developers, designers, and creatives who want to create an impressive online presence.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Project Showcase**: Dedicated sections for highlighting your work
- **Contact Form**: Built-in contact form for potential clients/employers
- **Easy Customization**: Simple HTML structure for easy content updates
- **Fast Loading**: Optimized for performance and SEO

## Quick Start

1. **Download/Clone** the files to your local machine
2. **Open** `index.html` in your web browser to preview
3. **Customize** the content by editing the HTML file
4. **Deploy** to your preferred hosting platform

## Customization Guide

### 1. Personal Information
Edit the following in `index.html`:

```html
<!-- Replace "Your Name" throughout the file -->
<title>Your Name - Project Portfolio</title>
<h2>Your Name</h2>
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>

<!-- Update contact information -->
<span>your.email@example.com</span>
<span>linkedin.com/in/yourprofile</span>
<span>github.com/yourusername</span>
<span>+1 (555) 123-4567</span>
```

### 2. About Section
Replace the placeholder text in the About section with your own story:

```html
<p>
    <!-- Your personal story and background -->
    I'm a passionate developer with a love for creating innovative solutions...
</p>
```

### 3. Skills Section
Update the skills grid with your technical expertise:

```html
<div class="skill-item">
    <i class="fab fa-js-square"></i>
    <span>JavaScript</span>
</div>
<!-- Add more skills as needed -->
```

### 4. Projects Section
For each project, update:

- **Project Name**: Change the title
- **Description**: Write about what the project does
- **Technologies**: Update the tech tags
- **Links**: Add your live demo and GitHub links
- **Images**: Replace placeholder with actual project screenshots

```html
<div class="project-card">
    <div class="project-image">
        <!-- Replace with your project image -->
        <img src="path/to/your/project-image.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">
            Your project description here...
        </p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <!-- Add your technologies -->
        </div>
        <div class="project-links">
            <a href="your-live-demo-url" class="project-link" target="_blank">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="your-github-url" class="project-link" target="_blank">
                <i class="fab fa-github"></i> GitHub
            </a>
        </div>
    </div>
</div>
```

### 5. Profile Photo
Replace the placeholder in the hero section:

```html
<div class="hero-image">
    <img src="path/to/your/photo.jpg" alt="Your Name" class="profile-photo">
</div>
```

## Adding Project Images

1. Create a `images` folder in your project directory
2. Add your project screenshots (recommended size: 600x400px)
3. Update the image paths in your project cards:

```html
<div class="project-image">
    <img src="images/project1.jpg" alt="Project 1">
</div>
```

## Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a new repository on GitHub
2. Upload your files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be deployed instantly with a custom URL

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

### Option 4: Custom Domain
1. Purchase a domain from providers like Namecheap, GoDaddy, etc.
2. Point your domain to your hosting provider
3. Update your site with the custom domain

## QR Code Generation

Once your website is deployed, you can generate a QR code for easy sharing:

### Online QR Code Generators:
- [QR Code Generator](https://www.qr-code-generator.com/)
- [QR Code Monkey](https://www.qrcode-monkey.com/)
- [Google QR Code Generator](https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=YOUR_URL)

### Steps:
1. Copy your deployed website URL
2. Paste it into a QR code generator
3. Download the QR code image
4. Print it on business cards, resumes, or share digitally

## Customization Tips

### Colors
The main color scheme is defined in `styles.css`. You can change:
- Primary color: `#2563eb` (blue)
- Accent color: `#fbbf24` (yellow)
- Background gradients in the hero section

### Fonts
The site uses Google Fonts (Inter). You can change this by:
1. Updating the Google Fonts link in `index.html`
2. Changing the font-family in `styles.css`

### Animations
All animations are defined in `script.js`. You can:
- Disable animations by commenting out the observer code
- Adjust animation speeds by modifying the CSS transition durations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Compress your images before uploading
2. **Minify Files**: Use tools to minify CSS and JavaScript for production
3. **CDN**: Consider using a CDN for faster loading times
4. **Caching**: Enable browser caching on your hosting platform

## Support

If you need help customizing your portfolio:
1. Check the HTML comments for guidance
2. Use browser developer tools to inspect elements
3. Refer to the CSS classes for styling modifications

## License

This template is free to use for personal and commercial projects. Feel free to modify and distribute as needed.

---

**Happy coding!** 🚀

Remember to:
- Keep your content updated
- Test on different devices
- Optimize your images
- Get feedback from others
- Share your QR code widely!
