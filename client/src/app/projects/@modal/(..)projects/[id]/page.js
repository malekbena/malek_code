import Modal from '@/components/Modal'
import Carousel from '@/components/Carousel'
import { ExternalLink } from '@/components/Buttons'
import Tags from '@/components/Tags'
import styles from '@/styles/ProjectPage.module.css'

const getProject = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/projects/${id}`)
    const project = await res.json()
    return project
}

const projectModal = async ({ params }) => {
    const project = await getProject(params.id)
    const images = [project.cover, ...project.images]
    return (
        <Modal>
            <div className={styles.modal_carousel}>
            <Carousel images={images} />
            </div>
            <h4 className={styles.project__title}> {project.title} </h4>
            <p> {project.full_description} </p>
            <Tags tags={project.technologies} />
            <div className='cta'>
                {project.source_code && (
                    <ExternalLink text='Code Source' href={project.source_code} />
                )}
                <ExternalLink text='Live Demo' outlined href={project.link} />
            </div>
        </Modal>
    );
}
export default projectModal