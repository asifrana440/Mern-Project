import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <section id="error-page">
      <div className="content">
        <h2 className="header">404</h2>
        <h4>Sorry! Page not found</h4>
        <p>
          Oops! It seems like the page you are trying to access does not exist!
          If you believe there is an issue, feel free to report it as well.
        </p>
        <div className="btns">
          <NavLink to="/" className="btn btn-home">Return Home</NavLink>
          <NavLink to="/contact" className="btn btn-report">Report Problem</NavLink>
        </div>
      </div>
    </section>
  );
}

export default Error;
