import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthday: "",
    email: "",
    phone: "",
    startTime: "",
    endTime: "",
    gender: "",
    billableHours: "",
    designation: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthday: "",
    email: "",
    phone: "",
    startTime: "",
    endTime: "",
    gender: "",
    billableHours: "",
    designation: "",
  });

  useEffect(() => {
    const validateField = (name, value) => {
      let error = "";

      if (!value) {
        error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        document.getElementsByName(name)[0].classList.add("red");
      } else {
        document.getElementsByName(name)[0].classList.remove("red");
      }

      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    };

    // Validate each field when its value changes
    validateField("firstName", formData.firstName);
  }, [formData.firstName]);

  useEffect(() => {
    validateField("middleName", formData.middleName);
  }, [formData.middleName]);

  useEffect(() => {
    validateField("lastName", formData.lastName);
  }, [formData.lastName]);

  useEffect(() => {
    validateField("birthday", formData.birthday);
  }, [formData.birthday]);

  useEffect(() => {
    validateField("email", formData.email);
  }, [formData.email]);

  useEffect(() => {
    validateField("phone", formData.phone);
  }, [formData.phone]);

  useEffect(() => {
    validateField("startTime", formData.startTime);
  }, [formData.startTime]);

  useEffect(() => {
    validateField("endTime", formData.endTime);
  }, [formData.endTime]);

  useEffect(() => {
    validateField("gender", formData.gender);
  }, [formData.gender]);

  useEffect(() => {
    validateField("billableHours", formData.billableHours);
  }, [formData.billableHours]);

  useEffect(() => {
    validateField("designation", formData.designation);
  }, [formData.designation]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form action="">
      <div>
        <div className="form_component">
          <div className="column-1">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              className="FirstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <span className="error">{formErrors.firstName}</span>

            <label htmlFor="birthday">Birth Day</label>
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleInputChange}
            />
            <span className="error">{formErrors.birthday}</span>

            <label htmlFor="gender">Select Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <span className="error">{formErrors.gender}</span>

            <label htmlFor="billableHours">Billable Hours</label>
            <input
              type="number"
              name="billableHours"
              value={formData.billableHours}
              onChange={handleInputChange}
            />
            <span className="error">{formErrors.billableHours}</span>
          </div>

          <div className="column-2">
            <label htmlFor="middleName">Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleInputChange}
            />
            <span className="error">{formErrors.middleName}</span>

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <span className="error">{formErrors.email}</span>

            <label htmlFor="startTime">Start Time</label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
            />
            <span className="error">{formErrors.startTime}</span>

            <label htmlFor="billable_select">Is Billable</label>
            <input
              type="checkbox"
              name="billable_select"
              id=""
              onChange={(e) =>
                setFormData({
                  ...formData,
                  billable_select: e.target.checked,
                })
              }
            />
          </div>

          <div className="column-3">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <span className="error">{formErrors.lastName}</span>

            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <span className="error">{formErrors.phone}</span>

            <label htmlFor="endTime">End Time</label>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
            />
            <span className="error">{formErrors.endTime}</span>

            <label htmlFor="designation">Select Designation</label>
            <select
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="Manager">Manager</option>
              <option value="Developer">Developer</option>
            </select>
            <span className="error">{formErrors.designation}</span>
          </div>
        </div>
        <div className="Button component">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default App;
