import React from "react";
export default function Form() {
  const [formData, setformData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    textarea: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });
  console.log(formData.employment);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setformData((prevformdata) => {
      return {
        ...prevformdata,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData);
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className="firstname"
        type="text"
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
      />

      <input
        onChange={handleChange}
        className="lastname"
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
      />
      <br />

      <input
        onChange={handleChange}
        className="email"
        type="email"
        placeholder="abc@gmail.com"
        name="email"
        value={formData.email}
      />
      <br />

      <textarea
        onChange={handleChange}
        className="textarea"
        placeholder="Text Area"
        name="textarea"
        value={formData.textarea}
      />
      <br />

      <input
        onChange={handleChange}
        className="checkbox"
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        name="isFriendly"
      />
      <label htmlFor="isFriendly">Are you Friendly?</label>

      <fieldset>
        <legend>Current Employment Status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>

      <label htmlFor="favColor">Which is your favourite Color?</label>
      <br />
      <select
        className="select"
        id="favColor"
        value={formData.value}
        onChange={handleChange}
      >
        <option value="">---Choose---</option>
        <option value="red">Red</option>
        <option value="red">Yellow</option>
        <option value="red">Green</option>
        <option value="red">Pink</option>
        <option value="red">Blue</option>
        <option value="red">Orange</option>
      </select>
      <button>Submit</button>
    </form>
  );
}
