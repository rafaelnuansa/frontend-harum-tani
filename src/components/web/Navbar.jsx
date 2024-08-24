import React from "react";

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const activeRoute = pathname.split("/");

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light navbar-top d-none d-md-block d-lg-block">
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item me-4">
                <i className="fa fa-envelope"></i> info@Harum
                Tanitajurhalang.com
              </li>
              <li className="nav-item me-4">
                {/* <i className="fa fa-phone"></i> +62 857-8585-2224 */}
              </li>
            </ul>
            <div>
              Follow :
              <a href="#" className="ms-2 me-2">
                <i className="fab fa-facebook-square text-white fa-lg"></i>
              </a>
              <a href="http://" className="ms-2 me-2">
                <i className="fab fa-instagram text-white fa-lg"></i>
              </a>
              <a href="#" className="ms-2 me-2">
                <i className="fab fa-youtube text-white fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-light pb-3">
        <div className="container">
          <div className="row">
          <div className="col-md-9 d-none d-md-block d-lg-block">
  <div className="header d-flex align-items-center">
    <div className="header-logo">
      <a href="#">
        <img
          src="/images/logo.png"
          width="110"
          className="img-responsive"
          alt="Logo"
        />
      </a>
    </div>
    <div className="header-text ml-3 text-dark">
      <h2 className="header-school mb-0">Harum Tani</h2>
      <div className="header-address">
        Tajur Halang, Kab.Bogor, Indonesia
      </div>
    </div>
  </div>
</div>


            <div className="row d-block d-md-none d-lg-none">
              <div className="col-md-6 text-center mt-3">
                <a href="#">
                  <img
                    src="/images/logo.png"
                    width="110"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="col-md-12 text-center text-white mb-3">
                <h2 className="header-school">Harum Tani</h2>
                <hr />
                <div className="header-address">
                  Tajur Halang, Kab.Bogor, Indonesia
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="d-none d-md-block d-lg-block"
                style={{ marginTop: "60px" }}
              ></div>
              <form className="d-flex" action="#" method="GET">
                <input
                  className="form-control border-0 me-2"
                  type="search"
                  name="q"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <button className="btn btn-dark" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-md navbar-light navbar-blue nav-web">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item ms-2">
                <Link
                  className={
                    activeRoute[1] === "" ? "nav-link active " : "nav-link "
                  }
                  to="/"
                >
                  <i className="fa fa-home"></i> Beranda
                </Link>
              </li>

              <li className="nav-item ms-2">
                <Link
                  className={
                    activeRoute[1] === "pages"
                      ? "nav-link active "
                      : "nav-link "
                  }
                  to="/pages"
                >
                  <i className="fa fa-info-circle"></i> Tentang
                </Link>
              </li>

              <li className="nav-item ms-2">
                <Link
                  className={
                    activeRoute[1] === "teams"
                      ? "nav-link active "
                      : "nav-link "
                  }
                  to="/teams"
                >
                  <i className="fa fa-user-circle"></i> Kelompok Tani
                </Link>
              </li>

              <li className="nav-item ms-2">
                <Link
                  className={
                    activeRoute[1] === "posts"
                      ? "nav-link active "
                      : "nav-link "
                  }
                  to="/posts"
                >
                  <i className="fa fa-book"></i> Berita
                </Link>
              </li>

              <li className="nav-item ms-2">
                <Link
                  className={
                    activeRoute[1] === "products"
                      ? "nav-link active "
                      : "nav-link "
                  }
                  to="/products"
                >
                  <i className="fa fa-shopping-bag"></i> Produk
                </Link>
              </li>

              <li className="nav-item ms-2">
                <Link
                  className={
                    activeRoute[1] === "photos"
                      ? "nav-link active "
                      : "nav-link "
                  }
                  to="/photos"
                >
                  <i className="fa fa-images"></i> Galeri
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
