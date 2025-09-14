// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.project-card, .skill-item, .contact-method');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // For now, just show a success message
        // In a real implementation, you would send this data to a server
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
    });
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        // Uncomment the line below to enable typing animation
        // typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effects to project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Skill items animation on hover
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px) scale(1.05)';
            item.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
            item.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Utility function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show a temporary notification
        const notification = document.createElement('div');
        notification.textContent = 'Copied to clipboard!';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 10000;
            font-weight: 500;
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    });
}

// Add click handlers to contact methods for copying
document.addEventListener('DOMContentLoaded', () => {
    const contactMethods = document.querySelectorAll('.contact-method');
    
    contactMethods.forEach(method => {
        method.style.cursor = 'pointer';
        method.addEventListener('click', () => {
            const text = method.querySelector('span').textContent;
            copyToClipboard(text);
        });
    });
});

// Add smooth reveal animation for sections
const revealElements = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});

// Make the first section (hero) visible immediately
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }
});

// Project Modal System
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close');
const readMoreBtns = document.querySelectorAll('.read-more-btn');

// Project data - you can customize this with your actual project information
const projectData = {
    satellite: {
        title: "CubeSat Mission Control System",
        description: "Developed a comprehensive mission control system for a CubeSat satellite project, featuring real-time telemetry monitoring, orbital tracking algorithms, and automated command sequences. The system successfully managed satellite operations for 6 months, handling over 10,000 telemetry packets and executing 500+ automated commands.",
        images: [
            "images/satellite/satellite-main.jpg",
            "images/satellite/ground-station.jpg", 
            "images/satellite/telemetry-dashboard.jpg",
            "images/satellite/orbital-tracking.jpg"
        ],
        challenges: [
            "<strong>Real-time Communication:</strong> Implemented robust radio communication protocols to maintain contact with the satellite during orbital passes, achieving 95% successful communication rate.",
            "<strong>Orbital Mechanics:</strong> Developed custom algorithms for predicting satellite position and timing ground station passes, with accuracy within 30 seconds.",
            "<strong>Data Processing:</strong> Built efficient telemetry parsing system to handle high-frequency data streams and detect anomalies in real-time.",
            "<strong>Power Management:</strong> Designed intelligent power management system to optimize battery usage and ensure continuous operation during eclipse periods."
        ],
        technologies: ["Python", "C++", "Raspberry Pi", "Radio Communication", "Orbital Mechanics", "Real-time Systems", "Data Analysis", "Linux"],
        results: [
            { number: "6", label: "Months Operation" },
            { number: "10K+", label: "Telemetry Packets" },
            { number: "95%", label: "Success Rate" },
            { number: "500+", label: "Commands Executed" }
        ],
        video: "https://www.youtube.com/embed/your-satellite-video-id",
        liveDemo: "https://your-satellite-demo.com",
        github: "https://github.com/yourusername/cubesat-mission-control"
    },
    webapp: {
        title: "AI-Powered Analytics Dashboard",
        description: "Built a comprehensive real-time analytics platform that processes millions of data points daily, providing actionable insights through machine learning algorithms. The system serves over 10,000 active users with 99.9% uptime and features automated anomaly detection, predictive analytics, and custom reporting capabilities.",
        images: [
            "images/webapp/dashboard-main.jpg",
            "images/webapp/analytics-view.jpg",
            "images/webapp/ml-insights.jpg",
            "images/webapp/custom-reports.jpg"
        ],
        challenges: [
            "<strong>Scalability:</strong> Designed distributed architecture to handle 1M+ data points per minute with sub-second response times.",
            "<strong>Machine Learning Integration:</strong> Implemented real-time ML pipeline for anomaly detection and predictive analytics with 98% accuracy.",
            "<strong>Data Visualization:</strong> Created interactive dashboards with custom D3.js visualizations for complex data relationships.",
            "<strong>Real-time Processing:</strong> Built event-driven architecture using Apache Kafka for real-time data streaming and processing."
        ],
        technologies: ["React", "Node.js", "TensorFlow", "AWS", "Docker", "Kubernetes", "Apache Kafka", "PostgreSQL", "Redis"],
        results: [
            { number: "10K+", label: "Active Users" },
            { number: "99.9%", label: "Uptime" },
            { number: "1M+", label: "Data Points/Min" },
            { number: "98%", label: "ML Accuracy" }
        ],
        video: "https://www.youtube.com/embed/your-webapp-video-id",
        liveDemo: "https://your-analytics-demo.com",
        github: "https://github.com/yourusername/ai-analytics-dashboard"
    },
    mobile: {
        title: "IoT Smart Home Controller",
        description: "Developed a cross-platform mobile application for comprehensive smart home automation, supporting 50+ device types and protocols. The app features voice control, geofencing, automation rules, and energy monitoring, achieving a 4.8-star rating with over 100,000 downloads.",
        images: [
            "images/mobile/app-main.jpg",
            "images/mobile/device-control.jpg",
            "images/mobile/automation-rules.jpg",
            "images/mobile/energy-monitoring.jpg"
        ],
        challenges: [
            "<strong>Protocol Integration:</strong> Implemented support for multiple IoT protocols (Zigbee, Z-Wave, WiFi, Bluetooth) with unified device management.",
            "<strong>Voice Recognition:</strong> Integrated advanced voice control with 95% accuracy for natural language device commands.",
            "<strong>Geofencing:</strong> Developed location-based automation using GPS and WiFi positioning for seamless user experience.",
            "<strong>Real-time Sync:</strong> Built real-time synchronization system to keep all devices and automations in sync across multiple users."
        ],
        technologies: ["React Native", "Firebase", "IoT Protocols", "Voice Recognition", "GPS", "Bluetooth", "WebSocket", "Redux"],
        results: [
            { number: "100K+", label: "Downloads" },
            { number: "4.8", label: "Star Rating" },
            { number: "50+", label: "Device Types" },
            { number: "95%", label: "Voice Accuracy" }
        ],
        video: "https://www.youtube.com/embed/your-mobile-video-id",
        liveDemo: "https://your-smart-home-demo.com",
        github: "https://github.com/yourusername/iot-smart-home-controller"
    }
};

