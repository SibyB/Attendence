import React, { useState } from 'react';
import { Table, Button, Modal, Form, Pagination } from 'react-bootstrap';

function Employee() {
  const [employees, setEmployees] = useState([
    { id:1, name:'Alice', dept:'Engineering' },
    { id:2, name:'Bob', dept:'Marketing' },
    // ... initial data
  ]);
  const [show, setShow] = useState(false);
  const [newEmp, setNewEmp] = useState({ name:'', dept:'' });
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const totalPages = Math.ceil(employees.length / pageSize);
  const paginated = employees.slice((currentPage-1)*pageSize, currentPage*pageSize);

  const handleSave = () => {
    if (!newEmp.name || !newEmp.dept) return;
    const nextId = employees.length
      ? employees[employees.length - 1].id + 1
      : 1;
    setEmployees([...employees, { id: nextId, ...newEmp }]);
    setShow(false);
    setNewEmp({ name:'', dept:'' });
    setCurrentPage(totalPages);
  };

  return (
    <div className="container mt-4">
      <h2>Employee List</h2>
      <Button variant="primary" onClick={() => setShow(true)}>
        Add Employee
      </Button>

      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Department</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.dept}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage===1}/>
        <Pagination.Prev onClick={() => setCurrentPage(p => Math.max(1,p-1))} disabled={currentPage===1}/>
        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination.Item
            key={i+1}
            active={i+1===currentPage}
            onClick={() => setCurrentPage(i+1)}
          >
            {i+1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => setCurrentPage(p => Math.min(totalPages,p+1))} disabled={currentPage===totalPages}/>
        <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage===totalPages}/>
      </Pagination>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={newEmp.name}
                onChange={e => setNewEmp({ ...newEmp, name: e.target.value })}
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Department</Form.Label>
              <Form.Control
                value={newEmp.dept}
                onChange={e => setNewEmp({ ...newEmp, dept: e.target.value })}
                placeholder="Enter department"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Employee;
