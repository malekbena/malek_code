import Modal from '@/components/Modal'
import Image from 'next/image'

const findProject = async (id) => {
    const res = await fetch(`${process.env.API_URL}/projects/projects`)
    const projects = await res.json()
    const project = projects.find((project) => project._id === id)
    return project
}

const projectModal = async ({params}) => {
    const project = await findProject(params.id)
    return (
        <Modal>
            <Image
                src={project.cover}
                height={0}
                width={400}
                alt=""
                style={{ width: 'auto', height: 'auto' }}
            
            />
            <h4> {project.title} </h4>
            <p> {project.description} </p>
            <div className='tags'>
                {project.technologies.map((tag) => (
                    <span key={tag} className={tag}>
                        {tag}
                    </span>
                ))}
            </div>
        </Modal>
    );
}
export default projectModal