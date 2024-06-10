import React, { useState } from "react";

const Display = () => {
  const [user, setUser] = useState({
    firstname: "",
    secondname: "",
  });
  const [flag, setFlag] = useState(false);
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setFlag(!flag);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form>
        <div>
          <label for="firstname">First Name:</label>
          <input
            type="text"
            name="firstname"
            // value={e.target.value}
            onChange={handlechange}
            required
          />
        </div>
        <div>
          <label for="lastname">Last Name:</label>
          <input
            type="text"
            name="secondname"
            onChange={handlechange}
            required
          />
        </div>
        <button type="submit" onClick={handlesubmit}>
          Submit
        </button>
      </form>
      {/* <p>{flag ? "Full Name:"+{user.firstname}+{user.secondname} : ""}</p> */}
      <p>
        {flag
          ? user.firstname !== ""
            ? user.secondname !== ""
              ? "Full Name: " + user.firstname + " " + user.secondname
              : ""
            : ""
          : ""}
      </p>
    </div>
  );
};

export default Display;
