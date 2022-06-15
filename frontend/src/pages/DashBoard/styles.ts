import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #171a21;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  margin-top: 15vh;
  margin-bottom: 1rem;
  width: 15rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  font-family: 'Poppins', monospace;
  text-align: center;
  color: #f7feff;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Poppins', monospace;
  text-align: center;
  margin-top: 0.3rem;
  color: #f7feff;
`;

export const ButtonContainer = styled.div`
  margin-top: 0.8rem;
  width: 40rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
