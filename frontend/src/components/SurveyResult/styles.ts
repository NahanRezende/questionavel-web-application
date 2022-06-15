import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Results = styled.div`
  padding: 16px;
  width: 100%;
  max-height: 25vh;
  overflow: auto;
`;

export const Result = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  color: #1b2838;

  button {
    margin-left: 24px;
  }
`;
