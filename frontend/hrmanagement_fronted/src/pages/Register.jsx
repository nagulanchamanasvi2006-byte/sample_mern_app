import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "", role: "" });
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        setMessage("");
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        setMessage("");
        setIsSubmitting(true);

        try {
            const response = await fetch("http://localhost:3000/api/emp/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || data.msg || "We couldn't create your account. Please try again.");
            }

            setError(false);
            setMessage("Your account has been created. You can now log in.");
            setForm({ name: "", email: "", password: "", role: "" });
        } catch (requestError) {
            setError(true);
            setMessage(requestError.message || "Unable to reach the server. Please try again in a moment.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="container page-section auth-page">
            <section className="auth-card">
                <div className="auth-card-heading">
                    <span className="eyebrow">GET STARTED</span>
                    <h1>Make yourself at home.</h1>
                    <p>Create an account to join your PeopleFirst workspace.</p>
                </div>
                {message && (
                    <div className={`alert ${error ? "alert-danger" : "alert-success"}`} role="status">
                        {message}
                    </div>
                )}
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="register-name">Full name</label>
                        <input
                            className="form-control"
                            id="register-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="register-email">Email address</label>
                        <input
                            className="form-control"
                            id="register-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="register-password">Password</label>
                        <input
                            className="form-control"
                            id="register-password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="register-role">I’m joining as</label>
                        <select
                            className="form-select"
                            id="register-role"
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Choose a role</option>
                            <option value="HR">HR</option>
                            <option value="EMPLOYEE">Employee</option>
                        </select>
                    </div>
                    <button className="btn btn-primary-soft w-100" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Creating account..." : "Create account"}
                    </button>
                </form>
                <p className="auth-switch">
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </section>
        </main>
    );
}

export default Register;
