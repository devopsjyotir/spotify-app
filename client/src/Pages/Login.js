import styled from 'styled-components/macro';
import logoimg from '../assets/unwrapped.png'

const StyledLoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

    .logo {
    width: 30%;
  }
`;

const StyledLoginButton = styled.a`
  display: inline-block;
  background-color: var(--pinkish);
  color: var(--grey);
  border-radius: var(--border-radius-pill);
  font-weight: 700;
  font-size: var(--fz-lg);
  padding: var(--spacing-sm) var(--spacing-xl);

  &:hover,
  &:focus {
    text-decoration: none;
    filter: brightness(1.1);
  }
`;

const LOGIN_URI = process.env.NODE_ENV !== 'production'? 'http://localhost:8888/login':'https://unwrapped-app.herokuapp.com/login'

const Login = () => (
  
<StyledLoginContainer>
  <img src={logoimg} class="logo" alt='logo'/>
  <StyledLoginButton href={LOGIN_URI}>
    Log in with Spotify
  </StyledLoginButton>
  <StyledLoginContainer>
  <h3> Made by Jyotir Tyrese McEwan-Anamoah</h3>
  </StyledLoginContainer>
 
   
 
</StyledLoginContainer>
);

export default Login;