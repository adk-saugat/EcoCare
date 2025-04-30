const NavBar = () => {
  return (
    <div className="h-20 flex items-center px-6 justify-between">
      <h1
        className="text-3xl font-light w-[20%] cursor-pointer"
        onClick={() => navigate("/")}
      >
        Eco<span className="text-green-600 font-semibold text-3xl">Care</span>
      </h1>
      <nav className="gap-8 w-[70%] items-baseline md:flex hidden">
        <a
          href="#events"
          className="cursor-pointer hover:scale-105 hover:font-semibold hover:text-green-600 decoration-2 duration-100 hover:underline underline-offset-8"
        >
          Events
        </a>

        <a
          href="#challenges"
          className="cursor-pointer hover:scale-105 hover:font-semibold hover:text-green-600 decoration-2 duration-100 hover:underline underline-offset-8"
        >
          Challenges
        </a>
        <a
          href="#learn"
          className="cursor-pointer hover:scale-105 hover:font-semibold hover:text-green-600 decoration-2 duration-100 hover:underline underline-offset-8"
        >
          Learn
        </a>
        <a
          href="#getInvolved"
          className="cursor-pointer hover:scale-105 hover:font-semibold hover:text-green-600 decoration-2 duration-100 hover:underline underline-offset-8"
        >
          Get Involved
        </a>
      </nav>
      <div className="w-[10%]">
        <button className="bg-darkgreen text-white py-1.5 rounded-2xl px-6 font-semibold shadow-lg hover:scale-105 duration-100 cursor-pointer">
          Login
        </button>
      </div>
    </div>
  )
}

export default NavBar
