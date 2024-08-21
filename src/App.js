
import "./App.css";
import { useState } from "react";

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
    billable_select: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First Name is required";


    if (!formData.middleName)
      errors.middleName = "Middle Name is required";


    if (!formData.lastName) errors.lastName = "Last Name is required";
    if (!formData.birthday) errors.birthday = "Birthday is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (formData.phone.length!==10) {
      errors.phone = "Phone number must be 10 digits";
    }
    if (!formData.startTime) errors.startTime = "Start Time is required";
    if (!formData.endTime) errors.endTime = "End Time is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.billableHours)
      errors.billableHours = "Billable Hours is required";
    if (!formData.designation) errors.designation = "Designation is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validateForm()) {
     
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form_component">
        <div className="column-1">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={formErrors.firstName ? "error-input" : ""}
          />
          {isSubmitted && <span className="error">{formErrors.firstName}</span>}

          <label htmlFor="birthday">Birth Day</label>
          <input
            type="date"
            name="birthday"
            value={formData.birthday}
            onChange={handleInputChange}
            className={formErrors.birthday ? "error-input" : ""}
          />
          {isSubmitted && <span className="error">{formErrors.birthday}</span>}

          <label htmlFor="gender">Select Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className={formErrors.gender ? "error-input" : ""}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          {isSubmitted && <span className="error">{formErrors.gender}</span>}

          <label htmlFor="billableHours">Billable Hours</label>
          <input
            type="number"
            name="billableHours"
            value={formData.billableHours}
            onChange={handleInputChange}
            className={formErrors.billableHours ? "error-input" : ""}
          />
          {isSubmitted && (
            <span className="error">{formErrors.billableHours}</span>
          )}
        </div>

        <div className="column-2">
          <label htmlFor="middleName">Middle Name</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleInputChange}
            className={formErrors.middleName ? "error-input" : ""}
          />
          {isSubmitted && (
            <span className="error">{formErrors.middleName}</span>
          )}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={formErrors.email ? "error-input" : ""}
          />
          {isSubmitted && <span className="error">{formErrors.email}</span>}

          <label htmlFor="startTime">Start Time</label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleInputChange}
            className={formErrors.startTime ? "error-input" : ""}
          />
          {isSubmitted && <span className="error">{formErrors.startTime}</span>}

          <label htmlFor="billable_select">Is Billable</label>
          <input
            type="checkbox"
            name="billable_select"
            checked={formData.billable_select}
            onChange={handleInputChange}
          />
        </div>

        <div className="column-3">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={formErrors.lastName ? "error-input" : ""}
          />
          {isSubmitted && <span className="error">{formErrors.lastName}</span>}

          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={formErrors.phone ? "error-input" : ""}
          />
          {isSubmitted && <span className="error">{formErrors.phone}</span>}

          <label htmlFor="endTime">End Time</label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleInputChange}
            className={formErrors.endTime ? "error-input" : ""}
          />
          {isSubmitted && <span className="error">{formErrors.endTime}</span>}

          <label htmlFor="designation">Select Designation</label>
          <select
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            className={formErrors.designation ? "error-input" : ""}
          >
            <option value="">Select</option>
            <option value="Manager">Manager</option>
            <option value="Developer">Developer</option>
          </select>
          {isSubmitted && (
            <span className="error">{formErrors.designation}</span>
          )}
        </div>
      </div>

      <div className="Button component">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;
