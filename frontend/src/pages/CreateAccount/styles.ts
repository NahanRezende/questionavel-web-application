import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    117.57deg,
    rgba(5, 37, 69, 0.71) 0%,
    rgba(71, 151, 229, 0.788632) 78.42%,
    rgba(81, 167, 252, 0.8) 97.92%,
    rgba(81, 167, 252, 0.8) 97.92%
  );
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
  background: red;

  flex-wrap: wrap;
  width: 30rem;
  height: 30rem;

  padding: 2.25rem;

  background: #dbdbdb;
  border-radius: 0.625rem;
  box-shadow: 0.625rem 0.625rem 0.25rem rgba(0, 0, 0, 0.25);

  @media (max-width: 50rem) {
    width: 20rem;
  }
`;

export const Logo = styled.img`
  margin-top: -0.4rem;
  margin-bottom: -1.175rem;

  @media (max-width: 1900px) {
    margin-top: -0.3rem;
  }

  @media (max-width: 1800px) {
    margin-top: -0.33rem;
  }

  @media (max-width: 1700px) {
    margin-top: -0.3rem;
  }

  @media (max-width: 450px) {
    margin-top: -0.4rem;
  }
`;

export const ContainerResetPassword = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 1.5rem;
`;

export const Title = styled.text`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.125rem;
  color: #494949;
  /* margin-top: 1.375rem; */
`;

export const Separator = styled.div`
  width: 8rem;
  border-top: 0.5px solid #9d9d9d;
`;

export const Label = styled.label`
  color: #063966;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  text-align: start;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const Back = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    color: #174c82;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 0.9rem;

    transform: color 0.2s;
    text-align: center;
  }
`;
