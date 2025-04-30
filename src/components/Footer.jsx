const Footer = () => {
  return (
    <footer className="bg-darkgreen h-fit flex flex-col items-center py-6">
      <h1 className="text-3xl cursor-pointer text-white text-center">
        EcoCare
      </h1>
      <nav className="flex gap-8 text-center mt-4 text-white">
        <a href="#events" className="cursor-pointer">
          Events
        </a>
        <a href="#challenges" className="cursor-pointer">
          Challenges
        </a>
        <a href="#learn" className="cursor-pointer">
          Learn
        </a>
        <a href="#getInvolved" className="cursor-pointer">
          Get Involved
        </a>
      </nav>
      <span className="text-white mt-4 text-sm">
        &copy;copyrights 2025, Created By Saugat Adhikari.
      </span>
    </footer>
  )
}

export default Footer
