import heroImg from '../assets/frameworkherosectionimage.avif'
export default function Hero (props) {
    return (
        <section className="d-flex align-items-center px-5"
        style={{
            minHeight: "80vh",
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "right center",
        }}>
            <div style={{ maxWidth: "520px" }}>
                <h1 className="display-3 fw-bold">{props.title}</h1>
                <p className="lead mb-4">{props.subtitle}</p>
                <button className="btn btn-primary btn-lg">{props.buttonText}</button>
            </div>
        </section>
    );
}