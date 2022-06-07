import React from 'react';
import {
  Container,
  QuestionTitle,
  Title,
  TitleContainer,
  Input,
  QuestionContainer,
  Question,
  AnswerButtonContainer,
  AnswerButton,
  AddAnswer,
  AddAnswerButton,
} from './styles';

import AddImg from '../../assets/add_icon.png';

export const CreateSurvey: React.FC = () => {
  return (
    <Container>
      <Title>Crie sua Pesquisa</Title>
      <TitleContainer>
        <QuestionTitle>Digite aqui o nome da sua pesquisa:</QuestionTitle>
        <Input type="text" placeholder=" O nome da sua pesquisa!" />
      </TitleContainer>
      <QuestionContainer>
        <Question>Digite aqui a sua pergunta:</Question>
        <Input type="text" placeholder=" Sua pergunta!" />
        <AnswerButtonContainer>
          <AnswerButton />
          <AnswerButton />
          <AnswerButton />
          <AnswerButton />
          <AnswerButton />
          <AddAnswerButton>
            <AddAnswer src={AddImg} />
          </AddAnswerButton>
        </AnswerButtonContainer>
      </QuestionContainer>
    </Container>
  );
};
