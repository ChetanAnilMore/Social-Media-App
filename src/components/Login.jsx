import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
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
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setUser({ email: "", password: "" });
        navigate("/");
      } else alert("Invalid Credentials");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <center>
      <h1 className="text-white my-2">Login</h1>
      <form onSubmit={handleSubmit} className="text-white m-5">
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

export default Login;
