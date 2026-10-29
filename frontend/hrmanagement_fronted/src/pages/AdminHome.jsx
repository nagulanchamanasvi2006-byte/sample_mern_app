import { Link } from "react-router-dom";

function AdminHome() {
    const currentuser = JSON.parse(localStorage.getItem("currentuser") || "null") || { name: "Admin" };

    return (
        <main className="container page-section dashboard-page">
            <section className="dashboard-welcome">
                <div>
                    <span className="eyebrow">ADMIN WORKSPACE</span>
                    <h1>Welcome back, {currentuser.name}.</h1>
                    <p>Your workspace overview starts here.</p>
                </div>
                <span className="dashboard-avatar dashboard-avatar-admin" aria-hidden="true">AD</span>
            </section>
            <section className="row g-4 dashboard-grid">
                <div className="col-md-6">
                    <article className="dashboard-card h-100">
                        <span className="dashboard-card-label">WORKSPACE</span>
                        <h2>Keep your team connected.</h2>
                        <p>Use your administrator access to get oriented and support your organization.</p>
                        <Link to="/about" className="dashboard-link">About PeopleFirst <span aria-hidden="true">&rarr;</span></Link>
                    </article>
                </div>
                <div className="col-md-6">
                    <article className="dashboard-card dashboard-card-accent h-100">
                        <span className="dashboard-card-label">NEED A HAND?</span>
                        <h2>We’re here to help.</h2>
                        <p>Get in touch with the team if you have a question about the workspace.</p>
                        <Link to="/contact" className="dashboard-link">Contact support <span aria-hidden="true">&rarr;</span></Link>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default AdminHome;
