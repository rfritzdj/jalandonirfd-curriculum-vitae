<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rian Fritz D. Jalandoni - Curriculum Vitae</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary-color: #0078d7;
            --secondary-color: #333;
            --bg-color: #f8f9fa;
            --card-bg: #ffffff;
            --text-color: #333;
            --accent-color: #005cbf;
            --light-accent: #e6f2ff;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            line-height: 1.6;
            background-color: var(--bg-color);
            color: var(--text-color);
            padding-bottom: 70px;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 20px;
        }

        header {
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            color: white;
            padding: 40px 0 30px;
            margin-bottom: 30px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        header .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            font-weight: 600;
        }

        .contact-info {
            margin: 15px 0;
            font-size: 1.1rem;
        }

        .contact-info a {
            color: white;
            text-decoration: none;
            transition: opacity 0.2s;
        }

        .contact-info a:hover {
            opacity: 0.8;
            text-decoration: underline;
        }

        .social-links {
            margin-top: 15px;
        }

        .social-links a {
            color: white;
            font-size: 1.5rem;
            margin: 0 10px;
            transition: transform 0.2s;
        }

        .social-links a:hover {
            transform: scale(1.2);
        }

        nav {
            background-color: var(--secondary-color);
            padding: 12px 0;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        nav .container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        nav a {
            color: white;
            text-decoration: none;
            padding: 8px 15px;
            margin: 5px;
            border-radius: 4px;
            transition: background-color 0.3s;
            font-weight: 500;
        }

        nav a:hover, nav a.active {
            background-color: var(--primary-color);
        }

        section {
            background: var(--card-bg);
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            padding: 30px;
            margin-bottom: 30px;
        }

        section h2 {
            color: var(--primary-color);
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid var(--light-accent);
            font-size: 1.8rem;
        }

        .skill-categories {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }

        .skill-category h3 {
            color: var(--secondary-color);
            margin-bottom: 10px;
            font-size: 1.2rem;
        }

        .skill-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            list-style-type: none;
        }

        .skill-tag {
            background-color: var(--light-accent);
            color: var(--primary-color);
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
            display: inline-block;
        }

        .research-interests {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
        }

        .research-item {
            background-color: var(--light-accent);
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid var(--primary-color);
        }

        .edu-item, .exp-item, .pub-item {
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
        }

        .edu-item:last-child, .exp-item:last-child, .pub-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }

        .edu-title, .exp-title {
            font-weight: bold;
            color: var(--secondary-color);
            font-size: 1.1rem;
        }

        .edu-place, .exp-place {
            color: var(--primary-color);
            font-weight: 500;
        }

        .edu-date, .exp-date {
            color: #666;
            font-style: italic;
            margin-bottom: 5px;
        }

        .pub-authors {
            font-weight: 500;
        }

        .pub-title {
            font-style: italic;
        }

        .pub-venue {
            color: #666;
        }

        footer {
            background-color: var(--secondary-color);
            color: white;
            text-align: center;
            padding: 15px 0;
            position: fixed;
            bottom: 0;
            width: 100%;
            font-size: 0.9rem;
        }

        @media (max-width: 768px) {
            header h1 {
                font-size: 2rem;
            }
            
            .contact-info {
                font-size: 0.95rem;
            }
            
            section {
                padding: 20px;
            }
            
            .skill-categories {
                grid-template-columns: 1fr;
            }
            
            .research-interests {
                grid-template-columns: 1fr;
            }
        }

        @media print {
            body {
                padding-bottom: 0;
            }
            
            header {
                box-shadow: none;
            }
            
            nav, footer {
                display: none;
            }
            
            section {
                box-shadow: none;
                margin-bottom: 20px;
                page-break-inside: avoid;
            }
            
            a {
                text-decoration: none;
                color: var(--text-color);
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Rian Fritz D. Jalandoni</h1>
            <div class="contact-info">
                <p><i class="fas fa-phone"></i> +1 (438) 227-0923 | <i class="fas fa-envelope"></i> rian.jalandoni@mail.mcgill.ca</p>
                <p><i class="fas fa-map-marker-alt"></i> Montreal, Canada | Iloilo City, Philippines</p>
            </div>
            <div class="social-links">
                <a href="https://www.linkedin.com/in/rian-fritz-jalandoni-0ab7b7190/" target="_blank" title="LinkedIn">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/yourusername" target="_blank" title="GitHub">
                    <i class="fab fa-github"></i>
                </a>
                <!-- Add or replace with your actual social/professional profiles -->
            </div>
        </div>
    </header>

    <nav id="navbar">
        <div class="container">
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#research" class="nav-link">Research</a>
            <a href="#education" class="nav-link">Education</a>
            <a href="#experience" class="nav-link">Experience</a>
            <a href="#publications" class="nav-link">Publications</a>
        </div>
    </nav>

    <div class="container">
        <section id="skills">
            <h2>Technical Skills</h2>
            <div class="skill-categories">
                <div class="skill-category">
                    <h3>Programming Languages</h3>
                    <ul class="skill-list">
                        <li class="skill-tag">Python</li>
                        <li class="skill-tag">Julia</li>
                        <li class="skill-tag">C</li>
                        <li class="skill-tag">C++</li>
                        <li class="skill-tag">PHP</li>
                        <li class="skill-tag">HTML</li>
                        <li class="skill-tag">Matlab</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Models & Methods</h3>
                    <ul class="skill-list">
                        <li class="skill-tag">Tensorflow</li>
                        <li class="skill-tag">Qiskit</li>
                        <li class="skill-tag">Neural Networks</li>
                        <li class="skill-tag">NLP</li>
                        <li class="skill-tag">Image Processing</li>
                        <li class="skill-tag">ARIMA Models</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Tools</h3>
                    <ul class="skill-list">
                        <li class="skill-tag">GIMP</li>
                        <li class="skill-tag">ImageJ</li>
                        <li class="skill-tag">Minitab</li>
                        <li class="skill-tag">Adobe Photoshop</li>
                        <li class="skill-tag">Microsoft Office</li>
                        <li class="skill-tag">LaTeX</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="research">
            <h2>Research Interests</h2>
            <div class="research-interests">
                <div class="research-item">
                    <p>Computational Neuroscience</p>
                </div>
                <div class="research-item">
                    <p>Machine Learning in Neuroscience and Biological Systems</p>
                </div>
                <div class="research-item">
                    <p>Nonlinear Dynamics</p>
                </div>
                <div class="research-item">
                    <p>Mathematical Modelling in Biology</p>
                </div>
                <div class="research-item">
                    <p>Theoretical Ecology and Evolution</p>
                </div>
            </div>
        </section>

        <section id="education">
            <h2>Education</h2>
            <div class="edu-item">
                <div class="edu-title">PhD in Quantitative Life Science</div>
                <div class="edu-place">McGill University</div>
                <div class="edu-date">2023 - Present</div>
                <div class="edu-location">Montreal, Canada</div>
            </div>
            <div class="edu-item">
                <div class="edu-title">Postgraduate Diploma in Quantitative Life Sciences</div>
                <div class="edu-place">International Centre for Theoretical Physics</div>
                <div class="edu-date">2022 - 2023</div>
                <div class="edu-location">Trieste, Italy</div>
            </div>
            <div class="edu-item">
                <div class="edu-title">MSc in Physics</div>
                <div class="edu-place">University of the Philippines-Diliman</div>
                <div class="edu-date">2020 - 2022</div>
                <div class="edu-location">Philippines</div>
                <div class="edu-honors">Cum Laude</div>
            </div>
            <div class="edu-item">
                <div class="edu-title">BSc in Applied Physics</div>
                <div class="edu-place">University of the Philippines-Diliman</div>
                <div class="edu-date">2015 - 2020</div>
                <div class="edu-location">Philippines</div>
            </div>
        </section>

        <section id="experience">
            <h2>Professional Experience</h2>
            <div class="exp-item">
                <div class="exp-title">Summer School Research Student</div>
                <div class="exp-place">London Mathematical Laboratory School</div>
                <div class="exp-date">2021</div>
                <div class="exp-description">
                    <!-- Add brief description of your responsibilities and achievements -->
                    <p>Participated in advanced research projects focusing on mathematical modeling in biological systems.</p>
                </div>
            </div>
            <div class="exp-item">
                <div class="exp-title">Student Researcher</div>
                <div class="exp-place">National Institute of Physics, University of the Philippines-Diliman</div>
                <div class="exp-date">2017 - 2022</div>
                <div class="exp-description">
                    <p>Conducted research on physical and mechanical effects of cancer growth in 3D volume. Developed simulation models to analyze mechanical stress in spherical cancerous tissue.</p>
                </div>
            </div>
            <div class="exp-item">
                <div class="exp-title">Bioinformatics Intern</div>
                <div class="exp-place">Philippine Genome Center</div>
                <div class="exp-date">2019</div>
                <div class="exp-description">
                    <p>Applied computational methods to analyze genomic data and developed algorithms for biological network analysis.</p>
                </div>
            </div>
        </section>

        <section id="publications">
            <h2>Publications</h2>
            <div class="pub-item">
                <p><span class="pub-authors">RFD Jalandoni and JY Bantang,</span> <span class="pub-title">"Physical and mechanical effects of cancer growth in 3D volume,"</span> <span class="pub-venue">Proceedings of the Samahang Pisika ng Pilipinas 40 (2022).</span></p>
            </div>
            <div class="pub-item">
                <p><span class="pub-authors">RFD Jalandoni, JY Bantang,</span> <span class="pub-title">"Numerical analysis of mechanical stress in a spherical cancerous tissue,"</span> <span class="pub-venue">Proceedings of the Samahang Pisika ng Pilipinas 39 (2021).</span></p>
            </div>
            <div class="pub-item">
                <p><span class="pub-authors">Briones et al.,</span> <span class="pub-title">"A directed minimum connected dominating set for protein-protein interaction networks,"</span> <span class="pub-venue">CRC Press (2020).</span></p>
            </div>
        </section>
    </div>

    <footer>
        <div class="container">
            <p>&copy; 2025 Rian Fritz D. Jalandoni | Updated: May 2025</p>
        </div>
    </footer>

    <script>
        // Highlight active section in the navigation
        document.addEventListener('DOMContentLoaded', function() {
            // Get all sections and nav links
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            // Add scroll event listener
            window.addEventListener('scroll', function() {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (pageYOffset >= sectionTop - 150) {
                        current = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === current) {
                        link.classList.add('active');
                    }
                });
            });
        });
    </script>
</body>
</html>
