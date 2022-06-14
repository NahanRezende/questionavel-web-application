import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #c7eff7;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InsideContainer = styled.div`
  margin-top: 2rem;

  width: 50vw;

  background: #f3f3f3;
  padding: 16px 20px;
  border: solid;
  border-width: 0.1rem;
  border-color: #4682b4;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
`;
