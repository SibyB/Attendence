// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Form, Button, Row, Col, Image } from 'react-bootstrap';

// function AddEmployeeForm({ onSave, onCancel }) {
//   const [image, setImage] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors }
//   } = useForm();

//   const onSubmit = (data) => {
//     if (typeof onSave === 'function') {
//       onSave({ ...data, profileImage: image });
//     }
//     reset();
//     setImage(null);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type.startsWith('image/')) {
//       const reader = new FileReader();
//       reader.onloadend = () => setImage(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded shadow-sm bg-white">
//       <h4 className="mb-4 text-center">Create Employee</h4>

//       {/* Profile Image Upload */}
//       <Col md={6}>
//       <div className="mb-4 text-center">
//         <Image
//           src={image || 'https://via.placeholder.com/120'}
//           roundedCircle
//           width={150}
//           height={120}
//           border={2}
          
//         //   alt="Profile"
//         />
//         <Form.Group controlId="formFile" className="mt-2">
//           <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
//         </Form.Group>
//       </div>
//       </Col>

//       {/* Personal Info */}
//       <h5 className="mt-4">Personal Info</h5>
//       <Row>
//         <Col md={6}>
//           <Form.Group className="mb-3">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               {...register('name', { required: 'Name is required' })}
//               placeholder="Enter full name"
//             />
//             {errors.name && <small className="text-danger">{errors.name.message}</small>}
//           </Form.Group>
//         </Col>

//         <Col md={6}>
//           <Form.Group className="mb-3">
//             <Form.Label>Father Name</Form.Label>
//             <Form.Control
//               {...register('Fathername', { required: 'Father name is required' })}
//               placeholder="Enter father name"
//             />
//             {errors.Fathername && <small className="text-danger">{errors.Fathername.message}</small>}
//           </Form.Group>
//         </Col>

//         <Col md={6}>
//           <Form.Group className="mb-3">
//             <Form.Label>Mother Name</Form.Label>
//             <Form.Control
//               {...register('Mothername', { required: 'Mother name is required' })}
//               placeholder="Enter mother name"
//             />
//             {errors.Mothername && <small className="text-danger">{errors.Mothername.message}</small>}
//           </Form.Group>
//         </Col>

//         <Col md={6}>
//           <Form.Group className="mb-3">
//             <Form.Label>Phone</Form.Label>
//             <Form.Control
            
//               {...register('phone', {
                
//                 required: 'Phone number is required',
//                 pattern: {
//                   value: /^[0-9]{10}$/,
//                   message: 'Phone must be 10 digits'
//                 }
//               })}
//               placeholder="Enter phone number"
//               onKeyDown={(e) => {
//                 if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
//                   e.preventDefault();
//                 }
//               }}
//             />
//             {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
//           </Form.Group>
//         </Col>

//         <Col md={6}>
//           <Form.Group className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               {...register('email', {
//                 required: 'Email is required',
//                 pattern: {
//                   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                   message: 'Invalid email format'
//                 }
//               })}
//               placeholder="Enter email"
//             />
//             {errors.email && <small className="text-danger">{errors.email.message}</small>}
//           </Form.Group>
//         </Col>

//         <Col md={6}>
//           <Form.Group className="mb-3">
//             <Form.Label>Aadhar Number</Form.Label>
//             <Form.Control
//               {...register('Aadharnumber', {
//                 required: 'Aadhar number is required',
//                 pattern: {
//                   value: /^[0-9]{12}$/,
//                   message: 'Aadhar must be 12 digits'
//                 }
//               })}
//               placeholder="Enter Aadhar number"
//               maxLength={12}
//               onKeyDown={(e) => {
//                 if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
//                   e.preventDefault();
//                 }
//               }}
//             />
//             {errors.Aadharnumber && <small className="text-danger">{errors.Aadharnumber.message}</small>}
//           </Form.Group>
//         </Col>

//         <Col md={6}>
//           <Form.Group className="mb-3">
//             <Form.Label>Date of Birth</Form.Label>
//             <Form.Control
//               type="date"
//               {...register('dob', {
//                 required: 'Date of Birth is required'
//               })}
//             />
//             {errors.dob && <small className="text-danger">{errors.dob.message}</small>}
//           </Form.Group>
//         </Col>

//         <Col md={6}>
//           <Form.Group className="mb-3">
//             <Form.Label>Gender</Form.Label>
//             <Form.Select
//               {...register('gender', { required: 'Gender is required' })}
//               defaultValue=""
//             >
//               <option value="" disabled>Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </Form.Select>
//             {errors.gender && <small className="text-danger">{errors.gender.message}</small>}
//           </Form.Group>
//         </Col>

