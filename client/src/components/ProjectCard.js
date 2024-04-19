import Image from 'next/image';
import { CustomLink, ExternalLink } from '@/components/Buttons';
import Tags from '@/components/Tags';
import styles from '../styles/ProjectCard.module.css';

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
                <Tags tags={project.technologies} />
                <div className={styles.card__links}>
                    <div className={"cta"}>
                        {project.source_code && (
                            <ExternalLink text='Code Source' href={project.source_code} />
                        )}
                        <ExternalLink text='Live Demo' href={project.link} />
                    </div>
                    <CustomLink text='En savoir plus' href={`/projects/${project._id}`} />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;