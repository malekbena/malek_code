import EmblaCarousel from '@/components/Carousel'
import { CustomLink, ExternalLink } from '@/components/Buttons'
import Tags from '@/components/Tags'
import styles from '@/styles/ProjectPage.module.css'


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
            <div className={styles.container}>

                <EmblaCarousel images={images} />
            </div>
            <h4 className={styles.project__title}> {project.title} </h4>
            <p className={styles.project__subtitle}> {project.description} </p>
            <p> {project.full_description} </p>
            <Tags tags={project.technologies} />
            <div className='cta'>
                {project.source_code && (
                    <ExternalLink text='Code Source' href={project.source_code} />
                )}
                <ExternalLink text='Live Demo' href={project.link} />
                <CustomLink text='Voir tous les projets' href={`/projects`} />
            </div>
        </>
    )
}

export default ProjectPage