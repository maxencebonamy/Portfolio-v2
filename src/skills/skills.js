import React from "react";

import "./skills.css";
import skills from "./skills.json"
import skills_icons from "./icons/skills_icons"



class Skills extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSkill: "software"
        };

        this.buttons = {
            software: <h3 onClick={this.changeCurrentSkill.bind(this)} className="selected_skill_button">software</h3>,
            hardware: <h3 onClick={this.changeCurrentSkill.bind(this)} className="skill_button">hardware</h3>,
            web: <h3 onClick={this.changeCurrentSkill.bind(this)} className="skill_button">web</h3>,
            design: <h3 onClick={this.changeCurrentSkill.bind(this)} className="skill_button">design</h3>
        };
    }

    changeCurrentSkill(event) {
        event.preventDefault();

        let previousTarget = document.getElementsByClassName("selected_skill_button")[0]
        previousTarget.className = "skill_button";

        this.setState({
            currentSkill: event.target.innerHTML
        });

        event.target.className = "selected_skill_button";

        this.render();
    }

    render() {
        return (
            <div id="skills">
                <h2>What are my skills?</h2>
                <div id="skills_buttons">
                    {this.buttons.software}
                    {this.buttons.hardware}
                    {this.buttons.web}
                    {this.buttons.design}
                </div>
                <div id="skills_container">
                    {
                        skills[this.state.currentSkill].map(skill => <div className="skill_box">
                            <img src={skills_icons[skill.icon]} alt={skill.name} />
                            <p>{skill.name}</p>
                        </div>)
                    }
                </div>
            </div>
        );
    }

}


export default Skills;