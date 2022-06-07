import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #c7eff7;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  color: #4682b4;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  margin-top: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  color: #4682b4;
  margin-top: 5rem;
`;

export const QuestionContainer = styled.div`
  margin-top: 2rem;
  background: #f3f3f3;
  height: 8rem;
  width: 50rem;
  border: solid;
  border-width: 0.1rem;
  border-color: #4682b4;
  border-radius: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Question = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  color: #4682b4;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  margin-top: 1rem;
`;

export const AnswerButtonContainer = styled.div`
  background: #f3f3f3;
  height: 2rem;
  width: 47rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-top: 1.25rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AnswerButton = styled.button`
  height: 3rem;
  width: 6rem;
  background: #4682b4;
  border-radius: 1rem;
  border: none;
  text-align: center;
`;

export const ExitButton = styled.button`
  margin-top: 2rem;
  height: 2.5rem;
  width: 7rem;
  background: #4682b4;
  border-radius: 1rem;
  border: none;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 800;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  color: #f1f1f1;
`;
