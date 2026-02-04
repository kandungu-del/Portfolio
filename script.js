// ============================================
// DOM Elements & Page Content
// ============================================

const dom = {
    body: document.body,
    content: document.getElementById('content'),
    menuToggle: document.getElementById('menuToggle'),
    navLinks: document.getElementById('navLinks'),
    themeToggle: document.getElementById('themeToggle'),
    loadingOverlay: document.getElementById('loadingOverlay'),
    currentYear: document.getElementById('currentYear')
};

const pages = {
    home: {
        title: "Kahindo Ndungu | Web Developer",
        content: `
            <section class="hero-section content-section">
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title reveal">Hi, I'm <span class="highlight">Kahindo Ndungu</span></h1>
                        <p class="hero-subtitle reveal">A passionate student web developer building clean, modern, and responsive websites.</p>
                        <div class="hero-actions">
                            <a href="#portfolio" class="btn btn-primary reveal" data-page="portfolio">
                                <i class="fas fa-code"></i> View My Work
                            </a>
                            <a href="#contact" class="btn reveal" data-page="contact" style="background: var(--color-bg-card); color: var(--color-text); border: 1px solid var(--color-border);">
                                <i class="fas fa-envelope"></i> Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content-section" id="about">
                <div class="container">
                    <h2 class="text-center mb-lg reveal">About Me</h2>
                    <div class="about-content">
                        <img src="https://images.unsplash.com/photo-1517697471339-4aa32003c11a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                             alt="Web Developer at work" 
                             class="about-img reveal">
                        <div class="about-text">
                            <h3 class="reveal">My Journey</h3>
                            <p class="reveal">I'm a student developer with a passion for creating beautiful, functional websites. My journey started with curiosity about how websites work, and it has grown into a dedicated pursuit of web development excellence.</p>
                            
                            <h3 class="reveal mt-lg">What I Do</h3>
                            <p class="reveal">I specialize in front-end development using HTML, CSS, and JavaScript. I focus on creating responsive, accessible, and user-friendly web experiences.</p>
                            
                            <div class="skills-grid mt-lg">
                                <div class="skill-category reveal">
                                    <h4><i class="fas fa-code"></i> Front-End</h4>
                                    <div class="skill-list">
                                        <span class="skill-tag">HTML5</span>
                                        <span class="skill-tag">CSS3</span>
                                        <span class="skill-tag">JavaScript</span>
                                        <span class="skill-tag">Responsive Design</span>
                                    </div>
                                </div>
                                
                                <div class="skill-category reveal">
                                    <h4><i class="fas fa-tools"></i> Tools</h4>
                                    <div class="skill-list">
                                        <span class="skill-tag">Git</span>
                                        <span class="skill-tag">VS Code</span>
                                        <span class="skill-tag">Figma</span>
                                        <span class="skill-tag">Chrome DevTools</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    
    about: {
        title: "About Me | Kahindo Ndungu",
        content: `
            <section class="hero-section content-section">
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title reveal">About <span class="highlight">Me</span></h1>
                        <p class="hero-subtitle reveal">Get to know who I am and my passion for web development</p>
                    </div>
                </div>
            </section>

            <section class="content-section">
                <div class="container">
                    <div class="about-content">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                             alt="Portrait of Kahindo Ndungu" 
                             class="about-img reveal">
                        
                        <div class="about-text">
                            <h2 class="reveal">Who am I?</h2>
                            <p class="reveal">I am Kahindo Ndungu, a student currently exploring the world of technology. I have a strong passion for coding and web development. I love learning new technologies and applying them to build functional and responsive websites.</p>
                            
                            <h3 class="reveal mt-lg">My Introduction</h3>
                            <p class="reveal">My journey in tech started with a curiosity to understand how websites work. Over time, I've developed a strong foundation in front-end development and continue to explore new technologies and best practices.</p>
                            
                            <h3 class="reveal mt-lg">Core Skills</h3>
                            <div class="skill-list reveal">
                                <span class="skill-tag">HTML5</span>
                                <span class="skill-tag">CSS3</span>
                                <span class="skill-tag">JavaScript</span>
                                <span class="skill-tag">Web Development</span>
                                <span class="skill-tag">Responsive Design</span>
                                <span class="skill-tag">Problem Solving</span>
                            </div>
                            
                            <h3 class="reveal mt-lg">What Drives Me</h3>
                            <p class="reveal">I'm passionate about creating user-friendly, visually appealing websites that solve real problems. I believe in continuous learning and staying updated with industry trends.</p>
                            
                            <div class="skills-grid mt-lg">
                                <div class="skill-category reveal">
                                    <h4><i class="fas fa-graduation-cap"></i> Education</h4>
                                    <p>Currently studying at Light Academy, focusing on practical skills in web development and programming.</p>
                                </div>
                                
                                <div class="skill-category reveal">
                                    <h4><i class="fas fa-language"></i> Languages</h4>
                                    <p>English (Fluent), Swahili (Native)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content-section">
                <div class="container">
                    <h2 class="text-center mb-lg reveal">Services & Skills</h2>
                    <div class="skills-grid">
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-laptop-code"></i> Web Development</h4>
                            <p>Building responsive and user-friendly websites using HTML, CSS, and JavaScript.</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-palette"></i> Front-End Design</h4>
                            <p>Creating visually appealing and intuitive user interfaces.</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-lightbulb"></i> Problem Solving</h4>
                            <p>Approaching challenges with analytical thinking and creative solutions.</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-chart-line"></i> Learning & Growth</h4>
                            <p>Committed to continuous improvement and mastering new technologies.</p>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    
    experience: {
        title: "Experience | Kahindo Ndungu",
        content: `
            <section class="hero-section content-section">
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title reveal">My <span class="highlight">Journey</span></h1>
                        <p class="hero-subtitle reveal">Learning and growing as a developer</p>
                    </div>
                </div>
            </section>

            <section class="content-section">
                <div class="container">
                    <h2 class="text-center mb-lg reveal">Education</h2>
                    <div class="experience-timeline">
                        <div class="timeline-item reveal">
                            <div class="timeline-date">2023 - Present</div>
                            <div class="timeline-content">
                                <h3>Light Academy</h3>
                                <p>Currently studying at Light Academy, focusing on web development and building real-world projects.</p>
                                <div class="skill-list">
                                    <span class="skill-tag">Web Development</span>
                                    <span class="skill-tag">Programming</span>
                                    <span class="skill-tag">Computer Science</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <h2 class="text-center mb-lg reveal mt-xl">Courses & Certifications</h2>
                    <div class="skills-grid">
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-certificate"></i> Web Development Fundamentals</h4>
                            <p>Light Academy - Mastered core concepts of web development</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-certificate"></i> HTML & CSS Mastery</h4>
                            <p>Advanced styling techniques and responsive design</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-certificate"></i> JavaScript Essentials</h4>
                            <p>Interactive web applications and DOM manipulation</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-certificate"></i> Responsive Web Design</h4>
                            <p>Mobile-first approach and cross-device compatibility</p>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    
    portfolio: {
        title: "Portfolio | Kahindo Ndungu",
        content: `
            <section class="hero-section content-section">
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title reveal">My <span class="highlight">Portfolio</span></h1>
                        <p class="hero-subtitle reveal">Check out my latest projects and work</p>
                    </div>
                </div>
            </section>

            <section class="content-section">
                <div class="container">
                    <div class="projects-grid">
                        <div class="project-card reveal">
                            <div class="project-image-container">
                                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                     alt="Portfolio Website" 
                                     class="project-image">
                            </div>
                            <div class="project-content">
                                <h3>Personal Portfolio Website</h3>
                                <p>A responsive portfolio showcasing my web development skills with modern design and smooth animations.</p>
                                <div class="project-tags">
                                    <span class="project-tag">HTML5</span>
                                    <span class="project-tag">CSS3</span>
                                    <span class="project-tag">JavaScript</span>
                                    <span class="project-tag">Responsive</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="project-card reveal">
                            <div class="project-image-container">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                     alt="Interactive Web App" 
                                     class="project-image">
                            </div>
                            <div class="project-content">
                                <h3>Interactive Web Application</h3>
                                <p>A dynamic web app with JavaScript functionality, user interactions, and real-time updates.</p>
                                <div class="project-tags">
                                    <span class="project-tag">JavaScript</span>
                                    <span class="project-tag">API Integration</span>
                                    <span class="project-tag">UI/UX</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="project-card reveal">
                            <div class="project-image-container">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                     alt="Responsive Design" 
                                     class="project-image">
                            </div>
                            <div class="project-content">
                                <h3>Responsive Website Design</h3>
                                <p>Mobile-first responsive website with CSS Grid, Flexbox, and modern design principles.</p>
                                <div class="project-tags">
                                    <span class="project-tag">CSS Grid</span>
                                    <span class="project-tag">Flexbox</span>
                                    <span class="project-tag">Mobile-First</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content-section">
                <div class="container">
                    <div class="project-grid">
                        <div class="project-card reveal">
                            <a href="#project-details" data-page="project1" style="display: block; color: inherit;">
                                <div class="project-image-container">
                                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                         alt="Portfolio Project" 
                                         class="project-image">
                                </div>
                                <div class="project-content">
                                    <h3>Portfolio Project Details</h3>
                                    <p>Click to see the complete breakdown of this portfolio website project.</p>
                                    <div class="project-tags">
                                        <span class="project-tag">Full Project</span>
                                        <span class="project-tag">Case Study</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    
    project1: {
        title: "Portfolio Project | Kahindo Ndungu",
        content: `
            <section class="hero-section content-section">
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title reveal">Portfolio <span class="highlight">Project</span></h1>
                        <p class="hero-subtitle reveal">A complete personal portfolio built from scratch</p>
                    </div>
                </div>
            </section>

            <section class="content-section">
                <div class="container">
                    <h2 class="reveal">Project Overview</h2>
                    <p class="reveal">
                        This project is my personal portfolio website. It showcases my skills,
                        experience, and projects as a student web developer. The goal was to
                        create a clean, professional, and responsive site using core web
                        technologies.
                    </p>
                    
                    <h2 class="reveal mt-lg">Technologies Used</h2>
                    <div class="skills-grid">
                        <div class="skill-category reveal">
                            <h4><i class="fab fa-html5"></i> HTML5</h4>
                            <p>Semantic structure for accessibility and SEO.</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fab fa-css3-alt"></i> CSS3</h4>
                            <p>Flexbox, Grid, animations, and responsive layouts.</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fab fa-js"></i> JavaScript</h4>
                            <p>Navigation, animations, and interactive elements.</p>
                        </div>
                    </div>
                    
                    <h2 class="reveal mt-lg">Key Features</h2>
                    <ul class="reveal" style="list-style: none; padding-left: 0;">
                        <li style="margin-bottom: 0.5rem;"><i class="fas fa-check-circle" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Multi-page navigation</li>
                        <li style="margin-bottom: 0.5rem;"><i class="fas fa-check-circle" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Responsive design (mobile & desktop)</li>
                        <li style="margin-bottom: 0.5rem;"><i class="fas fa-check-circle" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Dark mode toggle</li>
                        <li style="margin-bottom: 0.5rem;"><i class="fas fa-check-circle" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Scroll reveal animations</li>
                        <li style="margin-bottom: 0.5rem;"><i class="fas fa-check-circle" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Clean and modern UI</li>
                    </ul>
                    
                    <div class="text-center mt-xl">
                        <a href="#portfolio" class="btn btn-primary reveal" data-page="portfolio">
                            <i class="fas fa-arrow-left"></i> Back to Portfolio
                        </a>
                    </div>
                </div>
            </section>
        `
    },
    
    contact: {
        title: "Contact | Kahindo Ndungu",
        content: `
            <section class="hero-section content-section">
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title reveal">Get In <span class="highlight">Touch</span></h1>
                        <p class="hero-subtitle reveal">Let's connect and build something amazing together</p>
                    </div>
                </div>
            </section>

            <section class="content-section">
                <div class="container">
                    <div class="contact-section">
                        <div class="contact-info reveal" style="text-align: center; margin-bottom: 3rem;">
                            <h2>Contact Information</h2>
                            <p style="margin-bottom: 1.5rem;">I'm always open to discussing new opportunities, collaborations, or just chatting about web development!</p>
                            
                            <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
                                <a href="mailto:ka.ndungu@lightacademy.sc.ke" class="btn" style="display: inline-flex; align-items: center; gap: 0.5rem;">
                                    <i class="fas fa-envelope"></i> ka.ndungu@lightacademy.sc.ke
                                </a>
                                
                                <a href="https://github.com/kandungu-del" class="btn" target="_blank" style="display: inline-flex; align-items: center; gap: 0.5rem;">
                                    <i class="fab fa-github"></i> github.com/kandungu-del
                                </a>
                            </div>
                        </div>
                        
                        <div class="contact-form reveal">
                            <h3 style="margin-bottom: 1.5rem; text-align: center;">Send Me a Message</h3>
                            <form id="contactForm">
                                <div class="form-group">
                                    <label for="name" class="form-label">Your Name</label>
                                    <input type="text" id="name" class="form-input" placeholder="Enter your name" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="email" class="form-label">Your Email</label>
                                    <input type="email" id="email" class="form-input" placeholder="Enter your email" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="message" class="form-label">Your Message</label>
                                    <textarea id="message" class="form-textarea" placeholder="Hello Kahindo, I'd like to connect about..." rows="5" required></textarea>
                                </div>
                                
                                <button type="submit" class="btn btn-primary" style="width: 100%;">
                                    <i class="fas fa-paper-plane"></i> Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
};

// ============================================
// Navigation & Routing
// ============================================

function navigateTo(page) {
    if (!pages[page]) page = 'home';
    
    // Update page title
    document.title = pages[page].title;
    
    // Update URL hash
    window.location.hash = page;
    
    // Update content with fade transition
    dom.content.style.opacity = '0';
    
    setTimeout(() => {
        dom.content.innerHTML = pages[page].content;
        dom.content.style.opacity = '1';
        
        // Update active navigation link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === page) {
                link.classList.add('active');
            }
        });
        
        // Initialize animations for new content
        setTimeout(() => {
            initRevealAnimations();
            addContentEventListeners();
        }, 100);
        
        // Close mobile menu if open
        if (dom.navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
}

// ============================================
// Theme Management
// ============================================

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    dom.body.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = dom.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    dom.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ============================================
// Mobile Menu
// ============================================

function toggleMobileMenu() {
    dom.menuToggle.classList.toggle('active');
    dom.navLinks.classList.toggle('active');
    dom.body.style.overflow = dom.navLinks.classList.contains('active') ? 'hidden' : '';
}

// ============================================
// Animations
// ============================================

function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    
    function checkReveal() {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Initial check
}

// ============================================
// Form Handling
// ============================================

function handleContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Create mailto link
    const subject = `Message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    const mailtoLink = `mailto:ka.ndungu@lightacademy.sc.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
}

// ============================================
// Content Event Listeners
// ============================================

function addContentEventListeners() {
    // Add click listeners to all internal links
    document.querySelectorAll('a[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateTo(page);
        });
    });
    
    // Add form submit listener
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

// ============================================
// Initialization
// ============================================

function init() {
    // Set current year in footer
    if (dom.currentYear) {
        dom.currentYear.textContent = new Date().getFullYear();
    }
    
    // Initialize theme
    initTheme();
    
    // Load initial page based on URL hash
    const hash = window.location.hash.substring(1);
    navigateTo(hash || 'home');
    
    // Hide loading overlay
    setTimeout(() => {
        dom.loadingOverlay.classList.add('hidden');
        setTimeout(() => {
            dom.loadingOverlay.style.display = 'none';
        }, 500);
    }, 800);
    
    // Add event listeners
    dom.menuToggle.addEventListener('click', toggleMobileMenu);
    dom.themeToggle.addEventListener('click', toggleTheme);
    
    // Handle hash change for back/forward navigation
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.substring(1);
        navigateTo(hash || 'home');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (dom.navLinks.classList.contains('active') && 
            !e.target.closest('.navbar-menu') && 
            !e.target.closest('.navbar-toggle')) {
            toggleMobileMenu();
        }
    });
    
    // Handle escape key for menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && dom.navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
