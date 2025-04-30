import BgHome from "../assets/bghome.jpg"
const Home = () => {
  return (
    <div className="md:flex items-center mt-10 mb-24">
      <div className="md:w-[50%] px-4 md:pl-10 flex justify-end flex-col">
        <div>
          <h1 className="text-7xl font-semibold text-darkgreen">
            Cleaner Communities Start With You!
          </h1>
          <p className="mt-4 text-gray-600 ">
            EcoCare connects communities through local cleanups and eco
            challenges. Take action, learn sustainable habits, and make your
            neighborhood cleaner - one step at a time.
          </p>
        </div>

        <div className="m-10 flex gap-8">
          <a
            href="#events"
            className="bg-darkgreen text-white py-3 rounded-2xl px-5 font-semibold shadow-lg hover:scale-105 duration-100 cursor-pointer"
          >
            Join Cleanup
          </a>
          <a
            href="#learn"
            className="bg-lightgreen text-white py-3 rounded-2xl px-5 font-semibold shadow-lg hover:scale-105 duration-100 cursor-pointer"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="md:w-[50%] flex justify-center">
        <img
          src={BgHome}
          alt=""
          className="md:w-[500px] rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  )
}

export default Home
