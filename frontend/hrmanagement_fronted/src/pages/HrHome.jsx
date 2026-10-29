import { Link } from "react-router-dom";

function HrHome() {
    const currentuser = JSON.parse(localStorage.getItem("currentuser") || "null") || { name: "there" };

    return (
        <main className="container page-section dashboard-page">
            <section className="dashboard-welcome">
                <div>
                    <span className="eyebrow">HR WORKSPACE</span>
                    <h1>Welcome back, {currentuser.name}.</h1>
                    <p>Your people, your priorities, all in one place.</p>
                </div>
                <span className="dashboard-avatar" aria-hidden="true">HR</span>
            </section>
            <section className="row g-4 dashboard-grid">
                <div className="col-md-6">
                    <article className="dashboard-card h-100">
                        <span className="dashboard-card-label">YOUR TEAM</span>
                        <h2>Make room for great work.</h2>
                        <p>Keep employee information and team support moving in the right direction.</p>
                        <Link to="/contact" className="dashboard-link">Explore team support <span aria-hidden="true">&rarr;</span></Link>
                    </article>
                </div>
                <div className="col-md-6">
                    <article className="dashboard-card dashboard-card-accent h-100">
                        <span className="dashboard-card-label">NEXT STEP</span>
                        <h2>Have a question?</h2>
                        <p>Reach out to the PeopleFirst team for help with your workspace.</p>
                        <Link to="/contact" className="dashboard-link">Get in touch <span aria-hidden="true">&rarr;</span></Link>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default HrHome;
