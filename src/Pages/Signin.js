import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { BsFillEyeFill } from "react-icons/bs";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    Password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  //navigate("/");
  return (
    <Layout>
      <div className="d-flex align-items-center justify-content-center w-30 ">
        <form className="bg-light p-4">
          <div className="bg-dark p-2 text-light text-center">Sign In</div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={onChange}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={onChange}
              className="form-control"
              id="Password"
            />
            <span>
              show password{" "}
              <BsFillEyeFill
                className="text-danger"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowPassword((prevState) => !prevState);
                }}
              />
            </span>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
          <div className="mt-2"></div>
          <div>
            <h6>Login with Google</h6>
            <span>New user</span>
            <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signin;
