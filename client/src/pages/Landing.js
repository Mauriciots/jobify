import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="Jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Job <span>Tracking</span> App</h1>
          <p>
            I'm baby kale chips ramps put a bird on it waistcoat. Forage selvage organic vape, 
            paleo wolf microdosing plaid 90's irony marfa distillery pabst next level gastropub.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="Job Hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing