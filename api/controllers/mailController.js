// import mailService from '../services/mailService'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
})

export const sendMail = async (req, res) => {
    try {
        const info = await transporter.sendMail({
            from: '<malekb.benali@gmail.com>', // sender address
            to: "malekb.benali@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        })
    
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
        
        res.status(200).json({ message: 'Mail sent successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default { sendMail }