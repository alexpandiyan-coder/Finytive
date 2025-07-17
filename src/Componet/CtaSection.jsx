import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="">
      <div className="p-5 bg-light rounded shadow text-center">
        <h2 className="mb-3">Need Help or Want to Know More?</h2>
        <p className="mb-4">
          Contact our team or review our privacy policy to understand how we handle your data.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to={"/Contact"}  className="btn btn-dark">
            Contact Us
          </Link>
          <Link to={'/tickora/privacy-policy'} className="btn btn-danger">
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
