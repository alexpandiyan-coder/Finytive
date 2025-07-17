import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import tickoraLogo from "../assets/tickoraHd.png";
import { useNavigate } from "react-router-dom";

const TickoraPrivacyPolicy = () => {
  // You can replace this with react-router's useNavigate if using react-router
  const navigate = useNavigate();
    // Function to handle back navigation       

  const handleBack = () => {
    navigate({
        pathname: "/ProductsPage",
    });
  };

  return (
    <div
      className="container py-5 position-relative"
      style={{
        fontFamily: "Segoe UI, sans-serif",
        color: "#333",
        maxWidth: "1000px",
      }}
    >
      {/* Back Button */}
      <button
        type="button"
        className="btn btn-danger mb-4 position-absolute"
        onClick={handleBack}
        style={{ top: "50px", left: "10px" }} // Will be top-left inside container
      >
        ← Back
      </button>

      {/* Spacer so content doesn't hide behind fixed button */}
      <div style={{ height: "48px" }}></div>

      <div className="text-center mb-5">
        <img
          src={tickoraLogo}
          Replace
          with
          your
          logo
          path
          alt="Tickora Logo"
          style={{ width: "150px", marginBottom: "20px" }}
        />
        <h1 className="fw-bold" style={{ color: "#C62828" }}>
          Privacy Policy
        </h1>
        <p className="text-muted">Effective Date: July 11, 2025</p>
        <p className="text-muted">Finytive Private Limited</p>
      </div>

      <section className="mb-5">
        <h4 className="text-danger">1. Introduction</h4>
        <p>
          Finytive Private Limited ("we", "our", or "us") respects your privacy
          and is committed to protecting your personal information. This Privacy
          Policy explains how we collect, use, store, and protect data when you
          use our services, including the Tickora mobile app and associated
          websites.
        </p>
      </section>

      <section className="mb-5">
        <h4 className="text-danger">2. Information We Collect</h4>

        <h5 className="fw-semibold">2.1 Personal Information</h5>
        <ul>
          <li>
            Name, mobile number, email address, and parent/employer details
          </li>
          <li>Communications with us (support, suggestions, feedback)</li>
          <li>Time entry and attendance logs</li>
        </ul>

        <h5 className="fw-semibold mt-3">2.2 Location Data</h5>
        <p>
          On mobile: Location is collected only during clock-in/out using device
          GPS via Flutter geolocation. Not stored or transmitted. On web: Google
          Maps APIs may be used; data is handled per session only.
        </p>

        <h5 className="fw-semibold mt-3">2.3 Facial Data (Biometric)</h5>
        <ul>
          <li>Captured via your device camera</li>
          <li>Transmitted securely to our backend (Heroku)</li>
          <li>
            Only embeddings (numeric values) are stored — images are discarded
          </li>
        </ul>

        <h5 className="fw-semibold mt-3">2.4 Cookies</h5>
        <p>
          Our website uses cookies and local storage to improve your experience
          and enable analytics. Cookies do not personally identify you.
        </p>
      </section>

      <section className="mb-5">
        <h4 className="text-danger">3. How We Use Your Information</h4>
        <ul>
          <li>To verify identity for attendance tracking</li>
          <li>To deliver services required by your employer</li>
          <li>To enhance app functionality and performance</li>
        </ul>
        <p>We do not use your data for advertising or third-party marketing.</p>
      </section>

      <section className="mb-5">
        <h4 className="text-danger">4. Data Storage and Retention</h4>
        <ul>
          <li>Embeddings are stored on secure cloud servers (Heroku)</li>
          <li>Facial images are not stored</li>
          <li>All data is retained only while your account is active</li>
          <li>You can request data deletion anytime</li>
        </ul>
      </section>

      <section className="mb-5">
        <h4 className="text-danger">5. Data Sharing and Disclosure</h4>
        <p>
          We do not share or sell your personal or biometric data. All
          processing is internal and secured within Tickora’s infrastructure.
        </p>
      </section>

      <section className="mb-5">
        <h4 className="text-danger">6. Security</h4>
        <ul>
          <li>All transmissions use HTTPS</li>
          <li>Backend access is restricted and monitored</li>
          <li>Security policies are updated regularly</li>
        </ul>
      </section>

      <section className="mb-5">
        <h4 className="text-danger">7. Your Rights and Choices</h4>
        <ul>
          <li>Request access, update, or deletion of your data</li>
          <li>Withdraw consent for facial recognition at any time</li>
        </ul>
      </section>

      <section className="mb-5">
        <h4 className="text-danger">8. Contact Us</h4>
        <p>If you have questions or requests related to this policy:</p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:support@tickora.co.in">support@tickora.co.in</a>
          </li>
        </ul>
      </section>

      <section className="mb-5">
        <h4 className="text-danger">9. Changes to This Privacy Policy</h4>
        <p>
          We may update this Privacy Policy periodically. The latest version
          will always be available on this page with the effective date clearly
          noted.
        </p>
      </section>

      <div className="text-center mt-5">
        <small className="text-muted">
          Last updated: July 11, 2025 • Finytive Private Limited
        </small>
      </div>
    </div>
  );
};

export default TickoraPrivacyPolicy;
