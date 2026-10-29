import { Link } from "react-router-dom";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const features = [
    {
        number: "01",
        title: "Bring people together",
        text: "Keep teams connected with clear profiles, roles, and a shared place to get started.",
    },
    {
        number: "02",
        title: "Make work clearer",
        text: "Give employees and HR a simple home base for the work that matters every day.",
    },
    {
        number: "03",
        title: "Grow with confidence",
        text: "Create a more organized employee experience as your team and its needs evolve.",
    },
];

function Home() {
    return (
        <div className="home-page">
            <section className="container home-hero-section">
                <div id="homeCarousel" className="carousel slide home-carousel" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {[0, 1, 2].map((slide) => (
                            <button
                                key={slide}
                                type="button"
                                data-bs-target="#homeCarousel"
                                data-bs-slide-to={slide}
                                className={slide === 0 ? "active" : ""}
                                aria-current={slide === 0 ? "true" : undefined}
                                aria-label={`Slide ${slide + 1}`}
                            />
                        ))}
                    </div>
                    <div className="carousel-inner">
                        {[img1, img2, img3].map((image, index) => (
                            <div key={image} className={`carousel-item${index === 0 ? " active" : ""}`}>
                                <img
                                    src={image}
                                    className="d-block w-100 home-carousel-image"
                                    alt={`A welcoming workplace, view ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="home-hero-overlay">
                        <div className="home-hero-copy">
                            <span className="eyebrow eyebrow-light">PEOPLE FIRST. ALWAYS.</span>
                            <h1>Make work a better place to be.</h1>
                            <p>
                                A simpler way for your people team and employees to stay connected,
                                supported, and ready for what comes next.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <Link className="btn btn-light btn-lg home-primary-action" to="/register">
                                    Get started <span aria-hidden="true">&rarr;</span>
                                </Link>
                                <Link className="btn btn-outline-light btn-lg" to="/about">
                                    Discover PeopleFirst
                                </Link>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section className="container home-features-section">
                <div className="row align-items-end mb-4 gy-3">
                    <div className="col-lg-7">
                        <span className="eyebrow">A MORE HUMAN WORKPLACE</span>
                        <h2 className="section-heading">Everything starts with your people.</h2>
                    </div>
                    <div className="col-lg-5">
                        <p className="section-intro">
                            The right tools make everyday work feel a little easier—for everyone.
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    {features.map((feature) => (
                        <div className="col-md-4" key={feature.number}>
                            <article className="feature-card h-100">
                                <span className="feature-number">{feature.number}</span>
                                <h3>{feature.title}</h3>
                                <p>{feature.text}</p>
                            </article>
                        </div>
                    ))}
                </div>
            </section>

            <section className="home-cta">
                <div className="container d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
                    <div>
                        <span className="eyebrow eyebrow-light">YOUR TEAM, IN SYNC</span>
                        <h2>Ready to make people the priority?</h2>
                    </div>
                    <Link className="btn btn-light btn-lg home-primary-action" to="/contact">
                        Talk to us <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
