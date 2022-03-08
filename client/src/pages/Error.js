import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="This page wasn't found" />
        <h3>Oops! Page Not Found</h3>
        <p>We can't seem to find the page you are looking for</p>
        <Link to="/">Back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error