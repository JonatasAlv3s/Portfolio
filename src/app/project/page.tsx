'use client';

import { ProjectCard } from "@/components/CardComponent";
import { projects } from "@/data/project";
import "./index.css";

export default function Project() {
    return (
        <main className="page">
            <h1 className="heading">Projetos</h1>
            <p className="subheading">
                Aqui estão alguns dos projetos que desenvolvi nos últimos tempos.
            </p>

            <div className="grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </main>
    );
}
