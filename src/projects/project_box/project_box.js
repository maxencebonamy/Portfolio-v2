import React from "react";

import "./project_box.css";
import project_gif from "../gif/project_gif";
import github_icon from "./github.svg"
import run_icon from "./run.svg"


function ProjectBox({project, reverse}) {

    return (
        <div className={reverse ? "reversed_project_box" : "project_box"}>
            <img className="project_gif" src={project_gif[project.gif]} alt={project.name} />
            <div className="project_content">
                <h3 className="project_title">{project.name}</h3>
                <p className="project_description">{project.description}</p>
                <div className="project_footer">
                    {
                        (project.github != null) ?
                            <a className="project_icon_link" href={project.github} target="_blank">
                                <img src={github_icon} alt="github" />
                            </a>
                            : <div />
                    }
                    {
                        (project.run != null) ?
                            <a className="project_icon_link" href={project.run} target="_blank">
                                <img src={run_icon} alt="run" />
                            </a>
                            : <div />
                    }
                    {
                        project.skills.map(skill => <p className="project_skill">{skill}</p>)
                    }
                </div>
            </div>
        </div>
    );

}


export default ProjectBox;