const getProject = async (id) => {
    const res = await fetch(`${process.env.API_URL}/projects/projects/${id}`)
    const project = await res.json()
    return project
}
const ProjectPage = async({ params }) => {
    const project = await getProject(params.id)
    return (
        <div>
            <h1>
                {project.title}
            </h1>
            <h2>
                Project ID: {project._id}
            </h2>
            <p>
                {project.description}
            </p>
        </div>
    )
}

export default ProjectPage