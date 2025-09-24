import signupImage from "../../assets/signupImage.jpg";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function SignupPage() {
  const [formdata, setformdata] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    console.log("form submitted");
    e.preventDefault();
    if (!formdata.email || !formdata.username || !formdata.password) {
      toast.error("All fields are required idiot");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("signup successfull");
        window.location.href = "http://localhost:4000";
      } else {
        toast.error(data.message || "signup failed");
      }
    } catch (err) {
      toast.error("server error");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "90vh", width: "100vw" }}
    >
      <div>
        <img
          src={signupImage}
          alt=""
          style={{ height: "350px", marginRight: "-40px" }}
        />
      </div>
      <div>
        <form
          onSubmit={handlesubmit}
          className="p-5 mt-5"
          style={{
            width: "30rem",
            height: "500px",
            boxShadow: "5px 5px 15px rgba(0,0,0,0.2)",
          }}
        >
          <input
            name="email"
            type="email"
            className="form-control mt-5"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            name="username"
            type="text"
            className="form-control mt-5"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            className="form-control mt-5"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary w-100 mt-5">
            Sign Up
          </button>
        </form>
        <p className="text-center text-muted mt-3 mb-0">
          Already have an account?{" "}
          <Link to="/login" className="text-primary fw-bold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
