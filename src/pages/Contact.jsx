import React from "react";

function Contact() {
  return (
    <div className="container py-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-center">Hubungi Kami</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nama
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Masukkan nama Anda"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Masukkan email Anda"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Pesan
          </label>
          <textarea
            id="message"
            rows="4"
            className="form-control"
            placeholder="Tulis pesan Anda..."
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success">
            Kirim Pesan
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
