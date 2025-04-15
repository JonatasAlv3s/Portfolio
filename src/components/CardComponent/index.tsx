import { Project } from "@/data/project";
import Image from "next/image";
import Link from "next/link";



export function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="card">
            {project.image && (
                <Image src={project.image} alt={project.title} className="style-image" />
            )}
            <h3 className="title">{project.title}</h3>
            <p className="description">{project.description}</p>

            <div>
                {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                ))}
            </div>

            <div className="actions">
                <Link href={project.github} className="buttor" target="_blank">GitHub</Link>
                <Link href={project.demo} className="buttor" target="_blank">Live Demo</Link>
            </div>
        </div>
    );
};