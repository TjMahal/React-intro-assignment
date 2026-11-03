export default function SubNav (props) {
    return (
        <section className="d-flex justify-content-between align-items-center px-4 border-bottom bg-white">
            <div className="d-flex gap-4">
                <a href="https://frame.work/laptop13?tab=overview" className="nav-link text-dark border-bottom border-danger border-3">Overview</a> 
                <a href="https://frame.work/laptop13?tab=upgrades" className="nav-link text-dark">Upgrades</a>
                <a href="https://frame.work/laptop13?tab=specs" className="nav-link text-dark">Specs</a>
                <a href="https://frame.work/laptop13?tab=linux" className="nav-link text-dark">Linux</a>
                <a href="https://frame.work/laptop13?tab=downloads-and-guides" className="nav-link text-dark">Downloads and guides</a>
            </div>
            <button className="btn btn-primary">Configure now</button>
        </section>
    );
}