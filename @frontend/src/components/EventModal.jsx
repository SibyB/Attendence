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

