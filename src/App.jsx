import "./App.css";

import Card from "./components/Card.jsx";
import { cards } from "./data/cards.js";
import sectionimage from "./assets/aeUQGZ1ZCF7ETVrw_fw13-family_overview_storanghe-and-memory.avif";
import sectionImage2 from "./assets/aKRVMqTt2nPbadK7_fw13_family_overview_end-image.avif"
import emailIcon from "./assets/email-icon-transparent.svg";


function App() {
  return (
    <>
      <section className="container pt-4 pb-5">
        <div className="row g-4">
          {cards.map((card) => (
            <div className="col-12 col-lg-4" key={card.title}>
              <Card {...card} />
            </div>
          ))}
        </div>
      </section>


     <section className="container pt-5">
        <img
          src={sectionimage}
          alt="A studio shot of Framework Laptop 13 showing storage installation."
          className="w-100 rounded-4"
          loading="lazy"
        />
      </section>


      <section className="container pb-5 text-start">
        <div className="row">
          <div className="col-12 col-lg-6 py-4">
            <h5 className="fw-semibold mb-2">Storage</h5>
            <p className="mb-0">
              Never worry about running out of space. With standard M.2 SSDs, you can
              swap out your storage for high-capacity drives up to 8TB.
            </p>
          </div>

          <div className="col-12 col-lg-6 py-4">
            <h5 className="fw-semibold mb-2">Memory</h5>
            <p className="mb-0">
              You can upgrade your RAM whenever you need to unlock higher performance.
              Our latest generation supports up to a massive 96GB of high-speed DDR5.
            </p>
          </div>
        </div>
     </section>

     <section className="text-center pb-5">
      <img
      src={emailIcon}
      style={{ width: "96px", height: "auto" }}
      />
      <h3 className="fw-semibold mb-4 mt-2">Keep track of what we’re working on<br/>with the Framework Newsletter.</h3>
      <form
        className="d-flex flex-column flex-sm-row justify-content-center gap-2 mx-auto"
        style={{ maxWidth: "800px" }}
        onSubmit={(e) => {
          e.preventDefault();
          // handle the email here
        }}
      >

      <input
        type="email"
        className="form-control border-0 border-bottom border-dark rounded-0 shadow-none px-0 py-2 bg-transparent"
        placeholder="Your Email"
        aria-label="Email address"
        required
      />
      <button
      type="submit"
      className="btn btn-dark rounded-pill px-4 py-2 fw-semibold"
      >Subscribe</button>
    </form>
    </section>

     <section>
      <img 
      src={sectionImage2}
      className="w-100"
      loading="lazy"
      />
     </section>
     <section className="container text-center py-5 my-lg-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <h3 className="fw-semibold mb-4">
            Help shape future Framework products. Click below to take a quick survey.
          </h3>

          <a
            href="https://frameworkcomputer.typeform.com/to/q5BoD51G?utm_medium=13overview"
            className="btn btn-dark rounded-pill px-4 py-2 fw-semibold"
            target="_blank"
            rel="noreferrer"
          >
            Take our survey
          </a>
        </div>
      </div>
    </section>
       
    </>
  );
}

export default App;