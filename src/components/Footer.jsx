const Footer = () => {
  return (
    <footer className="bg-darkgreen h-fit flex flex-col items-center py-6">
      <h1 className="text-3xl cursor-pointer text-white text-center">
        EcoCare
      </h1>
      <nav className="flex gap-8 text-center mt-4 text-white">
        <p className="cursor-pointer">Events</p>
        <p className="cursor-pointer">Challenges</p>
        <p className="cursor-pointer">Learn</p>
        <p className="cursor-pointer">Get Involved</p>
      </nav>
      <span className="text-white mt-4 text-sm">
        &copy;copyrights 2025, Created By Saugat Adhikari.
      </span>
    </footer>
  )
}

export default Footer
