function App() {
  return (
    <div className="container">
      <div className="name">Julian Martinez</div>

      <img
        src="/me.jpg"
        alt="Julian Martinez"
        className="photo"
      />

      <div className="links">
        <a href="mailto:julian@email.com">Email</a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
        <a href="https://github.com/yourusername" target="_blank">GitHub</a>
        <a href="/resume.pdf" target="_blank">Resume</a>
      </div>
    </div>
  );
}

export default App;
