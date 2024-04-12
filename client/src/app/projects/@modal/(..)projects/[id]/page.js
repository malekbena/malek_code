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
            <Image src={project.cover} height={300} alt="" />
            <h1>Modal</h1>
        </Modal>
    );
}
export default projectModal