import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handle Submit is called");
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const responseData = await response.json();
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
        console.log(responseData);
      } else if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("response is called");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <center>
      <h1 className="text-white my-3">Sign Up</h1>
      <form onSubmit={handleSubmit} className="text-white m-5">
        <div className="mb-5">
          <label htmlFor="exampleInputUserName" className="form-label fw-bold">
            User Name
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            required
            name="username"
            value={user.username}
            onChange={handleInput}
            autoComplete="username"
            className="form-control w-75"
            id="exampleInputUserName"
            aria-describedby="UserNameHelp"
          />
        </div>
        <div className="mb-5 w-75 text-start">
          <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleInput}
            placeholder="Enter Email"
            autoComplete="email"
            required
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text text-white">
            We'll never share your email with anyone else.
          </div>
          <div className="mb-5 my-3">
            <label htmlFor="exampleInputPhone" className="form-label fw-bold">
              Phone
            </label>
            <input
              type="number"
              placeholder="Enter Phone"
              required
              name="phone"
              value={user.phone}
              onChange={handleInput}
              autoComplete="phone"
              className="form-control"
              id="exampleInputPhone"
              aria-describedby="PhoneHelp"
            />
          </div>
        </div>
        <div className="mb-5 w-75 text-start">
          <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            required
            value={user.password}
            onChange={handleInput}
            name="password"
            autoComplete="current-password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </center>
  );
};

export default SignUp;
