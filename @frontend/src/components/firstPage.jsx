// import React, { useState, useRef, useEffect } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import EventModal from './EventModal';
// import './first.css';

// const FirstPage = () => {
//   const calendarRef = useRef(null);
//   const today = new Date();

//   const [month, setMonth] = useState(today.getMonth());
//   const [year, setYear] = useState(today.getFullYear());
//   const [events, setEvents] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedDate, setSelectedDate] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5050/events')
//       .then(res => res.json())
//       .then(setEvents)
//       .catch(console.error);
//   }, []);

//   const changeDate = (monthDelta = 0, yearDelta = 0) => {
//     const api = calendarRef.current?.getApi();
//     if (!api) return;
//     const newMonth = month + monthDelta;
//     const newYear = year + yearDelta;
//     const date = new Date(newYear, newMonth, 1);
//     api.gotoDate(date);
//     setYear(date.getFullYear());
//     setMonth(date.getMonth());
//   };

//   const onDropdownChange = (m, y) => changeDate(m - month, y - year);

//   const handleDateClick = info => {
//     setSelectedDate(info.dateStr);
//     setShowModal(true);
//   };

//   const handleSaveEvent = newEvent => {
//     fetch('http://localhost:5050/events', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newEvent),
//     })
//       .then(res => res.json())
//       .then(savedEvent => {
//         setEvents(prev => [...prev, savedEvent]);
//         setShowModal(false);
//       })
//       .catch(console.error);
//   };

//   const monthNames = [
//     'January','February','March','April','May','June',
//     'July','August','September','October','November','December'
//   ];

//   return (
//     <div className="calendar-container">
//       <div style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 4, marginLeft:'140px'}}>
//         {/* Month arrows */}
//         <button onClick={() => changeDate(-1, 0)}>←</button>
//         <select value={month} onChange={e => onDropdownChange(+e.target.value, year)}>
//           {monthNames.map((m, i) => <option key={i} value={i}>{m}</option>)}
//         </select>
//         <button onClick={() => changeDate(1, 0)}>→</button>

//         {/* Spacer */}
//         <div style={{ width: 20 }} />

//         {/* Year arrows */}
//         <button onClick={() => changeDate(0, -1)}>←</button>
//         <select value={year} onChange={e => onDropdownChange(month, +e.target.value)}>
//           {Array.from({ length: 201 }, (_, i) => 1900 + i).map(y => (
//             <option key={y} value={y}>{y}</option>
//           ))}
//         </select>
//         <button onClick={() => changeDate(0, 1)}>→</button>
//       </div>

//       <FullCalendar
//         ref={calendarRef}
//         plugins={[dayGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         headerToolbar={false}
//         dateClick={handleDateClick}
//         events={events}
//         height={400}
//         datesSet={info => {
//           const d = info.start;
//           setYear(d.getFullYear());
//           setMonth(d.getMonth());
//         }}
//       />

//       <EventModal
//         isOpen={showModal}
//         selectedDate={selectedDate}
//         onSave={handleSaveEvent}
//         onClose={() => setShowModal(false)}
//       />
//     </div>
//   );
// };

// export default FirstPage;












import React, { useState, useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import EventModal from './EventModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './first.css';

const firstPage = () => {
  const calendarRef = useRef(null);
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    fetch('http://localhost:5050/events')
      .then(res => res.json())
      .then(setEvents)
      .catch(console.error);
  }, []);

  const changeDate = (mDelta = 0, yDelta = 0) => {
    const api = calendarRef.current?.getApi();
    if (!api) return;
    const date = new Date(year + yDelta, month + mDelta, 1);
    api.gotoDate(date);
    setYear(date.getFullYear());
    setMonth(date.getMonth());
  };

  const onDropdownChange = (newMonth, newYear) =>
    changeDate(newMonth - month, newYear - year);

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setShowModal(true);
  };

  const handleSaveEvent = (newEvent) => {
    fetch('http://localhost:5050/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEvent),
    })
      .then(res => res.json())
      .then(ev => {
        setEvents(prev => [...prev, ev]);
        setShowModal(false);
      })
      .catch(console.error);
  };

  const monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];

  return (
    <div className="container calendar-container">
      <div className="row mb-3 justify-content-center">
        <div className="col-auto d-flex align-items-center">
          <button className="btn btn-outline-secondary btn-sm" onClick={() => changeDate(-1, 0)}>←</button>
          <select
            className="form-select mx-2"
            value={month}
            onChange={e => onDropdownChange(+e.target.value, year)}
          >
            {monthNames.map((m, i) => <option key={i} value={i}>{m}</option>)}
          </select>
          <button className="btn btn-outline-secondary btn-sm" onClick={() => changeDate(1, 0)}>→</button>
        </div>

        <div className="col-auto d-flex align-items-center">
          <button className="btn btn-outline-secondary btn-sm" onClick={() => changeDate(0, -1)}>←</button>
          <select
            className="form-select mx-2"
            value={year}
            onChange={e => onDropdownChange(month, +e.target.value)}
          >
            {Array.from({ length: 121 }, (_, i) => 2000 + i).map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <button className="btn btn-outline-secondary btn-sm" onClick={() => changeDate(0, 1)}>→</button>
        </div>
      </div>

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={false}
        dateClick={handleDateClick}
        events={events}
        height={400}
        datesSet={info => {
          const d = info.start;
          setYear(d.getFullYear());
          setMonth(d.getMonth());
        }}
      />

      <EventModal
        isOpen={showModal}
        selectedDate={selectedDate}
        onSave={handleSaveEvent}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default firstPage;
