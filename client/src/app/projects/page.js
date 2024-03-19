import ProjectCard from '@/components/ProjectCard'
import styles from '@/styles/ProjectsPage.module.css'

async function getProjects() {
    const res = await fetch(`${process.env.API_URL}/projects/projects`)
    const projects = await res.json()
    return projects
}
const ProjectsPage = async () => {
    const projects = await getProjects()
    return (
        <>
            <h3>Mes projets</h3>
            <div className={styles.container}>
                {projects && projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </>
    );
};

export default ProjectsPage;