//         <Col md={6}>
//           <Form.Group className="mb-3">
//             <Form.Label>Blood Group</Form.Label>
//             <Form.Select
//               {...register('bloodGroup', { required: 'Blood group is required' })}
//               defaultValue=""
//             >
//               <option value="" disabled>Select Blood Group</option>
//               <option value="A+">A+</option>
//               <option value="A-">A-</option>
//               <option value="B+">B+</option>
//               <option value="B-">B-</option>
//               <option value="AB+">AB+</option>
//               <option value="AB-">AB-</option>
//               <option value="O+">O+</option>
//               <option value="O-">O-</option>
//             </Form.Select>
//             {errors.bloodGroup && <small className="text-danger">{errors.bloodGroup.message}</small>}
//           </Form.Group>
//         </Col>

       

//         <Col md={6}>
//           <Form.Group className="mb-3">
//             <Form.Label>Address</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={3}
//               {...register('address', {
//                 required: 'Address is required',
//                 minLength: {
//                   value: 10,
//                   message: 'Address must be at least 10 characters long'
//                 }
//               })}
//               placeholder="Enter full address"
//             />
//             {errors.address && <small className="text-danger">{errors.address.message}</small>}
//           </Form.Group>
//         </Col>
//       </Row>

//       {/* Employment Info */}
//       <h5 className="mt-4">Employment Details</h5>
//       <Row>
//         <Col md={6}>
//           <Form.Group className="mb-3">
//             <Form.Label>Employee ID</Form.Label>
//             <Form.Control
//               {...register('EmployeeID', {
//                 required: 'Employee ID is required'
//               })}
//               placeholder="Enter employee ID"
//             />
//             {errors.EmployeeID && <small className="text-danger">{errors.EmployeeID.message}</small>}
//           </Form.Group>
//         </Col>


//         <Col md={6}>
//           <Form.Group className="mb-3">
//             <Form.Label>PF Number</Form.Label>
//             <Form.Control
//               {...register('PFNumber', {
//                 required: 'PF Number ID is required'
//               })}
//               placeholder="Enter PF Number"
//             />
//             {errors.PFNumber && <small className="text-danger">{errors.PFNumber.message}</small>}
//           </Form.Group>
//         </Col>

//         <Col md={6}>
//           <Form.Group className="mb-3">
//             <Form.Label>ESI Number</Form.Label>
//             <Form.Control
//               {...register('ESINumber', {
//                 required: 'ESI Number is required'
//               })}
//               placeholder="Enter ESI Number"
//             />
//             {errors.ESINumber && <small className="text-danger">{errors.ESINumber.message}</small>}
//           </Form.Group>
//         </Col>


//          <Col md={6}>
//           <Form.Group className="mb-3">
//             <Form.Label>Medical Inssurance Number</Form.Label>
//             <Form.Control
//               {...register('InssuranceNumber', {
//                 required: 'Insurance Numberis required'
//               })}
//               placeholder="Enter Medical Inssurance Number"
//             />
//             {errors.InssuranceNumber && <small className="text-danger">{errors.InssuranceNumber.message}</small>}
//           </Form.Group>
//         </Col>

//          <Col md={6}>
//           <Form.Group className="mb-3">
//             <Form.Label>Employee Role</Form.Label>
//             <Form.Control
//               {...register('Employeerole', {
//                 required: 'Employee Role is required'
//               })}
//               placeholder="Enter Employee Role"
//             />
//             {errors.Employeerole && <small className="text-danger">{errors.Employeerole.message}</small>}
//           </Form.Group>
//         </Col>
         
         
//          <Col md={6}>
//           <Form.Group className="mb-3">
//             <Form.Label>Branch</Form.Label>
//             <Form.Control
//               {...register('Branch', {
//                 required: 'Branch is required'
//               })}
//               placeholder="Enter Branch"
//             />
//             {errors.Branch && <small className="text-danger">{errors.Branch.message}</small>}
//           </Form.Group>
//         </Col>

//          <Col md={6}>
//           <Form.Group className="mb-3">
//              <Form.Label>Department</Form.Label>
//             <Form.Control
//               {...register('dept', { required: 'Department is required' })}
//               placeholder="Enter department"
//             />
//             {errors.dept && <small className="text-danger">{errors.dept.message}</small>}
//           </Form.Group>
//         </Col>

