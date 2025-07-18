// // EventModal.jsx
// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const EventModal = ({ isOpen, onClose, onSave, selectedDate }) => {
//   const [title, setTitle] = React.useState('');

  
   

// const handleSubmit = () => {
//   if (title.trim()) {
//     onSave({ title, date: selectedDate });
//     toast.success('Event saved successfully! 🎉');
//     setTitle('');
//     // ❗ Delay modal close so the toast has time to appear
//     setTimeout(() => {
//       onClose();
//     }, 1000); // 800ms gives enough time for toast to trigger
//   } else {
//     toast.error('Please enter an event title.');
//   }
// };

//   if (!isOpen) return null;

//   return (
    
//     <>
//       <div style={modalStyles.overlay}>
//         <div style={modalStyles.modal}>
//           <h3>Add Event</h3>
//           <input
//             type="text"
//             placeholder="Event title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             style={modalStyles.input}
//           />
//           <br /><br />
//           <div style={modalStyles.buttonGroup}>
//             <button onClick={handleSubmit} style={{ ...modalStyles.button, ...modalStyles.saveButton }}>
//               Save
//             </button>
//             <button onClick={onClose} style={{ ...modalStyles.button, ...modalStyles.cancelButton }}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//       <ToastContainer position="top-center" autoClose={2000} />
//     </>
//   );
// };



// const modalStyles = {
//   overlay: {
//     position: 'fixed',
//     top: 0, left: 0,
//     width: '100%', height: '100%',
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     display: 'flex', justifyContent: 'center', alignItems: 'center',
//     zIndex: 1000
//   },
//   modal: {
//     backgroundColor: '#fff',
//     padding: '30px 25px',
//     borderRadius: '12px',
//     boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
//     minWidth: '320px',
//     maxWidth: '90%',
//     textAlign: 'center',
//     fontFamily: 'Arial, sans-serif',
//     animation: 'fadeIn 0.3s ease-out'
//   },
//   input: {
//     padding: '10px',
//     width: '100%',
//     marginBottom: '20px',
//     borderRadius: '6px',
//     border: '1px solid #ccc',
//     fontSize: '16px'
//   },
//   buttonGroup: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '10px'
//   },
//   button: {
//     padding: '8px 16px',
//     borderRadius: '6px',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '15px'
//   },
//   saveButton: {
//     backgroundColor: '#4CAF50',
//     color: '#fff'
//   },
//   cancelButton: {
//     backgroundColor: '#ccc',
//     color: '#333'
//   }
// };


// export default EventModal;









// EventModal.jsx
// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';

// const EventModal = ({ isOpen, selectedDate, selectedHoliday, onSave, onClose }) => {
//   const [title, setTitle] = useState('');

//   return (
//     <Modal show={isOpen} onHide={onClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>{selectedHoliday ? 'Holiday Info' : 'Add Event'}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <p><strong>Date:</strong> {selectedDate}</p>
//         {selectedHoliday ? (
//           <div>
//             🎉 <strong>{selectedHoliday.name}</strong><br/>
//             <em>Type:</em> {selectedHoliday.type}
//           </div>
//         ) : (
//           <Form>
//             <Form.Group controlId="eventTitle">
//               <Form.Label>Event Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//                 placeholder="Enter event title"
//               />
//             </Form.Group>
//           </Form>
//         )}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onClose}>Close</Button>
//         {!selectedHoliday && (
//           <Button
//             variant="primary"
//             onClick={() => {
//               onSave({ title, start: selectedDate });
//               setTitle('');
//             }}
//           >
//             Save Event
//           </Button>
//         )}
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default EventModal;











import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const EventModal = ({ isOpen, selectedDate, selectedHoliday, onClose }) => (
  <Modal show={isOpen} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>Holiday Info</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p><strong>Date:</strong> {selectedDate}</p>
      {selectedHoliday ? (
        <>
          <h5>{selectedHoliday.name}</h5>
          <p>{selectedHoliday.description || 'No description.'}</p>
        </>
      ) : (
        <p>No holiday on this date.</p>
      )}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>Close</Button>
    </Modal.Footer>
  </Modal>
);

export default EventModal;

