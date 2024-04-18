"use client"
import { useState } from 'react'
import styles from "@/styles/FormContact.module.css"

const FormContact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const submitForm = async (e) => {
        e.preventDefault()
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/email/send`, {
            method: 'POST',
            body: JSON.stringify({ name, email, subject, message }),
        })
        if (res.ok) {
            alert('Votre message a été envoyé avec succès. Merci!')
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
        } else {
            alert('Une erreur s\'est produite. Veuillez réessayer plus tard.')
        }
    }

    return (
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
    )
}

export default FormContact