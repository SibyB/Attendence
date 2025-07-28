// import React, { useState, useEffect } from 'react';
// import { Table, Button, Pagination } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function Employee() {
//   const [employees, setEmployees] = useState(() => {
//     return JSON.parse(localStorage.getItem('employees')) || [];
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 10;

//   useEffect(() => {
//     localStorage.setItem('employees', JSON.stringify(employees));
//   }, [employees]);

//   const totalPages = Math.max(1, Math.ceil(employees.length / pageSize));
//   const paginated = employees.slice((currentPage - 1) * pageSize, currentPage * pageSize);

//   return (
//     <div className="container mt-4">
//       <div className='d-flex gap-5'>
//       <h2 >Employee List</h2>
     
//       <Link to="/page">
//       <Button variant="primary">Add Employee</Button>
//       </Link>
//       </div>

//       <Table striped bordered hover responsive className="mt-3">
//         <thead>
//           <tr>
//             <th>ID</th><th>Name</th><th>Employee ID</th><th>Branch</th><th>Department</th><th>Designation</th><th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {paginated.map((emp) => (
//             <tr key={emp.id}>
//               <td>{emp.id}</td>
//               <td>{emp.name}</td>
//               <td>{emp.EmployeeID}</td>
//                 <td>{emp.Branch}</td>
//               <td>{emp.dept}</td>
//               <td>{emp.designation}</td>
//               <td>{emp.status}</td>
              
            
              
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       <Pagination>
//         <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
//         <Pagination.Prev onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} />
//         {Array.from({ length: totalPages }, (_, i) => (
//           <Pagination.Item
//             key={i + 1}
//             active={i + 1 === currentPage}
//             onClick={() => setCurrentPage(i + 1)}
//           >
//             {i + 1}
//           </Pagination.Item>
//         ))}
//         <Pagination.Next onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} />
//         <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
//       </Pagination>
//     </div>
//   );
// }

// export default Employee;











import React, { useState, useEffect } from 'react';
import { Table, Button, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

function Employee() {
  const [employees, setEmployees] = useState(() => JSON.parse(localStorage.getItem('employees')) || []);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleDelete = (id) => {
    if (window.confirm('Delete this employee?')) {
      setEmployees(prev => prev.filter(emp => emp.id !== id));
    }
  };

  const totalPages = Math.max(1, Math.ceil(employees.length / pageSize));
  const paginated = employees.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="container mt-4">
      <div className="d-flex gap-5">
        <h2>Employee List</h2>
        <Link to="/page"><Button variant="primary">Add Employee</Button></Link>
      </div>

      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Employee ID</th><th>Branch</th>
            <th>Department</th><th>Designation</th><th>Status</th><th>Actions</th><th>Shift</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.EmployeeID}</td>
              <td>{emp.Branch}</td>
              <td>{emp.dept}</td>
              <td>{emp.designation}</td>
              <td>{emp.status}</td>
              <td>{emp.shift}</td>
              <td>
                <Link to={`/view/${emp.id}`} title="View">
                  <Button variant="outline-info" size="sm" className="me-2">
                    <AiOutlineEye />
                  </Button>
                </Link>
                <Link to={`/edit/${emp.id}`} title="Edit">
                  <Button variant="outline-secondary" size="sm" className="me-2">
                    <PencilSquare />
                  </Button>
                </Link>
                <Button
                  variant="outline-danger"
                  size="sm"
                  title="Delete"
                  onClick={() => handleDelete(emp.id)}
                >
                  <Trash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
        <Pagination.Prev onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} />
        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination.Item
            key={i + 1}
            active={i + 1 === currentPage}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
      </Pagination>
    </div>
  );
}

export default Employee;
