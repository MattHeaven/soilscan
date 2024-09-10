function Problems() {

  const ProblemCard = ({ title, description, imageSrc }) => (
    <div className="flex flex-col items-center text-center">
      <img src={imageSrc} alt={title} className="w-16 h-16 mb-2" />
      <h3 className=" mb-2 text-xl">{title}</h3>
      <p className="font-light">{description}</p>
    </div>
  );
  return (
    <>
      <section className="h-screen text-white p-12 px-14  bg-[#003232]">
        <h1 className="text-2xl font-semibold mb-4 text-center">THE PROBLEM</h1>

        <h2 className="text-xl font-semibold mb-4 text-center">
          Social Degradation is a leading Cause of Declining Crop Yields Globally.
        </h2>

        <p className="text-center my-12 px-12">
          12 Million hectares of agricultural soils are lost globally through soil degradation every year. Each year, the global agricultural sector loses approximately $6 billion to $7 billion due to counterfeit fertilizers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ProblemCard
            title="SOIL DEGRADATION"
            description="33% of global arable land has been degraded, threatening world food security."
            imageSrc="https://www.soilscan.co.ke/wp-content/uploads/2021/06/degradation-soil.png"
          />
          <ProblemCard
            title="SOIL HEALTH MEASUREMENT"
            description="Lack of the necessary measurement infrastructure."
            imageSrc="https://www.soilscan.co.ke/wp-content/uploads/2021/06/soi-health.png"
          />
          <ProblemCard
            title="INEFFICIENT FERTILIZER MANUFACTURING"
            description="Fertilizer production remains disconnected from the specific needs of individual farms due to the absence of precise soil data."
            imageSrc="https://www.soilscan.co.ke/wp-content/uploads/2021/06/fertilizer.png"
          />
          <ProblemCard
            title="VULNERABILITY TO COUNTERFEIT FERTILIZERS"
            description="Absence of a digitized farm and soil registry enables the proliferation of counterfeit fertilizers within the supply chain."
            imageSrc="https://www.soilscan.co.ke/wp-content/uploads/2021/06/danger-fertlizer.png"
          />
        </div>
      </section>
      <div
        className="bg-[url('https://img.freepik.com/premium-photo/asian-farmer…ate-rice-wet-season-ai-generative_551405-3586.jpg')]
        h-screen bg-cover"
        style={{ backgroundAttachment: "fixed" }}
      />

    </>
  )

}


export default Problems;
