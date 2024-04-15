import EmblaCarousel from '@/components/Carousel'
import Link from 'next/link'
import styles from '@/styles/ProjectsPage.module.css'


const getProject = async (id) => {
    const res = await fetch(`${process.env.API_URL}/projects/projects/${id}`)
    const project = await res.json()
    return project
}
const ProjectPage = async ({ params }) => {
    const project = await getProject(params.id)
    const images = [project.cover, ...project.images]
    return (
        <>
            <EmblaCarousel images={images} />
            <h4 className={styles.project__title}> {project.title} </h4>
            <p className={styles.project__subtitle}> {project.description} </p>
            <p> {project.full_description} </p>
            <div className='tags'>
                {project.technologies.map((tag) => (
                    <span key={tag} className={tag}>
                        {tag}
                    </span>
                ))}
            </div>
            <div className='cta'>
                {project.source_code && (
                    <a
                        href={project.source_code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={"underline"}
                    >
                        Code Source
                    </a>
                )}
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={"underline"}
                >
                    Live Demo
                </a>
                <Link className='outlined' href={`/projects`}>
                        Voir tous les projets
                    </Link>
            </div>
        </>
    )
}

export default ProjectPage