import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    source_code: {
        type: String,
        required: true,
    },
    technologies: {
        type: Array,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
})

export default mongoose.model('Project', projectSchema)