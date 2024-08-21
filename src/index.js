import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function FormComponent(){
  return(
    <div class="employee-form">
      <h1>Employee Form</h1>
      <div class="form-content">
        <div class="content">
          <label>First Name</label>
          <input type="text" placeholder='Enter your First Name' />
        </div>
        <div class="content">
          <label>Middle Name</label>
          <input type="text" placeholder='Enter your Middle Name' />
        </div>
        <div class="content">
          <label>Last Name</label>
          <input type="text" placeholder='Enter your Last Name' />
        </div>
        <div class="content">
          <label>Date of Birth</label>
          <input type="text" placeholder='Enter your date of birth' />
        </div>
        <div class="content">
          <label>Email</label>
          <input type="text" placeholder='Enter your email' />
        </div>
        <div class="content">
          <label>Phone Number</label>
          <input type="text" placeholder='Enter your Phone number' />
        </div>
        <div class="content">
          <label>Gender</label>
          <select id="gender">
            <option>choose your gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>
        <div class="content">
          <label>Start Time</label>
          <input type="time" />
        </div>
        <div class="content">
          <label>End Time</label>
          <input type="time" />
        </div>
        <div class="content">
          <label>Job Position</label>
          <input type="text" placeholder='Enter your position' />
        </div>
        <div class="content">
          <label>Select Team</label>
          <select id="team">
            <option>choose your team</option>
            <option>Sales</option>
            <option>Manufacture</option>
            <option>Executive</option>
            <option>Products</option>
            <option>Customer care</option>
          </select>
        </div>
        <div class="content">
          <label>Designation</label>
          <select id="designation">
            <option>choose your designation</option>
            <option>Manager</option>
            <option>Team Leader</option>
            <option>Assistant</option>
            <option>Developer</option>
            <option>Team Member</option>
          </select>
        </div>
        <div class="content">
          <label>Billable Hours</label>
          <input type="text" placeholder='Enter your billable hours' />
        </div>
        <div className='last'>
          <label>is billable</label>
          <input type="checkbox" />
        </div>
      </div>
      <button>Submit</button>
    </div>
  );
}

ReactDOM.render(<FormComponent />,document.getElementById("root"));



// import React, { useState } from 'react';

// const FormComponent = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length === 0) {
//       console.log('Form Submitted Successfully');
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.name) errors.name = 'Name is required';
//     if (!formData.email) errors.email = 'Email is required';
//     if (!formData.password) errors.password = 'Password is required';
//     return errors;
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           style={{ borderColor: errors.name ? 'red' : 'black' }}
//         />
//         {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
//       </div>

//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           style={{ borderColor: errors.email ? 'red' : 'black' }}
//         />
//         {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
//       </div>

//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           style={{ borderColor: errors.password ? 'red' : 'black' }}
//         />
//         {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormComponent;

