
function Hero({ Meta, Title, description, image, section2 }) {
  return (
    <section style={{ backgroundImage: `url(${image})`, backgroundAttachment: "fixed" }} className="relative h-screen bg-cover bg-center z-0">
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-2 flex flex-col items-center justify-center h-full p-8 text-center">
        <div className="shadow-md bg-neutral-950/50 p-8 w-2/4 h-3/4 space-y-8">
          <h1 className="text-5xl font-bold text-white ">{Meta}</h1>
          <h1 className="text-white text-3xl font-bold mb-4">{Title}</h1>
          <p className="text-white leading-loose text-lg">{description}</p>
        </div>
      </div>
      <a href={section2}>
        <div className="scrolldown absolute bottom-20 scale-[0.8] left-1/2 -translate-x-1/2">

          <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
          </div>
        </div>
      </a>


    </section>
  );
}

export default Hero;

