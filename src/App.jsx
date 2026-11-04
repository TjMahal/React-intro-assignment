
import FeaturedCard from "./featured.jsx";
import "./App.css";

import image1 from "./assets/framework main section 1.avif";
import image2 from "./assets/framework main section 2.avif";
import image3 from "./assets/framework main section 3.avif";

import Hero from "./components/Hero.jsx";
import SubNav from "./components/SubNav.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Hero
        title="This isn't our computer. It's yours."
        subtitle="Updated for 2025 with AMD's latest Ryzen™ AI 300 Series processors, with up to 12 CPU cores."
        buttonText="Configure now"
      />

      <SubNav />

      <div className="container mt-5">
        <h1 className="text-center mb-5">
          Framework Laptop 13 is a thin, light, and fast 13.5” notebook
          that is simple to customize, upgrade, and repair, so it stays
          yours for longer.
        </h1>

        <div className="row">
          <div className="col-md-4">
            <FeaturedCard
              title="Customize"
              description="It's yours to choose."
              image={image1}
            />
          </div>

          <div className="col-md-4">
            <FeaturedCard
              title="Upgrade"
              description="Upgrade your processor and storage."
              image={image2}
            />
          </div>

          <div className="col-md-4">
            <FeaturedCard
              title="Repair"
              description="Every part is replaceable."
              image={image3}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
