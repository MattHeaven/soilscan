import Hero from "../../components/Hero";
import { ButtonHover } from "../../components/utils";
import Solutions from "./Solutions";
import Problems from "./Problems";
import OurTech from "./OurTech";

export default function Home() {



  return (
    <main>
      <Hero
        Meta="Soilscan"
        section2="#about"
        image="https://www.soilscan.co.ke/wp-content/uploads/2021/06/hero-backdrop.png"
        Title="Advancing Precision Agriculture and Soil Health Restoration"
        description="Our mission is to revolutionize agriculture by providing farmers with cutting-edge, AI-driven solutions that restore soil health, enhance productivity, and promote sustainable farming practices." />

      {/*Section 1*/}
      <section id="about" className="h-screen flex p-12 justify-around gap-16 w-full items-center">
        <div className="w-1/2 flex items-center">
          <img
            src="https://www.soilscan.co.ke/wp-content/uploads/2021/05/SoilScan.svg"
            alt="SoilScan Logo"
            className="mx-auto h-20"
          />
        </div>
        <div className="w-1/2 space-y-4">
          <h2 className="font-bold text-xl">ABOUT US</h2>
          <p className="font-light leading-loose">SoilScan is an AI-powered platform that enhances
            agricultural productivity and restores soil health by providing farm-specific,
            scientifically tailored fertilizer recommendations.
            Through systematic soil sampling, advanced data analytics,
            and climate modeling, SoilScan generates precise nutrient formulations and
            facilitates the production of customized fertilizers, empowering farmers to
            make informed decisions that maximize crop yields and promote long-term sustainability.
          </p>
          <button className={ButtonHover}>READ MORE</button>
        </div>
      </section>
      <div
        className="bg-[url('https://img.freepik.com/premium-photo/preserving-ecosystems-ensuring-soil-health-expert-farmers-hand-asian-agriculture_983420-156066.jpg')]
        h-screen bg-cover"
        style={{ backgroundAttachment: "fixed" }}
      />

      {/*section 2*/}
      <Problems />
      {/*Section 3*/}
      <Solutions />
      {/*section 4*/}
      <OurTech />


    </main>
  )
}
