'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import styles from '../styles/BookRoomPanel.module.css';

interface BookRoomPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookRoomPanel({ isOpen, onClose }: BookRoomPanelProps) {
  const [showPanel, setShowPanel] = useState(isOpen);
  const [calendarVisible, setCalendarVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '',
  });

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection',
    },
  ]);

  useEffect(() => {
    setShowPanel(isOpen);
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, phone, guests } = formData;
    const checkIn = dateRange[0].startDate.toLocaleDateString();
    const checkOut = dateRange[0].endDate.toLocaleDateString();

    const message = `Hello, I’d like to book a room:

👤 Name: ${name} 

📞 Phone: ${phone}

🧍 Guests: ${guests}

📅 Check-in: ${checkIn}

📅 Check-out: ${checkOut}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2348030555150?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {showPanel && (
        <motion.div
          className={styles.panelWrapper}
          initial={{ y: '-100%', opacity: 0, height: '37vh' }}
          animate={{
            y: 0,
            opacity: 1,
            height: calendarVisible ? '80vh' : '37vh',
            transition: { duration: 0.6, ease: 'easeInOut' }
          }}
          exit={{ y: '-100%', opacity: 0, height: '37vh' }}
        >
          <div className={styles.panelContent}>
            <h2 className={styles.title}>Book a Room</h2><hr className={styles.hr}/>

            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                placeholder="Full Name"
                className={styles.input}
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className={styles.input}
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
              />

              <input
                type="number"
                placeholder="Number of Guests"
                className={styles.input}
                name="guests"
                required
                value={formData.guests}
                onChange={handleInputChange}
              />

              <div className={styles.dateToggleWrapper}>
                <input
                  type="text"
                  placeholder="check-in - check-out"
                  className={styles.input}
                  readOnly
                  value={`${dateRange[0].startDate.toLocaleDateString()} - ${dateRange[0].endDate.toLocaleDateString()}`}
                  onClick={() => setCalendarVisible(!calendarVisible)}
                />
              </div>

              {calendarVisible && (
                <div className={styles.dateRangePicker}>
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item: { selection: { startDate: Date; endDate: Date; key: string } }) =>
                      setDateRange([item.selection])
                    }
                    moveRangeOnFirstSelection={false}
                    ranges={dateRange}
                    className={styles.calendar}
                  />
                </div>
              )}

              <button type="submit" className={styles.submitButton}>
                Submit Booking
              </button>
            </form>

            <button className={styles.closeButton} onClick={onClose}>Close</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
// This code defines a BookRoomPanel component that allows users to book a room by filling out a form with their details and selecting a date range using a calendar. The component uses Framer Motion for animations and react-date-range for the date picker functionality. When the form is submitted, it constructs a WhatsApp message with the booking details and opens it in a new tab.






// 'use client';

// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { DateRange } from 'react-date-range';
// import { addDays } from 'date-fns';
// import 'react-date-range/dist/styles.css';
// import 'react-date-range/dist/theme/default.css';
// import styles from '../styles/BookRoomPanel.module.css';

// interface BookRoomPanelProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function BookRoomPanel({ isOpen, onClose }: BookRoomPanelProps) {
//   const [showPanel, setShowPanel] = useState(isOpen);
//   const [calendarVisible, setCalendarVisible] = useState(false);
//   const [dateRange, setDateRange] = useState([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 1),
//       key: 'selection',
//     },
//   ]);

//   useEffect(() => {
//     setShowPanel(isOpen);
//   }, [isOpen]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // Handle text input updates here
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Booking Info:', {
//       name: '',
//       phone: '',
//       guests: '',
//       checkIn: dateRange[0].startDate,
//       checkOut: dateRange[0].endDate,
//     });
//   };

//   return (
//     <AnimatePresence>
//       {showPanel && (
//         <motion.div
//           className={styles.panelWrapper}
//           initial={{ y: '-100%', opacity: 0, height: '37vh' }}
//           animate={{
//             y: 0,
//             opacity: 1,
//             height: calendarVisible ? '70vh' : '37vh',
//             transition: { duration: 0.6, ease: 'easeInOut' }
//           }}
//           exit={{ y: '-100%', opacity: 0, height: '37vh' }}
//         >
//           <div className={styles.panelContent}>
//             <h2 className={styles.title}>Book a Room</h2>

//             <form onSubmit={handleSubmit} className={styles.form}>
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className={styles.input}
//                 name="name"
//                 required
//                 onChange={handleInputChange}
//               />

//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className={styles.input}
//                 name="phone"
//                 required
//                 onChange={handleInputChange}
//               />

//               <input
//                 type="number"
//                 placeholder="Number of Guests"
//                 className={styles.input}
//                 name="guests"
//                 required
//                 onChange={handleInputChange}
//               />

//               <div className={styles.dateToggleWrapper}>
//                 <input
//                   type="text"
//                   className={styles.input}
//                   readOnly
//                   value={`${dateRange[0].startDate.toLocaleDateString()} - ${dateRange[0].endDate.toLocaleDateString()}`}
//                   onClick={() => setCalendarVisible(!calendarVisible)}
//                 />
//               </div>

//               {calendarVisible && (
//                 <div className={styles.dateRangePicker}>
//                   <DateRange
//                     editableDateInputs={true}
//                     onChange={(item: { selection: { startDate: Date; endDate: Date; key: string } }) =>
//                     setDateRange([item.selection])
//                 }

//                     moveRangeOnFirstSelection={false}
//                     ranges={dateRange}
//                     className={styles.calendar}
//                   />
//                 </div>
//               )}

//               <button type="submit" className={styles.submitButton}>Submit Booking</button>
//             </form>

//             <button className={styles.closeButton} onClick={onClose}>Close</button>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }






// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { DateRange } from 'react-date-range';
// import { addDays, format } from 'date-fns';
// import 'react-date-range/dist/styles.css';
// import 'react-date-range/dist/theme/default.css';
// import styles from '../styles/BookRoomPanel.module.css';

// interface BookRoomPanelProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function BookRoomPanel({ isOpen, onClose }: BookRoomPanelProps) {
//   const [showPanel, setShowPanel] = useState(isOpen);
//   const [calendarVisible, setCalendarVisible] = useState(false);
//   const [dateRange, setDateRange] = useState([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 1),
//       key: 'selection',
//     },
//   ]);

//   const [showCalendar, setShowCalendar] = useState(false);
//   const calendarRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     setShowPanel(isOpen);
//   }, [isOpen]);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
//         setShowCalendar(false);
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // Handle text input updates here
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Booking Info:', {
//       name: '',
//       phone: '',
//       guests: '',
//       checkIn: dateRange[0].startDate,
//       checkOut: dateRange[0].endDate,
//     });
//   };

//   const formattedDate = `${format(dateRange[0].startDate, 'MMM dd, yyyy')} → ${format(dateRange[0].endDate, 'MMM dd, yyyy')}`;

//   return (
//     <AnimatePresence>
//       {showPanel && (
//         <motion.div
//           className={styles.panelWrapper}
//           initial={{ y: '-100%', opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: '-100%', opacity: 0 }}
//           transition={{ duration: 0.6, ease: 'easeInOut' }}
//         >
//           <div className={styles.panelContent}>
//             <h2 className={styles.title}>Book a Room</h2>

//             <form onSubmit={handleSubmit} className={styles.form}>
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className={styles.input}
//                 name="name"
//                 required
//                 onChange={handleInputChange}
//               />

//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className={styles.input}
//                 name="phone"
//                 required
//                 onChange={handleInputChange}
//               />

//               <input
//                 type="number"
//                 placeholder="Number of Guests"
//                 className={styles.input}
//                 name="guests"
//                 required
//                 onChange={handleInputChange}
//               />

//               <div className={styles.datePickerWrapper}>
//                 <input
//                   type="text"
//                   value={formattedDate}
//                   onClick={() => setShowCalendar(!showCalendar)}
//                   className={styles.dateInput}
//                   readOnly
//                 />
//                 {showCalendar && (
//                   <div className={styles.calendarDropdown} ref={calendarRef}>
//                     <DateRange
//                       editableDateInputs={true}
//                       onChange={(item: { selection: { startDate: Date; endDate: Date; key: string } }) =>
//                       setDateRange([item.selection])
//                     }
//                       moveRangeOnFirstSelection={false}
//                       ranges={dateRange}
//                       className={styles.calendar}
//                     />
//                   </div>
//                 )}
//               </div>

//               <button type="submit" className={styles.submitButton}>Submit Booking</button>
//             </form>

//             <button className={styles.closeButton} onClick={onClose}>Close</button>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }






// 'use client';

// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { DateRange } from 'react-date-range';
// import { addDays } from 'date-fns';
// import 'react-date-range/dist/styles.css';
// import 'react-date-range/dist/theme/default.css';
// import styles from '../styles/BookRoomPanel.module.css';

// interface BookRoomPanelProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function BookRoomPanel({ isOpen, onClose }: BookRoomPanelProps) {
//   const [showPanel, setShowPanel] = useState(isOpen);
//   const [dateRange, setDateRange] = useState([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 1),
//       key: 'selection',
//     },
//   ]);

//   useEffect(() => {
//     setShowPanel(isOpen);
//   }, [isOpen]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // Handle text input updates here
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Booking Info:', {
//       name: '',
//       phone: '',
//       guests: '',
//       checkIn: dateRange[0].startDate,
//       checkOut: dateRange[0].endDate,
//     });
//   };

//   return (
//     <AnimatePresence>
//       {showPanel && (
//         <motion.div
//           className={styles.panelWrapper}
//           initial={{ y: '-100%', opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: '-100%', opacity: 0 }}
//           transition={{ duration: 0.6, ease: 'easeInOut' }}
//         >
//           <div className={styles.panelContent}>
//             <h2 className={styles.title}>Book a Room</h2>

//             <form onSubmit={handleSubmit} className={styles.form}>
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className={styles.input}
//                 name="name"
//                 required
//                 onChange={handleInputChange}
//               />

//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className={styles.input}
//                 name="phone"
//                 required
//                 onChange={handleInputChange}
//               />

//               <input
//                 type="number"
//                 placeholder="Number of Guests"
//                 className={styles.input}
//                 name="guests"
//                 required
//                 onChange={handleInputChange}
//               />

//               <div className={styles.dateRangePicker}>
//                 <DateRange
//                   editableDateInputs={true}
//                   onChange={(item: { selection: { startDate: Date; endDate: Date; key: string } }) =>
//                   setDateRange([item.selection])
//                 }

//                   moveRangeOnFirstSelection={false}
//                   ranges={dateRange}
//                   className={styles.calendar}
//                 />
//               </div>

//               <button type="submit" className={styles.submitButton}>Submit Booking</button>
//             </form>

//             <button className={styles.closeButton} onClick={onClose}>Close</button>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }






// 'use client';

// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import styles from '../styles/BookRoomPanel.module.css';

// interface BookRoomPanelProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function BookRoomPanel({ isOpen, onClose }: BookRoomPanelProps) {
//   const [showPanel, setShowPanel] = useState(isOpen);

//   useEffect(() => {
//     setShowPanel(isOpen);
//   }, [isOpen]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert('Booking submitted successfully!');
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {showPanel && (
//         <motion.div
//           className={styles.panelWrapper}
//           initial={{ y: '-100%', opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: '-100%', opacity: 0 }}
//           transition={{ duration: 0.6, ease: 'easeInOut' }}
//         >
//           <div className={styles.panelContent}>
//             <h2 className={styles.title}>Book a Room</h2> <hr className={styles.hr}/>
//             <form className={styles.form} onSubmit={handleSubmit}>
//               <input type="text" placeholder="Full Name" required className={styles.input} />
//               <div className={styles.dateGroup}>
//                 <input type="date" required className={styles.inputSmall} />
//                 <input type="date" required className={styles.inputSmall} />
//               </div>
//               <input type="number" placeholder="Number of Guests" required min="1" className={styles.input} />
//               <button type="submit" className={styles.submitButton}>Submit</button>
//             </form>
//             <button className={styles.closeButton} onClick={onClose}>Close</button>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

