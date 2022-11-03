import React from "react";

import "./projects.css";
import projects from "./projects.json"
import ProjectBox from "./project_box/project_box";


function Projects() {

    return (
        <div id="projects">
            <h2>Some of my projects</h2>
            {projects.map((project, index) => <ProjectBox project={project} reverse={index % 2} />)}
        </div>
    );

}


export default Projects;


/*

    {
        "name": "ASCII Webcam",
        "description": "I started by creating a program to convert an image into ASCII characters, which in a way compresses the image. Then I had the idea to capture the video stream of the webcam to convert it too.",
        "github": "https://github.com/maxencebonamy/ASCII-Webcam",
        "run": null,
        "skills": ["Python", "OpenCV"],
        "gif": "ascii_webcam"
    },
    {
        "name": "Mosaic Image",
        "description": "This program allows you to transform the pixels of an image into other images. For example, you can make a cat into cats.",
        "github": "https://github.com/maxencebonamy/Mosaic-Image",
        "run": "/mosaic_image.jpg",
        "skills": ["Python", "PIL", "Numpy"],
        "gif": "mosaic_image"
    },
    {
        "name": "Game of Life",
        "description": "The Game of Life was invented by mathematician John Conway. It is a cellular automaton that is actually not really a game, but more a kind of simulation.",
        "github": "https://github.com/maxencebonamy/Game-of-Life",
        "run": null,
        "skills": ["Python", "Pygame"],
        "gif": "game_of_life"
    },
    {
        "name": "Ecosystem Simulation",
        "description": "It is a representation of the Prey-Predator system, which allows to model an ecosystem.",
        "github": "https://github.com/maxencebonamy/Ecosystem-Simulation",
        "run": null,
        "skills": ["C++", "SFML"],
        "gif": "ecosystem_simulation"
    },

 */