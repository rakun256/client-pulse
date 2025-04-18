import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./authSlice";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [localError, setLocalError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    loading,
    error: backendError,
    isAuthenticated,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setLocalError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      setLocalError("Please fill in all required fields.");
      return;
    }

    dispatch(loginUser(formData));
  };

  return (
    <div className={styles.mainLoginWrapper}>
      <div className={styles.leftFormSection}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <h2 className={styles.mobileBrandTitle}>
            <span className={styles.brandClient}>Client</span>
            <span className={styles.brandPulse}>Pulse</span>
          </h2>

          <h1 className={styles.loginTitle}>Welcome Back!</h1>
          <p className={styles.loginSubtitle}>
            Please enter your credentials to continue.
          </p>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.inputField}
            value={formData.email}
            onChange={handleChange}
            tabIndex={1}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.inputField}
            value={formData.password}
            onChange={handleChange}
            tabIndex={2}
          />
          <button
            className={styles.signInButton}
            type="submit"
            tabIndex={3}
            disabled={loading}
          >
            {loading ? "Loging In..." : "Log In"}
          </button>

          {(localError || backendError) && (
            <p className={styles.errorText}>{localError || backendError}</p>
          )}

          <div className={styles.divider}>
            <span>Or</span>
          </div>

          <p className={styles.signUpPrompt}>
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")}>Register.</span>
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
              ClientPulse helps banks monitor customer behavior, detect churn
              risk, and generate AI-based actionable insights in real time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
