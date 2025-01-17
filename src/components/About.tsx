import React from 'react'

const About = () => {
  return (
    <div id="about" className="container pt-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I am an enthusiastic and committed front-end developer with a passion for crafting interactive and user-friendly web applications. 
            I thrive on designing and building exceptional digital experiences. With expertise in React, Next.js, TypeScript, and Tailwind CSS, 
            I aim to tackle real-world challenges with optimized and maintainable code. I am eager to embrace new opportunities and continuously enhance my skills.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-96">
          <img
            src="/aboutme.jpg"
            alt="About Me"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            data-aos="flip-up"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

