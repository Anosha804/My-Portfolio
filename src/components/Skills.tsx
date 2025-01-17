import React from 'react'

const Skills = () => {
    return (
      <div id="skills" className="container pt-32">
        <div className="text-center">
        <h2 className="text-4xl md:text-5xl mb-4 inline-block border-b-4 border-white pb-2">
          Technologies I work with
        </h2>
      </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <img
            src="/skills-1.png"
            alt="Skills-1"
            className="w-90 rounded shadow-lg"
            data-aos="flip-left"
          />
          <img
            src="/skills-2.png"
            alt="Skils-2"
            className="w-90 rounded shadow-lg"
            data-aos="flip-right"
          />
        </div>
      </div>
    );
  };
  
  export default Skills;