import { ButtonHover } from "../../components/utils";

export default function OurTech() {
  return (
    <>
      <section className="py-20 text-white p-12 px-14 flex items-center flex-col  bg-[#003232]">
        <h1 className="text-2xl font-semibold mb-4 text-center">OUR TECHNOLOGY</h1>
        <p className="text-center my-12 px-12">
          SoilScan's technology represents the
          intersection of advanced AI, digital infrastructure,
          and modern agronomy. Our platform is designed to address
          the complexities of soil degradation through a seamless integration
          of soil health assessment, AI-driven insights, and customized fertilizer
          production, all supported by a global Soil Health Index Registry.
        </p>
        <button className={`${ButtonHover} bg-white border-white hover:bg-transparent hover:!text-white !text-black`}>
          READ MORE
        </button>
      </section>
      <div
        className="bg-[url('https://www.soilscan.co.ke/wp-content/uploads/2021/06/back4.png')]
        h-screen bg-cover"
        style={{ backgroundAttachment: "fixed" }}
      />

    </>
  )

}



