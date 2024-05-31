import fs from "fs";
import path from "path";

export type Metadata = {
    githubOwner: string;
    githubLink: string;
    name: string;
    slug: string;
    projectLink?: string;
    shortDescription: string;
    featured: string;
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

// Function getProjects iterates through array in data.json and opulates project list.
export function getImportantProjects(): Metadata[] {
    let data = require('./../data.json');
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

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file: string) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
    let rawContent = fs.readFileSync(filePath, "utf-8");
    return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
    let mdxFiles = getMDXFiles(dir);
    return mdxFiles.map((file) => {
        let { metadata, content } = readMDXFile(path.join(dir, file));
        let slug = path.basename(file, path.extname(file));

        return {
            metadata,
            slug,
            content,
        };
    });
}

export function getProjectDetails() {
    return getMDXData(path.join(process.cwd(), "app", "projects", "projects"));
}

export function capitalizeFirstLetter(str: string): string {
    if (str.length === 0) {
        return str; // Return the string as is if it's empty
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}