import React from 'react';
// Optional: Install react-icons for skill icons (npm install react-icons)
// import { FaReact, FaNodeJs } from 'react-icons/fa'; // Example icons

function Skills() {
  const skills = [
    { name: '1.ReactJs' }, // Replace with <FaReact /> if using icons
    { name: '2.JavaScript'},
    { name: '3.CSS' },
     { name: '4.Bootstrap' },
    { name: '5.HTML' }
    // Add more skills as needed
  ];

  return (
    <section className="section">
      <h1>Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;