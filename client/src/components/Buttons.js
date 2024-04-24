import Link from 'next/link'
import styles from '@/styles/Buttons.module.css'
import RightIcon from '@/components/icons/RightIcon'
import LeftIcon from '@/components/icons/LeftIcon'

export const Button = ({ text, onClick }) => {
    return (
        <button className={styles.outlined} onClick={onClick}>{text}</button>
    )
}

export const CustomLink = ({ text, href, outlined }) => {
    return (
        <Link
            href={href}
            className={outlined ? styles.outlined : styles.button}
        >
            {text}
        </Link>
    )
}

export const ExternalLink = ({ text, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline}
        >
            {text}
        </a>
    )
}


export const NextBtn = ({onClick}) => {
    return (
        <button className={`${styles.carousel_button} ${styles.carousel_next}`} onClick={onClick}>
            <RightIcon />
        </button>
    )
}
export const PrevBtn = ({onClick}) => {
    return (
        <button className={`${styles.carousel_button} ${styles.carousel_prev}`} onClick={onClick}>
            <LeftIcon />
        </button>
    )
}
