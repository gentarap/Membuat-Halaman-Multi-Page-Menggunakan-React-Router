import React from "react";

function About() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Tentang Kami</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Visi Kami</h5>
              <p className="card-text">
                Membangun aplikasi web modern dan responsif yang dapat membantu
                pengguna dengan teknologi terkini.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Misi Kami</h5>
              <p className="card-text">
                Memberikan solusi terbaik dengan desain user-friendly dan
                performa optimal untuk semua perangkat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
