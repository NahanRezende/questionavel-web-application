import React, { useCallback, useRef, useState } from 'react';
import {
  AiOutlineCheckSquare,
  AiOutlineCloseSquare,
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
} from 'react-icons/all';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import {
  Container,
  QuestionTitle,
  Title,
  InsideContainer,
  AddButton,
  Label,
  StyledInput,
  ButtonsContainer,
} from './styles';
import api from '../../services/api';

interface IAnswer {
  domId?: number;
  answer: string;
}

interface ISurvey {
  question: string;
  answers: IAnswer[];
}

export const CreateSurvey: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [survey, setSurvey] = useState<ISurvey>({
    question: '',
    answers: [
      {
        domId: 0,
        answer: '',
      },
      {
        domId: 1,
        answer: '',
      },
    ],
  });

  const handleReturn = () => {
    history.push('/dashboard');
  };

  const handleAddAnswer = () => {
    const lastAnswer = survey.answers.slice(-1)[0];

    const newSurveys: ISurvey = {
      ...survey,
      answers: [...survey.answers, { domId: lastAnswer.domId + 1, answer: '' }],
    };

    setSurvey(newSurveys);
  };

  const handleRemoveAnswer = () => {
    if (survey.answers.length <= 2) {
      return;
    }

    setSurvey({
      ...survey,
      answers: survey.answers.slice(0, survey.answers.length - 1),
    });
  };

  const handleSubmit = useCallback(
    async (data: any) => {
      const arrayOfData = Object.values(data);
      const fmt: ISurvey = {
        question: arrayOfData.pop() as string,
        answers: arrayOfData.map(a => ({
          answer: a as string,
        })),
      };

      await api.post('/surveys', fmt);

      history.push('/dashboard');
    },
    [history],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Title>Criar</Title>
        <InsideContainer>
          <QuestionTitle>Título do Survey</QuestionTitle>
          <Label htmlFor="title">Título</Label>
          <StyledInput
            type="text"
            placeholder="Título"
            id="title"
            name="title"
          />
        </InsideContainer>
        <InsideContainer>
          <QuestionTitle>Respostas</QuestionTitle>
          {survey.answers.map((answer, index) => (
            <>
              <Label htmlFor={`${index}`}>Resposta</Label>
              <StyledInput
                type="text"
                id={`${index}`}
                name={`${index}`}
                placeholder={`Resposta #${index + 1}`}
                key={answer.domId}
              />
            </>
          ))}
          <ButtonsContainer>
            <div>
              <AddButton type="button" onClick={handleAddAnswer}>
                <AiOutlinePlusSquare color="#F7FEFF" />
              </AddButton>
              <AddButton type="button" onClick={handleRemoveAnswer}>
                <AiOutlineMinusSquare color="#F7FEFF" />
              </AddButton>
            </div>
            <div>
              <AddButton type="button">
                <AiOutlineCloseSquare color="#FF0000" onClick={handleReturn} />
              </AddButton>
              <AddButton type="submit">
                <AiOutlineCheckSquare color="#00FF00" />
              </AddButton>
            </div>
          </ButtonsContainer>
        </InsideContainer>
      </Form>
    </Container>
  );
};
