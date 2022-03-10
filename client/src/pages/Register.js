import { useState, useEffect } from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import { Alert, FormRow, Logo } from '../components';
import { useAppContext } from '../context/appContext';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { showAlert, displayAlert } = useAppContext();

  const handleInputChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    console.log(e.target);
  }

  const toggleIsMember = () => {
    setValues((prevState) => ({ ...prevState, isMember: !prevState.isMember }));
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleFormSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
        )}

        <FormRow
          type="email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />

        <FormRow
          type="password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-block">
          Submit
        </button>

        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" onClick={toggleIsMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register