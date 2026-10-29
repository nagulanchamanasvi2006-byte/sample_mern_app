import { useState } from "react";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        setSubmitted(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="container page-section">
            <div className="row g-4 g-lg-5 align-items-start">
                <section className="col-lg-5 contact-copy">
                    <span className="eyebrow">LET'S TALK</span>
                    <h1>We’re here to help.</h1>
                    <p>
                        Have a question about PeopleFirst or want to learn more? Send us a note
                        and we’ll be happy to hear from you.
                    </p>
                    <div className="contact-note">
                        <span className="contact-note-mark" aria-hidden="true">@</span>
                        <div>
                            <strong>Good conversations start here</strong>
                            <p>Fill out the form and tell us what’s on your mind.</p>
                        </div>
                    </div>
                </section>
                <section className="col-lg-7">
                    <div className="form-card">
                        <h2>Send us a message</h2>
                        <p className="form-card-intro">All fields are required.</p>
                        {submitted && (
                            <div className="alert alert-success" role="status">
                                Thanks, {form.name}. Your message is ready. This demo form does not send messages yet.
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label" htmlFor="contact-name">Your name</label>
                                    <input
                                        className="form-control"
                                        id="contact-name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        autoComplete="name"
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label" htmlFor="contact-email">Email address</label>
                                    <input
                                        className="form-control"
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label" htmlFor="contact-subject">Subject</label>
                                    <input
                                        className="form-control"
                                        id="contact-subject"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label" htmlFor="contact-message">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="contact-message"
                                        name="message"
                                        rows="5"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary-soft w-100" type="submit">Send message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Contact;
