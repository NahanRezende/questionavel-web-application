import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100vw;
  height: 100vh;

  background: #171a21;

  background-blend-mode: multiply;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  width: 30rem;
  height: 26rem;

  padding: 2.25rem;

  background: #2a475e;
  border-radius: 0.625rem;
  box-shadow: 0.625rem 0.625rem 0.25rem rgba(0, 0, 0, 0.25);

  @media (max-width: 50rem) {
    width: 20rem;
  }
`;

export const Logo = styled.img`
  @media (max-width: 1800px) {
    margin-top: -0.05rem;
  }
  @media (max-width: 1700px) {
    margin-top: 0;
  }
`;

export const Label = styled.label`
  color: #4682b4;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  text-align: start;
`;

export const ForgotPasswordAndErrorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 1.063rem;
`;

export const ForgotPasswordContainer = styled.div`
  p {
    color: #4682b4;
  }
`;

export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.7rem;

  text-align: center;
`;

export const ErrorContainer = styled.div`
  p {
    color: #e64438;
  }
`;
