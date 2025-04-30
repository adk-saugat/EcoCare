import NavBar from "../components/NavBar"
import Home from "../components/Home"
import Events from "../components/Events"
import Challenges from "../components/Challenges"
import Learn from "../components/Learn"
import Footer from "../components/Footer"
import GetInvolved from "../components/GetInvolved"

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Events />
      <div className="grid grid-col-1 gap-10 md:gap-0 md:grid-cols-2">
        <Challenges />
        <GetInvolved />
      </div>
      <Learn />
      <Footer />
    </>
  )
}

export default LandingPage
