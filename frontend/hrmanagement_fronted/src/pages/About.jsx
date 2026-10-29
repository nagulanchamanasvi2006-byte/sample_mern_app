import { Link } from "react-router-dom";

function About() {
    return (
        <main className="container page-section">
            <section className="about-hero">
                <span className="eyebrow">ABOUT PEOPLEFIRST</span>
                <h1>Work works better when people come first.</h1>
                <p>
                    We believe the best workplaces are built on clear communication,
                    thoughtful support, and tools that make room for people to do their best work.
                </p>
                <Link className="btn btn-primary-soft" to="/contact">Get in touch</Link>
            </section>

            <section className="row g-4 about-values">
                <div className="col-md-4">
                    <article className="value-card h-100">
                        <span className="value-icon">01</span>
                        <h2>People over process</h2>
                        <p>We keep the experience clear and welcoming, so the important things stay easy to find.</p>
                    </article>
                </div>
                <div className="col-md-4">
                    <article className="value-card h-100">
                        <span className="value-icon">02</span>
                        <h2>Better together</h2>
                        <p>HR teams and employees deserve a shared space that helps them stay on the same page.</p>
                    </article>
                </div>
                <div className="col-md-4">
                    <article className="value-card h-100">
                        <span className="value-icon">03</span>
                        <h2>Progress with purpose</h2>
                        <p>Small improvements in everyday work can add up to a stronger workplace for everyone.</p>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default About;
