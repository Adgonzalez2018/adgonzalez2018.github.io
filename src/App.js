import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainSite />} />
      <Route path="/video" element={<VideoPage />} />
    </Routes>
  );
}

function MainSite() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [drawingsOpen, setDrawingsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  const formatBlogDate = (date) => {
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const drawings = [
    "EYE.PNG", "IMG_4128.jpg", "IMG_4168.jpg", "IMG_4169.JPG", "IMG_4197.JPG",
    "IMG_4233.JPG", "IMG_4248.JPG", "IMG_4283.PNG", "IMG_4292.PNG", "IMG_4293.jpg",
    "IMG_4363.JPG", "IMG_5944.PNG", "IMG_5945.jpg", "IMG_5946.jpg",
    "IMG_5947.jpg", "IMG_5948.jpg", "IMG_5949.jpg", "IMG_5950.jpg", "IMG_5952.jpg",
    "IMG_5954.jpg", "IMG_5956.jpg", "IMG_5962.PNG", "IMG_5963 2.JPG", "IMG_5963.jpg",
    "IMG_5964.jpg", "IMG_5965.jpg", "IMG_7163.JPG", "IMG_7744.jpg", "IMG_7767.jpg",
    "IMG_7769.jpg", "IMG_7770.jpg"
  ];

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

  const blogPosts = [
    {
      title: "2026 Timeline Updates",
      date: new Date("2026-03-30"),
      content:
        "Working on two music videos that will hopefully be out by the summer, and end-goal for the year is to start working on my own animation software. Planning on improving the film rec website until the day I die even after it's complete (which it's pretty much deployable). Also trying to finish a screenplay before summer..."
    },
    {
      title: "Film Recommendation",
      date: new Date("2026-03-27"),
      content:
        "I started working on this website in early February, a film recommendation website that give you last.fm style stats of your all-time stats, weekly stats of your music. Based around your letterboxd and a AI-powered film recommendation chat, it's functional but low quality, so I'm planning on doing some experiments on the chat and trying to get better results."
    },
    {
      title: "EFL Book",
      date: new Date("2026-03-23"),
      content:
        "Planning on working on a book for my EFL visualizer, ~70 pages, consisting of the words, photos, and stills of the video. They're gonna be small A6 style books. I intend on placing them around the library and hopefully to friend with a little preface and QR code to the video."
    },
    {
      title: "Welcome To The Pearly Gates",
      date: new Date("2026-03-22"),
      content:
        "Just made a 3.5m visualizer for a 'Video Tape' inspired song, made with my friend, inspiration and ideas are in the description of the video, check it out! This is for a Google Fellowship, specifically for a Technical Motion Artist Role."
    },
    {
      title: "Electric Field Lines Out Now!",
      date: new Date("2026-03-12"),
      content:
        "Finally released the Electric Field Lines - Visualizer, it took me 20+ hours editing, I also released a behind the scenes (BTS) which are recordings of my screen while editing. I also asked for some music that also helped create Welcome To The Pearly Gates."
    },
    {
      title: "Electric Field Lines Update",
      date: new Date("2026-02-11"),
      content:
        "animated a web app that I scraped from the internet that my old physics teacher gave me, and made animations thru it. Recorded it and haven't touched it til this month.",
    },
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

  const creativeWork = [
    {
      type: "video",
      title: "Welcome To the Pearly Gates",
      thumbnail: "https://img.youtube.com/vi/wQf5BrMJPtE/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=wQf5BrMJPtE",
    },
    {
      type: "video",
      title: "Electric Field Lines - BTS",
      thumbnail: "https://img.youtube.com/vi/_0jGNyEQvg0/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=_0jGNyEQvg0",
    },
    {
      type: "video",
      title: "Electric Field Lines - Visualizer",
      thumbnail: "https://img.youtube.com/vi/IQDgEb3meFk/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=IQDgEb3meFk",
    },
    {
      type: "video",
      title: "Getting Better - Beatles (Visualizer)",
      thumbnail: "https://img.youtube.com/vi/m-i2pUUVxGU/maxresdefault.jpg",
      link: "https://youtube.com/watch?v=XDX2wK-bW6I",
    },
    {
      type: "video",
      title: "You Can See Now? (Edit)",
      thumbnail: "https://img.youtube.com/vi/XDX2wK-bW6I/maxresdefault.jpg",
      link: "https://youtube.com/watch?v=XDX2wK-bW6I",
    },
  ];

  return (
    <div className="App">
      <div className="datetime-display">{formatDateTime(currentTime)}</div>
      <div className="main-content">
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

        <section id="blog">
          <div className="section-content">
            <h2>BLOG</h2>
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

        <section id="projects-software">
          <div className="section-content">
            <h2>PROJECTS</h2>
            <h3>SOFTWARE</h3>
            <p className="placeholder">
              Research and Stuff. Mostly focusing on AI and Machine Learning
              Research. I'm also making a web app for Film Recommendations. I
              have papers here.
            </p>

            <div className="papers-grid">
              {papers.map((paper, index) => (
                <div key={index} className="paper-card">
                  <div className="paper-content">
                    <h4>{paper.title}</h4>
                    <p className="paper-meta">
                      {paper.journal} • {paper.year}
                    </p>
                    <div className="paper-links">
                      <a href={paper.link} target="_blank" rel="noopener noreferrer">
                        GITHUB
                      </a>
                      {paper.pdf && (
                        <a href={paper.pdf} target="_blank" rel="noopener noreferrer">
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

        <section id="projects-creative">
          <div className="section-content">
            <h3>CREATIVE</h3>
            <p className="placeholder">
              I love movies, I write and make music videos.
            </p>

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
                    {work.type === "video" && <div className="play-overlay">▶</div>}
                  </div>
                  <p className="creative-title">{work.title}</p>
                </a>
              ))}
            </div>

            <div className="drawings-section">
              <button
                type="button"
                className="drawings-toggle"
                onClick={() => setDrawingsOpen(!drawingsOpen)}
              >
                DRAWINGS {drawingsOpen ? "▲" : "▼"}
              </button>

              {drawingsOpen && (
                <div className="drawings-grid">
                  {drawings.map((file, index) => (
                    <div key={index} className="drawing-item">
                      <img
                        src={`/drawings/${file}`}
                        alt={file.replace(/\.[^.]+$/, "")}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="about">
          <div className="section-content">
            <h2>ABOUT ME</h2>
            <p className="placeholder">
              I'm Alex, a graduating Master's Student in Computer Engineering at NYU (May 2026),
              based in New York, NY. My work sits at the intersectoin of Machine Learning  and applied AI,
              I specialize in LLM evaluation, retrieval systems, and building reliable AI-powered pipelines.
              I'm currently, an acknowledged collaborator on an M.S. thesis at NYU's DICE LAB (Prof. Chinmay Hegde),
              researching adversarial rubric optimization and LLM-as-judge failure modes. I've also recently and
              independently built a full-stack film recommendation platform using a hybrid RAG pipeline,
              vector search, and deterministic validation layers. Previous work includes
              ML systems engineering, font classification pipelines, and an AI-itegrated booking platform.
              I'm actively looking for roles in Applied ML and AI Engineering where I can bridge technical rigor and
              real-word impact.
              <br />
              Outside of reserach, I'm equally driven by movies and storytelling, I write screenplays, direct music videos,
              I released a documentary late last year in 2025. I've just released a new music video and designed a physical book for it, that includes a compilation of all the photos, stills, and words that were included in the mv.
            </p>
          </div>
        </section>
      </div>

      <div className="footer-contact">
        <p>Alex Gonzalez</p>
        <p>
            <a href="mailto:adgonzalez2023@gmail.com">
              adgonzalez2023@gmail.com
            </a>
          </p>

          <p>
            <a href="https://github.com/Adgonzalez2018/" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </p>

          <p>
            <a href="https://youtube.com/@MalexCafe" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </p>
      </div>
    </div>
  );
}

function VideoPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
      }}
    >
      <iframe
        width="80%"
        height="80%"
        src="https://www.youtube.com/embed/IQDgEb3meFk"
        title="Electric Field Lines - Visualizer"
        allowFullScreen
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default App;