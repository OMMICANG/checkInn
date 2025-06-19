'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { MdLocationPin } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { MdAttachEmail } from "react-icons/md";
import confetti from 'canvas-confetti';
import styles from './styles/Home.module.css';

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

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
    >
      <Head>
        <title>Check Inn - Coming Soon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Gravitas+One&family=Lobster&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.overlay}>
        <div className={styles.contentBox}>

          <div className={styles.topContainer}>
            <div className={styles.mobile}><BiSolidPhoneCall className={styles.callIcon} />+2348030555150</div>
            <a href="https://tinyurl.com/vwdv3pft" target="_blank" rel="noopener noreferrer" className={styles.topLocator}><MdLocationPin className={styles.locationIcon}/>ojodu . Berger</a>
          </div>

          <h2 className={styles.subtitle}>Coming Soon</h2>
          <div className={styles.subAnimatedLine}></div>
          
          <h3 className={styles.description}>Hotel . Restaurant . Bar</h3>
          <div className={styles.logoWrapper}>
            <Image priority={true} src="/logo/Logo_-_Copy-removebg-preview.png" alt="Check Inn Logo" width={100} height={100} className={styles.logo} />
          </div>

          <h1 className={styles.typingTitle}><span>Check-Inn Hotels</span></h1>
          {/* <h5 className={styles.location}> <MdLocationPin className={styles.locationIcon} />Ojodu . Berger</h5> */}

          <p className={styles.tagline}> Best In Ojodu. We Make You Feel At Home</p>

        <form id='email' className={styles.form} onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const input = form.elements.namedItem('email') as HTMLInputElement;
              const email = input.value;

              const res = await fetch('/api/subscribe', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email }),
  });

  const data = await res.json();

if (data.success) {
  confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  setSubmitted(true);
  form.reset();
  } else {
    alert(data.error || 'Oops! Something went wrong.');
  }
}}>
            <input
              type="email"
              name='email'
              placeholder="Enter your email"
              className={styles.input}
              required
            />

            <button type="submit" className={styles.button}>Notify Me</button>
          </form>

                    {submitted && (
            <p className={styles.thankYou}>🎉 Thank you For Your Interest! You’ll be notified Once We're Done Cooking. 😉🎉</p>
          )}

          <p className={styles.note}>We respect your privacy.</p>
          
          <div className={styles.bottomSocialIcons}>
            <a href="https://wa.me/2348030555150" target="_blank" rel="noopener noreferrer"><TbBrandWhatsappFilled className={styles.whatsappIcon} /></a>

            <a href="https://www.instagram.com/checkinn.hotel/" target="_blank" rel="noopener noreferrer"><TbBrandInstagramFilled className={styles.instaIcon} /></a>

            <a href="mailto:support@checkinnhotelsng.com?subject=Booking%20Enquiry&body=Hi%20Check-Inn%2C%0AI'd%20love%20to%20make%20a%20reservation..." target="_blank" rel="noopener noreferrer"><MdAttachEmail /></a>

          </div>

          <h4 className={styles.footer}> &copy; check-inn hotels Ng 2025</h4>

        </div>
      </div>
    </div>
  );
};

export default Home;



// import React from 'react';
// import Head from 'next/head';
// import styles from './styles/Home.module.css';

// const Home = () => {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Check Inn - Coming Soon</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
//       </Head>
//       <div className={styles.overlay}>
//         <div className={styles.contentBox}>
//           <h1 className={styles.title}>Check Inn</h1>
//           <h2 className={styles.subtitle}>Coming Soon</h2>
//           <p className={styles.tagline}>Your Escape Awaits</p>
//           <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className={styles.input}
//               required
//             />
//             <button type="submit" className={styles.button}>Notify Me</button>
//           </form>
//           <p className={styles.note}>We respect your privacy.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;





// const Home = () => {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Check Inn - Coming Soon</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>
//       <div className={styles.overlay}>
//         <div className={styles.content}>
//           <h1 className={styles.title}>Check Inn</h1>
//           <h2 className={styles.subtitle}>Coming Soon</h2>
//           <p className={styles.tagline}>Your Escape Awaits</p>
//           <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className={styles.input}
//               required
//             />
//             <button type="submit" className={styles.button}>Notify Me</button>
//           </form>
//           <p className={styles.note}>We respect your privacy.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;