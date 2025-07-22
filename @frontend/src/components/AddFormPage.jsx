import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddEmployeeForm from './AddEmployeeForm';

function AddFormPage() {
  const navigate = useNavigate();

  const handleSave = (empData) => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const nextId = employees.length ? employees[employees.length - 1].id + 1 : 1;
    const updated = [...employees, { id: nextId, ...empData }];
    localStorage.setItem('employees', JSON.stringify(updated));
    navigate('/employee'); // ✅ Go back to employee list after save
  };

  return (
    <div className="container mt-4">
      <h3>Add New Employee</h3>
      <AddEmployeeForm
        onSave={handleSave}
        onCancel={() => navigate('/employee')}
      />
    </div>
  );
}

export default AddFormPage;
