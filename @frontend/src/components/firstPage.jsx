// firstPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import EventModal from './EventModal';
import Holidays from 'date-holidays';
import 'bootstrap/dist/css/bootstrap.min.css';
import './first.css';

const firstPage = () => {
  const calendarRef = useRef(null);
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [events, setEvents] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHoliday, setSelectedHoliday] = useState(null);

  // Load app events
  useEffect(() => {
    fetch('http://localhost:5050/events')
      .then(res => res.json())
      .then(setEvents)
      .catch(console.error);
  }, []);

  // Load holiday data whenever year changes
  useEffect(() => {
    const hd = new Holidays('IN'); // replace 'IN' with your country code
    const hdList = hd.getHolidays(year);
    setHolidays(hdList || []);
  }, [year]);

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

  // const handleDateClick = (info) => {
  //   setSelectedDate(info.dateStr);
  //   const holiday = holidays.find(h => h.date === info.dateStr);
  //   setSelectedHoliday(holiday || null);
  //   setShowModal(true);
  // };


  const handleDateClick = async info => {
  setSelectedDate(info.dateStr);
  setSelectedHoliday(null);

  try {
    const [year, month, day] = info.dateStr.split('-');
    const res = await axios.get('https://calendarific.com/api/v2/holidays', {
      params: {
        api_key: YOUR_CALENDARIFIC_KEY,
        country: 'IN',         // change if needed
        year,
        month,
        day
      }
    });
    const list = res.data.response.holidays;
    setSelectedHoliday(list.length ? list[0] : null);
  } catch (err) {
    console.error(err);
    setSelectedHoliday(null);
  }

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

  // Transform holidays into calendar events for visual display
  const holidayEvents = holidays.map(h => ({
    id: `hol-${h.date}`,
    title: h.name,
    start: h.date,
    allDay: true,
    backgroundColor: '#fde',
  }));

  const monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];

  return (
    <div className="container calendar-container">
      <div className="row mb-3 justify-content-center">
        {/* Month selector */}
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
        {/* Year selector */}
        <div className="col-auto d-flex align-items-center">
          <button className="btn btn-outline-secondary btn-sm" onClick={() => changeDate(0, -1)}>←</button>
          <select
            className="form-select mx-2"
            value={year}
            onChange={e => onDropdownChange(month, +e.target.value)}
          >
            {Array.from({ length: 121 }, (_, i) => 2000 + i)
              .map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          <button className="btn btn-outline-secondary btn-sm" onClick={() => changeDate(0, 1)}>→</button>
        </div>
      </div>

      <FullCalendar
        events={events}
  dateClick={handleDateClick}
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={false}
        // dateClick={handleDateClick}
        // events={[...events, ...holidayEvents]}
        height={450}
        datesSet={info => {
          const d = info.start;
          setYear(d.getFullYear());
          setMonth(d.getMonth());
        }}
        
      />

      <EventModal
        isOpen={showModal}
        selectedDate={selectedDate}
        selectedHoliday={selectedHoliday}
        onSave={handleSaveEvent}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default firstPage;

