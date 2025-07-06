'use client';

import { useEffect, useState, ReactNode } from 'react';
import styles from '../styles/DesktopBlocker.module.css';

interface Props {
  children: ReactNode;
}

export default function IsMobile({ children }: Props) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // On mount
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile === null) return null; // wait for hydration

  if (!isMobile) {
    return (
      <div className={styles.blocker}>
        <div className={styles.messageBox}>
          <img
            src="/logo/Logo_-_Copy-removebg-preview.png"
            alt="Check-Inn Logo"
            className={styles.logo}
          />
          <h1 className={styles.title}>🚫 Desktop View Not Supported</h1>
          <p className={styles.subtitle}>This app is optimized for mobile only.</p>
          <p className={styles.note}>Please switch to a mobile device or resize your window.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
