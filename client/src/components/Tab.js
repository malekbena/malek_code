"use client"
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Tab.module.css';
import { usePathname } from 'next/navigation';

const Tab = ({ icon, filename, path }) => {
    const pathname = usePathname();
    return (
        <Link href={path} className="link">
            <div
                className={`${styles.tab} ${pathname === path && styles.active}`}
                
            >
                <Image src={icon} alt={filename} height={18} width={18} />
                <p>{filename}</p>
            </div>
        </Link>
    );
};

export default Tab;