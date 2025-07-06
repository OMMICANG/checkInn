'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import MenuIcon from './MenuIcon';
// import { Button } from '@/components/ui/button'; 
import { useState } from 'react'; 
import BookRoomPanel from './BookRoomPanel';
import styles from '../styles/Header.module.css';

export default function Header() {
    const [isBookPanelOpen, setBookPanelOpen] = useState(false);


  return (
    <header>
        <div className={styles.headerContainer}>

            <div className={`${styles.headerContent} ${styles.dropIn}`}>

                <div className={styles.logoWrapper}>
                    <Link href={"/"}>
                    <Image priority={true} 
                    src="/logo/Logo_-_Copy-removebg-preview.png" 
                    alt="Check Inn Logo" width={25} height={25} 
                    className={styles.logo} />
                    </Link>
                </div>

                <div className={styles.topContainer}>

                    <div className={styles.mobile}>
                    <BiSolidPhoneCall className={styles.callIcon} />
                    <span>+2348030555150</span> 
                    </div>

                    <a 
                    href="https://tinyurl.com/vwdv3pft" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.topLocator}
                    >

                    <MdLocationPin 
                    className={styles.locationIcon}/>
                    <span> ojodu . Berger</span>

                    </a>
                </div>

                <button className={styles.button} onClick={() => setBookPanelOpen(true)}>Book a room</button>

                <div className={styles.menuIcon}><MenuIcon /></div>

            </div>

            <div className={styles.topAnimatedLine}></div>

        </div>
        
        {/* Book Room Sliding Panel */}
      <BookRoomPanel
        isOpen={isBookPanelOpen}
        onClose={() => setBookPanelOpen(false)}
      />


    </header>
  );
}