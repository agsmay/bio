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

// Contact form handling removed - no longer needed

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

// Add click handlers to contact methods for copying (email only)
document.addEventListener('DOMContentLoaded', () => {
    const contactMethods = document.querySelectorAll('.contact-method:not(.contact-link)');
    
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
        title: "SELENE Lunar CubeSat Mission",
        description: "In a team of 8, built a complete prototype 2U CubeSat 'SELENE', with full functioning integrated systems. These include a Tracking, Telemetry & Command (TTC) system with a wifi connection that can be used to interface with the satellite remotely. An Electrical Power System (EPS) provides power to all components through solar panels and batteries. Our satellite had two payloads, a hyperspectral camera able to take images in the hyper spectrum on command, and a small radiation detector able to resolve changes in radiation through a photodiode. My particular role was the lead engineer for the Attitude Determination and Control System (ADCS) where I was responsible for accurate attitude estimation as well as three axis attitude control. Check out the link to see the control system in action. We have been selected to present on SELENE at the 11th UNISEC Global Meeting in Tokyo Japan later this year.",
        images: [
            "images/satellite/selene2.JPG",
            "images/satellite/on_table.jpg", 
            "images/satellite/selene3.JPG"
        ],
        challenges: [
            "<strong>State Estimation:</strong> Implemented non-linear state estimation techniques to provide accurate orientation estimates to the onboard computer.",
            "<strong>Attitude Dynamics and Control:</strong> Developed and tuned a custom control algorithm to provide precise pointing control in reference to telemetry commands.",
            "<strong>Integration:</strong> Modular development of different subsystems allowed for efficient integration into the final prototype.",
        ],
        technologies: ["Python", "C++", "Raspberry Pi"],
        video: "https://youtube.com/shorts/LzoBAVyGnyg",
    },
    webapp: {
        title: "Flight Simulator",
        description: "In a small research group, I worked with 3 others on developing new algorithms for USYD's Eight360 ball flight simulator. This was part of a research internship during winter 2025, and involved developing a new system to ensure safe operation, developing a new force perception algorithm, and gaining real pilot feedback on the performance.",
        images: [
            "images/ball/poster.JPG",
            "images/ball/brendan_flying.png"
        ],
        challenges: [
            "<strong>Safety:</strong> Implemented a constraint algorithm to ensure safe operation for all users, with tunable safety limits depending on the pilot's skill level.",
            "<strong>Pilot Feedback:</strong> Tested algorithms with trained pilots, and implemented algorithm changes based on feedback.",
        ],
        technologies: ["MATLAB", "Network Programming", "Simulink"],
        video: "https://youtube.com/shorts/E_AEI1XaJus",
    },
    mobile: {
        title: "Jabiru Aircraft Restoration",
        description: "With the first year aeronautical engineering cohort, and under the supervision of Licensed Aircraft Maintenance Engineers, restored a Jabiru J160C aircraft, including assembly of the wings, engine and tailplane. In the same project, developed a new T-Tail beginning with engineering drawings for each component.",
        images: [
            "images/jab/jab1.jpeg",
            "images/jab/jab2.jpeg",
            "images/jab/jab3.jpeg"
        ],
        challenges: [
            "<strong>Composites:</strong> Worked mainly with fibreglass components, and discovered the difficulties of composite manufacturing.",
            "<strong>Teamwork:</strong> Many aspects of assembly required good communication and teamwork with other students to ensure components were properly fitted.",
        ],
        technologies: ["Handtools", "Machining", "Fibreglass layup"],
        video: "https://youtube.com/shorts/-EqDPgLGzg4",
    },
    rocketry: {
        title: "USYD Rocketry",
        description: "Member of the USYD Rocketry Team, where most of my work is in modelling and simulations, as well as control systems. As the current lead of the Modelling & Control Subsystem for Project Galah, I am overseeing the development of an airbrake system for active altitude control. I was previously a flight simulations engineer for Project Pardalote, working on design optimisation, trajectory analysis, and hybrid engine modelling.",
        images: [
            "images/rocket/brakes.JPG",
            "images/rocket/brakes.JPG",
            "images/rocket/brakes.JPG",
            "images/rocket/brakes.JPG"
        ],
        challenges: [
            "<strong>Control Systems:</strong> Implementing real time Model Predictive Control, balancing accuracy and speed.",
            "<strong>Leadership:</strong> Leading a group of roughly a dozen talented undergraduate engineers, making sure we are on track for our goals as a subsystem, avoiding scope creep.",
            "<strong>Project Mangement:</strong> Developing budgets, timelines, failure modes and effects analysis, systems requirements.",
        ],
        technologies: ["Control Systems", "Aerodynamics", "Systems Engineering"],
        video: "https://youtu.be/o0MCGd7yx58?si=2eeF5rc3bKg7C_27",
    }    
};

// Helper: normalize various YouTube URLs to embed form
function toYouTubeEmbed(url) {
    if (!url) return '';
    try {
        const u = new URL(url);
        // youtu.be/<id>
        if (u.hostname.includes('youtu.be')) {
            return `https://www.youtube.com/embed/${u.pathname.replace('/', '')}`;
        }
        // youtube.com/shorts/<id>
        if (u.pathname.startsWith('/shorts/')) {
            return `https://www.youtube.com/embed/${u.pathname.split('/')[2]}`;
        }
        // youtube.com/watch?v=<id>
        if (u.searchParams.get('v')) {
            return `https://www.youtube.com/embed/${u.searchParams.get('v')}`;
        }
        return url;
    } catch (_) {
        return url;
    }
}

