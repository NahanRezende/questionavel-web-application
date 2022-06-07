import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #c7eff7;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  margin-top: 2rem;
  background: #f3f3f3;
  height: 10rem;
  width: 50rem;
  border: solid;
  border-width: 0.1rem;
  border-color: #4682b4;
  border-radius: 2rem;

  display: flex;
  flex-direction: column;
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

export const Input = styled.input`
  background: #f1f1f1;
  height: 3rem;
  width: 47rem;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  margin-top: 2rem;
  border-radius: 1rem;
  border-width: 0.1rem;
  border-color: #4682b4;
`;

export const QuestionContainer = styled.div`
  margin-top: 2rem;
  background: #f3f3f3;
  height: 14rem;
  width: 50rem;
  border: solid;
  border-width: 0.1rem;
  border-color: #4682b4;
  border-radius: 2rem;

  display: flex;
  flex-direction: column;
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
  height: 4rem;
  width: 47rem;
  margin-right: 1.25rem;
  margin-top: 1.25rem;
  border-radius: 1rem;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`;

export const AnswerButton = styled.input`
  height: 3rem;
  width: 6rem;
  background: #c7eff7;
  border-radius: 1rem;
  border-width: 0.1rem;
  border: solid;
  border-color: #4682b4;
  text-align: center;
  margin-left: 1.5rem;
`;

export const AddAnswerButton = styled.button`
  margin-left: 1rem;
  border: none;
  height: 3rem;
  width: 3rem;
  background: #f3f3f3;
`;

export const AddAnswer = styled.img`
  height: 3rem;
  width: 3rem;
`;
