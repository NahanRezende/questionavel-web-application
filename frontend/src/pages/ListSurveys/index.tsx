import React, { useEffect, useState } from 'react';
import { Container, InsideContainer } from './styles';
import api from '../../services/api';
import Survey from '../../components/Survey';

interface ISurvey {
  id: string;
  accountId: string;
  question: string;
  surveyResults: {
    answer: string;
    accountId: string;
  }[];
  answers: {
    answer: string;
  }[];
  didAnswer: boolean;
}

export const ListSurveys: React.FunctionComponent = () => {
  const [surveys, setSurveys] = useState<ISurvey[]>();

  useEffect(() => {
    api
      .get('/surveys')
      .then(response => {
        setSurveys(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      {surveys ? (
        <InsideContainer>
          {surveys && surveys.map(s => <Survey survey={s} />)}
        </InsideContainer>
      ) : (
        <InsideContainer>
          <p>Não há surveys ainda</p>
        </InsideContainer>
      )}
    </Container>
  );
};
