'use client';

import Image from "next/image";
import "./index.css";

interface Skill {
    name: string;
    icon: string;
}

interface LanguageSkill {
    name: string;
    level: string;
    percentage: number;
}

export default function Skill() {
    const technicalSkills: Skill[] = [
        { name: "HTML & CSS", icon: "html.svg" },
        { name: "JavaScript", icon: "js.svg" },
        { name: "React", icon: "react.svg" },
        { name: "Next.js", icon: "next.svg" },
        { name: "TypeScript", icon: "ts.svg" },
        { name: "Github", icon: "github.svg" },
        { name: "Git", icon: "git.svg" },
        { name: "Material UI", icon: "mui.svg" },
    ];


    const softSkill: { name: string }[] = [
        { name: "Proativo" },
        { name: "Comunicação eficaz" },
        { name: "Resolução de problemas" },
        { name: "Gestão de tempo" },
        { name: "Adaptibilidade" },
    ]

    const language: LanguageSkill[] = [
        { name: "Português", level: "Nativo", percentage: 100 },
        { name: "Inglês", level: "Básico", percentage: 30 },
    ]

    function getBarColor(percentage: number): string {
        if (percentage >= 75) return "high";
        if (percentage >= 40) return "medium";
        return "low";
    }

    return (
        <div className="container">
            <div className="title">
                <h2>Skills</h2>
            </div>
            <div className="skills">
                <h2>Habilidades Técnicas</h2>
            </div>
            <div className="card-skills">
                {technicalSkills.map((skill, index) => (
                    <div key={index} className="card">
                        <Image
                            src={`/icon/${skill.icon}`}
                            alt={skill.name}
                            width={40}
                            height={40}
                            priority
                            className={["github.svg", "next.svg"].includes(skill.icon) ? "invert-icon" : ""}
                        />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>

            <h2 className="skills">Habilidades Complementares</h2>

            <div className="grid-soft">
                <h3 className="soft-skills">Soft Skills</h3>
                <span className="card-skill">
                    {softSkill.map((item, index) => (
                        <p key={index}>{item.name}</p>
                    ))}
                </span>
            </div>

            <div className="grid-language">
                <h3 className="soft-skills">Idiomas</h3>
                <div className="language">
                    {language.map((item, index) => (
                        <div className="language-item" key={index}>
                            <div className="language-label">
                                <span className="language-name">{item.name}</span>
                                <span className="language-level">{item.level}</span>
                            </div>
                            <div className="language-bar">
                                <div
                                    className={`language-fill ${getBarColor(item.percentage)}`}
                                    style={{ width: `${item.percentage}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
