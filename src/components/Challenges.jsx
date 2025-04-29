const Challenges = () => {
  return (
    <div className="py-2" id="challenges">
      <h1 className="text-4xl w-full mb-12 text-center text-darkgreen font-semibold">
        Challenges
      </h1>
      <section className="flex w-full justify-center gap-20 items-center">
        <div className="bg-darkgreen p-10 rounded-2xl text-white">
          <h2 className="text-center text-3xl font-semibold mb-6">
            Daily Progress
          </h2>
          <p className="text-center">0/5 Completed</p>
        </div>
        <div>
          <h2 className="text-center text-3xl font-semibold mb-4 text-darkgreen">
            Checklist
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 bg-">
              <input type="checkbox" className="w-5 h-5" />
              <label htmlFor="" className="text-xl font-light">
                Pick 10 pieces of Trash
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5" />
              <label htmlFor="" className="text-xl font-light">
                Bring Your Own Bottle
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5" />
              <label htmlFor="" className="text-xl font-light">
                Walk or Bike Instead
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5" />
              <label htmlFor="" className="text-xl font-light">
                Say No to Plastic Bags
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5" />
              <label htmlFor="" className="text-xl font-light">
                Unplug to Save Energy
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Challenges
