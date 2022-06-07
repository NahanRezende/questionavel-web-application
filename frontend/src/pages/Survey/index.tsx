import React from 'react';
import {
  Container,
  QuestionTitle,
  Title,
  QuestionContainer,
  Question,
  AnswerButtonContainer,
  AnswerButton,
  ExitButton,
} from './styles';

export const Survey: React.FC = () => {
  return (
    <Container>
      <Title>Pagina da Pesquisa</Title>

      <QuestionTitle>O que voce quer fazer?</QuestionTitle>

      <QuestionContainer>
        <Question>Esta é a sua Pergunta ?</Question>
        <AnswerButtonContainer>
          <AnswerButton />
          <AnswerButton />
          <AnswerButton />
          <AnswerButton />
          <AnswerButton />
        </AnswerButtonContainer>
      </QuestionContainer>
      <ExitButton>Concluir</ExitButton>
    </Container>
  );
};
