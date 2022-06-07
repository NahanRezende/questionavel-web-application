import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #c7eff7;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  margin-top: 15rem;
  height: 15rem;
  width: 15rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  color: #4682b4;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  margin-top: 0.3rem;
  color: #4682b4;
`;

export const ButtonContainer = styled.div`
  margin-top: 0.8rem;
  width: 30rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
