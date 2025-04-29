const Learn = () => {
  return (
    <div className="p-8 my-10 flex flex-col justify-center" id="learn">
      <h1 className="text-4xl w-full mb-12 font-semibold text-darkgreen">
        Learn More About The Environment
      </h1>
      <section className="grid grid-cols-4 gap-6">
        <div className="flex flex-col text-gray-700 shadow-2xl">
          <section className="bg-darkgreen text-white p-4 rounded-2xl h-[350px] flex flex-col">
            <div className="h-[80%] overflow-hidden">
              <h2 className="text-3xl font-semibold ">
                Climate Change & Global Warming
              </h2>
              <p className="text-sm mt-4">
                Climate change, driven primarily by the accumulation of
                greenhouse gases like CO₂, methane, and nitrous oxide, leads to
                rising global temperatures. This results in severe weather
                events, melting polar ice, and disruptions to ecosystems
                worldwide
              </p>
            </div>
            <div className="text-right h-[20%] flex items-end justify-end">
              <a
                target="_blank"
                href="https://earth.org/the-biggest-environmental-problems-of-our-lifetime/?utm_source=chatgpt.com"
                className="cursor-pointer hover:scale-110 duration-100 hover:underline underline-offset-4 decoration-white"
              >
                Visit Page
              </a>
            </div>
          </section>
        </div>
        <div className="flex flex-col text-gray-700 shadow-2xl">
          <section className="bg-darkgreen text-white p-4 rounded-2xl h-[350px] flex flex-col">
            <div className="h-[80%] overflow-hidden">
              <h2 className="text-3xl font-semibold ">Biodiversity Loss </h2>
              <p className="text-sm mt-4">
                Human activities such as deforestation, pollution, and
                overexploitation of resources have led to a significant decline
                in biodiversity. This loss threatens ecosystem stability, food
                security, and increases the risk of pandemics.
              </p>
            </div>
            <div className="text-right h-[20%] flex items-end justify-end">
              <a
                target="_blank"
                href="https://www.iberdrola.com/sustainability/biodiversity-loss?utm_source=chatgpt.com"
                className="cursor-pointer hover:scale-110 duration-100 hover:underline underline-offset-4 decoration-white"
              >
                Visit Page
              </a>
            </div>
          </section>
        </div>
        <div className="flex flex-col text-gray-700 shadow-2xl">
          <section className="bg-darkgreen text-white p-4 rounded-2xl h-[350px] flex flex-col">
            <div className="h-[80%] overflow-hidden">
              <h2 className="text-3xl font-semibold ">
                Plastic and Chemical Pollution
              </h2>
              <p className="text-sm mt-3">
                The pervasive use of plastics and chemicals has resulted in
                widespread pollution of land and waterways. Substances like
                PFAS, known as "forever chemicals," persist in the environment
                and pose health risks to humans and wildlife.
              </p>
            </div>
            <div className="text-right h-[20%] flex items-end justify-end">
              <a
                target="_blank"
                href="https://www.theguardian.com/commentisfree/2025/mar/10/forever-chemicals-pfas-mark-ruffalo?utm_source=chatgpt.com"
                className="cursor-pointer hover:scale-110 duration-100 hover:underline underline-offset-4 decoration-white"
              >
                Visit Page
              </a>
            </div>
          </section>
        </div>
        <div className="flex flex-col text-gray-700 shadow-2xl">
          <section className="bg-darkgreen text-white p-4 rounded-2xl h-[350px] flex flex-col">
            <div className="h-[80%] overflow-hidden">
              <h2 className="text-3xl font-semibold twz ">
                Water Pollution & Scarcity
              </h2>
              <p className="text-sm mt-4">
                Water bodies are increasingly contaminated by pollutants such as
                sewage, industrial waste, and agricultural runoff. This not only
                affects aquatic life but also compromises the availability of
                clean drinking water for human populations.​
              </p>
            </div>
            <div className="text-right h-[20%] flex items-end justify-end">
              <a
                target="_blank"
                href="https://www.iberdrola.com/sustainability/water-pollution?utm_source=chatgpt.com"
                className="cursor-pointer hover:scale-110 duration-100 hover:underline underline-offset-4 decoration-white"
              >
                Visit Page
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Learn
