// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Form, Button, Row, Col, Image } from 'react-bootstrap';

// function EditEmployee({ onSave, onCancel }) {
//   const [image, setImage] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors }
//   } = useForm({
//     mode: 'onChange',
//     reValidateMode: 'onChange'
//   }); // real-time validation :contentReference[oaicite:1]{index=1}

//   const onSubmit = (data) => {
//     onSave && onSave({ ...data, profileImage: image });
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
//       <h4 className="mb-4 text-center">Edit Employee</h4>

//       <Row>
//         <Col md={6} className="text-center mb-4">
//           <Image
//             src={image || 'https://via.placeholder.com/150'}
//             roundedCircle
//             width={150}
//             height={150}
//           />
//           <Form.Group controlId="formFile" className="mt-2">
//             <Form.Control
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               isInvalid={!!errors.profileImage}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.profileImage?.message}
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//       </Row>

//       {/* Personal Info */}
//       <h5>Personal Info</h5>
//       <Row>
//         {['name','Fathername','Mothername','phone','email','Aadharnumber','dob','gender','bloodGroup','address'].map((field,idx) => {
//           const label = field === 'Fathername' ? 'Father Name'
//                       : field === 'Mothername' ? 'Mother Name'
//                       : field === 'Aadharnumber' ? 'Aadhar Number'
//                       : field === 'dob' ? 'Date of Birth'
//                       : field === 'bloodGroup' ? 'Blood Group'
//                       : field.charAt(0).toUpperCase() + field.slice(1);
//           const type = field === 'dob' ? 'date'
//                      : field === 'phone' || field==='Aadharnumber' ? 'text'
//                      : field === 'email' ? 'email'
//                      : field === 'address' ? undefined
//                      : 'text';
//           const pattern = field === 'phone'
//             ? { value: /^[0-9]{10}$/, message: 'Phone must be 10 digits' }
//             : field === 'Aadharnumber'
//             ? { value: /^[0-9]{12}$/, message: 'Aadhar must be 12 digits' }
//             : undefined;
//           const minLength = field === 'address' ? { value:10, message: 'At least 10 characters' } : undefined;

//           return (
//             <Col md={6} className="mb-3" key={field}>
//               <Form.Group>
//                 <Form.Label>{label}</Form.Label>
//                 <Form.Control
//                   type={type}
//                   as={field === 'address' ? 'textarea' : undefined}
//                   rows={field === 'address' ? 3 : undefined}
//                   {...register(field, {
//                     required: `${label} is required`,
//                     pattern,
//                     minLength
//                   })}
//                   isInvalid={!!errors[field]}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors[field]?.message}
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Col>
//           );
//         })}
//       </Row>

//       {/* Employment Info */}
//       <h5>Employment Details</h5>
//       <Row>
//         {['EmployeeID','PFNumber','ESINumber','InssuranceNumber','Employeerole','Branch','dept'].map(field => (
//           <Col md={6} className="mb-3" key={field}>
//             <Form.Group>
//               <Form.Label>{field.replace(/([A-Z])/g, ' $1').trim()}</Form.Label>
//               <Form.Control
//                 {...register(field, { required: `${field} is required` })}
//                 isInvalid={!!errors[field]}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors[field]?.message}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//         ))}

//         {/* Select controls */}
//         {['shift','designation','status'].map(field => {
//           const options = field === 'shift' ? ['Morning','Evening','Night']
//             : field === 'designation' ? ['Manager','Team Lead','Developer','Designer','Intern']
//             : ['active','inactive'];
//           return (
//             <Col md={6} className="mb-3" key={field}>
//               <Form.Group>
//                 <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
//                 <Form.Select
//                   {...register(field, { required: `${field} is required` })}
//                   defaultValue=""
//                   isInvalid={!!errors[field]}
//                 >
//                   <option value="" disabled>Select {field}</option>
//                   {options.map(o=> <option key={o} value={o}>{o}</option>)}
//                 </Form.Select>
//                 <Form.Control.Feedback type="invalid">
//                   {errors[field]?.message}
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Col>
//           );
//         })}

