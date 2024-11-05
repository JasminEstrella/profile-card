import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const skills = [
    {
        skill: "HTML + CSS",
        level: "advanced",
        color: "purple"
    },
    {
        skill: "Javascript",
        level: "advanced",
        color: "purple"
    },
    {
        skill: "Git & Github",
        level: "advanced",
        color: "purple"
    },
    {
        skill: "Web Design",
        level: "intermediate",
        color: "purple"
    },
    {
        skill: "React",
        level: "beginner",
        color: "purple"
    },
    {
        skill: "PHP",
        level: "Intermediate",
        color: "purple"
    },
];

function App () {
    return(
        <div className="container">
            <Avatar />
            <div className="inner-container">
                <Intro />
                <Skillset />
            </div>
        </div>
    )
}

function Avatar () {
    return (
        <img src="./birthday-bird.jpg" alt="birthday bird" />
    )
}

function Intro () {

    return(
        <Profile name="Apple Cinnamon" description="Web developer with over five years of experience creating responsive, user-friendly websites. Passionate about solving complex problems through code and collaborating on innovative projects. Outside of work, playing video games and enjoying music provide inspiration and balance. Creativity in both tech and art fuels the drive to connect with others who share similar passions!"/>
    )
}

function Profile(intro) {
    return(

        <div className="profile-description">
            <h1>{ intro.name }</h1>
            <p>{ intro.description }</p>
        </div>
    )
}

function Skillset () {
    return(
        <div className="skillset">
            {
            skills.map((skill) => ( <Skills skillObj={skill} key={skill.skill} /> ))
            }
        </div>
    )
}

function Skills ({ skillObj }) {
    return(
        <div style={{backgroundColor: skillObj.color}}>
            <span>{skillObj.skill}</span>
            {/* <span> {skillObj.level === 'advanced' ? '💪🏻' : skillObj.level === 'intermediate' ? '😻' : skillObj.level === 'beginner' ? '👶🏻' : ''}</span> */}
            <span>
                {skillObj.level  === 'advanced' && '💪🏻'}
                {skillObj.level  === 'intermediate' && '👍🏻'}
                {skillObj.level  === 'beginner' && '👶🏻'}
            </span>
        </div>
    )
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
);