import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #171a21;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InsideContainer = styled.div`
  margin-top: 2rem;

  overflow: auto;
  max-width: 40vw;
  height: 85vh;

  min-width: 30vw;
  background: #f7feff;
  padding: 16px 20px;
  border: solid;
  border-width: 0.1rem;
  border-color: #4682b4;
  border-radius: 6px;
`;

export const Counter = styled.div`
  margin-top: 1rem;
  color: #f7feff;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    align-self: flex-start;
  }
`;
