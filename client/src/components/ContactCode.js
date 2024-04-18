import styles from '@/styles/ContactCode.module.css'

const contactItems = [
    {
        social: 'email',
        link: 'malekb.benali@gmail.com',
        href: 'mailto:malekb.benali@gmail.com',
    },
    {
        social: 'github',
        link: 'malekbena',
        href: 'https://github.com/malekbena',
    },
    {
        social: 'linkedin',
        link: 'malek-benali',
        href: 'https://www.linkedin.com/in/malek-benali/',
    },
]

const ContactCode = () => {
    return (
        <div className={styles.code}>
            <p className={styles.line}>
                <span className={styles.className}>.socials</span> &#123;
            </p>
            {contactItems.slice(0, 8).map((item, index) => (
                <p className={styles.line} key={index}>
                    &nbsp;&nbsp;&nbsp;{item.social}:{' '}
                    <a href={item.href} target="_blank" rel="noopener">
                        {item.link}
                    </a>
                    ;
                </p>
            ))}
            {contactItems.slice(8, contactItems.length).map((item, index) => (
                <p className={styles.line} key={index}>
                    &nbsp;&nbsp;{item.social}:{' '}
                    <a href={item.href} target="_blank" rel="noopener">
                        {item.link}
                    </a>
                    ;
                </p>
            ))}
            <p className={styles.line}>&#125;</p>
        </div>
    )
}

export default ContactCode;