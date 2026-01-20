import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Projects() {
  const projects = [
    { title: '1. Waste Food Distribution Application (Android Application):', desc: 'The objective of this application is to develop a system that effectively provides an interface for the donors who are in search of people to donate surplus food, as a result, minimizing food wastage and feeding the impoverished and the needy.' },

    { title: '2. Cake-Shop Management Using Wordpress:', desc: 'In the competitive and delightful world of confectioneries, managing a cake shop efficiently is crucial for success. With the advent of digital solutions, businesses are increasingly turning to online platforms like WordPress to streamline operations and enhance customer experience' },

    { title: '3. Detection of Cyber Hacking Breaches using Machine Learning:', desc: 'Machine Learning helps detect cyber hacking breaches by analyzing patterns in network or system data to identify unusual or malicious activities. It can recognize both known and unknown attacks by learning from past behaviour and spotting anomalies in real time.' },
    // Add more
  ];

  return (
    <section className="section">
      <h1>Projects</h1>
      {projects.map((proj, index) => (
        <div key={index} className="project-card">
          <LazyLoadImage src={proj.img} alt={proj.title} effect="blur" />
          <h3>{proj.title}</h3>
          <p>{proj.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;