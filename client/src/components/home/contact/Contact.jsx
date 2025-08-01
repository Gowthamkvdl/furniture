import React from 'react';

const Contact = () => {
  return (
    <section className="container py-5" id='contact'>
      <h2 className="fw-bold mb-4 text-center">Contact Us</h2>

      <div className="row g-4">
        {/* Contact Information */}
        <div className="col-md-6">
          <div className="bg-light rounded-4 p-4 h-100 shadow-sm">
            <h5 className="fw-semibold mb-3">Get in Touch</h5>
            <p><strong>Email:</strong> macxsupport@example.com</p>
            <p><strong>Phone:</strong> +91 9360733994</p>
            <p><strong>Address:</strong> 123 Main Street, Chennai, TN</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <form className="bg-light rounded-4 p-4 shadow-sm">
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-warning rounded-pill fw-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
