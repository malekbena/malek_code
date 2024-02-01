"use client"
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Tab.module.css';

const Tab = ({ icon, filename, path }) => {
    return (
        <Link href={path}>
            <div
                className={`${styles.tab} ${window.location.hash === path && styles.active}`}
                // className={`${styles.tab}`}
            >
                <Image src={icon} alt={filename} height={18} width={18} />
                <p>{filename}</p>
            </div>
        </Link>
    );
};

export default Tab;