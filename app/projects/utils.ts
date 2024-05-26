type Metadata = {
    githubOwner: string;
    githubLink: string;
    name: string;
    slug: string;
    projectLink?: string;
    shortDescription: string;
}

// Function getProjects iterates through array in data.json and opulates project list.
export function getImportantProjects(): Metadata[] {
    let data = require('./data.json');
    let projects = data.slice(0, 5);
    const metadataArray = projects.map((project) => {
        return {
            githubOwner: project.githubOwner,
            githubLink: project.githubLink,
            name: project.name,
            projectLink: project.projectLink,
            shortDescription: project.shortDescription,
            slug: createSlug(project.name)
        }
    })
    return metadataArray;
}

function createSlug(name: string): string {
    return name.toLowerCase().replace(/\s/g, '-');
}