//         {/* Numeric + dates */}
//         <Col md={6} className="mb-3">
//           <Form.Group>
//             <Form.Label>Date of Joining</Form.Label>
//             <Form.Control
//               type="date"
//               {...register('dateOfJoining', { required: 'Date of Joining is required' })}
//               isInvalid={!!errors.dateOfJoining}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.dateOfJoining?.message}
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//         <Col md={6} className="mb-3">
//           <Form.Group>
//             <Form.Label>Date of Resignation</Form.Label>
//             <Form.Control
//               type="date"
//               {...register('dateOfResignation', { required: 'Date of Resignation is required' })}
//               isInvalid={!!errors.dateOfResignation}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.dateOfResignation?.message}
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//         <Col md={6} className="mb-3">
//           <Form.Group>
//             <Form.Label>Current Salary</Form.Label>
//             <Form.Control
//               type="number"
//               placeholder="Enter salary"
//               {...register('currentSalary', {
//                 required: 'Current Salary is required',
//                 min: { value: 0, message: 'Salary must be positive' }
//               })}
//               isInvalid={!!errors.currentSalary}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.currentSalary?.message}
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//         <Col md={12} className="mb-3">
//           <Form.Group>
//             <Form.Label>Skills</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter skills"
//               {...register('skills', { required: 'At least one skill is required' })}
//               isInvalid={!!errors.skills}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.skills?.message}
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//       </Row>

//       {/* Bank Details */}
//       <h5>Bank Details</h5>
//       <Row>
//         <Col md={6} className="mb-3">
//           <Form.Group>
//             <Form.Label>Bank Name</Form.Label>
//             <Form.Control
//               type="text"
//               {...register('bankName',{ required:'Bank name is required' })}
//               isInvalid={!!errors.bankName}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.bankName?.message}
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//         {['accountHolderName','accountNumber','ifscCode'].map(field => {
//           const label = field === 'ifscCode' ? 'IFSC Code' : field.replace(/([A-Z])/g,' $1').trim();
//           const pattern = field === 'accountNumber'
//             ? { value:/^[0-9]{9,18}$/, message:'9–18 digits required' }
//             : field === 'ifscCode'
//             ? { value:/^[A-Z]{4}0[A-Z0-9]{6}$/, message:'Invalid IFSC' }
//             : undefined;
//           const minLength = field==='accountHolderName'?{value:3,message:'At least 3 chars'}:undefined;
//           return (
//             <Col md={6} className="mb-3" key={field}>
//               <Form.Group>
//                 <Form.Label>{label}</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder={`Enter ${label}`}
//                   {...register(field, {
//                     required: `${label} is required`,
//                     pattern,
//                     minLength
//                   })}
//                   isInvalid={!!errors[field]}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors[field]?.message}
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Col>
//           );
//         })}
//         <Col md={6} className="mb-3">
//           <Form.Group>
//             <Form.Label>Bank Pass Book</Form.Label>
//             <Form.Control
//               type="file"
//               accept="image/*,application/pdf"
//               {...register('bankPassbook', { required: 'Passbook is required' })}
//               isInvalid={!!errors.bankPassbook}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.bankPassbook?.message}
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//       </Row>

//       {/* Buttons */}
//       <div className="d-flex justify-content-end mt-4">
//         <Button variant="secondary" className="me-2" onClick={onCancel}>Cancel</Button>
//         <Button variant="primary" type="submit">Save</Button>
//       </div>
//     </Form>
//   );
// }

// export default EditEmployee;






import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col, Image } from 'react-bootstrap';

// function EditEmployeeForm({ initialData, onSave, onCancel }) {
//   const [imagePreview, setImagePreview] = useState(initialData?.profileImage || null);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     watch,
//     formState: { errors, isDirty }
//   } = useForm({
//     mode: 'onChange',
//     reValidateMode: 'onChange',
//     defaultValues: initialData || {}
//   });

//   // Reset form values when initialData changes
//   useEffect(() => {
//     if (initialData) {
//       reset(initialData);
//       setImagePreview(initialData.profileImage || null);
//     }
//   }, [initialData, reset]); // ensures form updates with new data :contentReference[oaicite:5]{index=5}

//   // Watch file input and preview new image
//   const watchedFile = watch('profileImageFile');
//   useEffect(() => {
//     if (watchedFile && watchedFile.length > 0 && watchedFile[0] instanceof File) {
//       const reader = new FileReader();
//       reader.onloadend = () => setImagePreview(reader.result);
//       reader.readAsDataURL(watchedFile[0]);
//     }
//   }, [watchedFile]);

