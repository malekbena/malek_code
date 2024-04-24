import Carousel from '@/components/Carousel'
import { CustomLink, ExternalLink } from '@/components/Buttons'
import Tags from '@/components/Tags'
import styles from '@/styles/ProjectPage.module.css'


const getProject = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/projects/${id}`)
    const project = await res.json()
    return project
}
const ProjectPage = async ({ params }) => {
    const project = await getProject(params.id)
    const images = [project.cover, ...project.images]
    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <Carousel images={images} />
            </div>
            <h4 className={styles.project__title}> {project.title} </h4>
            <p className={styles.project__text}> {project.full_description} </p>
            <Tags tags={project.technologies} />
            <div className={styles.project__links}>
                <div className='cta'>
                    {project.source_code && (
                        <ExternalLink text='Code Source' href={project.source_code} />
                    )}
                    <ExternalLink text='Live Demo' href={project.link} />
                </div>
                <CustomLink text='Voir tous les projets' outlined href={`/projects`} />
            </div>
        </div>
    )
}

export default ProjectPage