// Open modal function
function openModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    // Update modal content
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;
    
    // Update main image
    const mainImage = document.getElementById('modal-main-image');
    mainImage.src = project.images[0];
    mainImage.alt = project.title;
    
    // Update thumbnails
    const thumbnailsContainer = document.getElementById('modal-thumbnails');
    thumbnailsContainer.innerHTML = '';
    
    project.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${image}" alt="Project Image ${index + 1}">`;
        thumbnail.addEventListener('click', () => {
            // Remove active class from all thumbnails
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');
            // Update main image
            mainImage.src = image;
        });
        thumbnailsContainer.appendChild(thumbnail);
    });
    
    // Update challenges
    const challengesList = document.getElementById('modal-challenges');
    challengesList.innerHTML = '';
    project.challenges.forEach(challenge => {
        const li = document.createElement('li');
        li.innerHTML = challenge;
        challengesList.appendChild(li);
    });
    
    // Update technologies
    const techStack = document.getElementById('modal-tech-stack');
    techStack.innerHTML = '';
    project.technologies.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'modal-tech-tag';
        tag.textContent = tech;
        techStack.appendChild(tag);
    });
    
    // Update results
    const resultsContainer = document.getElementById('modal-results');
    resultsContainer.innerHTML = '';
    project.results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `
            <span class="result-number">${result.number}</span>
            <span class="result-label">${result.label}</span>
        `;
        resultsContainer.appendChild(resultItem);
    });
    
    // Update video if available
    const videoSection = document.getElementById('modal-video-section');
    const videoIframe = document.getElementById('modal-video');
    if (project.video) {
        videoSection.style.display = 'block';
        videoIframe.src = project.video;
    } else {
        videoSection.style.display = 'none';
    }
    
    // Update links
    document.getElementById('modal-live-demo').href = project.liveDemo;
    document.getElementById('modal-github').href = project.github;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close modal function
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
    
    // Clear video iframe to stop playback
    const videoIframe = document.getElementById('modal-video');
    videoIframe.src = '';
}

// Event listeners
readMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const projectId = e.target.getAttribute('data-project');
        openModal(projectId);
    });
});

closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside of it
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Smooth scroll for modal content
const modalContent = document.querySelector('.modal-content');
modalContent.addEventListener('scroll', (e) => {
    // Add any scroll-based animations here if needed
});
