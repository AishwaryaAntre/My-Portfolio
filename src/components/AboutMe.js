import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function AboutMe() {
  return (
    <section className="section about-section">
      <div className="about-container">
        <div className="about-photo">
          <LazyLoadImage
            src="/assets/profile.jpg"  // Replace with your photo path, e.g., /assets/my-photo.png
            alt="My Profile Photo"
            effect="blur"
            className="profile-image"
          />
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hi, I'm Aishwarya Govind Antre , a Software Developer passionate about Coding & Learnig New Skill.
            Talking about my Technical Skill i am good in html ,css ,javascript,bootstrap ,and i have recently learn React js . Let's connect!
          </p>
          <p>
            Outside of work, I enjoy playing chess,listing to Music.  Check out my projects below.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;