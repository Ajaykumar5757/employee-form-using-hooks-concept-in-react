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