//   const onSubmit = data => {
//     const file = data.profileImageFile?.[0];
//     const finalImage = file ? imagePreview : (initialData?.profileImage || null);
//     const payload = {
//       ...data,
//       profileImage: finalImage
//     };
//     delete payload.profileImageFile;
//     onSave && onSave(payload);
//     reset();
//     setImagePreview(null);
//   };


function EditEmployeeForm({ initialData, onSave, onCancel }) {
  const [imagePreview, setImagePreview] = useState(initialData?.profileImage || null);

  const { register, handleSubmit, reset, watch, formState: { errors, isDirty } } = useForm({
    mode: 'onChange',
    defaultValues: initialData || {}
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
      setImagePreview(initialData.profileImage || null);
    } else {
      reset({});
      setImagePreview(null);
    }
  }, [initialData, reset]);

  const watchedFile = watch('profileImageFile');
  useEffect(() => {
    if (watchedFile && watchedFile.length > 0 && watchedFile[0] instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(watchedFile[0]);
    }
  }, [watchedFile]);

  const onSubmit = data => {
    const file = data.profileImageFile?.[0];
    const finalImage = file ? imagePreview : (initialData?.profileImage || null);

    const payload = { ...initialData, ...data, profileImage: finalImage };
    delete payload.profileImageFile;

    onSave && onSave(payload);

    setTimeout(() => {
      reset(initialData || {});
      setImagePreview(initialData?.profileImage || null);
    });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded shadow-sm bg-white">
      <h4 className="mb-4 text-center">{initialData ? 'Edit Employee' : 'Create Employee'}</h4>

      <Row>
        <Col md={6} className="text-center mb-4">
          <Image src={imagePreview || 'https://via.placeholder.com/150'} roundedCircle width={150} height={150} />
          <Form.Group controlId="formProfileImage" className="mt-2">
            <Form.Control
              type="file"
              accept="image/*"
              {...register('profileImageFile', { required: !initialData })}
              isInvalid={!!errors.profileImageFile}
            />
            <Form.Control.Feedback type="invalid">
              {errors.profileImageFile?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <h5>Personal Info</h5>
      <Row>
        {['name','Fathername','Mothername','phone','email','Aadharnumber','dob','gender','bloodGroup','address'].map(field => {
          const label = {
            Fathername: 'Father Name',
            Mothername: 'Mother Name',
            Aadharnumber: 'Aadhar Number',
            dob: 'Date of Birth',
            bloodGroup: 'Blood Group'
          }[field] || field.charAt(0).toUpperCase() + field.slice(1);
          const type = field === 'dob' ? 'date'
                     : field === 'email' ? 'email'
                     : (field === 'phone' || field === 'Aadharnumber') ? 'text'
                     : undefined;

          const pattern = field==='phone'
            ? { value: /^[0-9]{10}$/, message: 'Phone must be 10 digits' }
            : field==='Aadharnumber'
            ? { value: /^[0-9]{12}$/, message: 'Aadhar must be 12 digits' }
            : undefined;
          const minLength = field==='address'
            ? { value:10, message:'At least 10 characters' }
            : undefined;

          return (
            <Col md={6} className="mb-3" key={field}>
              <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  type={type}
                  as={field==='address' ? 'textarea' : undefined}
                  rows={field==='address' ? 3 : undefined}
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

        {['shift','designation','status'].map(field => {
          const options = field === 'shift'
            ? ['Morning','Evening','Night']
            : field === 'designation'
            ? ['Manager','Team Lead','Developer','Designer','Intern']
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
                  {options.map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors[field]?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          );
        })}

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
          const label = field==='ifscCode' ? 'IFSC Code' : field.replace(/([A-Z])/g,' $1').trim();
          const pattern = field==='accountNumber'
            ? { value:/^[0-9]{9,18}$/, message:'9–18 digits required' }
            : field==='ifscCode'
            ? { value:/^[A-Z]{4}0[A-Z0-9]{6}$/, message:'Invalid IFSC' }
            : undefined;
          const minLength = field==='accountHolderName'
            ? { value:3, message:'At least 3 chars' }
            : undefined;
          return (
            <Col md={6} className="mb-3" key={field}>
              <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`Enter ${label}`}
                  {...register(field,{ required:`${label} is required`, pattern, minLength })}
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

      <div className="d-flex justify-content-end mt-4">
        <Button variant="secondary" className="me-2" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" disabled={initialData && !isDirty}>
          {initialData ? 'Update' : 'Save'}
        </Button>
      </div>
    </Form>
  );
}

export default EditEmployeeForm;






