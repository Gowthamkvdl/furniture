import React from "react";
import "./navbar.css";
import { Toaster, toast } from "react-hot-toast";
import { useLocation, Link } from 'react-router-dom';


const Navbar = () => {

  const location = useLocation()
  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <div className="d-flex justify-content-center" >
      <nav className="navbar responsive-bg text-white mt-md-2 rounded-4 container navbar-expand d-flex align-items-center  justify-content-md-between justify-content-around ">
        <div className="touristBus d-none d-md-block sidePart">
          <h1 className="title-text m-4 ">Name</h1>
        </div>
        <div>
          <div
            className="collapse mb-3 secondary-400 me-md-4 mb-md-0  navbar-collapse box-shadow px-3 rounded-4"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link
                  className={`nav-link shadow-none d-flex flex-column align-items-center mb-0 pb-0 ${isActive(
                    "/"
                  )}`}
                  to="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-house d-md-none mt-1 title-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                  </svg>
                  <span className="nav-text">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link shadow-none d-flex flex-column align-items-center mb-0 pb-0 ${isActive(
                    "/list"
                  )}`}
                  to="/list"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search d-md-none mt-1 title-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                  <span className="nav-text">menu1</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link shadow-none d-flex flex-column align-items-center mb-0 pb-0 mb-md-2 ${isActive(
                    "/fav"
                  )}`}
                  to="/fav"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-heart d-md-none mt-1 title-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                  <span className="nav-text">menu2</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link shadow-none d-flex flex-column align-items-center mb-0 pb-0 ${isActive(
                    "/add"
                  )}`}
                  to="/add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-plus-circle d-md-none mt-1 title-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                  </svg>
                  <span className="nav-text">menu3</span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={`nav-link shadow-none ms-md-5 d-flex flex-column flex-md-row align-items-center mb-0 pb-0 ${isActive(
                    "/register"
                  )}`}
                  to="/register"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-person mt-1 title-tex me-md-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                  <span className="nav-text">Register</span>
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
