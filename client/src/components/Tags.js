import styles from '@/styles/Tags.module.css'

const Tags = ({ tags }) => {
    return (
        <div className={styles.tags}>
            {tags.map((tag) => (
                <span key={tag} className={styles[tag]}>
                    {tag}
                </span>
            ))}
        </div>
    );
}
export default Tags