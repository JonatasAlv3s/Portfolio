

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo: string;
    image?: string;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Sample Project",
        description: "This is a sample project description.",
        tags: ["sample", "project"],
        github: "https://github.com/sample/project",
        demo: "https://sampleproject.com",
    },
];
