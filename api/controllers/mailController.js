import mailService from '../services/mailService.js'

export const sendMail = async (req, res) => {
    try {
        const mail = await mailService.sendMail(req.body)
        res.status(200).json({ message: 'Mail sent successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default { sendMail }