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
                            <p class="reveal">I'm a student developer with a passion for creating beautiful, functional websites and applications. My journey started with curiosity about how websites work, and it has grown into a dedicated pursuit of web development excellence.</p>
                            
                            <h3 class="reveal mt-lg">Technical Skills</h3>
                            <p class="reveal">I specialize in front-end development using HTML, CSS, and JavaScript, with strong proficiency in Python for backend development and API integration. I enjoy working across the full stack to create complete solutions.</p>
                            
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
                                    <h4><i class="fab fa-python"></i> Backend & More</h4>
                                    <div class="skill-list">
                                        <span class="skill-tag">Python</span>
                                        <span class="skill-tag">API Development</span>
                                        <span class="skill-tag">Problem Solving</span>
                                        <span class="skill-tag">Git & GitHub</span>
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
                            <p class="reveal">I am Kahindo Ndungu, a student currently exploring the world of technology. I have a strong passion for coding and web development. I love learning new technologies and applying them to build functional and responsive websites and applications.</p>
                            
                            <h3 class="reveal mt-lg">My Introduction</h3>
                            <p class="reveal">My journey in tech started with a curiosity to understand how websites work. Over time, I've developed a strong foundation in both front-end development and Python programming. I continue to explore new technologies and best practices to become a well-rounded developer.</p>
                            
                            <h3 class="reveal mt-lg">Core Skills</h3>
                            <div class="skill-list reveal">
                                <span class="skill-tag">HTML5</span>
                                <span class="skill-tag">CSS3</span>
                                <span class="skill-tag">JavaScript</span>
                                <span class="skill-tag">Python</span>
                                <span class="skill-tag">Web Development</span>
                                <span class="skill-tag">API Integration</span>
                                <span class="skill-tag">Responsive Design</span>
                                <span class="skill-tag">Problem Solving</span>
                            </div>
                            
                            <h3 class="reveal mt-lg">What Drives Me</h3>
                            <p class="reveal">I'm passionate about creating user-friendly, visually appealing websites that solve real problems. I believe in continuous learning and staying updated with industry trends. I'm particularly excited about combining web technologies with Python to build powerful applications.</p>
                            
                            <div class="skills-grid mt-lg">
                                <div class="skill-category reveal">
                                    <h4><i class="fas fa-graduation-cap"></i> Education</h4>
                                    <p>Currently studying at Light Academy, focusing on practical skills in web development, Python programming, and software engineering principles.</p>
                                </div>
                                
                                <div class="skill-category reveal">
                                    <h4><i class="fas fa-language"></i> Languages & Tools</h4>
                                    <p>English (Fluent), Swahili (Native)</p>
                                    <div class="skill-list mt-sm">
                                        <span class="skill-tag">VS Code</span>
                                        <span class="skill-tag">Git</span>
                                        <span class="skill-tag">Python 3</span>
                                        <span class="skill-tag">Chrome DevTools</span>
                                    </div>
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
                            <p>Building responsive and user-friendly websites using HTML, CSS, and JavaScript with modern frameworks and best practices.</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fab fa-python"></i> Python Development</h4>
                            <p>Creating efficient backend systems, APIs, and automation scripts using Python. I enjoy solving complex problems with clean Python code.</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-palette"></i> Front-End Design</h4>
                            <p>Creating visually appealing and intuitive user interfaces with attention to detail and user experience principles.</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-chart-line"></i> Learning & Growth</h4>
                            <p>Committed to continuous improvement and mastering new technologies to stay at the forefront of web development.</p>
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
                                <p>Currently studying at Light Academy, focusing on web development and building real-world projects with both front-end technologies and Python programming.</p>
                                <div class="skill-list">
                                    <span class="skill-tag">Web Development</span>
                                    <span class="skill-tag">Python Programming</span>
                                    <span class="skill-tag">Computer Science</span>
                                    <span class="skill-tag">Software Engineering</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <h2 class="text-center mb-lg reveal mt-xl">Courses & Certifications</h2>
                    <div class="skills-grid">
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-certificate"></i> Web Development Fundamentals</h4>
                            <p>Light Academy - Mastered core concepts of web development including HTML, CSS, and JavaScript</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-certificate"></i> Python Programming Mastery</h4>
                            <p>Advanced Python concepts including APIs, data structures, and problem-solving techniques</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-certificate"></i> JavaScript Essentials</h4>
                            <p>Interactive web applications and DOM manipulation with modern JavaScript practices</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-certificate"></i> Responsive Web Design</h4>
                            <p>Mobile-first approach and cross-device compatibility with CSS Grid and Flexbox</p>
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
                        <h1 class="hero-title reveal">My <span class="highlight">Projects</span></h1>
                        <p class="hero-subtitle reveal">A showcase of my web development and programming journey</p>
                    </div>
                </div>
            </section>

            <section class="content-section">
                <div class="container">
                    <div class="projects-grid">
                        <!-- Project 1: Portfolio Website -->
                        <div class="project-card reveal">
                            <div class="project-image-container">
                                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                     alt="Portfolio Website Project" 
                                     class="project-image">
                                <div class="project-overlay">
                                    <button class="view-project-btn" data-page="portfolio-details">
                                        <i class="fas fa-eye"></i> View Details
                                    </button>
                                </div>
                            </div>
                            <div class="project-content">
                                <h3>
                                    <span class="project-title">Personal Portfolio Website</span>
                                    <span class="project-status status-completed">Completed</span>
                                </h3>
                                <p class="project-description">
                                    A responsive portfolio website built from scratch to showcase my skills and projects. Features modern design, dark/light theme, and smooth animations.
                                </p>
                                <div class="project-tags">
                                    <span class="project-tag">HTML5</span>
                                    <span class="project-tag">CSS3</span>
                                    <span class="project-tag">JavaScript</span>
                                    <span class="project-tag">Responsive</span>
                                    <span class="project-tag">Git</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Project 2: Python Weather App -->
                        <div class="project-card reveal">
                            <div class="project-image-container">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                     alt="Python Weather App" 
                                     class="project-image">
                                <div class="project-overlay">
                                    <button class="view-project-btn" data-page="weather-app">
                                        <i class="fas fa-eye"></i> View Details
                                    </button>
                                </div>
                            </div>
                            <div class="project-content">
                                <h3>
                                    <span class="project-title">Python Weather API App</span>
                                    <span class="project-status status-inprogress">In Development</span>
                                </h3>
                                <p class="project-description">
                                    A weather application that fetches real-time data from weather APIs. Built with Python for backend logic and modern web technologies for the frontend interface.
                                </p>
                                <div class="project-tags">
                                    <span class="project-tag">Python</span>
                                    <span class="project-tag">API Integration</span>
                                    <span class="project-tag">JavaScript</span>
                                    <span class="project-tag">Web Design</span>
                                    <span class="project-tag">Data Visualization</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Project 3: Upcoming Project -->
                        <div class="project-card reveal">
                            <div class="project-image-container">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                     alt="Upcoming Project" 
                                     class="project-image">
                                <div class="project-overlay">
                                    <button class="view-project-btn" data-page="upcoming-project">
                                        <i class="fas fa-eye"></i> View Details
                                    </button>
                                </div>
                            </div>
                            <div class="project-content">
                                <h3>
                                    <span class="project-title">Full-Stack Web Application</span>
                                    <span class="project-status status-upcoming">Coming Soon</span>
                                </h3>
                                <p class="project-description">
                                    An ambitious full-stack project combining Python backend with modern frontend technologies. Focused on solving real-world problems with elegant solutions.
                                </p>
                                <div class="project-tags">
                                    <span class="project-tag">Full-Stack</span>
                                    <span class="project-tag">Python</span>
                                    <span class="project-tag">JavaScript</span>
                                    <span class="project-tag">Database</span>
                                    <span class="project-tag">API</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    
    "portfolio-details": {
        title: "Portfolio Project Details | Kahindo Ndungu",
        content: `
            <section class="hero-section content-section">
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title reveal">Portfolio Website <span class="highlight">Development</span></h1>
                        <p class="hero-subtitle reveal">How this website was built from scratch</p>
                    </div>
                </div>
            </section>

            <section class="content-section">
                <div class="container">
                    <h2 class="reveal">Project Overview</h2>
                    <p class="reveal">
                        This portfolio website was built entirely from scratch using core web technologies. The goal was to create a modern, responsive, and professional platform to showcase my skills and projects as a web developer.
                    </p>
                    
                    <h2 class="reveal mt-lg">Technical Architecture</h2>
                    
                    <div class="skills-grid mt-md">
                        <div class="skill-category reveal">
                            <h4><i class="fab fa-html5"></i> HTML5 Structure</h4>
                            <p><strong>Semantic Markup:</strong> Used semantic HTML5 elements (header, nav, main, section, footer) for better accessibility and SEO.</p>
                            <p><strong>Single-Page Application:</strong> Implemented a dynamic SPA architecture where content loads without page refreshes.</p>
                            <p><strong>Clean Structure:</strong> Organized HTML with clear comments and logical sections for maintainability.</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fab fa-css3-alt"></i> CSS3 Styling</h4>
                            <p><strong>CSS Variables:</strong> Used custom properties for consistent theming across light/dark modes.</p>
                            <p><strong>Flexbox & Grid:</strong> Implemented modern layout systems for responsive design.</p>
                            <p><strong>Animations:</strong> Added smooth transitions, hover effects, and scroll reveal animations.</p>
                            <p><strong>Mobile-First:</strong> Designed with a mobile-first approach using responsive breakpoints.</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fab fa-js"></i> JavaScript Functionality</h4>
                            <p><strong>Dynamic Content:</strong> Implemented a routing system to load different "pages" without reloading.</p>
                            <p><strong>Theme Switching:</strong> Added dark/light mode with localStorage persistence.</p>
                            <p><strong>Mobile Navigation:</strong> Created a responsive hamburger menu for mobile devices.</p>
                            <p><strong>Form Handling:</strong> Implemented contact form validation and mailto functionality.</p>
                        </div>
                    </div>
                    
                    <h2 class="reveal mt-lg">Key Features Implemented</h2>
                    <div class="skills-grid">
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-check-circle"></i> Core Features</h4>
                            <ul style="list-style: none; padding-left: 0;">
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-check" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Responsive design (mobile, tablet, desktop)</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-check" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Dark/Light theme toggle</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-check" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Smooth page transitions</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-check" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Scroll reveal animations</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-check" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Dynamic content loading</li>
                            </ul>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-cogs"></i> Technical Features</h4>
                            <ul style="list-style: none; padding-left: 0;">
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-check" style="color: var(--color-primary); margin-right: 0.5rem;"></i> CSS Custom Properties (variables)</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-check" style="color: var(--color-primary); margin-right: 0.5rem;"></i> JavaScript ES6+ features</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-check" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Event delegation for performance</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-check" style="color: var(--color-primary); margin-right: 0.5rem;"></i> LocalStorage for theme persistence</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-check" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Accessibility features (ARIA labels)</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="text-center mt-xl">
                        <a href="#portfolio" class="btn btn-primary reveal" data-page="portfolio">
                            <i class="fas fa-arrow-left"></i> Back to Portfolio
                        </a>
                    </div>
                </div>
            </section>
        `
    },
    
    "weather-app": {
        title: "Python Weather App | Kahindo Ndungu",
        content: `
            <section class="hero-section content-section">
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title reveal">Python Weather <span class="highlight">API App</span></h1>
                        <p class="hero-subtitle reveal">Real-time weather data application</p>
                    </div>
                </div>
            </section>

            <section class="content-section">
                <div class="container">
                    <div class="project-status-banner reveal" style="background: linear-gradient(135deg, #f59e0b, #fbbf24); color: white; padding: var(--spacing-lg); border-radius: var(--radius-md); text-align: center; margin-bottom: var(--spacing-xl);">
                        <h3 style="color: white; margin-bottom: var(--spacing-sm);"><i class="fas fa-tools"></i> Project Status</h3>
                        <p style="font-size: var(--text-lg); margin-bottom: 0;">Currently in active development • Launching <strong>March 1, 2026</strong></p>
                    </div>
                    
                    <h2 class="reveal">Project Overview</h2>
                    <p class="reveal">
                        This Python-based weather application fetches real-time weather data from reliable weather APIs and presents it through an intuitive web interface. 
                        The project combines Python backend logic with modern frontend technologies to create a seamless user experience.
                    </p>
                    
                    <h2 class="reveal mt-lg">Technical Stack</h2>
                    <div class="skills-grid">
                        <div class="skill-category reveal">
                            <h4><i class="fab fa-python"></i> Backend (Python)</h4>
                            <ul style="list-style: none; padding-left: 0;">
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-code" style="color: var(--color-primary); margin-right: 0.5rem;"></i> API integration and data fetching</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-code" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Data parsing and processing</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-code" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Error handling and validation</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-code" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Caching mechanisms for performance</li>
                            </ul>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-globe"></i> Frontend (Web)</h4>
                            <ul style="list-style: none; padding-left: 0;">
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-code" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Responsive user interface</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-code" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Real-time data visualization</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-code" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Interactive maps and charts</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-code" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Location-based services</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h2 class="reveal mt-lg">Features Coming Soon</h2>
                    <div class="skills-grid">
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-sun"></i> Weather Features</h4>
                            <ul style="list-style: none; padding-left: 0;">
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-clock" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Current weather conditions</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-calendar" style="color: var(--color-primary); margin-right: 0.5rem;"></i> 7-day forecast</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-map-marker-alt" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Location search and detection</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-bell" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Weather alerts and notifications</li>
                            </ul>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-chart-line"></i> Data & UI Features</h4>
                            <ul style="list-style: none; padding-left: 0;">
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-chart-bar" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Interactive weather charts</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-mobile-alt" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Progressive Web App capabilities</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-palette" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Multiple theme options</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-download" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Data export functionality</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="text-center mt-xl">
                        <a href="#portfolio" class="btn btn-primary reveal" data-page="portfolio">
                            <i class="fas fa-arrow-left"></i> Back to Portfolio
                        </a>
                    </div>
                </div>
            </section>
        `
    },
    
    "upcoming-project": {
        title: "Upcoming Project | Kahindo Ndungu",
        content: `
            <section class="hero-section content-section">
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title reveal">Full-Stack <span class="highlight">Web Application</span></h1>
                        <p class="hero-subtitle reveal">An ambitious project combining multiple technologies</p>
                    </div>
                </div>
            </section>

            <section class="content-section">
                <div class="container">
                    <div class="project-status-banner reveal" style="background: linear-gradient(135deg, #8b5cf6, #a78bfa); color: white; padding: var(--spacing-lg); border-radius: var(--radius-md); text-align: center; margin-bottom: var(--spacing-xl);">
                        <h3 style="color: white; margin-bottom: var(--spacing-sm);"><i class="fas fa-calendar-alt"></i> Project Timeline</h3>
                        <p style="font-size: var(--text-lg); margin-bottom: 0;">Development starting soon • Expected completion <strong>April 2026</strong></p>
                    </div>
                    
                    <h2 class="reveal">Project Vision</h2>
                    <p class="reveal">
                        This full-stack web application represents my most ambitious project to date. It will combine Python backend development with modern frontend technologies 
                        to create a comprehensive solution for a real-world problem. The focus will be on scalability, performance, and user experience.
                    </p>
                    
                    <h2 class="reveal mt-lg">Planned Technology Stack</h2>
                    <div class="skills-grid">
                        <div class="skill-category reveal">
                            <h4><i class="fab fa-python"></i> Backend Development</h4>
                            <div class="skill-list">
                                <span class="skill-tag">Python</span>
                                <span class="skill-tag">FastAPI/Flask</span>
                                <span class="skill-tag">Database Design</span>
                                <span class="skill-tag">REST APIs</span>
                                <span class="skill-tag">Authentication</span>
                            </div>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-code"></i> Frontend Development</h4>
                            <div class="skill-list">
                                <span class="skill-tag">JavaScript</span>
                                <span class="skill-tag">React/Vue.js</span>
                                <span class="skill-tag">Responsive Design</span>
                                <span class="skill-tag">State Management</span>
                                <span class="skill-tag">UI/UX Design</span>
                            </div>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-server"></i> Infrastructure</h4>
                            <div class="skill-list">
                                <span class="skill-tag">Deployment</span>
                                <span class="skill-tag">CI/CD</span>
                                <span class="skill-tag">Cloud Services</span>
                                <span class="skill-tag">Performance Optimization</span>
                                <span class="skill-tag">Security</span>
                            </div>
                        </div>
                    </div>
                    
                    <h2 class="reveal mt-lg">Learning Objectives</h2>
                    <div class="skills-grid">
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-graduation-cap"></i> Technical Skills</h4>
                            <p>This project will help me master full-stack development, database design, API architecture, and deployment strategies.</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-lightbulb"></i> Problem Solving</h4>
                            <p>Focus on solving complex problems with elegant solutions, optimizing performance, and implementing best practices.</p>
                        </div>
                        
                        <div class="skill-category reveal">
                            <h4><i class="fas fa-users"></i> Collaboration</h4>
                            <p>Developing skills in project planning, version control, documentation, and potentially open-source collaboration.</p>
                        </div>
                    </div>
                    
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
                            <p style="margin-bottom: 1.5rem;">I'm always open to discussing new opportunities, collaborations, or just chatting about web development and Python programming!</p>
                            
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
    
    // Validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // In a real application, you would send this to a backend
    // For now, we'll simulate success and show a message
    setTimeout(() => {
        // Success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        event.target.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Log the message (in real app, send to server)
        console.log('Contact Form Submission:', { name, email, message });
        
        // Optionally still open email client as fallback
        const subject = `New Message from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        const mailtoLink = `mailto:ka.ndungu@lightacademy.sc.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Ask user if they want to open email client
        if (confirm('Message saved! Would you like to also open your email client?')) {
            window.location.href = mailtoLink;
        }
    }, 1500);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Show with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Auto remove after 5 seconds
    const autoRemove = setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        clearTimeout(autoRemove);
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
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
    
    // Add click listeners to project view buttons
    document.querySelectorAll('.view-project-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const page = button.dataset.page;
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


