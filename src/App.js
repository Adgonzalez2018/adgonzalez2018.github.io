import React, { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Active link highlighting on scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".sidebar a");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (
          link.getAttribute("href") &&
          link.getAttribute("href").substring(1) === current
        ) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleProjects = () => {
    setProjectsOpen(!projectsOpen);
  };

  const formatDateTime = (date) => {
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
  };

  // research work
  const papers = [
    {
      title: "Pressure-Aware Resource Management for Resident LLM Services ",
      year: "Fall, 2025",
      link: "https://github.com/Adgonzalez2018/Resident-LLM-Services-for-Operating-Systems",
      pdf: "/papers/OS_LLM.pdf",
    },
    {
      title: "Reinforcement Learning Project",
      year: "Fall, 2025",
      link: "https://github.com/Adgonzalez2018/rob6323_go2_project",
      pdf: "/papers/RLPROJ2.pdf",
    },
    {
      title: "Jailbreaking Deep Models with Image Classification",
      year: "Spring, 2025",
      link: "https://github.com/Adgonzalez2018/DL-final-project",
      pdf: "/papers/DLPROJ3.pdf",
    },
  ];

  // Blog posts
  const blogPosts = [
    {
      title: "Research Update: DPO and LLM Judges",
      date: new Date("2026-02-03"),
      content:
        "Currently working on research with my Deep Learning Professor, Chinmay Hegde, trying to conduct an experiment in which we have an adversarial model 'fool' an LLM judge (like ChatGPT (or chat as you like to call it)) by giving it bad responses. Focusing on data hallucinations and false citations.",
    },
    {
      title: "Building a Film Recommendation Engine",
      date: new Date("2026-01-15"),
      content:
        "Started working on a new web app for film recommendations. Using collaborative filtering and content-based approaches to suggest movies based on viewing history and preferences.",
    },
    
  ];

  // Helper function to format blog post dates
  const formatBlogDate = (date) => {
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  // Creative Work
  const creativeWork = [
    {
      type: "video",
      title: "Getting Better - Beatles (Visualizer)",
      thumbnail: "https://img.youtube.com/vi/m-i2pUUVxGU/maxresdefault.jpg",
      link: "https://www.youtube.com/embed/m-i2pUUVxGU?si=RXFsUtKGNN-zHzFj",
    },
    {
      type: "video",
      title: "You Can See Now? (Edit)",
      thumbnail: "https://img.youtube.com/vi/XDX2wK-bW6I/maxresdefault.jpg",
      link: "https://www.youtube.com/embed/XDX2wK-bW6I?si=X_zO1qZpzKSshOKM",
    },
  ];

  return (
    <div className="App">
      {/* Date/Time Display */}
      <div className="datetime-display">{formatDateTime(currentTime)}</div>

      {/* Sidebar Navigation */}
      <div className="sidebar">
        <nav>
          <a href="#home">HOME</a>
          <a href="#blog">BLOG</a>
          <button
            type="button"
            onClick={toggleProjects}
            className="Projects-link"
            aria-expanded={projectsOpen}
            aria-controls="projects-submenu"
          >
            PROJECTS
              </button>
          <div className={`projects-submenu ${projectsOpen ? "open" : ""}`}>
            <a href="#projects-software">SOFTWARE</a>
            <a href="#projects-creative">CREATIVE</a>
          </div>
          <a href="#about">ABOUT ME</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* HOME Section */}
        <section id="home">
          <div className="section-content">
            <h1>Alex Gonzalez</h1>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/XTbI3m661cM?si=cyK5xs-IDeAi7aOt"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="placeholder">
              Hi, I made a documentary, check it out.
            </p>
          </div>
        </section>

        {/* BLOG Section */}
        <section id="blog">
          <div className="section-content">
            <h2>BLOG</h2>

            {/* Blog Posts */}
            <div className="blog-posts">
              {blogPosts.map((post, index) => (
                <div key={index} className="blog-post">
                  <div className="blog-post-header">
                    <h3>{post.title}</h3>
                    <p className="blog-date">{formatBlogDate(post.date)}</p>
                  </div>
                  <p className="blog-content">{post.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS - SOFTWARE Section */}
        <section id="projects-software">
          <div className="section-content">
            <h2>PROJECTS</h2>
            <h3>SOFTWARE</h3>
            <p className="placeholder">
              Research and Stuff. Mostly focusing on AI and Machine Learning
              Research. I'm also making a web app for Film Recommendations. I
              have papers here.
            </p>

            {/* Papers Grid */}
            <div className="papers-grid">
              {papers.map((paper, index) => (
                <div key={index} className="paper-card">
                  <div className="paper-content">
                    <h4>{paper.title}</h4>
                    <p className="paper-meta">
                      {paper.journal} • {paper.year}
                    </p>
                    <div className="paper-links">
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GITHUB
                      </a>
                      {paper.pdf && (
                        <a
                          href={paper.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          PAPER
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CREATIVE Section */}
        <section id="projects-creative">
          <div className="section-content">
            <h3>CREATIVE</h3>
            <p className="placeholder">
              I love movies, I write and make music videos.
            </p>

            {/* Creative Work Grid */}
            <div className="creative-grid">
              {creativeWork.map((work, index) => (
                <a
                  key={index}
                  href={work.link}
                  className="creative-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="creative-thumbnail">
                    <img src={work.thumbnail} alt={work.title} />
                    {work.type === "video" && (
                      <div className="play-overlay">▶</div>
                    )}
                  </div>
                  <p className="creative-title">{work.title}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT ME Section */}
        <section id="about">
          <div className="section-content">
            <h2>ABOUT ME</h2>
            <p className="placeholder">
              I'm Alex, currently located in New York, NY. <br />
              I'm a master's student studying Computer Engineering at NYU.
              Focusing heavily on Machine Learning. I also have background and
              experience with web/android apps from graduate/undergraduate. I've
              been doing a lot of research in AI, writing papers and conducting
              experiments. I'm very interested in research in NLP, and working
              in Applied ML. I'm also interested in working and designing web
              apps. Currently doing research with DPO and rubric optimization,
              and working on a web app for film recommendations
              <br />
              Alongside my technical/logical side of my life, I'm also just as
              passionate about movies and filmmaking. Last year (2025), I
              watched 374 (unique) movies. In my spare time I write screenplays,
              and work on developing music videos. I've made visualizers using
              code that I've scraped from the internet and turned it into my
              own. Also just made a documentary, and continue to create more
              short films/music videos soon!
            </p>
          </div>
        </section>
      </div>

      {/* Fixed Footer Contact */}
      <div className="footer-contact">
        <p>Alex Gonzalez</p>
        <p>
          <a href="mailto:adgonzalez2023@gmail.com">adgonzalez2023@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default App;
