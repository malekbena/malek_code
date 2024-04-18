import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
})

export const sendMail = async (body) => {
    try {
        const info = await transporter.sendMail({
            from: '<malekb.benali@gmail.com>',
            to: "malekb.benali@gmail.com",
            subject: "Email from Portfolio",
            text: `Message from : ${body.name} / Email : ${body.email} / Subject : ${body.subject} / Message : ${body.message}`,
            html: `Message from : ${body.name}<br> Email : ${body.email} <br> Subject : ${body.subject} <br> Message :<br/> ${body.message}`
        })
        return info
    } catch (error) {
        console.log('Error in mailService.js: ', error)
        throw new Error(error)
    }
}

export default { sendMail }