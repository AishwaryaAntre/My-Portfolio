import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function AboutMe() {
  return (
    <section className="section about-section">
      <div className="about-container">
        <div className="about-photo">
          <LazyLoadImage
            src={`${process.env.PUBLIC_URL}/assets/profile.jpg`}  // Dynamic path for production
            alt="My Profile Photo"
            effect="blur"
            className="profile-image"
          />
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hi, I'm Aishwarya Govind Antre, a Software Developer passionate about Coding & Learning New Skills.
            Talking about my Technical Skills, I am good in HTML, CSS, JavaScript, Bootstrap, and I have recently learned React.js. Let's connect!
          </p>
          <p>
            Outside of work, I enjoy playing chess, listening to music. Check out my projects below.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
