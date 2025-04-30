import { useState } from "react"

const Challenges = () => {
  const [completedCount, setCompletedCount] = useState(0)
  const totalTasks = 5

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setCompletedCount((prev) => prev + 1)
    } else {
      setCompletedCount((prev) => prev - 1)
    }
  }

  return (
    <div className="w-screen py-2 md:w-full" id="challenges">
      <h1 className="text-4xl w-full mb-12 text-center text-darkgreen font-semibold">
        Challenges
      </h1>
      <section className="md:flex w-full justify-center md:gap-20 md:items-center grid ">
        <div className="bg-darkgreen p-10 rounded-2xl text-white mb-10">
          <h2 className="text-center text-3xl font-semibold mb-6">
            Daily Progress
          </h2>
          {completedCount < totalTasks ? (
            <p className="text-center text-xl">
              {completedCount}/{totalTasks} Completed
            </p>
          ) : (
            <p className="text-center text-xl"> All tasks completed!</p>
          )}
        </div>
        <div>
          <h2 className="text-center text-3xl font-semibold mb-4 text-darkgreen">
            Checklist
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-5 h-5"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="" className="text-xl font-light">
                Pick 10 pieces of Trash
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-5 h-5"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="" className="text-xl font-light">
                Bring Your Own Bottle
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-5 h-5"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="" className="text-xl font-light">
                Walk or Bike Instead
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-5 h-5"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="" className="text-xl font-light">
                Say No to Plastic Bags
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-5 h-5"
                onChange={handleCheckboxChange}
              />
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
