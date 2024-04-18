"use client"
import { useState, useEffect } from 'react'
import styles from "@/styles/ContactForm.module.css"

const FormContact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState({
        display: false,
        message: ''
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setStatus({
                display: false,
                message: ''
            })
        }, 3000)
        return () => clearTimeout(timer)
    }, [status])

    const submitForm = async (e) => {
        e.preventDefault()
        const data = { name, email, subject, message }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/email/send`, options)
        if (res.status === 200) {
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
            changeStatus('Votre message a été envoyé avec succès. Merci!')
        } else {
            setStatus("Une erreur s'est produite. Veuillez réessayer plus tard.")
        }
    }

    const changeStatus = (message) => {
        setStatus({
            display: true,
            message: message
        })
    }


    return (
        <>
            {
                !status.display ? (
                    <form className={styles.form} onSubmit={submitForm}>
                        <div className={styles.flex}>
                            <div>
                                <label htmlFor="name">Nom</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name">Sujet</label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="5"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Envoyer</button>
                    </form>
                ) : (
                    <div className={styles.success}>
                        <h3>Votre message a été envoyé avec succès. Merci!</h3>
                    </div>)
            }
        </>
    )
}

export default FormContact