//        <Col md={6}>
//   <Form.Group className="mb-3">
//     <Form.Label>Shift</Form.Label>
//     <Form.Select
//       {...register('shift', { required: 'Shift is required' })}
//       defaultValue=""
//     >
//       <option value="" disabled>Select shift</option>
//       <option value="Morning">Morning</option>
//       <option value="Evening">Evening</option>
//       <option value="Night">Night</option>
//     </Form.Select>
//     {errors.shift && <small className="text-danger">{errors.shift.message}</small>}
//   </Form.Group>
// </Col>



// <Col md={6}>
//   <Form.Group className="mb-3">
//     <Form.Label>Designation</Form.Label>
//     <Form.Select
//       {...register('designation', { required: 'Designation is required' })}
//       defaultValue=""
//     >
//       <option value="" disabled>Select designation</option>
//       <option value="Manager">Manager</option>
//       <option value="Team Lead">Team Lead</option>
//       <option value="Developer">Developer</option>
//       <option value="Designer">Designer</option>
//       <option value="Intern">Intern</option>
//     </Form.Select>
//     {errors.designation && <small className="text-danger">{errors.designation.message}</small>}
//   </Form.Group>
// </Col>

// <Col md={6}>
//   <Form.Group className="mb-3">
//     <Form.Label>Date of Joining</Form.Label>
//     <Form.Control
//       type="date"
//       {...register('dateOfJoining', { required: 'Date of Joining is required' })}
//     />
//     {errors.dateOfJoining && <small className="text-danger">{errors.dateOfJoining.message}</small>}
//   </Form.Group>
// </Col>

// <Col md={6}>
//   <Form.Group className="mb-3">
//     <Form.Label>Date of Resignation</Form.Label>
//     <Form.Control
//       type="date"
//       {...register('dateOfResignation', { required: 'Date of Resignation is required' })}
//     />
//     {errors.dateOfResignation && (
//       <small className="text-danger">{errors.dateOfResignation.message}</small>
//     )}
//   </Form.Group>
// </Col>

// <Col md={6}>
//   <Form.Group className="mb-3">
//     <Form.Label>Current Salary</Form.Label>
//     <Form.Control
//       type="number"
//       placeholder="Enter current salary"
//       {...register('currentSalary', {
//         required: 'Current Salary is required',
//         min: { value: 0, message: 'Salary must be a positive number' },
//       })}
//     />
//     {errors.currentSalary && (
//       <small className="text-danger">{errors.currentSalary.message}</small>
//     )}
//   </Form.Group>
// </Col>

// <Col md={6}>
//   <Form.Group className="mb-3">
//     <Form.Label>Employee Status</Form.Label>
//     <Form.Select
//       {...register('status', { required: 'Employee status is required' })}
//     >
//       <option value="">Select status</option>
//       <option value="active">Active</option>
//       <option value="inactive">Inactive</option>
//     </Form.Select>
//     {errors.status && (
//       <small className="text-danger">{errors.status.message}</small>
//     )}
//   </Form.Group>
// </Col>

// <Col md={12}>
//   <Form.Group className="mb-3">
//     <Form.Label>Skills</Form.Label>
//     <Form.Control
//       type="text"
//       placeholder="Enter skills (e.g. HTML, CSS, JavaScript)"
//       {...register('skills', { required: 'At least one skill is required' })}
//     />
//     {errors.skills && (
//       <small className="text-danger">{errors.skills.message}</small>
//     )}
//   </Form.Group>
// </Col>

//       </Row>



//  <h5 className="mt-4">Bank Details</h5>
//       <Row>
        
//         <Col md={6}>
//   <Form.Group className="mb-3">
//     <Form.Label>Bank Name</Form.Label>
//     <Form.Control
//       type="text"
//       placeholder="Enter bank name"
//       {...register('bankName', { required: 'Bank name is required' })}
//     />
//     {errors.bankName && (
//       <small className="text-danger">{errors.bankName.message}</small>
//     )}
//   </Form.Group>
// </Col>


//         <Col md={6}>
//   <Form.Group className="mb-3">
//     <Form.Label>Account Holder Name</Form.Label>
//     <Form.Control
//       type="text"
//       placeholder="Enter account holder name"
//       {...register('accountHolderName', {
//         required: 'Account holder name is required',
//         minLength: {
//           value: 3,
//           message: 'Name must be at least 3 characters'
//         }
//       })}
//     />
//     {errors.accountHolderName && (
//       <small className="text-danger">{errors.accountHolderName.message}</small>
//     )}
//   </Form.Group>
// </Col>


