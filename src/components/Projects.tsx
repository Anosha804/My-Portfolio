import React from 'react'
import Headings from './Heading'
import Card from './Card'

const data =[
    {
        id: 0,
        title: "BMI Calculator",
        desc: "A simple tool to calculate Body Mass Index based on height and weight.",
        img: "/bmi-calculator.jpg",
        tags: ["TypeScript", "React", "Node", "Tailwind CSS"],
    },
    {
        id: 1,
        title: "Count-down Timer",
        desc: "A timer application to count down from a specified time.",
        img: "/countdown-timer.jpg",
        tags: ["TypeScript", "React", "Node", "Tailwind CSS"],
    },
    {
        id: 2,
        title: "Currency Converter",
        desc: "Converts currencies in real-time with updated exchange rates.",
        img: "/currency-converter.jpg",
        tags: ["TypeScript", "React", "Node", "Tailwind CSS"],
    },
    {
        id: 3,
        title: "Digital Clock",
        desc: "A sleek and modern digital clock displaying the current time.",
        img: "/digital-clock.jpg",
        tags: ["TypeScript", "React", "Node", "Tailwind CSS"],
    },
    {
        id: 4,
        title: "Number-Guessing Game",
        desc: "A fun interactive game where users guess the correct number.",
        img: "/numberguessing.jpg",
        tags: ["TypeScript", "React", "Node", "Tailwind CSS"],
    },
    {
        id: 5,
        title: "Pomodoro Timer",
        desc: "A tool implementing the Pomodoro technique for focused work sessions.",
        img: "/pomodoro-timer.jpg",
        tags: ["TypeScript", "React", "Node", "Tailwind CSS"],
    },
    {
        id: 6,
        title: "Simple Calculator",
        desc: "A basic calculator for performing arithmetic operations.",
        img: "/simple-calculator.jpg",
        tags: ["TypeScript", "React", "Node", "Tailwind CSS"],
    },
    {
        id: 7,
        title: "Todo List",
        desc: "A task management app for organizing and tracking daily activities.",
        img: "/todo-list.jpg",
        tags: ["TypeScript", "React", "Node", "Tailwind CSS"],
    },
    {
        id: 8,
        title: "Weather App",
        desc: "Displays real-time weather updates based on location or search.",
        img: "/weather.jpg",
        tags: ["TypeScript", "React", "Node", "Tailwind CSS"],
    },

]

const Projects = () => {
    return (
      <div id="projects" className="container pt-32">
        <Headings title="My Projects" />
        {/* Adjust grid layout */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 place-items-center">
          {data.map((el) => (
            <Card
              key={el.id}
              title={el.title}
              desc={el.desc}
              img={el.img}
              tags={el.tags}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  