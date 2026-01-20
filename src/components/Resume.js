import React from 'react';

function Resume() {
  return (
    <section className="section">
      <h1>Resume</h1>
      <p>Download my resume to learn more about my experience and qualifications.</p>
      <a href="/assets/My_Resume.pdf" download="My_Resume.pdf" className="resume-link">
        Download Resume (PDF)
      </a>
      {/* Optional: Embed PDF viewer */}
      {/* <iframe src="/assets/resume.pdf" width="100%" height="600px" title="Resume"></iframe> */}
    </section>
  );
}

export default Resume;