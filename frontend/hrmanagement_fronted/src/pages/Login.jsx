import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setError("");

        if (email === "admin@gmail.com" && password === "admin") {
            localStorage.setItem("currentuser", JSON.stringify({ name: "Admin", role: "Admin" }));
            navigate("/adminhome");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch("http://localhost:3000/api/emp/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (!response.ok || !data.user) {
                setError(data.msg || data.message || "We couldn't sign you in. Check your details and try again.");
                return;
            }

            localStorage.setItem("currentuser", JSON.stringify(data.user));
            navigate(data.user.role === "HR" ? "/hrhome" : "/emphome");
        } catch {
            setError("Unable to reach the server. Please try again in a moment.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="container page-section auth-page">
            <section className="auth-card">
                <div className="auth-card-heading">
                    <span className="eyebrow">WELCOME BACK</span>
                    <h1>Good to see you.</h1>
                    <p>Log in to continue to your PeopleFirst workspace.</p>
                </div>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="login-email">Email address</label>
                        <input
                            className="form-control"
                            id="login-email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="login-password">Password</label>
                        <input
                            className="form-control"
                            id="login-password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button className="btn btn-primary-soft w-100" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Signing in..." : "Log in"}
                    </button>
                </form>
                <p className="auth-switch">
                    New to PeopleFirst? <Link to="/register">Create an account</Link>
                </p>
            </section>
        </main>
    );
}

export default Login;