// <Col md={6}>
//   <Form.Group className="mb-3">
//     <Form.Label>Account Number</Form.Label>
//     <Form.Control
//       type="text"
//       placeholder="Enter account number"
//       {...register('accountNumber', {
//         required: 'Account number is required',
//         pattern: {
//           value: /^[0-9]{9,18}$/,
//           message: 'Enter a valid account number (9–18 digits)'
//         }
//       })}
//     />
//     {errors.accountNumber && (
//       <small className="text-danger">{errors.accountNumber.message}</small>
//     )}
//   </Form.Group>
// </Col>



//          <Col md={6}>
//   <Form.Group className="mb-3">
//     <Form.Label>IFSC Code</Form.Label>
//     <Form.Control
//       type="text"
//       placeholder="Enter IFSC code"
//       {...register('ifscCode', {
//         required: 'IFSC code is required',
//         pattern: {
//           value: /^[A-Z]{4}0[A-Z0-9]{6}$/,
//           message: 'Enter a valid IFSC code (e.g., HDFC0001234)'
//         }
//       })}
//     />
//     {errors.ifscCode && (
//       <small className="text-danger">{errors.ifscCode.message}</small>
//     )}
//   </Form.Group>
// </Col>

//          <Col md={6}>
//   <Form.Group className="mb-3">
//     <Form.Label>Bank Pass Book</Form.Label>
//     <Form.Control
//       type="file"
//       accept="image/*,application/pdf"
//       {...register('bankPassbook', {
//         required: 'Bank Pass Book is required',
//       })}
//     />
//     {errors.bankPassbook && (
//       <small className="text-danger">{errors.bankPassbook.message}</small>
//     )}
//   </Form.Group>
// </Col>
         
// </Row>

//       {/* Buttons */}
//       <div className="d-flex justify-content-end mt-4">
//         <Button variant="secondary" className="me-2" onClick={onCancel}>
//           Cancel
//         </Button>
//         <Button variant="primary" type="submit">
//           Save
//         </Button>
//       </div>
//     </Form>
//   );
// }

// export default AddEmployeeForm;




import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col, Image } from 'react-bootstrap';

