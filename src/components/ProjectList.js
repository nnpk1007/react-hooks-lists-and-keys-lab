// In the ProjectList component, a prop of projects is being passed down from the App component with an array of objects.
// For each object in the array, render one ProjectItem component with the correct props.
// Use the id of the project for the key prop.

import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectList = projects.map((project) => {
    return (
      <ProjectItem
      // The spread operator {...project} expands the project object 
      // and passes all its properties as separate props to the ProjectItem component.
      key={project.id} {...project}
      // key={project.id}
      // name={project.name}
      // about={project.about}
      // technologies={project.technologies}
      />
    );
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectList}</div>
    </div>
  );
}

export default ProjectList;
