import { Link } from "react-router-dom";
import signupImage from "../../assets/signupImage.jpg";
import { useState } from "react";
import { toast } from "react-toastify";

function LoginPage() {
  const [formdata, setformdata] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    try {
        const res = await fetch("http://localhost:3000/login",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            credentials:"include",
            body:JSON.stringify(formdata)
        })
        const data = await res.json();
        console.log(data)
        if(data.success){
            toast.success("login successfull");
            window.location.href = "http://localhost:4000";
        }
        else{
            toast.error(data.message || "login failed")
        }
    } catch (error) {
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
          className="p-5  d-flex flex-column justify-content-center"
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
            value={formdata.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            className="form-control mt-5"
            placeholder="Password"
            value={formdata.password}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary w-100 mt-5">
            LogIn
          </button>
        </form>
        <p className="text-center text-muted mt-3 mb-0">
          Dont't have an account?{" "}
          <Link to="/signup" className="text-primary fw-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
