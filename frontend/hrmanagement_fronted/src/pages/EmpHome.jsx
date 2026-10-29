import { Link } from "react-router-dom";

function EmpHome() {
    const currentuser = JSON.parse(localStorage.getItem("currentuser") || "null") || { name: "there" };

    return (
        <main className="container page-section dashboard-page">
            <section className="dashboard-welcome">
                <div>
                    <span className="eyebrow">YOUR WORKSPACE</span>
                    <h1>Welcome, {currentuser.name}.</h1>
                    <p>A good day at work starts with feeling right at home.</p>
                </div>
                <span className="dashboard-avatar dashboard-avatar-employee" aria-hidden="true">PF</span>
            </section>
            <section className="row g-4 dashboard-grid">
                <div className="col-md-6">
                    <article className="dashboard-card h-100">
                        <span className="dashboard-card-label">YOUR NEXT STEP</span>
                        <h2>Find what you need.</h2>
                        <p>Your PeopleFirst workspace is here to make everyday work feel a little simpler.</p>
                        <Link to="/about" className="dashboard-link">Explore your workspace <span aria-hidden="true">&rarr;</span></Link>
                    </article>
                </div>
                <div className="col-md-6">
                    <article className="dashboard-card dashboard-card-accent h-100">
                        <span className="dashboard-card-label">WE’RE LISTENING</span>
                        <h2>Need support?</h2>
                        <p>Get in touch if you have a question or need a hand getting started.</p>
                        <Link to="/contact" className="dashboard-link">Contact the team <span aria-hidden="true">&rarr;</span></Link>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default EmpHome;
