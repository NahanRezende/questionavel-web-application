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

  height: 90vh;
  overflow: auto;

  background: #f7feff;
  padding: 16px 20px;
  border: solid;
  border-width: 0.1rem;
  border-color: #4682b4;
  border-radius: 6px;
`;
