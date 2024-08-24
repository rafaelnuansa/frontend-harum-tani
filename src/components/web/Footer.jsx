import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer>
      <div className="container-fluid footer-top">
        <div className="container">
          <div className="row p-4">
            <div className="col-md-6 mb-4 mt-3">
              <h5>Seputar Kami</h5>
              <hr />
              <p className="text-justify mt-3">
                Harum Tani Merupakan ...
              </p>
            </div>

            <div className="col-md-6 mb-4 mt-3">
              <h5>
                Kontak <strong style={{ color: "#ffd22e" }}></strong>
              </h5>
              <hr />
              <p>
                <i className="fa fa-map-marker"></i> Alamat Lengkap
                <br />
                <br />
                <i className="fas fa-envelope"></i> email@harumtani.com
                <br />
                <br />
                <i className="fas fa-phone"></i> +62 857-8585-2224
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-bottom">
        <div className="row p-3">
          <div className="text-center text-white font-weight-bold">
            Copyright © {currentYear} Harum Tani. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