function AddEmployeeForm({ onSave, onCancel }) {
  const [image, setImage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange'
  }); // real-time validation :contentReference[oaicite:1]{index=1}

  const onSubmit = (data) => {
    onSave && onSave({ ...data, profileImage: image });
    reset();
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded shadow-sm bg-white">
      <h4 className="mb-4 text-center">Create Employee</h4>

      <Row>
        <Col md={6} className="text-center mb-4">
          <Image
            src={image || 'https://via.placeholder.com/150'}
            roundedCircle
            width={150}
            height={150}
          />
          <Form.Group controlId="formFile" className="mt-2">
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              isInvalid={!!errors.profileImage}
              
            />
            <Form.Control.Feedback type="invalid">
              {errors.profileImage?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      {/* Personal Info */}
      <h5>Personal Info</h5>
      <Row>
        {['name','Fathername','Mothername','phone','email','Aadharnumber','dob','gender','bloodGroup','address'].map((field,idx) => {
          const label = field === 'Fathername' ? 'Father Name'
                      : field === 'Mothername' ? 'Mother Name'
                      : field === 'Aadharnumber' ? 'Aadhar Number'
                      : field === 'dob' ? 'Date of Birth'
                      : field === 'bloodGroup' ? 'Blood Group'
                      : field.charAt(0).toUpperCase() + field.slice(1);
          const type = field === 'dob' ? 'date'
                     : field === 'phone' || field==='Aadharnumber' ? 'text'
                     : field === 'email' ? 'email'
                     : field === 'address' ? undefined
                     : 'text';
          const pattern = field === 'phone'
            ? { value: /^[0-9]{10}$/, message: 'Phone must be 10 digits' }
            : field === 'Aadharnumber'
            ? { value: /^[0-9]{12}$/, message: 'Aadhar must be 12 digits' }
            : undefined;
          const minLength = field === 'address' ? { value:10, message: 'At least 10 characters' } : undefined;

          return (
            <Col md={6} className="mb-3" key={field}>
              <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  type={type}
                  as={field === 'address' ? 'textarea' : undefined}
                  rows={field === 'address' ? 3 : undefined}
                  {...register(field, {
                    required: `${label} is required`,
                    pattern,
                    minLength
                  })}
                  isInvalid={!!errors[field]}
                />
                <Form.Control.Feedback type="invalid">
                  {errors[field]?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          );
        })}
      </Row>

      {/* Employment Info */}
      <h5>Employment Details</h5>
      <Row>
        {['EmployeeID','PFNumber','ESINumber','InssuranceNumber','Employeerole','Branch','dept'].map(field => (
          <Col md={6} className="mb-3" key={field}>
            <Form.Group>
              <Form.Label>{field.replace(/([A-Z])/g, ' $1').trim()}</Form.Label>
              <Form.Control
                {...register(field, { required: `${field} is required` })}
                isInvalid={!!errors[field]}
              />
              <Form.Control.Feedback type="invalid">
                {errors[field]?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        ))}

        {/* Select controls */}
        {['shift','designation','status'].map(field => {
          const options = field === 'shift' ? ['Morning','Evening','Night']
            : field === 'designation' ? ['Manager','Team Lead','Developer','Designer','Intern']
            : ['active','inactive'];
          return (
            <Col md={6} className="mb-3" key={field}>
              <Form.Group>
                <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                <Form.Select
                  {...register(field, { required: `${field} is required` })}
                  defaultValue=""
                  isInvalid={!!errors[field]}
                >
                  <option value="" disabled>Select {field}</option>
                  {options.map(o=> <option key={o} value={o}>{o}</option>)}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors[field]?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          );
        })}

        {/* Numeric + dates */}
        <Col md={6} className="mb-3">
          <Form.Group>
            <Form.Label>Date of Joining</Form.Label>
            <Form.Control
              type="date"
              {...register('dateOfJoining', { required: 'Date of Joining is required' })}
              isInvalid={!!errors.dateOfJoining}
            />
            <Form.Control.Feedback type="invalid">
              {errors.dateOfJoining?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group>
            <Form.Label>Date of Resignation</Form.Label>
            <Form.Control
              type="date"
              {...register('dateOfResignation', { required: 'Date of Resignation is required' })}
              isInvalid={!!errors.dateOfResignation}
            />
            <Form.Control.Feedback type="invalid">
              {errors.dateOfResignation?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group>
            <Form.Label>Current Salary</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter salary"
              {...register('currentSalary', {
                required: 'Current Salary is required',
                min: { value: 0, message: 'Salary must be positive' }
              })}
              isInvalid={!!errors.currentSalary}
            />
            <Form.Control.Feedback type="invalid">
              {errors.currentSalary?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={12} className="mb-3">
          <Form.Group>
            <Form.Label>Skills</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter skills"
              {...register('skills', { required: 'At least one skill is required' })}
              isInvalid={!!errors.skills}
            />
            <Form.Control.Feedback type="invalid">
              {errors.skills?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      {/* Bank Details */}
      <h5>Bank Details</h5>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group>
            <Form.Label>Bank Name</Form.Label>
            <Form.Control
              type="text"
              {...register('bankName',{ required:'Bank name is required' })}
              isInvalid={!!errors.bankName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.bankName?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        {['accountHolderName','accountNumber','ifscCode'].map(field => {
          const label = field === 'ifscCode' ? 'IFSC Code' : field.replace(/([A-Z])/g,' $1').trim();
          const pattern = field === 'accountNumber'
            ? { value:/^[0-9]{9,18}$/, message:'9–18 digits required' }
            : field === 'ifscCode'
            ? { value:/^[A-Z]{4}0[A-Z0-9]{6}$/, message:'Invalid IFSC' }
            : undefined;
          const minLength = field==='accountHolderName'?{value:3,message:'At least 3 chars'}:undefined;
          return (
            <Col md={6} className="mb-3" key={field}>
              <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`Enter ${label}`}
                  {...register(field, {
                    required: `${label} is required`,
                    pattern,
                    minLength
                  })}
                  isInvalid={!!errors[field]}
                />
                <Form.Control.Feedback type="invalid">
                  {errors[field]?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          );
        })}
        <Col md={6} className="mb-3">
          <Form.Group>
            <Form.Label>Bank Pass Book</Form.Label>
            <Form.Control
              type="file"
              accept="image/*,application/pdf"
              {...register('bankPassbook', { required: 'Passbook is required' })}
              isInvalid={!!errors.bankPassbook}
            />
            <Form.Control.Feedback type="invalid">
              {errors.bankPassbook?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      {/* Buttons */}
      <div className="d-flex justify-content-end mt-4">
        <Button variant="secondary" className="me-2" onClick={onCancel}>Cancel</Button>
        <Button variant="primary" type="submit">Save</Button>
      </div>
    </Form>
  );
}

export default AddEmployeeForm;




















