'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
// import { MdLocationPin } from "react-icons/md";
// import { BiSolidPhoneCall } from "react-icons/bi";
// import { TbBrandWhatsappFilled } from "react-icons/tb";
// import { TbBrandInstagramFilled } from "react-icons/tb";
// import { MdAttachEmail } from "react-icons/md";
// import confetti from 'canvas-confetti';
import styles from '../styles/Homepage.module.css';

const backgroundImages = [
  '/backgrounds/1.webp',
  '/backgrounds/2.webp',
  '/backgrounds/3.webp',
  '/backgrounds/4.webp',
  '/backgrounds/5.webp',
  '/backgrounds/6.webp',
  '/backgrounds/7.webp',
  '/backgrounds/8.webp',
  '/backgrounds/9.webp',
  '/backgrounds/10.webp',
  '/backgrounds/11.webp',
  '/backgrounds/12.webp',
  '/backgrounds/13.webp',
  '/backgrounds/14.webp',
  '/backgrounds/15.webp',
  '/backgrounds/16.webp'
];


export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div >
       <Head>
         <title>Check Inn - Coming Soon</title>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link href="https://fonts.googleapis.com/css2?family=Gravitas+One&family=Lobster&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap" rel="stylesheet" />
       </Head>
          

        <div className={styles.midSectionWrapper}>

          <div className={styles.animatedLineGroup}>

              {/* <div className={styles.midAnimatedLine}></div> */}
              
              <div className={styles.lineTextWrapper1}>
                <h2 className={styles.h2}>check-inn</h2>
                <div className={styles.midAnimatedLine}></div>
              </div>

              <div className={styles.lineTextWrapper}>
                <h2 className={styles.h2}>hotel in ojodu</h2>
                <div className={styles.midAnimatedLine}></div>
              </div>


          </div>
              
              <div className={styles.descTextContainer}>
                check-inn 247 hotel is a premier destination in Ojodu, Berger, offering a unique blend of Quiet and comfort, 
                ensuring an unforgettable experience for every guest.
                Whether you're here for business or leisure, we make you feel at home with our exceptional service and attention to detail.
              </div>


        </div>

        <div className={styles.showReelContainer}>
            {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={styles.showReelImage}
            style={{ display: index === currentImageIndex ? 'block' : 'none' }}
          >
            <Image
              src={image}
              alt={`Hotel Room ${index + 1}`}
              fill
              sizes="(max-width: 768px) 90vw, 90vw"
              style={{ objectFit: 'cover' }}
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              quality={75}
            />
          </div>
          ))}
        </div>


           {/* <div className={styles.showReelContainer}
           style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
           >
           </div> */}

    </div>
   );
 };