// Open modal function
function openModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    // Update modal content
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;
    
    // Update main image
    const mainImage = document.getElementById('modal-main-image');
    const images = Array.isArray(project.images) ? project.images : [];
    mainImage.src = images[0] || '';
    mainImage.alt = project.title;
    
    // Update thumbnails
    const thumbnailsContainer = document.getElementById('modal-thumbnails');
    thumbnailsContainer.innerHTML = '';
    
    images.forEach((image, index) => {
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
    (project.challenges || []).forEach(challenge => {
        const li = document.createElement('li');
        li.innerHTML = challenge;
        challengesList.appendChild(li);
    });
    
    // Update technologies
    const techStack = document.getElementById('modal-tech-stack');
    techStack.innerHTML = '';
    (project.technologies || []).forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'modal-tech-tag';
        tag.textContent = tech;
        techStack.appendChild(tag);
    });
    
    // Update results
    const resultsContainer = document.getElementById('modal-results');
    resultsContainer.innerHTML = '';
    (project.results || []).forEach(result => {
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
        videoIframe.src = toYouTubeEmbed(project.video);
    } else {
        videoSection.style.display = 'none';
    }
    
    // Update links
    const liveDemoEl = document.getElementById('modal-live-demo');
    const githubEl = document.getElementById('modal-github');
    if (project.liveDemo) {
        liveDemoEl.href = project.liveDemo;
        liveDemoEl.style.display = '';
    } else {
        liveDemoEl.style.display = 'none';
    }
    if (project.github) {
        githubEl.href = project.github;
        githubEl.style.display = '';
    } else {
        githubEl.style.display = 'none';
    }
    
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
        const projectId = e.currentTarget.dataset.project;
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

// Fullscreen Image Viewer
const imageViewer = document.getElementById('image-viewer');
const fullscreenImage = document.getElementById('fullscreen-image');
const imageViewerClose = document.querySelector('.image-viewer-close');
const prevImageBtn = document.getElementById('prev-image');
const nextImageBtn = document.getElementById('next-image');
const imageCounter = document.getElementById('image-counter');

let currentImageIndex = 0;
let currentImages = [];

// Open fullscreen image viewer
function openImageViewer(imageSrc, images, currentIndex = 0) {
    currentImages = images;
    currentImageIndex = currentIndex;
    
    fullscreenImage.src = imageSrc;
    imageViewer.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    updateImageCounter();
    updateNavigationButtons();
}

// Close fullscreen image viewer
function closeImageViewer() {
    imageViewer.style.display = 'none';
    document.body.style.overflow = 'auto';
    fullscreenImage.src = '';
}

// Update image counter
function updateImageCounter() {
    imageCounter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
}

// Update navigation buttons visibility
function updateNavigationButtons() {
    prevImageBtn.style.display = currentImages.length > 1 ? 'flex' : 'none';
    nextImageBtn.style.display = currentImages.length > 1 ? 'flex' : 'none';
}

// Navigate to previous image
function showPreviousImage() {
    if (currentImages.length > 1) {
        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
        fullscreenImage.src = currentImages[currentImageIndex];
        updateImageCounter();
    }
}

// Navigate to next image
function showNextImage() {
    if (currentImages.length > 1) {
        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
        fullscreenImage.src = currentImages[currentImageIndex];
        updateImageCounter();
    }
}

// Event listeners for image viewer
imageViewerClose.addEventListener('click', closeImageViewer);
prevImageBtn.addEventListener('click', showPreviousImage);
nextImageBtn.addEventListener('click', showNextImage);

// Close image viewer when clicking outside
imageViewer.addEventListener('click', (e) => {
    if (e.target === imageViewer) {
        closeImageViewer();
    }
});

// Close image viewer with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageViewer.style.display === 'block') {
        closeImageViewer();
    }
});

// Keyboard navigation for images
document.addEventListener('keydown', (e) => {
    if (imageViewer.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            showPreviousImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    }
});

// Resume Modal
const resumeModal = document.getElementById('resume-modal');
const viewResumeBtn = document.getElementById('view-resume-btn');
const resumeClose = document.querySelector('.resume-close');

// Open resume modal
function openResumeModal() {
    resumeModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close resume modal
function closeResumeModal() {
    resumeModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners for resume modal
viewResumeBtn.addEventListener('click', openResumeModal);
resumeClose.addEventListener('click', closeResumeModal);

// Close resume modal when clicking outside
resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
        closeResumeModal();
    }
});

// Close resume modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModal.style.display === 'block') {
        closeResumeModal();
    }
});

// Make modal images clickable
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers to modal images
    const modalImages = document.querySelectorAll('#modal-main-image, .thumbnail img');
    modalImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            // Get all images for the current project
            const projectId = document.querySelector('.modal-content').getAttribute('data-project-id');
            if (projectData[projectId] && projectData[projectId].images) {
                const images = projectData[projectId].images;
                const currentIndex = Array.from(modalImages).indexOf(img);
                openImageViewer(img.src, images, Math.max(0, currentIndex - 1));
            }
        });
    });
});
