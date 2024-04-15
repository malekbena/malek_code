import Modal from '@/components/Modal'
import EmblaCarousel from '@/components/Carousel'

const getProject = async (id) => {
    const res = await fetch(`${process.env.API_URL}/projects/projects/${id}`)
    const project = await res.json()
    return project
}

const projectModal = async ({ params }) => {
    const project = await getProject(params.id)
    const images = [project.cover, ...project.images]
    return (
        <Modal>
            <EmblaCarousel images={images} />
            <h4> {project.title} </h4>
            <p> {project.description} </p>
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
            </div>
        </Modal>
    );
}
export default projectModal