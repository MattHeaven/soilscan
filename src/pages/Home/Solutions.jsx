import React from 'react';

const SolutionCard = ({ title, description, imageSrc }) => (
  <div className="flex flex-col items-center text-center">
    <img src={imageSrc} alt={title} className="w-32 h-32 mb-4" />
    <h3 className="font-light text-xl mb-2">{title}</h3>
    <p className="leading-md font-light max-w-1/2">{description}</p>
  </div>
);

const Solutions = () => (
  <section >
    <div className="p-12">
      <h1 className="text-2xl mb-4 text-center">THE SOLUTION</h1>

      <p className="text-center mb-12 w-1/2 mx-auto my-12">
        SoilScan gives millions of farmers across the world eyes to see beyond their soil through AI-powered soil-specific fertilizer recommendations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <SolutionCard
          title="SOIL HEALTH INDEX REGISTRY"
          description="A global, digitized registry that systematically catalogs soil health data using a farm index, making it easier to track soil health for each specific farm. This ensures that each farm receives an independent NPK fertilizer formulation, with manufacturers producing the exact formulation, while also addressing the issue of counterfeit fertilizers through enhanced traceability."
          imageSrc="https://www.soilscan.co.ke/wp-content/uploads/2021/05/icon-green-vs-green.svg"
        />
        <SolutionCard
          title="AI-POWERED NPK FORMULATION"
          description="Advanced AI algorithms generate customized NPK fertilizer formulations based on the specific needs of each farm's soil."
          imageSrc="https://www.soilscan.co.ke/wp-content/uploads/2021/05/icon-green-vs-brown.svg"
        />
        <SolutionCard
          title="CUSTOMIZED FERTILIZER MANUFACTURING"
          description="Collaboration with local manufacturers to produce fertilizers precisely tailored to the nutrient requirements of each farm, ensuring the traceability and authenticity of the products."
          imageSrc="https://www.soilscan.co.ke/wp-content/uploads/2021/05/icon-precise-level-analysis.svg"
        />
      </div>

    </div>
    <div
      className="bg-[url('https://www.soilscan.co.ke/wp-content/uploads/2021/06/back3.png')]
        h-screen bg-cover"
      style={{ backgroundAttachment: "fixed" }}
    />
  </section>
);

export default Solutions;
