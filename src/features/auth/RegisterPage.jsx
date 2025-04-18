import React, { useState } from "react";
import styles from "./register.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { registerUser } from "./authSlice";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [localError, setLocalError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setLocalError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstname, lastname, username, email, password, phone } = formData;

    if (!firstname || !lastname || !username || !email || !password || !phone) {
      setLocalError("Please fill in all required fields.");
      return;
    }

    if (!email.includes("@")) {
      setLocalError("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      setLocalError("Password must be at least 6 characters.");
      return;
    }

    dispatch(registerUser(formData));
    console.log("Register Data:", formData);
    navigate("/login");
  };

  return (
    <div className={styles.mainLoginWrapper}>
      <div className={styles.leftFormSection}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <h2 className={styles.mobileBrandTitle}>
            <span className={styles.brandClient}>Client</span>
            <span className={styles.brandPulse}>Pulse</span>
          </h2>

          <h1 className={styles.loginTitle}>Create Your Account</h1>
          <p className={styles.loginSubtitle}>
            Let’s get you onboarded real quick!
          </p>

          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className={styles.inputField}
            value={formData.firstname}
            onChange={handleChange}
            tabIndex={1}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className={styles.inputField}
            value={formData.lastname}
            onChange={handleChange}
            tabIndex={2}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={styles.inputField}
            value={formData.username}
            onChange={handleChange}
            tabIndex={3}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.inputField}
            value={formData.email}
            onChange={handleChange}
            tabIndex={4}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.inputField}
            value={formData.password}
            onChange={handleChange}
            tabIndex={5}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className={styles.inputField}
            value={formData.phone}
            onChange={handleChange}
            tabIndex={6}
          />

          <button
            className={styles.signInButton}
            type="submit"
            tabIndex={7}
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

          {(localError || error) && (
            <p className={styles.errorText}>{localError || error}</p>
          )}

          <div className={styles.divider}>
            <span>Or</span>
          </div>

          <p className={styles.signUpPrompt}>
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Log In</span>
          </p>
        </form>
      </div>

      <div className={styles.rightImageSection}>
        <div className={styles.imagePanelContainer}>
          <div className={styles.imageOverlayPanel}>
            <div className={styles.logoPlaceholder}>
              <img src={logo} alt="Logo" className={styles.logoImage} />
            </div>
            <h2 className={styles.brandTitle}>
              <span className={styles.brandClient}>Client</span>
              <span className={styles.brandPulse}>Pulse</span>
            </h2>
            <p className={styles.brandDescription}>
              Join the future of personalized banking insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
