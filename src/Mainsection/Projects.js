import React, { useEffect } from 'react'
// import {Route,NavLink,Switch} from 'react-router-dom'
import { NavLink } from "react-router";
import {useIntersectionAnimations} from'./hooks/useIntersectionAnimations'
import Elearning from './Pictures/screencapture-elearning.png'
import Mobirise from './Pictures/ssMobirise.png'
import RollingDice from './Pictures/-ss-rolling-dice.png'
import TodoList from './Pictures/ss-Todolist.png'
import TodoApp from './Pictures/TodoAppScreenshot.png'
import Coins from './Pictures/ss-coin.png'
import Pokedex from './Pictures/pokedex.png'
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projectList = [
    { name: 'Mobirise', image: Mobirise, path: '/Projects/Mobirise', animation: 'fade-in-left' },
    { name: 'E-Learning', image: Elearning, path: '/Projects/E-learning', animation: 'fade-in-right' },
    { name: 'Pokedex', image: Pokedex, path: '/Projects/Pokedex', animation: 'fade-in-left' },
    { name: 'Coins', image: Coins, path: '/Projects/Coin', animation: 'fade-in-right' },
    { name: 'TodoList', image: TodoApp, path: '/Projects/TodoApp', animation: 'fade-in-left' },
    { name: 'RollingDice', image: RollingDice, path: '/Projects/RollingDice', animation: 'fade-in-right' },
  ];
  useIntersectionAnimations()
  return (
    <section className="my_project" id="Projects">
      <div className="container">
        <div className="row">
          <div className="text-center fade-in-up">
            <h1 className="title_shape">Projects</h1>
            <p>These are live demos</p>
          </div>
        </div>
        <div className="row">
          {projectList.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              image={project.image}
              path={project.path}
              animation={project.animation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



