function App() {
  return (
    <div className="page">
      <div className="hero">
        <span className="name">Julian Martinez</span>

        <img
          src="/me.jpg"
          alt="Julian Martinez"
          className="photo"
        />

        <div className="links">
          <a href="mailto:julian@email.com">email</a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
