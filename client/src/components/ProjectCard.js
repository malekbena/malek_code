import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
    return (
        <div className={styles.card}>
            <Image
                src={project.cover}
                height={0}
                width={0}
                alt={project.title}
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
            />
            <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                    {project.technologies.map((tag) => (
                        <span key={tag} className={tag}>
                            {tag}
                        </span>
                    ))}
                </div>
                <div className={styles.cta}>
                    {project.source_code && (
                        <a
                            href={project.source_code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.underline}
                        >
                            Code Source
                        </a>
                    )}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.underline}
                    >
                        Live Demo
                    </a>
                    <Link className='outlined' href={`/projects/${project.title}`}>
                        En savoir plus
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;